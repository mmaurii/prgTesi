// Generated from testGrammar.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `testGrammarParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class testGrammarVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `testGrammarParser.chat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChat?: (ctx: ChatContext) => Result;
	/**
	 * Visit a parse tree produced by `testGrammarParser.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine?: (ctx: LineContext) => Result;
	/**
	 * Visit a parse tree produced by `testGrammarParser.message`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMessage?: (ctx: MessageContext) => Result;
	/**
	 * Visit a parse tree produced by `testGrammarParser.name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName?: (ctx: NameContext) => Result;
	/**
	 * Visit a parse tree produced by `testGrammarParser.command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand?: (ctx: CommandContext) => Result;
	/**
	 * Visit a parse tree produced by `testGrammarParser.emoticon`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmoticon?: (ctx: EmoticonContext) => Result;
	/**
	 * Visit a parse tree produced by `testGrammarParser.link`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLink?: (ctx: LinkContext) => Result;
	/**
	 * Visit a parse tree produced by `testGrammarParser.color`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColor?: (ctx: ColorContext) => Result;
	/**
	 * Visit a parse tree produced by `testGrammarParser.mention`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMention?: (ctx: MentionContext) => Result;
	/**
	 * Visit a parse tree produced by `testGrammarParser.operation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperation?: (ctx: OperationContext) => Result;
}

