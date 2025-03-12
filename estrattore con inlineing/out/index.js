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
                    console.error('Errore nella lettura del file:', error_1);
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
        this.annotatedCodeFilePath = "./annotatedCode/input0.ts";
        this.extractorConfigFilePath = './estrattoreConfig.json';
        this.endOfAnnotation = true;
    }
    Extractor.prototype.extract = function () {
        return __awaiter(this, arguments, void 0, function (path) {
            var miniSLCode, _a, _b, _c, lines, error_2, indentedCode;
            var _this = this;
            if (path === void 0) { path = this.annotatedCodeFilePath; }
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        miniSLCode = "\n";
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 4, , 5]);
                        //ogetto contenente le configurazioni con cui sono state codificate le annotazioni
                        _a = this;
                        _c = (_b = JSON).parse;
                        return [4 /*yield*/, readFile(this.extractorConfigFilePath)];
                    case 2:
                        //ogetto contenente le configurazioni con cui sono state codificate le annotazioni
                        _a.config = _c.apply(_b, [_d.sent()]);
                        return [4 /*yield*/, readFile(this.annotatedCodeFilePath)];
                    case 3:
                        lines = (_d.sent()).split("\n");
                        // Estraggo le annotazioni
                        this.annotations = lines.filter(function (line) { return _this.findAnnotation(line, _this.config.miniSLID, _this.config.startAnnotation, _this.config.endAnnotation); });
                        if (this.annotations.length === 0) {
                            console.error("Nessuna annotazione trovata");
                            return [2 /*return*/];
                        }
                        //leggo le annotazioni delle funzioni e genero il codice miniSL
                        this.readFunctionAnnotations();
                        //leggo le annotazioni del main e genero il codice miniSL
                        miniSLCode += this.readAnnotations().join("");
                        return [3 /*break*/, 5];
                    case 4:
                        error_2 = _d.sent();
                        console.error("Errore durante la lettura del file: ", error_2);
                        return [3 /*break*/, 5];
                    case 5:
                        miniSLCode = this.miniSLServices + miniSLCode;
                        indentedCode = this.indentMiniSLCode(miniSLCode);
                        console.log(indentedCode);
                        return [2 /*return*/];
                }
            });
        });
    };
    Extractor.prototype.writeFor = function (params) {
        var variables = params.split(",");
        var regex = '/[()]/g';
        if (variables.length !== 2 || params.match(regex)) {
            throw new Error("Invalid parameters for for statement");
        }
        return "for(".concat(variables[0], " in range(0, ").concat(variables[1], ")) {\n");
    };
    Extractor.prototype.writeIf = function (guards) {
        var regex = "\(.*?\)";
        /*         if(guards.match(regex)) {
                    guards = guards.slice(guards.indexOf("(") + 1, guards.lastIndexOf(")"));
                } */
        var ast = acorn.parse(guards, { ecmaVersion: 2020 });
        if (this.validateBooleanAST(ast)) {
            return "if(".concat(guards, ") {\n");
        }
        else {
            if (guards.match(regex)) {
                return "if(call ".concat(guards, ") {\n");
            }
            else {
                throw new Error("Invalid if guards");
            }
        }
    };
    Extractor.prototype.writeElse = function () {
        return "} else {\n";
    };
    Extractor.prototype.writeCall = function (fnName, params) {
        var variables = params.split(",");
        var regex = '[()]';
        for (var i = 0; i < variables.length; i++) {
            if (variables[i].match(regex)) {
                throw new Error("call can'take Function as parameter");
            }
        }
        if (!this.miniSLServices.includes("".concat(fnName))) {
            this.miniSLServices += "service ".concat(fnName, " : (void) -> void;\n");
        }
        return "call ".concat(fnName, "(").concat(params, ")");
    };
    Extractor.prototype.writeMain = function (params) {
        var _this = this;
        var variables = params.split(",");
        var regex = '/[()]/g';
        var variablesMapped = variables.map(function (i) {
            if (i.match(regex)) {
                i = i.substring(0, i.length - 2);
                if (!_this.miniSLServices.includes("".concat(i))) {
                    _this.miniSLServices += "service ".concat(i, " : (void) -> void;\n");
                }
            }
            return i;
        });
        return "(".concat(variablesMapped.join(", "), ") => {\n");
    };
    Extractor.prototype.writeCloseStatement = function () {
        return "}\n";
    };
    //correggi
    Extractor.prototype.addFunction = function (annPosition, fnName, params) {
        var variables = params.split(",");
        var managed = this.readAnnotations(annPosition + 1);
        if (managed.length > 1) {
            managed.pop(); // Remove last "end" statement)
            this.miniSLFunctionCode.set(fnName, managed.join(""));
            return managed.length;
        }
        else {
            throw new Error("Function not found or dosn't have a body");
        }
    };
    Extractor.prototype.getFunctionInvoked = function (index, fnName) {
        if (this.miniSLFunctionCode.has(fnName)) {
            return this.miniSLFunctionCode.get(fnName);
        }
        else {
            //cerca l'annotazione della funzione nell'elenco delle annotazioni
            this.readFunctionAnnotations(index + 1);
            if (this.miniSLFunctionCode.has(fnName)) {
                return this.miniSLFunctionCode.get(fnName);
            }
            else {
                throw new Error("Function not found");
            }
        }
    };
    Extractor.prototype.readAnnotations = function (index) {
        if (index === void 0) { index = 0; }
        var miniSLCode = new Array();
        var openedStatements = 0;
        var closedStatements = 0;
        for (var i = index; i < this.annotations.length && (openedStatements >= closedStatements); i++) {
            var ann = this.annotations[i];
            var unspacedAnn = ann.replace(/\s/g, "");
            unspacedAnn = this.config.endAnnotation.length > 0 ? unspacedAnn.slice(0, -this.config.endAnnotation.length) : unspacedAnn;
            var startIndex = unspacedAnn.indexOf("".concat(this.config.startAnnotation).concat(this.config.miniSLID, ":")) + this.config.startAnnotation.length + this.config.miniSLID.length + 1;
            var endIndex = unspacedAnn.indexOf("(", startIndex);
            if (endIndex === -1) {
                var statement = unspacedAnn.substring(startIndex);
                if (statement === this.config.controlStatements.end) {
                    miniSLCode.push(this.writeCloseStatement());
                    closedStatements++;
                }
                else if (statement === this.config.controlStatements.else) {
                    miniSLCode.push(this.writeElse());
                }
                else {
                    console.error("Unknown statement: ".concat(statement));
                    return;
                }
            }
            else {
                var statement = unspacedAnn.substring(startIndex, endIndex);
                startIndex = endIndex + 1;
                endIndex = unspacedAnn.lastIndexOf(")");
                var params = unspacedAnn.substring(startIndex, endIndex);
                if (statement === this.config.controlStatements.for) {
                    miniSLCode.push(this.writeFor(params));
                    openedStatements++;
                }
                else if (statement === this.config.controlStatements.if) {
                    var guard = ann.substring(ann.indexOf("(") + 1, ann.lastIndexOf(")"));
                    miniSLCode.push(this.writeIf(guard));
                    openedStatements++;
                }
                else if (statement.startsWith(this.config.controlStatements.invoke)) {
                    var fnName = statement.substring(this.config.controlStatements.invoke.length);
                    miniSLCode.push(this.getFunctionInvoked(i, fnName) + "\n");
                }
                else if (statement.startsWith(this.config.controlStatements.call + "main")) {
                    miniSLCode.push(this.writeMain(params));
                    openedStatements++;
                }
                else if (statement.startsWith(this.config.controlStatements.call)) {
                    var fnName = statement.substring(this.config.controlStatements.call.length);
                    miniSLCode.push(this.writeCall(fnName, params) + "\n");
                }
                else {
                    console.error("Unknown statement: ".concat(statement));
                    return;
                }
            }
        }
        return miniSLCode;
    };
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
    Extractor.prototype.indentMiniSLCode = function (code) {
        var lines = code.split("\n").map(function (line) { return line.trim(); }); // Divide in righe e rimuove spazi extra
        var indentLevel = 0;
        var indentSize = 2; // Spazi per indentazione
        var formattedCode = "";
        for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
            var line = lines_1[_i];
            if (line === "")
                continue; // Salta righe vuote
            // Riduci indentazione se la riga chiude una parentesi graffa
            if (line.startsWith("}")) {
                indentLevel = Math.max(0, indentLevel - 1);
            }
            // Aggiungi indentazione
            formattedCode += " ".repeat(indentLevel * indentSize) + line + "\n";
            // Aumenta indentazione dopo una parentesi aperta
            if (line.endsWith("{")) {
                indentLevel++;
            }
        }
        return formattedCode;
    };
    Extractor.prototype.validateBooleanAST = function (ast) {
        if (!ast || !ast.body || ast.body.length !== 1)
            return false;
        var node = ast.body[0];
        if (node.type !== "ExpressionStatement")
            return false;
        return this.isBooleanNode(node.expression);
    };
    Extractor.prototype.isBooleanNode = function (node) {
        switch (node.type) {
            case "Literal":
                return typeof node.value === "boolean";
            case "LogicalExpression": // &&, ||
            case "BinaryExpression": // >, <, >=, <=, ==, !=, ===, !==
                return ["&&", "||", "<", ">", "<=", ">=", "==", "!=", "===", "!=="].includes(node.operator)
                    && this.isBooleanNode(node.left)
                    && this.isBooleanNode(node.right);
            case "UnaryExpression": // !true
                return node.operator === "!" && this.isBooleanNode(node.argument);
            case "Identifier":
                return true; // Assuming variables can be boolean (better to verify in runtime)
            case "ParenthesizedExpression":
                return this.isBooleanNode(node.expression);
            default:
                return false;
        }
    };
    Extractor.prototype.readFunctionAnnotations = function (index) {
        if (index === void 0) { index = 0; }
        for (var i = index; i < this.annotations.length && this.endOfAnnotation; i++) {
            var ann = this.annotations[i];
            var unspacedAnn = ann.replace(/\s/g, "");
            unspacedAnn = this.config.endAnnotation.length > 0 ? unspacedAnn.slice(0, -this.config.endAnnotation.length) : unspacedAnn;
            var startIndex = unspacedAnn.indexOf("".concat(this.config.startAnnotation).concat(this.config.miniSLID, ":")) + this.config.startAnnotation.length + this.config.miniSLID.length + 1;
            var endIndex = unspacedAnn.indexOf("(", startIndex);
            if (endIndex !== -1) {
                var statement = unspacedAnn.substring(startIndex, endIndex);
                startIndex = endIndex + 1;
                endIndex = unspacedAnn.lastIndexOf(")");
                var params = unspacedAnn.substring(startIndex, endIndex);
                if (statement.startsWith(this.config.controlStatements.function)) {
                    var fnName = statement.substring(this.config.controlStatements.function.length);
                    var miniSLFunctionCode = this.readAnnotations(i + 1);
                    if (miniSLFunctionCode.length > 1) {
                        this.annotations.splice(i, miniSLFunctionCode.length + 1);
                        miniSLFunctionCode.pop(); // Remove last "end" statement
                        this.miniSLFunctionCode.set(fnName, miniSLFunctionCode.join(""));
                        i--;
                    }
                }
            }
        }
        this.endOfAnnotation = false;
    };
    return Extractor;
}());
new Extractor().extract();
//# sourceMappingURL=index.js.map