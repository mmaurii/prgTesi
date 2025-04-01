var Checker = /** @class */ (function () {
    function Checker(text) {
        this.text = text;
    }
    Checker.prototype.annotate = function () {
        // Simple annotation logic: wrap the text in brackets
        return "[".concat(this.text, "]");
    };
    return Checker;
}());
// Example usage:
var annotator = new Checker("Hello, World!");
var annotatedText = annotator.annotate();
console.log(annotatedText); // Output: [Hello, World!]
//# sourceMappingURL=checker.js.map