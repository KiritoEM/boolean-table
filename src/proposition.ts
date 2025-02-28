import type { TreeNode } from "./parser/types";

class Proposition {
    private ast: TreeNode;

    constructor(ast: TreeNode) {
        this.ast = ast;
    }

    listPropositions(): string[] {
        let lists = new Set<string>();

        this.preorderTraversal(this.ast, lists);

        return Array.from(lists);
    }

    private preorderTraversal(node: TreeNode, list: Set<string>) {
        if (node.type === 'PROP' && typeof node.value === "string") {
            list.add(node.value);
        }

        if (node.left) { //left child
            this.preorderTraversal(node.left, list);
        }

        if (node.right) { //right child
            this.preorderTraversal(node.right, list);
        }

        if (node.operand) { //operand
            this.preorderTraversal(node.operand, list);
        }
    }
}

export default Proposition;