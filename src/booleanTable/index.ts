import type { IBooleanTable, BinaryType } from "./types";
import Tokenizer from "../lexer/index";
import Parser from "../parser";
import Proposition from "../proposition";
import type { TreeNode } from "../parser/types";
import Evaluate from "../evaluate";

class BooleanTable implements IBooleanTable {
    private tokenizer = new Tokenizer();
    private evaluateAST = new Evaluate();
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

        this.printTable(ast, propositionsList);
    }


    printTable(ast: TreeNode, propositions: string[]) {
        const propositionsLength = propositions.length;
        const rows = Math.pow(2, propositionsLength);
        let table: { [key: string]: BinaryType[] } = {};

        table[this.input] = [];

        for (let i = 0; i < propositionsLength; i++) {
            table[propositions[i]] = [];
        }

        //all input combinaisons
        for (let i = 0; i < rows; i++) {
            let binary = i.toString(2).padStart(propositionsLength, "0");

            for (let j = 0; j < propositionsLength; j++) {
                if (propositions[j] === undefined) {
                    table[propositions[j]] = [];
                }
                else {
                    table[propositions[j]].push(binary[j] === "0" ? "0" : "1");
                }
            }

            const result = this.evaluateAST.evaluateExpression(ast, table, i);
            table[this.input].push(result);
        }

        //print table
        propositions.push(`${this.input}`);
        let header = propositions.join('   |   ');

        console.log("\n");
        console.log(header);
        console.log("-".repeat(header.length));

        for (let i = 0; i < propositions.length; i++) {
            let row = [];
            for (let j = 0; j < propositions.length; j++) {
                row.push(table[propositions[j]][i]);
            };

            console.log(row.join('   |   '));
        };

    }
}

export default BooleanTable;