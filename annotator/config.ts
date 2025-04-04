export interface Config {
    //character that identifies the start of the inline comment
    startAnnotation: string;
    //character that identifies the end of the inline comment, can be empty
    endAnnotation: string;
    //miniSL annotation identifier
    miniSLID: string;
    //miniSL statements
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
