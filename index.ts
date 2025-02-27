import { generateColoredAsciiArt } from "./src/asciiArt";
import BooleanTable from "./src/booleanTable";
import CLI from "./src/CLI";

if (process.argv.length < 3 || process.argv.length > 4) {
    generateColoredAsciiArt("BOOLEAN-TABLE", "A simple Boolean Table Generator");
    CLI.displayHelp();
} else {
    const expression = CLI.getExpression(process);

    if (expression) {
        const booleanTable = new BooleanTable(expression);
        booleanTable.generateTable();
    }

    else {
        generateColoredAsciiArt("BOOLEAN-TABLE", "A simple Boolean Table Generator");
        CLI.displayHelp();
    }
}