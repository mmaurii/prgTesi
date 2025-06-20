import * as antlr4 from 'antlr4';
import testGrammarLexer from './miniSLGrammar/miniSLGrammarLexer.js';
import testGrammarParser from './miniSLGrammar/miniSLGrammarParser.js';
import * as fs from 'fs';

class Checker {
  private fileData: antlr4.CharStream;


  constructor(code: string) {
    this.fileData = new antlr4.CharStream(code);
  }

  async check(): Promise<void> {
    let lexer = new testGrammarLexer(this.fileData);
    let tokens = new antlr4.CommonTokenStream(lexer);
    let parser = new testGrammarParser(tokens);
    parser.buildParseTrees = true;

    const tree = parser.prg(); // Change 'chat' to match your grammar's root rule

    // Simple annotation logic: wrap the text in brackets
    //return `[${tree.getText()}]`;
  }
}

// Example usage:
try {
  let code = fs.readFileSync('miniSLCode.txt', 'utf-8');
  const annotator = new Checker(code);
  annotator.check();
  //console.log(annotatedText); // Output: [Hello, World!]
} catch (error) {
  console.error('Error:', error);
}