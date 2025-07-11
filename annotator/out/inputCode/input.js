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
function readFile(path) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield fs.promises.readFile(path, 'utf-8');
            return data;
        }
        catch (error) {
            console.error('Error while reading the file:\n', error);
        }
        return ""; // Return empty string in case of error
    });
}
class Checker {
    constructor(path) {
        if (!path) {
            throw new Error("Path is undefined");
        }
        this.path = path;
    }
    check() {
        return __awaiter(this, void 0, void 0, function* () {
            // Simple annotation logic: wrap the text in brackets
            return `[xhjhxbhjbahsd]`;
        });
    }
}
// Example usage:
try {
    const annotator = new Checker("./miniSLCode.txt");
    const annotatedText = annotator.check();
    console.log(annotatedText); // Output: [Hello, World!]
}
catch (error) {
    console.error('Error:', error);
}
//# sourceMappingURL=input.js.map