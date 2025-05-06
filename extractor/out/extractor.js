var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as fs from 'fs';
import * as acorn from "acorn";
import { exit } from 'process';
import { RecursionChecker } from './recursionChecker.js';
import { miniSLParser } from './miniSLParser.js';
//import { Config } from './config.js';
function readFile(path) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield fs.promises.readFile(path, 'utf-8');
            return data;
        }
        catch (error) {
            console.error('Error while reading the file:\n', error);
        }
    });
}
class Extractor {
    constructor() {
        this.miniSLServices = "";
        this.miniSLFunctionCode = new Map();
        this.functionsAnnotation = new Map();
        this.extractorConfigFilePath = './extractorConfig.json';
        this.annotatedCodeFilePath = "./annotatedCode/inputAnnotated4.ts";
        //flag to stop finding function annotations
        this.endOfAnnotation = true;
        this.entrypoint = null;
    }
    extract() {
        return __awaiter(this, arguments, void 0, function* (entryPoint = "main", path = this.annotatedCodeFilePath) {
            let miniSLCode = "\n";
            this.entrypoint = entryPoint;
            //ogetto contenente le configurazioni con cui sono state codificate le annotazioni
            this.config = JSON.parse(yield readFile(this.extractorConfigFilePath));
            const lines = (yield readFile(path)).split("\n");
            // filter the lines that contain the annotations
            this.annotations = lines.filter(line => this.findAnnotation(line, this.config.miniSLID, this.config.startAnnotation, this.config.endAnnotation));
            if (this.annotations.length === 0) {
                console.error("Annotations not found in the file");
                return;
            }
            try {
                //Recursion checking
                const recursionChecker = new RecursionChecker(this.annotations, this.config);
                recursionChecker.printCallGraph();
                if (recursionChecker.haveRecursiveFunction(entryPoint)) {
                    console.error("Recursion detected in the code");
                    return;
                }
                //Reading the function annotations and saveing the relative miniSL code in a map
                this.findFunctionAnnotations();
                //Reading the main annotation and generating miniSL code
                miniSLCode += this.translateAnnotations().join("");
                //adding the miniSL services to the miniSL code
                miniSLCode = this.miniSLServices + miniSLCode;
                //indenting code
                let indentedCode = this.indentMiniSLCode(miniSLCode);
                console.log(indentedCode);
                const annotator = new miniSLParser(indentedCode);
                annotator.check();
            }
            catch (error) {
                console.error("Error while extracting the code: \n", error);
            }
        });
    }
    /**
     * This function takes a for guard and generates the miniSL code
     * @param params for guard, the params are the iterator variable and the number of iteration
     * @returns miniSL code for the for statement in a string format
     */
    writeFor(params) {
        const variables = params.split(",");
        const regex = /^[a-zA-Z]+[a-zA-Z0-9]*$/;
        if (variables.length !== 2) {
            throw new Error("Invalid number of parameter passed to for statement");
        }
        if (!variables[0].match(regex)) {
            throw new Error("for's first parameter must be an iterator variable (i.e. i)");
        }
        const ast = acorn.parse(variables[1], { ecmaVersion: 2020 });
        //check if the second parameter is an arithmetic expression
        if (this.checkArithmeticExpression(ast)) {
            return `for(${variables[0]} in range(0, ${variables[1]})) {\n`;
        }
        else {
            throw new Error("the second parameter of for statement must be an expression that result in a number");
        }
    }
    /**
     * This function takes an if guard and generates the miniSL code
     * @param guards if guard, the guards are the conditions that must be satisfied to execute the code inside the if statement
     * @returns miniSL code for the if statement in a string format
     */
    writeIf(guards) {
        const regex = /[a-zA-Z]+[a-zA-Z0-9]*\(.*?\)$/;
        let ast;
        try {
            ast = acorn.parse(guards, { ecmaVersion: 2020 });
        }
        catch (error) {
            throw new Error("Invalid if guards");
        }
        //check if the guard is a valid expression
        if (this.checkExpression(ast, true)) {
            return `if(${guards}) {\n`;
        }
        else {
            //check if the guard is a call to a an extrernal service
            if (guards.match(regex)) {
                let startIndex = guards.indexOf("(") + 1;
                let endIndex = guards.lastIndexOf(")");
                let param = guards.slice(startIndex, endIndex);
                let fnName = guards.slice(0, guards.indexOf("("));
                let ifGuard = this.writeCall(fnName, param);
                return `if(${ifGuard}) {\n`;
            }
            else {
                throw new Error("Invalid if guards");
            }
        }
    }
    /**
     * This function generates the miniSL code for the else statement
     * @returns miniSL code for the else statement in a string format
     */
    writeElse() {
        return `} else {\n`;
    }
    /**
     * This function takes a service name and its input parameters and generates the miniSL code associated
     * @param serviceName the name of the service to call
     * @param params input parameters of the service
     * @returns miniSL code for the call statement in a string format
     */
    writeCall(serviceName, params) {
        const variables = params.split(",");
        const regex = /\(.*?\)$/;
        for (let i = 0; i < variables.length; i++) {
            //verify if the parameter is an expression
            if (variables[i].match(regex)) {
                const ast = acorn.parse(variables[i], { ecmaVersion: 2020 });
                //check if the parameter is a valid expression: arithmetic or boolean
                if (!this.checkExpression(ast, false)) {
                    throw new Error("Error: call can'take Function as parameter or invalid expression ");
                }
            }
        }
        //check if the service is already defined
        if (!this.miniSLServices.includes(`${serviceName}`)) {
            this.miniSLServices += `service ${serviceName} : (void) -> void;\n`;
        }
        return `call ${serviceName}(${params})`;
    }
    /**
     * This function takes the input parameters of the main function and generates the miniSL code associated
     * @param params input parameters of the miniSL main function
     * @returns miniSL code for the main function in a string format
     */
    writeMain(params) {
        /*         if (params.charAt(params.length - 1) === "," || params.charAt(0) === ",") {
                    throw new Error("Invalid syntax main can't have empty parameters");
                } */
        const regex = /^[a-zA-Z_]*[a-zA-Z0-9_]*$/;
        const paramsMapped = params.map(i => {
            if (i.trim().match(regex)) {
                return i;
            }
            else {
                throw new Error("Invalid parameter passed to main function");
            }
        });
        return `(${paramsMapped.join(", ")}) => {\n`;
    }
    /**
     * This function generates the miniSL code for the end statement
     * @returns miniSL code for the end statement in a string format
     */
    writeCloseStatement() {
        return `}\n`;
    }
    /**
     * This function takes a function name and its input parameters and generates the miniSL code associated
     * @param index of the just readed annotation from the annotations array
     * @param fnName the name of the function invoked
     * @param params input parameters of the function invoked
     * @throws Error if the function is not found in the map or in the annotations array
     * @returns miniSL associated to the function invoked in a string format
     */
    getFunctionInvoked(fnName, params) {
        //finding the function code in the map
        if (this.miniSLFunctionCode.has(fnName)) {
            return this.paramsInjection(fnName, params);
        }
        else {
            //finding the function code in the annotations array
            this.translateFunctionAnnotations(fnName, params);
            if (this.miniSLFunctionCode.has(fnName)) {
                return this.paramsInjection(fnName, params);
            }
            else {
                throw new Error("Function not found");
            }
        }
    }
    paramsInjection(fnName, params) {
        //check if the function has the right number of parameters
        const fnData = this.miniSLFunctionCode.get(fnName);
        if (fnData.params.length !== params.length) {
            throw new Error(`Invalid number of parameters passed to function ${fnName}`);
        }
        else if (params.length === 1) {
            if (params[0].length === 0 && fnData.params.length !== params.length) {
                throw new Error(`Invalid number of parameters passed to function ${fnName}`);
            }
        }
        //replace the parameters with the right name/value
        let miniSLCode = fnData.code;
        for (let i = 0; i < fnData.params.length; i++) {
            const regex = new RegExp(`\\b${fnData.params[i]}\\b(?!\\s*\\()`, "g");
            miniSLCode = miniSLCode.replace(regex, params[i]);
        }
        return miniSLCode;
    }
    /**
     * This function reads the annotations and generates the miniSL code associated to the outermost block.
     * @param index of the just readed annotation from the annotations array
     * @returns miniSL code in a string format
     */
    /*     private readAnnotations(index = 0): String[] {
            //array containing the miniSL code generated from the annotations
            let miniSLCode: String[] = new Array();
            //counters for the opened and closed statements '{ and }'
            let openedStatements = 0;
            let closedStatements = 0;
    
    
            for (let i = index; i < this.annotations.length && (openedStatements >= closedStatements); i++) {
                //selecting the unspaced annotation controlStatements
                const annotatedLine = this.annotations[i];
                const miniSLComment = this.config.startAnnotation + " " + this.config.miniSLID + ":";
    
                //selecting the annotation
                let startIndex = annotatedLine.indexOf(miniSLComment) + miniSLComment.length;
                let endIndex = this.config.endAnnotation.length > 0 ? annotatedLine.indexOf(this.config.endAnnotation, startIndex) : annotatedLine.length;
                let ann = annotatedLine.substring(startIndex, endIndex).trim();
    
                //start to identify the controlStatements type
                endIndex = ann.indexOf("(");
    
                if (endIndex === -1) {
                    //check if the annotation is a control statement
                    if (ann === this.config.controlStatements.end) {
                        miniSLCode.push(this.writeCloseStatement());
                        closedStatements++;
                    } else if (ann === this.config.controlStatements.else) {
                        miniSLCode.push(this.writeElse());
                    } else {
                        throw new Error(`Error: Unknown statement: ${ann}`);
                    }
                } else {
                    //selecting the parameters of the controlStatements
                    startIndex = endIndex + 1;
                    endIndex = ann.lastIndexOf(")");
                    const params = ann.substring(startIndex, endIndex).trim();
                    ann = ann.substring(0, startIndex - 1);
                    ann = ann.replace(/\s/g, "");
    
                    try {
                        //check if the annotation is a control statement
                        if (ann === this.config.controlStatements.for) {
                            miniSLCode.push(this.writeFor(params));
                            openedStatements++;
                        } else if (ann === this.config.controlStatements.if) {
                            const guard = annotatedLine.substring(annotatedLine.indexOf("(") + 1, annotatedLine.lastIndexOf(")"));
                            miniSLCode.push(this.writeIf(guard));
                            openedStatements++;
                        } else if (ann.startsWith(this.config.controlStatements.function)) {
                            i = this.readFunctionAnnotations(i, ann, params.split(","));
                            i--;
                        } else if (ann.startsWith(this.config.controlStatements.call)) {
                            const fnName = ann.substring(this.config.controlStatements.call.length);
                            miniSLCode.push(this.writeCall(fnName, params) + "\n");
                        } else if (ann.startsWith(this.config.controlStatements.invoke + "main")) {
                            miniSLCode.push(this.writeMain(params));
                            openedStatements++;
                        } else if (ann.startsWith(this.config.controlStatements.invoke)) {
                            const fnName = ann.substring(this.config.controlStatements.invoke.length);
                            //check if the guard is well formed
                            const paramsArray = params.split(",");
    
                            if (!paramsArray.every(param => param.trim().match(/^[a-zA-Z_]*[a-zA-Z0-9_]*$/))) {
                                throw new Error("Invalid parameter passed to function annotation: " + annotatedLine);
                            }
    
                            miniSLCode.push(this.getFunctionInvoked(i, fnName, paramsArray));
                        } else {
                            throw new Error(`Unknown statement: ${ann}`);
                        }
                    } catch (error) {
                        console.error(`Error while processing the annotation: ${ann}\nin line:${annotatedLine}\n`, error);
                        exit(0);
                    }
                }
            }
    
            return miniSLCode;
        } */
    translateFunctionAnnotations(fnName, params = []) {
        //array containing the miniSL code generated from the annotations
        let miniSLCode = new Array();
        //counters for the opened and closed statements '{ and }'
        let functionAnnotation = this.functionsAnnotation.get(fnName).code;
        if (!functionAnnotation) {
            throw new Error("Function not found in the annotations array, so in the file");
        }
        for (let i = 0; i < functionAnnotation.length; i++) {
            //selecting the unspaced annotation controlStatements
            const annotatedLine = functionAnnotation[i];
            const miniSLComment = this.config.startAnnotation + " " + this.config.miniSLID + ":";
            //selecting the annotation
            let startIndex = annotatedLine.indexOf(miniSLComment) + miniSLComment.length;
            let endIndex = this.config.endAnnotation.length > 0 ? annotatedLine.indexOf(this.config.endAnnotation, startIndex) : annotatedLine.length;
            let ann = annotatedLine.substring(startIndex, endIndex).trim();
            //start to identify the controlStatements type
            endIndex = ann.indexOf("(");
            if (endIndex === -1) {
                //check if the annotation is a control statement
                if (ann === this.config.controlStatements.end) {
                    miniSLCode.push(this.writeCloseStatement());
                }
                else if (ann === this.config.controlStatements.else) {
                    miniSLCode.push(this.writeElse());
                }
                else {
                    throw new Error(`Error: Unknown statement: ${ann}`);
                }
            }
            else {
                //selecting the parameters of the controlStatements 
                startIndex = endIndex + 1;
                endIndex = ann.lastIndexOf(")");
                const params = ann.substring(startIndex, endIndex).trim();
                ann = ann.substring(0, startIndex - 1);
                ann = ann.replace(/\s/g, "");
                try {
                    //check if the annotation is a control statement
                    if (ann === this.config.controlStatements.for) {
                        miniSLCode.push(this.writeFor(params));
                    }
                    else if (ann === this.config.controlStatements.if) {
                        const guard = annotatedLine.substring(annotatedLine.indexOf("(") + 1, annotatedLine.lastIndexOf(")"));
                        miniSLCode.push(this.writeIf(guard));
                    }
                    else if (ann.startsWith(this.config.controlStatements.function)) {
                        const fnName = ann.substring(this.config.controlStatements.function.length);
                        miniSLCode.push(this.getFunctionInvoked(fnName, params.split(",")));
                    }
                    else if (ann.startsWith(this.config.controlStatements.call)) {
                        const fnName = ann.substring(this.config.controlStatements.call.length);
                        miniSLCode.push(this.writeCall(fnName, params) + "\n");
                        /*                     } else if (ann.startsWith(this.config.controlStatements.invoke + "main")) {
                                                miniSLCode.push(this.writeMain(params));
                         */ }
                    else if (ann.startsWith(this.config.controlStatements.invoke)) {
                        const fnName = ann.substring(this.config.controlStatements.invoke.length);
                        //check if the guard is well formed
                        const paramsArray = params.split(",");
                        if (!paramsArray.every(param => param.trim().match(/^[a-zA-Z_]*[a-zA-Z0-9_]*$/))) {
                            throw new Error("Invalid parameter passed to function annotation: " + annotatedLine);
                        }
                        miniSLCode.push(this.getFunctionInvoked(fnName, paramsArray));
                    }
                    else {
                        throw new Error(`Unknown statement: ${ann}`);
                    }
                }
                catch (error) {
                    console.error(`Error while processing the annotation: ${ann}\nin line:${annotatedLine}\n`, error);
                    exit(0);
                }
            }
        }
        this.miniSLFunctionCode.set(fnName, { params: this.functionsAnnotation.get(fnName).params,
            code: miniSLCode.join("") });
    }
    /**
 * This function reads the annotations and generates the miniSL code associated to the outermost block.
 * @param index of the just readed annotation from the annotations array
 * @returns miniSL code in a string format
 */
    translateAnnotations() {
        //array containing the miniSL code generated from the annotations
        let miniSLCode = new Array();
        if (this.entrypoint !== null) {
            //selecting the unspaced annotation controlStatements
            const annotatedLine = this.entrypoint;
            const miniSLComment = this.config.startAnnotation + " " + this.config.miniSLID + ":";
            //selecting the annotation
            let startIndex = annotatedLine.indexOf(miniSLComment) + miniSLComment.length;
            let endIndex = this.config.endAnnotation.length > 0 ? annotatedLine.indexOf(this.config.endAnnotation, startIndex) : annotatedLine.length;
            let ann = annotatedLine.substring(startIndex, endIndex).trim();
            //start to identify the controlStatements type
            endIndex = ann.indexOf("(");
            if (endIndex !== -1 || true) {
                //selecting the parameters of the controlStatements 
                startIndex = endIndex + 1;
                endIndex = ann.lastIndexOf(")");
                const params = ann.substring(startIndex, endIndex).trim();
                ann = ann.substring(0, startIndex - 1);
                ann = ann.replace(/\s/g, "");
                try {
                    if (ann.startsWith(this.config.controlStatements.invoke) || true) {
                        const fnName = ann.substring(this.config.controlStatements.invoke.length);
                        //check if the guard is well formed
                        const paramsArray = params.split(",");
                        if (!paramsArray.every(param => param.trim().match(/^[a-zA-Z_]*[a-zA-Z0-9_]*$/))) {
                            throw new Error("Invalid parameter passed to function annotation: " + annotatedLine);
                        }
                        this.translateFunctionAnnotations(this.entrypoint);
                        miniSLCode.push(this.miniSLFunctionCode.get(this.entrypoint).code);
                        //wrapping the main code in an IIFE
                        miniSLCode.push(this.writeCloseStatement());
                        miniSLCode = [this.writeMain(this.miniSLFunctionCode.get(this.entrypoint).params), ...miniSLCode];
                    }
                    else {
                        throw new Error(`Unknown statement: ${ann}`);
                    }
                }
                catch (error) {
                    console.error(`Error while processing the annotation: ${ann}\nin line:${annotatedLine}\n`, error);
                    exit(0);
                }
            }
            else {
                throw new Error("Invalid entrypoint annotation: " + annotatedLine);
            }
        }
        else {
            throw new Error("Entry point not found in the annotations");
        }
        return miniSLCode;
    }
    /**
     * This function checks if the annotation is present in the line
     * @param line to analyze
     * @param miniSLID annotation comment identifier
     * @param startAnnotation character that identifies the start of the inline comment
     * @param endAnnotation character that identifies the end of the inline comment, if it's empty the function will check only the start of the comment
     * @returns
     */
    findAnnotation(line, miniSLID, startAnnotation, endAnnotation = "") {
        if (!miniSLID || !startAnnotation) {
            throw new Error("Parameters 'miniSLID' 'startAnnotation' cannot be empty or null");
        }
        if (!endAnnotation) {
            return line.includes(`${startAnnotation} ${miniSLID}:`);
        }
        else {
            let startIndex = line.indexOf(`${startAnnotation} ${miniSLID}:`);
            let endIndex = line.lastIndexOf(`${endAnnotation}`);
            return startIndex !== -1 && endIndex !== -1 && startIndex + startAnnotation.length + miniSLID.length + 2 < endIndex;
        }
    }
    /**
     * Indent the MiniSL code
     * @param code MiniSL code to indent
     * @returns indented MiniSL code
     */
    indentMiniSLCode(code) {
        const lines = code.split("\n").map((line) => line.trim()); // split to line and trim it
        let indentLevel = 0;
        const indentSize = 2;
        let formattedCode = new Array();
        for (let line of lines) {
            // if (line === "") continue; Salta righe vuote
            // Reduce indentation on finding a closing brace
            if (line.startsWith("}")) {
                indentLevel = Math.max(0, indentLevel - 1);
            }
            // add the line with the current indentation
            formattedCode.push(" ".repeat(indentLevel * indentSize) + line + "\n");
            // improve indentation on finding an opening brace
            if (line.endsWith("{")) {
                indentLevel++;
            }
        }
        return formattedCode.join("");
    }
    /**
     * This function validate the expression AST to ensure it is a valid expression
     * @param ast expression AST
     * @param typeExpression boolean is a flag that means the expression is a boolean expression if it's true
     *                       or an arithmetic expression if it's false
     * @returns boolean true if the expression is valid, false otherwise
     */
    checkExpression(ast, typeExpression) {
        if (!ast || !ast.body || ast.body.length !== 1)
            return false;
        const node = ast.body[0];
        if (node.type !== "ExpressionStatement")
            return false;
        return this.validateExpression(node.expression, typeExpression);
    }
    /**
     * This function recursively validates the expression AST to ensure it is a valid expression
     * @param node AST node
     * @param typeExpression boolean is a flag that means the expression is a boolean expression if it's true
     *                       or an arithmetic expression if it's false
     * @returns true if the expression is boolean, false otherwise
     */
    validateExpression(node, typeExpression) {
        switch (node.type) {
            case "Literal":
                return typeof node.value === "boolean" || typeof node.value === "number";
            case "Identifier":
                return true; // Assume variables can be boolean or numbers
            case "UnaryExpression":
                if (node.operator === "!")
                    return this.validateExpression(node.argument, true);
                return false;
            case "LogicalExpression": // `&&`, `||`
                return this.validateBooleanExpression(node.left) && this.validateBooleanExpression(node.right);
            case "BinaryExpression":
                if (!typeExpression && ["+", "-", "*", "/"].includes(node.operator)) {
                    // Arithmetic operation: both sides must be numbers or valid arithmetic expressions
                    return this.validateArithmeticExpression(node.left) && this.validateArithmeticExpression(node.right);
                }
                if (["<", ">", "<=", ">=", "==", "!="].includes(node.operator)) {
                    // Comparison: both sides must be valid (either numbers, booleans, or arithmetic expressions)
                    return ((this.validateBooleanExpression(node.left) && this.validateBooleanExpression(node.right)) ||
                        (this.validateArithmeticExpression(node.left) && this.validateArithmeticExpression(node.right)));
                }
                return false;
            case "ParenthesizedExpression":
                return this.validateExpression(node.expression, false);
            default:
                return false;
        }
    }
    /**
     * This function recursively validates the expression AST to ensure it is a valid boolean expression
     * @param node AST node
     * @returns true if the expression is boolean, false otherwise
     */
    validateBooleanExpression(node) {
        switch (node.type) {
            case "Literal":
                return typeof node.value === "boolean";
            case "LogicalExpression": // &&, ||
                return this.validateBooleanExpression(node.left) && this.validateBooleanExpression(node.right);
            case "BinaryExpression": // >, <, >=, <=, ==, !=
                return ["<", ">", "<=", ">=", "==", "!="].includes(node.operator) &&
                    ((this.validateBooleanExpression(node.left) && this.validateBooleanExpression(node.right)) ||
                        (this.validateArithmeticExpression(node.left) && this.validateArithmeticExpression(node.right)));
            case "UnaryExpression": // !true
                return node.operator === "!" && this.validateBooleanExpression(node.argument);
            case "Identifier":
                return true; // Assuming variables can be boolean
            case "ParenthesizedExpression":
                return this.validateBooleanExpression(node.expression);
            default:
                return false;
        }
    }
    /**
     * This function recursively validates the expression AST to ensure it is a valid arithmetic expression
     * @param node AST node
     * @returns true if the expression is a valid arithmetic expression, false otherwise
     */
    validateArithmeticExpression(node) {
        switch (node.type) {
            case "Literal":
                return typeof node.value === "number";
            case "BinaryExpression": // +, -, *, /
                return ["+", "-", "*", "/"].includes(node.operator) &&
                    this.validateArithmeticExpression(node.left) &&
                    this.validateArithmeticExpression(node.right);
            case "Identifier":
                return true; // Assuming variables can be numbers
            case "ParenthesizedExpression":
                return this.validateArithmeticExpression(node.expression);
            default:
                return false;
        }
    }
    /**
     * Validate the expression AST to ensure it is a valid arithmetic expression
     * @param ast expression AST
     * @returns boolean true if the expression is valid, false otherwise
     */
    checkArithmeticExpression(ast) {
        if (!ast || !ast.body || ast.body.length !== 1)
            return false;
        const node = ast.body[0];
        if (node.type !== "ExpressionStatement")
            return false;
        return this.validateArithmeticExpression(node.expression);
    }
    /**
 * This function reads the function annotations and saves the relative miniSL code in a map
 * @param i index of the just readed annotation from the annotations array
 * @param annotation annotation readed without parameters
 * @param params parameters of the function
 * @throws Error if the function is not found in the map or in the annotations array
 */
    findFunctionAnnotations() {
        for (let i = this.annotations.length - 1; i >= 0; --i) {
            //selecting the unspaced annotation controlStatements
            const ann = this.annotations[i];
            let unspacedAnn = ann.replace(/\s/g, "");
            unspacedAnn = this.config.endAnnotation.length > 0 ? unspacedAnn.slice(0, -this.config.endAnnotation.length) : unspacedAnn;
            let startIndex = unspacedAnn.indexOf(`${this.config.startAnnotation}${this.config.miniSLID}:`) + this.config.startAnnotation.length + this.config.miniSLID.length + 1;
            let endIndex = unspacedAnn.indexOf("(", startIndex);
            if (endIndex !== -1) {
                const annotation = unspacedAnn.substring(startIndex, endIndex);
                startIndex = endIndex + 1;
                if (annotation.startsWith(this.config.controlStatements.function)) {
                    //check if the guard is well formed
                    const params = unspacedAnn.substring(startIndex, unspacedAnn.length - 1).split(",");
                    if (!params.every(param => param.match(/^[a-zA-Z_]*[a-zA-Z0-9_]*$/))) {
                        throw new Error("Invalid parameter passed to function annotation: " + unspacedAnn);
                    }
                    const fnName = annotation.substring(this.config.controlStatements.function.length);
                    let openedStatements = 0;
                    let closedStatements = 0;
                    let j;
                    for (j = i + 1; j < this.annotations.length && (openedStatements >= closedStatements); j++) {
                        const annotatedLine = this.annotations[j];
                        const miniSLComment = this.config.startAnnotation + " " + this.config.miniSLID + ":";
                        //selecting the annotation
                        let startIndex = annotatedLine.indexOf(miniSLComment) + miniSLComment.length;
                        let endIndex = this.config.endAnnotation.length > 0 ? annotatedLine.indexOf(this.config.endAnnotation, startIndex) : annotatedLine.length;
                        let ann = annotatedLine.substring(startIndex, endIndex).trim();
                        if (ann.startsWith(this.config.controlStatements.end)) {
                            closedStatements++;
                        }
                        else if (ann.startsWith(this.config.controlStatements.for)) {
                            openedStatements++;
                        }
                        else if (ann.startsWith(this.config.controlStatements.if)) {
                            openedStatements++;
                        }
                        else if (ann.startsWith(this.config.controlStatements.function)) {
                            throw new Error("this must never happen");
                        }
                    }
                    let code = this.annotations.splice(i, (j) - (i));
                    code.pop(); //Remove last "end" statement
                    code.shift(); //Remove first "function" statement
                    this.functionsAnnotation.set(fnName, { params: params, code: code });
                }
                else if (annotation.startsWith(this.config.controlStatements.invoke + this.entrypoint)) {
                    this.entrypoint = ann;
                }
            }
        }
    }
}
new Extractor().extract();
//# sourceMappingURL=extractor.js.map