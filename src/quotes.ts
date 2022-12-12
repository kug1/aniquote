import { environment } from "./environment/environment.ts";
import { Logger } from "./utils/logger.ts";
import { TUI } from "./utils/tui.ts";

export class Quotes {
  constructor(private logger: Logger, private tui: TUI) {}

  public async getQuote(endpoint: string): Promise<void> {
    const res = await fetch(environment.baseUrl + endpoint);
    const data = await res.json();

    if (data.error) {
      this.logger.error(data.error);
    }

    if (endpoint.includes(environment.byCharacter)) {
      this.tui.run(data);
    } else if (endpoint.includes(environment.byAnime)) {
      this.tui.run(data);
    } else {
      //this.logger.logFunkyQuote(data); // We can pass a TUI run function in here and pass the value as a parameter.
      this.tui.run(data);
    }
  }
}
