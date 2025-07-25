// Generated from testGrammar.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import { ATNDeserializer, DFA, Lexer, LexerATNSimulator, PredictionContextCache, Token } from "antlr4";
class testGrammarLexer extends Lexer {
    constructor(input) {
        super(input);
        this._interp = new LexerATNSimulator(this, testGrammarLexer._ATN, testGrammarLexer.DecisionsToDFA, new PredictionContextCache());
    }
    get grammarFileName() { return "testGrammar.g4"; }
    get literalNames() { return testGrammarLexer.literalNames; }
    get symbolicNames() { return testGrammarLexer.symbolicNames; }
    get ruleNames() { return testGrammarLexer.ruleNames; }
    get serializedATN() { return testGrammarLexer._serializedATN; }
    get channelNames() { return testGrammarLexer.channelNames; }
    get modeNames() { return testGrammarLexer.modeNames; }
    static get _ATN() {
        if (!testGrammarLexer.__ATN) {
            testGrammarLexer.__ATN = new ATNDeserializer().deserialize(testGrammarLexer._serializedATN);
        }
        return testGrammarLexer.__ATN;
    }
}
testGrammarLexer.T__0 = 1;
testGrammarLexer.T__1 = 2;
testGrammarLexer.T__2 = 3;
testGrammarLexer.T__3 = 4;
testGrammarLexer.T__4 = 5;
testGrammarLexer.T__5 = 6;
testGrammarLexer.T__6 = 7;
testGrammarLexer.SAYS = 8;
testGrammarLexer.SHOUTS = 9;
testGrammarLexer.WORD = 10;
testGrammarLexer.WHITESPACE = 11;
testGrammarLexer.NEWLINE = 12;
testGrammarLexer.TEXT = 13;
testGrammarLexer.NUMBER = 14;
testGrammarLexer.EOF = Token.EOF;
testGrammarLexer.channelNames = ["DEFAULT_TOKEN_CHANNEL", "HIDDEN"];
testGrammarLexer.literalNames = [null, "':'",
    "'-'", "')'",
    "'('", "'/'",
    "'@'", "'+'"];
testGrammarLexer.symbolicNames = [null, null,
    null, null,
    null, null,
    null, null,
    "SAYS", "SHOUTS",
    "WORD", "WHITESPACE",
    "NEWLINE",
    "TEXT", "NUMBER"];
