// Generated from testGrammar.g4 by ANTLR 4.13.2
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
import testGrammarListener from "./testGrammarListener.js";
import testGrammarVisitor from "./testGrammarVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class testGrammarParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly SAYS = 8;
	public static readonly SHOUTS = 9;
	public static readonly WORD = 10;
	public static readonly WHITESPACE = 11;
	public static readonly NEWLINE = 12;
	public static readonly TEXT = 13;
	public static readonly NUMBER = 14;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_chat = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_message = 2;
	public static readonly RULE_name = 3;
	public static readonly RULE_command = 4;
	public static readonly RULE_emoticon = 5;
	public static readonly RULE_link = 6;
	public static readonly RULE_color = 7;
	public static readonly RULE_mention = 8;
	public static readonly RULE_operation = 9;
	public static readonly literalNames: (string | null)[] = [ null, "':'", 
                                                            "'-'", "')'", 
                                                            "'('", "'/'", 
                                                            "'@'", "'+'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "SAYS", "SHOUTS", 
                                                             "WORD", "WHITESPACE", 
                                                             "NEWLINE", 
                                                             "TEXT", "NUMBER" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"chat", "line", "message", "name", "command", "emoticon", "link", "color", 
		"mention", "operation",
	];
	public get grammarFileName(): string { return "testGrammar.g4"; }
	public get literalNames(): (string | null)[] { return testGrammarParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return testGrammarParser.symbolicNames; }
	public get ruleNames(): string[] { return testGrammarParser.ruleNames; }
	public get serializedATN(): number[] { return testGrammarParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, testGrammarParser._ATN, testGrammarParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public chat(): ChatContext {
		let localctx: ChatContext = new ChatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, testGrammarParser.RULE_chat);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 21;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 20;
				this.line();
				}
				}
				this.state = 23;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===10);
			this.state = 25;
			this.match(testGrammarParser.EOF);
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
	public line(): LineContext {
		let localctx: LineContext = new LineContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, testGrammarParser.RULE_line);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 27;
			this.name();
			this.state = 28;
			this.command();
			this.state = 29;
			this.message();
			this.state = 30;
			this.match(testGrammarParser.NEWLINE);
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
	public message(): MessageContext {
		let localctx: MessageContext = new MessageContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, testGrammarParser.RULE_message);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 38;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 38;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 1:
						{
						this.state = 32;
						this.emoticon();
						}
						break;
					case 13:
						{
						this.state = 33;
						this.link();
						}
						break;
					case 5:
						{
						this.state = 34;
						this.color();
						}
						break;
					case 6:
						{
						this.state = 35;
						this.mention();
						}
						break;
					case 10:
						{
						this.state = 36;
						this.match(testGrammarParser.WORD);
						}
						break;
					case 11:
						{
						this.state = 37;
						this.match(testGrammarParser.WHITESPACE);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 40;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public name(): NameContext {
		let localctx: NameContext = new NameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, testGrammarParser.RULE_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 42;
			this.match(testGrammarParser.WORD);
			this.state = 43;
			this.match(testGrammarParser.WHITESPACE);
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
	public command(): CommandContext {
		let localctx: CommandContext = new CommandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, testGrammarParser.RULE_command);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 45;
			_la = this._input.LA(1);
			if(!(_la===8 || _la===9)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 46;
			this.match(testGrammarParser.T__0);
			this.state = 47;
			this.match(testGrammarParser.WHITESPACE);
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
	public emoticon(): EmoticonContext {
		let localctx: EmoticonContext = new EmoticonContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, testGrammarParser.RULE_emoticon);
		let _la: number;
		try {
			this.state = 59;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 49;
				this.match(testGrammarParser.T__0);
				this.state = 51;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2) {
					{
					this.state = 50;
					this.match(testGrammarParser.T__1);
					}
				}

				this.state = 53;
				this.match(testGrammarParser.T__2);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 54;
				this.match(testGrammarParser.T__0);
				this.state = 56;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2) {
					{
					this.state = 55;
					this.match(testGrammarParser.T__1);
					}
				}

				this.state = 58;
				this.match(testGrammarParser.T__3);
				}
				break;
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
	public link(): LinkContext {
		let localctx: LinkContext = new LinkContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, testGrammarParser.RULE_link);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 61;
			this.match(testGrammarParser.TEXT);
			this.state = 62;
			this.match(testGrammarParser.TEXT);
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
	public color(): ColorContext {
		let localctx: ColorContext = new ColorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, testGrammarParser.RULE_color);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 64;
			this.match(testGrammarParser.T__4);
			this.state = 65;
			this.match(testGrammarParser.WORD);
			this.state = 66;
			this.match(testGrammarParser.T__4);
			this.state = 67;
			this.message();
			this.state = 68;
			this.match(testGrammarParser.T__4);
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
	public mention(): MentionContext {
		let localctx: MentionContext = new MentionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, testGrammarParser.RULE_mention);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 70;
			this.match(testGrammarParser.T__5);
			this.state = 71;
			this.match(testGrammarParser.WORD);
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
	public operation(): OperationContext {
		let localctx: OperationContext = new OperationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, testGrammarParser.RULE_operation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 73;
			this.match(testGrammarParser.NUMBER);
			this.state = 74;
			this.match(testGrammarParser.T__6);
			this.state = 75;
			this.match(testGrammarParser.NUMBER);
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

	public static readonly _serializedATN: number[] = [4,1,14,78,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,
	0,4,0,22,8,0,11,0,12,0,23,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,
	2,1,2,4,2,39,8,2,11,2,12,2,40,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,3,5,52,
	8,5,1,5,1,5,1,5,3,5,57,8,5,1,5,3,5,60,8,5,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,
	7,1,7,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,0,0,10,0,2,4,6,8,10,12,14,16,18,0,
	1,1,0,8,9,77,0,21,1,0,0,0,2,27,1,0,0,0,4,38,1,0,0,0,6,42,1,0,0,0,8,45,1,
	0,0,0,10,59,1,0,0,0,12,61,1,0,0,0,14,64,1,0,0,0,16,70,1,0,0,0,18,73,1,0,
	0,0,20,22,3,2,1,0,21,20,1,0,0,0,22,23,1,0,0,0,23,21,1,0,0,0,23,24,1,0,0,
	0,24,25,1,0,0,0,25,26,5,0,0,1,26,1,1,0,0,0,27,28,3,6,3,0,28,29,3,8,4,0,
	29,30,3,4,2,0,30,31,5,12,0,0,31,3,1,0,0,0,32,39,3,10,5,0,33,39,3,12,6,0,
	34,39,3,14,7,0,35,39,3,16,8,0,36,39,5,10,0,0,37,39,5,11,0,0,38,32,1,0,0,
	0,38,33,1,0,0,0,38,34,1,0,0,0,38,35,1,0,0,0,38,36,1,0,0,0,38,37,1,0,0,0,
	39,40,1,0,0,0,40,38,1,0,0,0,40,41,1,0,0,0,41,5,1,0,0,0,42,43,5,10,0,0,43,
	44,5,11,0,0,44,7,1,0,0,0,45,46,7,0,0,0,46,47,5,1,0,0,47,48,5,11,0,0,48,
	9,1,0,0,0,49,51,5,1,0,0,50,52,5,2,0,0,51,50,1,0,0,0,51,52,1,0,0,0,52,53,
	1,0,0,0,53,60,5,3,0,0,54,56,5,1,0,0,55,57,5,2,0,0,56,55,1,0,0,0,56,57,1,
	0,0,0,57,58,1,0,0,0,58,60,5,4,0,0,59,49,1,0,0,0,59,54,1,0,0,0,60,11,1,0,
	0,0,61,62,5,13,0,0,62,63,5,13,0,0,63,13,1,0,0,0,64,65,5,5,0,0,65,66,5,10,
	0,0,66,67,5,5,0,0,67,68,3,4,2,0,68,69,5,5,0,0,69,15,1,0,0,0,70,71,5,6,0,
	0,71,72,5,10,0,0,72,17,1,0,0,0,73,74,5,14,0,0,74,75,5,7,0,0,75,76,5,14,
	0,0,76,19,1,0,0,0,6,23,38,40,51,56,59];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!testGrammarParser.__ATN) {
			testGrammarParser.__ATN = new ATNDeserializer().deserialize(testGrammarParser._serializedATN);
		}

		return testGrammarParser.__ATN;
	}


	static DecisionsToDFA = testGrammarParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ChatContext extends ParserRuleContext {
	constructor(parser?: testGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(testGrammarParser.EOF, 0);
	}
	public line_list(): LineContext[] {
		return this.getTypedRuleContexts(LineContext) as LineContext[];
	}
	public line(i: number): LineContext {
		return this.getTypedRuleContext(LineContext, i) as LineContext;
	}
    public get ruleIndex(): number {
    	return testGrammarParser.RULE_chat;
	}
	public enterRule(listener: testGrammarListener): void {
	    if(listener.enterChat) {
	 		listener.enterChat(this);
		}
	}
	public exitRule(listener: testGrammarListener): void {
	    if(listener.exitChat) {
	 		listener.exitChat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: testGrammarVisitor<Result>): Result {
		if (visitor.visitChat) {
			return visitor.visitChat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LineContext extends ParserRuleContext {
	constructor(parser?: testGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
	public command(): CommandContext {
		return this.getTypedRuleContext(CommandContext, 0) as CommandContext;
	}
	public message(): MessageContext {
		return this.getTypedRuleContext(MessageContext, 0) as MessageContext;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(testGrammarParser.NEWLINE, 0);
	}
    public get ruleIndex(): number {
    	return testGrammarParser.RULE_line;
	}
	public enterRule(listener: testGrammarListener): void {
	    if(listener.enterLine) {
	 		listener.enterLine(this);
		}
	}
	public exitRule(listener: testGrammarListener): void {
	    if(listener.exitLine) {
	 		listener.exitLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: testGrammarVisitor<Result>): Result {
		if (visitor.visitLine) {
			return visitor.visitLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MessageContext extends ParserRuleContext {
	constructor(parser?: testGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public emoticon_list(): EmoticonContext[] {
		return this.getTypedRuleContexts(EmoticonContext) as EmoticonContext[];
	}
	public emoticon(i: number): EmoticonContext {
		return this.getTypedRuleContext(EmoticonContext, i) as EmoticonContext;
	}
	public link_list(): LinkContext[] {
		return this.getTypedRuleContexts(LinkContext) as LinkContext[];
	}
	public link(i: number): LinkContext {
		return this.getTypedRuleContext(LinkContext, i) as LinkContext;
	}
	public color_list(): ColorContext[] {
		return this.getTypedRuleContexts(ColorContext) as ColorContext[];
	}
	public color(i: number): ColorContext {
		return this.getTypedRuleContext(ColorContext, i) as ColorContext;
	}
	public mention_list(): MentionContext[] {
		return this.getTypedRuleContexts(MentionContext) as MentionContext[];
	}
	public mention(i: number): MentionContext {
		return this.getTypedRuleContext(MentionContext, i) as MentionContext;
	}
	public WORD_list(): TerminalNode[] {
	    	return this.getTokens(testGrammarParser.WORD);
	}
	public WORD(i: number): TerminalNode {
		return this.getToken(testGrammarParser.WORD, i);
	}
	public WHITESPACE_list(): TerminalNode[] {
	    	return this.getTokens(testGrammarParser.WHITESPACE);
	}
	public WHITESPACE(i: number): TerminalNode {
		return this.getToken(testGrammarParser.WHITESPACE, i);
	}
    public get ruleIndex(): number {
    	return testGrammarParser.RULE_message;
	}
	public enterRule(listener: testGrammarListener): void {
	    if(listener.enterMessage) {
	 		listener.enterMessage(this);
		}
	}
	public exitRule(listener: testGrammarListener): void {
	    if(listener.exitMessage) {
	 		listener.exitMessage(this);
		}
	}
	// @Override
	public accept<Result>(visitor: testGrammarVisitor<Result>): Result {
		if (visitor.visitMessage) {
			return visitor.visitMessage(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameContext extends ParserRuleContext {
	constructor(parser?: testGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WORD(): TerminalNode {
		return this.getToken(testGrammarParser.WORD, 0);
	}
	public WHITESPACE(): TerminalNode {
		return this.getToken(testGrammarParser.WHITESPACE, 0);
	}
    public get ruleIndex(): number {
    	return testGrammarParser.RULE_name;
	}
	public enterRule(listener: testGrammarListener): void {
	    if(listener.enterName) {
	 		listener.enterName(this);
		}
	}
	public exitRule(listener: testGrammarListener): void {
	    if(listener.exitName) {
	 		listener.exitName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: testGrammarVisitor<Result>): Result {
		if (visitor.visitName) {
			return visitor.visitName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommandContext extends ParserRuleContext {
	constructor(parser?: testGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHITESPACE(): TerminalNode {
		return this.getToken(testGrammarParser.WHITESPACE, 0);
	}
	public SAYS(): TerminalNode {
		return this.getToken(testGrammarParser.SAYS, 0);
	}
	public SHOUTS(): TerminalNode {
		return this.getToken(testGrammarParser.SHOUTS, 0);
	}
    public get ruleIndex(): number {
    	return testGrammarParser.RULE_command;
	}
	public enterRule(listener: testGrammarListener): void {
	    if(listener.enterCommand) {
	 		listener.enterCommand(this);
		}
	}
	public exitRule(listener: testGrammarListener): void {
	    if(listener.exitCommand) {
	 		listener.exitCommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: testGrammarVisitor<Result>): Result {
		if (visitor.visitCommand) {
			return visitor.visitCommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmoticonContext extends ParserRuleContext {
	constructor(parser?: testGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return testGrammarParser.RULE_emoticon;
	}
	public enterRule(listener: testGrammarListener): void {
	    if(listener.enterEmoticon) {
	 		listener.enterEmoticon(this);
		}
	}
	public exitRule(listener: testGrammarListener): void {
	    if(listener.exitEmoticon) {
	 		listener.exitEmoticon(this);
		}
	}
	// @Override
	public accept<Result>(visitor: testGrammarVisitor<Result>): Result {
		if (visitor.visitEmoticon) {
			return visitor.visitEmoticon(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LinkContext extends ParserRuleContext {
	constructor(parser?: testGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TEXT_list(): TerminalNode[] {
	    	return this.getTokens(testGrammarParser.TEXT);
	}
	public TEXT(i: number): TerminalNode {
		return this.getToken(testGrammarParser.TEXT, i);
	}
    public get ruleIndex(): number {
    	return testGrammarParser.RULE_link;
	}
	public enterRule(listener: testGrammarListener): void {
	    if(listener.enterLink) {
	 		listener.enterLink(this);
		}
	}
	public exitRule(listener: testGrammarListener): void {
	    if(listener.exitLink) {
	 		listener.exitLink(this);
		}
	}
	// @Override
	public accept<Result>(visitor: testGrammarVisitor<Result>): Result {
		if (visitor.visitLink) {
			return visitor.visitLink(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColorContext extends ParserRuleContext {
	constructor(parser?: testGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WORD(): TerminalNode {
		return this.getToken(testGrammarParser.WORD, 0);
	}
	public message(): MessageContext {
		return this.getTypedRuleContext(MessageContext, 0) as MessageContext;
	}
    public get ruleIndex(): number {
    	return testGrammarParser.RULE_color;
	}
	public enterRule(listener: testGrammarListener): void {
	    if(listener.enterColor) {
	 		listener.enterColor(this);
		}
	}
	public exitRule(listener: testGrammarListener): void {
	    if(listener.exitColor) {
	 		listener.exitColor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: testGrammarVisitor<Result>): Result {
		if (visitor.visitColor) {
			return visitor.visitColor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MentionContext extends ParserRuleContext {
	constructor(parser?: testGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WORD(): TerminalNode {
		return this.getToken(testGrammarParser.WORD, 0);
	}
    public get ruleIndex(): number {
    	return testGrammarParser.RULE_mention;
	}
	public enterRule(listener: testGrammarListener): void {
	    if(listener.enterMention) {
	 		listener.enterMention(this);
		}
	}
	public exitRule(listener: testGrammarListener): void {
	    if(listener.exitMention) {
	 		listener.exitMention(this);
		}
	}
	// @Override
	public accept<Result>(visitor: testGrammarVisitor<Result>): Result {
		if (visitor.visitMention) {
			return visitor.visitMention(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperationContext extends ParserRuleContext {
	constructor(parser?: testGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NUMBER_list(): TerminalNode[] {
	    	return this.getTokens(testGrammarParser.NUMBER);
	}
	public NUMBER(i: number): TerminalNode {
		return this.getToken(testGrammarParser.NUMBER, i);
	}
    public get ruleIndex(): number {
    	return testGrammarParser.RULE_operation;
	}
	public enterRule(listener: testGrammarListener): void {
	    if(listener.enterOperation) {
	 		listener.enterOperation(this);
		}
	}
	public exitRule(listener: testGrammarListener): void {
	    if(listener.exitOperation) {
	 		listener.exitOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: testGrammarVisitor<Result>): Result {
		if (visitor.visitOperation) {
			return visitor.visitOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
