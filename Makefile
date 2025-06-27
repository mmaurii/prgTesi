# MiniSL Processor Makefile for Windows
# Usage: make [target]
# Requires: Node.js, npm, make (or nmake)

.PHONY: help install build clean extract annotate check pipeline install-extractor install-annotator install-checker build-extractor build-annotator build-checker

# Default target
help:
	@echo MiniSL Processor - Available targets:
	@echo.
	@echo   help           - Show this help message
	@echo   install        - Install all dependencies
	@echo   build          - Build all components
	@echo   clean          - Clean all build artifacts
	@echo.
	@echo Individual component operations:
	@echo   install-extractor   - Install extractor dependencies
	@echo   install-annotator   - Install annotator dependencies
	@echo   install-checker     - Install checker dependencies
	@echo   build-extractor     - Build extractor
	@echo   build-annotator     - Build annotator
	@echo   build-checker       - Build checker
	@echo.
	@echo Execution targets:
	@echo   extract        - Run extractor on annotator/output.txt (saves output to output.txt)
	@echo   annotate       - Run annotator on input.ts with entry point (saves output to output.txt)
	@echo   check          - Run checker on extractor output (output.txt)
	@echo   check-standalone - Run checker on default miniSLCode.txt
	@echo   pipeline       - Run complete pipeline (annotate -^> extract -^> check)
	@echo.
	@echo Additional options:
	@echo   INPUT_FILE=^<path^>     - Specify input file (partially annotated)
	@echo   ENTRY_POINT=^<name^>    - Specify entry point for annotator and extractor

# Default variables  
INPUT_FILE_EXTRACTOR ?= ./../annotator/output.txt
INPUT_FILE_ANNOTATOR ?= ./inputCode/input.ts
ENTRY_POINT ?= main

# Install all dependencies
install: install-root install-extractor install-annotator install-checker
	@echo All dependencies installed successfully

install-root:
	@echo Installing root dependencies...
	npm install

install-extractor:
	@echo Installing extractor dependencies...
	@cd extractor && npm install

install-annotator:
	@echo Installing annotator dependencies...
	@cd annotator && npm install

install-checker:
	@echo Installing checker dependencies...
	@cd miniSLChecker && npm install

# Build all components
build: build-extractor build-annotator build-checker
	@echo All components built successfully

build-extractor:
	@echo Building extractor...
	@cd extractor && npm run build

build-annotator:
	@echo Building annotator...
	@cd annotator && npm run build

build-checker:
	@echo Building checker...
	@cd miniSLChecker && npm run build

# Clean build artifacts (Windows PowerShell compatible)
clean:
	@echo Cleaning build artifacts...
	@if exist extractor\dist rmdir /s /q extractor\dist
	@if exist annotator\dist rmdir /s /q annotator\dist
	@if exist miniSLChecker\dist rmdir /s /q miniSLChecker\dist
	@if exist node_modules rmdir /s /q node_modules
	@if exist extractor\node_modules rmdir /s /q extractor\node_modules
	@if exist annotator\node_modules rmdir /s /q annotator\node_modules
	@if exist miniSLChecker\node_modules rmdir /s /q miniSLChecker\node_modules
	@echo Clean completed

# Execution targets
extract:
	@echo Running extractor on $(INPUT_FILE_EXTRACTOR)...
	@cd extractor && node dist\extractor.js $(INPUT_FILE_EXTRACTOR) $(ENTRY_POINT)

annotate:
	@echo Running annotator on $(INPUT_FILE_ANNOTATOR) with entry point $(ENTRY_POINT)...
	@cd annotator && node dist\annotator.js $(INPUT_FILE_ANNOTATOR) $(ENTRY_POINT)

check:
	@echo Running checker on extractor output...
	@cd miniSLChecker && if exist ..\extractor\output.txt (copy ..\extractor\output.txt miniSLCode.txt >nul) else (echo Error: output.txt not found from extractor && exit /b 1)
	@cd miniSLChecker && node dist\checker.js

check-standalone:
	@echo Running checker on default miniSLCode.txt...
	@cd miniSLChecker && node dist\checker.js

# Complete pipeline
pipeline: build
	@echo Running complete MiniSL pipeline...
	@echo Step 1: Annotating (partial annotations to complete annotations)...
	$(MAKE) annotate INPUT_FILE=$(INPUT_FILE_ANNOTATOR) ENTRY_POINT=$(ENTRY_POINT)
	@echo Step 2: Extracting (complete annotations to MiniSL code with integrated checking)...
	$(MAKE) extract ENTRY_POINT=$(ENTRY_POINT)
	@echo Step 3: Final syntax checking with checker...
	$(MAKE) check
	@echo Pipeline completed successfully - MiniSL code generated, checked, and verified

# Setup - Install and build everything
setup: install build
	@echo Setup completed successfully

# Quick development targets
dev-extractor: build-extractor extract

dev-annotator: build-annotator annotate

dev-checker: build-checker check

# Test individual components
test: build
	@echo Testing all components...
	@echo Testing annotator...
	$(MAKE) annotate
	@echo Testing extractor...
	$(MAKE) extract
	@echo Testing checker...
	$(MAKE) check
	@echo Testing standalone checker...
	$(MAKE) check-standalone
	@echo All tests completed
