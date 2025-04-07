// Generated from miniSLGrammar.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import { ATN, ATNDeserializer, DFA, FailedPredicateException, RecognitionException, NoViableAltException, Parser, ParserATNSimulator, ParserRuleContext, PredictionContextCache, Token } from 'antlr4';
class miniSLGrammarParser extends Parser {
    get grammarFileName() { return "miniSLGrammar.g4"; }
    get literalNames() { return miniSLGrammarParser.literalNames; }
    get symbolicNames() { return miniSLGrammarParser.symbolicNames; }
    get ruleNames() { return miniSLGrammarParser.ruleNames; }
    get serializedATN() { return miniSLGrammarParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator(this, miniSLGrammarParser._ATN, miniSLGrammarParser.DecisionsToDFA, new PredictionContextCache());
    }
    // @RuleVersion(0)
    prg() {
        let localctx = new PrgContext(this, this._ctx, this.state);
        this.enterRule(localctx, 0, miniSLGrammarParser.RULE_prg);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 19;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 6) {
                    {
                        {
                            this.state = 16;
                            this.serviceDecl();
                        }
                    }
                    this.state = 21;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 22;
                this.init();
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
    init() {
        let localctx = new InitContext(this, this._ctx, this.state);
        this.enterRule(localctx, 2, miniSLGrammarParser.RULE_init);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 24;
                this.match(miniSLGrammarParser.T__0);
                this.state = 26;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 31) {
                    {
                        this.state = 25;
                        this.formalParams();
                    }
                }
                this.state = 28;
                this.match(miniSLGrammarParser.T__1);
                this.state = 29;
                this.match(miniSLGrammarParser.T__2);
                this.state = 30;
                this.match(miniSLGrammarParser.T__3);
                this.state = 31;
                this.stm();
                this.state = 32;
                this.match(miniSLGrammarParser.T__4);
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
    serviceDecl() {
        let localctx = new ServiceDeclContext(this, this._ctx, this.state);
        this.enterRule(localctx, 4, miniSLGrammarParser.RULE_serviceDecl);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 34;
                this.match(miniSLGrammarParser.T__5);
                this.state = 35;
                this.match(miniSLGrammarParser.ID);
                this.state = 36;
                this.match(miniSLGrammarParser.T__6);
                this.state = 37;
                this.match(miniSLGrammarParser.T__0);
                this.state = 38;
                this.match(miniSLGrammarParser.T__7);
                this.state = 39;
                this.match(miniSLGrammarParser.T__1);
                this.state = 40;
                this.match(miniSLGrammarParser.T__8);
                this.state = 41;
                this.match(miniSLGrammarParser.T__7);
                this.state = 42;
                this.match(miniSLGrammarParser.T__9);
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
    stm() {
        let localctx = new StmContext(this, this._ctx, this.state);
        this.enterRule(localctx, 6, miniSLGrammarParser.RULE_stm);
        let _la;
        try {
            this.state = 76;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 17:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 44;
                        this.serviceCall();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 45;
                        this.match(miniSLGrammarParser.T__10);
                        this.state = 46;
                        this.match(miniSLGrammarParser.T__0);
                        this.state = 47;
                        this.expOrCall();
                        this.state = 48;
                        this.match(miniSLGrammarParser.T__1);
                        this.state = 49;
                        this.match(miniSLGrammarParser.T__3);
                        this.state = 50;
                        this.stm();
                        this.state = 51;
                        this.match(miniSLGrammarParser.T__4);
                        this.state = 52;
                        this.match(miniSLGrammarParser.T__11);
                        this.state = 53;
                        this.match(miniSLGrammarParser.T__3);
                        this.state = 54;
                        this.stm();
                        this.state = 55;
                        this.match(miniSLGrammarParser.T__4);
                        this.state = 57;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 141312) !== 0)) {
                            {
                                this.state = 56;
                                this.stm();
                            }
                        }
                    }
                    break;
                case 13:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 59;
                        this.match(miniSLGrammarParser.T__12);
                        this.state = 60;
                        this.match(miniSLGrammarParser.T__0);
                        this.state = 61;
                        this.match(miniSLGrammarParser.ID);
                        this.state = 62;
                        this.match(miniSLGrammarParser.T__13);
                        this.state = 63;
                        this.match(miniSLGrammarParser.T__14);
                        this.state = 64;
                        this.match(miniSLGrammarParser.T__0);
                        this.state = 65;
                        this.match(miniSLGrammarParser.NUMBER);
                        this.state = 66;
                        this.match(miniSLGrammarParser.T__15);
                        this.state = 67;
                        this.exp(0);
                        this.state = 68;
                        this.match(miniSLGrammarParser.T__1);
                        this.state = 69;
                        this.match(miniSLGrammarParser.T__1);
                        this.state = 70;
                        this.match(miniSLGrammarParser.T__3);
                        this.state = 71;
                        this.stm();
                        this.state = 72;
                        this.match(miniSLGrammarParser.T__4);
                        this.state = 74;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 141312) !== 0)) {
                            {
                                this.state = 73;
                                this.stm();
                            }
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
    serviceCall() {
        let localctx = new ServiceCallContext(this, this._ctx, this.state);
        this.enterRule(localctx, 8, miniSLGrammarParser.RULE_serviceCall);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 78;
                this.match(miniSLGrammarParser.T__16);
                this.state = 79;
                this.match(miniSLGrammarParser.ID);
                this.state = 80;
                this.match(miniSLGrammarParser.T__0);
                this.state = 89;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 1 || _la === 31 || _la === 32 || _la === 33) {
                    {
                        this.state = 81;
                        this.exp(0);
                        this.state = 86;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === 16) {
                            {
                                {
                                    this.state = 82;
                                    this.match(miniSLGrammarParser.T__15);
                                    this.state = 83;
                                    this.exp(0);
                                }
                            }
                            this.state = 88;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 91;
                this.match(miniSLGrammarParser.T__1);
                this.state = 93;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 141312) !== 0)) {
                    {
                        this.state = 92;
                        this.stm();
                    }
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
    expOrCall() {
        let localctx = new ExpOrCallContext(this, this._ctx, this.state);
        this.enterRule(localctx, 10, miniSLGrammarParser.RULE_expOrCall);
        try {
            this.state = 97;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 1:
                case 31:
                case 32:
                case 33:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 95;
                        this.exp(0);
                    }
                    break;
                case 17:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 96;
                        this.serviceCall();
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
    exp(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let localctx = new ExpContext(this, this._ctx, _parentState);
        let _prevctx = localctx;
        let _startState = 12;
        this.enterRecursionRule(localctx, 12, miniSLGrammarParser.RULE_exp, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 110;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 9, this._ctx)) {
                    case 1:
                        {
                            localctx = new ParenExpContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 100;
                            this.match(miniSLGrammarParser.T__0);
                            this.state = 101;
                            this.exp(0);
                            this.state = 102;
                            this.match(miniSLGrammarParser.T__1);
                        }
                        break;
                    case 2:
                        {
                            localctx = new CallFunContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 104;
                            this.match(miniSLGrammarParser.ID);
                            this.state = 105;
                            this.match(miniSLGrammarParser.T__29);
                            this.state = 106;
                            this.match(miniSLGrammarParser.ID);
                        }
                        break;
                    case 3:
                        {
                            localctx = new StringExpContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 107;
                            this.match(miniSLGrammarParser.STRING);
                        }
                        break;
                    case 4:
                        {
                            localctx = new ValExpContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 108;
                            this.match(miniSLGrammarParser.NUMBER);
                        }
                        break;
                    case 5:
                        {
                            localctx = new DerExpContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 109;
                            this.match(miniSLGrammarParser.ID);
                        }
                        break;
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 117;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            {
                                localctx = new BinExpContext(this, new ExpContext(this, _parentctx, _parentState));
                                this.pushNewRecursionContext(localctx, _startState, miniSLGrammarParser.RULE_exp);
                                this.state = 112;
                                if (!(this.precpred(this._ctx, 6))) {
                                    throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
                                }
                                this.state = 113;
                                _la = this._input.LA(1);
                                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1073479680) !== 0))) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 114;
                                this.exp(7);
                            }
                        }
                    }
                    this.state = 119;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
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
    formalParams() {
        let localctx = new FormalParamsContext(this, this._ctx, this.state);
        this.enterRule(localctx, 14, miniSLGrammarParser.RULE_formalParams);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 120;
                this.match(miniSLGrammarParser.ID);
                this.state = 125;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 16) {
                    {
                        {
                            this.state = 121;
                            this.match(miniSLGrammarParser.T__15);
                            this.state = 122;
                            this.match(miniSLGrammarParser.ID);
                        }
                    }
                    this.state = 127;
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
    sempred(localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 6:
                return this.exp_sempred(localctx, predIndex);
        }
        return true;
    }
    exp_sempred(localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 6);
        }
        return true;
    }
    static get _ATN() {
        if (!miniSLGrammarParser.__ATN) {
            miniSLGrammarParser.__ATN = new ATNDeserializer().deserialize(miniSLGrammarParser._serializedATN);
        }
        return miniSLGrammarParser.__ATN;
    }
}
miniSLGrammarParser.T__0 = 1;
miniSLGrammarParser.T__1 = 2;
miniSLGrammarParser.T__2 = 3;
miniSLGrammarParser.T__3 = 4;
miniSLGrammarParser.T__4 = 5;
miniSLGrammarParser.T__5 = 6;
miniSLGrammarParser.T__6 = 7;
miniSLGrammarParser.T__7 = 8;
miniSLGrammarParser.T__8 = 9;
miniSLGrammarParser.T__9 = 10;
miniSLGrammarParser.T__10 = 11;
miniSLGrammarParser.T__11 = 12;
miniSLGrammarParser.T__12 = 13;
miniSLGrammarParser.T__13 = 14;
miniSLGrammarParser.T__14 = 15;
miniSLGrammarParser.T__15 = 16;
miniSLGrammarParser.T__16 = 17;
miniSLGrammarParser.T__17 = 18;
miniSLGrammarParser.T__18 = 19;
miniSLGrammarParser.T__19 = 20;
miniSLGrammarParser.T__20 = 21;
miniSLGrammarParser.T__21 = 22;
miniSLGrammarParser.T__22 = 23;
miniSLGrammarParser.T__23 = 24;
miniSLGrammarParser.T__24 = 25;
miniSLGrammarParser.T__25 = 26;
miniSLGrammarParser.T__26 = 27;
miniSLGrammarParser.T__27 = 28;
miniSLGrammarParser.T__28 = 29;
miniSLGrammarParser.T__29 = 30;
miniSLGrammarParser.ID = 31;
miniSLGrammarParser.NUMBER = 32;
miniSLGrammarParser.STRING = 33;
miniSLGrammarParser.NEWLINE = 34;
miniSLGrammarParser.LINECOMMENTS = 35;
miniSLGrammarParser.WS = 36;
miniSLGrammarParser.BLOCKCOMMENTS = 37;
miniSLGrammarParser.EOF = Token.EOF;
miniSLGrammarParser.RULE_prg = 0;
miniSLGrammarParser.RULE_init = 1;
miniSLGrammarParser.RULE_serviceDecl = 2;
miniSLGrammarParser.RULE_stm = 3;
miniSLGrammarParser.RULE_serviceCall = 4;
miniSLGrammarParser.RULE_expOrCall = 5;
miniSLGrammarParser.RULE_exp = 6;
miniSLGrammarParser.RULE_formalParams = 7;
miniSLGrammarParser.literalNames = [null, "'('",
    "')'", "'=>'",
    "'{'", "'}'",
    "'service'",
    "':'", "'void'",
    "'->'", "';'",
    "'if'", "'else'",
    "'for'", "'in'",
    "'range'", "','",
    "'call'", "'+'",
    "'-'", "'*'",
    "'/'", "'&&'",
    "'||'", "'=='",
    "'!='", "'<'",
    "'<='", "'>'",
    "'>='", "'.'"];
