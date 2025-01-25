import { QuoteObject } from "../types/types.ts";
import { crayon } from "../../deps.ts";
import process from "node:process";

export class Logger {
  public error(errorMsg: string): void {
    console.log(crayon.lightRed(errorMsg));
  }

  public warn(msg: string): void {
    console.log(crayon.yellow(msg));
  }

  public logQuote(quote: QuoteObject) {
    process.stdout.write(
      `\n${quote.data.character.name} from ${quote.data.anime.name}\n -- ${quote.data.content}\n\n`,
    );
  }
}
