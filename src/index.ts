import { generateColoredAsciiArt } from "./asciiArt";
import BooleanTable from "./booleanTable";
import CLI from "./CLI";

const runTool = () => {
    if (process.argv.length < 3 || process.argv.length > 5) {
        generateColoredAsciiArt("BOOLEAN-TABLE", "A simple Boolean Table Generator");
        CLI.displayHelp();
    } else {
        if (typeof CLI.getExpression(process) !== null) {
            const res = CLI.getExpression(process);

            if (res?.expression) {
                const booleanTable = new BooleanTable(res?.expression, res.step);
                booleanTable.generateTable();
            }
        }
    }
}

export { runTool };