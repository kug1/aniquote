import { Quotes } from "./quotes.ts";
import { Logger } from "./utils/logger.ts";
import { environment } from "./environment/environment.ts";

export class App {
  constructor(private quotes: Quotes, private logger: Logger) {}

  async run() {
    const command = Deno.args[0];

    switch (command) {
      case undefined:
        this.logger.logHelpMessage();
        break;
      case "help":
      case "h":
      case "--help":
      case "-h":
        this.logger.logHelpMessage();
        break;
      case "random":
        await this.quotes.getQuote(environment.random);
        break;
      case "--character":
      case "-c": {
        const [, ...args] = Deno.args;
        const name = args.join(" ");
        this.quotes.getQuote(environment.byCharacter + name);
        break;
      }
      case "--anime":
      case "-a": {
        const [, ...args] = Deno.args;
        const anime = args.join(" ");
        this.quotes.getQuote(environment.byAnime + anime);
        break;
      }
      case "list":
        this.quotes.getQuote(environment.list);
        break;
      default:
        this.logger.logHelpMessage();
        break;
    }
  }
}
