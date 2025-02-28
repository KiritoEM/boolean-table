import { TokenTypes, type TokenObj } from "../lexer/types";
import type { TreeNode } from "./types";

class Parser {
    private tokens: Array<TokenObj>;
    private position: number = 0;

    constructor(tokens: TokenObj[]) {
        this.tokens = tokens;
    }

    parseToAST(): TreeNode {
        let node = this.parseEqual();

        return node;
    }

    private parseEqual(): TreeNode {
        let node = this.parseImplicies();

        while (this.getCurrentToken()?.type === TokenTypes.EQUAL_OPERATOR) {
            this.incrementToken();
            const right = this.parseImplicies();
            node = { type: 'OR', left: node, right: right };
        }

        return node;
    }
    private parseImplicies(): TreeNode {
        let node = this.parseOr();

        while (this.getCurrentToken()?.type === TokenTypes.IMPLIES_OPERATOR) {
            this.incrementToken();
            const right = this.parseOr();
            node = { type: 'OR', left: node, right: right };
        }

        return node;
    }

    private parseOr(): TreeNode {
        let node = this.parseAnd();

        while (this.getCurrentToken()?.type === TokenTypes.OR_OPERATOR) {
            this.incrementToken();
            const right = this.parseAnd();
            node = { type: 'OR', left: node, right: right };
        }

        return node;
    }

    private parseAnd(): TreeNode {
        let node = this.parseNot();

        while (this.getCurrentToken()?.type === TokenTypes.AND_OPERATOR) {
            this.incrementToken();
            const right = this.parseNot();
            node = { type: 'AND', left: node, right: right };
        }
        return node;
    }

    private parseNot(): TreeNode {
        if (this.getCurrentToken()?.type === TokenTypes.NOT_OPERATOR) {
            this.incrementToken();
            const operand = this.parseNot();

            return { type: 'NOT', operand: operand };
        }

        return this.parseFactor();
    }

    private parseFactor(): TreeNode {
        const token = this.getCurrentToken();

        if (!token) {
            throw new Error('Unexpected end of expression');
        }

        if (token.type === TokenTypes.LEFT_PARENTHESE) {
            this.incrementToken();
            const node = this.parseToAST();

            if (this.getCurrentToken()?.type !== TokenTypes.RIGHT_PARENTHESE) {
                throw new Error("No closing parenthesis !!!");
            }
            this.incrementToken();

            return node;
        } else if (token.type === TokenTypes.PROPOSITION) {
            this.incrementToken();
            return { type: 'PROP', value: token.value };
        }

        throw new Error('Unexpected token');
    }

    private getCurrentToken(): TokenObj | undefined {
        return this.tokens[this.position];
    }

    private incrementToken(): void {
        this.position++;
    }
}

export default Parser;
