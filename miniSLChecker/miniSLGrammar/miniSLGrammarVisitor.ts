// Generated from miniSLGrammar.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


import { PrgContext } from "./miniSLGrammarParser.js";
import { InitContext } from "./miniSLGrammarParser.js";
import { ServiceDeclContext } from "./miniSLGrammarParser.js";
import { FunctionDeclContext } from "./miniSLGrammarParser.js";
import { StmContext } from "./miniSLGrammarParser.js";
import { ServiceCallContext } from "./miniSLGrammarParser.js";
import { FunctionCallContext } from "./miniSLGrammarParser.js";
import { ExpOrCallContext } from "./miniSLGrammarParser.js";
import { CallFunContext } from "./miniSLGrammarParser.js";
import { BinExpContext } from "./miniSLGrammarParser.js";
import { DerExpContext } from "./miniSLGrammarParser.js";
import { ValExpContext } from "./miniSLGrammarParser.js";
import { StringExpContext } from "./miniSLGrammarParser.js";
import { FormalParamsContext } from "./miniSLGrammarParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `miniSLGrammarParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class miniSLGrammarVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `miniSLGrammarParser.prg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrg?: (ctx: PrgContext) => Result;
	/**
	 * Visit a parse tree produced by `miniSLGrammarParser.init`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInit?: (ctx: InitContext) => Result;
	/**
	 * Visit a parse tree produced by `miniSLGrammarParser.serviceDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitServiceDecl?: (ctx: ServiceDeclContext) => Result;
	/**
	 * Visit a parse tree produced by `miniSLGrammarParser.functionDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDecl?: (ctx: FunctionDeclContext) => Result;
	/**
	 * Visit a parse tree produced by `miniSLGrammarParser.stm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStm?: (ctx: StmContext) => Result;
	/**
	 * Visit a parse tree produced by `miniSLGrammarParser.serviceCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitServiceCall?: (ctx: ServiceCallContext) => Result;
	/**
	 * Visit a parse tree produced by `miniSLGrammarParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;
	/**
	 * Visit a parse tree produced by `miniSLGrammarParser.expOrCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpOrCall?: (ctx: ExpOrCallContext) => Result;
	/**
	 * Visit a parse tree produced by the `callFun`
	 * labeled alternative in `miniSLGrammarParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallFun?: (ctx: CallFunContext) => Result;
	/**
	 * Visit a parse tree produced by the `binExp`
	 * labeled alternative in `miniSLGrammarParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinExp?: (ctx: BinExpContext) => Result;
	/**
	 * Visit a parse tree produced by the `derExp`
	 * labeled alternative in `miniSLGrammarParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDerExp?: (ctx: DerExpContext) => Result;
	/**
	 * Visit a parse tree produced by the `valExp`
	 * labeled alternative in `miniSLGrammarParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValExp?: (ctx: ValExpContext) => Result;
	/**
	 * Visit a parse tree produced by the `stringExp`
	 * labeled alternative in `miniSLGrammarParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringExp?: (ctx: StringExpContext) => Result;
	/**
	 * Visit a parse tree produced by `miniSLGrammarParser.formalParams`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParams?: (ctx: FormalParamsContext) => Result;
}

