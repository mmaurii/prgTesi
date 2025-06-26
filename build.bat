@echo off
REM MiniSL Processor Build Script for Windows
REM Usage: build.bat [command]

if "%1"=="" goto help
if "%1"=="help" goto help
if "%1"=="install" goto install
if "%1"=="build" goto build
if "%1"=="clean" goto clean
if "%1"=="extract" goto extract
if "%1"=="annotate" goto annotate
if "%1"=="check" goto check
if "%1"=="check-standalone" goto check-standalone
if "%1"=="pipeline" goto pipeline
if "%1"=="setup" goto setup
goto help

:help
echo MiniSL Processor - Available commands:
echo.
echo   help           - Show this help message
echo   install        - Install all dependencies
echo   build          - Build all components
echo   clean          - Clean all build artifacts
echo   setup          - Install and build everything
echo.
echo   annotate       - Run annotator (partial to complete annotations)
echo   extract        - Run extractor (saves MiniSL code to output.txt)
echo   check          - Run checker on extractor output (output.txt)
echo   check-standalone - Run checker on default miniSLCode.txt
echo   pipeline       - Run complete pipeline (annotate -^> extract -^> check)
echo.
echo Usage examples:
echo   build.bat setup
echo   build.bat pipeline
echo   build.bat annotate
goto end

:install
echo Installing all dependencies...
call npm install
cd extractor && call npm install && cd ..
cd annotator && call npm install && cd ..
cd miniSLChecker && call npm install && cd ..
echo All dependencies installed successfully
goto end

:build
echo Building all components...
cd extractor && call npm run build && cd ..
cd annotator && call npm run build && cd ..
cd miniSLChecker && call npm run build && cd ..
echo All components built successfully
goto end

:clean
echo Cleaning build artifacts...
if exist extractor\dist rmdir /s /q extractor\dist
if exist annotator\dist rmdir /s /q annotator\dist
if exist miniSLChecker\dist rmdir /s /q miniSLChecker\dist
if exist node_modules rmdir /s /q node_modules
if exist extractor\node_modules rmdir /s /q extractor\node_modules
if exist annotator\node_modules rmdir /s /q annotator\node_modules
if exist miniSLChecker\node_modules rmdir /s /q miniSLChecker\node_modules
echo Clean completed
goto end

:annotate
echo Running annotator...
cd annotator && node dist\annotator.js .\inputCode\overviewExample.ts && cd ..
goto end

:extract
echo Running extractor (saves output to output.txt)...
cd extractor && node dist\extractor.js ..\annotatedCode\overviewExample.ts main && cd ..
goto end

:check
echo Running checker on extractor output...
cd miniSLChecker && (
    if exist ..\extractor\output.txt (
        copy ..\extractor\output.txt miniSLCode.txt >nul
        echo Copied output.txt to miniSLCode.txt for checking
    ) else (
        echo Error: output.txt not found from extractor
        cd ..
        goto error
    )
) && node dist\checker.js && cd ..
goto end

:check-standalone
echo Running checker on default miniSLCode.txt...
cd miniSLChecker && node dist\checker.js && cd ..
goto end

:pipeline
echo Running complete MiniSL pipeline...
call %0 build
if errorlevel 1 goto error
echo Step 1: Annotating (partial to complete annotations)...
call %0 annotate
if errorlevel 1 goto error
echo Step 2: Extracting (complete annotations to MiniSL code)...
cd extractor && node dist\extractor.js ..\annotator\output.ts main && cd ..
if errorlevel 1 goto error
echo Step 3: Final syntax checking with checker...
call %0 check
if errorlevel 1 goto error
echo Pipeline completed successfully - MiniSL code generated, checked, and verified
goto end

:setup
echo Setting up MiniSL Processor...
call %0 install
if errorlevel 1 goto error
call %0 build
if errorlevel 1 goto error
echo Setup completed successfully
goto end

:error
echo Error occurred during execution
exit /b 1

:end
echo Done.
