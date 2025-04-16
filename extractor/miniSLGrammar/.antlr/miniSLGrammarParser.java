// Generated from c://Users//frizi//Documents//GitHub//prgTesi//extractor//miniSLGrammar//miniSLGrammar.g4 by ANTLR 4.13.1
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
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, ID=31, NUMBER=32, 
		STRING=33, NEWLINE=34, LINECOMMENTS=35, WS=36, BLOCKCOMMENTS=37;
	public static final int
		RULE_prg = 0, RULE_init = 1, RULE_serviceDecl = 2, RULE_stm = 3, RULE_serviceCall = 4, 
		RULE_expOrCall = 5, RULE_exp = 6, RULE_formalParams = 7;
	private static String[] makeRuleNames() {
		return new String[] {
			"prg", "init", "serviceDecl", "stm", "serviceCall", "expOrCall", "exp", 
			"formalParams"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'('", "')'", "'=>'", "'{'", "'}'", "'service'", "':'", "'void'", 
			"'->'", "';'", "'if'", "'else'", "'for'", "'in'", "'range'", "','", "'call'", 
			"'+'", "'-'", "'*'", "'/'", "'&&'", "'||'", "'=='", "'!='", "'<'", "'<='", 
			"'>'", "'>='", "'.'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, "ID", "NUMBER", "STRING", "NEWLINE", 
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
			setState(19);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__5) {
				{
				{
				setState(16);
				serviceDecl();
				}
				}
				setState(21);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(22);
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
			setState(24);
			match(T__0);
			setState(26);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ID) {
				{
				setState(25);
				formalParams();
				}
			}

			setState(28);
			match(T__1);
			setState(29);
			match(T__2);
			setState(30);
			match(T__3);
			setState(31);
			stm();
			setState(32);
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
			setState(34);
			match(T__5);
			setState(35);
			match(ID);
			setState(36);
			match(T__6);
			setState(37);
			match(T__0);
			setState(38);
			match(T__7);
			setState(39);
			match(T__1);
			setState(40);
			match(T__8);
			setState(41);
			match(T__7);
			setState(42);
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
		public StmContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stm; }
	}

	public final StmContext stm() throws RecognitionException {
		StmContext _localctx = new StmContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_stm);
		int _la;
		try {
			setState(76);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__16:
				enterOuterAlt(_localctx, 1);
				{
				setState(44);
				serviceCall();
				}
				break;
			case T__10:
				enterOuterAlt(_localctx, 2);
				{
				setState(45);
				match(T__10);
				setState(46);
				match(T__0);
				setState(47);
				expOrCall();
				setState(48);
				match(T__1);
				setState(49);
				match(T__3);
				setState(50);
				stm();
				setState(51);
				match(T__4);
				setState(52);
				match(T__11);
				setState(53);
				match(T__3);
				setState(54);
				stm();
				setState(55);
				match(T__4);
				setState(57);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 141312L) != 0)) {
					{
					setState(56);
					stm();
					}
				}

				}
				break;
			case T__12:
				enterOuterAlt(_localctx, 3);
				{
				setState(59);
				match(T__12);
				setState(60);
				match(T__0);
				setState(61);
				match(ID);
				setState(62);
				match(T__13);
				setState(63);
				match(T__14);
				setState(64);
				match(T__0);
				setState(65);
				match(NUMBER);
				setState(66);
				match(T__15);
				setState(67);
				exp(0);
				setState(68);
				match(T__1);
				setState(69);
				match(T__1);
				setState(70);
				match(T__3);
				setState(71);
				stm();
				setState(72);
				match(T__4);
				setState(74);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 141312L) != 0)) {
					{
					setState(73);
					stm();
					}
				}

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
		enterRule(_localctx, 8, RULE_serviceCall);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(78);
			match(T__16);
			setState(79);
			match(ID);
			setState(80);
			match(T__0);
			setState(89);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 15032385538L) != 0)) {
				{
				setState(81);
				exp(0);
				setState(86);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__15) {
					{
					{
					setState(82);
					match(T__15);
					setState(83);
					exp(0);
					}
					}
					setState(88);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(91);
			match(T__1);
			setState(93);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 141312L) != 0)) {
				{
				setState(92);
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
		enterRule(_localctx, 10, RULE_expOrCall);
		try {
			setState(97);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
			case ID:
			case NUMBER:
			case STRING:
				enterOuterAlt(_localctx, 1);
				{
				setState(95);
				exp(0);
				}
				break;
			case T__16:
				enterOuterAlt(_localctx, 2);
				{
				setState(96);
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
	public static class ParenExpContext extends ExpContext {
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public ParenExpContext(ExpContext ctx) { copyFrom(ctx); }
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
		int _startState = 12;
		enterRecursionRule(_localctx, 12, RULE_exp, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(110);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				{
				_localctx = new ParenExpContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(100);
				match(T__0);
				setState(101);
				exp(0);
				setState(102);
				match(T__1);
				}
				break;
			case 2:
				{
				_localctx = new CallFunContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(104);
				match(ID);
				setState(105);
				match(T__29);
				setState(106);
				match(ID);
				}
				break;
			case 3:
				{
				_localctx = new StringExpContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(107);
				match(STRING);
				}
				break;
			case 4:
				{
				_localctx = new ValExpContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(108);
				match(NUMBER);
				}
				break;
			case 5:
				{
				_localctx = new DerExpContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(109);
				match(ID);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(117);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new BinExpContext(new ExpContext(_parentctx, _parentState));
					pushNewRecursionContext(_localctx, _startState, RULE_exp);
					setState(112);
					if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
					setState(113);
					_la = _input.LA(1);
					if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 1073479680L) != 0)) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(114);
					exp(7);
					}
					} 
				}
				setState(119);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
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
		enterRule(_localctx, 14, RULE_formalParams);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(120);
			match(ID);
			setState(125);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__15) {
				{
				{
				setState(121);
				match(T__15);
				setState(122);
				match(ID);
				}
				}
				setState(127);
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
		case 6:
			return exp_sempred((ExpContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean exp_sempred(ExpContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 6);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001%\u0081\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0001"+
		"\u0000\u0005\u0000\u0012\b\u0000\n\u0000\f\u0000\u0015\t\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0001\u0001\u0001\u0003\u0001\u001b\b\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003:\b\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003K\b\u0003\u0003\u0003"+
		"M\b\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0005\u0004U\b\u0004\n\u0004\f\u0004X\t\u0004\u0003\u0004"+
		"Z\b\u0004\u0001\u0004\u0001\u0004\u0003\u0004^\b\u0004\u0001\u0005\u0001"+
		"\u0005\u0003\u0005b\b\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0003\u0006o\b\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0005\u0006t\b\u0006\n\u0006\f\u0006w\t\u0006\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0005\u0007|\b\u0007\n\u0007\f\u0007\u007f\t\u0007"+
		"\u0001\u0007\u0000\u0001\f\b\u0000\u0002\u0004\u0006\b\n\f\u000e\u0000"+
		"\u0001\u0001\u0000\u0012\u001d\u0088\u0000\u0013\u0001\u0000\u0000\u0000"+
		"\u0002\u0018\u0001\u0000\u0000\u0000\u0004\"\u0001\u0000\u0000\u0000\u0006"+
		"L\u0001\u0000\u0000\u0000\bN\u0001\u0000\u0000\u0000\na\u0001\u0000\u0000"+
		"\u0000\fn\u0001\u0000\u0000\u0000\u000ex\u0001\u0000\u0000\u0000\u0010"+
		"\u0012\u0003\u0004\u0002\u0000\u0011\u0010\u0001\u0000\u0000\u0000\u0012"+
		"\u0015\u0001\u0000\u0000\u0000\u0013\u0011\u0001\u0000\u0000\u0000\u0013"+
		"\u0014\u0001\u0000\u0000\u0000\u0014\u0016\u0001\u0000\u0000\u0000\u0015"+
		"\u0013\u0001\u0000\u0000\u0000\u0016\u0017\u0003\u0002\u0001\u0000\u0017"+
		"\u0001\u0001\u0000\u0000\u0000\u0018\u001a\u0005\u0001\u0000\u0000\u0019"+
		"\u001b\u0003\u000e\u0007\u0000\u001a\u0019\u0001\u0000\u0000\u0000\u001a"+
		"\u001b\u0001\u0000\u0000\u0000\u001b\u001c\u0001\u0000\u0000\u0000\u001c"+
		"\u001d\u0005\u0002\u0000\u0000\u001d\u001e\u0005\u0003\u0000\u0000\u001e"+
		"\u001f\u0005\u0004\u0000\u0000\u001f \u0003\u0006\u0003\u0000 !\u0005"+
		"\u0005\u0000\u0000!\u0003\u0001\u0000\u0000\u0000\"#\u0005\u0006\u0000"+
		"\u0000#$\u0005\u001f\u0000\u0000$%\u0005\u0007\u0000\u0000%&\u0005\u0001"+
		"\u0000\u0000&\'\u0005\b\u0000\u0000\'(\u0005\u0002\u0000\u0000()\u0005"+
		"\t\u0000\u0000)*\u0005\b\u0000\u0000*+\u0005\n\u0000\u0000+\u0005\u0001"+
		"\u0000\u0000\u0000,M\u0003\b\u0004\u0000-.\u0005\u000b\u0000\u0000./\u0005"+
		"\u0001\u0000\u0000/0\u0003\n\u0005\u000001\u0005\u0002\u0000\u000012\u0005"+
		"\u0004\u0000\u000023\u0003\u0006\u0003\u000034\u0005\u0005\u0000\u0000"+
		"45\u0005\f\u0000\u000056\u0005\u0004\u0000\u000067\u0003\u0006\u0003\u0000"+
		"79\u0005\u0005\u0000\u00008:\u0003\u0006\u0003\u000098\u0001\u0000\u0000"+
		"\u00009:\u0001\u0000\u0000\u0000:M\u0001\u0000\u0000\u0000;<\u0005\r\u0000"+
		"\u0000<=\u0005\u0001\u0000\u0000=>\u0005\u001f\u0000\u0000>?\u0005\u000e"+
		"\u0000\u0000?@\u0005\u000f\u0000\u0000@A\u0005\u0001\u0000\u0000AB\u0005"+
		" \u0000\u0000BC\u0005\u0010\u0000\u0000CD\u0003\f\u0006\u0000DE\u0005"+
		"\u0002\u0000\u0000EF\u0005\u0002\u0000\u0000FG\u0005\u0004\u0000\u0000"+
		"GH\u0003\u0006\u0003\u0000HJ\u0005\u0005\u0000\u0000IK\u0003\u0006\u0003"+
		"\u0000JI\u0001\u0000\u0000\u0000JK\u0001\u0000\u0000\u0000KM\u0001\u0000"+
		"\u0000\u0000L,\u0001\u0000\u0000\u0000L-\u0001\u0000\u0000\u0000L;\u0001"+
		"\u0000\u0000\u0000M\u0007\u0001\u0000\u0000\u0000NO\u0005\u0011\u0000"+
		"\u0000OP\u0005\u001f\u0000\u0000PY\u0005\u0001\u0000\u0000QV\u0003\f\u0006"+
		"\u0000RS\u0005\u0010\u0000\u0000SU\u0003\f\u0006\u0000TR\u0001\u0000\u0000"+
		"\u0000UX\u0001\u0000\u0000\u0000VT\u0001\u0000\u0000\u0000VW\u0001\u0000"+
		"\u0000\u0000WZ\u0001\u0000\u0000\u0000XV\u0001\u0000\u0000\u0000YQ\u0001"+
		"\u0000\u0000\u0000YZ\u0001\u0000\u0000\u0000Z[\u0001\u0000\u0000\u0000"+
		"[]\u0005\u0002\u0000\u0000\\^\u0003\u0006\u0003\u0000]\\\u0001\u0000\u0000"+
		"\u0000]^\u0001\u0000\u0000\u0000^\t\u0001\u0000\u0000\u0000_b\u0003\f"+
		"\u0006\u0000`b\u0003\b\u0004\u0000a_\u0001\u0000\u0000\u0000a`\u0001\u0000"+
		"\u0000\u0000b\u000b\u0001\u0000\u0000\u0000cd\u0006\u0006\uffff\uffff"+
		"\u0000de\u0005\u0001\u0000\u0000ef\u0003\f\u0006\u0000fg\u0005\u0002\u0000"+
		"\u0000go\u0001\u0000\u0000\u0000hi\u0005\u001f\u0000\u0000ij\u0005\u001e"+
		"\u0000\u0000jo\u0005\u001f\u0000\u0000ko\u0005!\u0000\u0000lo\u0005 \u0000"+
		"\u0000mo\u0005\u001f\u0000\u0000nc\u0001\u0000\u0000\u0000nh\u0001\u0000"+
		"\u0000\u0000nk\u0001\u0000\u0000\u0000nl\u0001\u0000\u0000\u0000nm\u0001"+
		"\u0000\u0000\u0000ou\u0001\u0000\u0000\u0000pq\n\u0006\u0000\u0000qr\u0007"+
		"\u0000\u0000\u0000rt\u0003\f\u0006\u0007sp\u0001\u0000\u0000\u0000tw\u0001"+
		"\u0000\u0000\u0000us\u0001\u0000\u0000\u0000uv\u0001\u0000\u0000\u0000"+
		"v\r\u0001\u0000\u0000\u0000wu\u0001\u0000\u0000\u0000x}\u0005\u001f\u0000"+
		"\u0000yz\u0005\u0010\u0000\u0000z|\u0005\u001f\u0000\u0000{y\u0001\u0000"+
		"\u0000\u0000|\u007f\u0001\u0000\u0000\u0000}{\u0001\u0000\u0000\u0000"+
		"}~\u0001\u0000\u0000\u0000~\u000f\u0001\u0000\u0000\u0000\u007f}\u0001"+
		"\u0000\u0000\u0000\f\u0013\u001a9JLVY]anu}";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}