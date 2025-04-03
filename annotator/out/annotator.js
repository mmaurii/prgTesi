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
    constructor(filePath) {
        this.parser = new Parser();
        this.filePath = filePath;
        this.code = "";
        this.parser.setLanguage(typescript);
    }
    loadFile() {
        return __awaiter(this, void 0, void 0, function* () {
            this.code = yield readFile(this.filePath);
        });
    }
    getFileContent() {
        return this.code;
    }
    annotate() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            if (!this.code) {
                yield this.loadFile();
            }
            // Parse the code
            const tree = this.parser.parse(this.code);
            const rootNode = tree.rootNode;
            let indent = "";
            let annotation = "";
            const stack = [{ node: rootNode, indent: indent }];
            while (stack.length > 0) {
                const { node, indent } = stack.pop();
                if (node.type === "function_declaration") {
                    const functionName = (_a = node.childForFieldName("name")) === null || _a === void 0 ? void 0 : _a.text;
                    annotation += `// Function: ${functionName}\n`;
                }
                else if (node.type === "class_declaration") {
                    const className = (_b = node.childForFieldName("name")) === null || _b === void 0 ? void 0 : _b.text;
                    annotation += `// Class: ${className}\n`;
                }
                else if (node.type === "variable_declaration") {
                    annotation += `// Variable declaration\n`;
                }
                annotation += indent + this.code.substring(node.startIndex, node.endIndex) + "\n";
                // Add children in reverse order so they are processed correctly
                for (let i = node.children.length - 1; i >= 0; i--) {
                    stack.push({ node: node.children[i], indent: indent + "  " });
                }
            }
            return annotation;
        });
    }
}
const filePath = "input.ts";
const annotator = new Annotator(filePath);
annotator.loadFile().then(() => {
    console.log(annotator.getFileContent());
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