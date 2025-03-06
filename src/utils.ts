export const WHITESPACES = /^\s*$/;
export const NON_SYMBOL = /[a-zA-Z]\w*/;
export const WORD = /(==|->|[a-zA-Z]\w*|[()|&~])/g; // "==" or "->" or "a-z" or "() or "&" or "!"
export const WORD_WITHOUT_PARENTHENSES = /(==|->|[a-zA-Z]\w*|[&~])/g;
export const SPACES = /\s/g;

export const numberToBinary = (n: number, argsLen: number): string => {
    return n.toString(2).padStart(argsLen, "0");
}