import type { BinaryType, hashTableRecord } from "./booleanTable/types";
import type { TreeNode } from "./parser/types";

class Evaluate {
    private evaluations: Map<TreeNode, BinaryType> = new Map();
    private memo: Map<TreeNode, BinaryType> = new Map();

    evaluateExpression(node: TreeNode, table: hashTableRecord<string>, index: number): BinaryType {
        if (node.type === "PROP" && typeof node.value !== "undefined") {
            let value = table[node.value][index];
            return value;
        }

        let result: BinaryType = "0";

        if (node.type === "OR" && node.left && node.right) {
            const left = this.evaluateExpression(node.left, table, index);
            const right = this.evaluateExpression(node.right, table, index);

            result = left === "1" || right === "1" ? "1" : "0";
        }

        else if (node.type === "AND" && node.left && node.right) {
            const left = this.evaluateExpression(node.left, table, index);
            const right = this.evaluateExpression(node.right, table, index);

            result = left === "1" && right === "1" ? "1" : "0";
        }

        else if (node.type === "NOT" && node.operand) {
            const value = this.evaluateExpression(node.operand, table, index);

            result = value === "1" ? "0" : "1";
        }


        else if (node.type === "IMPLIES" && node.left && node.right) {
            const left = this.evaluateExpression(node.left, table, index);
            const right = this.evaluateExpression(node.right, table, index);

            if (left === "1" && right === "0") {
                result = "0";
            } else {
                result = "1";
            }
        }

        else if (node.type === "EQUAL" && node.left && node.right) {
            const left = this.evaluateExpression(node.left, table, index);
            const right = this.evaluateExpression(node.right, table, index);

            result = left === right ? "1" : "0";
        }

        this.evaluations.set(node, result);
        return result;
    }

    getEvaluations(): Map<TreeNode, BinaryType> {
        return this.evaluations;
    }

    treeToExpression(node: TreeNode): string {
        let expression: string = "";

        switch (node.type) {
            case "IMPLIES":
                expression = `${this.treeToExpression(node.left!)} -> ${this.treeToExpression(node.right!)}`;
                break;
            case "EQUAL":
                expression = `${this.treeToExpression(node.left!)} == ${this.treeToExpression(node.right!)}`;
                break;
            case "OR":
                expression = `${this.treeToExpression(node.left!)} | ${this.treeToExpression(node.right!)}`;
                break;
            case "AND":
                expression = `${this.treeToExpression(node.left!)} & ${this.treeToExpression(node.right!)}`;
                break;
            case "NOT":
                expression = `~${this.treeToExpression(node.operand!)}`;
                break;
            case "PROP":
                expression = node.value as string;
                break;
            case "XOR":
                expression = `${this.treeToExpression(node.left!)} ^ ${this.treeToExpression(node.right!)}`
                break;

            default:
                throw new Error("Node type not found: ", node.type);
        }

        return expression;
    }
}

export default Evaluate;