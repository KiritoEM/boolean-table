export interface ILexer {
    tokenizeInput: (str: string) => TokenObj[];
    createToken: (type: TokenTypes, value: string) => TokenObj;
    preprocessStr: (str: string[]) => string[];
}

export type TokenObj = {
    type: TokenTypes;
    value: string;
}

export enum TokenTypes {
    OR_OPERATOR = "OR",
    AND_OPERATOR = "AND",
    NOT_OPERATOR = "NOT",
    XOR_OPERATOR = "XOR",
    PROPOSITION = "PROPOSITION",
    RIGHT_PARENTHESE = "RIGHT_PARENTHESE",
    LEFT_PARENTHESE = "LEFT_PARENTHESE",
}