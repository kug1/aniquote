import { QuoteModel } from "../models/quote.model.ts";
import { colors, process } from "../../deps.ts";

export class Logger {
  // Squeezed it in :P
  getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  public error(msg: string): void {
    console.log(colors.red(msg));
  }

  public warn(msg: string): void {
    console.log(colors.yellow(msg));
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

  public async logFunkyQuote(quote: QuoteModel) {
    await this.funky(colors.brightRed(quote.anime + "\n"), 150, true);
    await this.funky(colors.brightCyan(quote.character + ":"), 130, true);
    await this.funky(colors.bold('"' + quote.quote + '"'), 135, true);
  }
}
