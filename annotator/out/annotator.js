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
function prettyPrint(node, depth = 0) {
    const indent = "  ".repeat(depth); // 2 spaces per level
    let output = `${indent}(${node.type}`;
    if (node.namedChildCount === 0) {
        output += ` ${node.text})`;
        return output;
    }
    for (const child of node.namedChildren) {
        output += `\n${prettyPrint(child, depth + 1)}`;
    }
    output += `\n${indent})`;
    return output;
}
class Annotator {
    constructor(filePathInput, filePathConfig) {
        this.parser = new Parser();
        this.internalFunctions = new Map();
        this.commentLines = new Set();
        this.contextParameters = new Map();
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
        return __awaiter(this, arguments, void 0, function* (entryPoint = "main") {
            if (!this.code) {
                yield this.loadFile();
            }
            // Parse the code
            this.tree = this.parser.parse(this.code);
            console.log("AST:\n");
            console.log(prettyPrint(this.tree.rootNode));
            let indent = "";
            let annotation = "";
            let edits = [];
            // Collect internal functions
            this.collectInternalFunctions(this.tree.rootNode);
            let callAnnotations = new Set();
            // se non ci sono annotazioni non faccio nulla
            /*     for (const node of this.commentLines) {
                  if (node.text.includes("miniSL:")) {
                    callAnnotations.add(node.text);
                  }
                }
            
                if (callAnnotations.size === 0) {
                  console.log("No annotations found.");
                  return this.code;
                } */
            let callAnnotationNodes = this.findAllMiniSLComments(this.tree.rootNode, this.code);
            if (callAnnotationNodes.length === 0) {
                console.log("No call annotations found.");
                return this.code;
            }
            for (const node of callAnnotationNodes) {
                let path = Annotator.getASTPathToFunctionOrigin(node);
                let paths = this.findInvocationPaths(entryPoint, this.tree.rootNode);
                let tree = this.buildExecutionTree(paths);
                //qui dovresti fare il controllo sull'entry point, se non è presente solleva un errore
                let root = tree.pop(); // Prendi il nodo radice dell'albero di esecuzione
                if (!root) {
                    throw new Error("Error: root node not found in the execution tree.");
                }
                edits.push(...this.followPath(root)); // Passa il nodo radice dell'albero di esecuzione
            }
            // Apply edits in reverse order to avoid index shifting
            //    edits.sort((a, b) => a.pos - b.pos);
            edits.sort((a, b) => b.pos - a.pos);
            let annotatedCode = this.code;
            for (let edit of edits) {
                annotatedCode = annotatedCode.slice(0, edit.pos) + edit.text + annotatedCode.slice(edit.pos);
            }
            return annotatedCode;
        });
    }
    // Trova il nodo commento che contiene "miniSL: call"
    findAllMiniSLComments(root, sourceCode) {
        const result = [];
        const stack = [root];
        while (stack.length > 0) {
            const node = stack.pop();
            if (node.type === 'comment') {
                const text = sourceCode.slice(node.startIndex, node.endIndex);
                if (text.includes('miniSL: call')) {
                    result.push(node);
                }
            }
            for (let i = node.namedChildCount - 1; i >= 0; i--) {
                const child = node.namedChild(i);
                if (child)
                    stack.push(child);
            }
        }
        return result;
    }
    // Funzione che, dato un nodo, risale fino alla dichiarazione di funzione contenente il nodo
    static getASTPathToFunctionOrigin(node) {
        const path = [];
        let current = node;
        // Tipi di nodi da includere nel percorso
        const relevantTypes = new Set([
            'function_declaration', 'method_definition', 'arrow_function',
            'if_statement', 'for_statement', 'while_statement',
            'call_expression'
        ]);
        while (current) {
            if (relevantTypes.has(current.type)) {
                path.push(current);
            }
            // Se abbiamo raggiunto la dichiarazione di funzione, smettiamo
            if (current.type === 'function_declaration' || current.type === 'arrow_function'
                || current.type === 'method_definition') {
                break;
            }
            current = current.parent;
        }
        // Invertiamo per partire dalla funzione verso il nodo
        return path.reverse();
    }
    // Trova tutti i nodi di dichiarazione di funzione nell'AST
    collectFunctionDeclarations(root) {
        const functions = [];
        function traverse(node) {
            if (node.type === 'function_declaration') {
                functions.push(node);
            }
            for (let i = 0; i < node.namedChildCount; i++) {
                traverse(node.namedChild(i));
            }
        }
        traverse(root);
        return functions;
    }
    /*   // Estrae il nome di una funzione dato il nodo function_declaration
      static getFunctionName(fnNode: SyntaxNode): string | null {
        // In TypeScript grammar, child(1) di function_declaration è l'identificatore del nome
        const nameNode = fnNode.child(1);
        return nameNode && nameNode.type === 'identifier' ? nameNode.text : null;
      }
    
      // Estrae il nome di funzione chiamata in un call_expression (se semplice)
      static getCalledFunctionName(callNode: SyntaxNode): string | null {
        const callee = callNode.firstChild;
        if (!callee) return null;
        if (callee.type === 'identifier') {
          return callee.text;
        }
        // Potrebbe essere un member expression o altro; omesso per semplicità
        return null;
      } */
    static getFunctionName(fnNode) {
        // Esempio: cerca identifier in function_declaration
        const identifier = fnNode.childForFieldName("name");
        return identifier ? identifier.text : null;
    }
    static getCalledFunctionName(callNode) {
        const funcId = callNode.childForFieldName("function");
        return funcId ? funcId.text : null;
    }
    static findCallExpressions(node) {
        const calls = [];
        const stack = [node];
        while (stack.length) {
            const current = stack.pop();
            if (current.type === 'call_expression') {
                calls.push(current);
            }
            for (let i = 0; i < current.namedChildCount; i++) {
                stack.push(current.namedChild(i));
            }
        }
        return calls;
    }
    // Trova i percorsi di esecuzione dall'entrypoint alle funzioni miniSL
    findInvocationPaths(entryName, root) {
        let paths = [];
        // (1) Trova nodi miniSL
        const miniSLComments = this.findAllMiniSLComments(root, this.code);
        const miniSLFunctions = new Set();
        for (const commentNode of miniSLComments) {
            let fnNode = commentNode;
            while (fnNode && fnNode.type !== 'function_declaration') {
                fnNode = fnNode.parent;
            }
            if (fnNode && fnNode.type === 'function_declaration') {
                const name = Annotator.getFunctionName(fnNode);
                if (name)
                    miniSLFunctions.add(name);
            }
        }
        // (2) Mappa nome -> nodo funzione
        const funcDecls = this.collectFunctionDeclarations(root);
        const funcMap = {};
        for (const fn of funcDecls) {
            const name = Annotator.getFunctionName(fn);
            if (name) {
                funcMap[name] = fn;
            }
        }
        // Avvia la ricerca dall'entrypoint se esiste
        if (funcMap[entryName]) {
            const entryFn = funcMap[entryName];
            // Inserisce all'inizio del percorso il nodo di dichiarazione della funzione di ingresso
            paths = this.dfs(entryFn, funcMap, miniSLFunctions);
        }
        return paths;
    }
    // (3) Ricerca ricorsiva dei percorsi
    dfs(entryFn, funcMap, miniSLFunctions) {
        let paths = [];
        const visited = new Set();
        const stack = [{
                currentFn: entryFn,
                currentPath: [entryFn],
            }];
        while (stack.length > 0) {
            const { currentFn, currentPath } = stack.pop();
            const currentName = Annotator.getFunctionName(currentFn);
            if (!currentName || visited.has(currentName))
                continue;
            visited.add(currentName);
            const callNodes = Annotator.findCallExpressions(currentFn);
            for (const call of callNodes) {
                const calledName = Annotator.getCalledFunctionName(call);
                if (!calledName)
                    continue;
                const pathToCall = Annotator.getASTPathToFunctionOrigin(call); // percorso AST all'interno della funzione
                const fullPath = [...currentPath, ...pathToCall];
                if (miniSLFunctions.has(calledName)) {
                    paths.push(fullPath);
                }
                else if (funcMap[calledName] && !visited.has(calledName)) {
                    stack.push({
                        currentFn: funcMap[calledName],
                        currentPath: fullPath,
                    });
                }
            }
            visited.delete(currentName); // Permette più percorsi alternativi
        }
        return paths;
    }
    // Percorso dal root fino a un nodo
    getPathToNode(node) {
        const path = [];
        while (node.parent) {
            const parent = node.parent;
            const index = parent.namedChildren.indexOf(node);
            path.unshift([parent.type, index]);
            node = parent;
        }
        return path;
    }
    buildExecutionTree(paths) {
        const rootNodes = [];
        for (const path of paths) {
            let currentLevel = rootNodes;
            for (const node of path) {
                let existing = currentLevel.find(n => n.node.id === node.id);
                if (!existing) {
                    existing = {
                        node,
                        children: [],
                    };
                    currentLevel.push(existing);
                }
                currentLevel = existing.children;
            }
        }
        return rootNodes;
    }
    followPath(root) {
        var _a, _b, _c, _d, _e;
        const edits = [];
        const stack = [root];
        let contextParameters;
        while (stack.length > 0) {
            const currentExecutionTreeNode = stack.pop();
            const node = currentExecutionTreeNode.node;
            if (!node) {
                continue;
            }
            if (node.type === "function_declaration") {
                const functionName = (_a = node.childForFieldName("name")) === null || _a === void 0 ? void 0 : _a.text;
                let functionParams = (_b = node.childForFieldName("parameters")) === null || _b === void 0 ? void 0 : _b.text;
                if (functionName && functionParams) {
                    let params = functionParams.split(",").map(param => param.split(":")[0]);
                    contextParameters = params;
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
                this.contextParameters.clear();
                let conditionNode = node.childForFieldName("condition");
                let identifiers = this.extractIdentifiersFromCondition(conditionNode);
                var condition = conditionNode === null || conditionNode === void 0 ? void 0 : conditionNode.text;
                try {
                    this.getDeclaredValue(identifiers);
                    for (const [key, value] of this.contextParameters) {
                        const regex = new RegExp(`(?<![\\w])${key}(?![\\w])`, 'g');
                        if (value !== null) {
                            condition = condition.replace(regex, String(value));
                        }
                    }
                }
                catch (error) {
                    console.error(error.message);
                }
                if (condition) {
                    const comment = this.miniSLAnnotatorGenerator.getIfStatement(condition.toString()) + "\n";
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
                try {
                    // ottengo le variabili usate nella guardia del for
                    this.getDeclaredValue([initializer]);
                    this.getDeclaredValue([condition]);
                }
                catch (error) {
                    console.error(error.massage);
                }
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
            else if (node.type === "call_expression" && ((_d = (_c = node.parent) === null || _c === void 0 ? void 0 : _c.parent) === null || _d === void 0 ? void 0 : _d.type) !== "if_statement") {
                // Check if the function is a service call          
                if (this.commentLines.has(node)) {
                    let comment = node.text;
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
            else if (node.type === '}' && ((_e = node.parent) === null || _e === void 0 ? void 0 : _e.type) === 'statement_block') {
                const nextNode = stack.length - 1 >= 0 ? stack[stack.length - 1].node : undefined;
                //controllo che non sia un else, '} else {'
                if ((nextNode === null || nextNode === void 0 ? void 0 : nextNode.type) !== 'else_clause') {
                    const comment = this.miniSLAnnotatorGenerator.getEndStatement() + "\n";
                    edits.push({ pos: node.startIndex, text: comment });
                }
            }
            stack.push(...currentExecutionTreeNode.children.reverse());
        }
        return edits;
    }
    /*   followPath(rootNode: SyntaxNode): { pos: number; text: string }[] {
        const edits: { pos: number; text: string }[] = [];
        const stack: SyntaxNode[] = [rootNode];
        let contextParameters: string[];
    
        while (stack.length > 0) {
          const node = stack.pop();
          if (!node) {
            continue;
          }
    
          if (node.type === "function_declaration") {
            const functionName = node.childForFieldName("name")?.text;
            let functionParams = node.childForFieldName("parameters")?.text;
    
            if (functionName && functionParams) {
              let params = functionParams.split(",").map(param => param.split(":")[0]);
              contextParameters = params;
              functionParams = params.join(", ");
              if (functionParams.charAt(functionParams.length - 1) !== ")") {
                functionParams += ")";
              }
    
              let comment;
              // Check if the function is main
              comment = this.miniSLAnnotatorGenerator.getFunctionStatement(functionName + functionParams) + "\n";
              edits.push({ pos: node.startIndex, text: comment });
            } else {
              console.error("Error: Function name or parameters not found.");
            }
          } else if (node.type === "if_statement") {
            this.contextParameters.clear();
            let conditionNode = node.childForFieldName("condition");
            let identifiers = this.extractIdentifiersFromCondition(conditionNode);
            var condition: String = conditionNode?.text;
    
            try {
              this.getDeclaredValue(identifiers);
              for (const [key, value] of this.contextParameters) {
                const regex = new RegExp(`(?<![\\w])${key}(?![\\w])`, 'g');
                if (value !== null) {
                  condition = condition.replace(regex, String(value));
                }
              }
            } catch (error) {
              console.error(error.message);
            }
    
            if (condition) {
              const comment = this.miniSLAnnotatorGenerator.getIfStatement(condition.toString()) + "\n";
              edits.push({ pos: node.startIndex, text: comment });
            } else {
              console.error("Error: If statement condition not found.");
            }
          } else if (node.type === "else_clause") {
            const comment = this.miniSLAnnotatorGenerator.getElseStatement() + "\n";
            edits.push({ pos: node.startIndex, text: comment });
          } else if (node.type === "for_statement") {
    
            // For statement: get the initializer and condition
            // For example: for (initializer; condition; update) { body }
            const initializer = node.childForFieldName("initializer");
            const condition = node.childForFieldName("condition");
    
            try {
              // ottengo le variabili usate nella guardia del for
              this.getDeclaredValue([initializer]);
              this.getDeclaredValue([condition]);
    
            } catch (error) {
              console.error(error.massage);
            }
            const startIndex = this.getForStartIndex(initializer);
            const endIndex = this.getForEndIndex(condition);
            if (startIndex && endIndex) {
              const comment = this.miniSLAnnotatorGenerator.getForStatement(startIndex, endIndex) + "\n";
              edits.push({ pos: node.startIndex, text: comment });
            } else {
              console.error("Error: For statement iterator or end not found.");
            }
    
            //controllo che la call non sia dentro un if
          } else if (node.type === "call_expression" && node.parent?.parent?.type !== "if_statement") {
            // Check if the function is a service call
            if (this.commentLines.has(node)) {
              let comment = node.text;
              if (!comment.includes("miniSL:")) {
                const functionNode = node.child(0); // identifier or member_expression
                if (functionNode.type === "identifier" && this.internalFunctions.has(functionNode.text)) {
                  const comment = this.miniSLAnnotatorGenerator.getInvokeStatement(node.text) + "\n";
                  edits.push({ pos: node.startIndex, text: comment });
                }
              }
            } else {
              const functionNode = node.child(0); // identifier or member_expression
              if (functionNode.type === "identifier" && this.internalFunctions.has(functionNode.text)) {
                const comment = this.miniSLAnnotatorGenerator.getInvokeStatement(node.text) + "\n";
                edits.push({ pos: node.startIndex, text: comment });
              }
            }
    
            //controllo che ci sia la chiusura di un un blocco
          } else if (node.type === '}' && node.parent?.type === 'statement_block') {
            const nextNode = stack.length - 1 >= 0 ? stack[stack.length - 1] : undefined;
            //controllo che non sia un else, '} else {'
            if (nextNode?.type !== 'else_clause') {
              const comment = this.miniSLAnnotatorGenerator.getEndStatement() + "\n";
              edits.push({ pos: node.startIndex, text: comment });
            }
          }
    
          stack.push(...node.children.reverse());
        }
    
        return edits;
      } */
    /*   extractIdentifiers(nodes: SyntaxNode[], contextParameters: string[]): Map<string, any> {
        let result = new Map<string, any>();
    
        for (const node of nodes) {
          if (node.type === "identifier") {
            const value = this.getDeclaredValue(nodes);
            if (!value) {
              throw new Error("Error: identifier not found in context parameters or was not a value.");
            }
            result.set(node.text, value);
          }
    
          for (const child of node.namedChildren) {
            this.extractIdentifiers([child], contextParameters).forEach((key, value) => { result.set(key, value) });
          }
        }
        return result;
      } */
    getDeclaredValue(nodes) {
        const node = nodes[0];
        let value = null;
        let isParameter = false;
        if (!node || node.type !== "identifier")
            throw new Error("Error: node is not an identifier.");
        const name = node.text;
        const line = node.startPosition.row;
        // Risali alla function_declaration più vicina
        let funcNode = node;
        while (funcNode && funcNode.type !== "function_declaration") {
            funcNode = funcNode.parent;
        }
        if (!funcNode)
            throw new Error("Error: function not found.");
        // Controlla se è un parametro della funzione
        const paramList = funcNode.childForFieldName("parameters");
        const nodeNames = nodes.map(n => n.text);
        if (paramList) {
            for (const param of paramList.namedChildren) {
                if (param.type === "required_parameter") {
                    const nameNode = param.namedChildren.find(n => n.type === "identifier");
                    if (nameNode && nodeNames.includes(nameNode.text)) {
                        this.contextParameters.set(nameNode.text, null);
                    }
                }
            }
        }
        // Scansiona il corpo della funzione per cercare assegnazioni precedenti
        const body = funcNode.childForFieldName("body");
        if (!body)
            throw new Error("Error: function body not found.");
        for (const n of nodes) {
            this.scan(body, n.text, n.startPosition.row);
        }
        if (this.contextParameters.size !== nodes.length)
            throw new Error("Error: not all the variables were found.");
    }
    scan(node, name, line) {
        if (node.startPosition.row >= line)
            return;
        if (node.type === "lexical_declaration" || node.type === "variable_declaration") {
            for (const declarator of node.namedChildren) {
                const nameNode = declarator.childForFieldName("name");
                const valueNode = declarator.childForFieldName("value");
                if ((nameNode === null || nameNode === void 0 ? void 0 : nameNode.text) === name && valueNode) {
                    if (this.isSafe(valueNode)) {
                        this.contextParameters.set(name, this.extractLiteral(valueNode));
                    }
                }
            }
        }
        if (node.type === "assignment_expression") {
            const left = node.childForFieldName("left");
            const right = node.childForFieldName("right");
            if ((left === null || left === void 0 ? void 0 : left.type) === "identifier" && left.text === name && right) {
                if (this.isSafe(right)) {
                    this.contextParameters.set(name, this.extractLiteral(right));
                }
            }
        }
        // Scansiona i figli del nodo corrente, ma è un problema perchè potrei avere valori multipli, risolvibile con una proprietà forse
        for (const child of node.namedChildren) {
            this.scan(child, name, line);
        }
    }
    isSafe(node) {
        const invalidTypes = [
            "arrow_function",
            "function",
            "function_expression",
            "call_expression",
            "identifier"
        ];
        return !invalidTypes.includes(node.type) &&
            !node.descendantsOfType("call_expression").length &&
            !node.descendantsOfType("identifier").length &&
            !node.descendantsOfType("member_expression").length;
    }
    extractLiteral(node) {
        switch (node.type) {
            case "binary_expression":
                return this.evaluateExpression(node);
            case "string":
                return node.text.slice(1, -1);
            case "number":
                return parseFloat(node.text);
            case "true":
                return true;
            case "false":
                return false;
            case "null":
                return null;
            case "undefined":
                return undefined;
            default:
                return null; // non supportato
        }
    }
    extractIdentifiersFromCondition(node) {
        const identifiers = new Set();
        function walk(n) {
            if (n.type === "identifier") {
                identifiers.add(n);
            }
            for (const child of n.namedChildren) {
                walk(child);
            }
        }
        walk(node);
        return Array.from(identifiers);
    }
    /**
     * Ritorna il valore del lato destro dell'espressione binaria o null se non è valido
     * @param node
     * @returns
     */
    evaluateExpression(node) {
        var _a, _b;
        if (!node)
            return null;
        switch (node.type) {
            case "number":
                return Number(node.text);
            case "string":
            case "string_fragment":
                return node.text.slice(1, -1); // remove quotes
            case "true":
                return true;
            case "false":
                return false;
            case "identifier":
                return this.contextParameters.has(node.text) ? this.contextParameters.get(node.text) : null;
            case "parenthesized_expression":
                return this.evaluateExpression(node.namedChildren[0]);
            case "binary_expression": {
                const left = this.evaluateExpression(node.childForFieldName("left"));
                const right = this.evaluateExpression(node.childForFieldName("right"));
                const operator = (_b = (_a = node.childForFieldName("operator")) === null || _a === void 0 ? void 0 : _a.text) !== null && _b !== void 0 ? _b : this.extractOperator(node);
                if (left === null || right === null)
                    return null;
                try {
                    switch (operator) {
                        case "+":
                            return left + right;
                        case "-":
                            return left - right;
                        case "*":
                            return left * right;
                        case "/":
                            return left / right;
                        case "===":
                        case "==":
                            return left == right;
                        case "!==":
                        case "!=":
                            return left != right;
                        case "<":
                            return left < right;
                        case ">":
                            return left > right;
                        case "<=":
                            return left <= right;
                        case ">=":
                            return left >= right;
                        case "&&":
                            return left && right;
                        case "||":
                            return left || right;
                        default:
                            return null;
                    }
                }
                catch (_c) {
                    return null;
                }
            }
            default:
                return null;
        }
    }
    extractOperator(node) {
        // Some parsers (like TypeScript) do not expose 'operator' as a field
        const children = node.children;
        for (const child of children) {
            if (child.isNamed)
                continue;
            return child.text.trim(); // the operator is usually the unnamed child
        }
        return "";
    }
    collectInternalFunctions(node) {
        const stack = [node];
        let currentFunction = null;
        while (stack.length > 0) {
            const currentNode = stack.pop();
            //salvo commenti e loro posizione
            if (currentNode.type === "comment") {
                this.commentLines.add(currentNode);
                if (currentNode.text.includes("miniSL:")) {
                    this.internalFunctions.get(currentFunction).push(currentNode);
                }
            }
            if (!currentNode) {
                continue;
            }
            if (currentNode.type === "function_declaration") {
                const nameNode = currentNode.childForFieldName("name");
                currentFunction = nameNode.text;
                if (nameNode)
                    this.internalFunctions.set(nameNode.text, []);
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
const filePath = "./inputCode/input4.ts";
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