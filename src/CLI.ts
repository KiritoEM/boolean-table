export type CLIArgs = "help" | "exit" | "expression";
export type SubcommandArgs = "--step";

type ExpressionReturn = {
    step: boolean;
    expression: string
}

const getExpression = (process: NodeJS.Process): ExpressionReturn | null => {
    const args = process.argv;
    const arg = args[2] as CLIArgs | undefined;
    const expression = args[3] as string;
    const subcommand = args[4] as SubcommandArgs | undefined;
    let res: ExpressionReturn | null = null;

    switch (arg) {
        case "expression":
            if (expression) {
                res = subcommand === "--step" ?
                    {
                        step: true,
                        expression
                    }
                    :
                    {
                        step: false,
                        expression
                    }
                    ;
            }
            break;

        case "help":
            displayHelp();
            return null;

        default:
            console.log("Error: Invalid command. Use 'help' for usage instructions.");
            return null;
    }

    return res;

};

const displayHelp = () => {
    console.log(`Usage: boolean-table [command] [expression] [options]

Commands:
  expression <expression>          Generates the truth table for the given expression 
  expression <expression> --step   Generates the truth table with step-by-step subexpressions
  help                             Display this help screen

Expressions:
  a-z or A-Z                      Variables 
  &                                AND 
  ~                                NOT 
  |                                OR 
  ->                               IMPLIES
  ==                               EQUAL`);
};

export default {
    getExpression,
    displayHelp
};
