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
    EQUAL_OPERATOR = "EQUAL",
    IMPLIES_OPERATOR = "IMPLIES",
    NOT_OPERATOR = "NOT",
    XOR_OPERATOR = "XOR",
    PROPOSITION = "PROPOSITION",
    RIGHT_PARENTHESE = "RIGHT_PARENTHESE",
    LEFT_PARENTHESE = "LEFT_PARENTHESE",
}