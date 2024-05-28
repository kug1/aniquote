import { environment } from "./environment/environment.ts";
import { Logger } from "./utils/logger.ts";
import { TUI } from "./utils/tui.ts";
import { OptionsObject, QuoteModel } from "./types/types.ts";

export class Quotes {
  constructor(private logger: Logger, private tui: TUI) {}

  public async getQuote(
    endpoint: string,
    options: OptionsObject
  ): Promise<void> {
    const res = await fetch(environment.baseUrl + endpoint);
    const data =
      res.headers.has("content-length") &&
      res.headers.get("content-type") === "application-json"
        ? await res.json()
        : null;

    function printBehavior(
      data: QuoteModel,
      instance: boolean | undefined,
      tui: TUI,
      logger: Logger
    ) {
      if (instance === true || undefined) {
        tui.run(data, options);
      } else {
        logger.logQuote(data);
      }
    }

    if (data && data.id) {
      printBehavior(data, options.tui, this.tui, this.logger);
    } else if (data && data.error) {
      this.logger.error(data.error);
    } else {
      this.logger.error("Something went wrong.");
    }
  }
}
