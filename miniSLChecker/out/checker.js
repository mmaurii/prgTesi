var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as antlr4 from 'antlr4';
import testGrammarLexer from './miniSLGrammar/miniSLGrammarLexer.js';
import testGrammarParser from './miniSLGrammar/miniSLGrammarParser.js';
import * as fs from 'fs';
class Checker {
    constructor(code) {
        this.fileData = new antlr4.CharStream(code);
    }
    check() {
        return __awaiter(this, void 0, void 0, function* () {
            let lexer = new testGrammarLexer(this.fileData);
            let tokens = new antlr4.CommonTokenStream(lexer);
            let parser = new testGrammarParser(tokens);
            parser.buildParseTrees = true;
            const tree = parser.prg(); // Change 'chat' to match your grammar's root rule
            // Simple annotation logic: wrap the text in brackets
            //return `[${tree.getText()}]`;
        });
    }
}
// Example usage:
try {
    let code = fs.readFileSync('miniSLCode.txt', 'utf-8');
    const annotator = new Checker(code);
    annotator.check();
    //console.log(annotatedText); // Output: [Hello, World!]
}
catch (error) {
    console.error('Error:', error);
}
//# sourceMappingURL=checker.js.map