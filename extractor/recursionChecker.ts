// This script checks for recursive functions in a call graph.
// It uses a depth-first search (DFS) approach to detect cycles in the graph.
// If a function calls itself directly or indirectly, it is considered recursive.

export class CallGraph {
    private graph: Record<string, Set<string>> = {};

    addFunction(name: string): void {
        if (!this.graph[name]) {
            this.graph[name] = new Set<string>();
        }
    }

    addCall(from: string, to: string): void {
        this.addFunction(from);
        this.addFunction(to);
        this.graph[from].add(to);
    }

    getCalls(functionName: string): Set<string> {
        return this.graph[functionName] || new Set<string>();
    }

    print(): string {
        let result = "Call Graph:\n";
        for (const fn in this.graph) {
            result += `${fn} -> ${Array.from(this.graph[fn]).join(", ")}\n`;
        }
        return result;
    }

    getItem(key: string): Set<string> {
        return this.graph[key] || new Set<string>();
    }
}

export class RecursionChecker {
    private annotations: string[];
    private callGraph: CallGraph;
    private config;

    constructor(annotations: string[], config: Config) {
        this.config = config;
        this.annotations = annotations;
        this.callGraph = new CallGraph();
        this.buildCallGraph(); // Build the call graph from the annotations
    }

    haveRecursiveFunction(nodeName:string): boolean {
        const visited = new Set<string>();
    
        for (const startNode of this.callGraph.getItem(nodeName)) {
            if (visited.has(startNode)) continue;
    
            const stack: { node: string, entered: boolean }[] = [];
            const recStack = new Set<string>();
    
            stack.push({ node: startNode, entered: false });
    
            while (stack.length > 0) {
                const current = stack.pop()!;
    
                if (current.entered) {
                    // Esco dal nodo, rimuovo dallo stack di ricorsione
                    recStack.delete(current.node);
                    continue;
                }
    
                // Prima volta che entro nel nodo
                if (recStack.has(current.node)) {
                    // Nodo già in corso ⇒ ciclo trovato
                    return true;
                }
    
                visited.add(current.node);
                recStack.add(current.node);
    
                // Riaggiungo il nodo con entered = true per la "fase di uscita"
                stack.push({ node: current.node, entered: true });
    
                // Aggiungo i vicini
                for (const neighbor of this.callGraph.getItem(current.node) || []) {
                    if (!visited.has(neighbor)) {
                        stack.push({ node: neighbor, entered: false });
                    } else if (recStack.has(neighbor)) {
                        // Vicino già in corso ⇒ ciclo trovato
                        return true;
                    }
                }
            }
        }
    
        return false;
    }

    private buildCallGraph(): void {
        //counters for the opened and closed statements '{ and }'
        let indentLevel = [];

        for (let i = 0; i < this.annotations.length; i++) {
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
                    indentLevel.pop();
                }
            } else {
                //selecting the parameters of the controlStatements 
                startIndex = endIndex + 1;
                ann = ann.substring(0, startIndex - 1);
                ann = ann.replace(/\s/g, "");

                 if (ann.startsWith(this.config.controlStatements.function)) {
                    const fnName = ann.substring(this.config.controlStatements.function.length);
                    indentLevel.push(fnName);
                    this.callGraph.addFunction(fnName);
                } else if (ann.startsWith(this.config.controlStatements.invoke)) {
                    const fnName = ann.substring(this.config.controlStatements.invoke.length);
                    this.callGraph.addCall(indentLevel[indentLevel.length - 1], fnName);
                } else if (ann === this.config.controlStatements.if || ann === this.config.controlStatements.for) {
                    //check if the annotation is a control statement
                    indentLevel.push(indentLevel[indentLevel.length - 1]);
                }
            }
        }

    }

    public printCallGraph(): void {
        console.log(this.callGraph.print());
    }
}