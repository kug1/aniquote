import { environment } from "./environment/environment.ts";
import { Logger } from "./utils/logger.ts";

export class Quotes {
  constructor(private logger: Logger) {}

  public async getQuote(endpoint: string): Promise<void> {
    const res = await fetch(environment.baseUrl + endpoint);
    const data = await res.json();

    // Make request based on the incoming URL.
    if (data.error) {
      this.logger.error(data.error);
    } else {
      if (endpoint.includes(environment.byCharacter)) {
        this.logger.logFunkyQuote(data);
      } else if (endpoint.includes(environment.byAnime)) {
        this.logger.logFunkyQuote(data);
      } else {
        this.logger.logFunkyQuote(data);
      }
    }
  }
}
