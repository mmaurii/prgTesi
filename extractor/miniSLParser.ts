import * as antlr4 from 'antlr4';
import testGrammarLexer from './miniSLGrammar/miniSLGrammarLexer.js';
import testGrammarParser from './miniSLGrammar/miniSLGrammarParser.js';

export class miniSLParser {
  private fileData: antlr4.CharStream;


  constructor(code: string) {
    this.fileData = new antlr4.CharStream(code);
  }

  async check(): Promise<void> {
    let lexer = new testGrammarLexer(this.fileData);
    let tokens = new antlr4.CommonTokenStream(lexer);
    let parser = new testGrammarParser(tokens);
    parser.buildParseTrees = true;

    const tree = parser.prg();
  }
}