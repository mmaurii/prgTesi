// Generated from ECMAScript.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import { ATN, ATNDeserializer, DFA, FailedPredicateException, RecognitionException, NoViableAltException, Parser, ParserATNSimulator, ParserRuleContext, PredictionContextCache, Token } from 'antlr4';
class ECMAScriptParser extends Parser {
    get grammarFileName() { return "ECMAScript.g4"; }
    get literalNames() { return ECMAScriptParser.literalNames; }
    get symbolicNames() { return ECMAScriptParser.symbolicNames; }
    get ruleNames() { return ECMAScriptParser.ruleNames; }
    get serializedATN() { return ECMAScriptParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException(this, predicate, message);
    }
    here(final, int, type) {
        // Get the token ahead of the current index.
        int;
        possibleIndexEosToken = this.getCurrentToken().getTokenIndex() - 1;
        Token;
        ahead = _input.get(possibleIndexEosToken);
        // Check if the token resides on the HIDDEN channel and if it's of the
        // provided type.
        return (ahead.getChannel() == Lexer.HIDDEN) && (ahead.getType() == type);
    }
    lineTerminatorAhead() {
        // Get the token ahead of the current index.
        int;
        possibleIndexEosToken = this.getCurrentToken().getTokenIndex() - 1;
        Token;
        ahead = _input.get(possibleIndexEosToken);
        if (ahead.getChannel() != Lexer.HIDDEN) {
            // We're only interested in tokens on the HIDDEN channel.
            return false;
        }
        if (ahead.getType() == LineTerminator) {
            // There is definitely a line terminator ahead.
            return true;
        }
        if (ahead.getType() == WhiteSpaces) {
            // Get the token ahead of the current whitespaces.
            possibleIndexEosToken = this.getCurrentToken().getTokenIndex() - 2;
            ahead = _input.get(possibleIndexEosToken);
        }
        // Get the token's text and type.
        String;
        text = ahead.getText();
        int;
        type = ahead.getType();
        // Check if the token is, or contains a line terminator.
        return (type == MultiLineComment && (text.contains("\r") || text.contains("\n"))) ||
            (type == LineTerminator);
    }
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator(this, ECMAScriptParser._ATN, ECMAScriptParser.DecisionsToDFA, new PredictionContextCache());
    }
    // @RuleVersion(0)
    program() {
        let localctx = new ProgramContext(this, this._ctx, this.state);
        this.enterRule(localctx, 0, ECMAScriptParser.RULE_program);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 111;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 0, this._ctx)) {
                    case 1:
                        {
                            this.state = 110;
                            this.sourceElements();
                        }
                        break;
                }
                this.state = 113;
                this.match(ECMAScriptParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    sourceElements() {
        let localctx = new SourceElementsContext(this, this._ctx, this.state);
        this.enterRule(localctx, 2, ECMAScriptParser.RULE_sourceElements);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 116;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 115;
                                    this.sourceElement();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException(this);
                    }
                    this.state = 118;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
                } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    sourceElement() {
        let localctx = new SourceElementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 4, ECMAScriptParser.RULE_sourceElement);
        try {
            this.state = 123;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 2, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 120;
                        if (!(_input.LA(1) != Function)) {
                            throw this.createFailedPredicateException("_input.LA(1) != Function");
                        }
                        this.state = 121;
                        this.statement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 122;
                        this.functionDeclaration();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    statement() {
        let localctx = new StatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 6, ECMAScriptParser.RULE_statement);
        try {
            this.state = 141;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 3, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 125;
                        this.block();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 126;
                        this.variableStatement();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 127;
                        this.emptyStatement_();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 128;
                        if (!(_input.LA(1) != OpenBrace)) {
                            throw this.createFailedPredicateException("_input.LA(1) != OpenBrace");
                        }
                        this.state = 129;
                        this.expressionStatement();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 130;
                        this.ifStatement();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 131;
                        this.iterationStatement();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localctx, 7);
                    {
                        this.state = 132;
                        this.continueStatement();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(localctx, 8);
                    {
                        this.state = 133;
                        this.breakStatement();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(localctx, 9);
                    {
                        this.state = 134;
                        this.returnStatement();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(localctx, 10);
                    {
                        this.state = 135;
                        this.withStatement();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(localctx, 11);
                    {
                        this.state = 136;
                        this.labelledStatement();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(localctx, 12);
                    {
                        this.state = 137;
                        this.switchStatement();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(localctx, 13);
                    {
                        this.state = 138;
                        this.throwStatement();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(localctx, 14);
                    {
                        this.state = 139;
                        this.tryStatement();
                    }
                    break;
                case 15:
                    this.enterOuterAlt(localctx, 15);
                    {
                        this.state = 140;
                        this.debuggerStatement();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    block() {
        let localctx = new BlockContext(this, this._ctx, this.state);
        this.enterRule(localctx, 8, ECMAScriptParser.RULE_block);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 143;
                this.match(ECMAScriptParser.OpenBrace);
                this.state = 145;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 4, this._ctx)) {
                    case 1:
                        {
                            this.state = 144;
                            this.statementList();
                        }
                        break;
                }
                this.state = 147;
                this.match(ECMAScriptParser.CloseBrace);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    statementList() {
        let localctx = new StatementListContext(this, this._ctx, this.state);
        this.enterRule(localctx, 10, ECMAScriptParser.RULE_statementList);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 150;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 149;
                                    this.statement();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException(this);
                    }
                    this.state = 152;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
                } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    variableStatement() {
        let localctx = new VariableStatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 12, ECMAScriptParser.RULE_variableStatement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 154;
                this.match(ECMAScriptParser.Var);
                this.state = 155;
                this.variableDeclarationList();
                this.state = 156;
                this.eos();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    variableDeclarationList() {
        let localctx = new VariableDeclarationListContext(this, this._ctx, this.state);
        this.enterRule(localctx, 14, ECMAScriptParser.RULE_variableDeclarationList);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 158;
                this.variableDeclaration();
                this.state = 163;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 159;
                                this.match(ECMAScriptParser.Comma);
                                this.state = 160;
                                this.variableDeclaration();
                            }
                        }
                    }
                    this.state = 165;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    variableDeclaration() {
        let localctx = new VariableDeclarationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 16, ECMAScriptParser.RULE_variableDeclaration);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 166;
                this.match(ECMAScriptParser.Identifier);
                this.state = 168;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 7, this._ctx)) {
                    case 1:
                        {
                            this.state = 167;
                            this.initialiser();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    initialiser() {
        let localctx = new InitialiserContext(this, this._ctx, this.state);
        this.enterRule(localctx, 18, ECMAScriptParser.RULE_initialiser);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 170;
                this.match(ECMAScriptParser.Assign);
                this.state = 171;
                this.singleExpression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    emptyStatement_() {
        let localctx = new EmptyStatement_Context(this, this._ctx, this.state);
        this.enterRule(localctx, 20, ECMAScriptParser.RULE_emptyStatement_);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 173;
                this.match(ECMAScriptParser.SemiColon);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    expressionStatement() {
        let localctx = new ExpressionStatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 22, ECMAScriptParser.RULE_expressionStatement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 175;
                this.expressionSequence();
                this.state = 176;
                this.eos();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    ifStatement() {
        let localctx = new IfStatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 24, ECMAScriptParser.RULE_ifStatement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 178;
                this.match(ECMAScriptParser.If);
                this.state = 179;
                this.match(ECMAScriptParser.OpenParen);
                this.state = 180;
                this.expressionSequence();
                this.state = 181;
                this.match(ECMAScriptParser.CloseParen);
                this.state = 182;
                this.statement();
                this.state = 185;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 8, this._ctx)) {
                    case 1:
                        {
                            this.state = 183;
                            this.match(ECMAScriptParser.Else);
                            this.state = 184;
                            this.statement();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    iterationStatement() {
        let localctx = new IterationStatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 26, ECMAScriptParser.RULE_iterationStatement);
        let _la;
        try {
            this.state = 248;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 14, this._ctx)) {
                case 1:
                    localctx = new DoStatementContext(this, localctx);
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 187;
                        this.match(ECMAScriptParser.Do);
                        this.state = 188;
                        this.statement();
                        this.state = 189;
                        this.match(ECMAScriptParser.While);
                        this.state = 190;
                        this.match(ECMAScriptParser.OpenParen);
                        this.state = 191;
                        this.expressionSequence();
                        this.state = 192;
                        this.match(ECMAScriptParser.CloseParen);
                        this.state = 193;
                        this.eos();
                    }
                    break;
                case 2:
                    localctx = new WhileStatementContext(this, localctx);
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 195;
                        this.match(ECMAScriptParser.While);
                        this.state = 196;
                        this.match(ECMAScriptParser.OpenParen);
                        this.state = 197;
                        this.expressionSequence();
                        this.state = 198;
                        this.match(ECMAScriptParser.CloseParen);
                        this.state = 199;
                        this.statement();
                    }
                    break;
                case 3:
                    localctx = new ForStatementContext(this, localctx);
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 201;
                        this.match(ECMAScriptParser.For);
                        this.state = 202;
                        this.match(ECMAScriptParser.OpenParen);
                        this.state = 204;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2064554) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 281086239) !== 0) || _la === 98 || _la === 99) {
                            {
                                this.state = 203;
                                this.expressionSequence();
                            }
                        }
                        this.state = 206;
                        this.match(ECMAScriptParser.SemiColon);
                        this.state = 208;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2064554) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 281086239) !== 0) || _la === 98 || _la === 99) {
                            {
                                this.state = 207;
                                this.expressionSequence();
                            }
                        }
                        this.state = 210;
                        this.match(ECMAScriptParser.SemiColon);
                        this.state = 212;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2064554) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 281086239) !== 0) || _la === 98 || _la === 99) {
                            {
                                this.state = 211;
                                this.expressionSequence();
                            }
                        }
                        this.state = 214;
                        this.match(ECMAScriptParser.CloseParen);
                        this.state = 215;
                        this.statement();
                    }
                    break;
                case 4:
                    localctx = new ForVarStatementContext(this, localctx);
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 216;
                        this.match(ECMAScriptParser.For);
                        this.state = 217;
                        this.match(ECMAScriptParser.OpenParen);
                        this.state = 218;
                        this.match(ECMAScriptParser.Var);
                        this.state = 219;
                        this.variableDeclarationList();
                        this.state = 220;
                        this.match(ECMAScriptParser.SemiColon);
                        this.state = 222;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2064554) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 281086239) !== 0) || _la === 98 || _la === 99) {
                            {
                                this.state = 221;
                                this.expressionSequence();
                            }
                        }
                        this.state = 224;
                        this.match(ECMAScriptParser.SemiColon);
                        this.state = 226;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2064554) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 281086239) !== 0) || _la === 98 || _la === 99) {
                            {
                                this.state = 225;
                                this.expressionSequence();
                            }
                        }
                        this.state = 228;
                        this.match(ECMAScriptParser.CloseParen);
                        this.state = 229;
                        this.statement();
                    }
                    break;
                case 5:
                    localctx = new ForInStatementContext(this, localctx);
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 231;
                        this.match(ECMAScriptParser.For);
                        this.state = 232;
                        this.match(ECMAScriptParser.OpenParen);
                        this.state = 233;
                        this.singleExpression(0);
                        this.state = 234;
                        this.match(ECMAScriptParser.In);
                        this.state = 235;
                        this.expressionSequence();
                        this.state = 236;
                        this.match(ECMAScriptParser.CloseParen);
                        this.state = 237;
                        this.statement();
                    }
                    break;
                case 6:
                    localctx = new ForVarInStatementContext(this, localctx);
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 239;
                        this.match(ECMAScriptParser.For);
                        this.state = 240;
                        this.match(ECMAScriptParser.OpenParen);
                        this.state = 241;
                        this.match(ECMAScriptParser.Var);
                        this.state = 242;
                        this.variableDeclaration();
                        this.state = 243;
                        this.match(ECMAScriptParser.In);
                        this.state = 244;
                        this.expressionSequence();
                        this.state = 245;
                        this.match(ECMAScriptParser.CloseParen);
                        this.state = 246;
                        this.statement();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    continueStatement() {
        let localctx = new ContinueStatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 28, ECMAScriptParser.RULE_continueStatement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 250;
                this.match(ECMAScriptParser.Continue);
                this.state = 253;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 15, this._ctx)) {
                    case 1:
                        {
                            this.state = 251;
                            if (!(!here(LineTerminator))) {
                                throw this.createFailedPredicateException("!here(LineTerminator)");
                            }
                            this.state = 252;
                            this.match(ECMAScriptParser.Identifier);
                        }
                        break;
                }
                this.state = 255;
                this.eos();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    breakStatement() {
        let localctx = new BreakStatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 30, ECMAScriptParser.RULE_breakStatement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 257;
                this.match(ECMAScriptParser.Break);
                this.state = 260;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 16, this._ctx)) {
                    case 1:
                        {
                            this.state = 258;
                            if (!(!here(LineTerminator))) {
                                throw this.createFailedPredicateException("!here(LineTerminator)");
                            }
                            this.state = 259;
                            this.match(ECMAScriptParser.Identifier);
                        }
                        break;
                }
                this.state = 262;
                this.eos();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    returnStatement() {
        let localctx = new ReturnStatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 32, ECMAScriptParser.RULE_returnStatement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 264;
                this.match(ECMAScriptParser.Return);
                this.state = 267;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 17, this._ctx)) {
                    case 1:
                        {
                            this.state = 265;
                            if (!(!here(LineTerminator))) {
                                throw this.createFailedPredicateException("!here(LineTerminator)");
                            }
                            this.state = 266;
                            this.expressionSequence();
                        }
                        break;
                }
                this.state = 269;
                this.eos();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    withStatement() {
        let localctx = new WithStatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 34, ECMAScriptParser.RULE_withStatement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 271;
                this.match(ECMAScriptParser.With);
                this.state = 272;
                this.match(ECMAScriptParser.OpenParen);
                this.state = 273;
                this.expressionSequence();
                this.state = 274;
                this.match(ECMAScriptParser.CloseParen);
                this.state = 275;
                this.statement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    switchStatement() {
        let localctx = new SwitchStatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 36, ECMAScriptParser.RULE_switchStatement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 277;
                this.match(ECMAScriptParser.Switch);
                this.state = 278;
                this.match(ECMAScriptParser.OpenParen);
                this.state = 279;
                this.expressionSequence();
                this.state = 280;
                this.match(ECMAScriptParser.CloseParen);
                this.state = 281;
                this.caseBlock();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    caseBlock() {
        let localctx = new CaseBlockContext(this, this._ctx, this.state);
        this.enterRule(localctx, 38, ECMAScriptParser.RULE_caseBlock);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 283;
                this.match(ECMAScriptParser.OpenBrace);
                this.state = 285;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 60) {
                    {
                        this.state = 284;
                        this.caseClauses();
                    }
                }
                this.state = 291;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 76) {
                    {
                        this.state = 287;
                        this.defaultClause();
                        this.state = 289;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 60) {
                            {
                                this.state = 288;
                                this.caseClauses();
                            }
                        }
                    }
                }
                this.state = 293;
                this.match(ECMAScriptParser.CloseBrace);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    caseClauses() {
        let localctx = new CaseClausesContext(this, this._ctx, this.state);
        this.enterRule(localctx, 40, ECMAScriptParser.RULE_caseClauses);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 296;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 295;
                            this.caseClause();
                        }
                    }
                    this.state = 298;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === 60);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    caseClause() {
        let localctx = new CaseClauseContext(this, this._ctx, this.state);
        this.enterRule(localctx, 42, ECMAScriptParser.RULE_caseClause);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 300;
                this.match(ECMAScriptParser.Case);
                this.state = 301;
                this.expressionSequence();
                this.state = 302;
                this.match(ECMAScriptParser.Colon);
                this.state = 304;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 22, this._ctx)) {
                    case 1:
                        {
                            this.state = 303;
                            this.statementList();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    defaultClause() {
        let localctx = new DefaultClauseContext(this, this._ctx, this.state);
        this.enterRule(localctx, 44, ECMAScriptParser.RULE_defaultClause);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 306;
                this.match(ECMAScriptParser.Default);
                this.state = 307;
                this.match(ECMAScriptParser.Colon);
                this.state = 309;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 23, this._ctx)) {
                    case 1:
                        {
                            this.state = 308;
                            this.statementList();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    labelledStatement() {
        let localctx = new LabelledStatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 46, ECMAScriptParser.RULE_labelledStatement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 311;
                this.match(ECMAScriptParser.Identifier);
                this.state = 312;
                this.match(ECMAScriptParser.Colon);
                this.state = 313;
                this.statement();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    throwStatement() {
        let localctx = new ThrowStatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 48, ECMAScriptParser.RULE_throwStatement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 315;
                this.match(ECMAScriptParser.Throw);
                this.state = 316;
                if (!(!here(LineTerminator))) {
                    throw this.createFailedPredicateException("!here(LineTerminator)");
                }
                this.state = 317;
                this.expressionSequence();
                this.state = 318;
                this.eos();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    tryStatement() {
        let localctx = new TryStatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 50, ECMAScriptParser.RULE_tryStatement);
        try {
            this.state = 333;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 24, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 320;
                        this.match(ECMAScriptParser.Try);
                        this.state = 321;
                        this.block();
                        this.state = 322;
                        this.catchProduction();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 324;
                        this.match(ECMAScriptParser.Try);
                        this.state = 325;
                        this.block();
                        this.state = 326;
                        this.finallyProduction();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 328;
                        this.match(ECMAScriptParser.Try);
                        this.state = 329;
                        this.block();
                        this.state = 330;
                        this.catchProduction();
                        this.state = 331;
                        this.finallyProduction();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    catchProduction() {
        let localctx = new CatchProductionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 52, ECMAScriptParser.RULE_catchProduction);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 335;
                this.match(ECMAScriptParser.Catch);
                this.state = 336;
                this.match(ECMAScriptParser.OpenParen);
                this.state = 337;
                this.match(ECMAScriptParser.Identifier);
                this.state = 338;
                this.match(ECMAScriptParser.CloseParen);
                this.state = 339;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    finallyProduction() {
        let localctx = new FinallyProductionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 54, ECMAScriptParser.RULE_finallyProduction);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 341;
                this.match(ECMAScriptParser.Finally);
                this.state = 342;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    debuggerStatement() {
        let localctx = new DebuggerStatementContext(this, this._ctx, this.state);
        this.enterRule(localctx, 56, ECMAScriptParser.RULE_debuggerStatement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 344;
                this.match(ECMAScriptParser.Debugger);
                this.state = 345;
                this.eos();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    functionDeclaration() {
        let localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
        this.enterRule(localctx, 58, ECMAScriptParser.RULE_functionDeclaration);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 347;
                this.match(ECMAScriptParser.Function);
                this.state = 348;
                this.match(ECMAScriptParser.Identifier);
                this.state = 349;
                this.match(ECMAScriptParser.OpenParen);
                this.state = 351;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 98) {
                    {
                        this.state = 350;
                        this.formalParameterList();
                    }
                }
                this.state = 353;
                this.match(ECMAScriptParser.CloseParen);
                this.state = 354;
                this.match(ECMAScriptParser.OpenBrace);
                this.state = 355;
                this.functionBody();
                this.state = 356;
                this.match(ECMAScriptParser.CloseBrace);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    formalParameterList() {
        let localctx = new FormalParameterListContext(this, this._ctx, this.state);
        this.enterRule(localctx, 60, ECMAScriptParser.RULE_formalParameterList);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 358;
                this.match(ECMAScriptParser.Identifier);
                this.state = 363;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 10) {
                    {
                        {
                            this.state = 359;
                            this.match(ECMAScriptParser.Comma);
                            this.state = 360;
                            this.match(ECMAScriptParser.Identifier);
                        }
                    }
                    this.state = 365;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    functionBody() {
        let localctx = new FunctionBodyContext(this, this._ctx, this.state);
        this.enterRule(localctx, 62, ECMAScriptParser.RULE_functionBody);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 367;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 27, this._ctx)) {
                    case 1:
                        {
                            this.state = 366;
                            this.sourceElements();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    arrayLiteral() {
        let localctx = new ArrayLiteralContext(this, this._ctx, this.state);
        this.enterRule(localctx, 64, ECMAScriptParser.RULE_arrayLiteral);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 369;
                this.match(ECMAScriptParser.OpenBracket);
                this.state = 371;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 28, this._ctx)) {
                    case 1:
                        {
                            this.state = 370;
                            this.elementList();
                        }
                        break;
                }
                this.state = 374;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 29, this._ctx)) {
                    case 1:
                        {
                            this.state = 373;
                            this.match(ECMAScriptParser.Comma);
                        }
                        break;
                }
                this.state = 377;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 10) {
                    {
                        this.state = 376;
                        this.elision();
                    }
                }
                this.state = 379;
                this.match(ECMAScriptParser.CloseBracket);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    elementList() {
        let localctx = new ElementListContext(this, this._ctx, this.state);
        this.enterRule(localctx, 66, ECMAScriptParser.RULE_elementList);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 382;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 10) {
                    {
                        this.state = 381;
                        this.elision();
                    }
                }
                this.state = 384;
                this.singleExpression(0);
                this.state = 392;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 33, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 385;
                                this.match(ECMAScriptParser.Comma);
                                this.state = 387;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === 10) {
                                    {
                                        this.state = 386;
                                        this.elision();
                                    }
                                }
                                this.state = 389;
                                this.singleExpression(0);
                            }
                        }
                    }
                    this.state = 394;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 33, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    elision() {
        let localctx = new ElisionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 68, ECMAScriptParser.RULE_elision);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 396;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 395;
                            this.match(ECMAScriptParser.Comma);
                        }
                    }
                    this.state = 398;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === 10);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    objectLiteral() {
        let localctx = new ObjectLiteralContext(this, this._ctx, this.state);
        this.enterRule(localctx, 70, ECMAScriptParser.RULE_objectLiteral);
        let _la;
        try {
            this.state = 409;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 36, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 400;
                        this.match(ECMAScriptParser.OpenBrace);
                        this.state = 401;
                        this.match(ECMAScriptParser.CloseBrace);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 402;
                        this.match(ECMAScriptParser.OpenBrace);
                        this.state = 403;
                        this.propertyNameAndValueList();
                        this.state = 405;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 10) {
                            {
                                this.state = 404;
                                this.match(ECMAScriptParser.Comma);
                            }
                        }
                        this.state = 407;
                        this.match(ECMAScriptParser.CloseBrace);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    propertyNameAndValueList() {
        let localctx = new PropertyNameAndValueListContext(this, this._ctx, this.state);
        this.enterRule(localctx, 72, ECMAScriptParser.RULE_propertyNameAndValueList);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 411;
                this.propertyAssignment();
                this.state = 416;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 412;
                                this.match(ECMAScriptParser.Comma);
                                this.state = 413;
                                this.propertyAssignment();
                            }
                        }
                    }
                    this.state = 418;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    propertyAssignment() {
        let localctx = new PropertyAssignmentContext(this, this._ctx, this.state);
        this.enterRule(localctx, 74, ECMAScriptParser.RULE_propertyAssignment);
        try {
            this.state = 438;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 38, this._ctx)) {
                case 1:
                    localctx = new PropertyExpressionAssignmentContext(this, localctx);
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 419;
                        this.propertyName();
                        this.state = 420;
                        this.match(ECMAScriptParser.Colon);
                        this.state = 421;
                        this.singleExpression(0);
                    }
                    break;
                case 2:
                    localctx = new PropertyGetterContext(this, localctx);
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 423;
                        this.getter();
                        this.state = 424;
                        this.match(ECMAScriptParser.OpenParen);
                        this.state = 425;
                        this.match(ECMAScriptParser.CloseParen);
                        this.state = 426;
                        this.match(ECMAScriptParser.OpenBrace);
                        this.state = 427;
                        this.functionBody();
                        this.state = 428;
                        this.match(ECMAScriptParser.CloseBrace);
                    }
                    break;
                case 3:
                    localctx = new PropertySetterContext(this, localctx);
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 430;
                        this.setter();
                        this.state = 431;
                        this.match(ECMAScriptParser.OpenParen);
                        this.state = 432;
                        this.propertySetParameterList();
                        this.state = 433;
                        this.match(ECMAScriptParser.CloseParen);
                        this.state = 434;
                        this.match(ECMAScriptParser.OpenBrace);
                        this.state = 435;
                        this.functionBody();
                        this.state = 436;
                        this.match(ECMAScriptParser.CloseBrace);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    propertyName() {
        let localctx = new PropertyNameContext(this, this._ctx, this.state);
        this.enterRule(localctx, 76, ECMAScriptParser.RULE_propertyName);
        try {
            this.state = 443;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 51:
                case 52:
                case 56:
                case 57:
                case 58:
                case 59:
                case 60:
                case 61:
                case 62:
                case 63:
                case 64:
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                case 91:
                case 92:
                case 93:
                case 94:
                case 95:
                case 96:
                case 97:
                case 98:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 440;
                        this.identifierName();
                    }
                    break;
                case 99:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 441;
                        this.match(ECMAScriptParser.StringLiteral);
                    }
                    break;
                case 53:
                case 54:
                case 55:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 442;
                        this.numericLiteral();
                    }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    propertySetParameterList() {
        let localctx = new PropertySetParameterListContext(this, this._ctx, this.state);
        this.enterRule(localctx, 78, ECMAScriptParser.RULE_propertySetParameterList);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 445;
                this.match(ECMAScriptParser.Identifier);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    arguments() {
        let localctx = new ArgumentsContext(this, this._ctx, this.state);
        this.enterRule(localctx, 80, ECMAScriptParser.RULE_arguments);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 447;
                this.match(ECMAScriptParser.OpenParen);
                this.state = 449;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2064554) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 281086239) !== 0) || _la === 98 || _la === 99) {
                    {
                        this.state = 448;
                        this.argumentList();
                    }
                }
                this.state = 451;
                this.match(ECMAScriptParser.CloseParen);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    argumentList() {
        let localctx = new ArgumentListContext(this, this._ctx, this.state);
        this.enterRule(localctx, 82, ECMAScriptParser.RULE_argumentList);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 453;
                this.singleExpression(0);
                this.state = 458;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 10) {
                    {
                        {
                            this.state = 454;
                            this.match(ECMAScriptParser.Comma);
                            this.state = 455;
                            this.singleExpression(0);
                        }
                    }
                    this.state = 460;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    expressionSequence() {
        let localctx = new ExpressionSequenceContext(this, this._ctx, this.state);
        this.enterRule(localctx, 84, ECMAScriptParser.RULE_expressionSequence);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 461;
                this.singleExpression(0);
                this.state = 466;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 42, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 462;
                                this.match(ECMAScriptParser.Comma);
                                this.state = 463;
                                this.singleExpression(0);
                            }
                        }
                    }
                    this.state = 468;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 42, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    singleExpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let localctx = new SingleExpressionContext(this, this._ctx, _parentState);
        let _prevctx = localctx;
        let _startState = 86;
        this.enterRecursionRule(localctx, 86, ECMAScriptParser.RULE_singleExpression, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 515;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case 73:
                        {
                            localctx = new FunctionExpressionContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 470;
                            this.match(ECMAScriptParser.Function);
                            this.state = 472;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === 98) {
                                {
                                    this.state = 471;
                                    this.match(ECMAScriptParser.Identifier);
                                }
                            }
                            this.state = 474;
                            this.match(ECMAScriptParser.OpenParen);
                            this.state = 476;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === 98) {
                                {
                                    this.state = 475;
                                    this.formalParameterList();
                                }
                            }
                            this.state = 478;
                            this.match(ECMAScriptParser.CloseParen);
                            this.state = 479;
                            this.match(ECMAScriptParser.OpenBrace);
                            this.state = 480;
                            this.functionBody();
                            this.state = 481;
                            this.match(ECMAScriptParser.CloseBrace);
                        }
                        break;
                    case 62:
                        {
                            localctx = new NewExpressionContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 483;
                            this.match(ECMAScriptParser.New);
                            this.state = 484;
                            this.singleExpression(0);
                            this.state = 486;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 45, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 485;
                                        this.arguments();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 79:
                        {
                            localctx = new DeleteExpressionContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 488;
                            this.match(ECMAScriptParser.Delete);
                            this.state = 489;
                            this.singleExpression(30);
                        }
                        break;
                    case 67:
                        {
                            localctx = new VoidExpressionContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 490;
                            this.match(ECMAScriptParser.Void);
                            this.state = 491;
                            this.singleExpression(29);
                        }
                        break;
                    case 59:
                        {
                            localctx = new TypeofExpressionContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 492;
                            this.match(ECMAScriptParser.Typeof);
                            this.state = 493;
                            this.singleExpression(28);
                        }
                        break;
                    case 15:
                        {
                            localctx = new PreIncrementExpressionContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 494;
                            this.match(ECMAScriptParser.PlusPlus);
                            this.state = 495;
                            this.singleExpression(27);
                        }
                        break;
                    case 16:
                        {
                            localctx = new PreDecreaseExpressionContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 496;
                            this.match(ECMAScriptParser.MinusMinus);
                            this.state = 497;
                            this.singleExpression(26);
                        }
                        break;
                    case 17:
                        {
                            localctx = new UnaryPlusExpressionContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 498;
                            this.match(ECMAScriptParser.Plus);
                            this.state = 499;
                            this.singleExpression(25);
                        }
                        break;
                    case 18:
                        {
                            localctx = new UnaryMinusExpressionContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 500;
                            this.match(ECMAScriptParser.Minus);
                            this.state = 501;
                            this.singleExpression(24);
                        }
                        break;
                    case 19:
                        {
                            localctx = new BitNotExpressionContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 502;
                            this.match(ECMAScriptParser.BitNot);
                            this.state = 503;
                            this.singleExpression(23);
                        }
                        break;
                    case 20:
                        {
                            localctx = new NotExpressionContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 504;
                            this.match(ECMAScriptParser.Not);
                            this.state = 505;
                            this.singleExpression(22);
                        }
                        break;
                    case 74:
                        {
                            localctx = new ThisExpressionContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 506;
                            this.match(ECMAScriptParser.This);
                        }
                        break;
                    case 98:
                        {
                            localctx = new IdentifierExpressionContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 507;
                            this.match(ECMAScriptParser.Identifier);
                        }
                        break;
                    case 1:
                    case 51:
                    case 52:
                    case 53:
                    case 54:
                    case 55:
                    case 99:
                        {
                            localctx = new LiteralExpressionContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 508;
                            this.literal();
                        }
                        break;
                    case 3:
                        {
                            localctx = new ArrayLiteralExpressionContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 509;
                            this.arrayLiteral();
                        }
                        break;
                    case 7:
                        {
                            localctx = new ObjectLiteralExpressionContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 510;
                            this.objectLiteral();
                        }
                        break;
                    case 5:
                        {
                            localctx = new ParenthesizedExpressionContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 511;
                            this.match(ECMAScriptParser.OpenParen);
                            this.state = 512;
                            this.expressionSequence();
                            this.state = 513;
                            this.match(ECMAScriptParser.CloseParen);
                        }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 584;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 48, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            this.state = 582;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 47, this._ctx)) {
                                case 1:
                                    {
                                        localctx = new MultiplicativeExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 517;
                                        if (!(this.precpred(this._ctx, 21))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
                                        }
                                        this.state = 518;
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 14680064) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 519;
                                        this.singleExpression(22);
                                    }
                                    break;
                                case 2:
                                    {
                                        localctx = new AdditiveExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 520;
                                        if (!(this.precpred(this._ctx, 20))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
                                        }
                                        this.state = 521;
                                        _la = this._input.LA(1);
                                        if (!(_la === 17 || _la === 18)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 522;
                                        this.singleExpression(21);
                                    }
                                    break;
                                case 3:
                                    {
                                        localctx = new BitShiftExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 523;
                                        if (!(this.precpred(this._ctx, 19))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
                                        }
                                        this.state = 524;
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 117440512) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 525;
                                        this.singleExpression(20);
                                    }
                                    break;
                                case 4:
                                    {
                                        localctx = new RelationalExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 526;
                                        if (!(this.precpred(this._ctx, 18))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
                                        }
                                        this.state = 527;
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 2013265920) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 528;
                                        this.singleExpression(19);
                                    }
                                    break;
                                case 5:
                                    {
                                        localctx = new InstanceofExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 529;
                                        if (!(this.precpred(this._ctx, 17))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
                                        }
                                        this.state = 530;
                                        this.match(ECMAScriptParser.Instanceof);
                                        this.state = 531;
                                        this.singleExpression(18);
                                    }
                                    break;
                                case 6:
                                    {
                                        localctx = new InExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 532;
                                        if (!(this.precpred(this._ctx, 16))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
                                        }
                                        this.state = 533;
                                        this.match(ECMAScriptParser.In);
                                        this.state = 534;
                                        this.singleExpression(17);
                                    }
                                    break;
                                case 7:
                                    {
                                        localctx = new EqualityExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 535;
                                        if (!(this.precpred(this._ctx, 15))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
                                        }
                                        this.state = 536;
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & 15) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 537;
                                        this.singleExpression(16);
                                    }
                                    break;
                                case 8:
                                    {
                                        localctx = new BitAndExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 538;
                                        if (!(this.precpred(this._ctx, 14))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
                                        }
                                        this.state = 539;
                                        this.match(ECMAScriptParser.BitAnd);
                                        this.state = 540;
                                        this.singleExpression(15);
                                    }
                                    break;
                                case 9:
                                    {
                                        localctx = new BitXOrExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 541;
                                        if (!(this.precpred(this._ctx, 13))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
                                        }
                                        this.state = 542;
                                        this.match(ECMAScriptParser.BitXOr);
                                        this.state = 543;
                                        this.singleExpression(14);
                                    }
                                    break;
                                case 10:
                                    {
                                        localctx = new BitOrExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 544;
                                        if (!(this.precpred(this._ctx, 12))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
                                        }
                                        this.state = 545;
                                        this.match(ECMAScriptParser.BitOr);
                                        this.state = 546;
                                        this.singleExpression(13);
                                    }
                                    break;
                                case 11:
                                    {
                                        localctx = new LogicalAndExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 547;
                                        if (!(this.precpred(this._ctx, 11))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
                                        }
                                        this.state = 548;
                                        this.match(ECMAScriptParser.And);
                                        this.state = 549;
                                        this.singleExpression(12);
                                    }
                                    break;
                                case 12:
                                    {
                                        localctx = new LogicalOrExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 550;
                                        if (!(this.precpred(this._ctx, 10))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
                                        }
                                        this.state = 551;
                                        this.match(ECMAScriptParser.Or);
                                        this.state = 552;
                                        this.singleExpression(11);
                                    }
                                    break;
                                case 13:
                                    {
                                        localctx = new TernaryExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 553;
                                        if (!(this.precpred(this._ctx, 9))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
                                        }
                                        this.state = 554;
                                        this.match(ECMAScriptParser.QuestionMark);
                                        this.state = 555;
                                        this.singleExpression(0);
                                        this.state = 556;
                                        this.match(ECMAScriptParser.Colon);
                                        this.state = 557;
                                        this.singleExpression(10);
                                    }
                                    break;
                                case 14:
                                    {
                                        localctx = new AssignmentExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 559;
                                        if (!(this.precpred(this._ctx, 8))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
                                        }
                                        this.state = 560;
                                        this.match(ECMAScriptParser.Assign);
                                        this.state = 561;
                                        this.singleExpression(9);
                                    }
                                    break;
                                case 15:
                                    {
                                        localctx = new AssignmentOperatorExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 562;
                                        if (!(this.precpred(this._ctx, 7))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
                                        }
                                        this.state = 563;
                                        this.assignmentOperator();
                                        this.state = 564;
                                        this.singleExpression(8);
                                    }
                                    break;
                                case 16:
                                    {
                                        localctx = new MemberIndexExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 566;
                                        if (!(this.precpred(this._ctx, 36))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 36)");
                                        }
                                        this.state = 567;
                                        this.match(ECMAScriptParser.OpenBracket);
                                        this.state = 568;
                                        this.expressionSequence();
                                        this.state = 569;
                                        this.match(ECMAScriptParser.CloseBracket);
                                    }
                                    break;
                                case 17:
                                    {
                                        localctx = new MemberDotExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 571;
                                        if (!(this.precpred(this._ctx, 35))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 35)");
                                        }
                                        this.state = 572;
                                        this.match(ECMAScriptParser.Dot);
                                        this.state = 573;
                                        this.identifierName();
                                    }
                                    break;
                                case 18:
                                    {
                                        localctx = new ArgumentsExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 574;
                                        if (!(this.precpred(this._ctx, 34))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 34)");
                                        }
                                        this.state = 575;
                                        this.arguments();
                                    }
                                    break;
                                case 19:
                                    {
                                        localctx = new PostIncrementExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 576;
                                        if (!(this.precpred(this._ctx, 32))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 32)");
                                        }
                                        this.state = 577;
                                        if (!(!here(LineTerminator))) {
                                            throw this.createFailedPredicateException("!here(LineTerminator)");
                                        }
                                        this.state = 578;
                                        this.match(ECMAScriptParser.PlusPlus);
                                    }
                                    break;
                                case 20:
                                    {
                                        localctx = new PostDecreaseExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 579;
                                        if (!(this.precpred(this._ctx, 31))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 31)");
                                        }
                                        this.state = 580;
                                        if (!(!here(LineTerminator))) {
                                            throw this.createFailedPredicateException("!here(LineTerminator)");
                                        }
                                        this.state = 581;
                                        this.match(ECMAScriptParser.MinusMinus);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 586;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 48, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return localctx;
    }
    // @RuleVersion(0)
    assignmentOperator() {
        let localctx = new AssignmentOperatorContext(this, this._ctx, this.state);
        this.enterRule(localctx, 88, ECMAScriptParser.RULE_assignmentOperator);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 587;
                _la = this._input.LA(1);
                if (!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 2047) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    literal() {
        let localctx = new LiteralContext(this, this._ctx, this.state);
        this.enterRule(localctx, 90, ECMAScriptParser.RULE_literal);
        let _la;
        try {
            this.state = 591;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 1:
                case 51:
                case 52:
                case 99:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 589;
                        _la = this._input.LA(1);
                        if (!(_la === 1 || _la === 51 || _la === 52 || _la === 99)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                    break;
                case 53:
                case 54:
                case 55:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 590;
                        this.numericLiteral();
                    }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    numericLiteral() {
        let localctx = new NumericLiteralContext(this, this._ctx, this.state);
        this.enterRule(localctx, 92, ECMAScriptParser.RULE_numericLiteral);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 593;
                _la = this._input.LA(1);
                if (!(((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & 7) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    identifierName() {
        let localctx = new IdentifierNameContext(this, this._ctx, this.state);
        this.enterRule(localctx, 94, ECMAScriptParser.RULE_identifierName);
        try {
            this.state = 597;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 98:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 595;
                        this.match(ECMAScriptParser.Identifier);
                    }
                    break;
                case 51:
                case 52:
                case 56:
                case 57:
                case 58:
                case 59:
                case 60:
                case 61:
                case 62:
                case 63:
                case 64:
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                case 91:
                case 92:
                case 93:
                case 94:
                case 95:
                case 96:
                case 97:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 596;
                        this.reservedWord();
                    }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    reservedWord() {
        let localctx = new ReservedWordContext(this, this._ctx, this.state);
        this.enterRule(localctx, 96, ECMAScriptParser.RULE_reservedWord);
        let _la;
        try {
            this.state = 602;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 56:
                case 57:
                case 58:
                case 59:
                case 60:
                case 61:
                case 62:
                case 63:
                case 64:
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 599;
                        this.keyword();
                    }
                    break;
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                case 91:
                case 92:
                case 93:
                case 94:
                case 95:
                case 96:
                case 97:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 600;
                        this.futureReservedWord();
                    }
                    break;
                case 51:
                case 52:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 601;
                        _la = this._input.LA(1);
                        if (!(_la === 51 || _la === 52)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    keyword() {
        let localctx = new KeywordContext(this, this._ctx, this.state);
        this.enterRule(localctx, 98, ECMAScriptParser.RULE_keyword);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 604;
                _la = this._input.LA(1);
                if (!(((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 67108863) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    futureReservedWord() {
        let localctx = new FutureReservedWordContext(this, this._ctx, this.state);
        this.enterRule(localctx, 100, ECMAScriptParser.RULE_futureReservedWord);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 606;
                _la = this._input.LA(1);
                if (!(((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & 65535) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    getter() {
        let localctx = new GetterContext(this, this._ctx, this.state);
        this.enterRule(localctx, 102, ECMAScriptParser.RULE_getter);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 608;
                if (!(_input.LT(1).getText().equals("get"))) {
                    throw this.createFailedPredicateException("_input.LT(1).getText().equals(\"get\")");
                }
                this.state = 609;
                this.match(ECMAScriptParser.Identifier);
                this.state = 610;
                this.propertyName();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    setter() {
        let localctx = new SetterContext(this, this._ctx, this.state);
        this.enterRule(localctx, 104, ECMAScriptParser.RULE_setter);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 612;
                if (!(_input.LT(1).getText().equals("set"))) {
                    throw this.createFailedPredicateException("_input.LT(1).getText().equals(\"set\")");
                }
                this.state = 613;
                this.match(ECMAScriptParser.Identifier);
                this.state = 614;
                this.propertyName();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    eos() {
        let localctx = new EosContext(this, this._ctx, this.state);
        this.enterRule(localctx, 106, ECMAScriptParser.RULE_eos);
        try {
            this.state = 620;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 52, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 616;
                        this.match(ECMAScriptParser.SemiColon);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 617;
                        this.match(ECMAScriptParser.EOF);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 618;
                        if (!(lineTerminatorAhead())) {
                            throw this.createFailedPredicateException("lineTerminatorAhead()");
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 619;
                        if (!(_input.LT(1).getType() == CloseBrace)) {
                            throw this.createFailedPredicateException("_input.LT(1).getType() == CloseBrace");
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    eof() {
        let localctx = new EofContext(this, this._ctx, this.state);
        this.enterRule(localctx, 108, ECMAScriptParser.RULE_eof);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 622;
                this.match(ECMAScriptParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    sempred(localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 2:
                return this.sourceElement_sempred(localctx, predIndex);
            case 3:
                return this.statement_sempred(localctx, predIndex);
            case 14:
                return this.continueStatement_sempred(localctx, predIndex);
            case 15:
                return this.breakStatement_sempred(localctx, predIndex);
            case 16:
                return this.returnStatement_sempred(localctx, predIndex);
            case 24:
                return this.throwStatement_sempred(localctx, predIndex);
            case 43:
                return this.singleExpression_sempred(localctx, predIndex);
            case 51:
                return this.getter_sempred(localctx, predIndex);
            case 52:
                return this.setter_sempred(localctx, predIndex);
            case 53:
                return this.eos_sempred(localctx, predIndex);
        }
        return true;
    }
    sourceElement_sempred(localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return _input.LA(1) != Function;
        }
        return true;
    }
    statement_sempred(localctx, predIndex) {
        switch (predIndex) {
            case 1:
                return _input.LA(1) != OpenBrace;
        }
        return true;
    }
    continueStatement_sempred(localctx, predIndex) {
        switch (predIndex) {
            case 2:
                return !here(LineTerminator);
        }
        return true;
    }
    breakStatement_sempred(localctx, predIndex) {
        switch (predIndex) {
            case 3:
                return !here(LineTerminator);
        }
        return true;
    }
    returnStatement_sempred(localctx, predIndex) {
        switch (predIndex) {
            case 4:
                return !here(LineTerminator);
        }
        return true;
    }
    throwStatement_sempred(localctx, predIndex) {
        switch (predIndex) {
            case 5:
                return !here(LineTerminator);
        }
        return true;
    }
    singleExpression_sempred(localctx, predIndex) {
        switch (predIndex) {
            case 6:
                return this.precpred(this._ctx, 21);
            case 7:
                return this.precpred(this._ctx, 20);
            case 8:
                return this.precpred(this._ctx, 19);
            case 9:
                return this.precpred(this._ctx, 18);
            case 10:
                return this.precpred(this._ctx, 17);
            case 11:
                return this.precpred(this._ctx, 16);
            case 12:
                return this.precpred(this._ctx, 15);
            case 13:
                return this.precpred(this._ctx, 14);
            case 14:
                return this.precpred(this._ctx, 13);
            case 15:
                return this.precpred(this._ctx, 12);
            case 16:
                return this.precpred(this._ctx, 11);
            case 17:
                return this.precpred(this._ctx, 10);
            case 18:
                return this.precpred(this._ctx, 9);
            case 19:
                return this.precpred(this._ctx, 8);
            case 20:
                return this.precpred(this._ctx, 7);
            case 21:
                return this.precpred(this._ctx, 36);
            case 22:
                return this.precpred(this._ctx, 35);
            case 23:
                return this.precpred(this._ctx, 34);
            case 24:
                return this.precpred(this._ctx, 32);
            case 25:
                return !here(LineTerminator);
            case 26:
                return this.precpred(this._ctx, 31);
            case 27:
                return !here(LineTerminator);
        }
        return true;
    }
    getter_sempred(localctx, predIndex) {
        switch (predIndex) {
            case 28:
                return _input.LT(1).getText().equals("get");
        }
        return true;
    }
    setter_sempred(localctx, predIndex) {
        switch (predIndex) {
            case 29:
                return _input.LT(1).getText().equals("set");
        }
        return true;
    }
    eos_sempred(localctx, predIndex) {
        switch (predIndex) {
            case 30:
                return lineTerminatorAhead();
            case 31:
                return _input.LT(1).getType() == CloseBrace;
        }
        return true;
    }
    static get _ATN() {
        if (!ECMAScriptParser.__ATN) {
            ECMAScriptParser.__ATN = new ATNDeserializer().deserialize(ECMAScriptParser._serializedATN);
        }
        return ECMAScriptParser.__ATN;
    }
}
ECMAScriptParser.RegularExpressionLiteral = 1;
ECMAScriptParser.LineTerminator = 2;
ECMAScriptParser.OpenBracket = 3;
ECMAScriptParser.CloseBracket = 4;
ECMAScriptParser.OpenParen = 5;
ECMAScriptParser.CloseParen = 6;
ECMAScriptParser.OpenBrace = 7;
ECMAScriptParser.CloseBrace = 8;
ECMAScriptParser.SemiColon = 9;
ECMAScriptParser.Comma = 10;
ECMAScriptParser.Assign = 11;
ECMAScriptParser.QuestionMark = 12;
ECMAScriptParser.Colon = 13;
ECMAScriptParser.Dot = 14;
ECMAScriptParser.PlusPlus = 15;
ECMAScriptParser.MinusMinus = 16;
ECMAScriptParser.Plus = 17;
ECMAScriptParser.Minus = 18;
ECMAScriptParser.BitNot = 19;
ECMAScriptParser.Not = 20;
ECMAScriptParser.Multiply = 21;
ECMAScriptParser.Divide = 22;
ECMAScriptParser.Modulus = 23;
ECMAScriptParser.RightShiftArithmetic = 24;
ECMAScriptParser.LeftShiftArithmetic = 25;
ECMAScriptParser.RightShiftLogical = 26;
ECMAScriptParser.LessThan = 27;
ECMAScriptParser.MoreThan = 28;
ECMAScriptParser.LessThanEquals = 29;
ECMAScriptParser.GreaterThanEquals = 30;
ECMAScriptParser.Equals = 31;
ECMAScriptParser.NotEquals = 32;
ECMAScriptParser.IdentityEquals = 33;
ECMAScriptParser.IdentityNotEquals = 34;
ECMAScriptParser.BitAnd = 35;
ECMAScriptParser.BitXOr = 36;
ECMAScriptParser.BitOr = 37;
ECMAScriptParser.And = 38;
ECMAScriptParser.Or = 39;
ECMAScriptParser.MultiplyAssign = 40;
ECMAScriptParser.DivideAssign = 41;
ECMAScriptParser.ModulusAssign = 42;
ECMAScriptParser.PlusAssign = 43;
ECMAScriptParser.MinusAssign = 44;
ECMAScriptParser.LeftShiftArithmeticAssign = 45;
ECMAScriptParser.RightShiftArithmeticAssign = 46;
ECMAScriptParser.RightShiftLogicalAssign = 47;
ECMAScriptParser.BitAndAssign = 48;
ECMAScriptParser.BitXorAssign = 49;
ECMAScriptParser.BitOrAssign = 50;
ECMAScriptParser.NullLiteral = 51;
ECMAScriptParser.BooleanLiteral = 52;
ECMAScriptParser.DecimalLiteral = 53;
ECMAScriptParser.HexIntegerLiteral = 54;
ECMAScriptParser.OctalIntegerLiteral = 55;
ECMAScriptParser.Break = 56;
ECMAScriptParser.Do = 57;
ECMAScriptParser.Instanceof = 58;
ECMAScriptParser.Typeof = 59;
ECMAScriptParser.Case = 60;
ECMAScriptParser.Else = 61;
ECMAScriptParser.New = 62;
ECMAScriptParser.Var = 63;
ECMAScriptParser.Catch = 64;
ECMAScriptParser.Finally = 65;
ECMAScriptParser.Return = 66;
ECMAScriptParser.Void = 67;
ECMAScriptParser.Continue = 68;
ECMAScriptParser.For = 69;
ECMAScriptParser.Switch = 70;
ECMAScriptParser.While = 71;
ECMAScriptParser.Debugger = 72;
ECMAScriptParser.Function = 73;
ECMAScriptParser.This = 74;
ECMAScriptParser.With = 75;
ECMAScriptParser.Default = 76;
ECMAScriptParser.If = 77;
ECMAScriptParser.Throw = 78;
ECMAScriptParser.Delete = 79;
ECMAScriptParser.In = 80;
ECMAScriptParser.Try = 81;
ECMAScriptParser.Class = 82;
ECMAScriptParser.Enum = 83;
ECMAScriptParser.Extends = 84;
ECMAScriptParser.Super = 85;
ECMAScriptParser.Const = 86;
ECMAScriptParser.Export = 87;
ECMAScriptParser.Import = 88;
ECMAScriptParser.Implements = 89;
ECMAScriptParser.Let = 90;
ECMAScriptParser.Private = 91;
ECMAScriptParser.Public = 92;
ECMAScriptParser.Interface = 93;
ECMAScriptParser.Package = 94;
ECMAScriptParser.Protected = 95;
ECMAScriptParser.Static = 96;
ECMAScriptParser.Yield = 97;
ECMAScriptParser.Identifier = 98;
ECMAScriptParser.StringLiteral = 99;
ECMAScriptParser.WhiteSpaces = 100;
ECMAScriptParser.MultiLineComment = 101;
ECMAScriptParser.SingleLineComment = 102;
ECMAScriptParser.UnexpectedCharacter = 103;
ECMAScriptParser.EOF = Token.EOF;
ECMAScriptParser.RULE_program = 0;
ECMAScriptParser.RULE_sourceElements = 1;
ECMAScriptParser.RULE_sourceElement = 2;
ECMAScriptParser.RULE_statement = 3;
ECMAScriptParser.RULE_block = 4;
ECMAScriptParser.RULE_statementList = 5;
ECMAScriptParser.RULE_variableStatement = 6;
ECMAScriptParser.RULE_variableDeclarationList = 7;
ECMAScriptParser.RULE_variableDeclaration = 8;
ECMAScriptParser.RULE_initialiser = 9;
ECMAScriptParser.RULE_emptyStatement_ = 10;
ECMAScriptParser.RULE_expressionStatement = 11;
ECMAScriptParser.RULE_ifStatement = 12;
ECMAScriptParser.RULE_iterationStatement = 13;
ECMAScriptParser.RULE_continueStatement = 14;
ECMAScriptParser.RULE_breakStatement = 15;
ECMAScriptParser.RULE_returnStatement = 16;
ECMAScriptParser.RULE_withStatement = 17;
ECMAScriptParser.RULE_switchStatement = 18;
ECMAScriptParser.RULE_caseBlock = 19;
ECMAScriptParser.RULE_caseClauses = 20;
ECMAScriptParser.RULE_caseClause = 21;
ECMAScriptParser.RULE_defaultClause = 22;
ECMAScriptParser.RULE_labelledStatement = 23;
ECMAScriptParser.RULE_throwStatement = 24;
ECMAScriptParser.RULE_tryStatement = 25;
ECMAScriptParser.RULE_catchProduction = 26;
ECMAScriptParser.RULE_finallyProduction = 27;
ECMAScriptParser.RULE_debuggerStatement = 28;
ECMAScriptParser.RULE_functionDeclaration = 29;
ECMAScriptParser.RULE_formalParameterList = 30;
ECMAScriptParser.RULE_functionBody = 31;
ECMAScriptParser.RULE_arrayLiteral = 32;
ECMAScriptParser.RULE_elementList = 33;
ECMAScriptParser.RULE_elision = 34;
ECMAScriptParser.RULE_objectLiteral = 35;
ECMAScriptParser.RULE_propertyNameAndValueList = 36;
ECMAScriptParser.RULE_propertyAssignment = 37;
ECMAScriptParser.RULE_propertyName = 38;
ECMAScriptParser.RULE_propertySetParameterList = 39;
ECMAScriptParser.RULE_arguments = 40;
ECMAScriptParser.RULE_argumentList = 41;
ECMAScriptParser.RULE_expressionSequence = 42;
ECMAScriptParser.RULE_singleExpression = 43;
ECMAScriptParser.RULE_assignmentOperator = 44;
ECMAScriptParser.RULE_literal = 45;
ECMAScriptParser.RULE_numericLiteral = 46;
ECMAScriptParser.RULE_identifierName = 47;
ECMAScriptParser.RULE_reservedWord = 48;
ECMAScriptParser.RULE_keyword = 49;
ECMAScriptParser.RULE_futureReservedWord = 50;
ECMAScriptParser.RULE_getter = 51;
ECMAScriptParser.RULE_setter = 52;
ECMAScriptParser.RULE_eos = 53;
ECMAScriptParser.RULE_eof = 54;
ECMAScriptParser.literalNames = [null, null,
    null, "'['",
    "']'", "'('",
    "')'", "'{'",
    "'}'", "';'",
    "','", "'='",
    "'?'", "':'",
    "'.'", "'++'",
    "'--'", "'+'",
    "'-'", "'~'",
    "'!'", "'*'",
    "'/'", "'%'",
    "'>>'", "'<<'",
    "'>>>'", "'<'",
    "'>'", "'<='",
    "'>='", "'=='",
    "'!='", "'==='",
    "'!=='", "'&'",
    "'^'", "'|'",
    "'&&'", "'||'",
    "'*='", "'/='",
    "'%='", "'+='",
    "'-='", "'<<='",
    "'>>='", "'>>>='",
    "'&='", "'^='",
    "'|='", "'null'",
    null, null,
    null, null,
    "'break'", "'do'",
    "'instanceof'",
    "'typeof'",
    "'case'", "'else'",
    "'new'", "'var'",
    "'catch'", "'finally'",
    "'return'",
    "'void'", "'continue'",
    "'for'", "'switch'",
    "'while'", "'debugger'",
    "'function'",
    "'this'", "'with'",
    "'default'",
    "'if'", "'throw'",
    "'delete'",
    "'in'", "'try'",
    "'class'", "'enum'",
    "'extends'",
    "'super'", "'const'",
    "'export'",
    "'import'"];
ECMAScriptParser.symbolicNames = [null, "RegularExpressionLiteral",
    "LineTerminator",
    "OpenBracket",
    "CloseBracket",
    "OpenParen",
    "CloseParen",
    "OpenBrace",
    "CloseBrace",
    "SemiColon",
    "Comma", "Assign",
    "QuestionMark",
    "Colon", "Dot",
    "PlusPlus",
    "MinusMinus",
    "Plus", "Minus",
    "BitNot", "Not",
    "Multiply",
    "Divide", "Modulus",
    "RightShiftArithmetic",
    "LeftShiftArithmetic",
    "RightShiftLogical",
    "LessThan",
    "MoreThan",
    "LessThanEquals",
    "GreaterThanEquals",
    "Equals", "NotEquals",
    "IdentityEquals",
    "IdentityNotEquals",
    "BitAnd", "BitXOr",
    "BitOr", "And",
    "Or", "MultiplyAssign",
    "DivideAssign",
    "ModulusAssign",
    "PlusAssign",
    "MinusAssign",
    "LeftShiftArithmeticAssign",
    "RightShiftArithmeticAssign",
    "RightShiftLogicalAssign",
    "BitAndAssign",
    "BitXorAssign",
    "BitOrAssign",
    "NullLiteral",
    "BooleanLiteral",
    "DecimalLiteral",
    "HexIntegerLiteral",
    "OctalIntegerLiteral",
    "Break", "Do",
    "Instanceof",
    "Typeof", "Case",
    "Else", "New",
    "Var", "Catch",
    "Finally",
    "Return", "Void",
    "Continue",
    "For", "Switch",
    "While", "Debugger",
    "Function",
    "This", "With",
    "Default",
    "If", "Throw",
    "Delete", "In",
    "Try", "Class",
    "Enum", "Extends",
    "Super", "Const",
    "Export", "Import",
    "Implements",
    "Let", "Private",
    "Public", "Interface",
    "Package",
    "Protected",
    "Static", "Yield",
    "Identifier",
    "StringLiteral",
    "WhiteSpaces",
    "MultiLineComment",
    "SingleLineComment",
    "UnexpectedCharacter"];
// tslint:disable:no-trailing-whitespace
ECMAScriptParser.ruleNames = [
    "program", "sourceElements", "sourceElement", "statement", "block", "statementList",
    "variableStatement", "variableDeclarationList", "variableDeclaration",
    "initialiser", "emptyStatement_", "expressionStatement", "ifStatement",
    "iterationStatement", "continueStatement", "breakStatement", "returnStatement",
    "withStatement", "switchStatement", "caseBlock", "caseClauses", "caseClause",
    "defaultClause", "labelledStatement", "throwStatement", "tryStatement",
    "catchProduction", "finallyProduction", "debuggerStatement", "functionDeclaration",
    "formalParameterList", "functionBody", "arrayLiteral", "elementList",
    "elision", "objectLiteral", "propertyNameAndValueList", "propertyAssignment",
    "propertyName", "propertySetParameterList", "arguments", "argumentList",
    "expressionSequence", "singleExpression", "assignmentOperator", "literal",
    "numericLiteral", "identifierName", "reservedWord", "keyword", "futureReservedWord",
    "getter", "setter", "eos", "eof",
];
ECMAScriptParser._serializedATN = [4, 1, 103, 625, 2, 0, 7, 0,
    2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9,
    2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2,
    17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24,
    7, 24, 2, 25, 7, 25, 2, 26, 7, 26, 2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7,
    31, 2, 32, 7, 32, 2, 33, 7, 33, 2, 34, 7, 34, 2, 35, 7, 35, 2, 36, 7, 36, 2, 37, 7, 37, 2, 38, 7, 38,
    2, 39, 7, 39, 2, 40, 7, 40, 2, 41, 7, 41, 2, 42, 7, 42, 2, 43, 7, 43, 2, 44, 7, 44, 2, 45, 7, 45, 2,
    46, 7, 46, 2, 47, 7, 47, 2, 48, 7, 48, 2, 49, 7, 49, 2, 50, 7, 50, 2, 51, 7, 51, 2, 52, 7, 52, 2, 53,
    7, 53, 2, 54, 7, 54, 1, 0, 3, 0, 112, 8, 0, 1, 0, 1, 0, 1, 1, 4, 1, 117, 8, 1, 11, 1, 12, 1, 118, 1,
    2, 1, 2, 1, 2, 3, 2, 124, 8, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1,
    3, 1, 3, 1, 3, 1, 3, 3, 3, 142, 8, 3, 1, 4, 1, 4, 3, 4, 146, 8, 4, 1, 4, 1, 4, 1, 5, 4, 5, 151, 8, 5, 11,
    5, 12, 5, 152, 1, 6, 1, 6, 1, 6, 1, 6, 1, 7, 1, 7, 1, 7, 5, 7, 162, 8, 7, 10, 7, 12, 7, 165, 9, 7, 1,
    8, 1, 8, 3, 8, 169, 8, 8, 1, 9, 1, 9, 1, 9, 1, 10, 1, 10, 1, 11, 1, 11, 1, 11, 1, 12, 1, 12, 1, 12, 1,
    12, 1, 12, 1, 12, 1, 12, 3, 12, 186, 8, 12, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13,
    1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 3, 13, 205, 8, 13, 1, 13, 1, 13, 3,
    13, 209, 8, 13, 1, 13, 1, 13, 3, 13, 213, 8, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13,
    1, 13, 3, 13, 223, 8, 13, 1, 13, 1, 13, 3, 13, 227, 8, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13,
    1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 3,
    13, 249, 8, 13, 1, 14, 1, 14, 1, 14, 3, 14, 254, 8, 14, 1, 14, 1, 14, 1, 15, 1, 15, 1, 15, 3, 15,
    261, 8, 15, 1, 15, 1, 15, 1, 16, 1, 16, 1, 16, 3, 16, 268, 8, 16, 1, 16, 1, 16, 1, 17, 1, 17, 1, 17,
    1, 17, 1, 17, 1, 17, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 19, 1, 19, 3, 19, 286, 8, 19, 1,
    19, 1, 19, 3, 19, 290, 8, 19, 3, 19, 292, 8, 19, 1, 19, 1, 19, 1, 20, 4, 20, 297, 8, 20, 11, 20,
    12, 20, 298, 1, 21, 1, 21, 1, 21, 1, 21, 3, 21, 305, 8, 21, 1, 22, 1, 22, 1, 22, 3, 22, 310, 8, 22,
    1, 23, 1, 23, 1, 23, 1, 23, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1,
    25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 3, 25, 334, 8, 25, 1, 26, 1, 26, 1, 26, 1, 26,
    1, 26, 1, 26, 1, 27, 1, 27, 1, 27, 1, 28, 1, 28, 1, 28, 1, 29, 1, 29, 1, 29, 1, 29, 3, 29, 352, 8,
    29, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 1, 30, 1, 30, 1, 30, 5, 30, 362, 8, 30, 10, 30, 12, 30, 365,
    9, 30, 1, 31, 3, 31, 368, 8, 31, 1, 32, 1, 32, 3, 32, 372, 8, 32, 1, 32, 3, 32, 375, 8, 32, 1, 32,
    3, 32, 378, 8, 32, 1, 32, 1, 32, 1, 33, 3, 33, 383, 8, 33, 1, 33, 1, 33, 1, 33, 3, 33, 388, 8, 33,
    1, 33, 5, 33, 391, 8, 33, 10, 33, 12, 33, 394, 9, 33, 1, 34, 4, 34, 397, 8, 34, 11, 34, 12, 34,
    398, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 3, 35, 406, 8, 35, 1, 35, 1, 35, 3, 35, 410, 8, 35, 1, 36,
    1, 36, 1, 36, 5, 36, 415, 8, 36, 10, 36, 12, 36, 418, 9, 36, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1,
    37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 3, 37,
    439, 8, 37, 1, 38, 1, 38, 1, 38, 3, 38, 444, 8, 38, 1, 39, 1, 39, 1, 40, 1, 40, 3, 40, 450, 8, 40,
    1, 40, 1, 40, 1, 41, 1, 41, 1, 41, 5, 41, 457, 8, 41, 10, 41, 12, 41, 460, 9, 41, 1, 42, 1, 42, 1,
    42, 5, 42, 465, 8, 42, 10, 42, 12, 42, 468, 9, 42, 1, 43, 1, 43, 1, 43, 3, 43, 473, 8, 43, 1, 43,
    1, 43, 3, 43, 477, 8, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 3, 43, 487, 8, 43,
    1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1,
    43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 3, 43, 516,
    8, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1,
    43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43,
    1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1,
    43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43,
    1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 5, 43, 583, 8, 43, 10, 43, 12, 43, 586, 9,
    43, 1, 44, 1, 44, 1, 45, 1, 45, 3, 45, 592, 8, 45, 1, 46, 1, 46, 1, 47, 1, 47, 3, 47, 598, 8, 47,
    1, 48, 1, 48, 1, 48, 3, 48, 603, 8, 48, 1, 49, 1, 49, 1, 50, 1, 50, 1, 51, 1, 51, 1, 51, 1, 51, 1,
    52, 1, 52, 1, 52, 1, 52, 1, 53, 1, 53, 1, 53, 1, 53, 3, 53, 621, 8, 53, 1, 54, 1, 54, 1, 54, 0, 1,
    86, 55, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46,
    48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94,
    96, 98, 100, 102, 104, 106, 108, 0, 11, 1, 0, 21, 23, 1, 0, 17, 18, 1, 0, 24, 26, 1, 0, 27, 30,
    1, 0, 31, 34, 1, 0, 40, 50, 3, 0, 1, 1, 51, 52, 99, 99, 1, 0, 53, 55, 1, 0, 51, 52, 1, 0, 56, 81, 1,
    0, 82, 97, 678, 0, 111, 1, 0, 0, 0, 2, 116, 1, 0, 0, 0, 4, 123, 1, 0, 0, 0, 6, 141, 1, 0, 0, 0, 8, 143,
    1, 0, 0, 0, 10, 150, 1, 0, 0, 0, 12, 154, 1, 0, 0, 0, 14, 158, 1, 0, 0, 0, 16, 166, 1, 0, 0, 0, 18,
    170, 1, 0, 0, 0, 20, 173, 1, 0, 0, 0, 22, 175, 1, 0, 0, 0, 24, 178, 1, 0, 0, 0, 26, 248, 1, 0, 0, 0,
    28, 250, 1, 0, 0, 0, 30, 257, 1, 0, 0, 0, 32, 264, 1, 0, 0, 0, 34, 271, 1, 0, 0, 0, 36, 277, 1, 0,
    0, 0, 38, 283, 1, 0, 0, 0, 40, 296, 1, 0, 0, 0, 42, 300, 1, 0, 0, 0, 44, 306, 1, 0, 0, 0, 46, 311,
    1, 0, 0, 0, 48, 315, 1, 0, 0, 0, 50, 333, 1, 0, 0, 0, 52, 335, 1, 0, 0, 0, 54, 341, 1, 0, 0, 0, 56,
    344, 1, 0, 0, 0, 58, 347, 1, 0, 0, 0, 60, 358, 1, 0, 0, 0, 62, 367, 1, 0, 0, 0, 64, 369, 1, 0, 0, 0,
    66, 382, 1, 0, 0, 0, 68, 396, 1, 0, 0, 0, 70, 409, 1, 0, 0, 0, 72, 411, 1, 0, 0, 0, 74, 438, 1, 0,
    0, 0, 76, 443, 1, 0, 0, 0, 78, 445, 1, 0, 0, 0, 80, 447, 1, 0, 0, 0, 82, 453, 1, 0, 0, 0, 84, 461,
    1, 0, 0, 0, 86, 515, 1, 0, 0, 0, 88, 587, 1, 0, 0, 0, 90, 591, 1, 0, 0, 0, 92, 593, 1, 0, 0, 0, 94,
    597, 1, 0, 0, 0, 96, 602, 1, 0, 0, 0, 98, 604, 1, 0, 0, 0, 100, 606, 1, 0, 0, 0, 102, 608, 1, 0, 0,
    0, 104, 612, 1, 0, 0, 0, 106, 620, 1, 0, 0, 0, 108, 622, 1, 0, 0, 0, 110, 112, 3, 2, 1, 0, 111, 110,
    1, 0, 0, 0, 111, 112, 1, 0, 0, 0, 112, 113, 1, 0, 0, 0, 113, 114, 5, 0, 0, 1, 114, 1, 1, 0, 0, 0, 115,
    117, 3, 4, 2, 0, 116, 115, 1, 0, 0, 0, 117, 118, 1, 0, 0, 0, 118, 116, 1, 0, 0, 0, 118, 119, 1, 0,
    0, 0, 119, 3, 1, 0, 0, 0, 120, 121, 4, 2, 0, 0, 121, 124, 3, 6, 3, 0, 122, 124, 3, 58, 29, 0, 123,
    120, 1, 0, 0, 0, 123, 122, 1, 0, 0, 0, 124, 5, 1, 0, 0, 0, 125, 142, 3, 8, 4, 0, 126, 142, 3, 12,
    6, 0, 127, 142, 3, 20, 10, 0, 128, 129, 4, 3, 1, 0, 129, 142, 3, 22, 11, 0, 130, 142, 3, 24, 12,
    0, 131, 142, 3, 26, 13, 0, 132, 142, 3, 28, 14, 0, 133, 142, 3, 30, 15, 0, 134, 142, 3, 32, 16,
    0, 135, 142, 3, 34, 17, 0, 136, 142, 3, 46, 23, 0, 137, 142, 3, 36, 18, 0, 138, 142, 3, 48, 24,
    0, 139, 142, 3, 50, 25, 0, 140, 142, 3, 56, 28, 0, 141, 125, 1, 0, 0, 0, 141, 126, 1, 0, 0, 0, 141,
    127, 1, 0, 0, 0, 141, 128, 1, 0, 0, 0, 141, 130, 1, 0, 0, 0, 141, 131, 1, 0, 0, 0, 141, 132, 1, 0,
    0, 0, 141, 133, 1, 0, 0, 0, 141, 134, 1, 0, 0, 0, 141, 135, 1, 0, 0, 0, 141, 136, 1, 0, 0, 0, 141,
    137, 1, 0, 0, 0, 141, 138, 1, 0, 0, 0, 141, 139, 1, 0, 0, 0, 141, 140, 1, 0, 0, 0, 142, 7, 1, 0, 0,
    0, 143, 145, 5, 7, 0, 0, 144, 146, 3, 10, 5, 0, 145, 144, 1, 0, 0, 0, 145, 146, 1, 0, 0, 0, 146,
    147, 1, 0, 0, 0, 147, 148, 5, 8, 0, 0, 148, 9, 1, 0, 0, 0, 149, 151, 3, 6, 3, 0, 150, 149, 1, 0, 0,
    0, 151, 152, 1, 0, 0, 0, 152, 150, 1, 0, 0, 0, 152, 153, 1, 0, 0, 0, 153, 11, 1, 0, 0, 0, 154, 155,
    5, 63, 0, 0, 155, 156, 3, 14, 7, 0, 156, 157, 3, 106, 53, 0, 157, 13, 1, 0, 0, 0, 158, 163, 3, 16,
    8, 0, 159, 160, 5, 10, 0, 0, 160, 162, 3, 16, 8, 0, 161, 159, 1, 0, 0, 0, 162, 165, 1, 0, 0, 0, 163,
    161, 1, 0, 0, 0, 163, 164, 1, 0, 0, 0, 164, 15, 1, 0, 0, 0, 165, 163, 1, 0, 0, 0, 166, 168, 5, 98,
    0, 0, 167, 169, 3, 18, 9, 0, 168, 167, 1, 0, 0, 0, 168, 169, 1, 0, 0, 0, 169, 17, 1, 0, 0, 0, 170,
    171, 5, 11, 0, 0, 171, 172, 3, 86, 43, 0, 172, 19, 1, 0, 0, 0, 173, 174, 5, 9, 0, 0, 174, 21, 1,
    0, 0, 0, 175, 176, 3, 84, 42, 0, 176, 177, 3, 106, 53, 0, 177, 23, 1, 0, 0, 0, 178, 179, 5, 77,
    0, 0, 179, 180, 5, 5, 0, 0, 180, 181, 3, 84, 42, 0, 181, 182, 5, 6, 0, 0, 182, 185, 3, 6, 3, 0, 183,
    184, 5, 61, 0, 0, 184, 186, 3, 6, 3, 0, 185, 183, 1, 0, 0, 0, 185, 186, 1, 0, 0, 0, 186, 25, 1, 0,
    0, 0, 187, 188, 5, 57, 0, 0, 188, 189, 3, 6, 3, 0, 189, 190, 5, 71, 0, 0, 190, 191, 5, 5, 0, 0, 191,
    192, 3, 84, 42, 0, 192, 193, 5, 6, 0, 0, 193, 194, 3, 106, 53, 0, 194, 249, 1, 0, 0, 0, 195, 196,
    5, 71, 0, 0, 196, 197, 5, 5, 0, 0, 197, 198, 3, 84, 42, 0, 198, 199, 5, 6, 0, 0, 199, 200, 3, 6,
    3, 0, 200, 249, 1, 0, 0, 0, 201, 202, 5, 69, 0, 0, 202, 204, 5, 5, 0, 0, 203, 205, 3, 84, 42, 0,
    204, 203, 1, 0, 0, 0, 204, 205, 1, 0, 0, 0, 205, 206, 1, 0, 0, 0, 206, 208, 5, 9, 0, 0, 207, 209,
    3, 84, 42, 0, 208, 207, 1, 0, 0, 0, 208, 209, 1, 0, 0, 0, 209, 210, 1, 0, 0, 0, 210, 212, 5, 9, 0,
    0, 211, 213, 3, 84, 42, 0, 212, 211, 1, 0, 0, 0, 212, 213, 1, 0, 0, 0, 213, 214, 1, 0, 0, 0, 214,
    215, 5, 6, 0, 0, 215, 249, 3, 6, 3, 0, 216, 217, 5, 69, 0, 0, 217, 218, 5, 5, 0, 0, 218, 219, 5,
    63, 0, 0, 219, 220, 3, 14, 7, 0, 220, 222, 5, 9, 0, 0, 221, 223, 3, 84, 42, 0, 222, 221, 1, 0, 0,
    0, 222, 223, 1, 0, 0, 0, 223, 224, 1, 0, 0, 0, 224, 226, 5, 9, 0, 0, 225, 227, 3, 84, 42, 0, 226,
    225, 1, 0, 0, 0, 226, 227, 1, 0, 0, 0, 227, 228, 1, 0, 0, 0, 228, 229, 5, 6, 0, 0, 229, 230, 3, 6,
    3, 0, 230, 249, 1, 0, 0, 0, 231, 232, 5, 69, 0, 0, 232, 233, 5, 5, 0, 0, 233, 234, 3, 86, 43, 0,
    234, 235, 5, 80, 0, 0, 235, 236, 3, 84, 42, 0, 236, 237, 5, 6, 0, 0, 237, 238, 3, 6, 3, 0, 238,
    249, 1, 0, 0, 0, 239, 240, 5, 69, 0, 0, 240, 241, 5, 5, 0, 0, 241, 242, 5, 63, 0, 0, 242, 243, 3,
    16, 8, 0, 243, 244, 5, 80, 0, 0, 244, 245, 3, 84, 42, 0, 245, 246, 5, 6, 0, 0, 246, 247, 3, 6, 3,
    0, 247, 249, 1, 0, 0, 0, 248, 187, 1, 0, 0, 0, 248, 195, 1, 0, 0, 0, 248, 201, 1, 0, 0, 0, 248, 216,
    1, 0, 0, 0, 248, 231, 1, 0, 0, 0, 248, 239, 1, 0, 0, 0, 249, 27, 1, 0, 0, 0, 250, 253, 5, 68, 0, 0,
    251, 252, 4, 14, 2, 0, 252, 254, 5, 98, 0, 0, 253, 251, 1, 0, 0, 0, 253, 254, 1, 0, 0, 0, 254, 255,
    1, 0, 0, 0, 255, 256, 3, 106, 53, 0, 256, 29, 1, 0, 0, 0, 257, 260, 5, 56, 0, 0, 258, 259, 4, 15,
    3, 0, 259, 261, 5, 98, 0, 0, 260, 258, 1, 0, 0, 0, 260, 261, 1, 0, 0, 0, 261, 262, 1, 0, 0, 0, 262,
    263, 3, 106, 53, 0, 263, 31, 1, 0, 0, 0, 264, 267, 5, 66, 0, 0, 265, 266, 4, 16, 4, 0, 266, 268,
    3, 84, 42, 0, 267, 265, 1, 0, 0, 0, 267, 268, 1, 0, 0, 0, 268, 269, 1, 0, 0, 0, 269, 270, 3, 106,
    53, 0, 270, 33, 1, 0, 0, 0, 271, 272, 5, 75, 0, 0, 272, 273, 5, 5, 0, 0, 273, 274, 3, 84, 42, 0,
    274, 275, 5, 6, 0, 0, 275, 276, 3, 6, 3, 0, 276, 35, 1, 0, 0, 0, 277, 278, 5, 70, 0, 0, 278, 279,
    5, 5, 0, 0, 279, 280, 3, 84, 42, 0, 280, 281, 5, 6, 0, 0, 281, 282, 3, 38, 19, 0, 282, 37, 1, 0,
    0, 0, 283, 285, 5, 7, 0, 0, 284, 286, 3, 40, 20, 0, 285, 284, 1, 0, 0, 0, 285, 286, 1, 0, 0, 0, 286,
    291, 1, 0, 0, 0, 287, 289, 3, 44, 22, 0, 288, 290, 3, 40, 20, 0, 289, 288, 1, 0, 0, 0, 289, 290,
    1, 0, 0, 0, 290, 292, 1, 0, 0, 0, 291, 287, 1, 0, 0, 0, 291, 292, 1, 0, 0, 0, 292, 293, 1, 0, 0, 0,
    293, 294, 5, 8, 0, 0, 294, 39, 1, 0, 0, 0, 295, 297, 3, 42, 21, 0, 296, 295, 1, 0, 0, 0, 297, 298,
    1, 0, 0, 0, 298, 296, 1, 0, 0, 0, 298, 299, 1, 0, 0, 0, 299, 41, 1, 0, 0, 0, 300, 301, 5, 60, 0, 0,
    301, 302, 3, 84, 42, 0, 302, 304, 5, 13, 0, 0, 303, 305, 3, 10, 5, 0, 304, 303, 1, 0, 0, 0, 304,
    305, 1, 0, 0, 0, 305, 43, 1, 0, 0, 0, 306, 307, 5, 76, 0, 0, 307, 309, 5, 13, 0, 0, 308, 310, 3,
    10, 5, 0, 309, 308, 1, 0, 0, 0, 309, 310, 1, 0, 0, 0, 310, 45, 1, 0, 0, 0, 311, 312, 5, 98, 0, 0,
    312, 313, 5, 13, 0, 0, 313, 314, 3, 6, 3, 0, 314, 47, 1, 0, 0, 0, 315, 316, 5, 78, 0, 0, 316, 317,
    4, 24, 5, 0, 317, 318, 3, 84, 42, 0, 318, 319, 3, 106, 53, 0, 319, 49, 1, 0, 0, 0, 320, 321, 5,
    81, 0, 0, 321, 322, 3, 8, 4, 0, 322, 323, 3, 52, 26, 0, 323, 334, 1, 0, 0, 0, 324, 325, 5, 81, 0,
    0, 325, 326, 3, 8, 4, 0, 326, 327, 3, 54, 27, 0, 327, 334, 1, 0, 0, 0, 328, 329, 5, 81, 0, 0, 329,
    330, 3, 8, 4, 0, 330, 331, 3, 52, 26, 0, 331, 332, 3, 54, 27, 0, 332, 334, 1, 0, 0, 0, 333, 320,
    1, 0, 0, 0, 333, 324, 1, 0, 0, 0, 333, 328, 1, 0, 0, 0, 334, 51, 1, 0, 0, 0, 335, 336, 5, 64, 0, 0,
    336, 337, 5, 5, 0, 0, 337, 338, 5, 98, 0, 0, 338, 339, 5, 6, 0, 0, 339, 340, 3, 8, 4, 0, 340, 53,
    1, 0, 0, 0, 341, 342, 5, 65, 0, 0, 342, 343, 3, 8, 4, 0, 343, 55, 1, 0, 0, 0, 344, 345, 5, 72, 0,
    0, 345, 346, 3, 106, 53, 0, 346, 57, 1, 0, 0, 0, 347, 348, 5, 73, 0, 0, 348, 349, 5, 98, 0, 0, 349,
    351, 5, 5, 0, 0, 350, 352, 3, 60, 30, 0, 351, 350, 1, 0, 0, 0, 351, 352, 1, 0, 0, 0, 352, 353, 1,
    0, 0, 0, 353, 354, 5, 6, 0, 0, 354, 355, 5, 7, 0, 0, 355, 356, 3, 62, 31, 0, 356, 357, 5, 8, 0, 0,
    357, 59, 1, 0, 0, 0, 358, 363, 5, 98, 0, 0, 359, 360, 5, 10, 0, 0, 360, 362, 5, 98, 0, 0, 361, 359,
    1, 0, 0, 0, 362, 365, 1, 0, 0, 0, 363, 361, 1, 0, 0, 0, 363, 364, 1, 0, 0, 0, 364, 61, 1, 0, 0, 0,
    365, 363, 1, 0, 0, 0, 366, 368, 3, 2, 1, 0, 367, 366, 1, 0, 0, 0, 367, 368, 1, 0, 0, 0, 368, 63,
    1, 0, 0, 0, 369, 371, 5, 3, 0, 0, 370, 372, 3, 66, 33, 0, 371, 370, 1, 0, 0, 0, 371, 372, 1, 0, 0,
    0, 372, 374, 1, 0, 0, 0, 373, 375, 5, 10, 0, 0, 374, 373, 1, 0, 0, 0, 374, 375, 1, 0, 0, 0, 375,
    377, 1, 0, 0, 0, 376, 378, 3, 68, 34, 0, 377, 376, 1, 0, 0, 0, 377, 378, 1, 0, 0, 0, 378, 379, 1,
    0, 0, 0, 379, 380, 5, 4, 0, 0, 380, 65, 1, 0, 0, 0, 381, 383, 3, 68, 34, 0, 382, 381, 1, 0, 0, 0,
    382, 383, 1, 0, 0, 0, 383, 384, 1, 0, 0, 0, 384, 392, 3, 86, 43, 0, 385, 387, 5, 10, 0, 0, 386,
    388, 3, 68, 34, 0, 387, 386, 1, 0, 0, 0, 387, 388, 1, 0, 0, 0, 388, 389, 1, 0, 0, 0, 389, 391, 3,
    86, 43, 0, 390, 385, 1, 0, 0, 0, 391, 394, 1, 0, 0, 0, 392, 390, 1, 0, 0, 0, 392, 393, 1, 0, 0, 0,
    393, 67, 1, 0, 0, 0, 394, 392, 1, 0, 0, 0, 395, 397, 5, 10, 0, 0, 396, 395, 1, 0, 0, 0, 397, 398,
    1, 0, 0, 0, 398, 396, 1, 0, 0, 0, 398, 399, 1, 0, 0, 0, 399, 69, 1, 0, 0, 0, 400, 401, 5, 7, 0, 0,
    401, 410, 5, 8, 0, 0, 402, 403, 5, 7, 0, 0, 403, 405, 3, 72, 36, 0, 404, 406, 5, 10, 0, 0, 405,
    404, 1, 0, 0, 0, 405, 406, 1, 0, 0, 0, 406, 407, 1, 0, 0, 0, 407, 408, 5, 8, 0, 0, 408, 410, 1, 0,
    0, 0, 409, 400, 1, 0, 0, 0, 409, 402, 1, 0, 0, 0, 410, 71, 1, 0, 0, 0, 411, 416, 3, 74, 37, 0, 412,
    413, 5, 10, 0, 0, 413, 415, 3, 74, 37, 0, 414, 412, 1, 0, 0, 0, 415, 418, 1, 0, 0, 0, 416, 414,
    1, 0, 0, 0, 416, 417, 1, 0, 0, 0, 417, 73, 1, 0, 0, 0, 418, 416, 1, 0, 0, 0, 419, 420, 3, 76, 38,
    0, 420, 421, 5, 13, 0, 0, 421, 422, 3, 86, 43, 0, 422, 439, 1, 0, 0, 0, 423, 424, 3, 102, 51, 0,
    424, 425, 5, 5, 0, 0, 425, 426, 5, 6, 0, 0, 426, 427, 5, 7, 0, 0, 427, 428, 3, 62, 31, 0, 428, 429,
    5, 8, 0, 0, 429, 439, 1, 0, 0, 0, 430, 431, 3, 104, 52, 0, 431, 432, 5, 5, 0, 0, 432, 433, 3, 78,
    39, 0, 433, 434, 5, 6, 0, 0, 434, 435, 5, 7, 0, 0, 435, 436, 3, 62, 31, 0, 436, 437, 5, 8, 0, 0,
    437, 439, 1, 0, 0, 0, 438, 419, 1, 0, 0, 0, 438, 423, 1, 0, 0, 0, 438, 430, 1, 0, 0, 0, 439, 75,
    1, 0, 0, 0, 440, 444, 3, 94, 47, 0, 441, 444, 5, 99, 0, 0, 442, 444, 3, 92, 46, 0, 443, 440, 1,
    0, 0, 0, 443, 441, 1, 0, 0, 0, 443, 442, 1, 0, 0, 0, 444, 77, 1, 0, 0, 0, 445, 446, 5, 98, 0, 0, 446,
    79, 1, 0, 0, 0, 447, 449, 5, 5, 0, 0, 448, 450, 3, 82, 41, 0, 449, 448, 1, 0, 0, 0, 449, 450, 1,
    0, 0, 0, 450, 451, 1, 0, 0, 0, 451, 452, 5, 6, 0, 0, 452, 81, 1, 0, 0, 0, 453, 458, 3, 86, 43, 0,
    454, 455, 5, 10, 0, 0, 455, 457, 3, 86, 43, 0, 456, 454, 1, 0, 0, 0, 457, 460, 1, 0, 0, 0, 458,
    456, 1, 0, 0, 0, 458, 459, 1, 0, 0, 0, 459, 83, 1, 0, 0, 0, 460, 458, 1, 0, 0, 0, 461, 466, 3, 86,
    43, 0, 462, 463, 5, 10, 0, 0, 463, 465, 3, 86, 43, 0, 464, 462, 1, 0, 0, 0, 465, 468, 1, 0, 0, 0,
    466, 464, 1, 0, 0, 0, 466, 467, 1, 0, 0, 0, 467, 85, 1, 0, 0, 0, 468, 466, 1, 0, 0, 0, 469, 470,
    6, 43, -1, 0, 470, 472, 5, 73, 0, 0, 471, 473, 5, 98, 0, 0, 472, 471, 1, 0, 0, 0, 472, 473, 1, 0,
    0, 0, 473, 474, 1, 0, 0, 0, 474, 476, 5, 5, 0, 0, 475, 477, 3, 60, 30, 0, 476, 475, 1, 0, 0, 0, 476,
    477, 1, 0, 0, 0, 477, 478, 1, 0, 0, 0, 478, 479, 5, 6, 0, 0, 479, 480, 5, 7, 0, 0, 480, 481, 3, 62,
    31, 0, 481, 482, 5, 8, 0, 0, 482, 516, 1, 0, 0, 0, 483, 484, 5, 62, 0, 0, 484, 486, 3, 86, 43, 0,
    485, 487, 3, 80, 40, 0, 486, 485, 1, 0, 0, 0, 486, 487, 1, 0, 0, 0, 487, 516, 1, 0, 0, 0, 488, 489,
    5, 79, 0, 0, 489, 516, 3, 86, 43, 30, 490, 491, 5, 67, 0, 0, 491, 516, 3, 86, 43, 29, 492, 493,
    5, 59, 0, 0, 493, 516, 3, 86, 43, 28, 494, 495, 5, 15, 0, 0, 495, 516, 3, 86, 43, 27, 496, 497,
    5, 16, 0, 0, 497, 516, 3, 86, 43, 26, 498, 499, 5, 17, 0, 0, 499, 516, 3, 86, 43, 25, 500, 501,
    5, 18, 0, 0, 501, 516, 3, 86, 43, 24, 502, 503, 5, 19, 0, 0, 503, 516, 3, 86, 43, 23, 504, 505,
    5, 20, 0, 0, 505, 516, 3, 86, 43, 22, 506, 516, 5, 74, 0, 0, 507, 516, 5, 98, 0, 0, 508, 516, 3,
    90, 45, 0, 509, 516, 3, 64, 32, 0, 510, 516, 3, 70, 35, 0, 511, 512, 5, 5, 0, 0, 512, 513, 3, 84,
    42, 0, 513, 514, 5, 6, 0, 0, 514, 516, 1, 0, 0, 0, 515, 469, 1, 0, 0, 0, 515, 483, 1, 0, 0, 0, 515,
    488, 1, 0, 0, 0, 515, 490, 1, 0, 0, 0, 515, 492, 1, 0, 0, 0, 515, 494, 1, 0, 0, 0, 515, 496, 1, 0,
    0, 0, 515, 498, 1, 0, 0, 0, 515, 500, 1, 0, 0, 0, 515, 502, 1, 0, 0, 0, 515, 504, 1, 0, 0, 0, 515,
    506, 1, 0, 0, 0, 515, 507, 1, 0, 0, 0, 515, 508, 1, 0, 0, 0, 515, 509, 1, 0, 0, 0, 515, 510, 1, 0,
    0, 0, 515, 511, 1, 0, 0, 0, 516, 584, 1, 0, 0, 0, 517, 518, 10, 21, 0, 0, 518, 519, 7, 0, 0, 0, 519,
    583, 3, 86, 43, 22, 520, 521, 10, 20, 0, 0, 521, 522, 7, 1, 0, 0, 522, 583, 3, 86, 43, 21, 523,
    524, 10, 19, 0, 0, 524, 525, 7, 2, 0, 0, 525, 583, 3, 86, 43, 20, 526, 527, 10, 18, 0, 0, 527,
    528, 7, 3, 0, 0, 528, 583, 3, 86, 43, 19, 529, 530, 10, 17, 0, 0, 530, 531, 5, 58, 0, 0, 531, 583,
    3, 86, 43, 18, 532, 533, 10, 16, 0, 0, 533, 534, 5, 80, 0, 0, 534, 583, 3, 86, 43, 17, 535, 536,
    10, 15, 0, 0, 536, 537, 7, 4, 0, 0, 537, 583, 3, 86, 43, 16, 538, 539, 10, 14, 0, 0, 539, 540,
    5, 35, 0, 0, 540, 583, 3, 86, 43, 15, 541, 542, 10, 13, 0, 0, 542, 543, 5, 36, 0, 0, 543, 583,
    3, 86, 43, 14, 544, 545, 10, 12, 0, 0, 545, 546, 5, 37, 0, 0, 546, 583, 3, 86, 43, 13, 547, 548,
    10, 11, 0, 0, 548, 549, 5, 38, 0, 0, 549, 583, 3, 86, 43, 12, 550, 551, 10, 10, 0, 0, 551, 552,
    5, 39, 0, 0, 552, 583, 3, 86, 43, 11, 553, 554, 10, 9, 0, 0, 554, 555, 5, 12, 0, 0, 555, 556, 3,
    86, 43, 0, 556, 557, 5, 13, 0, 0, 557, 558, 3, 86, 43, 10, 558, 583, 1, 0, 0, 0, 559, 560, 10,
    8, 0, 0, 560, 561, 5, 11, 0, 0, 561, 583, 3, 86, 43, 9, 562, 563, 10, 7, 0, 0, 563, 564, 3, 88,
    44, 0, 564, 565, 3, 86, 43, 8, 565, 583, 1, 0, 0, 0, 566, 567, 10, 36, 0, 0, 567, 568, 5, 3, 0,
    0, 568, 569, 3, 84, 42, 0, 569, 570, 5, 4, 0, 0, 570, 583, 1, 0, 0, 0, 571, 572, 10, 35, 0, 0, 572,
    573, 5, 14, 0, 0, 573, 583, 3, 94, 47, 0, 574, 575, 10, 34, 0, 0, 575, 583, 3, 80, 40, 0, 576,
    577, 10, 32, 0, 0, 577, 578, 4, 43, 25, 0, 578, 583, 5, 15, 0, 0, 579, 580, 10, 31, 0, 0, 580,
    581, 4, 43, 27, 0, 581, 583, 5, 16, 0, 0, 582, 517, 1, 0, 0, 0, 582, 520, 1, 0, 0, 0, 582, 523,
    1, 0, 0, 0, 582, 526, 1, 0, 0, 0, 582, 529, 1, 0, 0, 0, 582, 532, 1, 0, 0, 0, 582, 535, 1, 0, 0, 0,
    582, 538, 1, 0, 0, 0, 582, 541, 1, 0, 0, 0, 582, 544, 1, 0, 0, 0, 582, 547, 1, 0, 0, 0, 582, 550,
    1, 0, 0, 0, 582, 553, 1, 0, 0, 0, 582, 559, 1, 0, 0, 0, 582, 562, 1, 0, 0, 0, 582, 566, 1, 0, 0, 0,
    582, 571, 1, 0, 0, 0, 582, 574, 1, 0, 0, 0, 582, 576, 1, 0, 0, 0, 582, 579, 1, 0, 0, 0, 583, 586,
    1, 0, 0, 0, 584, 582, 1, 0, 0, 0, 584, 585, 1, 0, 0, 0, 585, 87, 1, 0, 0, 0, 586, 584, 1, 0, 0, 0,
    587, 588, 7, 5, 0, 0, 588, 89, 1, 0, 0, 0, 589, 592, 7, 6, 0, 0, 590, 592, 3, 92, 46, 0, 591, 589,
    1, 0, 0, 0, 591, 590, 1, 0, 0, 0, 592, 91, 1, 0, 0, 0, 593, 594, 7, 7, 0, 0, 594, 93, 1, 0, 0, 0, 595,
    598, 5, 98, 0, 0, 596, 598, 3, 96, 48, 0, 597, 595, 1, 0, 0, 0, 597, 596, 1, 0, 0, 0, 598, 95, 1,
    0, 0, 0, 599, 603, 3, 98, 49, 0, 600, 603, 3, 100, 50, 0, 601, 603, 7, 8, 0, 0, 602, 599, 1, 0,
    0, 0, 602, 600, 1, 0, 0, 0, 602, 601, 1, 0, 0, 0, 603, 97, 1, 0, 0, 0, 604, 605, 7, 9, 0, 0, 605,
    99, 1, 0, 0, 0, 606, 607, 7, 10, 0, 0, 607, 101, 1, 0, 0, 0, 608, 609, 4, 51, 28, 0, 609, 610, 5,
    98, 0, 0, 610, 611, 3, 76, 38, 0, 611, 103, 1, 0, 0, 0, 612, 613, 4, 52, 29, 0, 613, 614, 5, 98,
    0, 0, 614, 615, 3, 76, 38, 0, 615, 105, 1, 0, 0, 0, 616, 621, 5, 9, 0, 0, 617, 621, 5, 0, 0, 1, 618,
    621, 4, 53, 30, 0, 619, 621, 4, 53, 31, 0, 620, 616, 1, 0, 0, 0, 620, 617, 1, 0, 0, 0, 620, 618,
    1, 0, 0, 0, 620, 619, 1, 0, 0, 0, 621, 107, 1, 0, 0, 0, 622, 623, 5, 0, 0, 1, 623, 109, 1, 0, 0, 0,
    53, 111, 118, 123, 141, 145, 152, 163, 168, 185, 204, 208, 212, 222, 226, 248, 253, 260,
    267, 285, 289, 291, 298, 304, 309, 333, 351, 363, 367, 371, 374, 377, 382, 387, 392, 398,
    405, 409, 416, 438, 443, 449, 458, 466, 472, 476, 486, 515, 582, 584, 591, 597, 602, 620];
ECMAScriptParser.DecisionsToDFA = ECMAScriptParser._ATN.decisionToState.map((ds, index) => new DFA(ds, index));
export default ECMAScriptParser;
export class ProgramContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    EOF() {
        return this.getToken(ECMAScriptParser.EOF, 0);
    }
    sourceElements() {
        return this.getTypedRuleContext(SourceElementsContext, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_program;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SourceElementsContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    sourceElement_list() {
        return this.getTypedRuleContexts(SourceElementContext);
    }
    sourceElement(i) {
        return this.getTypedRuleContext(SourceElementContext, i);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_sourceElements;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSourceElements) {
            return visitor.visitSourceElements(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SourceElementContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    statement() {
        return this.getTypedRuleContext(StatementContext, 0);
    }
    functionDeclaration() {
        return this.getTypedRuleContext(FunctionDeclarationContext, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_sourceElement;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSourceElement) {
            return visitor.visitSourceElement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class StatementContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    block() {
        return this.getTypedRuleContext(BlockContext, 0);
    }
    variableStatement() {
        return this.getTypedRuleContext(VariableStatementContext, 0);
    }
    emptyStatement_() {
        return this.getTypedRuleContext(EmptyStatement_Context, 0);
    }
    expressionStatement() {
        return this.getTypedRuleContext(ExpressionStatementContext, 0);
    }
    ifStatement() {
        return this.getTypedRuleContext(IfStatementContext, 0);
    }
    iterationStatement() {
        return this.getTypedRuleContext(IterationStatementContext, 0);
    }
    continueStatement() {
        return this.getTypedRuleContext(ContinueStatementContext, 0);
    }
    breakStatement() {
        return this.getTypedRuleContext(BreakStatementContext, 0);
    }
    returnStatement() {
        return this.getTypedRuleContext(ReturnStatementContext, 0);
    }
    withStatement() {
        return this.getTypedRuleContext(WithStatementContext, 0);
    }
    labelledStatement() {
        return this.getTypedRuleContext(LabelledStatementContext, 0);
    }
    switchStatement() {
        return this.getTypedRuleContext(SwitchStatementContext, 0);
    }
    throwStatement() {
        return this.getTypedRuleContext(ThrowStatementContext, 0);
    }
    tryStatement() {
        return this.getTypedRuleContext(TryStatementContext, 0);
    }
    debuggerStatement() {
        return this.getTypedRuleContext(DebuggerStatementContext, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_statement;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class BlockContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    OpenBrace() {
        return this.getToken(ECMAScriptParser.OpenBrace, 0);
    }
    CloseBrace() {
        return this.getToken(ECMAScriptParser.CloseBrace, 0);
    }
    statementList() {
        return this.getTypedRuleContext(StatementListContext, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_block;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class StatementListContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    statement_list() {
        return this.getTypedRuleContexts(StatementContext);
    }
    statement(i) {
        return this.getTypedRuleContext(StatementContext, i);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_statementList;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStatementList) {
            return visitor.visitStatementList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class VariableStatementContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    Var() {
        return this.getToken(ECMAScriptParser.Var, 0);
    }
    variableDeclarationList() {
        return this.getTypedRuleContext(VariableDeclarationListContext, 0);
    }
    eos() {
        return this.getTypedRuleContext(EosContext, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_variableStatement;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVariableStatement) {
            return visitor.visitVariableStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class VariableDeclarationListContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    variableDeclaration_list() {
        return this.getTypedRuleContexts(VariableDeclarationContext);
    }
    variableDeclaration(i) {
        return this.getTypedRuleContext(VariableDeclarationContext, i);
    }
    Comma_list() {
        return this.getTokens(ECMAScriptParser.Comma);
    }
    Comma(i) {
        return this.getToken(ECMAScriptParser.Comma, i);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_variableDeclarationList;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVariableDeclarationList) {
            return visitor.visitVariableDeclarationList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class VariableDeclarationContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    Identifier() {
        return this.getToken(ECMAScriptParser.Identifier, 0);
    }
    initialiser() {
        return this.getTypedRuleContext(InitialiserContext, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_variableDeclaration;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVariableDeclaration) {
            return visitor.visitVariableDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class InitialiserContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    Assign() {
        return this.getToken(ECMAScriptParser.Assign, 0);
    }
    singleExpression() {
        return this.getTypedRuleContext(SingleExpressionContext, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_initialiser;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInitialiser) {
            return visitor.visitInitialiser(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class EmptyStatement_Context extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    SemiColon() {
        return this.getToken(ECMAScriptParser.SemiColon, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_emptyStatement_;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEmptyStatement_) {
            return visitor.visitEmptyStatement_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExpressionStatementContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    expressionSequence() {
        return this.getTypedRuleContext(ExpressionSequenceContext, 0);
    }
    eos() {
        return this.getTypedRuleContext(EosContext, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_expressionStatement;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpressionStatement) {
            return visitor.visitExpressionStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class IfStatementContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    If() {
        return this.getToken(ECMAScriptParser.If, 0);
    }
    OpenParen() {
        return this.getToken(ECMAScriptParser.OpenParen, 0);
    }
    expressionSequence() {
        return this.getTypedRuleContext(ExpressionSequenceContext, 0);
    }
    CloseParen() {
        return this.getToken(ECMAScriptParser.CloseParen, 0);
    }
    statement_list() {
        return this.getTypedRuleContexts(StatementContext);
    }
    statement(i) {
        return this.getTypedRuleContext(StatementContext, i);
    }
    Else() {
        return this.getToken(ECMAScriptParser.Else, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_ifStatement;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIfStatement) {
            return visitor.visitIfStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class IterationStatementContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_iterationStatement;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class DoStatementContext extends IterationStatementContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    Do() {
        return this.getToken(ECMAScriptParser.Do, 0);
    }
    statement() {
        return this.getTypedRuleContext(StatementContext, 0);
    }
    While() {
        return this.getToken(ECMAScriptParser.While, 0);
    }
    OpenParen() {
        return this.getToken(ECMAScriptParser.OpenParen, 0);
    }
    expressionSequence() {
        return this.getTypedRuleContext(ExpressionSequenceContext, 0);
    }
    CloseParen() {
        return this.getToken(ECMAScriptParser.CloseParen, 0);
    }
    eos() {
        return this.getTypedRuleContext(EosContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDoStatement) {
            return visitor.visitDoStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ForVarStatementContext extends IterationStatementContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    For() {
        return this.getToken(ECMAScriptParser.For, 0);
    }
    OpenParen() {
        return this.getToken(ECMAScriptParser.OpenParen, 0);
    }
    Var() {
        return this.getToken(ECMAScriptParser.Var, 0);
    }
    variableDeclarationList() {
        return this.getTypedRuleContext(VariableDeclarationListContext, 0);
    }
    SemiColon_list() {
        return this.getTokens(ECMAScriptParser.SemiColon);
    }
    SemiColon(i) {
        return this.getToken(ECMAScriptParser.SemiColon, i);
    }
    CloseParen() {
        return this.getToken(ECMAScriptParser.CloseParen, 0);
    }
    statement() {
        return this.getTypedRuleContext(StatementContext, 0);
    }
    expressionSequence_list() {
        return this.getTypedRuleContexts(ExpressionSequenceContext);
    }
    expressionSequence(i) {
        return this.getTypedRuleContext(ExpressionSequenceContext, i);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitForVarStatement) {
            return visitor.visitForVarStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ForVarInStatementContext extends IterationStatementContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    For() {
        return this.getToken(ECMAScriptParser.For, 0);
    }
    OpenParen() {
        return this.getToken(ECMAScriptParser.OpenParen, 0);
    }
    Var() {
        return this.getToken(ECMAScriptParser.Var, 0);
    }
    variableDeclaration() {
        return this.getTypedRuleContext(VariableDeclarationContext, 0);
    }
    In() {
        return this.getToken(ECMAScriptParser.In, 0);
    }
    expressionSequence() {
        return this.getTypedRuleContext(ExpressionSequenceContext, 0);
    }
    CloseParen() {
        return this.getToken(ECMAScriptParser.CloseParen, 0);
    }
    statement() {
        return this.getTypedRuleContext(StatementContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitForVarInStatement) {
            return visitor.visitForVarInStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class WhileStatementContext extends IterationStatementContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    While() {
        return this.getToken(ECMAScriptParser.While, 0);
    }
    OpenParen() {
        return this.getToken(ECMAScriptParser.OpenParen, 0);
    }
    expressionSequence() {
        return this.getTypedRuleContext(ExpressionSequenceContext, 0);
    }
    CloseParen() {
        return this.getToken(ECMAScriptParser.CloseParen, 0);
    }
    statement() {
        return this.getTypedRuleContext(StatementContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitWhileStatement) {
            return visitor.visitWhileStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ForStatementContext extends IterationStatementContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    For() {
        return this.getToken(ECMAScriptParser.For, 0);
    }
    OpenParen() {
        return this.getToken(ECMAScriptParser.OpenParen, 0);
    }
    SemiColon_list() {
        return this.getTokens(ECMAScriptParser.SemiColon);
    }
    SemiColon(i) {
        return this.getToken(ECMAScriptParser.SemiColon, i);
    }
    CloseParen() {
        return this.getToken(ECMAScriptParser.CloseParen, 0);
    }
    statement() {
        return this.getTypedRuleContext(StatementContext, 0);
    }
    expressionSequence_list() {
        return this.getTypedRuleContexts(ExpressionSequenceContext);
    }
    expressionSequence(i) {
        return this.getTypedRuleContext(ExpressionSequenceContext, i);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitForStatement) {
            return visitor.visitForStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ForInStatementContext extends IterationStatementContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    For() {
        return this.getToken(ECMAScriptParser.For, 0);
    }
    OpenParen() {
        return this.getToken(ECMAScriptParser.OpenParen, 0);
    }
    singleExpression() {
        return this.getTypedRuleContext(SingleExpressionContext, 0);
    }
    In() {
        return this.getToken(ECMAScriptParser.In, 0);
    }
    expressionSequence() {
        return this.getTypedRuleContext(ExpressionSequenceContext, 0);
    }
    CloseParen() {
        return this.getToken(ECMAScriptParser.CloseParen, 0);
    }
    statement() {
        return this.getTypedRuleContext(StatementContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitForInStatement) {
            return visitor.visitForInStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ContinueStatementContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    Continue() {
        return this.getToken(ECMAScriptParser.Continue, 0);
    }
    eos() {
        return this.getTypedRuleContext(EosContext, 0);
    }
    Identifier() {
        return this.getToken(ECMAScriptParser.Identifier, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_continueStatement;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitContinueStatement) {
            return visitor.visitContinueStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class BreakStatementContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    Break() {
        return this.getToken(ECMAScriptParser.Break, 0);
    }
    eos() {
        return this.getTypedRuleContext(EosContext, 0);
    }
    Identifier() {
        return this.getToken(ECMAScriptParser.Identifier, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_breakStatement;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBreakStatement) {
            return visitor.visitBreakStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ReturnStatementContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    Return() {
        return this.getToken(ECMAScriptParser.Return, 0);
    }
    eos() {
        return this.getTypedRuleContext(EosContext, 0);
    }
    expressionSequence() {
        return this.getTypedRuleContext(ExpressionSequenceContext, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_returnStatement;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitReturnStatement) {
            return visitor.visitReturnStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class WithStatementContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    With() {
        return this.getToken(ECMAScriptParser.With, 0);
    }
    OpenParen() {
        return this.getToken(ECMAScriptParser.OpenParen, 0);
    }
    expressionSequence() {
        return this.getTypedRuleContext(ExpressionSequenceContext, 0);
    }
    CloseParen() {
        return this.getToken(ECMAScriptParser.CloseParen, 0);
    }
    statement() {
        return this.getTypedRuleContext(StatementContext, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_withStatement;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitWithStatement) {
            return visitor.visitWithStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SwitchStatementContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    Switch() {
        return this.getToken(ECMAScriptParser.Switch, 0);
    }
    OpenParen() {
        return this.getToken(ECMAScriptParser.OpenParen, 0);
    }
    expressionSequence() {
        return this.getTypedRuleContext(ExpressionSequenceContext, 0);
    }
    CloseParen() {
        return this.getToken(ECMAScriptParser.CloseParen, 0);
    }
    caseBlock() {
        return this.getTypedRuleContext(CaseBlockContext, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_switchStatement;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSwitchStatement) {
            return visitor.visitSwitchStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CaseBlockContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    OpenBrace() {
        return this.getToken(ECMAScriptParser.OpenBrace, 0);
    }
    CloseBrace() {
        return this.getToken(ECMAScriptParser.CloseBrace, 0);
    }
    caseClauses_list() {
        return this.getTypedRuleContexts(CaseClausesContext);
    }
    caseClauses(i) {
        return this.getTypedRuleContext(CaseClausesContext, i);
    }
    defaultClause() {
        return this.getTypedRuleContext(DefaultClauseContext, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_caseBlock;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCaseBlock) {
            return visitor.visitCaseBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CaseClausesContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    caseClause_list() {
        return this.getTypedRuleContexts(CaseClauseContext);
    }
    caseClause(i) {
        return this.getTypedRuleContext(CaseClauseContext, i);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_caseClauses;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCaseClauses) {
            return visitor.visitCaseClauses(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CaseClauseContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    Case() {
        return this.getToken(ECMAScriptParser.Case, 0);
    }
    expressionSequence() {
        return this.getTypedRuleContext(ExpressionSequenceContext, 0);
    }
    Colon() {
        return this.getToken(ECMAScriptParser.Colon, 0);
    }
    statementList() {
        return this.getTypedRuleContext(StatementListContext, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_caseClause;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCaseClause) {
            return visitor.visitCaseClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DefaultClauseContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    Default() {
        return this.getToken(ECMAScriptParser.Default, 0);
    }
    Colon() {
        return this.getToken(ECMAScriptParser.Colon, 0);
    }
    statementList() {
        return this.getTypedRuleContext(StatementListContext, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_defaultClause;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDefaultClause) {
            return visitor.visitDefaultClause(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LabelledStatementContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    Identifier() {
        return this.getToken(ECMAScriptParser.Identifier, 0);
    }
    Colon() {
        return this.getToken(ECMAScriptParser.Colon, 0);
    }
    statement() {
        return this.getTypedRuleContext(StatementContext, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_labelledStatement;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLabelledStatement) {
            return visitor.visitLabelledStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ThrowStatementContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    Throw() {
        return this.getToken(ECMAScriptParser.Throw, 0);
    }
    expressionSequence() {
        return this.getTypedRuleContext(ExpressionSequenceContext, 0);
    }
    eos() {
        return this.getTypedRuleContext(EosContext, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_throwStatement;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitThrowStatement) {
            return visitor.visitThrowStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TryStatementContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    Try() {
        return this.getToken(ECMAScriptParser.Try, 0);
    }
    block() {
        return this.getTypedRuleContext(BlockContext, 0);
    }
    catchProduction() {
        return this.getTypedRuleContext(CatchProductionContext, 0);
    }
    finallyProduction() {
        return this.getTypedRuleContext(FinallyProductionContext, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_tryStatement;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTryStatement) {
            return visitor.visitTryStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class CatchProductionContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    Catch() {
        return this.getToken(ECMAScriptParser.Catch, 0);
    }
    OpenParen() {
        return this.getToken(ECMAScriptParser.OpenParen, 0);
    }
    Identifier() {
        return this.getToken(ECMAScriptParser.Identifier, 0);
    }
    CloseParen() {
        return this.getToken(ECMAScriptParser.CloseParen, 0);
    }
    block() {
        return this.getTypedRuleContext(BlockContext, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_catchProduction;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCatchProduction) {
            return visitor.visitCatchProduction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class FinallyProductionContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    Finally() {
        return this.getToken(ECMAScriptParser.Finally, 0);
    }
    block() {
        return this.getTypedRuleContext(BlockContext, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_finallyProduction;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFinallyProduction) {
            return visitor.visitFinallyProduction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DebuggerStatementContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    Debugger() {
        return this.getToken(ECMAScriptParser.Debugger, 0);
    }
    eos() {
        return this.getTypedRuleContext(EosContext, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_debuggerStatement;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDebuggerStatement) {
            return visitor.visitDebuggerStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class FunctionDeclarationContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    Function() {
        return this.getToken(ECMAScriptParser.Function, 0);
    }
    Identifier() {
        return this.getToken(ECMAScriptParser.Identifier, 0);
    }
    OpenParen() {
        return this.getToken(ECMAScriptParser.OpenParen, 0);
    }
    CloseParen() {
        return this.getToken(ECMAScriptParser.CloseParen, 0);
    }
    OpenBrace() {
        return this.getToken(ECMAScriptParser.OpenBrace, 0);
    }
    functionBody() {
        return this.getTypedRuleContext(FunctionBodyContext, 0);
    }
    CloseBrace() {
        return this.getToken(ECMAScriptParser.CloseBrace, 0);
    }
    formalParameterList() {
        return this.getTypedRuleContext(FormalParameterListContext, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_functionDeclaration;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunctionDeclaration) {
            return visitor.visitFunctionDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class FormalParameterListContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    Identifier_list() {
        return this.getTokens(ECMAScriptParser.Identifier);
    }
    Identifier(i) {
        return this.getToken(ECMAScriptParser.Identifier, i);
    }
    Comma_list() {
        return this.getTokens(ECMAScriptParser.Comma);
    }
    Comma(i) {
        return this.getToken(ECMAScriptParser.Comma, i);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_formalParameterList;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFormalParameterList) {
            return visitor.visitFormalParameterList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class FunctionBodyContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    sourceElements() {
        return this.getTypedRuleContext(SourceElementsContext, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_functionBody;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunctionBody) {
            return visitor.visitFunctionBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArrayLiteralContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    OpenBracket() {
        return this.getToken(ECMAScriptParser.OpenBracket, 0);
    }
    CloseBracket() {
        return this.getToken(ECMAScriptParser.CloseBracket, 0);
    }
    elementList() {
        return this.getTypedRuleContext(ElementListContext, 0);
    }
    Comma() {
        return this.getToken(ECMAScriptParser.Comma, 0);
    }
    elision() {
        return this.getTypedRuleContext(ElisionContext, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_arrayLiteral;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArrayLiteral) {
            return visitor.visitArrayLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ElementListContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    singleExpression_list() {
        return this.getTypedRuleContexts(SingleExpressionContext);
    }
    singleExpression(i) {
        return this.getTypedRuleContext(SingleExpressionContext, i);
    }
    elision_list() {
        return this.getTypedRuleContexts(ElisionContext);
    }
    elision(i) {
        return this.getTypedRuleContext(ElisionContext, i);
    }
    Comma_list() {
        return this.getTokens(ECMAScriptParser.Comma);
    }
    Comma(i) {
        return this.getToken(ECMAScriptParser.Comma, i);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_elementList;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitElementList) {
            return visitor.visitElementList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ElisionContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    Comma_list() {
        return this.getTokens(ECMAScriptParser.Comma);
    }
    Comma(i) {
        return this.getToken(ECMAScriptParser.Comma, i);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_elision;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitElision) {
            return visitor.visitElision(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ObjectLiteralContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    OpenBrace() {
        return this.getToken(ECMAScriptParser.OpenBrace, 0);
    }
    CloseBrace() {
        return this.getToken(ECMAScriptParser.CloseBrace, 0);
    }
    propertyNameAndValueList() {
        return this.getTypedRuleContext(PropertyNameAndValueListContext, 0);
    }
    Comma() {
        return this.getToken(ECMAScriptParser.Comma, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_objectLiteral;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitObjectLiteral) {
            return visitor.visitObjectLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PropertyNameAndValueListContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    propertyAssignment_list() {
        return this.getTypedRuleContexts(PropertyAssignmentContext);
    }
    propertyAssignment(i) {
        return this.getTypedRuleContext(PropertyAssignmentContext, i);
    }
    Comma_list() {
        return this.getTokens(ECMAScriptParser.Comma);
    }
    Comma(i) {
        return this.getToken(ECMAScriptParser.Comma, i);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_propertyNameAndValueList;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPropertyNameAndValueList) {
            return visitor.visitPropertyNameAndValueList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PropertyAssignmentContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_propertyAssignment;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class PropertyExpressionAssignmentContext extends PropertyAssignmentContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    propertyName() {
        return this.getTypedRuleContext(PropertyNameContext, 0);
    }
    Colon() {
        return this.getToken(ECMAScriptParser.Colon, 0);
    }
    singleExpression() {
        return this.getTypedRuleContext(SingleExpressionContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPropertyExpressionAssignment) {
            return visitor.visitPropertyExpressionAssignment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PropertySetterContext extends PropertyAssignmentContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    setter() {
        return this.getTypedRuleContext(SetterContext, 0);
    }
    OpenParen() {
        return this.getToken(ECMAScriptParser.OpenParen, 0);
    }
    propertySetParameterList() {
        return this.getTypedRuleContext(PropertySetParameterListContext, 0);
    }
    CloseParen() {
        return this.getToken(ECMAScriptParser.CloseParen, 0);
    }
    OpenBrace() {
        return this.getToken(ECMAScriptParser.OpenBrace, 0);
    }
    functionBody() {
        return this.getTypedRuleContext(FunctionBodyContext, 0);
    }
    CloseBrace() {
        return this.getToken(ECMAScriptParser.CloseBrace, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPropertySetter) {
            return visitor.visitPropertySetter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PropertyGetterContext extends PropertyAssignmentContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    getter() {
        return this.getTypedRuleContext(GetterContext, 0);
    }
    OpenParen() {
        return this.getToken(ECMAScriptParser.OpenParen, 0);
    }
    CloseParen() {
        return this.getToken(ECMAScriptParser.CloseParen, 0);
    }
    OpenBrace() {
        return this.getToken(ECMAScriptParser.OpenBrace, 0);
    }
    functionBody() {
        return this.getTypedRuleContext(FunctionBodyContext, 0);
    }
    CloseBrace() {
        return this.getToken(ECMAScriptParser.CloseBrace, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPropertyGetter) {
            return visitor.visitPropertyGetter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PropertyNameContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    identifierName() {
        return this.getTypedRuleContext(IdentifierNameContext, 0);
    }
    StringLiteral() {
        return this.getToken(ECMAScriptParser.StringLiteral, 0);
    }
    numericLiteral() {
        return this.getTypedRuleContext(NumericLiteralContext, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_propertyName;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPropertyName) {
            return visitor.visitPropertyName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PropertySetParameterListContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    Identifier() {
        return this.getToken(ECMAScriptParser.Identifier, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_propertySetParameterList;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPropertySetParameterList) {
            return visitor.visitPropertySetParameterList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArgumentsContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    OpenParen() {
        return this.getToken(ECMAScriptParser.OpenParen, 0);
    }
    CloseParen() {
        return this.getToken(ECMAScriptParser.CloseParen, 0);
    }
    argumentList() {
        return this.getTypedRuleContext(ArgumentListContext, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_arguments;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArguments) {
            return visitor.visitArguments(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArgumentListContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    singleExpression_list() {
        return this.getTypedRuleContexts(SingleExpressionContext);
    }
    singleExpression(i) {
        return this.getTypedRuleContext(SingleExpressionContext, i);
    }
    Comma_list() {
        return this.getTokens(ECMAScriptParser.Comma);
    }
    Comma(i) {
        return this.getToken(ECMAScriptParser.Comma, i);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_argumentList;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArgumentList) {
            return visitor.visitArgumentList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExpressionSequenceContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    singleExpression_list() {
        return this.getTypedRuleContexts(SingleExpressionContext);
    }
    singleExpression(i) {
        return this.getTypedRuleContext(SingleExpressionContext, i);
    }
    Comma_list() {
        return this.getTokens(ECMAScriptParser.Comma);
    }
    Comma(i) {
        return this.getToken(ECMAScriptParser.Comma, i);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_expressionSequence;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpressionSequence) {
            return visitor.visitExpressionSequence(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SingleExpressionContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_singleExpression;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class TernaryExpressionContext extends SingleExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    singleExpression_list() {
        return this.getTypedRuleContexts(SingleExpressionContext);
    }
    singleExpression(i) {
        return this.getTypedRuleContext(SingleExpressionContext, i);
    }
    QuestionMark() {
        return this.getToken(ECMAScriptParser.QuestionMark, 0);
    }
    Colon() {
        return this.getToken(ECMAScriptParser.Colon, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTernaryExpression) {
            return visitor.visitTernaryExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LogicalAndExpressionContext extends SingleExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    singleExpression_list() {
        return this.getTypedRuleContexts(SingleExpressionContext);
    }
    singleExpression(i) {
        return this.getTypedRuleContext(SingleExpressionContext, i);
    }
    And() {
        return this.getToken(ECMAScriptParser.And, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLogicalAndExpression) {
            return visitor.visitLogicalAndExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PreIncrementExpressionContext extends SingleExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    PlusPlus() {
        return this.getToken(ECMAScriptParser.PlusPlus, 0);
    }
    singleExpression() {
        return this.getTypedRuleContext(SingleExpressionContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPreIncrementExpression) {
            return visitor.visitPreIncrementExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ObjectLiteralExpressionContext extends SingleExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    objectLiteral() {
        return this.getTypedRuleContext(ObjectLiteralContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitObjectLiteralExpression) {
            return visitor.visitObjectLiteralExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class InExpressionContext extends SingleExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    singleExpression_list() {
        return this.getTypedRuleContexts(SingleExpressionContext);
    }
    singleExpression(i) {
        return this.getTypedRuleContext(SingleExpressionContext, i);
    }
    In() {
        return this.getToken(ECMAScriptParser.In, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInExpression) {
            return visitor.visitInExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LogicalOrExpressionContext extends SingleExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    singleExpression_list() {
        return this.getTypedRuleContexts(SingleExpressionContext);
    }
    singleExpression(i) {
        return this.getTypedRuleContext(SingleExpressionContext, i);
    }
    Or() {
        return this.getToken(ECMAScriptParser.Or, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLogicalOrExpression) {
            return visitor.visitLogicalOrExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class NotExpressionContext extends SingleExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    Not() {
        return this.getToken(ECMAScriptParser.Not, 0);
    }
    singleExpression() {
        return this.getTypedRuleContext(SingleExpressionContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNotExpression) {
            return visitor.visitNotExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PreDecreaseExpressionContext extends SingleExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    MinusMinus() {
        return this.getToken(ECMAScriptParser.MinusMinus, 0);
    }
    singleExpression() {
        return this.getTypedRuleContext(SingleExpressionContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPreDecreaseExpression) {
            return visitor.visitPreDecreaseExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArgumentsExpressionContext extends SingleExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    singleExpression() {
        return this.getTypedRuleContext(SingleExpressionContext, 0);
    }
    arguments() {
        return this.getTypedRuleContext(ArgumentsContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArgumentsExpression) {
            return visitor.visitArgumentsExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ThisExpressionContext extends SingleExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    This() {
        return this.getToken(ECMAScriptParser.This, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitThisExpression) {
            return visitor.visitThisExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class FunctionExpressionContext extends SingleExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    Function() {
        return this.getToken(ECMAScriptParser.Function, 0);
    }
    OpenParen() {
        return this.getToken(ECMAScriptParser.OpenParen, 0);
    }
    CloseParen() {
        return this.getToken(ECMAScriptParser.CloseParen, 0);
    }
    OpenBrace() {
        return this.getToken(ECMAScriptParser.OpenBrace, 0);
    }
    functionBody() {
        return this.getTypedRuleContext(FunctionBodyContext, 0);
    }
    CloseBrace() {
        return this.getToken(ECMAScriptParser.CloseBrace, 0);
    }
    Identifier() {
        return this.getToken(ECMAScriptParser.Identifier, 0);
    }
    formalParameterList() {
        return this.getTypedRuleContext(FormalParameterListContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunctionExpression) {
            return visitor.visitFunctionExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnaryMinusExpressionContext extends SingleExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    Minus() {
        return this.getToken(ECMAScriptParser.Minus, 0);
    }
    singleExpression() {
        return this.getTypedRuleContext(SingleExpressionContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnaryMinusExpression) {
            return visitor.visitUnaryMinusExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AssignmentExpressionContext extends SingleExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    singleExpression_list() {
        return this.getTypedRuleContexts(SingleExpressionContext);
    }
    singleExpression(i) {
        return this.getTypedRuleContext(SingleExpressionContext, i);
    }
    Assign() {
        return this.getToken(ECMAScriptParser.Assign, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAssignmentExpression) {
            return visitor.visitAssignmentExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PostDecreaseExpressionContext extends SingleExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    singleExpression() {
        return this.getTypedRuleContext(SingleExpressionContext, 0);
    }
    MinusMinus() {
        return this.getToken(ECMAScriptParser.MinusMinus, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPostDecreaseExpression) {
            return visitor.visitPostDecreaseExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class TypeofExpressionContext extends SingleExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    Typeof() {
        return this.getToken(ECMAScriptParser.Typeof, 0);
    }
    singleExpression() {
        return this.getTypedRuleContext(SingleExpressionContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeofExpression) {
            return visitor.visitTypeofExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class InstanceofExpressionContext extends SingleExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    singleExpression_list() {
        return this.getTypedRuleContexts(SingleExpressionContext);
    }
    singleExpression(i) {
        return this.getTypedRuleContext(SingleExpressionContext, i);
    }
    Instanceof() {
        return this.getToken(ECMAScriptParser.Instanceof, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInstanceofExpression) {
            return visitor.visitInstanceofExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnaryPlusExpressionContext extends SingleExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    Plus() {
        return this.getToken(ECMAScriptParser.Plus, 0);
    }
    singleExpression() {
        return this.getTypedRuleContext(SingleExpressionContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnaryPlusExpression) {
            return visitor.visitUnaryPlusExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DeleteExpressionContext extends SingleExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    Delete() {
        return this.getToken(ECMAScriptParser.Delete, 0);
    }
    singleExpression() {
        return this.getTypedRuleContext(SingleExpressionContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDeleteExpression) {
            return visitor.visitDeleteExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class EqualityExpressionContext extends SingleExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    singleExpression_list() {
        return this.getTypedRuleContexts(SingleExpressionContext);
    }
    singleExpression(i) {
        return this.getTypedRuleContext(SingleExpressionContext, i);
    }
    Equals() {
        return this.getToken(ECMAScriptParser.Equals, 0);
    }
    NotEquals() {
        return this.getToken(ECMAScriptParser.NotEquals, 0);
    }
    IdentityEquals() {
        return this.getToken(ECMAScriptParser.IdentityEquals, 0);
    }
    IdentityNotEquals() {
        return this.getToken(ECMAScriptParser.IdentityNotEquals, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEqualityExpression) {
            return visitor.visitEqualityExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class BitXOrExpressionContext extends SingleExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    singleExpression_list() {
        return this.getTypedRuleContexts(SingleExpressionContext);
    }
    singleExpression(i) {
        return this.getTypedRuleContext(SingleExpressionContext, i);
    }
    BitXOr() {
        return this.getToken(ECMAScriptParser.BitXOr, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBitXOrExpression) {
            return visitor.visitBitXOrExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class MultiplicativeExpressionContext extends SingleExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    singleExpression_list() {
        return this.getTypedRuleContexts(SingleExpressionContext);
    }
    singleExpression(i) {
        return this.getTypedRuleContext(SingleExpressionContext, i);
    }
    Multiply() {
        return this.getToken(ECMAScriptParser.Multiply, 0);
    }
    Divide() {
        return this.getToken(ECMAScriptParser.Divide, 0);
    }
    Modulus() {
        return this.getToken(ECMAScriptParser.Modulus, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMultiplicativeExpression) {
            return visitor.visitMultiplicativeExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class BitShiftExpressionContext extends SingleExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    singleExpression_list() {
        return this.getTypedRuleContexts(SingleExpressionContext);
    }
    singleExpression(i) {
        return this.getTypedRuleContext(SingleExpressionContext, i);
    }
    LeftShiftArithmetic() {
        return this.getToken(ECMAScriptParser.LeftShiftArithmetic, 0);
    }
    RightShiftArithmetic() {
        return this.getToken(ECMAScriptParser.RightShiftArithmetic, 0);
    }
    RightShiftLogical() {
        return this.getToken(ECMAScriptParser.RightShiftLogical, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBitShiftExpression) {
            return visitor.visitBitShiftExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ParenthesizedExpressionContext extends SingleExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    OpenParen() {
        return this.getToken(ECMAScriptParser.OpenParen, 0);
    }
    expressionSequence() {
        return this.getTypedRuleContext(ExpressionSequenceContext, 0);
    }
    CloseParen() {
        return this.getToken(ECMAScriptParser.CloseParen, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParenthesizedExpression) {
            return visitor.visitParenthesizedExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AdditiveExpressionContext extends SingleExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    singleExpression_list() {
        return this.getTypedRuleContexts(SingleExpressionContext);
    }
    singleExpression(i) {
        return this.getTypedRuleContext(SingleExpressionContext, i);
    }
    Plus() {
        return this.getToken(ECMAScriptParser.Plus, 0);
    }
    Minus() {
        return this.getToken(ECMAScriptParser.Minus, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAdditiveExpression) {
            return visitor.visitAdditiveExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class RelationalExpressionContext extends SingleExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    singleExpression_list() {
        return this.getTypedRuleContexts(SingleExpressionContext);
    }
    singleExpression(i) {
        return this.getTypedRuleContext(SingleExpressionContext, i);
    }
    LessThan() {
        return this.getToken(ECMAScriptParser.LessThan, 0);
    }
    MoreThan() {
        return this.getToken(ECMAScriptParser.MoreThan, 0);
    }
    LessThanEquals() {
        return this.getToken(ECMAScriptParser.LessThanEquals, 0);
    }
    GreaterThanEquals() {
        return this.getToken(ECMAScriptParser.GreaterThanEquals, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRelationalExpression) {
            return visitor.visitRelationalExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class PostIncrementExpressionContext extends SingleExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    singleExpression() {
        return this.getTypedRuleContext(SingleExpressionContext, 0);
    }
    PlusPlus() {
        return this.getToken(ECMAScriptParser.PlusPlus, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPostIncrementExpression) {
            return visitor.visitPostIncrementExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class BitNotExpressionContext extends SingleExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    BitNot() {
        return this.getToken(ECMAScriptParser.BitNot, 0);
    }
    singleExpression() {
        return this.getTypedRuleContext(SingleExpressionContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBitNotExpression) {
            return visitor.visitBitNotExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class NewExpressionContext extends SingleExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    New() {
        return this.getToken(ECMAScriptParser.New, 0);
    }
    singleExpression() {
        return this.getTypedRuleContext(SingleExpressionContext, 0);
    }
    arguments() {
        return this.getTypedRuleContext(ArgumentsContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNewExpression) {
            return visitor.visitNewExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LiteralExpressionContext extends SingleExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    literal() {
        return this.getTypedRuleContext(LiteralContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLiteralExpression) {
            return visitor.visitLiteralExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArrayLiteralExpressionContext extends SingleExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    arrayLiteral() {
        return this.getTypedRuleContext(ArrayLiteralContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArrayLiteralExpression) {
            return visitor.visitArrayLiteralExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class MemberDotExpressionContext extends SingleExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    singleExpression() {
        return this.getTypedRuleContext(SingleExpressionContext, 0);
    }
    Dot() {
        return this.getToken(ECMAScriptParser.Dot, 0);
    }
    identifierName() {
        return this.getTypedRuleContext(IdentifierNameContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMemberDotExpression) {
            return visitor.visitMemberDotExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class MemberIndexExpressionContext extends SingleExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    singleExpression() {
        return this.getTypedRuleContext(SingleExpressionContext, 0);
    }
    OpenBracket() {
        return this.getToken(ECMAScriptParser.OpenBracket, 0);
    }
    expressionSequence() {
        return this.getTypedRuleContext(ExpressionSequenceContext, 0);
    }
    CloseBracket() {
        return this.getToken(ECMAScriptParser.CloseBracket, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMemberIndexExpression) {
            return visitor.visitMemberIndexExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class IdentifierExpressionContext extends SingleExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    Identifier() {
        return this.getToken(ECMAScriptParser.Identifier, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdentifierExpression) {
            return visitor.visitIdentifierExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class BitAndExpressionContext extends SingleExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    singleExpression_list() {
        return this.getTypedRuleContexts(SingleExpressionContext);
    }
    singleExpression(i) {
        return this.getTypedRuleContext(SingleExpressionContext, i);
    }
    BitAnd() {
        return this.getToken(ECMAScriptParser.BitAnd, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBitAndExpression) {
            return visitor.visitBitAndExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class BitOrExpressionContext extends SingleExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    singleExpression_list() {
        return this.getTypedRuleContexts(SingleExpressionContext);
    }
    singleExpression(i) {
        return this.getTypedRuleContext(SingleExpressionContext, i);
    }
    BitOr() {
        return this.getToken(ECMAScriptParser.BitOr, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBitOrExpression) {
            return visitor.visitBitOrExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AssignmentOperatorExpressionContext extends SingleExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    singleExpression_list() {
        return this.getTypedRuleContexts(SingleExpressionContext);
    }
    singleExpression(i) {
        return this.getTypedRuleContext(SingleExpressionContext, i);
    }
    assignmentOperator() {
        return this.getTypedRuleContext(AssignmentOperatorContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAssignmentOperatorExpression) {
            return visitor.visitAssignmentOperatorExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class VoidExpressionContext extends SingleExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    Void() {
        return this.getToken(ECMAScriptParser.Void, 0);
    }
    singleExpression() {
        return this.getTypedRuleContext(SingleExpressionContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVoidExpression) {
            return visitor.visitVoidExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class AssignmentOperatorContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    MultiplyAssign() {
        return this.getToken(ECMAScriptParser.MultiplyAssign, 0);
    }
    DivideAssign() {
        return this.getToken(ECMAScriptParser.DivideAssign, 0);
    }
    ModulusAssign() {
        return this.getToken(ECMAScriptParser.ModulusAssign, 0);
    }
    PlusAssign() {
        return this.getToken(ECMAScriptParser.PlusAssign, 0);
    }
    MinusAssign() {
        return this.getToken(ECMAScriptParser.MinusAssign, 0);
    }
    LeftShiftArithmeticAssign() {
        return this.getToken(ECMAScriptParser.LeftShiftArithmeticAssign, 0);
    }
    RightShiftArithmeticAssign() {
        return this.getToken(ECMAScriptParser.RightShiftArithmeticAssign, 0);
    }
    RightShiftLogicalAssign() {
        return this.getToken(ECMAScriptParser.RightShiftLogicalAssign, 0);
    }
    BitAndAssign() {
        return this.getToken(ECMAScriptParser.BitAndAssign, 0);
    }
    BitXorAssign() {
        return this.getToken(ECMAScriptParser.BitXorAssign, 0);
    }
    BitOrAssign() {
        return this.getToken(ECMAScriptParser.BitOrAssign, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_assignmentOperator;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAssignmentOperator) {
            return visitor.visitAssignmentOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class LiteralContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    NullLiteral() {
        return this.getToken(ECMAScriptParser.NullLiteral, 0);
    }
    BooleanLiteral() {
        return this.getToken(ECMAScriptParser.BooleanLiteral, 0);
    }
    StringLiteral() {
        return this.getToken(ECMAScriptParser.StringLiteral, 0);
    }
    RegularExpressionLiteral() {
        return this.getToken(ECMAScriptParser.RegularExpressionLiteral, 0);
    }
    numericLiteral() {
        return this.getTypedRuleContext(NumericLiteralContext, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_literal;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLiteral) {
            return visitor.visitLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class NumericLiteralContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    DecimalLiteral() {
        return this.getToken(ECMAScriptParser.DecimalLiteral, 0);
    }
    HexIntegerLiteral() {
        return this.getToken(ECMAScriptParser.HexIntegerLiteral, 0);
    }
    OctalIntegerLiteral() {
        return this.getToken(ECMAScriptParser.OctalIntegerLiteral, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_numericLiteral;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNumericLiteral) {
            return visitor.visitNumericLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class IdentifierNameContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    Identifier() {
        return this.getToken(ECMAScriptParser.Identifier, 0);
    }
    reservedWord() {
        return this.getTypedRuleContext(ReservedWordContext, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_identifierName;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdentifierName) {
            return visitor.visitIdentifierName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ReservedWordContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    keyword() {
        return this.getTypedRuleContext(KeywordContext, 0);
    }
    futureReservedWord() {
        return this.getTypedRuleContext(FutureReservedWordContext, 0);
    }
    NullLiteral() {
        return this.getToken(ECMAScriptParser.NullLiteral, 0);
    }
    BooleanLiteral() {
        return this.getToken(ECMAScriptParser.BooleanLiteral, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_reservedWord;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitReservedWord) {
            return visitor.visitReservedWord(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class KeywordContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    Break() {
        return this.getToken(ECMAScriptParser.Break, 0);
    }
    Do() {
        return this.getToken(ECMAScriptParser.Do, 0);
    }
    Instanceof() {
        return this.getToken(ECMAScriptParser.Instanceof, 0);
    }
    Typeof() {
        return this.getToken(ECMAScriptParser.Typeof, 0);
    }
    Case() {
        return this.getToken(ECMAScriptParser.Case, 0);
    }
    Else() {
        return this.getToken(ECMAScriptParser.Else, 0);
    }
    New() {
        return this.getToken(ECMAScriptParser.New, 0);
    }
    Var() {
        return this.getToken(ECMAScriptParser.Var, 0);
    }
    Catch() {
        return this.getToken(ECMAScriptParser.Catch, 0);
    }
    Finally() {
        return this.getToken(ECMAScriptParser.Finally, 0);
    }
    Return() {
        return this.getToken(ECMAScriptParser.Return, 0);
    }
    Void() {
        return this.getToken(ECMAScriptParser.Void, 0);
    }
    Continue() {
        return this.getToken(ECMAScriptParser.Continue, 0);
    }
    For() {
        return this.getToken(ECMAScriptParser.For, 0);
    }
    Switch() {
        return this.getToken(ECMAScriptParser.Switch, 0);
    }
    While() {
        return this.getToken(ECMAScriptParser.While, 0);
    }
    Debugger() {
        return this.getToken(ECMAScriptParser.Debugger, 0);
    }
    Function() {
        return this.getToken(ECMAScriptParser.Function, 0);
    }
    This() {
        return this.getToken(ECMAScriptParser.This, 0);
    }
    With() {
        return this.getToken(ECMAScriptParser.With, 0);
    }
    Default() {
        return this.getToken(ECMAScriptParser.Default, 0);
    }
    If() {
        return this.getToken(ECMAScriptParser.If, 0);
    }
    Throw() {
        return this.getToken(ECMAScriptParser.Throw, 0);
    }
    Delete() {
        return this.getToken(ECMAScriptParser.Delete, 0);
    }
    In() {
        return this.getToken(ECMAScriptParser.In, 0);
    }
    Try() {
        return this.getToken(ECMAScriptParser.Try, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_keyword;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitKeyword) {
            return visitor.visitKeyword(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class FutureReservedWordContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    Class() {
        return this.getToken(ECMAScriptParser.Class, 0);
    }
    Enum() {
        return this.getToken(ECMAScriptParser.Enum, 0);
    }
    Extends() {
        return this.getToken(ECMAScriptParser.Extends, 0);
    }
    Super() {
        return this.getToken(ECMAScriptParser.Super, 0);
    }
    Const() {
        return this.getToken(ECMAScriptParser.Const, 0);
    }
    Export() {
        return this.getToken(ECMAScriptParser.Export, 0);
    }
    Import() {
        return this.getToken(ECMAScriptParser.Import, 0);
    }
    Implements() {
        return this.getToken(ECMAScriptParser.Implements, 0);
    }
    Let() {
        return this.getToken(ECMAScriptParser.Let, 0);
    }
    Private() {
        return this.getToken(ECMAScriptParser.Private, 0);
    }
    Public() {
        return this.getToken(ECMAScriptParser.Public, 0);
    }
    Interface() {
        return this.getToken(ECMAScriptParser.Interface, 0);
    }
    Package() {
        return this.getToken(ECMAScriptParser.Package, 0);
    }
    Protected() {
        return this.getToken(ECMAScriptParser.Protected, 0);
    }
    Static() {
        return this.getToken(ECMAScriptParser.Static, 0);
    }
    Yield() {
        return this.getToken(ECMAScriptParser.Yield, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_futureReservedWord;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFutureReservedWord) {
            return visitor.visitFutureReservedWord(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class GetterContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    Identifier() {
        return this.getToken(ECMAScriptParser.Identifier, 0);
    }
    propertyName() {
        return this.getTypedRuleContext(PropertyNameContext, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_getter;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGetter) {
            return visitor.visitGetter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class SetterContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    Identifier() {
        return this.getToken(ECMAScriptParser.Identifier, 0);
    }
    propertyName() {
        return this.getTypedRuleContext(PropertyNameContext, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_setter;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSetter) {
            return visitor.visitSetter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class EosContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    SemiColon() {
        return this.getToken(ECMAScriptParser.SemiColon, 0);
    }
    EOF() {
        return this.getToken(ECMAScriptParser.EOF, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_eos;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEos) {
            return visitor.visitEos(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class EofContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    EOF() {
        return this.getToken(ECMAScriptParser.EOF, 0);
    }
    get ruleIndex() {
        return ECMAScriptParser.RULE_eof;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEof) {
            return visitor.visitEof(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
//# sourceMappingURL=ECMAScriptParser.js.map