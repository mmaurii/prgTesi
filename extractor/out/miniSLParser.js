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
export class miniSLParser {
    constructor(code) {
        this.fileData = new antlr4.CharStream(code);
    }
    check() {
        return __awaiter(this, void 0, void 0, function* () {
            let lexer = new testGrammarLexer(this.fileData);
            let tokens = new antlr4.CommonTokenStream(lexer);
            let parser = new testGrammarParser(tokens);
            parser.buildParseTrees = true;
            const tree = parser.prg();
        });
    }
}
//# sourceMappingURL=miniSLParser.js.map