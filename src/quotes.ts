import { environment } from "./environment/environment.ts";
import { Logger } from "./utils/logger.ts";
import { TUI } from "./utils/tui.ts";
import { OptionsObject } from "./types/types.ts";

export class Quotes {
  constructor(private logger: Logger, private tui: TUI) {}

  // TODO: Make a decide function to get rid of nested if statements.

  public async getQuote(
    endpoint: string,
    options: OptionsObject,
  ): Promise<void> {
    const res = await fetch(environment.baseUrl + endpoint);
    const data = await res.json();

    if (data.error) {
      this.logger.error(data.error);
      return;
    }

    if (endpoint.includes(environment.byCharacter)) {
      if (options.tui === false) {
        await this.logger.logFunkyQuote(data, options);
      } else {
        this.tui.run(data, options);
      }
    } else if (endpoint.includes(environment.byAnime)) {
      if (options.tui === false) {
        await this.logger.logFunkyQuote(data, options);
      } else {
        this.tui.run(data, options);
      }
    } else {
      //this.logger.logFunkyQuote(data); // We can pass a TUI run function in here and pass the value as a parameter.
      if (options.tui === false) {
        await this.logger.logFunkyQuote(data, options);
      } else {
        this.tui.run(data, options);
      }
    }
  }
}
