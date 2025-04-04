import * as fs from 'fs';
import Parser from "tree-sitter";
import TreeSitterTS from "tree-sitter-typescript";
import { MiniSLAnnotationGenerator } from "./miniSLAnnotationGenerator.js";
import { Config } from "./config.js";

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

class Annotator {
  private filePathInput: string;
  private filePathConfig: string;
  private miniSLAnnotatorGenerator: MiniSLAnnotationGenerator;
  private code: string;
  private parser = new Parser();

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

  getFileContent(): string {
    return this.code;
  }

  async annotate(): Promise<string> {
    if (!this.code) {
      await this.loadFile()
    }

    // Parse the code
    const tree = this.parser.parse(this.code);
/*     console.log("AST:\n");
    console.log(rootNode.toString());
 */    let indent = "";
    let annotation = "";
    const edits: { pos: number; text: string }[] = [];
    const stack: Parser.SyntaxNode[] = [tree.rootNode];


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
          functionParams = params.join(", ");
          if (functionParams.charAt(functionParams.length - 1) !== ")") {
            functionParams += ")";
          }
          
          const comment = this.miniSLAnnotatorGenerator.getFunctionStatement(functionName + functionParams) + "\n";
          edits.push({ pos: node.startIndex, text: comment });
        }else {
          console.error("Error: Function name or parameters not found.");
        }
      }else if(node.type === "if_statement") {
        const condition = node.childForFieldName("condition")?.text;
        if (condition) {
          const comment = this.miniSLAnnotatorGenerator.getIfStatement(condition) + "\n";
          edits.push({ pos: node.startIndex, text: comment });
        }else {
          console.error("Error: If statement condition not found.");
        }
      }else if(node.type === "else_clause") {
        const comment = this.miniSLAnnotatorGenerator.getElseStatement() + "\n";
        edits.push({ pos: node.startIndex, text: comment });
      }else if(node.type === "for_statement") {
        const iterator = node.childForFieldName("init")?.text;
        const end = node.childForFieldName("end")?.text;
        if (iterator && end) {
          const comment = this.miniSLAnnotatorGenerator.getForStatement(iterator, end) + "\n";
          edits.push({ pos: node.startIndex, text: comment });
        }else {
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
  }
}

const filePath = "./inputCode/input3.ts";
const filePathConfig = "config.json";
const annotator = new Annotator(filePath, filePathConfig);
annotator.loadFile().then(() => {
/*   console.log(annotator.getFileContent())
 */}).catch((error) => {
  console.error('Error while loading the file:\n', error);
});

annotator.annotate().then((data) => {
  console.log("Annotation completed.");
  console.log(data);
  fs.writeFileSync("output.txt", data, 'utf-8');
}).catch((error) => {
  console.error('Error while annotating the file:\n', error);
});