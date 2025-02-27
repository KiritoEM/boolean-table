import type Tokenizer from "./tokenizer";
import type { IBooleanTable } from "./types";

class BooleanTable implements IBooleanTable {
    public tokenizer: Tokenizer;

    constructor(tokenizer: Tokenizer) {
        this.tokenizer = tokenizer;
    }

    run() {
        return this.tokenizer.tokenizeInput("!a & (!b) | c ^ d");
    }
}

export default BooleanTable;