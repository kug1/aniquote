import { QuoteModel } from "../models/quote.model.ts";
import { colors, process } from "../../deps.ts";

export class Logger {
  getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  public error(errMsg: string) {
    console.log(colors.red(errMsg));
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
    await this.funky(colors.brightRed(quote.anime + "\n"), 150, true);
    await this.funky(colors.brightCyan(quote.character + ":"), 130, true);
    await this.funky(colors.bold('"' + quote.quote + '"'), 105, true);
  }

  public logArrQuotes(quoteArr: QuoteModel[]) {
    const length = quoteArr.length;
    this.logQuote(quoteArr[this.getRandomNumber(0, length)]);
  }

  public list(data: string[]) {
    data.sort((a: string, b: string) => a.localeCompare(b));

    // const res = [];

    // while (data.length) {
    //   res.push(data.splice(0, 7));
    // }

    console.table(data);
  }
}
