export type TreeNode<T = string> = {
    type: string;
    left?: TreeNode<T>;
    right?: TreeNode<T>;
    value?: string;
    operand?: TreeNode<T>;
}