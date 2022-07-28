import * as nano from "https://deno.land/x/nanocolors@0.1.12/mod.ts";
import { QuoteModel } from "../models/quote.model.ts";
import { process } from "https://deno.land/std@0.147.0/node/process.ts";

export class Logger {
  getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  public async funky(str: string, delay: number, randomized: boolean) {
    const sleepy = (ms: number) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };

    for (const char of str) {
      process.stdout.write(char);
      await sleepy((randomized ? Math.random() : 1) * delay);
    }
    process.stdout.write("\n");
  }

  public async logQuote(quote: QuoteModel) {
    await this.funky(nano.red(quote.anime + "\n"), 200, true);
    await this.funky(nano.cyan(quote.character + ":"), 150, true);
    await this.funky(nano.bold('\t"' + quote.quote + '"'), 130, true);
  }

  public logArrQuotes(quoteArr: QuoteModel[]) {
    const length = quoteArr.length;
    this.logQuote(quoteArr[this.getRandomNumber(0, length)]);
  }

  public logHelpMessage() {
    console.log(
      "\nUsage:\n",
      "\taniquote [flag]\n",
      "\taniquote [command]\n",
      "\n",
      "\nAvailable Commands\n",
      "\trandom    Print a random quote.\n",
      "\tlist      Print a list of all available anime in a table.\n",
      "\thelp      Print help message.",
      "\n",
      "\nFlags:",
      "\n\t--anime, -a <anime-name>\n",
      "\t\tPrints a random quote from the anime.\n",
      "\n\t--character, -c <character-name>\n",
      "\t\tPrints a random quote of the character.\n",
      "\n\t--help, -h\n",
      "\t\tPrint help message\n",
      "\nExamples:\n",
      "\taniquote --anime Kuroko no Basuke",
      "\n\t\tPrints a random Kuroko no Basket quote.\n",
      "\n\taniquote -c Guts",
      "\n\t\tPrints a random quote of Guts.",
      "\n"
    );
  }
}
