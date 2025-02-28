import type { BinaryType, hashTableRecord } from "./booleanTable/types";
import type { TreeNode } from "./parser/types";

class Evaluate {
    evaluateExpression(node: TreeNode, table: hashTableRecord<string>, index: number): BinaryType {
        if (node.type === "PROP" && typeof node.value !== "undefined") {
            return table[node.value][index];
        }

        if (node.type === "OR" && node.left && node.right) {
            const left = this.evaluateExpression(node.left, table, index);
            const right = this.evaluateExpression(node.right, table, index);

            return left === "1" || right === "1" ? "1" : "0";
        }

        if (node.type === "AND" && node.left && node.right) {
            const left = this.evaluateExpression(node.left, table, index);
            const right = this.evaluateExpression(node.right, table, index);

            return left === "1" && right === "1" ? "1" : "0";
        }

        if (node.type === "NOT" && node.operand) {
            const value = this.evaluateExpression(node.operand, table, index);

            return value === "1" ? "0" : "1";
        }

        return "0";
    }
}

export default Evaluate;