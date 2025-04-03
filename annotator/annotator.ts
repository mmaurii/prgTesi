import * as fs from 'fs';
import Parser from "tree-sitter";
import TreeSitterTS from "tree-sitter-typescript";

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
  private filePath: string;
  private code: string;
  private parser = new Parser();
  
  constructor(filePath: string) {
    this.filePath = filePath;
    this.code = "";
    this.parser.setLanguage(typescript);
  }

  async loadFile(): Promise<void> {
    this.code = await readFile(this.filePath);
  }

  getFileContent(): string {
    return this.code;
  }

  async annotate(): Promise<string> {
    if(!this.code) {
      await this.loadFile()
    }

    // Parse the code
    const tree = this.parser.parse(this.code);
    const rootNode = tree.rootNode;
    let indent = "";
    let annotation = "";
    const stack: { node: Parser.SyntaxNode; indent: string }[] = [{ node: rootNode, indent: indent }];


    while (stack.length > 0) {
      const { node, indent } = stack.pop()!;

      if (node.type === "function_declaration") {
          const functionName = node.childForFieldName("name")?.text;
          annotation += `// Function: ${functionName}\n`;
      } else if (node.type === "class_declaration") {
          const className = node.childForFieldName("name")?.text;
          annotation += `// Class: ${className}\n`;
      } else if (node.type === "variable_declaration") {
          annotation += `// Variable declaration\n`;
      }

      annotation += indent + this.code.substring(node.startIndex, node.endIndex) + "\n";

      // Add children in reverse order so they are processed correctly
      for (let i = node.children.length - 1; i >= 0; i--) {
          stack.push({ node: node.children[i], indent: indent + "  " });
      }
  }

    return annotation;
  }
}


const filePath = "input.ts";
const annotator = new Annotator(filePath);
annotator.loadFile().then(() => {
  console.log(annotator.getFileContent())
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