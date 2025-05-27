import { SyntaxNode } from "tree-sitter";

export interface ExecutionTreeNode {
  node: SyntaxNode;
  children: ExecutionTreeNode[];
}
