import { App } from "./app.ts";
import { Logger } from "./utils/logger.ts";
import { Quotes } from "./quotes.ts";

const logger = new Logger();
const quotes = new Quotes(logger);

const app = new App(quotes);

export default app;
