import figlet from "figlet";
import gradient from "gradient-string";
import chalk from "chalk";

const generateColoredAsciiArt = async (name: string, description: string) => {
    const asciiArt = figlet.textSync(name, {
        font: "Standard",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 140,
        whitespaceBreak: true,
    });

    const gradientText = gradient(["#480ca8", "#c77dff"])(asciiArt);

    console.log("\n")
    console.log(gradientText);

    console.log(chalk.green(description));
    console.log();

};

export { generateColoredAsciiArt }