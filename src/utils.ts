export const WHITESPACES = /^\s*$/;
export const NON_SYMBOL = /[a-zA-Z]\w*/;
export const WORD = /\b/;
export const SPACES = /\s/g;

export const numberToBinary = (n: number, argsLen: number): string => {
    return n.toString(2).padStart(argsLen, "0");
}