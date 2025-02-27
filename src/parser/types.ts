export type TreeNode<T = string> = {
    type: NodeType;
    left?: TreeNode<T>;
    right?: TreeNode<T>;
    value?: string;
    operand?: TreeNode<T>;
}

export type NodeType = "PROP" | "NOT" | "AND" | "OR";