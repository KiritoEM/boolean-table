export type CLIArgs = "help" | "exit" | "expression";

const getExpression = (process: NodeJS.Process): string | null => {
    const args = process.argv;
    const arg = args[2] as CLIArgs;

    switch (arg) {
        case "expression":
            return args[3];
        case "help":
            displayHelp();
            return null;
        default:
            return null;
    }
};

const displayHelp = () => {
    console.log(`Usage: boolean-table [command]

Commands:
expression <expression>   Print the boolean table for the given expression
help                      Display this help screen`);
};


export default {
    getExpression,
    displayHelp
};
