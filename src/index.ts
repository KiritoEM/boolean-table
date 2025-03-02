import { generateColoredAsciiArt } from "./asciiArt";
import BooleanTable from "./booleanTable";
import CLI from "./CLI";

const runTool = () => {
    if (process.argv.length < 3 || process.argv.length > 4) {
        generateColoredAsciiArt("BOOLEAN-TABLE", "A simple Boolean Table Generator");
        CLI.displayHelp();
    } else {
        const expression = CLI.getExpression(process);

        if (expression) {
            const booleanTable = new BooleanTable(expression);
            booleanTable.generateTable();
        }
    }
}

export { runTool };