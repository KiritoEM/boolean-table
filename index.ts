import BooleanTable from "./src/booleanTable";
import Tokenizer from "./src/tokenizer";

const booleanTable = new BooleanTable(new Tokenizer());

console.log(booleanTable.run());