miniSLGrammarParser.symbolicNames = [null, null,
    null, null,
    null, null,
    null, null,
    null, null,
    null, null,
    null, null,
    null, null,
    null, null,
    null, null,
    null, null,
    null, null,
    null, null,
    null, null,
    null, null,
    null, "ID",
    "NUMBER", "STRING",
    "NEWLINE",
    "LINECOMMENTS",
    "WS", "BLOCKCOMMENTS"];
// tslint:disable:no-trailing-whitespace
miniSLGrammarParser.ruleNames = [
    "prg", "init", "serviceDecl", "stm", "serviceCall", "expOrCall", "exp",
    "formalParams",
];
miniSLGrammarParser._serializedATN = [4, 1, 37, 129, 2, 0, 7, 0, 2,
    1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 1, 0, 5, 0, 18, 8, 0, 10,
    0, 12, 0, 21, 9, 0, 1, 0, 1, 0, 1, 1, 1, 1, 3, 1, 27, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1,
    2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1,
    3, 1, 3, 1, 3, 1, 3, 3, 3, 58, 8, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1,
    3, 1, 3, 1, 3, 1, 3, 3, 3, 75, 8, 3, 3, 3, 77, 8, 3, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 5, 4, 85, 8, 4,
    10, 4, 12, 4, 88, 9, 4, 3, 4, 90, 8, 4, 1, 4, 1, 4, 3, 4, 94, 8, 4, 1, 5, 1, 5, 3, 5, 98, 8, 5, 1, 6, 1,
    6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 3, 6, 111, 8, 6, 1, 6, 1, 6, 1, 6, 5, 6, 116, 8,
    6, 10, 6, 12, 6, 119, 9, 6, 1, 7, 1, 7, 1, 7, 5, 7, 124, 8, 7, 10, 7, 12, 7, 127, 9, 7, 1, 7, 0, 1, 12,
    8, 0, 2, 4, 6, 8, 10, 12, 14, 0, 1, 1, 0, 18, 29, 136, 0, 19, 1, 0, 0, 0, 2, 24, 1, 0, 0, 0, 4, 34, 1,
    0, 0, 0, 6, 76, 1, 0, 0, 0, 8, 78, 1, 0, 0, 0, 10, 97, 1, 0, 0, 0, 12, 110, 1, 0, 0, 0, 14, 120, 1, 0,
    0, 0, 16, 18, 3, 4, 2, 0, 17, 16, 1, 0, 0, 0, 18, 21, 1, 0, 0, 0, 19, 17, 1, 0, 0, 0, 19, 20, 1, 0, 0,
    0, 20, 22, 1, 0, 0, 0, 21, 19, 1, 0, 0, 0, 22, 23, 3, 2, 1, 0, 23, 1, 1, 0, 0, 0, 24, 26, 5, 1, 0, 0,
    25, 27, 3, 14, 7, 0, 26, 25, 1, 0, 0, 0, 26, 27, 1, 0, 0, 0, 27, 28, 1, 0, 0, 0, 28, 29, 5, 2, 0, 0,
    29, 30, 5, 3, 0, 0, 30, 31, 5, 4, 0, 0, 31, 32, 3, 6, 3, 0, 32, 33, 5, 5, 0, 0, 33, 3, 1, 0, 0, 0, 34,
    35, 5, 6, 0, 0, 35, 36, 5, 31, 0, 0, 36, 37, 5, 7, 0, 0, 37, 38, 5, 1, 0, 0, 38, 39, 5, 8, 0, 0, 39,
    40, 5, 2, 0, 0, 40, 41, 5, 9, 0, 0, 41, 42, 5, 8, 0, 0, 42, 43, 5, 10, 0, 0, 43, 5, 1, 0, 0, 0, 44, 77,
    3, 8, 4, 0, 45, 46, 5, 11, 0, 0, 46, 47, 5, 1, 0, 0, 47, 48, 3, 10, 5, 0, 48, 49, 5, 2, 0, 0, 49, 50,
    5, 4, 0, 0, 50, 51, 3, 6, 3, 0, 51, 52, 5, 5, 0, 0, 52, 53, 5, 12, 0, 0, 53, 54, 5, 4, 0, 0, 54, 55,
    3, 6, 3, 0, 55, 57, 5, 5, 0, 0, 56, 58, 3, 6, 3, 0, 57, 56, 1, 0, 0, 0, 57, 58, 1, 0, 0, 0, 58, 77, 1,
    0, 0, 0, 59, 60, 5, 13, 0, 0, 60, 61, 5, 1, 0, 0, 61, 62, 5, 31, 0, 0, 62, 63, 5, 14, 0, 0, 63, 64,
    5, 15, 0, 0, 64, 65, 5, 1, 0, 0, 65, 66, 5, 32, 0, 0, 66, 67, 5, 16, 0, 0, 67, 68, 3, 12, 6, 0, 68,
    69, 5, 2, 0, 0, 69, 70, 5, 2, 0, 0, 70, 71, 5, 4, 0, 0, 71, 72, 3, 6, 3, 0, 72, 74, 5, 5, 0, 0, 73, 75,
    3, 6, 3, 0, 74, 73, 1, 0, 0, 0, 74, 75, 1, 0, 0, 0, 75, 77, 1, 0, 0, 0, 76, 44, 1, 0, 0, 0, 76, 45, 1,
    0, 0, 0, 76, 59, 1, 0, 0, 0, 77, 7, 1, 0, 0, 0, 78, 79, 5, 17, 0, 0, 79, 80, 5, 31, 0, 0, 80, 89, 5,
    1, 0, 0, 81, 86, 3, 12, 6, 0, 82, 83, 5, 16, 0, 0, 83, 85, 3, 12, 6, 0, 84, 82, 1, 0, 0, 0, 85, 88,
    1, 0, 0, 0, 86, 84, 1, 0, 0, 0, 86, 87, 1, 0, 0, 0, 87, 90, 1, 0, 0, 0, 88, 86, 1, 0, 0, 0, 89, 81, 1,
    0, 0, 0, 89, 90, 1, 0, 0, 0, 90, 91, 1, 0, 0, 0, 91, 93, 5, 2, 0, 0, 92, 94, 3, 6, 3, 0, 93, 92, 1, 0,
    0, 0, 93, 94, 1, 0, 0, 0, 94, 9, 1, 0, 0, 0, 95, 98, 3, 12, 6, 0, 96, 98, 3, 8, 4, 0, 97, 95, 1, 0, 0,
    0, 97, 96, 1, 0, 0, 0, 98, 11, 1, 0, 0, 0, 99, 100, 6, 6, -1, 0, 100, 101, 5, 1, 0, 0, 101, 102, 3,
    12, 6, 0, 102, 103, 5, 2, 0, 0, 103, 111, 1, 0, 0, 0, 104, 105, 5, 31, 0, 0, 105, 106, 5, 30, 0,
    0, 106, 111, 5, 31, 0, 0, 107, 111, 5, 33, 0, 0, 108, 111, 5, 32, 0, 0, 109, 111, 5, 31, 0, 0, 110,
    99, 1, 0, 0, 0, 110, 104, 1, 0, 0, 0, 110, 107, 1, 0, 0, 0, 110, 108, 1, 0, 0, 0, 110, 109, 1, 0,
    0, 0, 111, 117, 1, 0, 0, 0, 112, 113, 10, 6, 0, 0, 113, 114, 7, 0, 0, 0, 114, 116, 3, 12, 6, 7, 115,
    112, 1, 0, 0, 0, 116, 119, 1, 0, 0, 0, 117, 115, 1, 0, 0, 0, 117, 118, 1, 0, 0, 0, 118, 13, 1, 0,
    0, 0, 119, 117, 1, 0, 0, 0, 120, 125, 5, 31, 0, 0, 121, 122, 5, 16, 0, 0, 122, 124, 5, 31, 0, 0,
    123, 121, 1, 0, 0, 0, 124, 127, 1, 0, 0, 0, 125, 123, 1, 0, 0, 0, 125, 126, 1, 0, 0, 0, 126, 15,
    1, 0, 0, 0, 127, 125, 1, 0, 0, 0, 12, 19, 26, 57, 74, 76, 86, 89, 93, 97, 110, 117, 125];
