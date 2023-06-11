import { QuoteModel } from "../types/types.ts";
import { crayon } from "../../deps.ts";
import process from "node:process";

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

  public logQuote(quote: QuoteModel) {
    process.stdout.write(`${quote.quote}\n\t -- ${quote.character}\n\n`);
  }
}
