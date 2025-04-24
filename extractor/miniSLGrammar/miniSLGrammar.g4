grammar miniSLGrammar;

/*
 * Parser Rules
 */

prg: serviceDecl* init;

init: '(' formalParams? ')' '=>' '{' stm '}';

serviceDecl: 'service' ID ':' '(' 'void' ')' '->' 'void' ';';

//aggiungi statement vuoto?
stm: serviceCall
   | 'if' '(' expOrCall ')' '{' stm '}' 'else' '{' stm '}' stm
   | 'for' '(' ID 'in' 'range' '(' NUMBER ',' exp ')' ')' '{' stm '}' stm
   | ;

serviceCall: 'call' ID '(' (exp (',' exp)*)? ')' stm;

expOrCall: exp | serviceCall;

exp: exp ('+' | '-' | '*' | '/' | '&&' | '||' | '==' | '!=' | '<' | '<=' | '>' | '>=') exp # binExp
   | '(' exp ')' # parenExp
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
