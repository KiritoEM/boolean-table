import { TokenTypes, type ILexer, type TokenObj } from "./types";
import { NON_SYMBOL, SPACES, WHITESPACES, WORD } from "../utils";

class Lexer implements ILexer {
    tokenizeInput(str: string): TokenObj[] {
        if (!str || WHITESPACES.test(str)) {
            return [];
        }

        let words = this.preprocessStr(str.split(WORD));
        let tokens: TokenObj[] = [];

        for (let char of words) {
            switch (char) {
                case "(":
                    tokens.push(this.createToken(TokenTypes.LEFT_PARENTHESE, char));
                    break;
                case ")":
                    tokens.push(this.createToken(TokenTypes.RIGHT_PARENTHESE, char));
                    break;
                case "|":
                    tokens.push(this.createToken(TokenTypes.OR_OPERATOR, char));
                    break;
                case "&":
                    tokens.push(this.createToken(TokenTypes.AND_OPERATOR, char));
                    break;
                case "~":
                    tokens.push(this.createToken(TokenTypes.NOT_OPERATOR, char));
                    break;
                default:
                    break;
            }

            if (NON_SYMBOL.test(char)) {
                tokens.push(this.createToken(TokenTypes.PROPOSITION, char));
            }
        }

        return tokens;
    }

    preprocessStr(str: string[]): string[] {
        let tokens = [];
        let i = 0;

        while (i < str.length) {
            str[i] = str[i].replace(SPACES, "");

            if (!str[i].length) {
                str.splice(i, 1); //remove empty strings
            }
            else if (!NON_SYMBOL.test(str[i])) {
                let arr = [];

                let j = 0;
                while (j < str[i].length) {
                    arr.push(str[i][j]);
                    j++;
                }

                str.splice(i, 1, ...arr); //replace current symbol token with new arr tokens
            }

            i++;
        }

        return str;

    }

    createToken(type: TokenTypes, value: string): TokenObj {
        return {
            type,
            value
        }
    }
}

export default Lexer;