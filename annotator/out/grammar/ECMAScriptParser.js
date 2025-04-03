// Generated from ECMAScript.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import { ATN, ATNDeserializer, DFA, FailedPredicateException, RecognitionException, NoViableAltException, Parser, ParserATNSimulator, Lexer, ParserRuleContext, PredictionContextCache, Token } from 'antlr4';
class ECMAScriptParser extends Parser {
    get grammarFileName() { return "ECMAScript.g4"; }
    get literalNames() { return ECMAScriptParser.literalNames; }
    get symbolicNames() { return ECMAScriptParser.symbolicNames; }
    get ruleNames() { return ECMAScriptParser.ruleNames; }
    get serializedATN() { return ECMAScriptParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException(this, predicate, message);
    }
    /**
     * Returns true if, on the current index of the parser's token stream,
     * a token of the given type exists on the HIDDEN channel.
     * @param type {Number} The type of the token on the HIDDEN channel to check.
     * @returns {Boolean}
     */
    here(type) {
        var possibleIndexEosToken = Parser.prototype.getCurrentToken.call(this).tokenIndex - 1;
        var ahead = this._input.get(possibleIndexEosToken);
        return (ahead.channel == Lexer.HIDDEN) && (ahead.type == type);
    }
    // ECMAScriptParser.prototype.here = function(type) {
    //     var possibleIndexEosToken = antlr4.Parser.prototype.getCurrentToken.call(this).tokenIndex - 1;
    //     var ahead = this._input.get(possibleIndexEosToken);
    //     return (ahead.channel == antlr4.Lexer.HIDDEN) && (ahead.type == type);
    // };
    /**
     * Returns true if, on the current index of the parser's
     * token stream, a token exists on the HIDDEN channel which
     * either is a line terminator, or is a multi line comment that
     * contains a line terminator.
     * @returns {Boolean}
     */
    lineTerminatorAhead() {
        var possibleIndexEosToken = Parser.prototype.getCurrentToken.call(this).tokenIndex - 1;
        var ahead = this._input.get(possibleIndexEosToken);
        if (ahead.channel != Lexer.HIDDEN)
            return false;
        var text = ahead.text;
        var type = ahead.type;
        return (type == ECMAScriptParser.MultiLineComment && text.indexOf("\r") !== -1 || text.indexOf("\n") !== -1) ||
            (type == ECMAScriptParser.LineTerminator);
    }
    // ECMAScriptParser.prototype.lineTerminatorAhead = function() {
    //     var possibleIndexEosToken = antlr4.Parser.prototype.getCurrentToken.call(this).tokenIndex - 1;
    //     var ahead = this._input.get(possibleIndexEosToken);
    //
    //     if (ahead.channel != antlr4.Lexer.HIDDEN)
    //         return false;
    //
    //     var text = ahead.text;
    //     var type = ahead.type;
    //
    //     return (type == ECMAScriptParser.MultiLineComment && text.indexOf("\r") !== -1 || text.indexOf("\n") !== -1) ||
    //             (type == ECMAScriptParser.LineTerminator);
    // };
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
                        if (!(this._input.LT(1).type != ECMAScriptParser.Function)) {
                            throw this.createFailedPredicateException("this._input.LT(1).type != ECMAScriptParser.Function");
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
                        if (!(this._input.LT(1).type != ECMAScriptParser.OpenBrace)) {
                            throw this.createFailedPredicateException("this._input.LT(1).type != ECMAScriptParser.OpenBrace");
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
                this.state = 177;
                this.match(ECMAScriptParser.If);
                this.state = 178;
                this.match(ECMAScriptParser.OpenParen);
                this.state = 179;
                this.expressionSequence();
                this.state = 180;
                this.match(ECMAScriptParser.CloseParen);
                this.state = 181;
                this.statement();
                this.state = 184;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 8, this._ctx)) {
                    case 1:
                        {
                            this.state = 182;
                            this.match(ECMAScriptParser.Else);
                            this.state = 183;
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
            this.state = 247;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 14, this._ctx)) {
                case 1:
                    localctx = new DoStatementContext(this, localctx);
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 186;
                        this.match(ECMAScriptParser.Do);
                        this.state = 187;
                        this.statement();
                        this.state = 188;
                        this.match(ECMAScriptParser.While);
                        this.state = 189;
                        this.match(ECMAScriptParser.OpenParen);
                        this.state = 190;
                        this.expressionSequence();
                        this.state = 191;
                        this.match(ECMAScriptParser.CloseParen);
                        this.state = 192;
                        this.eos();
                    }
                    break;
                case 2:
                    localctx = new WhileStatementContext(this, localctx);
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 194;
                        this.match(ECMAScriptParser.While);
                        this.state = 195;
                        this.match(ECMAScriptParser.OpenParen);
                        this.state = 196;
                        this.expressionSequence();
                        this.state = 197;
                        this.match(ECMAScriptParser.CloseParen);
                        this.state = 198;
                        this.statement();
                    }
                    break;
                case 3:
                    localctx = new ForStatementContext(this, localctx);
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 200;
                        this.match(ECMAScriptParser.For);
                        this.state = 201;
                        this.match(ECMAScriptParser.OpenParen);
                        this.state = 203;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2064554) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 281086239) !== 0) || _la === 98 || _la === 99) {
                            {
                                this.state = 202;
                                this.expressionSequence();
                            }
                        }
                        this.state = 205;
                        this.match(ECMAScriptParser.SemiColon);
                        this.state = 207;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2064554) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 281086239) !== 0) || _la === 98 || _la === 99) {
                            {
                                this.state = 206;
                                this.expressionSequence();
                            }
                        }
                        this.state = 209;
                        this.match(ECMAScriptParser.SemiColon);
                        this.state = 211;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2064554) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 281086239) !== 0) || _la === 98 || _la === 99) {
                            {
                                this.state = 210;
                                this.expressionSequence();
                            }
                        }
                        this.state = 213;
                        this.match(ECMAScriptParser.CloseParen);
                        this.state = 214;
                        this.statement();
                    }
                    break;
                case 4:
                    localctx = new ForVarStatementContext(this, localctx);
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 215;
                        this.match(ECMAScriptParser.For);
                        this.state = 216;
                        this.match(ECMAScriptParser.OpenParen);
                        this.state = 217;
                        this.match(ECMAScriptParser.Var);
                        this.state = 218;
                        this.variableDeclarationList();
                        this.state = 219;
                        this.match(ECMAScriptParser.SemiColon);
                        this.state = 221;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2064554) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 281086239) !== 0) || _la === 98 || _la === 99) {
                            {
                                this.state = 220;
                                this.expressionSequence();
                            }
                        }
                        this.state = 223;
                        this.match(ECMAScriptParser.SemiColon);
                        this.state = 225;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2064554) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 281086239) !== 0) || _la === 98 || _la === 99) {
                            {
                                this.state = 224;
                                this.expressionSequence();
                            }
                        }
                        this.state = 227;
                        this.match(ECMAScriptParser.CloseParen);
                        this.state = 228;
                        this.statement();
                    }
                    break;
                case 5:
                    localctx = new ForInStatementContext(this, localctx);
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 230;
                        this.match(ECMAScriptParser.For);
                        this.state = 231;
                        this.match(ECMAScriptParser.OpenParen);
                        this.state = 232;
                        this.singleExpression(0);
                        this.state = 233;
                        this.match(ECMAScriptParser.In);
                        this.state = 234;
                        this.expressionSequence();
                        this.state = 235;
                        this.match(ECMAScriptParser.CloseParen);
                        this.state = 236;
                        this.statement();
                    }
                    break;
                case 6:
                    localctx = new ForVarInStatementContext(this, localctx);
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 238;
                        this.match(ECMAScriptParser.For);
                        this.state = 239;
                        this.match(ECMAScriptParser.OpenParen);
                        this.state = 240;
                        this.match(ECMAScriptParser.Var);
                        this.state = 241;
                        this.variableDeclaration();
                        this.state = 242;
                        this.match(ECMAScriptParser.In);
                        this.state = 243;
                        this.expressionSequence();
                        this.state = 244;
                        this.match(ECMAScriptParser.CloseParen);
                        this.state = 245;
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
                this.state = 249;
                this.match(ECMAScriptParser.Continue);
                this.state = 252;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 15, this._ctx)) {
                    case 1:
                        {
                            this.state = 250;
                            if (!(!this.here(ECMAScriptParser.LineTerminator))) {
                                throw this.createFailedPredicateException("!this.here(ECMAScriptParser.LineTerminator)");
                            }
                            this.state = 251;
                            this.match(ECMAScriptParser.Identifier);
                        }
                        break;
                }
                this.state = 254;
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
                this.state = 256;
                this.match(ECMAScriptParser.Break);
                this.state = 259;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 16, this._ctx)) {
                    case 1:
                        {
                            this.state = 257;
                            if (!(!this.here(ECMAScriptParser.LineTerminator))) {
                                throw this.createFailedPredicateException("!this.here(ECMAScriptParser.LineTerminator)");
                            }
                            this.state = 258;
                            this.match(ECMAScriptParser.Identifier);
                        }
                        break;
                }
                this.state = 261;
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
                this.state = 263;
                this.match(ECMAScriptParser.Return);
                this.state = 266;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 17, this._ctx)) {
                    case 1:
                        {
                            this.state = 264;
                            if (!(!this.here(ECMAScriptParser.LineTerminator))) {
                                throw this.createFailedPredicateException("!this.here(ECMAScriptParser.LineTerminator)");
                            }
                            this.state = 265;
                            this.expressionSequence();
                        }
                        break;
                }
                this.state = 268;
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
                this.state = 270;
                this.match(ECMAScriptParser.With);
                this.state = 271;
                this.match(ECMAScriptParser.OpenParen);
                this.state = 272;
                this.expressionSequence();
                this.state = 273;
                this.match(ECMAScriptParser.CloseParen);
                this.state = 274;
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
                this.state = 276;
                this.match(ECMAScriptParser.Switch);
                this.state = 277;
                this.match(ECMAScriptParser.OpenParen);
                this.state = 278;
                this.expressionSequence();
                this.state = 279;
                this.match(ECMAScriptParser.CloseParen);
                this.state = 280;
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
                this.state = 282;
                this.match(ECMAScriptParser.OpenBrace);
                this.state = 284;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 60) {
                    {
                        this.state = 283;
                        this.caseClauses();
                    }
                }
                this.state = 290;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 76) {
                    {
                        this.state = 286;
                        this.defaultClause();
                        this.state = 288;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 60) {
                            {
                                this.state = 287;
                                this.caseClauses();
                            }
                        }
                    }
                }
                this.state = 292;
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
                this.state = 295;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 294;
                            this.caseClause();
                        }
                    }
                    this.state = 297;
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
                this.state = 299;
                this.match(ECMAScriptParser.Case);
                this.state = 300;
                this.expressionSequence();
                this.state = 301;
                this.match(ECMAScriptParser.Colon);
                this.state = 303;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 22, this._ctx)) {
                    case 1:
                        {
                            this.state = 302;
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
                this.state = 305;
                this.match(ECMAScriptParser.Default);
                this.state = 306;
                this.match(ECMAScriptParser.Colon);
                this.state = 308;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 23, this._ctx)) {
                    case 1:
                        {
                            this.state = 307;
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
                this.state = 310;
                this.match(ECMAScriptParser.Identifier);
                this.state = 311;
                this.match(ECMAScriptParser.Colon);
                this.state = 312;
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
                this.state = 314;
                this.match(ECMAScriptParser.Throw);
                this.state = 315;
                if (!(!this.here(ECMAScriptParser.LineTerminator))) {
                    throw this.createFailedPredicateException("!this.here(ECMAScriptParser.LineTerminator)");
                }
                this.state = 316;
                this.expressionSequence();
                this.state = 317;
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
            this.state = 332;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 24, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 319;
                        this.match(ECMAScriptParser.Try);
                        this.state = 320;
                        this.block();
                        this.state = 321;
                        this.catchProduction();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 323;
                        this.match(ECMAScriptParser.Try);
                        this.state = 324;
                        this.block();
                        this.state = 325;
                        this.finallyProduction();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 327;
                        this.match(ECMAScriptParser.Try);
                        this.state = 328;
                        this.block();
                        this.state = 329;
                        this.catchProduction();
                        this.state = 330;
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
                this.state = 334;
                this.match(ECMAScriptParser.Catch);
                this.state = 335;
                this.match(ECMAScriptParser.OpenParen);
                this.state = 336;
                this.match(ECMAScriptParser.Identifier);
                this.state = 337;
                this.match(ECMAScriptParser.CloseParen);
                this.state = 338;
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
                this.state = 340;
                this.match(ECMAScriptParser.Finally);
                this.state = 341;
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
                this.state = 343;
                this.match(ECMAScriptParser.Debugger);
                this.state = 344;
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
                this.state = 346;
                this.match(ECMAScriptParser.Function);
                this.state = 347;
                this.match(ECMAScriptParser.Identifier);
                this.state = 348;
                this.match(ECMAScriptParser.OpenParen);
                this.state = 350;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 98) {
                    {
                        this.state = 349;
                        this.formalParameterList();
                    }
                }
                this.state = 352;
                this.match(ECMAScriptParser.CloseParen);
                this.state = 353;
                this.match(ECMAScriptParser.OpenBrace);
                this.state = 354;
                this.functionBody();
                this.state = 355;
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
                this.state = 357;
                this.match(ECMAScriptParser.Identifier);
                this.state = 362;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 10) {
                    {
                        {
                            this.state = 358;
                            this.match(ECMAScriptParser.Comma);
                            this.state = 359;
                            this.match(ECMAScriptParser.Identifier);
                        }
                    }
                    this.state = 364;
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
                this.state = 366;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 27, this._ctx)) {
                    case 1:
                        {
                            this.state = 365;
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
                this.state = 368;
                this.match(ECMAScriptParser.OpenBracket);
                this.state = 370;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 28, this._ctx)) {
                    case 1:
                        {
                            this.state = 369;
                            this.elementList();
                        }
                        break;
                }
                this.state = 373;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 29, this._ctx)) {
                    case 1:
                        {
                            this.state = 372;
                            this.match(ECMAScriptParser.Comma);
                        }
                        break;
                }
                this.state = 376;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 10) {
                    {
                        this.state = 375;
                        this.elision();
                    }
                }
                this.state = 378;
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
                this.state = 381;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 10) {
                    {
                        this.state = 380;
                        this.elision();
                    }
                }
                this.state = 383;
                this.singleExpression(0);
                this.state = 391;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 33, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 384;
                                this.match(ECMAScriptParser.Comma);
                                this.state = 386;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === 10) {
                                    {
                                        this.state = 385;
                                        this.elision();
                                    }
                                }
                                this.state = 388;
                                this.singleExpression(0);
                            }
                        }
                    }
                    this.state = 393;
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
                this.state = 395;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 394;
                            this.match(ECMAScriptParser.Comma);
                        }
                    }
                    this.state = 397;
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
            this.state = 408;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 36, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 399;
                        this.match(ECMAScriptParser.OpenBrace);
                        this.state = 400;
                        this.match(ECMAScriptParser.CloseBrace);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 401;
                        this.match(ECMAScriptParser.OpenBrace);
                        this.state = 402;
                        this.propertyNameAndValueList();
                        this.state = 404;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 10) {
                            {
                                this.state = 403;
                                this.match(ECMAScriptParser.Comma);
                            }
                        }
                        this.state = 406;
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
                this.state = 410;
                this.propertyAssignment();
                this.state = 415;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 411;
                                this.match(ECMAScriptParser.Comma);
                                this.state = 412;
                                this.propertyAssignment();
                            }
                        }
                    }
                    this.state = 417;
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
            this.state = 437;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 38, this._ctx)) {
                case 1:
                    localctx = new PropertyExpressionAssignmentContext(this, localctx);
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 418;
                        this.propertyName();
                        this.state = 419;
                        this.match(ECMAScriptParser.Colon);
                        this.state = 420;
                        this.singleExpression(0);
                    }
                    break;
                case 2:
                    localctx = new PropertyGetterContext(this, localctx);
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 422;
                        this.getter();
                        this.state = 423;
                        this.match(ECMAScriptParser.OpenParen);
                        this.state = 424;
                        this.match(ECMAScriptParser.CloseParen);
                        this.state = 425;
                        this.match(ECMAScriptParser.OpenBrace);
                        this.state = 426;
                        this.functionBody();
                        this.state = 427;
                        this.match(ECMAScriptParser.CloseBrace);
                    }
                    break;
                case 3:
                    localctx = new PropertySetterContext(this, localctx);
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 429;
                        this.setter();
                        this.state = 430;
                        this.match(ECMAScriptParser.OpenParen);
                        this.state = 431;
                        this.propertySetParameterList();
                        this.state = 432;
                        this.match(ECMAScriptParser.CloseParen);
                        this.state = 433;
                        this.match(ECMAScriptParser.OpenBrace);
                        this.state = 434;
                        this.functionBody();
                        this.state = 435;
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
            this.state = 442;
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
                        this.state = 439;
                        this.identifierName();
                    }
                    break;
                case 99:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 440;
                        this.match(ECMAScriptParser.StringLiteral);
                    }
                    break;
                case 53:
                case 54:
                case 55:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 441;
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
                this.state = 444;
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
                this.state = 446;
                this.match(ECMAScriptParser.OpenParen);
                this.state = 448;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2064554) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 281086239) !== 0) || _la === 98 || _la === 99) {
                    {
                        this.state = 447;
                        this.argumentList();
                    }
                }
                this.state = 450;
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
                this.state = 452;
                this.singleExpression(0);
                this.state = 457;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 10) {
                    {
                        {
                            this.state = 453;
                            this.match(ECMAScriptParser.Comma);
                            this.state = 454;
                            this.singleExpression(0);
                        }
                    }
                    this.state = 459;
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
                this.state = 460;
                this.singleExpression(0);
                this.state = 465;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 42, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 461;
                                this.match(ECMAScriptParser.Comma);
                                this.state = 462;
                                this.singleExpression(0);
                            }
                        }
                    }
                    this.state = 467;
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
                this.state = 514;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case 73:
                        {
                            localctx = new FunctionExpressionContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 469;
                            this.match(ECMAScriptParser.Function);
                            this.state = 471;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === 98) {
                                {
                                    this.state = 470;
                                    this.match(ECMAScriptParser.Identifier);
                                }
                            }
                            this.state = 473;
                            this.match(ECMAScriptParser.OpenParen);
                            this.state = 475;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === 98) {
                                {
                                    this.state = 474;
                                    this.formalParameterList();
                                }
                            }
                            this.state = 477;
                            this.match(ECMAScriptParser.CloseParen);
                            this.state = 478;
                            this.match(ECMAScriptParser.OpenBrace);
                            this.state = 479;
                            this.functionBody();
                            this.state = 480;
                            this.match(ECMAScriptParser.CloseBrace);
                        }
                        break;
                    case 62:
                        {
                            localctx = new NewExpressionContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 482;
                            this.match(ECMAScriptParser.New);
                            this.state = 483;
                            this.singleExpression(0);
                            this.state = 485;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 45, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 484;
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
                            this.state = 487;
                            this.match(ECMAScriptParser.Delete);
                            this.state = 488;
                            this.singleExpression(30);
                        }
                        break;
                    case 67:
                        {
                            localctx = new VoidExpressionContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 489;
                            this.match(ECMAScriptParser.Void);
                            this.state = 490;
                            this.singleExpression(29);
                        }
                        break;
                    case 59:
                        {
                            localctx = new TypeofExpressionContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 491;
                            this.match(ECMAScriptParser.Typeof);
                            this.state = 492;
                            this.singleExpression(28);
                        }
                        break;
                    case 15:
                        {
                            localctx = new PreIncrementExpressionContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 493;
                            this.match(ECMAScriptParser.PlusPlus);
                            this.state = 494;
                            this.singleExpression(27);
                        }
                        break;
                    case 16:
                        {
                            localctx = new PreDecreaseExpressionContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 495;
                            this.match(ECMAScriptParser.MinusMinus);
                            this.state = 496;
                            this.singleExpression(26);
                        }
                        break;
                    case 17:
                        {
                            localctx = new UnaryPlusExpressionContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 497;
                            this.match(ECMAScriptParser.Plus);
                            this.state = 498;
                            this.singleExpression(25);
                        }
                        break;
                    case 18:
                        {
                            localctx = new UnaryMinusExpressionContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 499;
                            this.match(ECMAScriptParser.Minus);
                            this.state = 500;
                            this.singleExpression(24);
                        }
                        break;
                    case 19:
                        {
                            localctx = new BitNotExpressionContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 501;
                            this.match(ECMAScriptParser.BitNot);
                            this.state = 502;
                            this.singleExpression(23);
                        }
                        break;
                    case 20:
                        {
                            localctx = new NotExpressionContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 503;
                            this.match(ECMAScriptParser.Not);
                            this.state = 504;
                            this.singleExpression(22);
                        }
                        break;
                    case 74:
                        {
                            localctx = new ThisExpressionContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 505;
                            this.match(ECMAScriptParser.This);
                        }
                        break;
                    case 98:
                        {
                            localctx = new IdentifierExpressionContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 506;
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
                            this.state = 507;
                            this.literal();
                        }
                        break;
                    case 3:
                        {
                            localctx = new ArrayLiteralExpressionContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 508;
                            this.arrayLiteral();
                        }
                        break;
                    case 7:
                        {
                            localctx = new ObjectLiteralExpressionContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 509;
                            this.objectLiteral();
                        }
                        break;
                    case 5:
                        {
                            localctx = new ParenthesizedExpressionContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 510;
                            this.match(ECMAScriptParser.OpenParen);
                            this.state = 511;
                            this.expressionSequence();
                            this.state = 512;
                            this.match(ECMAScriptParser.CloseParen);
                        }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 583;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 48, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            this.state = 581;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 47, this._ctx)) {
                                case 1:
                                    {
                                        localctx = new MultiplicativeExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 516;
                                        if (!(this.precpred(this._ctx, 21))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
                                        }
                                        this.state = 517;
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 14680064) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 518;
                                        this.singleExpression(22);
                                    }
                                    break;
                                case 2:
                                    {
                                        localctx = new AdditiveExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 519;
                                        if (!(this.precpred(this._ctx, 20))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
                                        }
                                        this.state = 520;
                                        _la = this._input.LA(1);
                                        if (!(_la === 17 || _la === 18)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 521;
                                        this.singleExpression(21);
                                    }
                                    break;
                                case 3:
                                    {
                                        localctx = new BitShiftExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 522;
                                        if (!(this.precpred(this._ctx, 19))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
                                        }
                                        this.state = 523;
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 117440512) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 524;
                                        this.singleExpression(20);
                                    }
                                    break;
                                case 4:
                                    {
                                        localctx = new RelationalExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 525;
                                        if (!(this.precpred(this._ctx, 18))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
                                        }
                                        this.state = 526;
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 2013265920) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 527;
                                        this.singleExpression(19);
                                    }
                                    break;
                                case 5:
                                    {
                                        localctx = new InstanceofExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 528;
                                        if (!(this.precpred(this._ctx, 17))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
                                        }
                                        this.state = 529;
                                        this.match(ECMAScriptParser.Instanceof);
                                        this.state = 530;
                                        this.singleExpression(18);
                                    }
                                    break;
                                case 6:
                                    {
                                        localctx = new InExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 531;
                                        if (!(this.precpred(this._ctx, 16))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
                                        }
                                        this.state = 532;
                                        this.match(ECMAScriptParser.In);
                                        this.state = 533;
                                        this.singleExpression(17);
                                    }
                                    break;
                                case 7:
                                    {
                                        localctx = new EqualityExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 534;
                                        if (!(this.precpred(this._ctx, 15))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
                                        }
                                        this.state = 535;
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & 15) !== 0))) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 536;
                                        this.singleExpression(16);
                                    }
                                    break;
                                case 8:
                                    {
                                        localctx = new BitAndExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 537;
                                        if (!(this.precpred(this._ctx, 14))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
                                        }
                                        this.state = 538;
                                        this.match(ECMAScriptParser.BitAnd);
                                        this.state = 539;
                                        this.singleExpression(15);
                                    }
                                    break;
                                case 9:
                                    {
                                        localctx = new BitXOrExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 540;
                                        if (!(this.precpred(this._ctx, 13))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
                                        }
                                        this.state = 541;
                                        this.match(ECMAScriptParser.BitXOr);
                                        this.state = 542;
                                        this.singleExpression(14);
                                    }
                                    break;
                                case 10:
                                    {
                                        localctx = new BitOrExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 543;
                                        if (!(this.precpred(this._ctx, 12))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
                                        }
                                        this.state = 544;
                                        this.match(ECMAScriptParser.BitOr);
                                        this.state = 545;
                                        this.singleExpression(13);
                                    }
                                    break;
                                case 11:
                                    {
                                        localctx = new LogicalAndExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 546;
                                        if (!(this.precpred(this._ctx, 11))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
                                        }
                                        this.state = 547;
                                        this.match(ECMAScriptParser.And);
                                        this.state = 548;
                                        this.singleExpression(12);
                                    }
                                    break;
                                case 12:
                                    {
                                        localctx = new LogicalOrExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 549;
                                        if (!(this.precpred(this._ctx, 10))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
                                        }
                                        this.state = 550;
                                        this.match(ECMAScriptParser.Or);
                                        this.state = 551;
                                        this.singleExpression(11);
                                    }
                                    break;
                                case 13:
                                    {
                                        localctx = new TernaryExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 552;
                                        if (!(this.precpred(this._ctx, 9))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
                                        }
                                        this.state = 553;
                                        this.match(ECMAScriptParser.QuestionMark);
                                        this.state = 554;
                                        this.singleExpression(0);
                                        this.state = 555;
                                        this.match(ECMAScriptParser.Colon);
                                        this.state = 556;
                                        this.singleExpression(10);
                                    }
                                    break;
                                case 14:
                                    {
                                        localctx = new MemberIndexExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 558;
                                        if (!(this.precpred(this._ctx, 36))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 36)");
                                        }
                                        this.state = 559;
                                        this.match(ECMAScriptParser.OpenBracket);
                                        this.state = 560;
                                        this.expressionSequence();
                                        this.state = 561;
                                        this.match(ECMAScriptParser.CloseBracket);
                                    }
                                    break;
                                case 15:
                                    {
                                        localctx = new MemberDotExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 563;
                                        if (!(this.precpred(this._ctx, 35))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 35)");
                                        }
                                        this.state = 564;
                                        this.match(ECMAScriptParser.Dot);
                                        this.state = 565;
                                        this.identifierName();
                                    }
                                    break;
                                case 16:
                                    {
                                        localctx = new ArgumentsExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 566;
                                        if (!(this.precpred(this._ctx, 34))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 34)");
                                        }
                                        this.state = 567;
                                        this.arguments();
                                    }
                                    break;
                                case 17:
                                    {
                                        localctx = new PostIncrementExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 568;
                                        if (!(this.precpred(this._ctx, 32))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 32)");
                                        }
                                        this.state = 569;
                                        if (!(!this.here(ECMAScriptParser.LineTerminator))) {
                                            throw this.createFailedPredicateException("!this.here(ECMAScriptParser.LineTerminator)");
                                        }
                                        this.state = 570;
                                        this.match(ECMAScriptParser.PlusPlus);
                                    }
                                    break;
                                case 18:
                                    {
                                        localctx = new PostDecreaseExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 571;
                                        if (!(this.precpred(this._ctx, 31))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 31)");
                                        }
                                        this.state = 572;
                                        if (!(!this.here(ECMAScriptParser.LineTerminator))) {
                                            throw this.createFailedPredicateException("!this.here(ECMAScriptParser.LineTerminator)");
                                        }
                                        this.state = 573;
                                        this.match(ECMAScriptParser.MinusMinus);
                                    }
                                    break;
                                case 19:
                                    {
                                        localctx = new AssignmentExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 574;
                                        if (!(this.precpred(this._ctx, 8))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
                                        }
                                        this.state = 575;
                                        this.match(ECMAScriptParser.Assign);
                                        this.state = 576;
                                        this.expressionSequence();
                                    }
                                    break;
                                case 20:
                                    {
                                        localctx = new AssignmentOperatorExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, ECMAScriptParser.RULE_singleExpression);
                                        this.state = 577;
                                        if (!(this.precpred(this._ctx, 7))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
                                        }
                                        this.state = 578;
                                        this.assignmentOperator();
                                        this.state = 579;
                                        this.expressionSequence();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 585;
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
                this.state = 586;
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
            this.state = 590;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 1:
                case 51:
                case 52:
                case 99:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 588;
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
                        this.state = 589;
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
                this.state = 592;
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
            this.state = 596;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 98:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 594;
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
                        this.state = 595;
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
            this.state = 601;
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
                        this.state = 598;
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
                        this.state = 599;
                        this.futureReservedWord();
                    }
                    break;
                case 51:
                case 52:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 600;
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
                this.state = 603;
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
                this.state = 605;
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
        var _a, _b;
        let localctx = new GetterContext(this, this._ctx, this.state);
        this.enterRule(localctx, 102, ECMAScriptParser.RULE_getter);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 607;
                if (!((_b = (_a = this._input.LT(1).text) === null || _a === void 0 ? void 0 : _a.startsWith("get")) !== null && _b !== void 0 ? _b : false)) {
                    throw this.createFailedPredicateException("this._input.LT(1).text?.startsWith(\"get\") ?? false");
                }
                this.state = 608;
                this.match(ECMAScriptParser.Identifier);
                this.state = 609;
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
        var _a, _b;
        let localctx = new SetterContext(this, this._ctx, this.state);
        this.enterRule(localctx, 104, ECMAScriptParser.RULE_setter);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 611;
                if (!((_b = (_a = this._input.LT(1).text) === null || _a === void 0 ? void 0 : _a.startsWith("set")) !== null && _b !== void 0 ? _b : false)) {
                    throw this.createFailedPredicateException("this._input.LT(1).text?.startsWith(\"set\") ?? false");
                }
                this.state = 612;
                this.match(ECMAScriptParser.Identifier);
                this.state = 613;
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
            this.state = 619;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 52, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 615;
                        this.match(ECMAScriptParser.SemiColon);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 616;
                        this.match(ECMAScriptParser.EOF);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 617;
                        if (!(this.lineTerminatorAhead())) {
                            throw this.createFailedPredicateException("this.lineTerminatorAhead()");
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 618;
                        if (!(this._input.LT(1).type == ECMAScriptParser.CloseBrace)) {
                            throw this.createFailedPredicateException("this._input.LT(1).type == ECMAScriptParser.CloseBrace");
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
                this.state = 621;
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
                return this._input.LT(1).type != ECMAScriptParser.Function;
        }
        return true;
    }
    statement_sempred(localctx, predIndex) {
        switch (predIndex) {
            case 1:
                return this._input.LT(1).type != ECMAScriptParser.OpenBrace;
        }
        return true;
    }
    continueStatement_sempred(localctx, predIndex) {
        switch (predIndex) {
            case 2:
                return !this.here(ECMAScriptParser.LineTerminator);
        }
        return true;
    }
    breakStatement_sempred(localctx, predIndex) {
        switch (predIndex) {
            case 3:
                return !this.here(ECMAScriptParser.LineTerminator);
        }
        return true;
    }
    returnStatement_sempred(localctx, predIndex) {
        switch (predIndex) {
            case 4:
                return !this.here(ECMAScriptParser.LineTerminator);
        }
        return true;
    }
    throwStatement_sempred(localctx, predIndex) {
        switch (predIndex) {
            case 5:
                return !this.here(ECMAScriptParser.LineTerminator);
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
                return this.precpred(this._ctx, 36);
            case 20:
                return this.precpred(this._ctx, 35);
            case 21:
                return this.precpred(this._ctx, 34);
            case 22:
                return this.precpred(this._ctx, 32);
            case 23:
                return !this.here(ECMAScriptParser.LineTerminator);
            case 24:
                return this.precpred(this._ctx, 31);
            case 25:
                return !this.here(ECMAScriptParser.LineTerminator);
            case 26:
                return this.precpred(this._ctx, 8);
            case 27:
                return this.precpred(this._ctx, 7);
        }
        return true;
    }
    getter_sempred(localctx, predIndex) {
        var _a, _b;
        switch (predIndex) {
            case 28:
                return (_b = (_a = this._input.LT(1).text) === null || _a === void 0 ? void 0 : _a.startsWith("get")) !== null && _b !== void 0 ? _b : false;
        }
        return true;
    }
    setter_sempred(localctx, predIndex) {
        var _a, _b;
        switch (predIndex) {
            case 29:
                return (_b = (_a = this._input.LT(1).text) === null || _a === void 0 ? void 0 : _a.startsWith("set")) !== null && _b !== void 0 ? _b : false;
        }
        return true;
    }
    eos_sempred(localctx, predIndex) {
        switch (predIndex) {
            case 30:
                return this.lineTerminatorAhead();
            case 31:
                return this._input.LT(1).type == ECMAScriptParser.CloseBrace;
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
ECMAScriptParser._serializedATN = [4, 1, 103, 624, 2, 0, 7, 0,
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
    8, 1, 8, 3, 8, 169, 8, 8, 1, 9, 1, 9, 1, 9, 1, 10, 1, 10, 1, 11, 1, 11, 1, 12, 1, 12, 1, 12, 1, 12, 1,
    12, 1, 12, 1, 12, 3, 12, 185, 8, 12, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13,
    1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 3, 13, 204, 8, 13, 1, 13, 1, 13, 3, 13, 208,
    8, 13, 1, 13, 1, 13, 3, 13, 212, 8, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 3,
    13, 222, 8, 13, 1, 13, 1, 13, 3, 13, 226, 8, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13,
    1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 3, 13, 248,
    8, 13, 1, 14, 1, 14, 1, 14, 3, 14, 253, 8, 14, 1, 14, 1, 14, 1, 15, 1, 15, 1, 15, 3, 15, 260, 8, 15,
    1, 15, 1, 15, 1, 16, 1, 16, 1, 16, 3, 16, 267, 8, 16, 1, 16, 1, 16, 1, 17, 1, 17, 1, 17, 1, 17, 1,
    17, 1, 17, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 19, 1, 19, 3, 19, 285, 8, 19, 1, 19, 1, 19,
    3, 19, 289, 8, 19, 3, 19, 291, 8, 19, 1, 19, 1, 19, 1, 20, 4, 20, 296, 8, 20, 11, 20, 12, 20, 297,
    1, 21, 1, 21, 1, 21, 1, 21, 3, 21, 304, 8, 21, 1, 22, 1, 22, 1, 22, 3, 22, 309, 8, 22, 1, 23, 1, 23,
    1, 23, 1, 23, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1,
    25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 3, 25, 333, 8, 25, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26,
    1, 27, 1, 27, 1, 27, 1, 28, 1, 28, 1, 28, 1, 29, 1, 29, 1, 29, 1, 29, 3, 29, 351, 8, 29, 1, 29, 1,
    29, 1, 29, 1, 29, 1, 29, 1, 30, 1, 30, 1, 30, 5, 30, 361, 8, 30, 10, 30, 12, 30, 364, 9, 30, 1, 31,
    3, 31, 367, 8, 31, 1, 32, 1, 32, 3, 32, 371, 8, 32, 1, 32, 3, 32, 374, 8, 32, 1, 32, 3, 32, 377,
    8, 32, 1, 32, 1, 32, 1, 33, 3, 33, 382, 8, 33, 1, 33, 1, 33, 1, 33, 3, 33, 387, 8, 33, 1, 33, 5, 33,
    390, 8, 33, 10, 33, 12, 33, 393, 9, 33, 1, 34, 4, 34, 396, 8, 34, 11, 34, 12, 34, 397, 1, 35, 1,
    35, 1, 35, 1, 35, 1, 35, 3, 35, 405, 8, 35, 1, 35, 1, 35, 3, 35, 409, 8, 35, 1, 36, 1, 36, 1, 36,
    5, 36, 414, 8, 36, 10, 36, 12, 36, 417, 9, 36, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1,
    37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 3, 37, 438, 8, 37,
    1, 38, 1, 38, 1, 38, 3, 38, 443, 8, 38, 1, 39, 1, 39, 1, 40, 1, 40, 3, 40, 449, 8, 40, 1, 40, 1, 40,
    1, 41, 1, 41, 1, 41, 5, 41, 456, 8, 41, 10, 41, 12, 41, 459, 9, 41, 1, 42, 1, 42, 1, 42, 5, 42, 464,
    8, 42, 10, 42, 12, 42, 467, 9, 42, 1, 43, 1, 43, 1, 43, 3, 43, 472, 8, 43, 1, 43, 1, 43, 3, 43, 476,
    8, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 3, 43, 486, 8, 43, 1, 43, 1, 43, 1,
    43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43,
    1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 3, 43, 515, 8, 43, 1, 43, 1,
    43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43,
    1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1,
    43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43,
    1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1,
    43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 5, 43, 582, 8, 43, 10, 43, 12, 43, 585, 9, 43, 1, 44, 1, 44,
    1, 45, 1, 45, 3, 45, 591, 8, 45, 1, 46, 1, 46, 1, 47, 1, 47, 3, 47, 597, 8, 47, 1, 48, 1, 48, 1, 48,
    3, 48, 602, 8, 48, 1, 49, 1, 49, 1, 50, 1, 50, 1, 51, 1, 51, 1, 51, 1, 51, 1, 52, 1, 52, 1, 52, 1,
    52, 1, 53, 1, 53, 1, 53, 1, 53, 3, 53, 620, 8, 53, 1, 54, 1, 54, 1, 54, 0, 1, 86, 55, 0, 2, 4, 6, 8,
    10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56,
    58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102,
    104, 106, 108, 0, 11, 1, 0, 21, 23, 1, 0, 17, 18, 1, 0, 24, 26, 1, 0, 27, 30, 1, 0, 31, 34, 1, 0,
    40, 50, 3, 0, 1, 1, 51, 52, 99, 99, 1, 0, 53, 55, 1, 0, 51, 52, 1, 0, 56, 81, 1, 0, 82, 97, 677, 0,
    111, 1, 0, 0, 0, 2, 116, 1, 0, 0, 0, 4, 123, 1, 0, 0, 0, 6, 141, 1, 0, 0, 0, 8, 143, 1, 0, 0, 0, 10,
    150, 1, 0, 0, 0, 12, 154, 1, 0, 0, 0, 14, 158, 1, 0, 0, 0, 16, 166, 1, 0, 0, 0, 18, 170, 1, 0, 0, 0,
    20, 173, 1, 0, 0, 0, 22, 175, 1, 0, 0, 0, 24, 177, 1, 0, 0, 0, 26, 247, 1, 0, 0, 0, 28, 249, 1, 0,
    0, 0, 30, 256, 1, 0, 0, 0, 32, 263, 1, 0, 0, 0, 34, 270, 1, 0, 0, 0, 36, 276, 1, 0, 0, 0, 38, 282,
    1, 0, 0, 0, 40, 295, 1, 0, 0, 0, 42, 299, 1, 0, 0, 0, 44, 305, 1, 0, 0, 0, 46, 310, 1, 0, 0, 0, 48,
    314, 1, 0, 0, 0, 50, 332, 1, 0, 0, 0, 52, 334, 1, 0, 0, 0, 54, 340, 1, 0, 0, 0, 56, 343, 1, 0, 0, 0,
    58, 346, 1, 0, 0, 0, 60, 357, 1, 0, 0, 0, 62, 366, 1, 0, 0, 0, 64, 368, 1, 0, 0, 0, 66, 381, 1, 0,
    0, 0, 68, 395, 1, 0, 0, 0, 70, 408, 1, 0, 0, 0, 72, 410, 1, 0, 0, 0, 74, 437, 1, 0, 0, 0, 76, 442,
    1, 0, 0, 0, 78, 444, 1, 0, 0, 0, 80, 446, 1, 0, 0, 0, 82, 452, 1, 0, 0, 0, 84, 460, 1, 0, 0, 0, 86,
    514, 1, 0, 0, 0, 88, 586, 1, 0, 0, 0, 90, 590, 1, 0, 0, 0, 92, 592, 1, 0, 0, 0, 94, 596, 1, 0, 0, 0,
    96, 601, 1, 0, 0, 0, 98, 603, 1, 0, 0, 0, 100, 605, 1, 0, 0, 0, 102, 607, 1, 0, 0, 0, 104, 611, 1,
    0, 0, 0, 106, 619, 1, 0, 0, 0, 108, 621, 1, 0, 0, 0, 110, 112, 3, 2, 1, 0, 111, 110, 1, 0, 0, 0, 111,
    112, 1, 0, 0, 0, 112, 113, 1, 0, 0, 0, 113, 114, 5, 0, 0, 1, 114, 1, 1, 0, 0, 0, 115, 117, 3, 4, 2,
    0, 116, 115, 1, 0, 0, 0, 117, 118, 1, 0, 0, 0, 118, 116, 1, 0, 0, 0, 118, 119, 1, 0, 0, 0, 119, 3,
    1, 0, 0, 0, 120, 121, 4, 2, 0, 0, 121, 124, 3, 6, 3, 0, 122, 124, 3, 58, 29, 0, 123, 120, 1, 0, 0,
    0, 123, 122, 1, 0, 0, 0, 124, 5, 1, 0, 0, 0, 125, 142, 3, 8, 4, 0, 126, 142, 3, 12, 6, 0, 127, 142,
    3, 20, 10, 0, 128, 129, 4, 3, 1, 0, 129, 142, 3, 22, 11, 0, 130, 142, 3, 24, 12, 0, 131, 142, 3,
    26, 13, 0, 132, 142, 3, 28, 14, 0, 133, 142, 3, 30, 15, 0, 134, 142, 3, 32, 16, 0, 135, 142, 3,
    34, 17, 0, 136, 142, 3, 46, 23, 0, 137, 142, 3, 36, 18, 0, 138, 142, 3, 48, 24, 0, 139, 142, 3,
    50, 25, 0, 140, 142, 3, 56, 28, 0, 141, 125, 1, 0, 0, 0, 141, 126, 1, 0, 0, 0, 141, 127, 1, 0, 0,
    0, 141, 128, 1, 0, 0, 0, 141, 130, 1, 0, 0, 0, 141, 131, 1, 0, 0, 0, 141, 132, 1, 0, 0, 0, 141, 133,
    1, 0, 0, 0, 141, 134, 1, 0, 0, 0, 141, 135, 1, 0, 0, 0, 141, 136, 1, 0, 0, 0, 141, 137, 1, 0, 0, 0,
    141, 138, 1, 0, 0, 0, 141, 139, 1, 0, 0, 0, 141, 140, 1, 0, 0, 0, 142, 7, 1, 0, 0, 0, 143, 145, 5,
    7, 0, 0, 144, 146, 3, 10, 5, 0, 145, 144, 1, 0, 0, 0, 145, 146, 1, 0, 0, 0, 146, 147, 1, 0, 0, 0,
    147, 148, 5, 8, 0, 0, 148, 9, 1, 0, 0, 0, 149, 151, 3, 6, 3, 0, 150, 149, 1, 0, 0, 0, 151, 152, 1,
    0, 0, 0, 152, 150, 1, 0, 0, 0, 152, 153, 1, 0, 0, 0, 153, 11, 1, 0, 0, 0, 154, 155, 5, 63, 0, 0, 155,
    156, 3, 14, 7, 0, 156, 157, 3, 106, 53, 0, 157, 13, 1, 0, 0, 0, 158, 163, 3, 16, 8, 0, 159, 160,
    5, 10, 0, 0, 160, 162, 3, 16, 8, 0, 161, 159, 1, 0, 0, 0, 162, 165, 1, 0, 0, 0, 163, 161, 1, 0, 0,
    0, 163, 164, 1, 0, 0, 0, 164, 15, 1, 0, 0, 0, 165, 163, 1, 0, 0, 0, 166, 168, 5, 98, 0, 0, 167, 169,
    3, 18, 9, 0, 168, 167, 1, 0, 0, 0, 168, 169, 1, 0, 0, 0, 169, 17, 1, 0, 0, 0, 170, 171, 5, 11, 0,
    0, 171, 172, 3, 86, 43, 0, 172, 19, 1, 0, 0, 0, 173, 174, 5, 9, 0, 0, 174, 21, 1, 0, 0, 0, 175, 176,
    3, 84, 42, 0, 176, 23, 1, 0, 0, 0, 177, 178, 5, 77, 0, 0, 178, 179, 5, 5, 0, 0, 179, 180, 3, 84,
    42, 0, 180, 181, 5, 6, 0, 0, 181, 184, 3, 6, 3, 0, 182, 183, 5, 61, 0, 0, 183, 185, 3, 6, 3, 0, 184,
    182, 1, 0, 0, 0, 184, 185, 1, 0, 0, 0, 185, 25, 1, 0, 0, 0, 186, 187, 5, 57, 0, 0, 187, 188, 3, 6,
    3, 0, 188, 189, 5, 71, 0, 0, 189, 190, 5, 5, 0, 0, 190, 191, 3, 84, 42, 0, 191, 192, 5, 6, 0, 0,
    192, 193, 3, 106, 53, 0, 193, 248, 1, 0, 0, 0, 194, 195, 5, 71, 0, 0, 195, 196, 5, 5, 0, 0, 196,
    197, 3, 84, 42, 0, 197, 198, 5, 6, 0, 0, 198, 199, 3, 6, 3, 0, 199, 248, 1, 0, 0, 0, 200, 201, 5,
    69, 0, 0, 201, 203, 5, 5, 0, 0, 202, 204, 3, 84, 42, 0, 203, 202, 1, 0, 0, 0, 203, 204, 1, 0, 0,
    0, 204, 205, 1, 0, 0, 0, 205, 207, 5, 9, 0, 0, 206, 208, 3, 84, 42, 0, 207, 206, 1, 0, 0, 0, 207,
    208, 1, 0, 0, 0, 208, 209, 1, 0, 0, 0, 209, 211, 5, 9, 0, 0, 210, 212, 3, 84, 42, 0, 211, 210, 1,
    0, 0, 0, 211, 212, 1, 0, 0, 0, 212, 213, 1, 0, 0, 0, 213, 214, 5, 6, 0, 0, 214, 248, 3, 6, 3, 0, 215,
    216, 5, 69, 0, 0, 216, 217, 5, 5, 0, 0, 217, 218, 5, 63, 0, 0, 218, 219, 3, 14, 7, 0, 219, 221,
    5, 9, 0, 0, 220, 222, 3, 84, 42, 0, 221, 220, 1, 0, 0, 0, 221, 222, 1, 0, 0, 0, 222, 223, 1, 0, 0,
    0, 223, 225, 5, 9, 0, 0, 224, 226, 3, 84, 42, 0, 225, 224, 1, 0, 0, 0, 225, 226, 1, 0, 0, 0, 226,
    227, 1, 0, 0, 0, 227, 228, 5, 6, 0, 0, 228, 229, 3, 6, 3, 0, 229, 248, 1, 0, 0, 0, 230, 231, 5, 69,
    0, 0, 231, 232, 5, 5, 0, 0, 232, 233, 3, 86, 43, 0, 233, 234, 5, 80, 0, 0, 234, 235, 3, 84, 42,
    0, 235, 236, 5, 6, 0, 0, 236, 237, 3, 6, 3, 0, 237, 248, 1, 0, 0, 0, 238, 239, 5, 69, 0, 0, 239,
    240, 5, 5, 0, 0, 240, 241, 5, 63, 0, 0, 241, 242, 3, 16, 8, 0, 242, 243, 5, 80, 0, 0, 243, 244,
    3, 84, 42, 0, 244, 245, 5, 6, 0, 0, 245, 246, 3, 6, 3, 0, 246, 248, 1, 0, 0, 0, 247, 186, 1, 0, 0,
    0, 247, 194, 1, 0, 0, 0, 247, 200, 1, 0, 0, 0, 247, 215, 1, 0, 0, 0, 247, 230, 1, 0, 0, 0, 247, 238,
    1, 0, 0, 0, 248, 27, 1, 0, 0, 0, 249, 252, 5, 68, 0, 0, 250, 251, 4, 14, 2, 0, 251, 253, 5, 98, 0,
    0, 252, 250, 1, 0, 0, 0, 252, 253, 1, 0, 0, 0, 253, 254, 1, 0, 0, 0, 254, 255, 3, 106, 53, 0, 255,
    29, 1, 0, 0, 0, 256, 259, 5, 56, 0, 0, 257, 258, 4, 15, 3, 0, 258, 260, 5, 98, 0, 0, 259, 257, 1,
    0, 0, 0, 259, 260, 1, 0, 0, 0, 260, 261, 1, 0, 0, 0, 261, 262, 3, 106, 53, 0, 262, 31, 1, 0, 0, 0,
    263, 266, 5, 66, 0, 0, 264, 265, 4, 16, 4, 0, 265, 267, 3, 84, 42, 0, 266, 264, 1, 0, 0, 0, 266,
    267, 1, 0, 0, 0, 267, 268, 1, 0, 0, 0, 268, 269, 3, 106, 53, 0, 269, 33, 1, 0, 0, 0, 270, 271, 5,
    75, 0, 0, 271, 272, 5, 5, 0, 0, 272, 273, 3, 84, 42, 0, 273, 274, 5, 6, 0, 0, 274, 275, 3, 6, 3,
    0, 275, 35, 1, 0, 0, 0, 276, 277, 5, 70, 0, 0, 277, 278, 5, 5, 0, 0, 278, 279, 3, 84, 42, 0, 279,
    280, 5, 6, 0, 0, 280, 281, 3, 38, 19, 0, 281, 37, 1, 0, 0, 0, 282, 284, 5, 7, 0, 0, 283, 285, 3,
    40, 20, 0, 284, 283, 1, 0, 0, 0, 284, 285, 1, 0, 0, 0, 285, 290, 1, 0, 0, 0, 286, 288, 3, 44, 22,
    0, 287, 289, 3, 40, 20, 0, 288, 287, 1, 0, 0, 0, 288, 289, 1, 0, 0, 0, 289, 291, 1, 0, 0, 0, 290,
    286, 1, 0, 0, 0, 290, 291, 1, 0, 0, 0, 291, 292, 1, 0, 0, 0, 292, 293, 5, 8, 0, 0, 293, 39, 1, 0,
    0, 0, 294, 296, 3, 42, 21, 0, 295, 294, 1, 0, 0, 0, 296, 297, 1, 0, 0, 0, 297, 295, 1, 0, 0, 0, 297,
    298, 1, 0, 0, 0, 298, 41, 1, 0, 0, 0, 299, 300, 5, 60, 0, 0, 300, 301, 3, 84, 42, 0, 301, 303, 5,
    13, 0, 0, 302, 304, 3, 10, 5, 0, 303, 302, 1, 0, 0, 0, 303, 304, 1, 0, 0, 0, 304, 43, 1, 0, 0, 0,
    305, 306, 5, 76, 0, 0, 306, 308, 5, 13, 0, 0, 307, 309, 3, 10, 5, 0, 308, 307, 1, 0, 0, 0, 308,
    309, 1, 0, 0, 0, 309, 45, 1, 0, 0, 0, 310, 311, 5, 98, 0, 0, 311, 312, 5, 13, 0, 0, 312, 313, 3,
    6, 3, 0, 313, 47, 1, 0, 0, 0, 314, 315, 5, 78, 0, 0, 315, 316, 4, 24, 5, 0, 316, 317, 3, 84, 42,
    0, 317, 318, 3, 106, 53, 0, 318, 49, 1, 0, 0, 0, 319, 320, 5, 81, 0, 0, 320, 321, 3, 8, 4, 0, 321,
    322, 3, 52, 26, 0, 322, 333, 1, 0, 0, 0, 323, 324, 5, 81, 0, 0, 324, 325, 3, 8, 4, 0, 325, 326,
    3, 54, 27, 0, 326, 333, 1, 0, 0, 0, 327, 328, 5, 81, 0, 0, 328, 329, 3, 8, 4, 0, 329, 330, 3, 52,
    26, 0, 330, 331, 3, 54, 27, 0, 331, 333, 1, 0, 0, 0, 332, 319, 1, 0, 0, 0, 332, 323, 1, 0, 0, 0,
    332, 327, 1, 0, 0, 0, 333, 51, 1, 0, 0, 0, 334, 335, 5, 64, 0, 0, 335, 336, 5, 5, 0, 0, 336, 337,
    5, 98, 0, 0, 337, 338, 5, 6, 0, 0, 338, 339, 3, 8, 4, 0, 339, 53, 1, 0, 0, 0, 340, 341, 5, 65, 0,
    0, 341, 342, 3, 8, 4, 0, 342, 55, 1, 0, 0, 0, 343, 344, 5, 72, 0, 0, 344, 345, 3, 106, 53, 0, 345,
    57, 1, 0, 0, 0, 346, 347, 5, 73, 0, 0, 347, 348, 5, 98, 0, 0, 348, 350, 5, 5, 0, 0, 349, 351, 3,
    60, 30, 0, 350, 349, 1, 0, 0, 0, 350, 351, 1, 0, 0, 0, 351, 352, 1, 0, 0, 0, 352, 353, 5, 6, 0, 0,
    353, 354, 5, 7, 0, 0, 354, 355, 3, 62, 31, 0, 355, 356, 5, 8, 0, 0, 356, 59, 1, 0, 0, 0, 357, 362,
    5, 98, 0, 0, 358, 359, 5, 10, 0, 0, 359, 361, 5, 98, 0, 0, 360, 358, 1, 0, 0, 0, 361, 364, 1, 0,
    0, 0, 362, 360, 1, 0, 0, 0, 362, 363, 1, 0, 0, 0, 363, 61, 1, 0, 0, 0, 364, 362, 1, 0, 0, 0, 365,
    367, 3, 2, 1, 0, 366, 365, 1, 0, 0, 0, 366, 367, 1, 0, 0, 0, 367, 63, 1, 0, 0, 0, 368, 370, 5, 3,
    0, 0, 369, 371, 3, 66, 33, 0, 370, 369, 1, 0, 0, 0, 370, 371, 1, 0, 0, 0, 371, 373, 1, 0, 0, 0, 372,
    374, 5, 10, 0, 0, 373, 372, 1, 0, 0, 0, 373, 374, 1, 0, 0, 0, 374, 376, 1, 0, 0, 0, 375, 377, 3,
    68, 34, 0, 376, 375, 1, 0, 0, 0, 376, 377, 1, 0, 0, 0, 377, 378, 1, 0, 0, 0, 378, 379, 5, 4, 0, 0,
    379, 65, 1, 0, 0, 0, 380, 382, 3, 68, 34, 0, 381, 380, 1, 0, 0, 0, 381, 382, 1, 0, 0, 0, 382, 383,
    1, 0, 0, 0, 383, 391, 3, 86, 43, 0, 384, 386, 5, 10, 0, 0, 385, 387, 3, 68, 34, 0, 386, 385, 1,
    0, 0, 0, 386, 387, 1, 0, 0, 0, 387, 388, 1, 0, 0, 0, 388, 390, 3, 86, 43, 0, 389, 384, 1, 0, 0, 0,
    390, 393, 1, 0, 0, 0, 391, 389, 1, 0, 0, 0, 391, 392, 1, 0, 0, 0, 392, 67, 1, 0, 0, 0, 393, 391,
    1, 0, 0, 0, 394, 396, 5, 10, 0, 0, 395, 394, 1, 0, 0, 0, 396, 397, 1, 0, 0, 0, 397, 395, 1, 0, 0,
    0, 397, 398, 1, 0, 0, 0, 398, 69, 1, 0, 0, 0, 399, 400, 5, 7, 0, 0, 400, 409, 5, 8, 0, 0, 401, 402,
    5, 7, 0, 0, 402, 404, 3, 72, 36, 0, 403, 405, 5, 10, 0, 0, 404, 403, 1, 0, 0, 0, 404, 405, 1, 0,
    0, 0, 405, 406, 1, 0, 0, 0, 406, 407, 5, 8, 0, 0, 407, 409, 1, 0, 0, 0, 408, 399, 1, 0, 0, 0, 408,
    401, 1, 0, 0, 0, 409, 71, 1, 0, 0, 0, 410, 415, 3, 74, 37, 0, 411, 412, 5, 10, 0, 0, 412, 414, 3,
    74, 37, 0, 413, 411, 1, 0, 0, 0, 414, 417, 1, 0, 0, 0, 415, 413, 1, 0, 0, 0, 415, 416, 1, 0, 0, 0,
    416, 73, 1, 0, 0, 0, 417, 415, 1, 0, 0, 0, 418, 419, 3, 76, 38, 0, 419, 420, 5, 13, 0, 0, 420, 421,
    3, 86, 43, 0, 421, 438, 1, 0, 0, 0, 422, 423, 3, 102, 51, 0, 423, 424, 5, 5, 0, 0, 424, 425, 5,
    6, 0, 0, 425, 426, 5, 7, 0, 0, 426, 427, 3, 62, 31, 0, 427, 428, 5, 8, 0, 0, 428, 438, 1, 0, 0, 0,
    429, 430, 3, 104, 52, 0, 430, 431, 5, 5, 0, 0, 431, 432, 3, 78, 39, 0, 432, 433, 5, 6, 0, 0, 433,
    434, 5, 7, 0, 0, 434, 435, 3, 62, 31, 0, 435, 436, 5, 8, 0, 0, 436, 438, 1, 0, 0, 0, 437, 418, 1,
    0, 0, 0, 437, 422, 1, 0, 0, 0, 437, 429, 1, 0, 0, 0, 438, 75, 1, 0, 0, 0, 439, 443, 3, 94, 47, 0,
    440, 443, 5, 99, 0, 0, 441, 443, 3, 92, 46, 0, 442, 439, 1, 0, 0, 0, 442, 440, 1, 0, 0, 0, 442,
    441, 1, 0, 0, 0, 443, 77, 1, 0, 0, 0, 444, 445, 5, 98, 0, 0, 445, 79, 1, 0, 0, 0, 446, 448, 5, 5,
    0, 0, 447, 449, 3, 82, 41, 0, 448, 447, 1, 0, 0, 0, 448, 449, 1, 0, 0, 0, 449, 450, 1, 0, 0, 0, 450,
    451, 5, 6, 0, 0, 451, 81, 1, 0, 0, 0, 452, 457, 3, 86, 43, 0, 453, 454, 5, 10, 0, 0, 454, 456, 3,
    86, 43, 0, 455, 453, 1, 0, 0, 0, 456, 459, 1, 0, 0, 0, 457, 455, 1, 0, 0, 0, 457, 458, 1, 0, 0, 0,
    458, 83, 1, 0, 0, 0, 459, 457, 1, 0, 0, 0, 460, 465, 3, 86, 43, 0, 461, 462, 5, 10, 0, 0, 462, 464,
    3, 86, 43, 0, 463, 461, 1, 0, 0, 0, 464, 467, 1, 0, 0, 0, 465, 463, 1, 0, 0, 0, 465, 466, 1, 0, 0,
    0, 466, 85, 1, 0, 0, 0, 467, 465, 1, 0, 0, 0, 468, 469, 6, 43, -1, 0, 469, 471, 5, 73, 0, 0, 470,
    472, 5, 98, 0, 0, 471, 470, 1, 0, 0, 0, 471, 472, 1, 0, 0, 0, 472, 473, 1, 0, 0, 0, 473, 475, 5,
    5, 0, 0, 474, 476, 3, 60, 30, 0, 475, 474, 1, 0, 0, 0, 475, 476, 1, 0, 0, 0, 476, 477, 1, 0, 0, 0,
    477, 478, 5, 6, 0, 0, 478, 479, 5, 7, 0, 0, 479, 480, 3, 62, 31, 0, 480, 481, 5, 8, 0, 0, 481, 515,
    1, 0, 0, 0, 482, 483, 5, 62, 0, 0, 483, 485, 3, 86, 43, 0, 484, 486, 3, 80, 40, 0, 485, 484, 1,
    0, 0, 0, 485, 486, 1, 0, 0, 0, 486, 515, 1, 0, 0, 0, 487, 488, 5, 79, 0, 0, 488, 515, 3, 86, 43,
    30, 489, 490, 5, 67, 0, 0, 490, 515, 3, 86, 43, 29, 491, 492, 5, 59, 0, 0, 492, 515, 3, 86, 43,
    28, 493, 494, 5, 15, 0, 0, 494, 515, 3, 86, 43, 27, 495, 496, 5, 16, 0, 0, 496, 515, 3, 86, 43,
    26, 497, 498, 5, 17, 0, 0, 498, 515, 3, 86, 43, 25, 499, 500, 5, 18, 0, 0, 500, 515, 3, 86, 43,
    24, 501, 502, 5, 19, 0, 0, 502, 515, 3, 86, 43, 23, 503, 504, 5, 20, 0, 0, 504, 515, 3, 86, 43,
    22, 505, 515, 5, 74, 0, 0, 506, 515, 5, 98, 0, 0, 507, 515, 3, 90, 45, 0, 508, 515, 3, 64, 32,
    0, 509, 515, 3, 70, 35, 0, 510, 511, 5, 5, 0, 0, 511, 512, 3, 84, 42, 0, 512, 513, 5, 6, 0, 0, 513,
    515, 1, 0, 0, 0, 514, 468, 1, 0, 0, 0, 514, 482, 1, 0, 0, 0, 514, 487, 1, 0, 0, 0, 514, 489, 1, 0,
    0, 0, 514, 491, 1, 0, 0, 0, 514, 493, 1, 0, 0, 0, 514, 495, 1, 0, 0, 0, 514, 497, 1, 0, 0, 0, 514,
    499, 1, 0, 0, 0, 514, 501, 1, 0, 0, 0, 514, 503, 1, 0, 0, 0, 514, 505, 1, 0, 0, 0, 514, 506, 1, 0,
    0, 0, 514, 507, 1, 0, 0, 0, 514, 508, 1, 0, 0, 0, 514, 509, 1, 0, 0, 0, 514, 510, 1, 0, 0, 0, 515,
    583, 1, 0, 0, 0, 516, 517, 10, 21, 0, 0, 517, 518, 7, 0, 0, 0, 518, 582, 3, 86, 43, 22, 519, 520,
    10, 20, 0, 0, 520, 521, 7, 1, 0, 0, 521, 582, 3, 86, 43, 21, 522, 523, 10, 19, 0, 0, 523, 524,
    7, 2, 0, 0, 524, 582, 3, 86, 43, 20, 525, 526, 10, 18, 0, 0, 526, 527, 7, 3, 0, 0, 527, 582, 3,
    86, 43, 19, 528, 529, 10, 17, 0, 0, 529, 530, 5, 58, 0, 0, 530, 582, 3, 86, 43, 18, 531, 532,
    10, 16, 0, 0, 532, 533, 5, 80, 0, 0, 533, 582, 3, 86, 43, 17, 534, 535, 10, 15, 0, 0, 535, 536,
    7, 4, 0, 0, 536, 582, 3, 86, 43, 16, 537, 538, 10, 14, 0, 0, 538, 539, 5, 35, 0, 0, 539, 582, 3,
    86, 43, 15, 540, 541, 10, 13, 0, 0, 541, 542, 5, 36, 0, 0, 542, 582, 3, 86, 43, 14, 543, 544,
    10, 12, 0, 0, 544, 545, 5, 37, 0, 0, 545, 582, 3, 86, 43, 13, 546, 547, 10, 11, 0, 0, 547, 548,
    5, 38, 0, 0, 548, 582, 3, 86, 43, 12, 549, 550, 10, 10, 0, 0, 550, 551, 5, 39, 0, 0, 551, 582,
    3, 86, 43, 11, 552, 553, 10, 9, 0, 0, 553, 554, 5, 12, 0, 0, 554, 555, 3, 86, 43, 0, 555, 556,
    5, 13, 0, 0, 556, 557, 3, 86, 43, 10, 557, 582, 1, 0, 0, 0, 558, 559, 10, 36, 0, 0, 559, 560, 5,
    3, 0, 0, 560, 561, 3, 84, 42, 0, 561, 562, 5, 4, 0, 0, 562, 582, 1, 0, 0, 0, 563, 564, 10, 35, 0,
    0, 564, 565, 5, 14, 0, 0, 565, 582, 3, 94, 47, 0, 566, 567, 10, 34, 0, 0, 567, 582, 3, 80, 40,
    0, 568, 569, 10, 32, 0, 0, 569, 570, 4, 43, 23, 0, 570, 582, 5, 15, 0, 0, 571, 572, 10, 31, 0,
    0, 572, 573, 4, 43, 25, 0, 573, 582, 5, 16, 0, 0, 574, 575, 10, 8, 0, 0, 575, 576, 5, 11, 0, 0,
    576, 582, 3, 84, 42, 0, 577, 578, 10, 7, 0, 0, 578, 579, 3, 88, 44, 0, 579, 580, 3, 84, 42, 0,
    580, 582, 1, 0, 0, 0, 581, 516, 1, 0, 0, 0, 581, 519, 1, 0, 0, 0, 581, 522, 1, 0, 0, 0, 581, 525,
    1, 0, 0, 0, 581, 528, 1, 0, 0, 0, 581, 531, 1, 0, 0, 0, 581, 534, 1, 0, 0, 0, 581, 537, 1, 0, 0, 0,
    581, 540, 1, 0, 0, 0, 581, 543, 1, 0, 0, 0, 581, 546, 1, 0, 0, 0, 581, 549, 1, 0, 0, 0, 581, 552,
    1, 0, 0, 0, 581, 558, 1, 0, 0, 0, 581, 563, 1, 0, 0, 0, 581, 566, 1, 0, 0, 0, 581, 568, 1, 0, 0, 0,
    581, 571, 1, 0, 0, 0, 581, 574, 1, 0, 0, 0, 581, 577, 1, 0, 0, 0, 582, 585, 1, 0, 0, 0, 583, 581,
    1, 0, 0, 0, 583, 584, 1, 0, 0, 0, 584, 87, 1, 0, 0, 0, 585, 583, 1, 0, 0, 0, 586, 587, 7, 5, 0, 0,
    587, 89, 1, 0, 0, 0, 588, 591, 7, 6, 0, 0, 589, 591, 3, 92, 46, 0, 590, 588, 1, 0, 0, 0, 590, 589,
    1, 0, 0, 0, 591, 91, 1, 0, 0, 0, 592, 593, 7, 7, 0, 0, 593, 93, 1, 0, 0, 0, 594, 597, 5, 98, 0, 0,
    595, 597, 3, 96, 48, 0, 596, 594, 1, 0, 0, 0, 596, 595, 1, 0, 0, 0, 597, 95, 1, 0, 0, 0, 598, 602,
    3, 98, 49, 0, 599, 602, 3, 100, 50, 0, 600, 602, 7, 8, 0, 0, 601, 598, 1, 0, 0, 0, 601, 599, 1,
    0, 0, 0, 601, 600, 1, 0, 0, 0, 602, 97, 1, 0, 0, 0, 603, 604, 7, 9, 0, 0, 604, 99, 1, 0, 0, 0, 605,
    606, 7, 10, 0, 0, 606, 101, 1, 0, 0, 0, 607, 608, 4, 51, 28, 0, 608, 609, 5, 98, 0, 0, 609, 610,
    3, 76, 38, 0, 610, 103, 1, 0, 0, 0, 611, 612, 4, 52, 29, 0, 612, 613, 5, 98, 0, 0, 613, 614, 3,
    76, 38, 0, 614, 105, 1, 0, 0, 0, 615, 620, 5, 9, 0, 0, 616, 620, 5, 0, 0, 1, 617, 620, 4, 53, 30,
    0, 618, 620, 4, 53, 31, 0, 619, 615, 1, 0, 0, 0, 619, 616, 1, 0, 0, 0, 619, 617, 1, 0, 0, 0, 619,
    618, 1, 0, 0, 0, 620, 107, 1, 0, 0, 0, 621, 622, 5, 0, 0, 1, 622, 109, 1, 0, 0, 0, 53, 111, 118,
    123, 141, 145, 152, 163, 168, 184, 203, 207, 211, 221, 225, 247, 252, 259, 266, 284, 288,
    290, 297, 303, 308, 332, 350, 362, 366, 370, 373, 376, 381, 386, 391, 397, 404, 408, 415,
    437, 442, 448, 457, 465, 471, 475, 485, 514, 581, 583, 590, 596, 601, 619];
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
    enterRule(listener) {
        if (listener.enterProgram) {
            listener.enterProgram(this);
        }
    }
    exitRule(listener) {
        if (listener.exitProgram) {
            listener.exitProgram(this);
        }
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
    enterRule(listener) {
        if (listener.enterSourceElements) {
            listener.enterSourceElements(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSourceElements) {
            listener.exitSourceElements(this);
        }
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
    enterRule(listener) {
        if (listener.enterSourceElement) {
            listener.enterSourceElement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSourceElement) {
            listener.exitSourceElement(this);
        }
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
    enterRule(listener) {
        if (listener.enterStatement) {
            listener.enterStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitStatement) {
            listener.exitStatement(this);
        }
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
    enterRule(listener) {
        if (listener.enterBlock) {
            listener.enterBlock(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBlock) {
            listener.exitBlock(this);
        }
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
    enterRule(listener) {
        if (listener.enterStatementList) {
            listener.enterStatementList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitStatementList) {
            listener.exitStatementList(this);
        }
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
    enterRule(listener) {
        if (listener.enterVariableStatement) {
            listener.enterVariableStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitVariableStatement) {
            listener.exitVariableStatement(this);
        }
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
    enterRule(listener) {
        if (listener.enterVariableDeclarationList) {
            listener.enterVariableDeclarationList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitVariableDeclarationList) {
            listener.exitVariableDeclarationList(this);
        }
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
    enterRule(listener) {
        if (listener.enterVariableDeclaration) {
            listener.enterVariableDeclaration(this);
        }
    }
    exitRule(listener) {
        if (listener.exitVariableDeclaration) {
            listener.exitVariableDeclaration(this);
        }
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
    enterRule(listener) {
        if (listener.enterInitialiser) {
            listener.enterInitialiser(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInitialiser) {
            listener.exitInitialiser(this);
        }
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
    enterRule(listener) {
        if (listener.enterEmptyStatement_) {
            listener.enterEmptyStatement_(this);
        }
    }
    exitRule(listener) {
        if (listener.exitEmptyStatement_) {
            listener.exitEmptyStatement_(this);
        }
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
    get ruleIndex() {
        return ECMAScriptParser.RULE_expressionStatement;
    }
    enterRule(listener) {
        if (listener.enterExpressionStatement) {
            listener.enterExpressionStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitExpressionStatement) {
            listener.exitExpressionStatement(this);
        }
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
    enterRule(listener) {
        if (listener.enterIfStatement) {
            listener.enterIfStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitIfStatement) {
            listener.exitIfStatement(this);
        }
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
    enterRule(listener) {
        if (listener.enterDoStatement) {
            listener.enterDoStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDoStatement) {
            listener.exitDoStatement(this);
        }
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
    enterRule(listener) {
        if (listener.enterForVarStatement) {
            listener.enterForVarStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitForVarStatement) {
            listener.exitForVarStatement(this);
        }
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
    enterRule(listener) {
        if (listener.enterForVarInStatement) {
            listener.enterForVarInStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitForVarInStatement) {
            listener.exitForVarInStatement(this);
        }
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
    enterRule(listener) {
        if (listener.enterWhileStatement) {
            listener.enterWhileStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitWhileStatement) {
            listener.exitWhileStatement(this);
        }
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
    enterRule(listener) {
        if (listener.enterForStatement) {
            listener.enterForStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitForStatement) {
            listener.exitForStatement(this);
        }
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
    enterRule(listener) {
        if (listener.enterForInStatement) {
            listener.enterForInStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitForInStatement) {
            listener.exitForInStatement(this);
        }
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
    enterRule(listener) {
        if (listener.enterContinueStatement) {
            listener.enterContinueStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitContinueStatement) {
            listener.exitContinueStatement(this);
        }
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
    enterRule(listener) {
        if (listener.enterBreakStatement) {
            listener.enterBreakStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBreakStatement) {
            listener.exitBreakStatement(this);
        }
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
    enterRule(listener) {
        if (listener.enterReturnStatement) {
            listener.enterReturnStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitReturnStatement) {
            listener.exitReturnStatement(this);
        }
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
    enterRule(listener) {
        if (listener.enterWithStatement) {
            listener.enterWithStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitWithStatement) {
            listener.exitWithStatement(this);
        }
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
    enterRule(listener) {
        if (listener.enterSwitchStatement) {
            listener.enterSwitchStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSwitchStatement) {
            listener.exitSwitchStatement(this);
        }
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
    enterRule(listener) {
        if (listener.enterCaseBlock) {
            listener.enterCaseBlock(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCaseBlock) {
            listener.exitCaseBlock(this);
        }
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
    enterRule(listener) {
        if (listener.enterCaseClauses) {
            listener.enterCaseClauses(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCaseClauses) {
            listener.exitCaseClauses(this);
        }
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
    enterRule(listener) {
        if (listener.enterCaseClause) {
            listener.enterCaseClause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCaseClause) {
            listener.exitCaseClause(this);
        }
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
    enterRule(listener) {
        if (listener.enterDefaultClause) {
            listener.enterDefaultClause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDefaultClause) {
            listener.exitDefaultClause(this);
        }
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
    enterRule(listener) {
        if (listener.enterLabelledStatement) {
            listener.enterLabelledStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLabelledStatement) {
            listener.exitLabelledStatement(this);
        }
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
    enterRule(listener) {
        if (listener.enterThrowStatement) {
            listener.enterThrowStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitThrowStatement) {
            listener.exitThrowStatement(this);
        }
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
    enterRule(listener) {
        if (listener.enterTryStatement) {
            listener.enterTryStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTryStatement) {
            listener.exitTryStatement(this);
        }
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
    enterRule(listener) {
        if (listener.enterCatchProduction) {
            listener.enterCatchProduction(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCatchProduction) {
            listener.exitCatchProduction(this);
        }
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
    enterRule(listener) {
        if (listener.enterFinallyProduction) {
            listener.enterFinallyProduction(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFinallyProduction) {
            listener.exitFinallyProduction(this);
        }
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
    enterRule(listener) {
        if (listener.enterDebuggerStatement) {
            listener.enterDebuggerStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDebuggerStatement) {
            listener.exitDebuggerStatement(this);
        }
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
    enterRule(listener) {
        if (listener.enterFunctionDeclaration) {
            listener.enterFunctionDeclaration(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFunctionDeclaration) {
            listener.exitFunctionDeclaration(this);
        }
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
    enterRule(listener) {
        if (listener.enterFormalParameterList) {
            listener.enterFormalParameterList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFormalParameterList) {
            listener.exitFormalParameterList(this);
        }
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
    enterRule(listener) {
        if (listener.enterFunctionBody) {
            listener.enterFunctionBody(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFunctionBody) {
            listener.exitFunctionBody(this);
        }
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
    enterRule(listener) {
        if (listener.enterArrayLiteral) {
            listener.enterArrayLiteral(this);
        }
    }
    exitRule(listener) {
        if (listener.exitArrayLiteral) {
            listener.exitArrayLiteral(this);
        }
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
    enterRule(listener) {
        if (listener.enterElementList) {
            listener.enterElementList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitElementList) {
            listener.exitElementList(this);
        }
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
    enterRule(listener) {
        if (listener.enterElision) {
            listener.enterElision(this);
        }
    }
    exitRule(listener) {
        if (listener.exitElision) {
            listener.exitElision(this);
        }
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
    enterRule(listener) {
        if (listener.enterObjectLiteral) {
            listener.enterObjectLiteral(this);
        }
    }
    exitRule(listener) {
        if (listener.exitObjectLiteral) {
            listener.exitObjectLiteral(this);
        }
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
    enterRule(listener) {
        if (listener.enterPropertyNameAndValueList) {
            listener.enterPropertyNameAndValueList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPropertyNameAndValueList) {
            listener.exitPropertyNameAndValueList(this);
        }
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
    enterRule(listener) {
        if (listener.enterPropertyExpressionAssignment) {
            listener.enterPropertyExpressionAssignment(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPropertyExpressionAssignment) {
            listener.exitPropertyExpressionAssignment(this);
        }
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
    enterRule(listener) {
        if (listener.enterPropertySetter) {
            listener.enterPropertySetter(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPropertySetter) {
            listener.exitPropertySetter(this);
        }
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
    enterRule(listener) {
        if (listener.enterPropertyGetter) {
            listener.enterPropertyGetter(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPropertyGetter) {
            listener.exitPropertyGetter(this);
        }
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
    enterRule(listener) {
        if (listener.enterPropertyName) {
            listener.enterPropertyName(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPropertyName) {
            listener.exitPropertyName(this);
        }
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
    enterRule(listener) {
        if (listener.enterPropertySetParameterList) {
            listener.enterPropertySetParameterList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPropertySetParameterList) {
            listener.exitPropertySetParameterList(this);
        }
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
    enterRule(listener) {
        if (listener.enterArguments) {
            listener.enterArguments(this);
        }
    }
    exitRule(listener) {
        if (listener.exitArguments) {
            listener.exitArguments(this);
        }
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
    enterRule(listener) {
        if (listener.enterArgumentList) {
            listener.enterArgumentList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitArgumentList) {
            listener.exitArgumentList(this);
        }
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
    enterRule(listener) {
        if (listener.enterExpressionSequence) {
            listener.enterExpressionSequence(this);
        }
    }
    exitRule(listener) {
        if (listener.exitExpressionSequence) {
            listener.exitExpressionSequence(this);
        }
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
    enterRule(listener) {
        if (listener.enterTernaryExpression) {
            listener.enterTernaryExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTernaryExpression) {
            listener.exitTernaryExpression(this);
        }
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
    enterRule(listener) {
        if (listener.enterLogicalAndExpression) {
            listener.enterLogicalAndExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLogicalAndExpression) {
            listener.exitLogicalAndExpression(this);
        }
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
    enterRule(listener) {
        if (listener.enterPreIncrementExpression) {
            listener.enterPreIncrementExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPreIncrementExpression) {
            listener.exitPreIncrementExpression(this);
        }
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
    enterRule(listener) {
        if (listener.enterObjectLiteralExpression) {
            listener.enterObjectLiteralExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitObjectLiteralExpression) {
            listener.exitObjectLiteralExpression(this);
        }
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
    enterRule(listener) {
        if (listener.enterInExpression) {
            listener.enterInExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInExpression) {
            listener.exitInExpression(this);
        }
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
    enterRule(listener) {
        if (listener.enterLogicalOrExpression) {
            listener.enterLogicalOrExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLogicalOrExpression) {
            listener.exitLogicalOrExpression(this);
        }
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
    enterRule(listener) {
        if (listener.enterNotExpression) {
            listener.enterNotExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitNotExpression) {
            listener.exitNotExpression(this);
        }
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
    enterRule(listener) {
        if (listener.enterPreDecreaseExpression) {
            listener.enterPreDecreaseExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPreDecreaseExpression) {
            listener.exitPreDecreaseExpression(this);
        }
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
    enterRule(listener) {
        if (listener.enterArgumentsExpression) {
            listener.enterArgumentsExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitArgumentsExpression) {
            listener.exitArgumentsExpression(this);
        }
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
    enterRule(listener) {
        if (listener.enterThisExpression) {
            listener.enterThisExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitThisExpression) {
            listener.exitThisExpression(this);
        }
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
    enterRule(listener) {
        if (listener.enterFunctionExpression) {
            listener.enterFunctionExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFunctionExpression) {
            listener.exitFunctionExpression(this);
        }
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
    enterRule(listener) {
        if (listener.enterUnaryMinusExpression) {
            listener.enterUnaryMinusExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUnaryMinusExpression) {
            listener.exitUnaryMinusExpression(this);
        }
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
    enterRule(listener) {
        if (listener.enterPostDecreaseExpression) {
            listener.enterPostDecreaseExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPostDecreaseExpression) {
            listener.exitPostDecreaseExpression(this);
        }
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
export class AssignmentExpressionContext extends SingleExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    singleExpression() {
        return this.getTypedRuleContext(SingleExpressionContext, 0);
    }
    Assign() {
        return this.getToken(ECMAScriptParser.Assign, 0);
    }
    expressionSequence() {
        return this.getTypedRuleContext(ExpressionSequenceContext, 0);
    }
    enterRule(listener) {
        if (listener.enterAssignmentExpression) {
            listener.enterAssignmentExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAssignmentExpression) {
            listener.exitAssignmentExpression(this);
        }
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
    enterRule(listener) {
        if (listener.enterTypeofExpression) {
            listener.enterTypeofExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTypeofExpression) {
            listener.exitTypeofExpression(this);
        }
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
    enterRule(listener) {
        if (listener.enterInstanceofExpression) {
            listener.enterInstanceofExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInstanceofExpression) {
            listener.exitInstanceofExpression(this);
        }
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
    enterRule(listener) {
        if (listener.enterUnaryPlusExpression) {
            listener.enterUnaryPlusExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUnaryPlusExpression) {
            listener.exitUnaryPlusExpression(this);
        }
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
    enterRule(listener) {
        if (listener.enterDeleteExpression) {
            listener.enterDeleteExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDeleteExpression) {
            listener.exitDeleteExpression(this);
        }
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
    enterRule(listener) {
        if (listener.enterEqualityExpression) {
            listener.enterEqualityExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitEqualityExpression) {
            listener.exitEqualityExpression(this);
        }
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
    enterRule(listener) {
        if (listener.enterBitXOrExpression) {
            listener.enterBitXOrExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBitXOrExpression) {
            listener.exitBitXOrExpression(this);
        }
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
    enterRule(listener) {
        if (listener.enterMultiplicativeExpression) {
            listener.enterMultiplicativeExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitMultiplicativeExpression) {
            listener.exitMultiplicativeExpression(this);
        }
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
    enterRule(listener) {
        if (listener.enterBitShiftExpression) {
            listener.enterBitShiftExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBitShiftExpression) {
            listener.exitBitShiftExpression(this);
        }
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
    enterRule(listener) {
        if (listener.enterParenthesizedExpression) {
            listener.enterParenthesizedExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitParenthesizedExpression) {
            listener.exitParenthesizedExpression(this);
        }
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
    enterRule(listener) {
        if (listener.enterAdditiveExpression) {
            listener.enterAdditiveExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAdditiveExpression) {
            listener.exitAdditiveExpression(this);
        }
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
    enterRule(listener) {
        if (listener.enterRelationalExpression) {
            listener.enterRelationalExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRelationalExpression) {
            listener.exitRelationalExpression(this);
        }
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
    enterRule(listener) {
        if (listener.enterPostIncrementExpression) {
            listener.enterPostIncrementExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPostIncrementExpression) {
            listener.exitPostIncrementExpression(this);
        }
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
    enterRule(listener) {
        if (listener.enterBitNotExpression) {
            listener.enterBitNotExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBitNotExpression) {
            listener.exitBitNotExpression(this);
        }
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
    enterRule(listener) {
        if (listener.enterNewExpression) {
            listener.enterNewExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitNewExpression) {
            listener.exitNewExpression(this);
        }
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
    enterRule(listener) {
        if (listener.enterLiteralExpression) {
            listener.enterLiteralExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLiteralExpression) {
            listener.exitLiteralExpression(this);
        }
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
    enterRule(listener) {
        if (listener.enterArrayLiteralExpression) {
            listener.enterArrayLiteralExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitArrayLiteralExpression) {
            listener.exitArrayLiteralExpression(this);
        }
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
    enterRule(listener) {
        if (listener.enterMemberDotExpression) {
            listener.enterMemberDotExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitMemberDotExpression) {
            listener.exitMemberDotExpression(this);
        }
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
    enterRule(listener) {
        if (listener.enterMemberIndexExpression) {
            listener.enterMemberIndexExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitMemberIndexExpression) {
            listener.exitMemberIndexExpression(this);
        }
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
    enterRule(listener) {
        if (listener.enterIdentifierExpression) {
            listener.enterIdentifierExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitIdentifierExpression) {
            listener.exitIdentifierExpression(this);
        }
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
    enterRule(listener) {
        if (listener.enterBitAndExpression) {
            listener.enterBitAndExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBitAndExpression) {
            listener.exitBitAndExpression(this);
        }
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
    enterRule(listener) {
        if (listener.enterBitOrExpression) {
            listener.enterBitOrExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBitOrExpression) {
            listener.exitBitOrExpression(this);
        }
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
    singleExpression() {
        return this.getTypedRuleContext(SingleExpressionContext, 0);
    }
    assignmentOperator() {
        return this.getTypedRuleContext(AssignmentOperatorContext, 0);
    }
    expressionSequence() {
        return this.getTypedRuleContext(ExpressionSequenceContext, 0);
    }
    enterRule(listener) {
        if (listener.enterAssignmentOperatorExpression) {
            listener.enterAssignmentOperatorExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAssignmentOperatorExpression) {
            listener.exitAssignmentOperatorExpression(this);
        }
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
    enterRule(listener) {
        if (listener.enterVoidExpression) {
            listener.enterVoidExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitVoidExpression) {
            listener.exitVoidExpression(this);
        }
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
    enterRule(listener) {
        if (listener.enterAssignmentOperator) {
            listener.enterAssignmentOperator(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAssignmentOperator) {
            listener.exitAssignmentOperator(this);
        }
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
    enterRule(listener) {
        if (listener.enterLiteral) {
            listener.enterLiteral(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLiteral) {
            listener.exitLiteral(this);
        }
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
    enterRule(listener) {
        if (listener.enterNumericLiteral) {
            listener.enterNumericLiteral(this);
        }
    }
    exitRule(listener) {
        if (listener.exitNumericLiteral) {
            listener.exitNumericLiteral(this);
        }
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
    enterRule(listener) {
        if (listener.enterIdentifierName) {
            listener.enterIdentifierName(this);
        }
    }
    exitRule(listener) {
        if (listener.exitIdentifierName) {
            listener.exitIdentifierName(this);
        }
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
    enterRule(listener) {
        if (listener.enterReservedWord) {
            listener.enterReservedWord(this);
        }
    }
    exitRule(listener) {
        if (listener.exitReservedWord) {
            listener.exitReservedWord(this);
        }
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
    enterRule(listener) {
        if (listener.enterKeyword) {
            listener.enterKeyword(this);
        }
    }
    exitRule(listener) {
        if (listener.exitKeyword) {
            listener.exitKeyword(this);
        }
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
    enterRule(listener) {
        if (listener.enterFutureReservedWord) {
            listener.enterFutureReservedWord(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFutureReservedWord) {
            listener.exitFutureReservedWord(this);
        }
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
    enterRule(listener) {
        if (listener.enterGetter) {
            listener.enterGetter(this);
        }
    }
    exitRule(listener) {
        if (listener.exitGetter) {
            listener.exitGetter(this);
        }
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
    enterRule(listener) {
        if (listener.enterSetter) {
            listener.enterSetter(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSetter) {
            listener.exitSetter(this);
        }
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
    enterRule(listener) {
        if (listener.enterEos) {
            listener.enterEos(this);
        }
    }
    exitRule(listener) {
        if (listener.exitEos) {
            listener.exitEos(this);
        }
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
    enterRule(listener) {
        if (listener.enterEof) {
            listener.enterEof(this);
        }
    }
    exitRule(listener) {
        if (listener.exitEof) {
            listener.exitEof(this);
        }
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