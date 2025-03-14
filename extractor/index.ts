import * as fs from 'fs';
import * as acorn from "acorn";

interface Config {
    startAnnotation: string;
    endAnnotation: string;
    miniSLID: string;
    controlStatements: {
        "for": string;
        "call": string;
        "if": string;
        "else": string;
        "end": string;
        "function": string;
        "invoke": string;
    };
}

async function readFile(path: string): Promise<string> {
    try {
        const data = await fs.promises.readFile(path, 'utf-8');
        return data;
    } catch (error) {
        console.error('Errore nella lettura del file:', error);
    }
}

class Extractor {
    private miniSLServices = "";
    private miniSLFunctionCode = new Map();
    private annotations;
    private config: Config;
    private annotatedCodeFilePath = "./annotatedCode/input0.ts";
    private extractorConfigFilePath = './extractorConfig.json';
    //flag to stop finding annotations
    private endOfAnnotation = true;

    public async extract(path: string = this.annotatedCodeFilePath): Promise<void> {
        let miniSLCode = "\n";

        try {
            //ogetto contenente le configurazioni con cui sono state codificate le annotazioni
            this.config = JSON.parse(await readFile(this.extractorConfigFilePath));

            const lines = (await readFile(this.annotatedCodeFilePath)).split("\n");
            // Estraggo le annotazioni
            this.annotations = lines.filter(line => this.findAnnotation(line, this.config.miniSLID, this.config.startAnnotation, this.config.endAnnotation));

            if (this.annotations.length === 0) {
                console.error("Nessuna annotazione trovata");
                return;
            }

            //leggo le annotazioni delle funzioni e genero il codice miniSL
            this.readFunctionAnnotations();

            //leggo le annotazioni del main e genero il codice miniSL
            miniSLCode += this.readAnnotations().join("");
        } catch (error) {
            console.error("Errore durante la lettura del file: ", error);
        }

        miniSLCode = this.miniSLServices + miniSLCode;

        //indenting code
        let indentedCode = this.indentMiniSLCode(miniSLCode);

        console.log(indentedCode);
    }

    private writeFor(params: string): string {
        const variables = params.split(",");
        const regex = /^[a-zA-Z]+[a-zA-Z0-9]*$/;
        if (variables.length !== 2) {
            throw new Error("Invalid number of parameter passed to for statement");
        }

        if (!variables[0].match(regex)) {
            throw new Error("the first parameter of for statement must be an iterator variable (i.e. i)");
        }

        const ast = acorn.parse(variables[1], { ecmaVersion: 2020 });

        if(this.checkArithmeticExpression(ast)){
            return `for(${variables[0]} in range(0, ${variables[1]})) {\n`;
        }else{
            throw new Error("the second parameter of for statement must be an expression that result in a number");
        }
    }

    private writeIf(guards: string): string {
        //const regex = /\(.*?\)/
        const regex = /[a-zA-Z]+[a-zA-Z0-9]*\(.*?\)$/;

        /*         if(guards.match(regex)) {
                    guards = guards.slice(guards.indexOf("(") + 1, guards.lastIndexOf(")"));
                } */

        const ast = acorn.parse(guards, { ecmaVersion: 2020 });

        if (this.checkExpression(ast, true)) {
            return `if(${guards}) {\n`;
        } else {
            if (guards.match(regex)) {
                let startIndex = guards.indexOf("(") + 1;
                let endIndex = guards.lastIndexOf(")");
                let param = guards.slice(startIndex, endIndex);
                let fnName = guards.slice(0, guards.indexOf("("));
                let ifGuard = this.writeCall(fnName, param);
                return `if(${ifGuard}) {\n`;
            } else {
                throw new Error("Invalid if guards");
            }
        }
    }

    private writeElse(): string {
        return `} else {\n`;
    }

    private writeCall(fnName: string, params: string): string {
        const variables = params.split(",");
        const regex = '[()]';

        for (let i = 0; i < variables.length; i++) {
            if (variables[i].match(regex)) {
                const ast = acorn.parse(variables[i], { ecmaVersion: 2020 });

                if (!this.checkExpression(ast, false)) {
                    throw new Error("call can'take Function as parameter");
                }
            }
        }

        if (!this.miniSLServices.includes(`${fnName}`)) {
            this.miniSLServices += `service ${fnName} : (void) -> void;\n`;
        }

        return `call ${fnName}(${params})`;
    }

