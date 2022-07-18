import { environment } from "./environment/environment.ts";
import { Logger } from "./utils/logger.ts";

export class Quotes {
  constructor(private logger: Logger) {}

  public async getQuote(endpoint: string): Promise<void> {
    const res = await fetch(environment.baseUrl + endpoint);
    const data = await res.json();

    if (!data.error) {
      if (endpoint === environment.list) {
        console.table(data);
      } else if (
        endpoint.includes(environment.byCharacter) ||
        endpoint.includes(environment.byAnime)
      ) {
        this.logger.logArrQuotes(data);
      } else {
        this.logger.logQuote(data);
      }
    } else {
      throw data.error;
    }
  }
}
