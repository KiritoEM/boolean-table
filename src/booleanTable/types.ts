import type { TreeNode } from "../parser/types";

export interface IBooleanTable {
    generateTable(): void;
    fillTable(ast: TreeNode, propositions: string[]): void;
}

export type BinaryType = "1" | "0";