    private writeMain(params: string): string {
        const variables = params.split(",");
        const regex = '/[()]/g';
        const variablesMapped = variables.map(i => {
            if (i.match(regex)) {
                i = i.substring(0, i.length - 2);
                if (!this.miniSLServices.includes(`${i}`)) {
                    this.miniSLServices += `service ${i} : (void) -> void;\n`;
                }
            }
            return i;
        });
        return `(${variablesMapped.join(", ")}) => {\n`;
    }

    private writeCloseStatement(): string {
        return `}\n`;
    }

    private getFunctionInvoked(index, fnName: string): string {
        if (this.miniSLFunctionCode.has(fnName)) {
            return this.miniSLFunctionCode.get(fnName);
        } else {
            //cerca l'annotazione della funzione nell'elenco delle annotazioni
            this.readFunctionAnnotations(index + 1);
            if (this.miniSLFunctionCode.has(fnName)) {
                return this.miniSLFunctionCode.get(fnName);
            } else {
                throw new Error("Function not found");
            }
        }
    }

    private readAnnotations(index = 0): String[] {
        let miniSLCode: String[] = new Array();
        let openedStatements = 0;
        let closedStatements = 0;


        for (let i = index; i < this.annotations.length && (openedStatements >= closedStatements); i++) {
            const ann = this.annotations[i];
            let unspacedAnn = ann.replace(/\s/g, "");
            unspacedAnn = this.config.endAnnotation.length > 0 ? unspacedAnn.slice(0, -this.config.endAnnotation.length) : unspacedAnn;
            let startIndex = unspacedAnn.indexOf(`${this.config.startAnnotation}${this.config.miniSLID}:`) + this.config.startAnnotation.length + this.config.miniSLID.length + 1;
            let endIndex = unspacedAnn.indexOf("(", startIndex);

            if (endIndex === -1) {
                const statement = unspacedAnn.substring(startIndex);
                if (statement === this.config.controlStatements.end) {
                    miniSLCode.push(this.writeCloseStatement());
                    closedStatements++;
                } else if (statement === this.config.controlStatements.else) {
                    miniSLCode.push(this.writeElse());
                } else {
                    console.error(`Unknown statement: ${statement}`);
                    return;
                }
            } else {
                const statement = unspacedAnn.substring(startIndex, endIndex);
                startIndex = endIndex + 1;
                endIndex = unspacedAnn.lastIndexOf(")");
                const params = unspacedAnn.substring(startIndex, endIndex);

                if (statement === this.config.controlStatements.for) {
                    miniSLCode.push(this.writeFor(params));
                    openedStatements++;
                } else if (statement === this.config.controlStatements.if) {
                    const guard = ann.substring(ann.indexOf("(") + 1, ann.lastIndexOf(")"));
                    miniSLCode.push(this.writeIf(guard));
                    openedStatements++;
                } else if (statement.startsWith(this.config.controlStatements.invoke)) {
                    const fnName = statement.substring(this.config.controlStatements.invoke.length);
                    miniSLCode.push(this.getFunctionInvoked(i, fnName) + "\n");
                } else if (statement.startsWith(this.config.controlStatements.call + "main")) {
                    miniSLCode.push(this.writeMain(params));
                    openedStatements++;
                } else if (statement.startsWith(this.config.controlStatements.call)) {
                    const fnName = statement.substring(this.config.controlStatements.call.length);
                    miniSLCode.push(this.writeCall(fnName, params) + "\n");
                } else {
                    console.error(`Unknown statement: ${statement}`);
                    return;
                }
            }
        }

        return miniSLCode;
    }

    private findAnnotation(line: string, miniSLID: string, startAnnotation: string, endAnnotation: string = ""): boolean {
        if (!miniSLID || !startAnnotation) {
            throw new Error("Parameters 'miniSLID' 'startAnnotation' cannot be empty or null");
        }

        if (!endAnnotation) {
            return line.includes(`${startAnnotation} ${miniSLID}:`);
        } else {
            let startIndex = line.indexOf(`${startAnnotation} ${miniSLID}:`);
            let endIndex = line.lastIndexOf(`${endAnnotation}`);
            return startIndex !== -1 && endIndex !== -1 && startIndex + startAnnotation.length + miniSLID.length + 2 < endIndex;
        }
    }