testGrammarLexer.modeNames = ["DEFAULT_MODE",];
testGrammarLexer.ruleNames = [
    "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "A", "S", "Y",
    "H", "O", "U", "T", "LOWERCASE", "UPPERCASE", "SAYS", "SHOUTS", "WORD",
    "WHITESPACE", "NEWLINE", "TEXT", "DIGIT", "NUMBER",
];
testGrammarLexer._serializedATN = [4, 0, 14, 137, 6, -1, 2, 0,
    7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9,
    7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7,
    16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23,
    1, 0, 1, 0, 1, 1, 1, 1, 1, 2, 1, 2, 1, 3, 1, 3, 1, 4, 1, 4, 1, 5, 1, 5, 1, 6, 1, 6, 1, 7, 1, 7, 1, 8, 1, 8,
    1, 9, 1, 9, 1, 10, 1, 10, 1, 11, 1, 11, 1, 12, 1, 12, 1, 13, 1, 13, 1, 14, 1, 14, 1, 15, 1, 15, 1, 16,
    1, 16, 1, 16, 1, 16, 1, 16, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 18, 1, 18, 1, 18, 4,
    18, 97, 8, 18, 11, 18, 12, 18, 98, 1, 19, 4, 19, 102, 8, 19, 11, 19, 12, 19, 103, 1, 20, 3, 20,
    107, 8, 20, 1, 20, 1, 20, 4, 20, 111, 8, 20, 11, 20, 12, 20, 112, 1, 21, 1, 21, 4, 21, 117, 8, 21,
    11, 21, 12, 21, 118, 1, 21, 1, 21, 1, 22, 1, 22, 1, 23, 4, 23, 126, 8, 23, 11, 23, 12, 23, 127,
    1, 23, 1, 23, 4, 23, 132, 8, 23, 11, 23, 12, 23, 133, 3, 23, 136, 8, 23, 0, 0, 24, 1, 1, 3, 2, 5,
    3, 7, 4, 9, 5, 11, 6, 13, 7, 15, 0, 17, 0, 19, 0, 21, 0, 23, 0, 25, 0, 27, 0, 29, 0, 31, 0, 33, 8, 35,
    9, 37, 10, 39, 11, 41, 12, 43, 13, 45, 0, 47, 14, 1, 0, 14, 2, 0, 65, 65, 97, 97, 2, 0, 83, 83, 115,
    115, 2, 0, 89, 89, 121, 121, 2, 0, 72, 72, 104, 104, 2, 0, 79, 79, 111, 111, 2, 0, 85, 85, 117,
    117, 2, 0, 84, 84, 116, 116, 1, 0, 97, 122, 1, 0, 65, 90, 2, 0, 9, 9, 32, 32, 2, 0, 40, 40, 91, 91,
    2, 0, 41, 41, 93, 93, 1, 0, 48, 57, 2, 0, 44, 44, 46, 46, 137, 0, 1, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0,
    5, 1, 0, 0, 0, 0, 7, 1, 0, 0, 0, 0, 9, 1, 0, 0, 0, 0, 11, 1, 0, 0, 0, 0, 13, 1, 0, 0, 0, 0, 33, 1, 0, 0,
    0, 0, 35, 1, 0, 0, 0, 0, 37, 1, 0, 0, 0, 0, 39, 1, 0, 0, 0, 0, 41, 1, 0, 0, 0, 0, 43, 1, 0, 0, 0, 0, 47,
    1, 0, 0, 0, 1, 49, 1, 0, 0, 0, 3, 51, 1, 0, 0, 0, 5, 53, 1, 0, 0, 0, 7, 55, 1, 0, 0, 0, 9, 57, 1, 0, 0,
    0, 11, 59, 1, 0, 0, 0, 13, 61, 1, 0, 0, 0, 15, 63, 1, 0, 0, 0, 17, 65, 1, 0, 0, 0, 19, 67, 1, 0, 0, 0,
    21, 69, 1, 0, 0, 0, 23, 71, 1, 0, 0, 0, 25, 73, 1, 0, 0, 0, 27, 75, 1, 0, 0, 0, 29, 77, 1, 0, 0, 0, 31,
    79, 1, 0, 0, 0, 33, 81, 1, 0, 0, 0, 35, 86, 1, 0, 0, 0, 37, 96, 1, 0, 0, 0, 39, 101, 1, 0, 0, 0, 41,
    110, 1, 0, 0, 0, 43, 114, 1, 0, 0, 0, 45, 122, 1, 0, 0, 0, 47, 125, 1, 0, 0, 0, 49, 50, 5, 58, 0, 0,
    50, 2, 1, 0, 0, 0, 51, 52, 5, 45, 0, 0, 52, 4, 1, 0, 0, 0, 53, 54, 5, 41, 0, 0, 54, 6, 1, 0, 0, 0, 55,
    56, 5, 40, 0, 0, 56, 8, 1, 0, 0, 0, 57, 58, 5, 47, 0, 0, 58, 10, 1, 0, 0, 0, 59, 60, 5, 64, 0, 0, 60,
    12, 1, 0, 0, 0, 61, 62, 5, 43, 0, 0, 62, 14, 1, 0, 0, 0, 63, 64, 7, 0, 0, 0, 64, 16, 1, 0, 0, 0, 65,
    66, 7, 1, 0, 0, 66, 18, 1, 0, 0, 0, 67, 68, 7, 2, 0, 0, 68, 20, 1, 0, 0, 0, 69, 70, 7, 3, 0, 0, 70, 22,
    1, 0, 0, 0, 71, 72, 7, 4, 0, 0, 72, 24, 1, 0, 0, 0, 73, 74, 7, 5, 0, 0, 74, 26, 1, 0, 0, 0, 75, 76, 7,
    6, 0, 0, 76, 28, 1, 0, 0, 0, 77, 78, 7, 7, 0, 0, 78, 30, 1, 0, 0, 0, 79, 80, 7, 8, 0, 0, 80, 32, 1, 0,
    0, 0, 81, 82, 3, 17, 8, 0, 82, 83, 3, 15, 7, 0, 83, 84, 3, 19, 9, 0, 84, 85, 3, 17, 8, 0, 85, 34, 1,
    0, 0, 0, 86, 87, 3, 17, 8, 0, 87, 88, 3, 21, 10, 0, 88, 89, 3, 23, 11, 0, 89, 90, 3, 25, 12, 0, 90,
    91, 3, 27, 13, 0, 91, 92, 3, 17, 8, 0, 92, 36, 1, 0, 0, 0, 93, 97, 3, 29, 14, 0, 94, 97, 3, 31, 15,
    0, 95, 97, 5, 95, 0, 0, 96, 93, 1, 0, 0, 0, 96, 94, 1, 0, 0, 0, 96, 95, 1, 0, 0, 0, 97, 98, 1, 0, 0,
    0, 98, 96, 1, 0, 0, 0, 98, 99, 1, 0, 0, 0, 99, 38, 1, 0, 0, 0, 100, 102, 7, 9, 0, 0, 101, 100, 1, 0,
    0, 0, 102, 103, 1, 0, 0, 0, 103, 101, 1, 0, 0, 0, 103, 104, 1, 0, 0, 0, 104, 40, 1, 0, 0, 0, 105,
    107, 5, 13, 0, 0, 106, 105, 1, 0, 0, 0, 106, 107, 1, 0, 0, 0, 107, 108, 1, 0, 0, 0, 108, 111, 5,
    10, 0, 0, 109, 111, 5, 13, 0, 0, 110, 106, 1, 0, 0, 0, 110, 109, 1, 0, 0, 0, 111, 112, 1, 0, 0, 0,
    112, 110, 1, 0, 0, 0, 112, 113, 1, 0, 0, 0, 113, 42, 1, 0, 0, 0, 114, 116, 7, 10, 0, 0, 115, 117,
    8, 11, 0, 0, 116, 115, 1, 0, 0, 0, 117, 118, 1, 0, 0, 0, 118, 116, 1, 0, 0, 0, 118, 119, 1, 0, 0,
    0, 119, 120, 1, 0, 0, 0, 120, 121, 7, 11, 0, 0, 121, 44, 1, 0, 0, 0, 122, 123, 7, 12, 0, 0, 123,
    46, 1, 0, 0, 0, 124, 126, 3, 45, 22, 0, 125, 124, 1, 0, 0, 0, 126, 127, 1, 0, 0, 0, 127, 125, 1,
    0, 0, 0, 127, 128, 1, 0, 0, 0, 128, 135, 1, 0, 0, 0, 129, 131, 7, 13, 0, 0, 130, 132, 3, 45, 22,
    0, 131, 130, 1, 0, 0, 0, 132, 133, 1, 0, 0, 0, 133, 131, 1, 0, 0, 0, 133, 134, 1, 0, 0, 0, 134, 136,
    1, 0, 0, 0, 135, 129, 1, 0, 0, 0, 135, 136, 1, 0, 0, 0, 136, 48, 1, 0, 0, 0, 11, 0, 96, 98, 103, 106,
    110, 112, 118, 127, 133, 135, 0];
testGrammarLexer.DecisionsToDFA = testGrammarLexer._ATN.decisionToState.map((ds, index) => new DFA(ds, index));
export default testGrammarLexer;
//# sourceMappingURL=testGrammarLexer.js.map