"use strict";
// This script checks for recursive functions in a call graph.
// It uses a depth-first search (DFS) approach to detect cycles in the graph.
// If a function calls itself directly or indirectly, it is considered recursive.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecursionChecker = exports.CallGraph = void 0;
var CallGraph = /** @class */ (function () {
    function CallGraph() {
        this.graph = {};
    }
    CallGraph.prototype.addFunction = function (name) {
        if (!this.graph[name]) {
            this.graph[name] = new Set();
        }
    };
    CallGraph.prototype.addCall = function (from, to) {
        this.addFunction(from);
        this.addFunction(to);
        this.graph[from].add(to);
    };
    CallGraph.prototype.getCalls = function (functionName) {
        return this.graph[functionName] || new Set();
    };
    CallGraph.prototype.print = function () {
        var result = "Call Graph:\n";
        for (var fn in this.graph) {
            result += "".concat(fn, " -> ").concat(Array.from(this.graph[fn]).join(", "), "\n");
        }
        return result;
    };
    CallGraph.prototype.getItem = function (key) {
        return this.graph[key] || new Set();
    };
    return CallGraph;
}());
exports.CallGraph = CallGraph;
var RecursionChecker = /** @class */ (function () {
    function RecursionChecker(annotations, config) {
        this.config = config;
        this.annotations = annotations;
        this.callGraph = new CallGraph();
        this.buildCallGraph(); // Build the call graph from the annotations
    }
    RecursionChecker.prototype.haveRecursiveFunction = function (functionName) {
        var stack = [functionName];
        var visited = new Set();
        while (stack.length > 0) {
            var currentFunction = stack.pop();
            if (visited.has(currentFunction)) {
                return true;
            }
            visited.add(currentFunction);
            var calledFunctions = this.callGraph.getItem(currentFunction);
            calledFunctions.forEach(function (calledFunction) {
                stack.push(calledFunction);
            });
        }
        return false;
    };
    RecursionChecker.prototype.buildCallGraph = function () {
        //counters for the opened and closed statements '{ and }'
        var indentLevel = [];
        for (var i = 0; i < this.annotations.length; i++) {
            //selecting the unspaced annotation controlStatements
            var annotatedLine = this.annotations[i];
            var miniSLComment = this.config.startAnnotation + " " + this.config.miniSLID + ":";
            //selecting the annotation
            var startIndex = annotatedLine.indexOf(miniSLComment) + miniSLComment.length;
            var endIndex = this.config.endAnnotation.length > 0 ? annotatedLine.indexOf(this.config.endAnnotation, startIndex) : annotatedLine.length;
            var ann = annotatedLine.substring(startIndex, endIndex).trim();
            //start to identify the controlStatements type
            endIndex = ann.indexOf("(");
            if (endIndex === -1) {
                //check if the annotation is a control statement
                if (ann === this.config.controlStatements.end) {
                    indentLevel.pop();
                }
            }
            else {
                //selecting the parameters of the controlStatements 
                startIndex = endIndex + 1;
                ann = ann.substring(0, startIndex - 1);
                ann = ann.replace(/\s/g, "");
                if (ann.startsWith(this.config.controlStatements.function)) {
                    var fnName = ann.substring(this.config.controlStatements.function.length);
                    indentLevel.push(fnName);
                    this.callGraph.addFunction(fnName);
                }
                else if (ann.startsWith(this.config.controlStatements.invoke + "main")) {
                    indentLevel.push("main");
                    this.callGraph.addFunction("main");
                }
                else if (ann.startsWith(this.config.controlStatements.invoke)) {
                    var fnName = ann.substring(this.config.controlStatements.invoke.length);
                    this.callGraph.addCall(indentLevel[indentLevel.length - 1], fnName);
                }
                else if (ann === this.config.controlStatements.if || ann === this.config.controlStatements.for) {
                    //check if the annotation is a control statement
                    indentLevel.push(indentLevel[indentLevel.length - 1]);
                }
            }
        }
    };
    RecursionChecker.prototype.printCallGraph = function () {
        console.log(this.callGraph.print());
    };
    return RecursionChecker;
}());
exports.RecursionChecker = RecursionChecker;
//# sourceMappingURL=recursionChecker.js.map