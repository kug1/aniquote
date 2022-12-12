import { App } from "./app.ts";
import { Logger } from "./utils/logger.ts";
import { Quotes } from "./quotes.ts";
import { TUI } from "./utils/tui.ts";

const logger = new Logger();
const tui = new TUI();

const quotes = new Quotes(logger, tui);

const app = new App(quotes, logger);

export default app;
