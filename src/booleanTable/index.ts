import type { IBooleanTable, BinaryType, hashTableRecord } from "./types";
import Tokenizer from "../lexer/index";
import Parser from "../parser";
import Proposition from "../proposition";
import type { TreeNode } from "../parser/types";
import Evaluate from "../evaluate";
import chalk from "chalk";
import { numberToBinary, WORD, WORD_WITHOUT_PARENTHENSES } from "../utils";

class BooleanTable implements IBooleanTable {
    private tokenizer = new Tokenizer();
    private evaluateAST = new Evaluate();
    private input: string;
    private table: hashTableRecord<string> = {};
    private step: boolean | undefined;

    constructor(input: string, step?: boolean) {
        this.input = input;
        this.step = step;
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

        this.fillTable(ast, propositionsList);
        this.printTable(this.table, propositionsList);
    }


    fillTable(ast: TreeNode, propositions: string[]) {
        const propositionsLength = propositions.length;
        const rows = Math.pow(2, propositionsLength);

        this.table[this.input] = [];

        for (let i = 0; i < propositionsLength; i++) {
            if (this.table[propositions[i]] !== undefined) continue;

            this.table[propositions[i]] = [];
        }

        //all input combinaisons
        for (let i = 0; i < rows; i++) {
            let binary = numberToBinary(i, propositionsLength);

            for (let j = 0; j < propositionsLength; j++) {
                if (propositions[j] === undefined) {
                    this.table[propositions[j]] = [];
                }
                else {
                    this.table[propositions[j]].push(binary[j] === "0" ? "0" : "1");
                }
            }

            //all subexpressions and expressions
            const result = this.evaluateAST.evaluateExpression(ast, this.table, i);
            this.table[this.input].push(result);

            const evaluations = this.evaluateAST.getEvaluations();
            this.fillSubexpressions(evaluations);
        }
    }

    fillSubexpressions(evaluations: Map<TreeNode, BinaryType>) {
        evaluations.forEach((value, key, callback) => {
            const subexpression = this.evaluateAST.treeToExpression(key);

            //verify if input
            if (subexpression.match(WORD_WITHOUT_PARENTHENSES)?.[0] === this.input.match(WORD_WITHOUT_PARENTHENSES)?.[0]) {
                return;
            }

            if (!this.table[subexpression]) {
                this.table[subexpression] = [];
            }
            else {
                this.table[subexpression].push(value);
            }
        })

    }

    printTable(table: hashTableRecord<string>, propositions: string[]): void {
        console.log(table)
        console.log()
        console.log(`Table boolean for : ${chalk.green(`"${this.input}"`)}`);
        console.log()

        //print table
        const allExpressions = [...propositions,
        ...(this.step ? Object.keys(table).filter((exp) => !propositions.includes(exp) && exp !== this.input) : []),
        this.input
        ];
        let header = allExpressions.join('   |   ');

        console.log(header);
        console.log("-".repeat(header.length));

        for (let i = 0; i < table[propositions[0]].length; i++) {
            let row = allExpressions.map((exp) => table[exp][i]);
            console.log(row.join('   |   '));
        };
    }
}

export default BooleanTable;