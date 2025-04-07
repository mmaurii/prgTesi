// This script checks for recursive functions in a call graph.
// It uses a depth-first search (DFS) approach to detect cycles in the graph.
// If a function calls itself directly or indirectly, it is considered recursive.
export class CallGraph {
    constructor() {
        this.graph = {};
    }
    addFunction(name) {
        if (!this.graph[name]) {
            this.graph[name] = new Set();
        }
    }
    addCall(from, to) {
        this.addFunction(from);
        this.addFunction(to);
        this.graph[from].add(to);
    }
    getCalls(functionName) {
        return this.graph[functionName] || new Set();
    }
    print() {
        let result = "Call Graph:\n";
        for (const fn in this.graph) {
            result += `${fn} -> ${Array.from(this.graph[fn]).join(", ")}\n`;
        }
        return result;
    }
    getItem(key) {
        return this.graph[key] || new Set();
    }
}
export class RecursionChecker {
    constructor(annotations, config) {
        this.config = config;
        this.annotations = annotations;
        this.callGraph = new CallGraph();
        this.buildCallGraph(); // Build the call graph from the annotations
    }
    haveRecursiveFunction(functionName) {
        const stack = [functionName];
        const visited = new Set();
        while (stack.length > 0) {
            const currentFunction = stack.pop();
            if (visited.has(currentFunction)) {
                return true;
            }
            visited.add(currentFunction);
            const calledFunctions = this.callGraph.getItem(currentFunction);
            calledFunctions.forEach((calledFunction) => {
                stack.push(calledFunction);
            });
        }
        return false;
    }
    buildCallGraph() {
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
            }
            else {
                //selecting the parameters of the controlStatements 
                startIndex = endIndex + 1;
                ann = ann.substring(0, startIndex - 1);
                ann = ann.replace(/\s/g, "");
                if (ann.startsWith(this.config.controlStatements.function)) {
                    const fnName = ann.substring(this.config.controlStatements.function.length);
                    indentLevel.push(fnName);
                    this.callGraph.addFunction(fnName);
                }
                else if (ann.startsWith(this.config.controlStatements.invoke + "main")) {
                    indentLevel.push("main");
                    this.callGraph.addFunction("main");
                }
                else if (ann.startsWith(this.config.controlStatements.invoke)) {
                    const fnName = ann.substring(this.config.controlStatements.invoke.length);
                    this.callGraph.addCall(indentLevel[indentLevel.length - 1], fnName);
                }
                else if (ann === this.config.controlStatements.if || ann === this.config.controlStatements.for) {
                    //check if the annotation is a control statement
                    indentLevel.push(indentLevel[indentLevel.length - 1]);
                }
            }
        }
    }
    printCallGraph() {
        console.log(this.callGraph.print());
    }
}
//# sourceMappingURL=recursionChecker.js.map