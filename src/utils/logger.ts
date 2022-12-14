import { OptionsObject, QuoteModel } from "../types/types.ts";
import { crayon, process } from "../../deps.ts";

export class Logger {
  // Squeezed it in :P
  getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  public error(msg: string): void {
    console.log(crayon.red(msg));
  }

  public warn(msg: string): void {
    console.log(crayon.yellow(msg));
  }

  private async funky(str: string, delay: number, randomized: boolean) {
    const sleepy = (ms: number) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };

    for (const char of str) {
      process.stdout.write(char);
      await sleepy((randomized ? Math.random() : 1) * delay);
    }
    process.stdout.write("\n");
  }

  public async logFunkyQuote(quote: QuoteModel, _options?: OptionsObject) {
    await this.funky(crayon.red(quote.anime + "\n"), 150, true);
    await this.funky(crayon.lightCyan(quote.character + ":"), 130, true);
    await this.funky(crayon.bold('"' + quote.quote + '"'), 135, true);
  }
}
