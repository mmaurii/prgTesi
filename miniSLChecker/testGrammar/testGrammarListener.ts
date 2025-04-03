// Generated from testGrammar.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { ChatContext } from "./testGrammarParser.js";
import { LineContext } from "./testGrammarParser.js";
import { MessageContext } from "./testGrammarParser.js";
import { NameContext } from "./testGrammarParser.js";
import { CommandContext } from "./testGrammarParser.js";
import { EmoticonContext } from "./testGrammarParser.js";
import { LinkContext } from "./testGrammarParser.js";
import { ColorContext } from "./testGrammarParser.js";
import { MentionContext } from "./testGrammarParser.js";
import { OperationContext } from "./testGrammarParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `testGrammarParser`.
 */
export default class testGrammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `testGrammarParser.chat`.
	 * @param ctx the parse tree
	 */
	enterChat?: (ctx: ChatContext) => void;
	/**
	 * Exit a parse tree produced by `testGrammarParser.chat`.
	 * @param ctx the parse tree
	 */
	exitChat?: (ctx: ChatContext) => void;
	/**
	 * Enter a parse tree produced by `testGrammarParser.line`.
	 * @param ctx the parse tree
	 */
	enterLine?: (ctx: LineContext) => void;
	/**
	 * Exit a parse tree produced by `testGrammarParser.line`.
	 * @param ctx the parse tree
	 */
	exitLine?: (ctx: LineContext) => void;
	/**
	 * Enter a parse tree produced by `testGrammarParser.message`.
	 * @param ctx the parse tree
	 */
	enterMessage?: (ctx: MessageContext) => void;
	/**
	 * Exit a parse tree produced by `testGrammarParser.message`.
	 * @param ctx the parse tree
	 */
	exitMessage?: (ctx: MessageContext) => void;
	/**
	 * Enter a parse tree produced by `testGrammarParser.name`.
	 * @param ctx the parse tree
	 */
	enterName?: (ctx: NameContext) => void;
	/**
	 * Exit a parse tree produced by `testGrammarParser.name`.
	 * @param ctx the parse tree
	 */
	exitName?: (ctx: NameContext) => void;
	/**
	 * Enter a parse tree produced by `testGrammarParser.command`.
	 * @param ctx the parse tree
	 */
	enterCommand?: (ctx: CommandContext) => void;
	/**
	 * Exit a parse tree produced by `testGrammarParser.command`.
	 * @param ctx the parse tree
	 */
	exitCommand?: (ctx: CommandContext) => void;
	/**
	 * Enter a parse tree produced by `testGrammarParser.emoticon`.
	 * @param ctx the parse tree
	 */
	enterEmoticon?: (ctx: EmoticonContext) => void;
	/**
	 * Exit a parse tree produced by `testGrammarParser.emoticon`.
	 * @param ctx the parse tree
	 */
	exitEmoticon?: (ctx: EmoticonContext) => void;
	/**
	 * Enter a parse tree produced by `testGrammarParser.link`.
	 * @param ctx the parse tree
	 */
	enterLink?: (ctx: LinkContext) => void;
	/**
	 * Exit a parse tree produced by `testGrammarParser.link`.
	 * @param ctx the parse tree
	 */
	exitLink?: (ctx: LinkContext) => void;
	/**
	 * Enter a parse tree produced by `testGrammarParser.color`.
	 * @param ctx the parse tree
	 */
	enterColor?: (ctx: ColorContext) => void;
	/**
	 * Exit a parse tree produced by `testGrammarParser.color`.
	 * @param ctx the parse tree
	 */
	exitColor?: (ctx: ColorContext) => void;
	/**
	 * Enter a parse tree produced by `testGrammarParser.mention`.
	 * @param ctx the parse tree
	 */
	enterMention?: (ctx: MentionContext) => void;
	/**
	 * Exit a parse tree produced by `testGrammarParser.mention`.
	 * @param ctx the parse tree
	 */
	exitMention?: (ctx: MentionContext) => void;
	/**
	 * Enter a parse tree produced by `testGrammarParser.operation`.
	 * @param ctx the parse tree
	 */
	enterOperation?: (ctx: OperationContext) => void;
	/**
	 * Exit a parse tree produced by `testGrammarParser.operation`.
	 * @param ctx the parse tree
	 */
	exitOperation?: (ctx: OperationContext) => void;
}

