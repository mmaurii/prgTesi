import { Config } from "./config.js";

export class MiniSLAnnotationGenerator {
  private configData: Config;
  private startAnnotation: string;
  private endAnnotation: string;

  constructor(configData: Config) {
    this.configData = configData;
    this.startAnnotation = this.setSignature();
    this.endAnnotation = this.setEndAnnotation();
  }

  private setSignature(): string {
    return this.configData.startAnnotation + " " + this.configData.miniSLID + ": ";
  }

  private setEndAnnotation(): string {
    return this.configData.endAnnotation;
  }

  private getMiniSLID(): string {
    return this.configData.miniSLID;
  }

  getForStatement(varName: string, end: string): string {
    return this.startAnnotation + this.configData.controlStatements.for + "(" + varName + ", " + end + ")" + this.endAnnotation;
  }

  getCallStatement(params: string[]): string {
    let statement = this.startAnnotation + this.configData.controlStatements.call + "(";
    for (let i = 0; i < params.length - 1; i++) {
      statement = params[i] + ",";
    }
    statement = params[params.length - 1] + ")" + this.endAnnotation;
    return statement;
  }

  getIfStatement(guard: string): string {
    return this.startAnnotation + this.configData.controlStatements.if + guard + this.endAnnotation;
  }

  getElseStatement(): string {
    return this.startAnnotation + this.configData.controlStatements.else + this.endAnnotation;
  }

  getEndStatement(): string {
    return this.startAnnotation + this.configData.controlStatements.end + this.endAnnotation;
  }

  getFunctionStatement(functionSignature: string): string {
    return this.startAnnotation + this.configData.controlStatements.function + " " + functionSignature + this.endAnnotation;
  }

  getInvokeStatement(functionInvoked: string): string {
    return this.startAnnotation + this.configData.controlStatements.invoke + " " + functionInvoked + this.endAnnotation;
  }
}
