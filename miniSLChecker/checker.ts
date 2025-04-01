class Checker {
  constructor(private text: string) {}

  annotate(): string {
    // Simple annotation logic: wrap the text in brackets
    return `[${this.text}]`;
  }
}

// Example usage:
const annotator = new Checker("Hello, World!");
const annotatedText = annotator.annotate();
console.log(annotatedText); // Output: [Hello, World!]