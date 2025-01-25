import { environment } from "./environment/environment.ts";
import { Logger } from "./utils/logger.ts";
import { TUI } from "./utils/tui.ts";
import { OptionsObject, QuoteObject } from "./types/types.ts";

export class Quotes {
  constructor(
    private logger: Logger,
    private tui: TUI,
  ) {}

  public async getQuote(
    endpoint: string,
    options: OptionsObject,
  ): Promise<void> {
    function printBehavior(
      data: QuoteObject,
      instance: boolean | undefined,
      tui: TUI,
      logger: Logger,
    ) {
      if (instance === true) {
        tui.run(data, options);
      } else {
        logger.logQuote(data);
      }
    }

    try {
      const res = await fetch(environment.baseUrl + endpoint);

      const data = await res.json();

      if (data && data.data) {
        printBehavior(data, options.tui, this.tui, this.logger);
      } else if (data && data.error) {
        this.logger.error(data.error.message);
      } else if (data && data.message) {
        this.logger.error("Request limit reached.");
      }
    } catch (error) {
      console.log(error)
      this.logger.error("Service unavailable.");
    }
  }
}
