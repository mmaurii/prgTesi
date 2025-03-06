import * as fs from 'fs';

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
    };
}

class Extractor {
    private miniSLServices = "";
    private miniSLCodeFunction = new Map();
    private annotations;
    private config: Config;
    private annotatedCodeFilePath = "./annotatedCode/input0.ts";
    private extractorConfigFilePath = './estrattoreConfig.json';

    public extract(path: string = this.annotatedCodeFilePath): void {
        let miniSLCode = "\n";

        try {
            //ogetto contenente le configurazioni con cui sono state codificate le annotazioni
            this.config = JSON.parse(fs.readFileSync(this.extractorConfigFilePath, 'utf-8'));

            const fileContent = fs.readFileSync(path, 'utf-8');
            const lines = fileContent.split('\n');

            // Estraggo le annotazioni
            this.annotations = lines.filter(line => this.findAnnotation(line, this.config.miniSLID, this.config.startAnnotation, this.config.endAnnotation));

            if (this.annotations.length === 0) {
                console.error("Nessuna annotazione trovata");
                return;
            }

            //leggo le annotazioni e genero il codice miniSL
            miniSLCode += this.readAnnotations().join("");
        } catch (error) {
            console.error("Errore durante la lettura del file: ", error);
        }

        miniSLCode = this.miniSLServices + miniSLCode;

        let indentedCode = this.indentMiniSLCode(miniSLCode);
        
        console.log(indentedCode);
    }

    private writeFor(params: string): string {
        const variables = params.split(",");
        const regex = '/[()]/g';
        if (variables.length !== 2 || params.match(regex)) {
            throw new Error("Invalid parameters for for statement");
        }
        return `for(${variables[0]} in range(0, ${variables[1]})) {\n`;
    }

    private writeIf(params: string): string {
        let variable = params;
        if (variable.endsWith(")")) {
            const startIndex = variable.indexOf("(");
            const fnName = variable.substring(0, startIndex);
            const variables = variable.substring(startIndex + 1, variable.length - 1);
            return `if(${this.writeCall(fnName, variables)}) {\n`;
        }
        return `if(${variable}) {\n`;
    }

    private writeElse(): string {
        return `} else {\n`;
    }

    private writeCall(fnName: string, params: string): string {
        const variables = params.split(",");
        const regex = '[()]';

        for (let i = 0; i < variables.length; i++) {
            if (variables[i].match(regex)) {
                const strFunctionCode = this.miniSLCodeFunction.get(fnName);
                if(strFunctionCode){
                    return strFunctionCode;
                }else{
                    throw new Error("Function not found");
                }
            }
        }

        if(!this.miniSLServices.includes(`${fnName}`)){
            this.miniSLServices += `service ${fnName} : (void) -> void;\n`;
        } 

        return `call ${fnName}(${variables.join(", ")})`;
    }

    private writeMain(params: string): string {
        const variables = params.split(",");
        const regex = '/[()]/g';
        const variablesMapped = variables.map(i => {
            if (i.match(regex)) {
                i = i.substring(0, i.length - 2);
                if(!this.miniSLServices.includes(`${i}`)){
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

    //correggi
    private addFunction(annPosition, fnName: string, params: string): number {
        const variables = params.split(",");
        const regex = '[()]';
        const variablesMapped = variables.map(i => {
            if (i.match(regex)) {
                i = i.substring(0, i.length - 2);
                if(!this.miniSLServices.includes(`${i}`)){
                    this.miniSLServices += `service ${i} : (void) -> void;\n`;
                }
            } 
            return i;
        });

            
        let strFunctionCode = `(${variablesMapped.join(", ")}) => {\n`;
        let managed = this.readAnnotations(annPosition+1);
        strFunctionCode += managed.join("");

        this.miniSLCodeFunction.set(fnName, strFunctionCode);
        return managed.length;
    }

    private readAnnotations(index=0): String[] {
        let miniSLCode: String[] = new Array();
        let openedStatements = 0;
        let closedStatements = 0;

/*         for (let i = index; i<this.annotations.length && (openedStatements==0 || openedStatements!=closedStatements);i++) {
 */            
        for (let i = index; i<this.annotations.length && (openedStatements>=closedStatements);i++) {
            const ann = this.annotations[i];
            let unspacedAnn = ann.replace(/\s/g, "");
            unspacedAnn= this.config.endAnnotation.length>0?unspacedAnn.slice(0,-this.config.endAnnotation.length):unspacedAnn;
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
                    miniSLCode.push(this.writeIf(params));
                    openedStatements++;
                }else if (statement.startsWith(this.config.controlStatements.call+"main")){            
                    miniSLCode.push(this.writeMain(params));
                    openedStatements++;
                } else if (statement.startsWith(this.config.controlStatements.call)) {
                    const fnName = statement.substring(4);
                    miniSLCode.push(this.writeCall(fnName, params) + "\n");
                } else if (statement.startsWith(this.config.controlStatements.function)){
                    const fnName = statement.substring(8);
                    i += this.addFunction(i, fnName, params);
                }else {
                    console.error(`Unknown statement: ${statement}`);
                    return;
                }
            }
        }

        return miniSLCode;
    }

    private findAnnotation(line: string, miniSLID: string, startAnnotation: string, endAnnotation: string =""): boolean {
        if(!miniSLID||!startAnnotation){
            throw new Error("Parameters 'miniSLID' 'startAnnotation' cannot be empty or null");
        }

        if(!endAnnotation){
            return line.includes(`${startAnnotation} ${miniSLID}:`);
        }else{
            let startIndex = line.indexOf(`${startAnnotation} ${miniSLID}:`);
            let endIndex = line.lastIndexOf(`${endAnnotation}`);
            return startIndex !== -1 && endIndex !== -1 && startIndex+startAnnotation.length+miniSLID.length+2 < endIndex;
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
}



new Extractor().extract();
