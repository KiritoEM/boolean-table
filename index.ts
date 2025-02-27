import BooleanTable from "./src/booleanTable";
import Tokenizer from "./src/lexer";

const booleanTable = new BooleanTable(new Tokenizer());

console.log(booleanTable.run());