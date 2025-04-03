import * as antlr4 from 'antlr4';
import testGrammarLexer from './testGrammar/testGrammarLexer.js';
import testGrammarParser from './testGrammar/testGrammarParser.js';
import * as fs from 'fs';

async function readFile(path: string): Promise<string> {
  try {
    const data = await fs.promises.readFile(path, 'utf-8');
    return data;
  } catch (error) {
    console.error('Error while reading the file:\n', error);
  }
}

class Checker {
  private path: string;

  constructor(path) {
    if (!path) {
      throw new Error("Path is undefined");
    }
    this.path = path;
  }

  async check(): Promise<string> {
    let fileData: antlr4.CharStream = new antlr4.CharStream(await readFile(this.path));
    let lexer = new testGrammarLexer(fileData);
    let tokens = new antlr4.CommonTokenStream(lexer);
    let parser = new testGrammarParser(tokens);
    parser.buildParseTrees = true;

    const tree = parser.chat(); // Change 'chat' to match your grammar's root rule

    // Simple annotation logic: wrap the text in brackets
    return `[${tree.getText()}]`;
  }
}

// Example usage:
try {
  const annotator = new Checker("./miniSLCode.txt");
  const annotatedText = annotator.check();
  console.log(annotatedText); // Output: [Hello, World!]
} catch (error) {
  console.error('Error:', error);
}