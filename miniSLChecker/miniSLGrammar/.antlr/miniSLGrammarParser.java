// Generated from c://Users//frizi//Documents//GitHub//prgTesi//miniSLChecker//miniSLGrammar//miniSLGrammar.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class miniSLGrammarParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, ID=30, NUMBER=31, STRING=32, 
		NEWLINE=33, LINECOMMENTS=34, WS=35, BLOCKCOMMENTS=36;
	public static final int
		RULE_prg = 0, RULE_init = 1, RULE_serviceDecl = 2, RULE_functionDecl = 3, 
		RULE_stm = 4, RULE_serviceCall = 5, RULE_functionCall = 6, RULE_expOrCall = 7, 
		RULE_exp = 8, RULE_formalParams = 9;
	private static String[] makeRuleNames() {
		return new String[] {
			"prg", "init", "serviceDecl", "functionDecl", "stm", "serviceCall", "functionCall", 
			"expOrCall", "exp", "formalParams"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'('", "')'", "'=>'", "'{'", "'}'", "'service'", "':'", "'void'", 
			"'->'", "';'", "'fn'", "'if'", "'else'", "'for'", "'in'", "','", "'call'", 
			"'+'", "'-'", "'*'", "'/'", "'&&'", "'=='", "'!='", "'<'", "'<='", "'>'", 
			"'>='", "'.'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, "ID", "NUMBER", "STRING", "NEWLINE", 
			"LINECOMMENTS", "WS", "BLOCKCOMMENTS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "miniSLGrammar.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public miniSLGrammarParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PrgContext extends ParserRuleContext {
		public InitContext init() {
			return getRuleContext(InitContext.class,0);
		}
		public List<ServiceDeclContext> serviceDecl() {
			return getRuleContexts(ServiceDeclContext.class);
		}
		public ServiceDeclContext serviceDecl(int i) {
			return getRuleContext(ServiceDeclContext.class,i);
		}
		public List<FunctionDeclContext> functionDecl() {
			return getRuleContexts(FunctionDeclContext.class);
		}
		public FunctionDeclContext functionDecl(int i) {
			return getRuleContext(FunctionDeclContext.class,i);
		}
		public PrgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prg; }
	}

	public final PrgContext prg() throws RecognitionException {
		PrgContext _localctx = new PrgContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_prg);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(23);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__5) {
				{
				{
				setState(20);
				serviceDecl();
				}
				}
				setState(25);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(29);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__10) {
				{
				{
				setState(26);
				functionDecl();
				}
				}
				setState(31);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(32);
			init();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InitContext extends ParserRuleContext {
		public StmContext stm() {
			return getRuleContext(StmContext.class,0);
		}
		public FormalParamsContext formalParams() {
			return getRuleContext(FormalParamsContext.class,0);
		}
		public InitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_init; }
	}

	public final InitContext init() throws RecognitionException {
		InitContext _localctx = new InitContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_init);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(34);
			match(T__0);
			setState(36);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ID) {
				{
				setState(35);
				formalParams();
				}
			}

			setState(38);
			match(T__1);
			setState(39);
			match(T__2);
			setState(40);
			match(T__3);
			setState(41);
			stm();
			setState(42);
			match(T__4);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ServiceDeclContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(miniSLGrammarParser.ID, 0); }
		public ServiceDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_serviceDecl; }
	}

	public final ServiceDeclContext serviceDecl() throws RecognitionException {
		ServiceDeclContext _localctx = new ServiceDeclContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_serviceDecl);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(44);
			match(T__5);
			setState(45);
			match(ID);
			setState(46);
			match(T__6);
			setState(47);
			match(T__0);
			setState(48);
			match(T__7);
			setState(49);
			match(T__1);
			setState(50);
			match(T__8);
			setState(51);
			match(T__7);
			setState(52);
			match(T__9);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionDeclContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(miniSLGrammarParser.ID, 0); }
		public StmContext stm() {
			return getRuleContext(StmContext.class,0);
		}
		public FormalParamsContext formalParams() {
			return getRuleContext(FormalParamsContext.class,0);
		}
		public FunctionDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionDecl; }
	}

	public final FunctionDeclContext functionDecl() throws RecognitionException {
		FunctionDeclContext _localctx = new FunctionDeclContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_functionDecl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(54);
			match(T__10);
			setState(55);
			match(ID);
			setState(56);
			match(T__0);
			setState(58);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ID) {
				{
				setState(57);
				formalParams();
				}
			}

			setState(60);
			match(T__1);
			setState(61);
			match(T__3);
			setState(62);
			stm();
			setState(63);
			match(T__4);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StmContext extends ParserRuleContext {
		public ServiceCallContext serviceCall() {
			return getRuleContext(ServiceCallContext.class,0);
		}
		public ExpOrCallContext expOrCall() {
			return getRuleContext(ExpOrCallContext.class,0);
		}
		public List<StmContext> stm() {
			return getRuleContexts(StmContext.class);
		}
		public StmContext stm(int i) {
			return getRuleContext(StmContext.class,i);
		}
		public TerminalNode ID() { return getToken(miniSLGrammarParser.ID, 0); }
		public TerminalNode NUMBER() { return getToken(miniSLGrammarParser.NUMBER, 0); }
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public FunctionCallContext functionCall() {
			return getRuleContext(FunctionCallContext.class,0);
		}
		public StmContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stm; }
	}

	public final StmContext stm() throws RecognitionException {
		StmContext _localctx = new StmContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_stm);
		try {
			setState(93);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__16:
				enterOuterAlt(_localctx, 1);
				{
				setState(65);
				serviceCall();
				}
				break;
			case T__11:
				enterOuterAlt(_localctx, 2);
				{
				setState(66);
				match(T__11);
				setState(67);
				match(T__0);
				setState(68);
				expOrCall();
				setState(69);
				match(T__1);
				setState(70);
				match(T__3);
				setState(71);
				stm();
				setState(72);
				match(T__4);
				setState(73);
				match(T__12);
				setState(74);
				match(T__3);
				setState(75);
				stm();
				setState(76);
				match(T__4);
				}
				break;
			case T__13:
				enterOuterAlt(_localctx, 3);
				{
				setState(78);
				match(T__13);
				setState(79);
				match(T__0);
				setState(80);
				match(ID);
				setState(81);
				match(T__14);
				setState(82);
				match(T__0);
				setState(83);
				match(NUMBER);
				setState(84);
				match(T__15);
				setState(85);
				exp(0);
				setState(86);
				match(T__1);
				setState(87);
				match(T__1);
				setState(88);
				match(T__3);
				setState(89);
				stm();
				setState(90);
				match(T__4);
				}
				break;
			case ID:
				enterOuterAlt(_localctx, 4);
				{
				setState(92);
				functionCall();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ServiceCallContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(miniSLGrammarParser.ID, 0); }
		public List<ExpContext> exp() {
			return getRuleContexts(ExpContext.class);
		}
		public ExpContext exp(int i) {
			return getRuleContext(ExpContext.class,i);
		}
		public StmContext stm() {
			return getRuleContext(StmContext.class,0);
		}
		public ServiceCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_serviceCall; }
	}

	public final ServiceCallContext serviceCall() throws RecognitionException {
		ServiceCallContext _localctx = new ServiceCallContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_serviceCall);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(95);
			match(T__16);
			setState(96);
			match(ID);
			setState(97);
			match(T__0);
			setState(106);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 7516192768L) != 0)) {
				{
				setState(98);
				exp(0);
				setState(103);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__15) {
					{
					{
					setState(99);
					match(T__15);
					setState(100);
					exp(0);
					}
					}
					setState(105);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(108);
			match(T__1);
			setState(110);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1073893376L) != 0)) {
				{
				setState(109);
				stm();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionCallContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(miniSLGrammarParser.ID, 0); }
		public List<ExpContext> exp() {
			return getRuleContexts(ExpContext.class);
		}
		public ExpContext exp(int i) {
			return getRuleContext(ExpContext.class,i);
		}
		public FunctionCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionCall; }
	}

	public final FunctionCallContext functionCall() throws RecognitionException {
		FunctionCallContext _localctx = new FunctionCallContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_functionCall);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(112);
			match(ID);
			setState(113);
			match(T__0);
			setState(122);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 7516192768L) != 0)) {
				{
				setState(114);
				exp(0);
				setState(119);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__15) {
					{
					{
					setState(115);
					match(T__15);
					setState(116);
					exp(0);
					}
					}
					setState(121);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(124);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpOrCallContext extends ParserRuleContext {
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public ServiceCallContext serviceCall() {
			return getRuleContext(ServiceCallContext.class,0);
		}
		public ExpOrCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expOrCall; }
	}

	public final ExpOrCallContext expOrCall() throws RecognitionException {
		ExpOrCallContext _localctx = new ExpOrCallContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_expOrCall);
		try {
			setState(128);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
			case NUMBER:
			case STRING:
				enterOuterAlt(_localctx, 1);
				{
				setState(126);
				exp(0);
				}
				break;
			case T__16:
				enterOuterAlt(_localctx, 2);
				{
				setState(127);
				serviceCall();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpContext extends ParserRuleContext {
		public ExpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exp; }
	 
		public ExpContext() { }
		public void copyFrom(ExpContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CallFunContext extends ExpContext {
		public List<TerminalNode> ID() { return getTokens(miniSLGrammarParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(miniSLGrammarParser.ID, i);
		}
		public CallFunContext(ExpContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class BinExpContext extends ExpContext {
		public List<ExpContext> exp() {
			return getRuleContexts(ExpContext.class);
		}
		public ExpContext exp(int i) {
			return getRuleContext(ExpContext.class,i);
		}
		public BinExpContext(ExpContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DerExpContext extends ExpContext {
		public TerminalNode ID() { return getToken(miniSLGrammarParser.ID, 0); }
		public DerExpContext(ExpContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ValExpContext extends ExpContext {
		public TerminalNode NUMBER() { return getToken(miniSLGrammarParser.NUMBER, 0); }
		public ValExpContext(ExpContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class StringExpContext extends ExpContext {
		public TerminalNode STRING() { return getToken(miniSLGrammarParser.STRING, 0); }
		public StringExpContext(ExpContext ctx) { copyFrom(ctx); }
	}

	public final ExpContext exp() throws RecognitionException {
		return exp(0);
	}

	private ExpContext exp(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpContext _localctx = new ExpContext(_ctx, _parentState);
		ExpContext _prevctx = _localctx;
		int _startState = 16;
		enterRecursionRule(_localctx, 16, RULE_exp, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(137);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
			case 1:
				{
				_localctx = new CallFunContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(131);
				match(ID);
				setState(132);
				match(T__28);
				setState(133);
				match(ID);
				}
				break;
			case 2:
				{
				_localctx = new StringExpContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(134);
				match(STRING);
				}
				break;
			case 3:
				{
				_localctx = new ValExpContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(135);
				match(NUMBER);
				}
				break;
			case 4:
				{
				_localctx = new DerExpContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(136);
				match(ID);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(144);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new BinExpContext(new ExpContext(_parentctx, _parentState));
					pushNewRecursionContext(_localctx, _startState, RULE_exp);
					setState(139);
					if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
					setState(140);
					_la = _input.LA(1);
					if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 536608768L) != 0)) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(141);
					exp(6);
					}
					} 
				}
				setState(146);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FormalParamsContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(miniSLGrammarParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(miniSLGrammarParser.ID, i);
		}
		public FormalParamsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formalParams; }
	}

	public final FormalParamsContext formalParams() throws RecognitionException {
		FormalParamsContext _localctx = new FormalParamsContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_formalParams);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(147);
			match(ID);
			setState(152);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__15) {
				{
				{
				setState(148);
				match(T__15);
				setState(149);
				match(ID);
				}
				}
				setState(154);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 8:
			return exp_sempred((ExpContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean exp_sempred(ExpContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 5);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001$\u009c\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0001\u0000\u0005\u0000\u0016\b\u0000\n\u0000"+
		"\f\u0000\u0019\t\u0000\u0001\u0000\u0005\u0000\u001c\b\u0000\n\u0000\f"+
		"\u0000\u001f\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0003"+
		"\u0001%\b\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003;\b\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0003\u0004^\b\u0004\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0005\u0005f\b"+
		"\u0005\n\u0005\f\u0005i\t\u0005\u0003\u0005k\b\u0005\u0001\u0005\u0001"+
		"\u0005\u0003\u0005o\b\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0005\u0006v\b\u0006\n\u0006\f\u0006y\t\u0006\u0003"+
		"\u0006{\b\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0003"+
		"\u0007\u0081\b\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0003\b\u008a\b\b\u0001\b\u0001\b\u0001\b\u0005\b\u008f\b\b\n\b\f\b"+
		"\u0092\t\b\u0001\t\u0001\t\u0001\t\u0005\t\u0097\b\t\n\t\f\t\u009a\t\t"+
		"\u0001\t\u0000\u0001\u0010\n\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010"+
		"\u0012\u0000\u0001\u0001\u0000\u0012\u001c\u00a3\u0000\u0017\u0001\u0000"+
		"\u0000\u0000\u0002\"\u0001\u0000\u0000\u0000\u0004,\u0001\u0000\u0000"+
		"\u0000\u00066\u0001\u0000\u0000\u0000\b]\u0001\u0000\u0000\u0000\n_\u0001"+
		"\u0000\u0000\u0000\fp\u0001\u0000\u0000\u0000\u000e\u0080\u0001\u0000"+
		"\u0000\u0000\u0010\u0089\u0001\u0000\u0000\u0000\u0012\u0093\u0001\u0000"+
		"\u0000\u0000\u0014\u0016\u0003\u0004\u0002\u0000\u0015\u0014\u0001\u0000"+
		"\u0000\u0000\u0016\u0019\u0001\u0000\u0000\u0000\u0017\u0015\u0001\u0000"+
		"\u0000\u0000\u0017\u0018\u0001\u0000\u0000\u0000\u0018\u001d\u0001\u0000"+
		"\u0000\u0000\u0019\u0017\u0001\u0000\u0000\u0000\u001a\u001c\u0003\u0006"+
		"\u0003\u0000\u001b\u001a\u0001\u0000\u0000\u0000\u001c\u001f\u0001\u0000"+
		"\u0000\u0000\u001d\u001b\u0001\u0000\u0000\u0000\u001d\u001e\u0001\u0000"+
		"\u0000\u0000\u001e \u0001\u0000\u0000\u0000\u001f\u001d\u0001\u0000\u0000"+
		"\u0000 !\u0003\u0002\u0001\u0000!\u0001\u0001\u0000\u0000\u0000\"$\u0005"+
		"\u0001\u0000\u0000#%\u0003\u0012\t\u0000$#\u0001\u0000\u0000\u0000$%\u0001"+
		"\u0000\u0000\u0000%&\u0001\u0000\u0000\u0000&\'\u0005\u0002\u0000\u0000"+
		"\'(\u0005\u0003\u0000\u0000()\u0005\u0004\u0000\u0000)*\u0003\b\u0004"+
		"\u0000*+\u0005\u0005\u0000\u0000+\u0003\u0001\u0000\u0000\u0000,-\u0005"+
		"\u0006\u0000\u0000-.\u0005\u001e\u0000\u0000./\u0005\u0007\u0000\u0000"+
		"/0\u0005\u0001\u0000\u000001\u0005\b\u0000\u000012\u0005\u0002\u0000\u0000"+
		"23\u0005\t\u0000\u000034\u0005\b\u0000\u000045\u0005\n\u0000\u00005\u0005"+
		"\u0001\u0000\u0000\u000067\u0005\u000b\u0000\u000078\u0005\u001e\u0000"+
		"\u00008:\u0005\u0001\u0000\u00009;\u0003\u0012\t\u0000:9\u0001\u0000\u0000"+
		"\u0000:;\u0001\u0000\u0000\u0000;<\u0001\u0000\u0000\u0000<=\u0005\u0002"+
		"\u0000\u0000=>\u0005\u0004\u0000\u0000>?\u0003\b\u0004\u0000?@\u0005\u0005"+
		"\u0000\u0000@\u0007\u0001\u0000\u0000\u0000A^\u0003\n\u0005\u0000BC\u0005"+
		"\f\u0000\u0000CD\u0005\u0001\u0000\u0000DE\u0003\u000e\u0007\u0000EF\u0005"+
		"\u0002\u0000\u0000FG\u0005\u0004\u0000\u0000GH\u0003\b\u0004\u0000HI\u0005"+
		"\u0005\u0000\u0000IJ\u0005\r\u0000\u0000JK\u0005\u0004\u0000\u0000KL\u0003"+
		"\b\u0004\u0000LM\u0005\u0005\u0000\u0000M^\u0001\u0000\u0000\u0000NO\u0005"+
		"\u000e\u0000\u0000OP\u0005\u0001\u0000\u0000PQ\u0005\u001e\u0000\u0000"+
		"QR\u0005\u000f\u0000\u0000RS\u0005\u0001\u0000\u0000ST\u0005\u001f\u0000"+
		"\u0000TU\u0005\u0010\u0000\u0000UV\u0003\u0010\b\u0000VW\u0005\u0002\u0000"+
		"\u0000WX\u0005\u0002\u0000\u0000XY\u0005\u0004\u0000\u0000YZ\u0003\b\u0004"+
		"\u0000Z[\u0005\u0005\u0000\u0000[^\u0001\u0000\u0000\u0000\\^\u0003\f"+
		"\u0006\u0000]A\u0001\u0000\u0000\u0000]B\u0001\u0000\u0000\u0000]N\u0001"+
		"\u0000\u0000\u0000]\\\u0001\u0000\u0000\u0000^\t\u0001\u0000\u0000\u0000"+
		"_`\u0005\u0011\u0000\u0000`a\u0005\u001e\u0000\u0000aj\u0005\u0001\u0000"+
		"\u0000bg\u0003\u0010\b\u0000cd\u0005\u0010\u0000\u0000df\u0003\u0010\b"+
		"\u0000ec\u0001\u0000\u0000\u0000fi\u0001\u0000\u0000\u0000ge\u0001\u0000"+
		"\u0000\u0000gh\u0001\u0000\u0000\u0000hk\u0001\u0000\u0000\u0000ig\u0001"+
		"\u0000\u0000\u0000jb\u0001\u0000\u0000\u0000jk\u0001\u0000\u0000\u0000"+
		"kl\u0001\u0000\u0000\u0000ln\u0005\u0002\u0000\u0000mo\u0003\b\u0004\u0000"+
		"nm\u0001\u0000\u0000\u0000no\u0001\u0000\u0000\u0000o\u000b\u0001\u0000"+
		"\u0000\u0000pq\u0005\u001e\u0000\u0000qz\u0005\u0001\u0000\u0000rw\u0003"+
		"\u0010\b\u0000st\u0005\u0010\u0000\u0000tv\u0003\u0010\b\u0000us\u0001"+
		"\u0000\u0000\u0000vy\u0001\u0000\u0000\u0000wu\u0001\u0000\u0000\u0000"+
		"wx\u0001\u0000\u0000\u0000x{\u0001\u0000\u0000\u0000yw\u0001\u0000\u0000"+
		"\u0000zr\u0001\u0000\u0000\u0000z{\u0001\u0000\u0000\u0000{|\u0001\u0000"+
		"\u0000\u0000|}\u0005\u0002\u0000\u0000}\r\u0001\u0000\u0000\u0000~\u0081"+
		"\u0003\u0010\b\u0000\u007f\u0081\u0003\n\u0005\u0000\u0080~\u0001\u0000"+
		"\u0000\u0000\u0080\u007f\u0001\u0000\u0000\u0000\u0081\u000f\u0001\u0000"+
		"\u0000\u0000\u0082\u0083\u0006\b\uffff\uffff\u0000\u0083\u0084\u0005\u001e"+
		"\u0000\u0000\u0084\u0085\u0005\u001d\u0000\u0000\u0085\u008a\u0005\u001e"+
		"\u0000\u0000\u0086\u008a\u0005 \u0000\u0000\u0087\u008a\u0005\u001f\u0000"+
		"\u0000\u0088\u008a\u0005\u001e\u0000\u0000\u0089\u0082\u0001\u0000\u0000"+
		"\u0000\u0089\u0086\u0001\u0000\u0000\u0000\u0089\u0087\u0001\u0000\u0000"+
		"\u0000\u0089\u0088\u0001\u0000\u0000\u0000\u008a\u0090\u0001\u0000\u0000"+
		"\u0000\u008b\u008c\n\u0005\u0000\u0000\u008c\u008d\u0007\u0000\u0000\u0000"+
		"\u008d\u008f\u0003\u0010\b\u0006\u008e\u008b\u0001\u0000\u0000\u0000\u008f"+
		"\u0092\u0001\u0000\u0000\u0000\u0090\u008e\u0001\u0000\u0000\u0000\u0090"+
		"\u0091\u0001\u0000\u0000\u0000\u0091\u0011\u0001\u0000\u0000\u0000\u0092"+
		"\u0090\u0001\u0000\u0000\u0000\u0093\u0098\u0005\u001e\u0000\u0000\u0094"+
		"\u0095\u0005\u0010\u0000\u0000\u0095\u0097\u0005\u001e\u0000\u0000\u0096"+
		"\u0094\u0001\u0000\u0000\u0000\u0097\u009a\u0001\u0000\u0000\u0000\u0098"+
		"\u0096\u0001\u0000\u0000\u0000\u0098\u0099\u0001\u0000\u0000\u0000\u0099"+
		"\u0013\u0001\u0000\u0000\u0000\u009a\u0098\u0001\u0000\u0000\u0000\u000e"+
		"\u0017\u001d$:]gjnwz\u0080\u0089\u0090\u0098";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}