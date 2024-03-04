import { QuoteModel } from "../types/types.ts";
import { crayon } from "../../deps.ts";
import process from "node:process";

export class Logger {
  public error(msg: string): void {
    console.log(crayon.red(msg));
  }

  public warn(msg: string): void {
    console.log(crayon.yellow(msg));
  }

  public logQuote(quote: QuoteModel) {
    process.stdout.write(`\n${quote.quote}\n -- ${quote.character}\n\n`);
  }
}
