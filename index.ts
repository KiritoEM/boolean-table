import BooleanTable from "./src/booleanTable";
import Tokenizer from "./src/lexer";
import Parser from "./src/parser";

const booleanTable = new BooleanTable(new Tokenizer());
const parser = new Parser(booleanTable.run());

console.log(parser.parseToAST());