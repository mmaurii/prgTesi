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
	public static readonly ID = 30;
	public static readonly NUMBER = 31;
	public static readonly STRING = 32;
	public static readonly NEWLINE = 33;
	public static readonly LINECOMMENTS = 34;
	public static readonly WS = 35;
	public static readonly BLOCKCOMMENTS = 36;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_prg = 0;
	public static readonly RULE_init = 1;
	public static readonly RULE_serviceDecl = 2;
	public static readonly RULE_functionDecl = 3;
	public static readonly RULE_stm = 4;
	public static readonly RULE_serviceCall = 5;
	public static readonly RULE_functionCall = 6;
	public static readonly RULE_expOrCall = 7;
	public static readonly RULE_exp = 8;
	public static readonly RULE_formalParams = 9;
	public static readonly literalNames: (string | null)[] = [ null, "'('", 
                                                            "')'", "'=>'", 
                                                            "'{'", "'}'", 
                                                            "'service'", 
                                                            "':'", "'void'", 
                                                            "'->'", "';'", 
                                                            "'fn'", "'if'", 
                                                            "'else'", "'for'", 
                                                            "'in'", "','", 
                                                            "'call'", "'+'", 
                                                            "'-'", "'*'", 
                                                            "'/'", "'&&'", 
                                                            "'=='", "'!='", 
                                                            "'<'", "'<='", 
                                                            "'>'", "'>='", 
                                                            "'.'" ];
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
                                                             "ID", "NUMBER", 
                                                             "STRING", "NEWLINE", 
                                                             "LINECOMMENTS", 
                                                             "WS", "BLOCKCOMMENTS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prg", "init", "serviceDecl", "functionDecl", "stm", "serviceCall", "functionCall", 
		"expOrCall", "exp", "formalParams",
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
			this.state = 23;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===6) {
				{
				{
				this.state = 20;
				this.serviceDecl();
				}
				}
				this.state = 25;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===11) {
				{
				{
				this.state = 26;
				this.functionDecl();
				}
				}
				this.state = 31;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 32;
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
			this.state = 34;
			this.match(miniSLGrammarParser.T__0);
			this.state = 36;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===30) {
				{
				this.state = 35;
				this.formalParams();
				}
			}

			this.state = 38;
			this.match(miniSLGrammarParser.T__1);
			this.state = 39;
			this.match(miniSLGrammarParser.T__2);
			this.state = 40;
			this.match(miniSLGrammarParser.T__3);
			this.state = 41;
			this.stm();
			this.state = 42;
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
			this.state = 44;
			this.match(miniSLGrammarParser.T__5);
			this.state = 45;
			this.match(miniSLGrammarParser.ID);
			this.state = 46;
			this.match(miniSLGrammarParser.T__6);
			this.state = 47;
			this.match(miniSLGrammarParser.T__0);
			this.state = 48;
			this.match(miniSLGrammarParser.T__7);
			this.state = 49;
			this.match(miniSLGrammarParser.T__1);
			this.state = 50;
			this.match(miniSLGrammarParser.T__8);
			this.state = 51;
			this.match(miniSLGrammarParser.T__7);
			this.state = 52;
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
	public functionDecl(): FunctionDeclContext {
		let localctx: FunctionDeclContext = new FunctionDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, miniSLGrammarParser.RULE_functionDecl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 54;
			this.match(miniSLGrammarParser.T__10);
			this.state = 55;
			this.match(miniSLGrammarParser.ID);
			this.state = 56;
			this.match(miniSLGrammarParser.T__0);
			this.state = 58;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===30) {
				{
				this.state = 57;
				this.formalParams();
				}
			}

			this.state = 60;
			this.match(miniSLGrammarParser.T__1);
			this.state = 61;
			this.match(miniSLGrammarParser.T__3);
			this.state = 62;
			this.stm();
			this.state = 63;
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
	public stm(): StmContext {
		let localctx: StmContext = new StmContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, miniSLGrammarParser.RULE_stm);
		try {
			this.state = 93;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 17:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 65;
				this.serviceCall();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 66;
				this.match(miniSLGrammarParser.T__11);
				this.state = 67;
				this.match(miniSLGrammarParser.T__0);
				this.state = 68;
				this.expOrCall();
				this.state = 69;
				this.match(miniSLGrammarParser.T__1);
				this.state = 70;
				this.match(miniSLGrammarParser.T__3);
				this.state = 71;
				this.stm();
				this.state = 72;
				this.match(miniSLGrammarParser.T__4);
				this.state = 73;
				this.match(miniSLGrammarParser.T__12);
				this.state = 74;
				this.match(miniSLGrammarParser.T__3);
				this.state = 75;
				this.stm();
				this.state = 76;
				this.match(miniSLGrammarParser.T__4);
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 78;
				this.match(miniSLGrammarParser.T__13);
				this.state = 79;
				this.match(miniSLGrammarParser.T__0);
				this.state = 80;
				this.match(miniSLGrammarParser.ID);
				this.state = 81;
				this.match(miniSLGrammarParser.T__14);
				this.state = 82;
				this.match(miniSLGrammarParser.T__0);
				this.state = 83;
				this.match(miniSLGrammarParser.NUMBER);
				this.state = 84;
				this.match(miniSLGrammarParser.T__15);
				this.state = 85;
				this.exp(0);
				this.state = 86;
				this.match(miniSLGrammarParser.T__1);
				this.state = 87;
				this.match(miniSLGrammarParser.T__1);
				this.state = 88;
				this.match(miniSLGrammarParser.T__3);
				this.state = 89;
				this.stm();
				this.state = 90;
				this.match(miniSLGrammarParser.T__4);
				}
				break;
			case 30:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 92;
				this.functionCall();
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
		this.enterRule(localctx, 10, miniSLGrammarParser.RULE_serviceCall);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 95;
			this.match(miniSLGrammarParser.T__16);
			this.state = 96;
			this.match(miniSLGrammarParser.ID);
			this.state = 97;
			this.match(miniSLGrammarParser.T__0);
			this.state = 106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & 7) !== 0)) {
				{
				this.state = 98;
				this.exp(0);
				this.state = 103;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===16) {
					{
					{
					this.state = 99;
					this.match(miniSLGrammarParser.T__15);
					this.state = 100;
					this.exp(0);
					}
					}
					this.state = 105;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 108;
			this.match(miniSLGrammarParser.T__1);
			this.state = 110;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1073893376) !== 0)) {
				{
				this.state = 109;
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
	public functionCall(): FunctionCallContext {
		let localctx: FunctionCallContext = new FunctionCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, miniSLGrammarParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 112;
			this.match(miniSLGrammarParser.ID);
			this.state = 113;
			this.match(miniSLGrammarParser.T__0);
			this.state = 122;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & 7) !== 0)) {
				{
				this.state = 114;
				this.exp(0);
				this.state = 119;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===16) {
					{
					{
					this.state = 115;
					this.match(miniSLGrammarParser.T__15);
					this.state = 116;
					this.exp(0);
					}
					}
					this.state = 121;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 124;
			this.match(miniSLGrammarParser.T__1);
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
		this.enterRule(localctx, 14, miniSLGrammarParser.RULE_expOrCall);
		try {
			this.state = 128;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 30:
			case 31:
			case 32:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 126;
				this.exp(0);
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 127;
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
		let _startState: number = 16;
		this.enterRecursionRule(localctx, 16, miniSLGrammarParser.RULE_exp, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 137;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				localctx = new CallFunContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 131;
				this.match(miniSLGrammarParser.ID);
				this.state = 132;
				this.match(miniSLGrammarParser.T__28);
				this.state = 133;
				this.match(miniSLGrammarParser.ID);
				}
				break;
			case 2:
				{
				localctx = new StringExpContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 134;
				this.match(miniSLGrammarParser.STRING);
				}
				break;
			case 3:
				{
				localctx = new ValExpContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 135;
				this.match(miniSLGrammarParser.NUMBER);
				}
				break;
			case 4:
				{
				localctx = new DerExpContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 136;
				this.match(miniSLGrammarParser.ID);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 144;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 12, this._ctx);
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
					this.state = 139;
					if (!(this.precpred(this._ctx, 5))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
					}
					this.state = 140;
					_la = this._input.LA(1);
					if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 536608768) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 141;
					this.exp(6);
					}
					}
				}
				this.state = 146;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 12, this._ctx);
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
		this.enterRule(localctx, 18, miniSLGrammarParser.RULE_formalParams);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 147;
			this.match(miniSLGrammarParser.ID);
			this.state = 152;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===16) {
				{
				{
				this.state = 148;
				this.match(miniSLGrammarParser.T__15);
				this.state = 149;
				this.match(miniSLGrammarParser.ID);
				}
				}
				this.state = 154;
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
		case 8:
			return this.exp_sempred(localctx as ExpContext, predIndex);
		}
		return true;
	}
	private exp_sempred(localctx: ExpContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,36,156,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,
	0,5,0,22,8,0,10,0,12,0,25,9,0,1,0,5,0,28,8,0,10,0,12,0,31,9,0,1,0,1,0,1,
	1,1,1,3,1,37,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
	2,1,2,1,2,1,3,1,3,1,3,1,3,3,3,59,8,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,
	4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,
	4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,94,8,4,1,5,1,5,1,5,1,5,1,5,1,5,5,5,102,8,
	5,10,5,12,5,105,9,5,3,5,107,8,5,1,5,1,5,3,5,111,8,5,1,6,1,6,1,6,1,6,1,6,
	5,6,118,8,6,10,6,12,6,121,9,6,3,6,123,8,6,1,6,1,6,1,7,1,7,3,7,129,8,7,1,
	8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,138,8,8,1,8,1,8,1,8,5,8,143,8,8,10,8,12,8,
	146,9,8,1,9,1,9,1,9,5,9,151,8,9,10,9,12,9,154,9,9,1,9,0,1,16,10,0,2,4,6,
	8,10,12,14,16,18,0,1,1,0,18,28,163,0,23,1,0,0,0,2,34,1,0,0,0,4,44,1,0,0,
	0,6,54,1,0,0,0,8,93,1,0,0,0,10,95,1,0,0,0,12,112,1,0,0,0,14,128,1,0,0,0,
	16,137,1,0,0,0,18,147,1,0,0,0,20,22,3,4,2,0,21,20,1,0,0,0,22,25,1,0,0,0,
	23,21,1,0,0,0,23,24,1,0,0,0,24,29,1,0,0,0,25,23,1,0,0,0,26,28,3,6,3,0,27,
	26,1,0,0,0,28,31,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,30,32,1,0,0,0,31,29,
	1,0,0,0,32,33,3,2,1,0,33,1,1,0,0,0,34,36,5,1,0,0,35,37,3,18,9,0,36,35,1,
	0,0,0,36,37,1,0,0,0,37,38,1,0,0,0,38,39,5,2,0,0,39,40,5,3,0,0,40,41,5,4,
	0,0,41,42,3,8,4,0,42,43,5,5,0,0,43,3,1,0,0,0,44,45,5,6,0,0,45,46,5,30,0,
	0,46,47,5,7,0,0,47,48,5,1,0,0,48,49,5,8,0,0,49,50,5,2,0,0,50,51,5,9,0,0,
	51,52,5,8,0,0,52,53,5,10,0,0,53,5,1,0,0,0,54,55,5,11,0,0,55,56,5,30,0,0,
	56,58,5,1,0,0,57,59,3,18,9,0,58,57,1,0,0,0,58,59,1,0,0,0,59,60,1,0,0,0,
	60,61,5,2,0,0,61,62,5,4,0,0,62,63,3,8,4,0,63,64,5,5,0,0,64,7,1,0,0,0,65,
	94,3,10,5,0,66,67,5,12,0,0,67,68,5,1,0,0,68,69,3,14,7,0,69,70,5,2,0,0,70,
	71,5,4,0,0,71,72,3,8,4,0,72,73,5,5,0,0,73,74,5,13,0,0,74,75,5,4,0,0,75,
	76,3,8,4,0,76,77,5,5,0,0,77,94,1,0,0,0,78,79,5,14,0,0,79,80,5,1,0,0,80,
	81,5,30,0,0,81,82,5,15,0,0,82,83,5,1,0,0,83,84,5,31,0,0,84,85,5,16,0,0,
	85,86,3,16,8,0,86,87,5,2,0,0,87,88,5,2,0,0,88,89,5,4,0,0,89,90,3,8,4,0,
	90,91,5,5,0,0,91,94,1,0,0,0,92,94,3,12,6,0,93,65,1,0,0,0,93,66,1,0,0,0,
	93,78,1,0,0,0,93,92,1,0,0,0,94,9,1,0,0,0,95,96,5,17,0,0,96,97,5,30,0,0,
	97,106,5,1,0,0,98,103,3,16,8,0,99,100,5,16,0,0,100,102,3,16,8,0,101,99,
	1,0,0,0,102,105,1,0,0,0,103,101,1,0,0,0,103,104,1,0,0,0,104,107,1,0,0,0,
	105,103,1,0,0,0,106,98,1,0,0,0,106,107,1,0,0,0,107,108,1,0,0,0,108,110,
	5,2,0,0,109,111,3,8,4,0,110,109,1,0,0,0,110,111,1,0,0,0,111,11,1,0,0,0,
	112,113,5,30,0,0,113,122,5,1,0,0,114,119,3,16,8,0,115,116,5,16,0,0,116,
	118,3,16,8,0,117,115,1,0,0,0,118,121,1,0,0,0,119,117,1,0,0,0,119,120,1,
	0,0,0,120,123,1,0,0,0,121,119,1,0,0,0,122,114,1,0,0,0,122,123,1,0,0,0,123,
	124,1,0,0,0,124,125,5,2,0,0,125,13,1,0,0,0,126,129,3,16,8,0,127,129,3,10,
	5,0,128,126,1,0,0,0,128,127,1,0,0,0,129,15,1,0,0,0,130,131,6,8,-1,0,131,
	132,5,30,0,0,132,133,5,29,0,0,133,138,5,30,0,0,134,138,5,32,0,0,135,138,
	5,31,0,0,136,138,5,30,0,0,137,130,1,0,0,0,137,134,1,0,0,0,137,135,1,0,0,
	0,137,136,1,0,0,0,138,144,1,0,0,0,139,140,10,5,0,0,140,141,7,0,0,0,141,
	143,3,16,8,6,142,139,1,0,0,0,143,146,1,0,0,0,144,142,1,0,0,0,144,145,1,
	0,0,0,145,17,1,0,0,0,146,144,1,0,0,0,147,152,5,30,0,0,148,149,5,16,0,0,
	149,151,5,30,0,0,150,148,1,0,0,0,151,154,1,0,0,0,152,150,1,0,0,0,152,153,
	1,0,0,0,153,19,1,0,0,0,154,152,1,0,0,0,14,23,29,36,58,93,103,106,110,119,
	122,128,137,144,152];

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
	public functionDecl_list(): FunctionDeclContext[] {
		return this.getTypedRuleContexts(FunctionDeclContext) as FunctionDeclContext[];
	}
	public functionDecl(i: number): FunctionDeclContext {
		return this.getTypedRuleContext(FunctionDeclContext, i) as FunctionDeclContext;
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


export class FunctionDeclContext extends ParserRuleContext {
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
	public formalParams(): FormalParamsContext {
		return this.getTypedRuleContext(FormalParamsContext, 0) as FormalParamsContext;
	}
    public get ruleIndex(): number {
    	return miniSLGrammarParser.RULE_functionDecl;
	}
	public enterRule(listener: miniSLGrammarListener): void {
	    if(listener.enterFunctionDecl) {
	 		listener.enterFunctionDecl(this);
		}
	}
	public exitRule(listener: miniSLGrammarListener): void {
	    if(listener.exitFunctionDecl) {
	 		listener.exitFunctionDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: miniSLGrammarVisitor<Result>): Result {
		if (visitor.visitFunctionDecl) {
			return visitor.visitFunctionDecl(this);
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
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
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
	public exp_list(): ExpContext[] {
		return this.getTypedRuleContexts(ExpContext) as ExpContext[];
	}
	public exp(i: number): ExpContext {
		return this.getTypedRuleContext(ExpContext, i) as ExpContext;
	}
	public stm(): StmContext {
		return this.getTypedRuleContext(StmContext, 0) as StmContext;
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


export class FunctionCallContext extends ParserRuleContext {
	constructor(parser?: miniSLGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(miniSLGrammarParser.ID, 0);
	}
	public exp_list(): ExpContext[] {
		return this.getTypedRuleContexts(ExpContext) as ExpContext[];
	}
	public exp(i: number): ExpContext {
		return this.getTypedRuleContext(ExpContext, i) as ExpContext;
	}
    public get ruleIndex(): number {
    	return miniSLGrammarParser.RULE_functionCall;
	}
	public enterRule(listener: miniSLGrammarListener): void {
	    if(listener.enterFunctionCall) {
	 		listener.enterFunctionCall(this);
		}
	}
	public exitRule(listener: miniSLGrammarListener): void {
	    if(listener.exitFunctionCall) {
	 		listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: miniSLGrammarVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
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
