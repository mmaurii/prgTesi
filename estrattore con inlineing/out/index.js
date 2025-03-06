"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var Extractor = /** @class */ (function () {
    function Extractor() {
        this.miniSLServices = "";
        this.miniSLCodeFunction = new Map();
        this.annotatedCodeFilePath = "./annotatedCode/input0.ts";
        this.extractorConfigFilePath = './estrattoreConfig.json';
    }
    Extractor.prototype.extract = function (path) {
        var _this = this;
        if (path === void 0) { path = this.annotatedCodeFilePath; }
        var miniSLCode = "\n";
        try {
            //ogetto contenente le configurazioni con cui sono state codificate le annotazioni
            this.config = JSON.parse(fs.readFileSync(this.extractorConfigFilePath, 'utf-8'));
            var fileContent = fs.readFileSync(path, 'utf-8');
            var lines = fileContent.split('\n');
            // Estraggo le annotazioni
            this.annotations = lines.filter(function (line) { return _this.findAnnotation(line, _this.config.miniSLID, _this.config.startAnnotation, _this.config.endAnnotation); });
            if (this.annotations.length === 0) {
                console.error("Nessuna annotazione trovata");
                return;
            }
            //leggo le annotazioni e genero il codice miniSL
            miniSLCode += this.readAnnotations().join("");
        }
        catch (error) {
            console.error("Errore durante la lettura del file: ", error);
        }
        miniSLCode = this.miniSLServices + miniSLCode;
        var indentedCode = this.indentMiniSLCode(miniSLCode);
        console.log(indentedCode);
    };
    Extractor.prototype.writeFor = function (params) {
        var variables = params.split(",");
        var regex = '/[()]/g';
        if (variables.length !== 2 || params.match(regex)) {
            throw new Error("Invalid parameters for for statement");
        }
        return "for(".concat(variables[0], " in range(0, ").concat(variables[1], ")) {\n");
    };
    Extractor.prototype.writeIf = function (params) {
        var variable = params;
        if (variable.endsWith(")")) {
            var startIndex = variable.indexOf("(");
            var fnName = variable.substring(0, startIndex);
            var variables = variable.substring(startIndex + 1, variable.length - 1);
            return "if(".concat(this.writeCall(fnName, variables), ") {\n");
        }
        return "if(".concat(variable, ") {\n");
    };
    Extractor.prototype.writeElse = function () {
        return "} else {\n";
    };
    Extractor.prototype.writeCall = function (fnName, params) {
        var variables = params.split(",");
        var regex = '[()]';
        for (var i = 0; i < variables.length; i++) {
            if (variables[i].match(regex)) {
                var strFunctionCode = this.miniSLCodeFunction.get(fnName);
                if (strFunctionCode) {
                    return strFunctionCode;
                }
                else {
                    throw new Error("Function not found");
                }
            }
        }
        if (!this.miniSLServices.includes("".concat(fnName))) {
            this.miniSLServices += "service ".concat(fnName, " : (void) -> void;\n");
        }
        return "call ".concat(fnName, "(").concat(variables.join(", "), ")");
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
        var _this = this;
        var variables = params.split(",");
        var regex = '[()]';
        var variablesMapped = variables.map(function (i) {
            if (i.match(regex)) {
                i = i.substring(0, i.length - 2);
                if (!_this.miniSLServices.includes("".concat(i))) {
                    _this.miniSLServices += "service ".concat(i, " : (void) -> void;\n");
                }
            }
            return i;
        });
        var strFunctionCode = "(".concat(variablesMapped.join(", "), ") => {\n");
        var managed = this.readAnnotations(annPosition + 1);
        strFunctionCode += managed.join("");
        this.miniSLCodeFunction.set(fnName, strFunctionCode);
        return managed.length;
    };
    Extractor.prototype.readAnnotations = function (index) {
        if (index === void 0) { index = 0; }
        var miniSLCode = new Array();
        var openedStatements = 0;
        var closedStatements = 0;
        /*         for (let i = index; i<this.annotations.length && (openedStatements==0 || openedStatements!=closedStatements);i++) {
         */
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
                    miniSLCode.push(this.writeIf(params));
                    openedStatements++;
                }
                else if (statement.startsWith(this.config.controlStatements.call + "main")) {
                    miniSLCode.push(this.writeMain(params));
                    openedStatements++;
                }
                else if (statement.startsWith(this.config.controlStatements.call)) {
                    var fnName = statement.substring(4);
                    miniSLCode.push(this.writeCall(fnName, params) + "\n");
                }
                else if (statement.startsWith(this.config.controlStatements.function)) {
                    var fnName = statement.substring(8);
                    i += this.addFunction(i, fnName, params);
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
    return Extractor;
}());
new Extractor().extract();
//# sourceMappingURL=index.js.map