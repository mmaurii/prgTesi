var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as fs from 'fs';
import Parser from "tree-sitter";
import TreeSitterTS from "tree-sitter-typescript";
import { MiniSLAnnotationGenerator } from "./miniSLAnnotationGenerator.js";
// Extract the correct language parser
const { typescript } = TreeSitterTS;
function readFile(path) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield fs.promises.readFile(path, 'utf-8');
            return data;
        }
        catch (error) {
            console.error('Error while reading the file:\n', error);
        }
        return ""; // Return empty string in case of error
    });
}
class Annotator {
    constructor(filePathInput, filePathConfig) {
        this.parser = new Parser();
        this.filePathInput = filePathInput;
        this.filePathConfig = filePathConfig;
        this.code = "";
        this.parser.setLanguage(typescript);
    }
    loadFile() {
        return __awaiter(this, void 0, void 0, function* () {
            this.code = yield readFile(this.filePathInput);
            const config = JSON.parse(yield readFile(this.filePathConfig));
            this.miniSLAnnotatorGenerator = new MiniSLAnnotationGenerator(config);
        });
    }
    getFileContent() {
        return this.code;
    }
    annotate() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e;
            if (!this.code) {
                yield this.loadFile();
            }
            // Parse the code
            const tree = this.parser.parse(this.code);
            /*     console.log("AST:\n");
                console.log(rootNode.toString());
             */ let indent = "";
            let annotation = "";
            const edits = [];
            const stack = [tree.rootNode];
            while (stack.length > 0) {
                const node = stack.pop();
                if (!node) {
                    continue;
                }
                if (node.type === "function_declaration") {
                    const functionName = (_a = node.childForFieldName("name")) === null || _a === void 0 ? void 0 : _a.text;
                    let functionParams = (_b = node.childForFieldName("parameters")) === null || _b === void 0 ? void 0 : _b.text;
                    if (functionName && functionParams) {
                        let params = functionParams.split(",").map(param => param.split(":")[0]);
                        functionParams = params.join(", ");
                        if (functionParams.charAt(functionParams.length - 1) !== ")") {
                            functionParams += ")";
                        }
                        const comment = this.miniSLAnnotatorGenerator.getFunctionStatement(functionName + functionParams) + "\n";
                        edits.push({ pos: node.startIndex, text: comment });
                    }
                    else {
                        console.error("Error: Function name or parameters not found.");
                    }
                }
                else if (node.type === "if_statement") {
                    const condition = (_c = node.childForFieldName("condition")) === null || _c === void 0 ? void 0 : _c.text;
                    if (condition) {
                        const comment = this.miniSLAnnotatorGenerator.getIfStatement(condition) + "\n";
                        edits.push({ pos: node.startIndex, text: comment });
                    }
                    else {
                        console.error("Error: If statement condition not found.");
                    }
                }
                else if (node.type === "else_clause") {
                    const comment = this.miniSLAnnotatorGenerator.getElseStatement() + "\n";
                    edits.push({ pos: node.startIndex, text: comment });
                }
                else if (node.type === "for_statement") {
                    const iterator = (_d = node.childForFieldName("init")) === null || _d === void 0 ? void 0 : _d.text;
                    const end = (_e = node.childForFieldName("end")) === null || _e === void 0 ? void 0 : _e.text;
                    if (iterator && end) {
                        const comment = this.miniSLAnnotatorGenerator.getForStatement(iterator, end) + "\n";
                        edits.push({ pos: node.startIndex, text: comment });
                    }
                    else {
                        console.error("Error: For statement iterator or end not found.");
                    }
                }
                stack.push(...node.children.reverse());
            }
            // Apply edits in reverse order to avoid index shifting
            edits.sort((a, b) => b.pos - a.pos);
            let annotatedCode = this.code;
            for (let edit of edits) {
                annotatedCode = annotatedCode.slice(0, edit.pos) + edit.text + annotatedCode.slice(edit.pos);
            }
            return annotatedCode;
        });
    }
}
const filePath = "./inputCode/input3.ts";
const filePathConfig = "config.json";
const annotator = new Annotator(filePath, filePathConfig);
annotator.loadFile().then(() => {
    /*   console.log(annotator.getFileContent())
     */ 
}).catch((error) => {
    console.error('Error while loading the file:\n', error);
});
annotator.annotate().then((data) => {
    console.log("Annotation completed.");
    console.log(data);
    fs.writeFileSync("output.txt", data, 'utf-8');
}).catch((error) => {
    console.error('Error while annotating the file:\n', error);
});
//# sourceMappingURL=annotator.js.map