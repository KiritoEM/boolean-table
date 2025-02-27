import type { ILexer } from "../lexer/types";
import type { IBooleanTable } from "./types";

class BooleanTable implements IBooleanTable {
    public tokenizer: ILexer;

    constructor(tokenizer: ILexer) {
        this.tokenizer = tokenizer;
    }

    run() {
        return this.tokenizer.tokenizeInput("!a & (!b) | c ^ d");
    }
}

export default BooleanTable;