miniSLGrammarParser.DecisionsToDFA = miniSLGrammarParser._ATN.decisionToState.map((ds, index) => new DFA(ds, index));
export default miniSLGrammarParser;
export class PrgContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    init() {
        return this.getTypedRuleContext(InitContext, 0);
    }
    serviceDecl_list() {
        return this.getTypedRuleContexts(ServiceDeclContext);
    }
    serviceDecl(i) {
        return this.getTypedRuleContext(ServiceDeclContext, i);
    }
    get ruleIndex() {
        return miniSLGrammarParser.RULE_prg;
    }
    enterRule(listener) {
        if (listener.enterPrg) {
            listener.enterPrg(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPrg) {
            listener.exitPrg(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPrg) {
            return visitor.visitPrg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class InitContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    stm() {
        return this.getTypedRuleContext(StmContext, 0);
    }
    formalParams() {
        return this.getTypedRuleContext(FormalParamsContext, 0);
    }
    get ruleIndex() {
        return miniSLGrammarParser.RULE_init;
    }
    enterRule(listener) {
        if (listener.enterInit) {
            listener.enterInit(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInit) {
            listener.exitInit(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInit) {
            return visitor.visitInit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ServiceDeclContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    ID() {
        return this.getToken(miniSLGrammarParser.ID, 0);
    }
    get ruleIndex() {
        return miniSLGrammarParser.RULE_serviceDecl;
    }
    enterRule(listener) {
        if (listener.enterServiceDecl) {
            listener.enterServiceDecl(this);
        }
    }
    exitRule(listener) {
        if (listener.exitServiceDecl) {
            listener.exitServiceDecl(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitServiceDecl) {
            return visitor.visitServiceDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class StmContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    serviceCall() {
        return this.getTypedRuleContext(ServiceCallContext, 0);
    }
    expOrCall() {
        return this.getTypedRuleContext(ExpOrCallContext, 0);
    }
    stm_list() {
        return this.getTypedRuleContexts(StmContext);
    }
    stm(i) {
        return this.getTypedRuleContext(StmContext, i);
    }
    ID() {
        return this.getToken(miniSLGrammarParser.ID, 0);
    }
    NUMBER() {
        return this.getToken(miniSLGrammarParser.NUMBER, 0);
    }
    exp() {
        return this.getTypedRuleContext(ExpContext, 0);
    }
    get ruleIndex() {
        return miniSLGrammarParser.RULE_stm;
    }
    enterRule(listener) {
        if (listener.enterStm) {
            listener.enterStm(this);
        }
    }
    exitRule(listener) {
        if (listener.exitStm) {
            listener.exitStm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStm) {
            return visitor.visitStm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ServiceCallContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    ID() {
        return this.getToken(miniSLGrammarParser.ID, 0);
    }
    exp_list() {
        return this.getTypedRuleContexts(ExpContext);
    }
    exp(i) {
        return this.getTypedRuleContext(ExpContext, i);
    }
    stm() {
        return this.getTypedRuleContext(StmContext, 0);
    }
    get ruleIndex() {
        return miniSLGrammarParser.RULE_serviceCall;
    }
    enterRule(listener) {
        if (listener.enterServiceCall) {
            listener.enterServiceCall(this);
        }
    }
    exitRule(listener) {
        if (listener.exitServiceCall) {
            listener.exitServiceCall(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitServiceCall) {
            return visitor.visitServiceCall(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExpOrCallContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    exp() {
        return this.getTypedRuleContext(ExpContext, 0);
    }
    serviceCall() {
        return this.getTypedRuleContext(ServiceCallContext, 0);
    }
    get ruleIndex() {
        return miniSLGrammarParser.RULE_expOrCall;
    }
    enterRule(listener) {
        if (listener.enterExpOrCall) {
            listener.enterExpOrCall(this);
        }
    }
    exitRule(listener) {
        if (listener.exitExpOrCall) {
            listener.exitExpOrCall(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpOrCall) {
            return visitor.visitExpOrCall(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExpContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    get ruleIndex() {
        return miniSLGrammarParser.RULE_exp;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
export class CallFunContext extends ExpContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    ID_list() {
        return this.getTokens(miniSLGrammarParser.ID);
    }
    ID(i) {
        return this.getToken(miniSLGrammarParser.ID, i);
    }
    enterRule(listener) {
        if (listener.enterCallFun) {
            listener.enterCallFun(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCallFun) {
            listener.exitCallFun(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCallFun) {
            return visitor.visitCallFun(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class BinExpContext extends ExpContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    exp_list() {
        return this.getTypedRuleContexts(ExpContext);
    }
    exp(i) {
        return this.getTypedRuleContext(ExpContext, i);
    }
    enterRule(listener) {
        if (listener.enterBinExp) {
            listener.enterBinExp(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBinExp) {
            listener.exitBinExp(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBinExp) {
            return visitor.visitBinExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class DerExpContext extends ExpContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    ID() {
        return this.getToken(miniSLGrammarParser.ID, 0);
    }
    enterRule(listener) {
        if (listener.enterDerExp) {
            listener.enterDerExp(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDerExp) {
            listener.exitDerExp(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDerExp) {
            return visitor.visitDerExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ValExpContext extends ExpContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    NUMBER() {
        return this.getToken(miniSLGrammarParser.NUMBER, 0);
    }
    enterRule(listener) {
        if (listener.enterValExp) {
            listener.enterValExp(this);
        }
    }
    exitRule(listener) {
        if (listener.exitValExp) {
            listener.exitValExp(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitValExp) {
            return visitor.visitValExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class ParenExpContext extends ExpContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    exp() {
        return this.getTypedRuleContext(ExpContext, 0);
    }
    enterRule(listener) {
        if (listener.enterParenExp) {
            listener.enterParenExp(this);
        }
    }
    exitRule(listener) {
        if (listener.exitParenExp) {
            listener.exitParenExp(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParenExp) {
            return visitor.visitParenExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class StringExpContext extends ExpContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    STRING() {
        return this.getToken(miniSLGrammarParser.STRING, 0);
    }
    enterRule(listener) {
        if (listener.enterStringExp) {
            listener.enterStringExp(this);
        }
    }
    exitRule(listener) {
        if (listener.exitStringExp) {
            listener.exitStringExp(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStringExp) {
            return visitor.visitStringExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
export class FormalParamsContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    ID_list() {
        return this.getTokens(miniSLGrammarParser.ID);
    }
    ID(i) {
        return this.getToken(miniSLGrammarParser.ID, i);
    }
    get ruleIndex() {
        return miniSLGrammarParser.RULE_formalParams;
    }
    enterRule(listener) {
        if (listener.enterFormalParams) {
            listener.enterFormalParams(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFormalParams) {
            listener.exitFormalParams(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFormalParams) {
            return visitor.visitFormalParams(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
//# sourceMappingURL=miniSLGrammarParser.js.map