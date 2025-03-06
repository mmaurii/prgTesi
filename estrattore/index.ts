import * as fs from 'fs';

interface Config {
    startAnnotation: string;
    miniSLID: string;
    controlStatements: {
        "for": string;
        "call": string;
        "if": string;
        "else": string;
        "end": string;
    };
}

class Extractor {
    private miniSLServices = "";
    private extractorConfigFilePath = "./estrattoreConfig.json";    
    private  inputAnnotatedCode = "./input.ts";    

    public extract(path: string = this.inputAnnotatedCode): void {
        let miniSLCode = "\n";

        try {
            //ogetto contenente le configurazioni con cui sono state codificate le annotazioni
            const config: Config = JSON.parse(fs.readFileSync(this.extractorConfigFilePath, 'utf-8'));

            const fileContent = fs.readFileSync(path, 'utf-8');
            const lines = fileContent.split('\n');
            const annotations: string[] = lines.filter(line => line.includes(`${config.startAnnotation} ${config.miniSLID}:`));
            
            

            if (annotations.length === 0) {
                console.error("Nessuna annotazione trovata");
                return;
            }

            const mainAnnotation = annotations.shift()!;
            // Remove spaces from the annotation
            const unspaced = mainAnnotation.replace(/\s/g, "");
            let startIndex = unspaced.indexOf(`${config.startAnnotation}${config.miniSLID}:`) + config.startAnnotation.length + config.miniSLID.length + 1;
            let endIndex = unspaced.indexOf("(", startIndex);

            const statement = unspaced.substring(startIndex, endIndex);
            startIndex = endIndex + 1;
            endIndex = unspaced.indexOf(")", startIndex);
            const params = unspaced.substring(startIndex, endIndex);

            if (statement === config.controlStatements.call) {
                miniSLCode += this.writeMain(params);
            } else {
                console.error("La prima annotazione deve essere una call senza nome per il main");
                return;
            }

            for (const ann of annotations) {
                const unspacedAnn = ann.replace(/\s/g, "");
                startIndex = unspacedAnn.indexOf(`${config.startAnnotation}${config.miniSLID}:`) + config.startAnnotation.length + config.miniSLID.length + 1;
                endIndex = unspacedAnn.indexOf("(", startIndex);

                if (endIndex === -1) {
                    const statement = unspacedAnn.substring(startIndex);
                    if (statement === config.controlStatements.end) {
                        miniSLCode += this.writeCloseStatement();
                    } else if (statement === config.controlStatements.else) {
                        miniSLCode += this.writeElse();
                    } else {
                        console.error(`Unknown statement: ${statement}`);
                        return;
                    }
                } else {
                    const statement = unspacedAnn.substring(startIndex, endIndex);
                    startIndex = endIndex + 1;
                    endIndex = unspacedAnn.lastIndexOf(")");
                    const params = unspacedAnn.substring(startIndex, endIndex);

                    if (statement === config.controlStatements.for) {
                        miniSLCode += this.writeFor(params);
                    } else if (statement === config.controlStatements.if) {
                        miniSLCode += this.writeIf(params);
                    } else if (statement.startsWith(config.controlStatements.call)) {
                        const fnName = statement.substring(4);
                        miniSLCode += this.writeCall(fnName, params) + "\n";
                    } else {
                        console.error(`Unknown statement: ${statement}`);
                        return;
                    }
                }
            }

            miniSLCode += this.writeCloseStatement();
        } catch (error) {
            console.error("Errore durante la lettura del file: ", error);
        }

        miniSLCode = this.miniSLServices + miniSLCode;
        console.log(this.indentMiniSLCode(miniSLCode));
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
                const name = variables[i].substring(0, variables[i].length - 2);
                variables[i] = this.writeCall(name,"");
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
