import type { IBooleanTable, BinaryType, hashTableRecord } from "./types";
import Tokenizer from "../lexer/index";
import Parser from "../parser";
import Proposition from "../proposition";
import type { TreeNode } from "../parser/types";
import Evaluate from "../evaluate";
import chalk from "chalk";
import { numberToBinary } from "../utils";

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

        const { Ntable, Npropositions } = this.fillTable(ast, propositionsList);
        this.printTable(Ntable, Npropositions);
    }


    fillTable(ast: TreeNode, propositions: string[]): { Ntable: hashTableRecord<string>, Npropositions: string[] } {
        const propositionsLength = propositions.length;
        const rows = Math.pow(2, propositionsLength);

        let table: hashTableRecord<string> = {};

        table[this.input] = [];

        for (let i = 0; i < propositionsLength; i++) {
            if (table[propositions[i]] !== undefined) continue;

            table[propositions[i]] = [];
        }

        //all input combinaisons
        for (let i = 0; i < rows; i++) {
            let binary = numberToBinary(i, propositionsLength);

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

        return { Ntable: table, Npropositions: propositions };

    }

    printTable(table: hashTableRecord<string>, propositions: string[]): void {
        console.log()
        console.log(`Table boolean for : ${chalk.green(`"${this.input}"`)}`);
        console.log()

        //print table
        propositions.push(`${this.input}`);
        let header = propositions.join('   |   ');

        console.log(header);
        console.log("-".repeat(header.length));

        for (let i = 0; i < table[propositions[0]].length; i++) {
            let row = [];
            for (let j = 0; j < propositions.length; j++) {
                row.push(table[propositions[j]][i]);
            };

            console.log(row.join('   |   '));
        };
    }
}

export default BooleanTable;