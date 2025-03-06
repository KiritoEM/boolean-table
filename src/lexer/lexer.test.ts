import Lexer from ".";
import { TokenTypes } from "./types";

test("tokenizeInput should tokenize correctly input", () => {
    const expression = "(a -> ~b) == (b | a)";

    const lexer = new Lexer();
    const tokens = lexer.tokenizeInput(expression);

    expect(tokens).toEqual([
        { type: TokenTypes.LEFT_PARENTHESE, value: "(" },
        { type: TokenTypes.PROPOSITION, value: "a" },
        { type: TokenTypes.IMPLIES_OPERATOR, value: "->" },
        { type: TokenTypes.NOT_OPERATOR, value: "~" },
        { type: TokenTypes.PROPOSITION, value: "b" },
        { type: TokenTypes.RIGHT_PARENTHESE, value: ")" },
        { type: TokenTypes.EQUAL_OPERATOR, value: "==" },
        { type: TokenTypes.LEFT_PARENTHESE, value: "(" },
        { type: TokenTypes.PROPOSITION, value: "b" },
        { type: TokenTypes.OR_OPERATOR, value: "|" },
        { type: TokenTypes.PROPOSITION, value: "a" },
        { type: TokenTypes.RIGHT_PARENTHESE, value: ")" },
    ])
})