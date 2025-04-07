// Generated from c://Users//frizi//Documents//GitHub//prgTesi//miniSLChecker//miniSLGrammar//testGrammar.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class testGrammarLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, SAYS=8, SHOUTS=9, 
		WORD=10, WHITESPACE=11, NEWLINE=12, TEXT=13, NUMBER=14;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "A", "S", "Y", 
			"H", "O", "U", "T", "LOWERCASE", "UPPERCASE", "SAYS", "SHOUTS", "WORD", 
			"WHITESPACE", "NEWLINE", "TEXT", "DIGIT", "NUMBER"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "':'", "'-'", "')'", "'('", "'/'", "'@'", "'+'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, "SAYS", "SHOUTS", "WORD", 
			"WHITESPACE", "NEWLINE", "TEXT", "NUMBER"
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


	public testGrammarLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "testGrammar.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u000e\u0089\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0002\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017"+
		"\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002"+
		"\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005"+
		"\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001"+
		"\t\u0001\t\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001"+
		"\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011"+
		"\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0012"+
		"\u0001\u0012\u0001\u0012\u0004\u0012a\b\u0012\u000b\u0012\f\u0012b\u0001"+
		"\u0013\u0004\u0013f\b\u0013\u000b\u0013\f\u0013g\u0001\u0014\u0003\u0014"+
		"k\b\u0014\u0001\u0014\u0001\u0014\u0004\u0014o\b\u0014\u000b\u0014\f\u0014"+
		"p\u0001\u0015\u0001\u0015\u0004\u0015u\b\u0015\u000b\u0015\f\u0015v\u0001"+
		"\u0015\u0001\u0015\u0001\u0016\u0001\u0016\u0001\u0017\u0004\u0017~\b"+
		"\u0017\u000b\u0017\f\u0017\u007f\u0001\u0017\u0001\u0017\u0004\u0017\u0084"+
		"\b\u0017\u000b\u0017\f\u0017\u0085\u0003\u0017\u0088\b\u0017\u0000\u0000"+
		"\u0018\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006"+
		"\r\u0007\u000f\u0000\u0011\u0000\u0013\u0000\u0015\u0000\u0017\u0000\u0019"+
		"\u0000\u001b\u0000\u001d\u0000\u001f\u0000!\b#\t%\n\'\u000b)\f+\r-\u0000"+
		"/\u000e\u0001\u0000\u000e\u0002\u0000AAaa\u0002\u0000SSss\u0002\u0000"+
		"YYyy\u0002\u0000HHhh\u0002\u0000OOoo\u0002\u0000UUuu\u0002\u0000TTtt\u0001"+
		"\u0000az\u0001\u0000AZ\u0002\u0000\t\t  \u0002\u0000(([[\u0002\u0000)"+
		")]]\u0001\u000009\u0002\u0000,,..\u0089\u0000\u0001\u0001\u0000\u0000"+
		"\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000"+
		"\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000"+
		"\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000"+
		"!\u0001\u0000\u0000\u0000\u0000#\u0001\u0000\u0000\u0000\u0000%\u0001"+
		"\u0000\u0000\u0000\u0000\'\u0001\u0000\u0000\u0000\u0000)\u0001\u0000"+
		"\u0000\u0000\u0000+\u0001\u0000\u0000\u0000\u0000/\u0001\u0000\u0000\u0000"+
		"\u00011\u0001\u0000\u0000\u0000\u00033\u0001\u0000\u0000\u0000\u00055"+
		"\u0001\u0000\u0000\u0000\u00077\u0001\u0000\u0000\u0000\t9\u0001\u0000"+
		"\u0000\u0000\u000b;\u0001\u0000\u0000\u0000\r=\u0001\u0000\u0000\u0000"+
		"\u000f?\u0001\u0000\u0000\u0000\u0011A\u0001\u0000\u0000\u0000\u0013C"+
		"\u0001\u0000\u0000\u0000\u0015E\u0001\u0000\u0000\u0000\u0017G\u0001\u0000"+
		"\u0000\u0000\u0019I\u0001\u0000\u0000\u0000\u001bK\u0001\u0000\u0000\u0000"+
		"\u001dM\u0001\u0000\u0000\u0000\u001fO\u0001\u0000\u0000\u0000!Q\u0001"+
		"\u0000\u0000\u0000#V\u0001\u0000\u0000\u0000%`\u0001\u0000\u0000\u0000"+
		"\'e\u0001\u0000\u0000\u0000)n\u0001\u0000\u0000\u0000+r\u0001\u0000\u0000"+
		"\u0000-z\u0001\u0000\u0000\u0000/}\u0001\u0000\u0000\u000012\u0005:\u0000"+
		"\u00002\u0002\u0001\u0000\u0000\u000034\u0005-\u0000\u00004\u0004\u0001"+
		"\u0000\u0000\u000056\u0005)\u0000\u00006\u0006\u0001\u0000\u0000\u0000"+
		"78\u0005(\u0000\u00008\b\u0001\u0000\u0000\u00009:\u0005/\u0000\u0000"+
		":\n\u0001\u0000\u0000\u0000;<\u0005@\u0000\u0000<\f\u0001\u0000\u0000"+
		"\u0000=>\u0005+\u0000\u0000>\u000e\u0001\u0000\u0000\u0000?@\u0007\u0000"+
		"\u0000\u0000@\u0010\u0001\u0000\u0000\u0000AB\u0007\u0001\u0000\u0000"+
		"B\u0012\u0001\u0000\u0000\u0000CD\u0007\u0002\u0000\u0000D\u0014\u0001"+
		"\u0000\u0000\u0000EF\u0007\u0003\u0000\u0000F\u0016\u0001\u0000\u0000"+
		"\u0000GH\u0007\u0004\u0000\u0000H\u0018\u0001\u0000\u0000\u0000IJ\u0007"+
		"\u0005\u0000\u0000J\u001a\u0001\u0000\u0000\u0000KL\u0007\u0006\u0000"+
		"\u0000L\u001c\u0001\u0000\u0000\u0000MN\u0007\u0007\u0000\u0000N\u001e"+
		"\u0001\u0000\u0000\u0000OP\u0007\b\u0000\u0000P \u0001\u0000\u0000\u0000"+
		"QR\u0003\u0011\b\u0000RS\u0003\u000f\u0007\u0000ST\u0003\u0013\t\u0000"+
		"TU\u0003\u0011\b\u0000U\"\u0001\u0000\u0000\u0000VW\u0003\u0011\b\u0000"+
		"WX\u0003\u0015\n\u0000XY\u0003\u0017\u000b\u0000YZ\u0003\u0019\f\u0000"+
		"Z[\u0003\u001b\r\u0000[\\\u0003\u0011\b\u0000\\$\u0001\u0000\u0000\u0000"+
		"]a\u0003\u001d\u000e\u0000^a\u0003\u001f\u000f\u0000_a\u0005_\u0000\u0000"+
		"`]\u0001\u0000\u0000\u0000`^\u0001\u0000\u0000\u0000`_\u0001\u0000\u0000"+
		"\u0000ab\u0001\u0000\u0000\u0000b`\u0001\u0000\u0000\u0000bc\u0001\u0000"+
		"\u0000\u0000c&\u0001\u0000\u0000\u0000df\u0007\t\u0000\u0000ed\u0001\u0000"+
		"\u0000\u0000fg\u0001\u0000\u0000\u0000ge\u0001\u0000\u0000\u0000gh\u0001"+
		"\u0000\u0000\u0000h(\u0001\u0000\u0000\u0000ik\u0005\r\u0000\u0000ji\u0001"+
		"\u0000\u0000\u0000jk\u0001\u0000\u0000\u0000kl\u0001\u0000\u0000\u0000"+
		"lo\u0005\n\u0000\u0000mo\u0005\r\u0000\u0000nj\u0001\u0000\u0000\u0000"+
		"nm\u0001\u0000\u0000\u0000op\u0001\u0000\u0000\u0000pn\u0001\u0000\u0000"+
		"\u0000pq\u0001\u0000\u0000\u0000q*\u0001\u0000\u0000\u0000rt\u0007\n\u0000"+
		"\u0000su\b\u000b\u0000\u0000ts\u0001\u0000\u0000\u0000uv\u0001\u0000\u0000"+
		"\u0000vt\u0001\u0000\u0000\u0000vw\u0001\u0000\u0000\u0000wx\u0001\u0000"+
		"\u0000\u0000xy\u0007\u000b\u0000\u0000y,\u0001\u0000\u0000\u0000z{\u0007"+
		"\f\u0000\u0000{.\u0001\u0000\u0000\u0000|~\u0003-\u0016\u0000}|\u0001"+
		"\u0000\u0000\u0000~\u007f\u0001\u0000\u0000\u0000\u007f}\u0001\u0000\u0000"+
		"\u0000\u007f\u0080\u0001\u0000\u0000\u0000\u0080\u0087\u0001\u0000\u0000"+
		"\u0000\u0081\u0083\u0007\r\u0000\u0000\u0082\u0084\u0003-\u0016\u0000"+
		"\u0083\u0082\u0001\u0000\u0000\u0000\u0084\u0085\u0001\u0000\u0000\u0000"+
		"\u0085\u0083\u0001\u0000\u0000\u0000\u0085\u0086\u0001\u0000\u0000\u0000"+
		"\u0086\u0088\u0001\u0000\u0000\u0000\u0087\u0081\u0001\u0000\u0000\u0000"+
		"\u0087\u0088\u0001\u0000\u0000\u0000\u00880\u0001\u0000\u0000\u0000\u000b"+
		"\u0000`bgjnpv\u007f\u0085\u0087\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}