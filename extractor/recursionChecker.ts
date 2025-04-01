// This script checks for recursive functions in a call graph.
// It uses a depth-first search (DFS) approach to detect cycles in the graph.
// If a function calls itself directly or indirectly, it is considered recursive.

export class CallGraph {
    private graph: Record<string, string[]> = {};

    addFunction(name: string): void {
        if (!this.graph[name]) {
            this.graph[name] = [];
        }
    }

    addCall(from: string, to: string): void {
        this.addFunction(from);
        this.addFunction(to);
        this.graph[from].push(to);
    }

    getCalls(functionName: string): string[] {
        return this.graph[functionName] || [];
    }

    print(): string {
        let result = "Call Graph:\n";
        for (const fn in this.graph) {
            result += `${fn} -> ${this.graph[fn].join(", ")}\n`;
        }
        return result;
    }

    getItem(key: string): string[] {
        return this.graph[key] || [];
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

    public haveRecursiveFunction(functionName): boolean {
        const stack: string[] = [functionName];
        const visited = new Set<string>();

        while (stack.length > 0) {
            const currentFunction = stack.pop()!;

            if (visited.has(currentFunction)) {
                return true;
            }

            visited.add(currentFunction);

            const calledFunctions = this.callGraph.getItem(currentFunction);
            for (const calledFunction of calledFunctions) {
                stack.push(calledFunction);
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
                } else if (ann.startsWith(this.config.controlStatements.invoke + "main")) {
                    indentLevel.push("main");
                    this.callGraph.addFunction("main");
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