import BooleanTable from "./src/booleanTable";
import Parser from "./src/parser";

const booleanTable = new BooleanTable("(a | b) & ~c");

booleanTable.generateTable();
