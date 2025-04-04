import * as fs from 'fs';

async function readFile(path: string): Promise<string> {
  try {
    const data = await fs.promises.readFile(path, 'utf-8');
    return data;
  } catch (error) {
    console.error('Error while reading the file:\n', error);
  }
  return ""; // Return empty string in case of error
}

class Checker {
  private path: string;

  constructor(path:any) {
    if (!path) {
      throw new Error("Path is undefined");
    }
    this.path = path;
  }

  async check(): Promise<string> {
    // Simple annotation logic: wrap the text in brackets
    return `[xhjhxbhjbahsd]`;
  }
}

// Example usage:
try {
  const annotator = new Checker("./miniSLCode.txt");
  const annotatedText = annotator.check();
  console.log(annotatedText); // Output: [Hello, World!]
} catch (error) {
  console.error('Error:', error);
}