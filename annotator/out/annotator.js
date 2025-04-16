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
        this.internalFunctions = new Set();
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
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            if (!this.code) {
                yield this.loadFile();
            }
            // Parse the code
            this.tree = this.parser.parse(this.code);
            /*     console.log("AST:\n");
                console.log(tree.rootNode.toString());
             */ let indent = "";
            let annotation = "";
            const edits = [];
            const stack = [this.tree.rootNode];
            // Collect internal functions
            this.collectInternalFunctions(this.tree.rootNode);
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
                        let comment;
                        // Check if the function is main
                        /*           if (functionName === "main") {
                                    comment = this.miniSLAnnotatorGenerator.getInvokeStatement(functionName + functionParams) + "\n";
                                  } else {
                                  } */
                        comment = this.miniSLAnnotatorGenerator.getFunctionStatement(functionName + functionParams) + "\n";
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
                    // For statement: get the initializer and condition
                    // For example: for (initializer; condition; update) { body }
                    const initializer = node.childForFieldName("initializer");
                    const condition = node.childForFieldName("condition");
                    const startIndex = this.getForStartIndex(initializer);
                    const endIndex = this.getForEndIndex(condition);
                    if (startIndex && endIndex) {
                        const comment = this.miniSLAnnotatorGenerator.getForStatement(startIndex, endIndex) + "\n";
                        edits.push({ pos: node.startIndex, text: comment });
                    }
                    else {
                        console.error("Error: For statement iterator or end not found.");
                    }
                    //controllo che la call non sia dentro un if
                }
                else if (node.type === "call_expression" && ((_e = (_d = node.parent) === null || _d === void 0 ? void 0 : _d.parent) === null || _e === void 0 ? void 0 : _e.type) !== "if_statement") {
                    // Check if the function is a service call
                    const nodeParent = node.parent;
                    const nodeParentIndex = this.getIndexInParent(nodeParent);
                    const comment = (_h = (_g = (_f = node.parent) === null || _f === void 0 ? void 0 : _f.parent) === null || _g === void 0 ? void 0 : _g.child(nodeParentIndex - 1)) === null || _h === void 0 ? void 0 : _h.text;
                    if (comment) {
                        if (!comment.includes("miniSL:")) {
                            const functionNode = node.child(0); // identifier or member_expression
                            if (functionNode.type === "identifier" && this.internalFunctions.has(functionNode.text)) {
                                const comment = this.miniSLAnnotatorGenerator.getInvokeStatement(node.text) + "\n";
                                edits.push({ pos: node.startIndex, text: comment });
                            }
                        }
                    }
                    else {
                        const functionNode = node.child(0); // identifier or member_expression
                        if (functionNode.type === "identifier" && this.internalFunctions.has(functionNode.text)) {
                            const comment = this.miniSLAnnotatorGenerator.getInvokeStatement(node.text) + "\n";
                            edits.push({ pos: node.startIndex, text: comment });
                        }
                    }
                    //controllo che ci sia la chiusura di un un blocco
                }
                else if (node.type === '}' && ((_j = node.parent) === null || _j === void 0 ? void 0 : _j.type) === 'statement_block') {
                    const nextNode = stack.length - 1 >= 0 ? stack[stack.length - 1] : undefined;
                    //controllo che non sia un else, '} else {'
                    if ((nextNode === null || nextNode === void 0 ? void 0 : nextNode.type) !== 'else_clause') {
                        const comment = this.miniSLAnnotatorGenerator.getEndStatement() + "\n";
                        edits.push({ pos: node.startIndex, text: comment });
                    }
                }
                stack.push(...node.children.reverse());
            }
            // Apply edits in reverse order to avoid index shifting
            //    edits.sort((a, b) => a.pos - b.pos);
            edits.sort((a, b) => b.pos - a.pos);
            let annotatedCode = this.code;
            for (let edit of edits) {
                annotatedCode = annotatedCode.slice(0, edit.pos) + edit.text + annotatedCode.slice(edit.pos);
            }
            // print tree
            //console.log(this.printSyntaxTree(tree.rootNode, this.code));
            //return edits.map(edit => edit.text).join("");
            return annotatedCode;
        });
    }
    collectInternalFunctions(node) {
        const stack = [node];
        while (stack.length > 0) {
            const currentNode = stack.pop();
            if (!currentNode) {
                continue;
            }
            if (currentNode.type === "function_declaration") {
                const nameNode = currentNode.childForFieldName("name");
                if (nameNode)
                    this.internalFunctions.add(nameNode.text);
            }
            stack.push(...currentNode.children.reverse());
        }
    }
    getIndexInParent(node) {
        const parent = node.parent;
        if (!parent)
            return -1;
        for (let i = 0; i < parent.childCount; i++) {
            const child = parent.child(i);
            if (child === node) {
                return i;
            }
        }
        return -1; // non trovato
    }
    getForEndIndex(condition) {
        if (condition) {
            let valueNode;
            if (condition.type === "binary_expression") {
                valueNode = condition.child(2); // RHS of binary expression
            }
            else {
                throw new Error("Error: For statement condition is not a binary expression, i can't handle it.");
            }
            if (!this.isFunctionCall(valueNode)) {
                return valueNode.text;
            }
            else {
                throw new Error("Error: endIndex in For statement is a function call.");
            }
        }
        throw new Error("Error: condition in For statement not found.");
    }
    getForStartIndex(initializer) {
        if (initializer) {
            let valueNode;
            if (initializer.type === "lexical_declaration" || initializer.type === "variable_declaration") {
                const declarator = initializer.namedChild(0);
                valueNode = declarator === null || declarator === void 0 ? void 0 : declarator.childForFieldName("name");
            }
            else if (initializer.type === "assignment_expression") {
                const leftNode = initializer.childForFieldName('left'); // LHS of assignment
                valueNode = leftNode.type === "identifier" ? leftNode : null; // identifier or member_expression
            }
            if (!this.isFunctionCall(valueNode)) {
                return valueNode.text;
            }
            else {
                throw new Error("Error: startIndex in For statement is a function call.");
            }
        }
        throw new Error("Error: initializer in For statement not found.");
    }
    isFunctionCall(node) {
        if (!node)
            return false;
        // Caso base: è una call
        if (node.type === "call_expression")
            return true;
        // Caso annidato: x = a + myFunc()
        for (let i = 0; i < node.namedChildCount; i++) {
            if (this.isFunctionCall(node.namedChild(i))) {
                return true;
            }
        }
        return false;
    }
    printSyntaxTree(node, sourceCode, indent = '', isLast = true) {
        const connector = isLast ? '└── ' : '├── ';
        let result = indent + connector + node.type;
        // Add node text for identifiers or literals
        if (node.type === 'identifier' || node.type === 'string' || node.type === 'number') {
            const text = sourceCode.slice(node.startIndex, node.endIndex);
            result += ` (${text})`;
        }
        result += '\n';
        const children = [];
        for (let i = 0; i < node.childCount; i++) {
            children.push(node.child(i));
        }
        const newIndent = indent + (isLast ? '    ' : '│   ');
        for (let i = 0; i < children.length; i++) {
            result += this.printSyntaxTree(children[i], sourceCode, newIndent, i === children.length - 1);
        }
        return result;
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
    /*   console.log("Annotation completed.");
      console.log(data); */
    fs.writeFileSync("output.txt", data, 'utf-8');
}).catch((error) => {
    console.error('Error while annotating the file:\n', error);
});
//# sourceMappingURL=annotator.js.map