    public indentMiniSLCode(code: string): string {
        const lines = code.split("\n").map((line) => line.trim()); // Divide in righe e rimuove spazi extra
        let indentLevel = 0;
        const indentSize = 2; // Spazi per indentazione
        let formattedCode = "";

        for (let line of lines) {
            if (line === "") continue; // Salta righe vuote

            // Riduci indentazione se la riga chiude una parentesi graffa
            if (line.startsWith("}")) {
                indentLevel = Math.max(0, indentLevel - 1);
            }

            // Aggiungi indentazione
            formattedCode += " ".repeat(indentLevel * indentSize) + line + "\n";

            // Aumenta indentazione dopo una parentesi aperta
            if (line.endsWith("{")) {
                indentLevel++;
            }
        }

        return formattedCode;
    }

    /**
     * Validate the expression AST to ensure it is a valid expression
     * @param ast expression AST
     * @param typeExpression boolean is a flag that means the expression is a boolean expression if it's true 
     *                       or an arithmetic expression if it's false
     * @returns boolean true if the expression is valid, false otherwise
     */ 
    private checkExpression(ast: any, typeExpression:boolean): boolean {
        if (!ast || !ast.body || ast.body.length !== 1) return false;
        const node = ast.body[0];
        if (node.type !== "ExpressionStatement") return false;
        
        return this.validateExpression(node.expression, typeExpression);
    }

    private validateExpression(node: any, typeExpression:boolean): boolean {
        switch (node.type) {
            case "Literal":
                return typeof node.value === "boolean" || typeof node.value === "number";
            case "Identifier":
                return true; // Assume variables can be boolean or numbers
            case "UnaryExpression":
                if (node.operator === "!") return this.validateExpression(node.argument, true);
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

/*     private validateType(node): boolean {
        if(node.left.type === "Literal" && node.right.type === "Literal") {
            return typeof node.left.value === typeof node.right.value;
        }
        return true;
    } */

    private validateBooleanExpression(node: any): boolean {
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
    
    private validateArithmeticExpression(node: any): boolean {
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
    private checkArithmeticExpression(ast: any): boolean {
        if (!ast || !ast.body || ast.body.length !== 1) return false;
        const node = ast.body[0];
        if (node.type !== "ExpressionStatement") return false;
        
        return this.validateArithmeticExpression(node.expression);
    }
    
    private readFunctionAnnotations(index = 0): void {
        for (let i = index; i < this.annotations.length && this.endOfAnnotation; i++) {
            const ann = this.annotations[i];
            let unspacedAnn = ann.replace(/\s/g, "");
            unspacedAnn = this.config.endAnnotation.length > 0 ? unspacedAnn.slice(0, -this.config.endAnnotation.length) : unspacedAnn;
            let startIndex = unspacedAnn.indexOf(`${this.config.startAnnotation}${this.config.miniSLID}:`) + this.config.startAnnotation.length + this.config.miniSLID.length + 1;
            let endIndex = unspacedAnn.indexOf("(", startIndex);

            if (endIndex !== -1) {
                const statement = unspacedAnn.substring(startIndex, endIndex);
                startIndex = endIndex + 1;
                endIndex = unspacedAnn.lastIndexOf(")");
                const params = unspacedAnn.substring(startIndex, endIndex);

                if (statement.startsWith(this.config.controlStatements.function)) {
                    const fnName = statement.substring(this.config.controlStatements.function.length);
                    let miniSLFunctionCode = this.readAnnotations(i + 1);
                    if (miniSLFunctionCode.length > 1) {
                        this.annotations.splice(i, miniSLFunctionCode.length + 1);
                        miniSLFunctionCode.pop(); // Remove last "end" statement
                        this.miniSLFunctionCode.set(fnName, miniSLFunctionCode.join(""));
                        i--;
                    }
                }
            }
        }
        this.endOfAnnotation = false;
    }
}


new Extractor().extract();