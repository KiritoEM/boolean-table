import type { TreeNode } from "../parser/types";

export interface IBooleanTable {
    generateTable(): void;
    printTable(ast: TreeNode, propositions: string[]): void;
}

export type BinaryType = "1" | "0";
