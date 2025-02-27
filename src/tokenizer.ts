import type { ITokenizer } from "./types";
import { NON_SYMBOL, SPACES, WHITESPACES, WORD } from "./utils/rules";

class Tokenizer implements ITokenizer {
    tokenizeInput(str: string): string[] {
        if (!str || WHITESPACES.test(str)) {
            return []
        }

        let i = 0;
        let words = str.split(WORD);

        while (i < words.length) {
            words[i] = words[i].replace(SPACES, "");

            if (!words[i].length) {
                words.splice(i, 1); //remove empty strings
            }
            else if (!NON_SYMBOL.test(words[i])) {
                let arr = [];

                let j = 0;
                while (j < words[i].length) {
                    arr.push(words[i][j]);
                    j++;
                }

                words.splice(i, 1, ...arr); //replace current symbol token with new arr tokens
            }

            i++;
        }

        return words;
    }
}

export default Tokenizer;