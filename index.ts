import { generateColoredAsciiArt } from "./src/asciiArt";
import BooleanTable from "./src/booleanTable";

generateColoredAsciiArt("BOOLEAN-TABLE", "A simple Boolean Table Generator");

const booleanTable = new BooleanTable("(a | b) & ~c");

booleanTable.generateTable();
