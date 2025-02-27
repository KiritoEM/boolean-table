import type { ITokenizer } from "./types";
import { NON_SYMBOL, WHITESPACES } from "./utils/rules";

class Tokenizer implements ITokenizer {
    tokenizeInput(str: string): string[] {
        if (!str || WHITESPACES.test(str)) {
            return []
        }

        let i = 0;
        let words = str.split(/\b/);

        while (i < words.length) {
            words[i] = words[i].replace(/\s/g, "");

            if (!words[i].length) {
                words.splice(i, 1); //remove empty strings
            }
            else if (!NON_SYMBOL.test(words[i])) {
                let arr = [];

                for (let j = 0; j < words[i].length; j++) {
                    arr.push(words[i][j]);
                }

                words.splice(i, 1, ...arr); //replace current symbol token with new arr tokens
            }

            i++;
        }

        return words;
    }
}

export default Tokenizer;