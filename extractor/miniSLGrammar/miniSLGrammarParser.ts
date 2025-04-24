// Generated from miniSLGrammar.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import miniSLGrammarListener from "./miniSLGrammarListener.js";
import miniSLGrammarVisitor from "./miniSLGrammarVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class miniSLGrammarParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly ID = 31;
	public static readonly NUMBER = 32;
	public static readonly STRING = 33;
	public static readonly NEWLINE = 34;
	public static readonly LINECOMMENTS = 35;
	public static readonly WS = 36;
	public static readonly BLOCKCOMMENTS = 37;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_prg = 0;
	public static readonly RULE_init = 1;
	public static readonly RULE_serviceDecl = 2;
	public static readonly RULE_stm = 3;
	public static readonly RULE_serviceCall = 4;
	public static readonly RULE_expOrCall = 5;
	public static readonly RULE_exp = 6;
	public static readonly RULE_formalParams = 7;
	public static readonly literalNames: (string | null)[] = [ null, "'('", 
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
                                                            "'>='", "'.'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
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
                                                             "WS", "BLOCKCOMMENTS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prg", "init", "serviceDecl", "stm", "serviceCall", "expOrCall", "exp", 
		"formalParams",
	];
	public get grammarFileName(): string { return "miniSLGrammar.g4"; }
	public get literalNames(): (string | null)[] { return miniSLGrammarParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return miniSLGrammarParser.symbolicNames; }
	public get ruleNames(): string[] { return miniSLGrammarParser.ruleNames; }
	public get serializedATN(): number[] { return miniSLGrammarParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, miniSLGrammarParser._ATN, miniSLGrammarParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public prg(): PrgContext {
		let localctx: PrgContext = new PrgContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, miniSLGrammarParser.RULE_prg);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 19;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===6) {
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
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public init(): InitContext {
		let localctx: InitContext = new InitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, miniSLGrammarParser.RULE_init);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 24;
			this.match(miniSLGrammarParser.T__0);
			this.state = 26;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===31) {
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
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public serviceDecl(): ServiceDeclContext {
		let localctx: ServiceDeclContext = new ServiceDeclContext(this, this._ctx, this.state);
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
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stm(): StmContext {
		let localctx: StmContext = new StmContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, miniSLGrammarParser.RULE_stm);
		try {
			this.state = 75;
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
				this.state = 56;
				this.stm();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 58;
				this.match(miniSLGrammarParser.T__12);
				this.state = 59;
				this.match(miniSLGrammarParser.T__0);
				this.state = 60;
				this.match(miniSLGrammarParser.ID);
				this.state = 61;
				this.match(miniSLGrammarParser.T__13);
				this.state = 62;
				this.match(miniSLGrammarParser.T__14);
				this.state = 63;
				this.match(miniSLGrammarParser.T__0);
				this.state = 64;
				this.match(miniSLGrammarParser.NUMBER);
				this.state = 65;
				this.match(miniSLGrammarParser.T__15);
				this.state = 66;
				this.exp(0);
				this.state = 67;
				this.match(miniSLGrammarParser.T__1);
				this.state = 68;
				this.match(miniSLGrammarParser.T__1);
				this.state = 69;
				this.match(miniSLGrammarParser.T__3);
				this.state = 70;
				this.stm();
				this.state = 71;
				this.match(miniSLGrammarParser.T__4);
				this.state = 72;
				this.stm();
				}
				break;
			case 2:
			case 5:
				this.enterOuterAlt(localctx, 4);
				// tslint:disable-next-line:no-empty
				{
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
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public serviceCall(): ServiceCallContext {
		let localctx: ServiceCallContext = new ServiceCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, miniSLGrammarParser.RULE_serviceCall);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 77;
			this.match(miniSLGrammarParser.T__16);
			this.state = 78;
			this.match(miniSLGrammarParser.ID);
			this.state = 79;
			this.match(miniSLGrammarParser.T__0);
			this.state = 88;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1 || _la===31 || _la===32 || _la===33) {
				{
				this.state = 80;
				this.exp(0);
				this.state = 85;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===16) {
					{
					{
					this.state = 81;
					this.match(miniSLGrammarParser.T__15);
					this.state = 82;
					this.exp(0);
					}
					}
					this.state = 87;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 90;
			this.match(miniSLGrammarParser.T__1);
			this.state = 91;
			this.stm();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expOrCall(): ExpOrCallContext {
		let localctx: ExpOrCallContext = new ExpOrCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, miniSLGrammarParser.RULE_expOrCall);
		try {
			this.state = 95;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 31:
			case 32:
			case 33:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 93;
				this.exp(0);
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 94;
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
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public exp(): ExpContext;
	public exp(_p: number): ExpContext;
	// @RuleVersion(0)
	public exp(_p?: number): ExpContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExpContext = new ExpContext(this, this._ctx, _parentState);
		let _prevctx: ExpContext = localctx;
		let _startState: number = 12;
		this.enterRecursionRule(localctx, 12, miniSLGrammarParser.RULE_exp, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 108;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				localctx = new ParenExpContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 98;
				this.match(miniSLGrammarParser.T__0);
				this.state = 99;
				this.exp(0);
				this.state = 100;
				this.match(miniSLGrammarParser.T__1);
				}
				break;
			case 2:
				{
				localctx = new CallFunContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 102;
				this.match(miniSLGrammarParser.ID);
				this.state = 103;
				this.match(miniSLGrammarParser.T__29);
				this.state = 104;
				this.match(miniSLGrammarParser.ID);
				}
				break;
			case 3:
				{
				localctx = new StringExpContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 105;
				this.match(miniSLGrammarParser.STRING);
				}
				break;
			case 4:
				{
				localctx = new ValExpContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 106;
				this.match(miniSLGrammarParser.NUMBER);
				}
				break;
			case 5:
				{
				localctx = new DerExpContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 107;
				this.match(miniSLGrammarParser.ID);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 115;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
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
					this.state = 110;
					if (!(this.precpred(this._ctx, 6))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
					}
					this.state = 111;
					_la = this._input.LA(1);
					if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1073479680) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 112;
					this.exp(7);
					}
					}
				}
				this.state = 117;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public formalParams(): FormalParamsContext {
		let localctx: FormalParamsContext = new FormalParamsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, miniSLGrammarParser.RULE_formalParams);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 118;
			this.match(miniSLGrammarParser.ID);
			this.state = 123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===16) {
				{
				{
				this.state = 119;
				this.match(miniSLGrammarParser.T__15);
				this.state = 120;
				this.match(miniSLGrammarParser.ID);
				}
				}
				this.state = 125;
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
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 6:
			return this.exp_sempred(localctx as ExpContext, predIndex);
		}
		return true;
	}
	private exp_sempred(localctx: ExpContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 6);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,37,127,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,5,0,18,8,0,10,
	0,12,0,21,9,0,1,0,1,0,1,1,1,1,3,1,27,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,
	2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
	3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
	3,1,3,1,3,1,3,3,3,76,8,3,1,4,1,4,1,4,1,4,1,4,1,4,5,4,84,8,4,10,4,12,4,87,
	9,4,3,4,89,8,4,1,4,1,4,1,4,1,5,1,5,3,5,96,8,5,1,6,1,6,1,6,1,6,1,6,1,6,1,
	6,1,6,1,6,1,6,1,6,3,6,109,8,6,1,6,1,6,1,6,5,6,114,8,6,10,6,12,6,117,9,6,
	1,7,1,7,1,7,5,7,122,8,7,10,7,12,7,125,9,7,1,7,0,1,12,8,0,2,4,6,8,10,12,
	14,0,1,1,0,18,29,132,0,19,1,0,0,0,2,24,1,0,0,0,4,34,1,0,0,0,6,75,1,0,0,
	0,8,77,1,0,0,0,10,95,1,0,0,0,12,108,1,0,0,0,14,118,1,0,0,0,16,18,3,4,2,
	0,17,16,1,0,0,0,18,21,1,0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,22,1,0,0,0,
	21,19,1,0,0,0,22,23,3,2,1,0,23,1,1,0,0,0,24,26,5,1,0,0,25,27,3,14,7,0,26,
	25,1,0,0,0,26,27,1,0,0,0,27,28,1,0,0,0,28,29,5,2,0,0,29,30,5,3,0,0,30,31,
	5,4,0,0,31,32,3,6,3,0,32,33,5,5,0,0,33,3,1,0,0,0,34,35,5,6,0,0,35,36,5,
	31,0,0,36,37,5,7,0,0,37,38,5,1,0,0,38,39,5,8,0,0,39,40,5,2,0,0,40,41,5,
	9,0,0,41,42,5,8,0,0,42,43,5,10,0,0,43,5,1,0,0,0,44,76,3,8,4,0,45,46,5,11,
	0,0,46,47,5,1,0,0,47,48,3,10,5,0,48,49,5,2,0,0,49,50,5,4,0,0,50,51,3,6,
	3,0,51,52,5,5,0,0,52,53,5,12,0,0,53,54,5,4,0,0,54,55,3,6,3,0,55,56,5,5,
	0,0,56,57,3,6,3,0,57,76,1,0,0,0,58,59,5,13,0,0,59,60,5,1,0,0,60,61,5,31,
	0,0,61,62,5,14,0,0,62,63,5,15,0,0,63,64,5,1,0,0,64,65,5,32,0,0,65,66,5,
	16,0,0,66,67,3,12,6,0,67,68,5,2,0,0,68,69,5,2,0,0,69,70,5,4,0,0,70,71,3,
	6,3,0,71,72,5,5,0,0,72,73,3,6,3,0,73,76,1,0,0,0,74,76,1,0,0,0,75,44,1,0,
	0,0,75,45,1,0,0,0,75,58,1,0,0,0,75,74,1,0,0,0,76,7,1,0,0,0,77,78,5,17,0,
	0,78,79,5,31,0,0,79,88,5,1,0,0,80,85,3,12,6,0,81,82,5,16,0,0,82,84,3,12,
	6,0,83,81,1,0,0,0,84,87,1,0,0,0,85,83,1,0,0,0,85,86,1,0,0,0,86,89,1,0,0,
	0,87,85,1,0,0,0,88,80,1,0,0,0,88,89,1,0,0,0,89,90,1,0,0,0,90,91,5,2,0,0,
	91,92,3,6,3,0,92,9,1,0,0,0,93,96,3,12,6,0,94,96,3,8,4,0,95,93,1,0,0,0,95,
	94,1,0,0,0,96,11,1,0,0,0,97,98,6,6,-1,0,98,99,5,1,0,0,99,100,3,12,6,0,100,
	101,5,2,0,0,101,109,1,0,0,0,102,103,5,31,0,0,103,104,5,30,0,0,104,109,5,
	31,0,0,105,109,5,33,0,0,106,109,5,32,0,0,107,109,5,31,0,0,108,97,1,0,0,
	0,108,102,1,0,0,0,108,105,1,0,0,0,108,106,1,0,0,0,108,107,1,0,0,0,109,115,
	1,0,0,0,110,111,10,6,0,0,111,112,7,0,0,0,112,114,3,12,6,7,113,110,1,0,0,
	0,114,117,1,0,0,0,115,113,1,0,0,0,115,116,1,0,0,0,116,13,1,0,0,0,117,115,
	1,0,0,0,118,123,5,31,0,0,119,120,5,16,0,0,120,122,5,31,0,0,121,119,1,0,
	0,0,122,125,1,0,0,0,123,121,1,0,0,0,123,124,1,0,0,0,124,15,1,0,0,0,125,
	123,1,0,0,0,9,19,26,75,85,88,95,108,115,123];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!miniSLGrammarParser.__ATN) {
			miniSLGrammarParser.__ATN = new ATNDeserializer().deserialize(miniSLGrammarParser._serializedATN);
		}

		return miniSLGrammarParser.__ATN;
	}


	static DecisionsToDFA = miniSLGrammarParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class PrgContext extends ParserRuleContext {
	constructor(parser?: miniSLGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public init(): InitContext {
		return this.getTypedRuleContext(InitContext, 0) as InitContext;
	}
	public serviceDecl_list(): ServiceDeclContext[] {
		return this.getTypedRuleContexts(ServiceDeclContext) as ServiceDeclContext[];
	}
	public serviceDecl(i: number): ServiceDeclContext {
		return this.getTypedRuleContext(ServiceDeclContext, i) as ServiceDeclContext;
	}
    public get ruleIndex(): number {
    	return miniSLGrammarParser.RULE_prg;
	}
	public enterRule(listener: miniSLGrammarListener): void {
	    if(listener.enterPrg) {
	 		listener.enterPrg(this);
		}
	}
	public exitRule(listener: miniSLGrammarListener): void {
	    if(listener.exitPrg) {
	 		listener.exitPrg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: miniSLGrammarVisitor<Result>): Result {
		if (visitor.visitPrg) {
			return visitor.visitPrg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitContext extends ParserRuleContext {
	constructor(parser?: miniSLGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public stm(): StmContext {
		return this.getTypedRuleContext(StmContext, 0) as StmContext;
	}
	public formalParams(): FormalParamsContext {
		return this.getTypedRuleContext(FormalParamsContext, 0) as FormalParamsContext;
	}
    public get ruleIndex(): number {
    	return miniSLGrammarParser.RULE_init;
	}
	public enterRule(listener: miniSLGrammarListener): void {
	    if(listener.enterInit) {
	 		listener.enterInit(this);
		}
	}
	public exitRule(listener: miniSLGrammarListener): void {
	    if(listener.exitInit) {
	 		listener.exitInit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: miniSLGrammarVisitor<Result>): Result {
		if (visitor.visitInit) {
			return visitor.visitInit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ServiceDeclContext extends ParserRuleContext {
	constructor(parser?: miniSLGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(miniSLGrammarParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return miniSLGrammarParser.RULE_serviceDecl;
	}
	public enterRule(listener: miniSLGrammarListener): void {
	    if(listener.enterServiceDecl) {
	 		listener.enterServiceDecl(this);
		}
	}
	public exitRule(listener: miniSLGrammarListener): void {
	    if(listener.exitServiceDecl) {
	 		listener.exitServiceDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: miniSLGrammarVisitor<Result>): Result {
		if (visitor.visitServiceDecl) {
			return visitor.visitServiceDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StmContext extends ParserRuleContext {
	constructor(parser?: miniSLGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public serviceCall(): ServiceCallContext {
		return this.getTypedRuleContext(ServiceCallContext, 0) as ServiceCallContext;
	}
	public expOrCall(): ExpOrCallContext {
		return this.getTypedRuleContext(ExpOrCallContext, 0) as ExpOrCallContext;
	}
	public stm_list(): StmContext[] {
		return this.getTypedRuleContexts(StmContext) as StmContext[];
	}
	public stm(i: number): StmContext {
		return this.getTypedRuleContext(StmContext, i) as StmContext;
	}
	public ID(): TerminalNode {
		return this.getToken(miniSLGrammarParser.ID, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(miniSLGrammarParser.NUMBER, 0);
	}
	public exp(): ExpContext {
		return this.getTypedRuleContext(ExpContext, 0) as ExpContext;
	}
    public get ruleIndex(): number {
    	return miniSLGrammarParser.RULE_stm;
	}
	public enterRule(listener: miniSLGrammarListener): void {
	    if(listener.enterStm) {
	 		listener.enterStm(this);
		}
	}
	public exitRule(listener: miniSLGrammarListener): void {
	    if(listener.exitStm) {
	 		listener.exitStm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: miniSLGrammarVisitor<Result>): Result {
		if (visitor.visitStm) {
			return visitor.visitStm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ServiceCallContext extends ParserRuleContext {
	constructor(parser?: miniSLGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(miniSLGrammarParser.ID, 0);
	}
	public stm(): StmContext {
		return this.getTypedRuleContext(StmContext, 0) as StmContext;
	}
	public exp_list(): ExpContext[] {
		return this.getTypedRuleContexts(ExpContext) as ExpContext[];
	}
	public exp(i: number): ExpContext {
		return this.getTypedRuleContext(ExpContext, i) as ExpContext;
	}
    public get ruleIndex(): number {
    	return miniSLGrammarParser.RULE_serviceCall;
	}
	public enterRule(listener: miniSLGrammarListener): void {
	    if(listener.enterServiceCall) {
	 		listener.enterServiceCall(this);
		}
	}
	public exitRule(listener: miniSLGrammarListener): void {
	    if(listener.exitServiceCall) {
	 		listener.exitServiceCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: miniSLGrammarVisitor<Result>): Result {
		if (visitor.visitServiceCall) {
			return visitor.visitServiceCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpOrCallContext extends ParserRuleContext {
	constructor(parser?: miniSLGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public exp(): ExpContext {
		return this.getTypedRuleContext(ExpContext, 0) as ExpContext;
	}
	public serviceCall(): ServiceCallContext {
		return this.getTypedRuleContext(ServiceCallContext, 0) as ServiceCallContext;
	}
    public get ruleIndex(): number {
    	return miniSLGrammarParser.RULE_expOrCall;
	}
	public enterRule(listener: miniSLGrammarListener): void {
	    if(listener.enterExpOrCall) {
	 		listener.enterExpOrCall(this);
		}
	}
	public exitRule(listener: miniSLGrammarListener): void {
	    if(listener.exitExpOrCall) {
	 		listener.exitExpOrCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: miniSLGrammarVisitor<Result>): Result {
		if (visitor.visitExpOrCall) {
			return visitor.visitExpOrCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpContext extends ParserRuleContext {
	constructor(parser?: miniSLGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return miniSLGrammarParser.RULE_exp;
	}
	public override copyFrom(ctx: ExpContext): void {
		super.copyFrom(ctx);
	}
}
export class CallFunContext extends ExpContext {
	constructor(parser: miniSLGrammarParser, ctx: ExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(miniSLGrammarParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(miniSLGrammarParser.ID, i);
	}
	public enterRule(listener: miniSLGrammarListener): void {
	    if(listener.enterCallFun) {
	 		listener.enterCallFun(this);
		}
	}
	public exitRule(listener: miniSLGrammarListener): void {
	    if(listener.exitCallFun) {
	 		listener.exitCallFun(this);
		}
	}
	// @Override
	public accept<Result>(visitor: miniSLGrammarVisitor<Result>): Result {
		if (visitor.visitCallFun) {
			return visitor.visitCallFun(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BinExpContext extends ExpContext {
	constructor(parser: miniSLGrammarParser, ctx: ExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public exp_list(): ExpContext[] {
		return this.getTypedRuleContexts(ExpContext) as ExpContext[];
	}
	public exp(i: number): ExpContext {
		return this.getTypedRuleContext(ExpContext, i) as ExpContext;
	}
	public enterRule(listener: miniSLGrammarListener): void {
	    if(listener.enterBinExp) {
	 		listener.enterBinExp(this);
		}
	}
	public exitRule(listener: miniSLGrammarListener): void {
	    if(listener.exitBinExp) {
	 		listener.exitBinExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: miniSLGrammarVisitor<Result>): Result {
		if (visitor.visitBinExp) {
			return visitor.visitBinExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DerExpContext extends ExpContext {
	constructor(parser: miniSLGrammarParser, ctx: ExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ID(): TerminalNode {
		return this.getToken(miniSLGrammarParser.ID, 0);
	}
	public enterRule(listener: miniSLGrammarListener): void {
	    if(listener.enterDerExp) {
	 		listener.enterDerExp(this);
		}
	}
	public exitRule(listener: miniSLGrammarListener): void {
	    if(listener.exitDerExp) {
	 		listener.exitDerExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: miniSLGrammarVisitor<Result>): Result {
		if (visitor.visitDerExp) {
			return visitor.visitDerExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ValExpContext extends ExpContext {
	constructor(parser: miniSLGrammarParser, ctx: ExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(miniSLGrammarParser.NUMBER, 0);
	}
	public enterRule(listener: miniSLGrammarListener): void {
	    if(listener.enterValExp) {
	 		listener.enterValExp(this);
		}
	}
	public exitRule(listener: miniSLGrammarListener): void {
	    if(listener.exitValExp) {
	 		listener.exitValExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: miniSLGrammarVisitor<Result>): Result {
		if (visitor.visitValExp) {
			return visitor.visitValExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenExpContext extends ExpContext {
	constructor(parser: miniSLGrammarParser, ctx: ExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public exp(): ExpContext {
		return this.getTypedRuleContext(ExpContext, 0) as ExpContext;
	}
	public enterRule(listener: miniSLGrammarListener): void {
	    if(listener.enterParenExp) {
	 		listener.enterParenExp(this);
		}
	}
	public exitRule(listener: miniSLGrammarListener): void {
	    if(listener.exitParenExp) {
	 		listener.exitParenExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: miniSLGrammarVisitor<Result>): Result {
		if (visitor.visitParenExp) {
			return visitor.visitParenExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringExpContext extends ExpContext {
	constructor(parser: miniSLGrammarParser, ctx: ExpContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public STRING(): TerminalNode {
		return this.getToken(miniSLGrammarParser.STRING, 0);
	}
	public enterRule(listener: miniSLGrammarListener): void {
	    if(listener.enterStringExp) {
	 		listener.enterStringExp(this);
		}
	}
	public exitRule(listener: miniSLGrammarListener): void {
	    if(listener.exitStringExp) {
	 		listener.exitStringExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: miniSLGrammarVisitor<Result>): Result {
		if (visitor.visitStringExp) {
			return visitor.visitStringExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParamsContext extends ParserRuleContext {
	constructor(parser?: miniSLGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(miniSLGrammarParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(miniSLGrammarParser.ID, i);
	}
    public get ruleIndex(): number {
    	return miniSLGrammarParser.RULE_formalParams;
	}
	public enterRule(listener: miniSLGrammarListener): void {
	    if(listener.enterFormalParams) {
	 		listener.enterFormalParams(this);
		}
	}
	public exitRule(listener: miniSLGrammarListener): void {
	    if(listener.exitFormalParams) {
	 		listener.exitFormalParams(this);
		}
	}
	// @Override
	public accept<Result>(visitor: miniSLGrammarVisitor<Result>): Result {
		if (visitor.visitFormalParams) {
			return visitor.visitFormalParams(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
