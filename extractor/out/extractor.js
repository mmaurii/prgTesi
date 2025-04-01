"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var acorn = require("acorn");
var process_1 = require("process");
var recursionChecker_js_1 = require("./recursionChecker.js");
//import { Config } from './config.js';
function readFile(path) {
    return __awaiter(this, void 0, void 0, function () {
        var data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fs.promises.readFile(path, 'utf-8')];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, data];
                case 2:
                    error_1 = _a.sent();
                    console.error('Error while reading the file:\n', error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
var Extractor = /** @class */ (function () {
    function Extractor() {
        this.miniSLServices = "";
        this.miniSLFunctionCode = new Map();
        this.extractorConfigFilePath = './extractorConfig.json';
        this.annotatedCodeFilePath = "./annotatedCode/inputRecursive.ts";
        //flag to stop finding function annotations
        this.endOfAnnotation = true;
    }
    Extractor.prototype.extract = function () {
        return __awaiter(this, arguments, void 0, function (path) {
            var miniSLCode, _a, _b, _c, lines, recursionChecker, indentedCode;
            var _this = this;
            if (path === void 0) { path = this.annotatedCodeFilePath; }
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        miniSLCode = "\n";
                        //ogetto contenente le configurazioni con cui sono state codificate le annotazioni
                        _a = this;
                        _c = (_b = JSON).parse;
                        return [4 /*yield*/, readFile(this.extractorConfigFilePath)];
                    case 1:
                        //ogetto contenente le configurazioni con cui sono state codificate le annotazioni
                        _a.config = _c.apply(_b, [_d.sent()]);
                        return [4 /*yield*/, readFile(path)];
                    case 2:
                        lines = (_d.sent()).split("\n");
                        // filter the lines that contain the annotations
                        this.annotations = lines.filter(function (line) { return _this.findAnnotation(line, _this.config.miniSLID, _this.config.startAnnotation, _this.config.endAnnotation); });
                        if (this.annotations.length === 0) {
                            console.error("Annotations not found in the file");
                            return [2 /*return*/];
                        }
                        try {
                            recursionChecker = new recursionChecker_js_1.RecursionChecker(this.annotations, this.config);
                            recursionChecker.printCallGraph();
                            if (recursionChecker.haveRecursiveFunction("main")) {
                                console.error("Recursion detected in the code");
                                return [2 /*return*/];
                            }
                            //Reading the function annotations and saveing the relative miniSL code in a map
                            this.findFunctionAnnotations();
                            //Reading the main annotation and generating miniSL code
                            miniSLCode += this.readAnnotations().join("");
                            //adding the miniSL services to the miniSL code
                            miniSLCode = this.miniSLServices + miniSLCode;
                            indentedCode = this.indentMiniSLCode(miniSLCode);
                            console.log(indentedCode);
                        }
                        catch (error) {
                            console.error("Error while extracting the code: \n", error);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * This function takes a for guard and generates the miniSL code
     * @param params for guard, the params are the iterator variable and the number of iteration
     * @returns miniSL code for the for statement in a string format
     */
    Extractor.prototype.writeFor = function (params) {
        var variables = params.split(",");
        var regex = /^[a-zA-Z]+[a-zA-Z0-9]*$/;
        if (variables.length !== 2) {
            throw new Error("Invalid number of parameter passed to for statement");
        }
        if (!variables[0].match(regex)) {
            throw new Error("for's first parameter must be an iterator variable (i.e. i)");
        }
        var ast = acorn.parse(variables[1], { ecmaVersion: 2020 });
        //check if the second parameter is an arithmetic expression
        if (this.checkArithmeticExpression(ast)) {
            return "for(".concat(variables[0], " in range(0, ").concat(variables[1], ")) {\n");
        }
        else {
            throw new Error("the second parameter of for statement must be an expression that result in a number");
        }
    };
    /**
     * This function takes an if guard and generates the miniSL code
     * @param guards if guard, the guards are the conditions that must be satisfied to execute the code inside the if statement
     * @returns miniSL code for the if statement in a string format
     */
    Extractor.prototype.writeIf = function (guards) {
        var regex = /[a-zA-Z]+[a-zA-Z0-9]*\(.*?\)$/;
        var ast;
        try {
            ast = acorn.parse(guards, { ecmaVersion: 2020 });
        }
        catch (error) {
            throw new Error("Invalid if guards");
        }
        //check if the guard is a valid expression
        if (this.checkExpression(ast, true)) {
            return "if(".concat(guards, ") {\n");
        }
        else {
            //check if the guard is a call to a an extrernal service
            if (guards.match(regex)) {
                var startIndex = guards.indexOf("(") + 1;
                var endIndex = guards.lastIndexOf(")");
                var param = guards.slice(startIndex, endIndex);
                var fnName = guards.slice(0, guards.indexOf("("));
                var ifGuard = this.writeCall(fnName, param);
                return "if(".concat(ifGuard, ") {\n");
            }
            else {
                throw new Error("Invalid if guards");
            }
        }
    };
    /**
     * This function generates the miniSL code for the else statement
     * @returns miniSL code for the else statement in a string format
     */
    Extractor.prototype.writeElse = function () {
        return "} else {\n";
    };
    /**
     * This function takes a service name and its input parameters and generates the miniSL code associated
     * @param serviceName the name of the service to call
     * @param params input parameters of the service
     * @returns miniSL code for the call statement in a string format
     */
    Extractor.prototype.writeCall = function (serviceName, params) {
        var variables = params.split(",");
        var regex = /\(.*?\)$/;
        for (var i = 0; i < variables.length; i++) {
            //verify if the parameter is an expression
            if (variables[i].match(regex)) {
                var ast = acorn.parse(variables[i], { ecmaVersion: 2020 });
                //check if the parameter is a valid expression: arithmetic or boolean
                if (!this.checkExpression(ast, false)) {
                    throw new Error("Error: call can'take Function as parameter or invalid expression ");
                }
            }
        }
        //check if the service is already defined
        if (!this.miniSLServices.includes("".concat(serviceName))) {
            this.miniSLServices += "service ".concat(serviceName, " : (void) -> void;\n");
        }
        return "call ".concat(serviceName, "(").concat(params, ")");
    };
    /**
     * This function takes the input parameters of the main function and generates the miniSL code associated
     * @param params input parameters of the miniSL main function
     * @returns miniSL code for the main function in a string format
     */
    Extractor.prototype.writeMain = function (params) {
        if (params.charAt(params.length - 1) === "," || params.charAt(0) === ",") {
            throw new Error("Invalid syntax main can't have empty parameters");
        }
        var variables = params.split(",");
        var regex = /^[a-zA-Z]*[a-zA-Z0-9]*$/;
        var variablesMapped = variables.map(function (i) {
            if (i.match(regex)) {
                return i;
            }
            else {
                throw new Error("Invalid parameter passed to main function");
            }
        });
        return "(".concat(variablesMapped.join(", "), ") => {\n");
    };
    /**
     * This function generates the miniSL code for the end statement
     * @returns miniSL code for the end statement in a string format
     */
    Extractor.prototype.writeCloseStatement = function () {
        return "}\n";
    };
    /**
     * This function takes a function name and its input parameters and generates the miniSL code associated
     * @param index of the just readed annotation from the annotations array
     * @param fnName the name of the function invoked
     * @returns miniSL associated to the function invoked in a string format
     */
    Extractor.prototype.getFunctionInvoked = function (index, fnName) {
        //finding the function code in the map
        if (this.miniSLFunctionCode.has(fnName)) {
            return this.miniSLFunctionCode.get(fnName);
        }
        else {
            //finding the function code in the annotations array
            this.findFunctionAnnotations(index + 1);
            if (this.miniSLFunctionCode.has(fnName)) {
                return this.miniSLFunctionCode.get(fnName);
            }
            else {
                throw new Error("Function not found");
            }
        }
    };
    /**
     * This function reads the annotations and generates the miniSL code associated to the outermost block.
     * @param index of the just readed annotation from the annotations array
     * @returns miniSL code in a string format
     */
    Extractor.prototype.readAnnotations = function (index) {
        if (index === void 0) { index = 0; }
        //array containing the miniSL code generated from the annotations
        var miniSLCode = new Array();
        //counters for the opened and closed statements '{ and }'
        var openedStatements = 0;
        var closedStatements = 0;
        for (var i = index; i < this.annotations.length && (openedStatements >= closedStatements); i++) {
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
                    miniSLCode.push(this.writeCloseStatement());
                    closedStatements++;
                }
                else if (ann === this.config.controlStatements.else) {
                    miniSLCode.push(this.writeElse());
                }
                else {
                    throw new Error("Error: Unknown statement: ".concat(ann));
                }
            }
            else {
                //selecting the parameters of the controlStatements 
                startIndex = endIndex + 1;
                endIndex = ann.lastIndexOf(")");
                var params = ann.substring(startIndex, endIndex).trim();
                ann = ann.substring(0, startIndex - 1);
                ann = ann.replace(/\s/g, "");
                try {
                    //check if the annotation is a control statement
                    if (ann === this.config.controlStatements.for) {
                        miniSLCode.push(this.writeFor(params));
                        openedStatements++;
                    }
                    else if (ann === this.config.controlStatements.if) {
                        var guard = annotatedLine.substring(annotatedLine.indexOf("(") + 1, annotatedLine.lastIndexOf(")"));
                        miniSLCode.push(this.writeIf(guard));
                        openedStatements++;
                    }
                    else if (ann.startsWith(this.config.controlStatements.function)) {
                        this.readFunctionAnnotations(i, ann);
                        i--;
                    }
                    else if (ann.startsWith(this.config.controlStatements.call)) {
                        var fnName = ann.substring(this.config.controlStatements.call.length);
                        miniSLCode.push(this.writeCall(fnName, params) + "\n");
                    }
                    else if (ann.startsWith(this.config.controlStatements.invoke + "main")) {
                        miniSLCode.push(this.writeMain(params));
                        openedStatements++;
                    }
                    else if (ann.startsWith(this.config.controlStatements.invoke)) {
                        var fnName = ann.substring(this.config.controlStatements.invoke.length);
                        miniSLCode.push(this.getFunctionInvoked(i, fnName));
                    }
                    else {
                        throw new Error("Unknown statement: ".concat(ann));
                    }
                }
                catch (error) {
                    console.error("Error while processing the annotation: ".concat(ann, "\nin line:").concat(annotatedLine, "\n"), error);
                    (0, process_1.exit)(0);
                }
            }
        }
        return miniSLCode;
    };
    /**
     * This function checks if the annotation is present in the line
     * @param line to analyze
     * @param miniSLID annotation comment identifier
     * @param startAnnotation character that identifies the start of the inline comment
     * @param endAnnotation character that identifies the end of the inline comment, if it's empty the function will check only the start of the comment
     * @returns
     */
    Extractor.prototype.findAnnotation = function (line, miniSLID, startAnnotation, endAnnotation) {
        if (endAnnotation === void 0) { endAnnotation = ""; }
        if (!miniSLID || !startAnnotation) {
            throw new Error("Parameters 'miniSLID' 'startAnnotation' cannot be empty or null");
        }
        if (!endAnnotation) {
            return line.includes("".concat(startAnnotation, " ").concat(miniSLID, ":"));
        }
        else {
            var startIndex = line.indexOf("".concat(startAnnotation, " ").concat(miniSLID, ":"));
            var endIndex = line.lastIndexOf("".concat(endAnnotation));
            return startIndex !== -1 && endIndex !== -1 && startIndex + startAnnotation.length + miniSLID.length + 2 < endIndex;
        }
    };
    /**
     * Indent the MiniSL code
     * @param code MiniSL code to indent
     * @returns indented MiniSL code
     */
    Extractor.prototype.indentMiniSLCode = function (code) {
        var lines = code.split("\n").map(function (line) { return line.trim(); }); // split to line and trim it
        var indentLevel = 0;
        var indentSize = 2;
        var formattedCode = new Array();
        for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
            var line = lines_1[_i];
            // if (line === "") continue; Salta righe vuote
            // Reduce indentation on finding a closing brace
            if (line.startsWith("}")) {
                indentLevel = Math.max(0, indentLevel - 1);
            }
            // add the line with the current indentation
            formattedCode.push(" ".repeat(indentLevel * indentSize) + line + "\n");
            // improve indentation on finding an opening brace
            if (line.endsWith("{")) {
                indentLevel++;
            }
        }
        return formattedCode.join("");
    };
    /**
     * This function validate the expression AST to ensure it is a valid expression
     * @param ast expression AST
     * @param typeExpression boolean is a flag that means the expression is a boolean expression if it's true
     *                       or an arithmetic expression if it's false
     * @returns boolean true if the expression is valid, false otherwise
     */
    Extractor.prototype.checkExpression = function (ast, typeExpression) {
        if (!ast || !ast.body || ast.body.length !== 1)
            return false;
        var node = ast.body[0];
        if (node.type !== "ExpressionStatement")
            return false;
        return this.validateExpression(node.expression, typeExpression);
    };
    /**
     * This function recursively validates the expression AST to ensure it is a valid expression
     * @param node AST node
     * @param typeExpression boolean is a flag that means the expression is a boolean expression if it's true
     *                       or an arithmetic expression if it's false
     * @returns true if the expression is boolean, false otherwise
     */
    Extractor.prototype.validateExpression = function (node, typeExpression) {
        switch (node.type) {
            case "Literal":
                return typeof node.value === "boolean" || typeof node.value === "number";
            case "Identifier":
                return true; // Assume variables can be boolean or numbers
            case "UnaryExpression":
                if (node.operator === "!")
                    return this.validateExpression(node.argument, true);
                return false;
            case "LogicalExpression": // `&&`, `||`
                return this.validateBooleanExpression(node.left) && this.validateBooleanExpression(node.right);
            case "BinaryExpression":
                if (!typeExpression && ["+", "-", "*", "/"].includes(node.operator)) {
                    // Arithmetic operation: both sides must be numbers or valid arithmetic expressions
                    return this.validateArithmeticExpression(node.left) && this.validateArithmeticExpression(node.right);
                }
                if (["<", ">", "<=", ">=", "==", "!="].includes(node.operator)) {
                    // Comparison: both sides must be valid (either numbers, booleans, or arithmetic expressions)
                    return ((this.validateBooleanExpression(node.left) && this.validateBooleanExpression(node.right)) ||
                        (this.validateArithmeticExpression(node.left) && this.validateArithmeticExpression(node.right)));
                }
                return false;
            case "ParenthesizedExpression":
                return this.validateExpression(node.expression, false);
            default:
                return false;
        }
    };
    /**
     * This function recursively validates the expression AST to ensure it is a valid boolean expression
     * @param node AST node
     * @returns true if the expression is boolean, false otherwise
     */
    Extractor.prototype.validateBooleanExpression = function (node) {
        switch (node.type) {
            case "Literal":
                return typeof node.value === "boolean";
            case "LogicalExpression": // &&, ||
                return this.validateBooleanExpression(node.left) && this.validateBooleanExpression(node.right);
            case "BinaryExpression": // >, <, >=, <=, ==, !=
                return ["<", ">", "<=", ">=", "==", "!="].includes(node.operator) &&
                    ((this.validateBooleanExpression(node.left) && this.validateBooleanExpression(node.right)) ||
                        (this.validateArithmeticExpression(node.left) && this.validateArithmeticExpression(node.right)));
            case "UnaryExpression": // !true
                return node.operator === "!" && this.validateBooleanExpression(node.argument);
            case "Identifier":
                return true; // Assuming variables can be boolean
            case "ParenthesizedExpression":
                return this.validateBooleanExpression(node.expression);
            default:
                return false;
        }
    };
    /**
     * This function recursively validates the expression AST to ensure it is a valid arithmetic expression
     * @param node AST node
     * @returns true if the expression is a valid arithmetic expression, false otherwise
     */
    Extractor.prototype.validateArithmeticExpression = function (node) {
        switch (node.type) {
            case "Literal":
                return typeof node.value === "number";
            case "BinaryExpression": // +, -, *, /
                return ["+", "-", "*", "/"].includes(node.operator) &&
                    this.validateArithmeticExpression(node.left) &&
                    this.validateArithmeticExpression(node.right);
            case "Identifier":
                return true; // Assuming variables can be numbers
            case "ParenthesizedExpression":
                return this.validateArithmeticExpression(node.expression);
            default:
                return false;
        }
    };
    /**
     * Validate the expression AST to ensure it is a valid arithmetic expression
     * @param ast expression AST
     * @returns boolean true if the expression is valid, false otherwise
     */
    Extractor.prototype.checkArithmeticExpression = function (ast) {
        if (!ast || !ast.body || ast.body.length !== 1)
            return false;
        var node = ast.body[0];
        if (node.type !== "ExpressionStatement")
            return false;
        return this.validateArithmeticExpression(node.expression);
    };
    /**
     * This function reads the function annotations and saves the relative miniSL code in a map
     * @param index of the next readed annotation from the annotations array
     */
    Extractor.prototype.findFunctionAnnotations = function (index) {
        if (index === void 0) { index = 0; }
        for (var i = index; i < this.annotations.length && this.endOfAnnotation; i++) {
            //selecting the unspaced annotation controlStatements
            var ann = this.annotations[i];
            var unspacedAnn = ann.replace(/\s/g, "");
            unspacedAnn = this.config.endAnnotation.length > 0 ? unspacedAnn.slice(0, -this.config.endAnnotation.length) : unspacedAnn;
            var startIndex = unspacedAnn.indexOf("".concat(this.config.startAnnotation).concat(this.config.miniSLID, ":")) + this.config.startAnnotation.length + this.config.miniSLID.length + 1;
            var endIndex = unspacedAnn.indexOf("(", startIndex);
            if (endIndex !== -1) {
                var annotation = unspacedAnn.substring(startIndex, endIndex);
                startIndex = endIndex + 1;
                if (annotation.startsWith(this.config.controlStatements.function)) {
                    this.readFunctionAnnotations(i, annotation);
                    i--;
                }
            }
        }
        this.endOfAnnotation = false;
    };
    /**
     * This function reads the function annotations and saves the relative miniSL code in a map
     * @param i index of the just readed annotation from the annotations array
     * @param annotation annotation readed without parameters
     */
    Extractor.prototype.readFunctionAnnotations = function (i, annotation) {
        var fnName = annotation.substring(this.config.controlStatements.function.length);
        //Read the function code and translate it in miniSL code
        var miniSLFunctionCode = this.readAnnotations(i + 1);
        if (miniSLFunctionCode.length > 1) {
            this.annotations.splice(i, miniSLFunctionCode.length + 1);
            miniSLFunctionCode.pop(); // Remove last "end" statement
            // Save the function code in the map
            this.miniSLFunctionCode.set(fnName, miniSLFunctionCode.join(""));
        }
    };
    return Extractor;
}());
new Extractor().extract();
//# sourceMappingURL=extractor.js.map