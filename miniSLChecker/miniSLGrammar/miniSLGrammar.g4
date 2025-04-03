grammar miniSLGrammar;

/*
 * Parser Rules
 */

prg: serviceDecl* functionDecl* init;

init: '(' formalParams? ')' '=>' '{' stm '}';

serviceDecl: 'service' ID ':' '(' 'void' ')' '->' 'void' ';';

functionDecl: 'fn' ID '(' formalParams? ')' '{' stm '}';

stm: serviceCall
   | 'if' '(' expOrCall ')' '{' stm '}' 'else' '{' stm '}'
   | 'for' '(' ID 'in' '(' NUMBER ',' exp ')' ')' '{' stm '}'
   | functionCall;

serviceCall: 'call' ID '(' (exp (',' exp)*)? ')' stm?;

functionCall: ID '(' (exp (',' exp)*)? ')';

expOrCall: exp | serviceCall;

exp: exp ('+' | '-' | '*' | '/' | '&&' | '==' | '!=' | '<' | '<=' | '>' | '>=') exp # binExp
   | ID '.' ID # callFun
   | STRING # stringExp
   | NUMBER # valExp
   | ID # derExp;

formalParams: ID (',' ID)*;

/*
 * Lexer Rules
 */

fragment CHAR: [a-zA-Z];
ID: [a-zA-Z_][a-zA-Z_0-9]*;

fragment DIGIT: [0-9];
NUMBER: DIGIT+;

STRING: '"' (~["\r\n])* '"';

// Comments and Whitespace
NEWLINE: ('\r\n' | '\r' | '\n') -> skip;
LINECOMMENTS: '//' ~('\n'|'\r')* -> skip;
WS: [ \t]+ -> skip;
BLOCKCOMMENTS: '/*' .*? '*/' -> skip;
