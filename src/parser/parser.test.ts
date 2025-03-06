import { TokenTypes, type TokenObj } from "../lexer/types";
import Parser from "./index";

test("parserAST should parse expressions correctly", () => {
    const TOKENS: TokenObj[] = [
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
    ];

    const parser = new Parser(TOKENS);
    const ast = parser.parseToAST();

    expect(ast).toEqual({
        "type": "EQUAL",
        "left": {
            "type": "IMPLIES",
            "left": { "type": "PROP", "value": "a" },
            "right": {
                "type": "NOT",
                "operand": { "type": "PROP", "value": "b" }
            }
        },
        "right": {
            "type": "OR",
            "left": { "type": "PROP", "value": "b" },
            "right": { "type": "PROP", "value": "a" }
        }
    });
});
