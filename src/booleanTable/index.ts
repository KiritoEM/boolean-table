import type { IBooleanTable } from "./types";
import Tokenizer from "../lexer/index";
import Parser from "../parser";
import Proposition from "../proposition";

class BooleanTable implements IBooleanTable {
    private tokenizer = new Tokenizer();
    private input: string;

    constructor(input: string) {
        this.input = input;
    }

    generateTable() {
        const tokens = this.tokenizer.tokenizeInput(this.input);

        const parser = new Parser(tokens);
        const ast = parser.parseToAST();

        const proposition = new Proposition(ast);
        const propositionsList = proposition.listPropositions();

        if (propositionsList.length === 0) {
            console.log("Provide a valid propositional expression !!!");
            return;
        }
    }

    displayTable() {

    }
}

export default BooleanTable;