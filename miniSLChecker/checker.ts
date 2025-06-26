import * as antlr4 from 'antlr4';
import miniSLGrammarLexer from './miniSLGrammar/miniSLGrammarLexer.js';
import miniSLGrammarParser from './miniSLGrammar/miniSLGrammarParser.js';
import * as fs from 'fs';

class Checker {
  private fileData: antlr4.CharStream;

  constructor(code: string) {
    this.fileData = new antlr4.CharStream(code);
  }

  async check(): Promise<void> {
    let lexer = new miniSLGrammarLexer(this.fileData);
    let tokens = new antlr4.CommonTokenStream(lexer);
    let parser = new miniSLGrammarParser(tokens);
    parser.buildParseTrees = true;

    const tree = parser.prg(); // Change 'chat' to match your grammar's root rule

    // Simple annotation logic: wrap the text in brackets
    //return `[${tree.getText()}]`;
  }
}

// CLI support
async function main() {
  const args = process.argv.slice(2);
  const codeFile = args[0] || './../extractor/output.txt';
  
  console.log(`Running checker on file: ${codeFile}`);
  
  try {
    let code = fs.readFileSync(codeFile, 'utf-8');
    const checker = new Checker(code);
    await checker.check();
    console.log('Checking completed successfully.');
  } catch (error) {
    console.error('Error during checking process:', error);
    process.exit(1);
  }
}

// Only run if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
}
main().catch(console.error);