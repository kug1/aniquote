import { environment } from "./environment/environment.ts";
import { Logger } from "./utils/logger.ts";

export class Quotes {
  constructor(private logger: Logger) {}

  public async getQuote(endpoint: string): Promise<void> {
    const res = await fetch(environment.baseUrl + endpoint);
    const data = await res.json();

    if (data.error) {
      this.logger.error(data.error);
    } else {
      if (endpoint.includes(environment.byCharacter)) {
        this.logger.logArrQuotes(data);
      } else if (endpoint.includes(environment.byAnime)) {
        this.logger.logArrQuotes(data);
      } else {
        this.logger.logQuote(data);
      }
    }
  }

  public async getList(): Promise<void> {
    const res = await fetch(
      environment.baseUrl + environment.list
    );
    const data = await res.json();

    this.logger.list(data);
  }
}
