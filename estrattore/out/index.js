"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function indentMiniSLCode(code) {
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
}
var Extractor = /** @class */ (function () {
    function Extractor() {
        this.miniSLServices = "";
    }
    Extractor.prototype.main = function (path) {
        if (path === void 0) { path = "./input.ts"; }
        var miniSLCode = "\n";
        try {
            //ogetto contenente le configurazioni con cui sono state codificate le annotazioni
            var config_1 = JSON.parse(fs.readFileSync('./estrattoreConfig.json', 'utf-8'));
            var fileContent = fs.readFileSync(path, 'utf-8');
            var lines = fileContent.split('\n');
            var annotations = lines.filter(function (line) { return line.includes("".concat(config_1.startAnnotation, " ").concat(config_1.miniSLID, ":")); });
            if (annotations.length === 0) {
                console.error("Nessuna annotazione trovata");
                return;
            }
            var mainAnnotation = annotations.shift();
            // Remove spaces from the annotation
            var unspaced = mainAnnotation.replace(/\s/g, "");
            var startIndex = unspaced.indexOf("".concat(config_1.startAnnotation).concat(config_1.miniSLID, ":")) + config_1.startAnnotation.length + config_1.miniSLID.length + 1;
            var endIndex = unspaced.indexOf("(", startIndex);
            var statement = unspaced.substring(startIndex, endIndex);
            startIndex = endIndex + 1;
            endIndex = unspaced.indexOf(")", startIndex);
            var params = unspaced.substring(startIndex, endIndex);
            if (statement === config_1.controlStatements.call) {
                miniSLCode += this.writeMain(params);
            }
            else {
                console.error("La prima annotazione deve essere una call senza nome per il main");
                return;
            }
            for (var _i = 0, annotations_1 = annotations; _i < annotations_1.length; _i++) {
                var ann = annotations_1[_i];
                var unspacedAnn = ann.replace(/\s/g, "");
                startIndex = unspacedAnn.indexOf("".concat(config_1.startAnnotation).concat(config_1.miniSLID, ":")) + config_1.startAnnotation.length + config_1.miniSLID.length + 1;
                endIndex = unspacedAnn.indexOf("(", startIndex);
                if (endIndex === -1) {
                    var statement_1 = unspacedAnn.substring(startIndex);
                    if (statement_1 === config_1.controlStatements.end) {
                        miniSLCode += this.writeCloseStatement();
                    }
                    else if (statement_1 === config_1.controlStatements.else) {
                        miniSLCode += this.writeElse();
                    }
                    else {
                        console.error("Unknown statement: ".concat(statement_1));
                        return;
                    }
                }
                else {
                    var statement_2 = unspacedAnn.substring(startIndex, endIndex);
                    startIndex = endIndex + 1;
                    endIndex = unspacedAnn.lastIndexOf(")");
                    var params_1 = unspacedAnn.substring(startIndex, endIndex);
                    if (statement_2 === config_1.controlStatements.for) {
                        miniSLCode += this.writeFor(params_1);
                    }
                    else if (statement_2 === config_1.controlStatements.if) {
                        miniSLCode += this.writeIf(params_1);
                    }
                    else if (statement_2.startsWith(config_1.controlStatements.call)) {
                        var fnName = statement_2.substring(4);
                        miniSLCode += this.writeCall(fnName, params_1) + "\n";
                    }
                    else {
                        console.error("Unknown statement: ".concat(statement_2));
                        return;
                    }
                }
            }
            miniSLCode += this.writeCloseStatement();
        }
        catch (error) {
            console.error("Errore durante la lettura del file: ", error);
        }
        miniSLCode = this.miniSLServices + miniSLCode;
        console.log(indentMiniSLCode(miniSLCode));
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
                var name_1 = variables[i].substring(0, variables[i].length - 2);
                variables[i] = this.writeCall(name_1, "");
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
    return Extractor;
}());
new Extractor().main();
//# sourceMappingURL=index.js.map