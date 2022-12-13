import { environment } from "./environment/environment.ts";
import { Logger } from "./utils/logger.ts";
import { TUI } from "./utils/tui.ts";
import { LabelColors } from "./utils/types.ts";

export class Quotes {
  constructor(private logger: Logger, private tui: TUI) {}

  public async getQuote(endpoint: string, options: LabelColors): Promise<void> {
    const res = await fetch(environment.baseUrl + endpoint);
    const data = await res.json();

    if (data.error) {
      this.logger.error(data.error);
      return;
    }

    if (endpoint.includes(environment.byCharacter)) {
      this.tui.run(data, options);
    } else if (endpoint.includes(environment.byAnime)) {
      this.tui.run(data, options);
    } else {
      //this.logger.logFunkyQuote(data); // We can pass a TUI run function in here and pass the value as a parameter.
      this.tui.run(data, options);
    }
  }
}
