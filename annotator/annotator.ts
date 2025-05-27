import * as fs from 'fs';
import Parser, { SyntaxNode } from "tree-sitter";
import TreeSitterTS from "tree-sitter-typescript";
import { MiniSLAnnotationGenerator } from "./miniSLAnnotationGenerator.js";
import { Config } from "./config.js";
import { ExecutionTreeNode } from "./ExecutionTreeNode.js";
import { text } from 'stream/consumers';

// Extract the correct language parser
const { typescript } = TreeSitterTS;

async function readFile(path: string): Promise<string> {
  try {
    const data = await fs.promises.readFile(path, 'utf-8');
    return data;
  } catch (error) {
    console.error('Error while reading the file:\n', error);
  }
  return ""; // Return empty string in case of error
}

function prettyPrint(node: SyntaxNode, depth = 0): string {
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
  private filePathInput: string;
  private filePathConfig: string;
  private miniSLAnnotatorGenerator: MiniSLAnnotationGenerator;
  private code: string;
  private parser = new Parser();
  private internalFunctions: Map<string, SyntaxNode[]> = new Map<string, SyntaxNode[]>();
  private tree: Parser.Tree;
  private commentLines: Set<SyntaxNode> = new Set<SyntaxNode>();
  private contextParameters = new Map<string, any>();
  private rootNodes: ExecutionTreeNode[] = [];

  constructor(filePathInput: string, filePathConfig: string) {
    this.filePathInput = filePathInput;
    this.filePathConfig = filePathConfig;
    this.code = "";
    this.parser.setLanguage(typescript);
  }

  async loadFile(): Promise<void> {
    this.code = await readFile(this.filePathInput);
    const config: Config = JSON.parse(await readFile(this.filePathConfig));
    this.miniSLAnnotatorGenerator = new MiniSLAnnotationGenerator(config);
  }

  async annotate(entryPoint: string = "main"): Promise<string> {
    if (!this.code) {
      await this.loadFile()
    }

    // Parse the code
    this.tree = this.parser.parse(this.code);
/*     console.log("CST:\n");
    console.log(prettyPrint(this.tree.rootNode));
 */    let edits = [];
    let root;

    // Collect internal functions
    this.collectInternalFunctions(this.tree.rootNode);

    const executionTree = this.buildExecutionTree(this.tree.rootNode, entryPoint);
    if (executionTree) {
      edits.push(...this.followPath(executionTree)); // Passa il nodo radice dell'albero di esecuzione
      console.log(edits);
    } else {
      console.log("Nessun percorso miniSL trovato.");
    }


    // Apply edits in reverse order to avoid index shifting
    //    edits.sort((a, b) => a.pos - b.pos);
    edits.sort((a, b) => b.pos - a.pos);
    let annotatedCode = this.code;
    for (let edit of edits) {
      annotatedCode = annotatedCode.slice(0, edit.pos) + edit.text + annotatedCode.slice(edit.pos);
    }

    return annotatedCode;
  }

  isMiniSLCallComment(node: SyntaxNode): boolean {
    let text = node.text.replace(/\s+/g, "");
    return node.type === "comment" && text.includes("miniSL:call");
  }

  buildExecutionTree(root: SyntaxNode, entryPoint: string): ExecutionTreeNode | null {
    const callGraph = this.buildCallGraph(root);
    const miniSLFunctions = this.findMiniSLFunctions(root);
    const functionsInPath = this.findPathsToMiniSL(callGraph, entryPoint, miniSLFunctions);

    const functionMap = new Map<string, SyntaxNode>();
    for (const fnNode of root.descendantsOfType("function_declaration")) {
      const name = fnNode.childForFieldName("name")?.text;
      if (name) functionMap.set(name, fnNode);
    }

    const visited = new Set<string>();

    function buildSubTree(fnName: string): ExecutionTreeNode | null {
      const fnNode = functionMap.get(fnName);
      if (!fnNode) return null;
      if (visited.has(fnName)) return { node: fnNode, children: [] };
      visited.add(fnName);

      const body = fnNode.childForFieldName("body");
      if (!body) return { node: fnNode, children: [] };

      // Ricorsivamente costruisce tutti i figli del body
      function walk(node: SyntaxNode): ExecutionTreeNode {
        const children: ExecutionTreeNode[] = [];

        for (const child of node.namedChildren) {
          if (child.type === "call_expression") {
            const callee = child.child(0);
            if (callee?.type === "identifier") {
              const calleeName = callee.text;
              if (functionsInPath.has(calleeName)) {
                const subTree = buildSubTree(calleeName);
                if (subTree) {
                  children.push(subTree);
                }
              } else {
                continue; // Non visitare funzioni non annotate
              }
            }
          }

          // Visita tutto comunque
          children.push(walk(child));
        }

        return { node, children };
      }

      // include la function_declaration come nodo padre
      const functionExecutionTree: ExecutionTreeNode = {
        node: fnNode,
        children: [walk(body)]
      };

      return functionExecutionTree;
    }

    return buildSubTree(entryPoint);
  }


  containsMiniSLComment(node: SyntaxNode): boolean {
    if (this.isMiniSLCallComment(node)) return true;

    for (let i = 0; i < node.namedChildCount; i++) {
      const child = node.namedChild(i);
      if (child && this.containsMiniSLComment(child)) return true;
    }

    return false;
  }

  pruneExecutionTree(node: SyntaxNode): SyntaxNode | null {
    // Caso base: se è un commento miniSL, lo teniamo
    if (this.isMiniSLCallComment(node)) return node;

    // Se non ci sono miniSL nei discendenti, tronca il ramo
    if (!this.containsMiniSLComment(node)) return null;

    // Se il nodo è una struttura che può contenere esecuzioni (es. blocchi, funzioni, cicli)
    const executableStructures = new Set([
      "function_declaration",
      "if_statement",
      "for_statement",
      "while_statement",
      "statement_block",
      "program",
      "expression_statement",
      "internal_module",
    ]);

    if (!executableStructures.has(node.type)) {
      return null;
    }

    // Se arriviamo qui, il nodo o uno dei suoi figli contiene un commento miniSL
    // ma dobbiamo ancora filtrare i figli rilevanti
    const filteredChildren: SyntaxNode[] = [];

    for (let i = 0; i < node.namedChildCount; i++) {
      const child = node.namedChild(i);
      if (!child) continue;

      const prunedChild = this.pruneExecutionTree(child);
      if (prunedChild) {
        filteredChildren.push(prunedChild);
      }
    }

    // Tree-sitter non consente di creare nuovi nodi direttamente.
    // In produzione dovresti usare questi nodi per rigenerare codice sorgente o un albero custom.
    if (filteredChildren.length > 0 || this.isMiniSLCallComment(node)) {
      return node; // Qui ritorni il nodo originale ma consapevole che solo i figli filtrati sono rilevanti
    }

    return null;
  }

  followPath(root: ExecutionTreeNode): { pos: number; text: string }[] {
    const edits: { pos: number; text: string }[] = [];
    const stack: ExecutionTreeNode[] = [root];
    let contextParameters: string[];

/*     console.log("Following path in execution tree...");
 */
    while (stack.length > 0) {
      const currentExecutionTreeNode = stack.pop()!;
      const node = currentExecutionTreeNode.node;
      if (!node) {
        continue;
      }

/*       console.log(`Processing node: ${node.type} at ${node.startPosition.row}:${node.startPosition.column}`);
 */
      console
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
          comment = this.miniSLAnnotatorGenerator.getFunctionStatement(functionName + functionParams) + "\n";
          edits.push({ pos: node.startIndex, text: comment });

          this.insertEndStatementComment(node.childForFieldName("body"), edits, this.miniSLAnnotatorGenerator);
        } else {
          console.error("Error: Function name or parameters not found.");
        }
      } else if (node.type === "if_statement") {
        this.contextParameters.clear();
        let conditionNode = node.childForFieldName("condition");
        let identifiers = this.extractIdentifiersFromCondition(conditionNode);
        var condition: String = conditionNode?.text;

        try {
          this.checkDeclaredValue(identifiers);
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

        const elseClause = node.childForFieldName("alternative");
        if (elseClause?.type === "else_clause") {
          const elseComment = this.miniSLAnnotatorGenerator.getElseStatement() + "\n";
          edits.push({ pos: elseClause.startIndex, text: elseComment });

          const closingBrace = elseClause.lastChild.lastChild;
          if (closingBrace?.type === "}") {
            const endComment = this.miniSLAnnotatorGenerator.getEndStatement() + "\n";
            edits.push({ pos: closingBrace.startIndex, text: endComment });
          }
        } else {
          const consequenceBlock = node.childForFieldName("consequence");
          if (consequenceBlock?.type === "statement_block") {
            const closingBrace = consequenceBlock.lastChild;
            if (closingBrace?.type === "}") {
              const endComment = this.miniSLAnnotatorGenerator.getEndStatement() + "\n";
              edits.push({ pos: closingBrace.startIndex, text: endComment });
            }
          }
        }

      } else if (node.type === "for_statement") {

        // For statement: get the initializer and condition
        // For example: for (initializer; condition; update) { body }
        const initializer = node.childForFieldName("initializer");
        const condition = node.childForFieldName("condition");

        try {
          // ottengo le variabili usate nella guardia del for
          this.checkDeclaredValue([initializer.namedChild(0)?.childForFieldName("name")]);
          this.checkDeclaredValue([...this.extractIdentifiersFromCondition(condition)]);
        } catch (error) {
          console.error(error.massage);
        }
        const startIndex = this.getForStartIndex(initializer);
        const endIndex = this.getForEndIndex(condition);
        if (startIndex && endIndex) {
          const comment = this.miniSLAnnotatorGenerator.getForStatement(startIndex, endIndex) + "\n";
          edits.push({ pos: node.startIndex, text: comment });

          this.insertEndStatementComment(node.childForFieldName("body"), edits, this.miniSLAnnotatorGenerator);

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
      }

      stack.push(...currentExecutionTreeNode.children.reverse());
    }

    return edits;
  }

  insertEndStatementComment(blockNode: SyntaxNode | null, edits: { pos: number; text: string }[], generator: any) {
    if (blockNode?.type === "statement_block") {
      const closingBrace = blockNode.lastChild;
      if (closingBrace?.type === "}") {
        const endComment = generator.getEndStatement() + "\n";
        edits.push({ pos: closingBrace.startIndex, text: endComment });
      }
    }
  }

  checkDeclaredValue(nodes: SyntaxNode[]): void {
    const node = nodes[0];
    let value: boolean = null;
    let isParameter: boolean = false;

    if (!node || node.type !== "identifier") {
      throw new Error("Error: node is not an identifier.");
    }

    const name = node.text;
    const line = node.startPosition.row;

    // Risali alla function_declaration più vicina
    let funcNode: SyntaxNode | null = node;
    while (funcNode && funcNode.type !== "function_declaration") {
      funcNode = funcNode.parent;
    }

    if (!funcNode) {
      throw new Error("Error: function not found.");
    }

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
    if (!body) {
      throw new Error("Error: function body not found.");
    }

    for (const n of nodes) {
      this.scan(body, n);
    }

    /*     if (this.contextParameters.size !== nodes.length) {
          throw new Error("Error: not all the variables were found.");
        } */
  }

  isAncestorOfParent(ancestorNode: SyntaxNode, descendantNode: SyntaxNode): boolean {
    let current = descendantNode;

    while (current !== null) {
      if (current.id === ancestorNode.id) {
        return true;
      }
      current = current.parent;
    }

    return false;
  }

  scan(node: SyntaxNode, last: SyntaxNode): void {
    if (node.startPosition.row >= last.startPosition.row) {
      return;
    }

    if (node.type === "if_statement" || node.type === "for_statement" || node.type === "while_statement" || node.type === "do_statement" || node.type === "switch_statement") {
      if (!this.isAncestorOfParent(node, last)) {
        let regex = new RegExp(`\\b(?:let|const|var)?\\s*\\b(${last.text})\\b\\s*(?==)|\\b(${last.text})\\b\\s*(?==)`);
        let assignmentInStatement = node.text.match(regex);
        if (assignmentInStatement) {
          throw new Error(`Error: ${last.text} found in a conditioned block. I can't handle this case.`);
        }
      }
    }

    if (node.type === "lexical_declaration" || node.type === "variable_declaration") {
      for (const declarator of node.namedChildren) {
        const nameNode = declarator.childForFieldName("name");
        const valueNode = declarator.childForFieldName("value");
        if (nameNode?.text === last.text && valueNode) {
          if (this.isSafe(valueNode)) {//separa i due casi di assegnazione presenti in isSafe
            this.contextParameters.set(last.text, this.extractLiteral(valueNode));
          } else if (this.isSafe(valueNode, last)) {
            this.contextParameters.set(last.text, valueNode.text);
          }
        }
      }
    }

    if (node.type === "assignment_expression") {
      const left = node.childForFieldName("left");
      const right = node.childForFieldName("right");
      if (left?.type === "identifier" && left.text === last.text && right) {
        if (this.isSafe(right)) {
          this.contextParameters.set(last.text, this.extractLiteral(right));
        } else if (this.isSafe(right, last)) {
          this.contextParameters.set(last.text, right.text);
        }
      }
    }

    // Scansiona i figli del nodo corrente, ma è un problema perchè potrei avere valori multipli, risolvibile con una proprietà forse
    for (const child of node.namedChildren) {
      this.scan(child, last)
    }
  }

  private isSafe(node: SyntaxNode, safe: SyntaxNode = null): boolean {
    const invalidTypes = [
      "arrow_function",
      "function",
      "function_expression",
      "call_expression",
    ];

    let descendantNodes = node.descendantsOfType("identifier");

    if (descendantNodes.every(node => node.text === safe?.text)) {
      return !invalidTypes.includes(node.type) &&
        !node.descendantsOfType("call_expression").length &&
        !node.descendantsOfType("member_expression").length &&
        !node.descendantsOfType("function_expression").length &&
        !node.descendantsOfType("arrow_function").length &&
        !node.descendantsOfType("function").length;
    } else {
      invalidTypes.push("identifier");
      return !invalidTypes.includes(node.type) &&
        !node.descendantsOfType("call_expression").length &&
        !node.descendantsOfType("identifier").length &&
        !node.descendantsOfType("member_expression").length &&
        !node.descendantsOfType("function_expression").length &&
        !node.descendantsOfType("arrow_function").length &&
        !node.descendantsOfType("function").length;
    }
  }

  extractLiteral(node: SyntaxNode): any {
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

  extractIdentifiersFromCondition(node: SyntaxNode): SyntaxNode[] {
    const identifiers: Set<SyntaxNode> = new Set();

    function walk(n: SyntaxNode) {
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
  evaluateExpression(node: SyntaxNode): any {
    if (!node) {
      return null;
    }

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
        const operator = node.childForFieldName("operator")?.text ?? this.extractOperator(node);

        if (left === null || right === null) {
          return null;
        }

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
        } catch {
          return null;
        }
      }

      default:
        return null;
    }
  }

  extractOperator(node: SyntaxNode): string {
    // Some parsers (like TypeScript) do not expose 'operator' as a field
    const children = node.children;
    for (const child of children) {
      if (child.isNamed) {
        continue;
      }
      return child.text.trim(); // the operator is usually the unnamed child
    }
    return "";
  }


  collectInternalFunctions(node) {
    const stack: Parser.SyntaxNode[] = [node];
    let currentFunction: string = null;

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
        if (nameNode) {
          this.internalFunctions.set(nameNode.text, []);
        }
      }

      stack.push(...currentNode.children.reverse());
    }
  }

  getForEndIndex(condition: Parser.SyntaxNode): string {
    if (condition) {
      let valueNode;

      if (condition.type === "binary_expression") {
        valueNode = condition.child(2); // RHS of binary expression
      } else {
        throw new Error("Error: For statement condition is not a binary expression, i can't handle it.");
      }

      if (!this.isFunctionCall(valueNode)) {
        return valueNode.text;
      } else {
        throw new Error("Error: endIndex in For statement is a function call.");
      }
    }
    throw new Error("Error: condition in For statement not found.");
  }

  getForStartIndex(initializer: Parser.SyntaxNode): string {
    if (initializer) {
      let valueNode;

      if (initializer.type === "lexical_declaration" || initializer.type === "variable_declaration") {
        const declarator = initializer.namedChild(0);
        valueNode = declarator?.childForFieldName("name");
      } else if (initializer.type === "assignment_expression") {
        const leftNode = initializer.childForFieldName('left'); // LHS of assignment
        valueNode = leftNode.type === "identifier" ? leftNode : null; // identifier or member_expression
      }

      if (!this.isFunctionCall(valueNode)) {
        return valueNode.text;
      } else {
        throw new Error("Error: startIndex in For statement is a function call.");
      }
    }

    throw new Error("Error: initializer in For statement not found.");
  }

  isFunctionCall(node: Parser.SyntaxNode): boolean {
    if (!node) {
      return false;
    }

    // Caso base: è una call
    if (node.type === "call_expression") {
      return true;
    }
    // Caso annidato: x = a + myFunc()
    for (let i = 0; i < node.namedChildCount; i++) {
      if (this.isFunctionCall(node.namedChild(i))) {
        return true;
      }
    }

    return false;
  }

  printSyntaxTree(node: Parser.SyntaxNode, sourceCode: string, indent = '', isLast = true): string {
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

  buildCallGraph(root: SyntaxNode): Map<string, Set<string>> {
    const callGraph = new Map<string, Set<string>>();
    const functionNodes = root.descendantsOfType("function_declaration");

    for (const fnNode of functionNodes) {
      const fnName = fnNode.childForFieldName("name")?.text;
      const body = fnNode.childForFieldName("body");

      if (!fnName || !body) continue;

      const called = new Set<string>();

      for (const callExpr of body.descendantsOfType("call_expression")) {
        const callee = callExpr.child(0);
        if (callee?.type === "identifier") {
          called.add(callee.text);
        }
      }

      callGraph.set(fnName, called);
    }

    return callGraph;
  }

  findMiniSLFunctions(root: SyntaxNode): Set<string> {
    const miniSLFunctions = new Set<string>();

    for (const comment of root.descendantsOfType("comment")) {
      if (this.isMiniSLCallComment(comment)) {
        let text = comment.text.replace(/\s+/g, "");
        let fnName = text.split("miniSL:call")[1].trim();
        fnName = fnName.split("(")[0]; // prendo solo il nome della funzione
        miniSLFunctions.add(fnName);
      }
    }

    return miniSLFunctions;
  }

  findPathsToMiniSL(callGraph: Map<string, Set<string>>, entry: string, targets: Set<string>): Set<string> {
    const visited = new Set<string>();
    const result = new Set<string>();

    function dfs(fn: string): boolean {
      if (visited.has(fn)) return result.has(fn);
      visited.add(fn);

      // Fermati se fn è un target, ma non includerlo nel result
      if (targets.has(fn)) {
        return true;
      }

      let isTargetPath = false;
      const callees = callGraph.get(fn) || [];

      for (const callee of callees) {
        // Salta completamente il target, non lo visitiamo né aggiungiamo
        if (targets.has(callee)) {
          isTargetPath = true;
          continue;
        }

        if (dfs(callee)) {
          isTargetPath = true;
        }
      }

      if (isTargetPath) {
        result.add(fn);
      }

      return isTargetPath;
    }

    dfs(entry);
    return result;
  }
}

type SyntaxNodePath = SyntaxNode[]; // Lista ordinata di nodi (percorso esecutivo)

const filePath = "./inputCode/overviewExample.ts";
// const filePath = "./inputCode/input4example.ts";
const filePathConfig = "config.json";
const annotator = new Annotator(filePath, filePathConfig);
annotator.loadFile().then(() => {
/*   console.log(annotator.getFileContent())
 */}).catch((error) => {
  console.error('Error while loading the file:\n', error);
});

annotator.annotate().then((data) => {
  /*   console.log("Annotation completed.");
    console.log(data); */
  fs.writeFileSync("output.ts", data, 'utf-8');
}).catch((error) => {
  console.error('Error while annotating the file:\n', error);
});