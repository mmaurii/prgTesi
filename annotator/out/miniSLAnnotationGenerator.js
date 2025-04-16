export class MiniSLAnnotationGenerator {
    constructor(configData) {
        this.configData = configData;
        this.startAnnotation = this.setSignature();
        this.endAnnotation = this.setEndAnnotation();
    }
    setSignature() {
        return this.configData.startAnnotation + " " + this.configData.miniSLID + ": ";
    }
    setEndAnnotation() {
        return this.configData.endAnnotation;
    }
    getMiniSLID() {
        return this.configData.miniSLID;
    }
    getForStatement(varName, end) {
        return this.startAnnotation + this.configData.controlStatements.for + "(" + varName + ", " + end + ")" + this.endAnnotation;
    }
    getCallStatement(params) {
        let statement = this.startAnnotation + this.configData.controlStatements.call + "(";
        for (let i = 0; i < params.length - 1; i++) {
            statement = params[i] + ",";
        }
        statement = params[params.length - 1] + ")" + this.endAnnotation;
        return statement;
    }
    getIfStatement(guard) {
        return this.startAnnotation + this.configData.controlStatements.if + guard + this.endAnnotation;
    }
    getElseStatement() {
        return this.startAnnotation + this.configData.controlStatements.else + this.endAnnotation;
    }
    getEndStatement() {
        return this.startAnnotation + this.configData.controlStatements.end + this.endAnnotation;
    }
    getFunctionStatement(functionSignature) {
        return this.startAnnotation + this.configData.controlStatements.function + " " + functionSignature + this.endAnnotation;
    }
    getInvokeStatement(functionInvoked) {
        return this.startAnnotation + this.configData.controlStatements.invoke + " " + functionInvoked + this.endAnnotation;
    }
}
//# sourceMappingURL=miniSLAnnotationGenerator.js.map