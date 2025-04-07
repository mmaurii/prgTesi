// Generated from miniSLGrammar.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { PrgContext } from "./miniSLGrammarParser.js";
import { InitContext } from "./miniSLGrammarParser.js";
import { ServiceDeclContext } from "./miniSLGrammarParser.js";
import { StmContext } from "./miniSLGrammarParser.js";
import { ServiceCallContext } from "./miniSLGrammarParser.js";
import { ExpOrCallContext } from "./miniSLGrammarParser.js";
import { CallFunContext } from "./miniSLGrammarParser.js";
import { BinExpContext } from "./miniSLGrammarParser.js";
import { DerExpContext } from "./miniSLGrammarParser.js";
import { ValExpContext } from "./miniSLGrammarParser.js";
import { ParenExpContext } from "./miniSLGrammarParser.js";
import { StringExpContext } from "./miniSLGrammarParser.js";
import { FormalParamsContext } from "./miniSLGrammarParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `miniSLGrammarParser`.
 */
export default class miniSLGrammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `miniSLGrammarParser.prg`.
	 * @param ctx the parse tree
	 */
	enterPrg?: (ctx: PrgContext) => void;
	/**
	 * Exit a parse tree produced by `miniSLGrammarParser.prg`.
	 * @param ctx the parse tree
	 */
	exitPrg?: (ctx: PrgContext) => void;
	/**
	 * Enter a parse tree produced by `miniSLGrammarParser.init`.
	 * @param ctx the parse tree
	 */
	enterInit?: (ctx: InitContext) => void;
	/**
	 * Exit a parse tree produced by `miniSLGrammarParser.init`.
	 * @param ctx the parse tree
	 */
	exitInit?: (ctx: InitContext) => void;
	/**
	 * Enter a parse tree produced by `miniSLGrammarParser.serviceDecl`.
	 * @param ctx the parse tree
	 */
	enterServiceDecl?: (ctx: ServiceDeclContext) => void;
	/**
	 * Exit a parse tree produced by `miniSLGrammarParser.serviceDecl`.
	 * @param ctx the parse tree
	 */
	exitServiceDecl?: (ctx: ServiceDeclContext) => void;
	/**
	 * Enter a parse tree produced by `miniSLGrammarParser.stm`.
	 * @param ctx the parse tree
	 */
	enterStm?: (ctx: StmContext) => void;
	/**
	 * Exit a parse tree produced by `miniSLGrammarParser.stm`.
	 * @param ctx the parse tree
	 */
	exitStm?: (ctx: StmContext) => void;
	/**
	 * Enter a parse tree produced by `miniSLGrammarParser.serviceCall`.
	 * @param ctx the parse tree
	 */
	enterServiceCall?: (ctx: ServiceCallContext) => void;
	/**
	 * Exit a parse tree produced by `miniSLGrammarParser.serviceCall`.
	 * @param ctx the parse tree
	 */
	exitServiceCall?: (ctx: ServiceCallContext) => void;
	/**
	 * Enter a parse tree produced by `miniSLGrammarParser.expOrCall`.
	 * @param ctx the parse tree
	 */
	enterExpOrCall?: (ctx: ExpOrCallContext) => void;
	/**
	 * Exit a parse tree produced by `miniSLGrammarParser.expOrCall`.
	 * @param ctx the parse tree
	 */
	exitExpOrCall?: (ctx: ExpOrCallContext) => void;
	/**
	 * Enter a parse tree produced by the `callFun`
	 * labeled alternative in `miniSLGrammarParser.exp`.
	 * @param ctx the parse tree
	 */
	enterCallFun?: (ctx: CallFunContext) => void;
	/**
	 * Exit a parse tree produced by the `callFun`
	 * labeled alternative in `miniSLGrammarParser.exp`.
	 * @param ctx the parse tree
	 */
	exitCallFun?: (ctx: CallFunContext) => void;
	/**
	 * Enter a parse tree produced by the `binExp`
	 * labeled alternative in `miniSLGrammarParser.exp`.
	 * @param ctx the parse tree
	 */
	enterBinExp?: (ctx: BinExpContext) => void;
	/**
	 * Exit a parse tree produced by the `binExp`
	 * labeled alternative in `miniSLGrammarParser.exp`.
	 * @param ctx the parse tree
	 */
	exitBinExp?: (ctx: BinExpContext) => void;
	/**
	 * Enter a parse tree produced by the `derExp`
	 * labeled alternative in `miniSLGrammarParser.exp`.
	 * @param ctx the parse tree
	 */
	enterDerExp?: (ctx: DerExpContext) => void;
	/**
	 * Exit a parse tree produced by the `derExp`
	 * labeled alternative in `miniSLGrammarParser.exp`.
	 * @param ctx the parse tree
	 */
	exitDerExp?: (ctx: DerExpContext) => void;
	/**
	 * Enter a parse tree produced by the `valExp`
	 * labeled alternative in `miniSLGrammarParser.exp`.
	 * @param ctx the parse tree
	 */
	enterValExp?: (ctx: ValExpContext) => void;
	/**
	 * Exit a parse tree produced by the `valExp`
	 * labeled alternative in `miniSLGrammarParser.exp`.
	 * @param ctx the parse tree
	 */
	exitValExp?: (ctx: ValExpContext) => void;
	/**
	 * Enter a parse tree produced by the `parenExp`
	 * labeled alternative in `miniSLGrammarParser.exp`.
	 * @param ctx the parse tree
	 */
	enterParenExp?: (ctx: ParenExpContext) => void;
	/**
	 * Exit a parse tree produced by the `parenExp`
	 * labeled alternative in `miniSLGrammarParser.exp`.
	 * @param ctx the parse tree
	 */
	exitParenExp?: (ctx: ParenExpContext) => void;
	/**
	 * Enter a parse tree produced by the `stringExp`
	 * labeled alternative in `miniSLGrammarParser.exp`.
	 * @param ctx the parse tree
	 */
	enterStringExp?: (ctx: StringExpContext) => void;
	/**
	 * Exit a parse tree produced by the `stringExp`
	 * labeled alternative in `miniSLGrammarParser.exp`.
	 * @param ctx the parse tree
	 */
	exitStringExp?: (ctx: StringExpContext) => void;
	/**
	 * Enter a parse tree produced by `miniSLGrammarParser.formalParams`.
	 * @param ctx the parse tree
	 */
	enterFormalParams?: (ctx: FormalParamsContext) => void;
	/**
	 * Exit a parse tree produced by `miniSLGrammarParser.formalParams`.
	 * @param ctx the parse tree
	 */
	exitFormalParams?: (ctx: FormalParamsContext) => void;
}

