var Annotator = /** @class */ (function () {
    function Annotator(text) {
        this.text = text;
    }
    Annotator.prototype.annotate = function () {
        // Simple annotation logic: wrap the text in brackets
        return "[".concat(this.text, "]");
    };
    return Annotator;
}());
// Example usage:
var annotator = new Annotator("Hello, World!");
var annotatedText = annotator.annotate();
console.log(annotatedText); // Output: [Hello, World!]
//# sourceMappingURL=annotator.js.map