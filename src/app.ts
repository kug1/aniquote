import { Quotes } from "./quotes.ts";
import { Logger } from "./utils/logger.ts";
import { environment } from "./environment/environment.ts";
import { ColorType } from "./types/types.ts";
import { Command, GithubProvider, UpgradeCommand } from "../deps.ts";

export class App {
  constructor(private quotes: Quotes, private logger: Logger) {}

  async run() {
    await new Command()
      // Main command
      .name("aniquote")
      .version("3.1.0")
      .description("A CLI tool for printing anime quotes in your terminal.")
      .action(() => {
        this.logger.warn("Nothing specified. Run with --help to see options.");
      })
      .help({
        hints: false,
        colors: false,
      })
      .globalType("color", new ColorType())
      .group("Customization options")
      .globalOption("--no-tui", "Print the quote funkly.")
      .globalOption(
        "-t, --title [color:color]",
        "Set anime title label color",
        {
          default: "red",
        },
      )
      .globalOption(
        "-c, --character [color:color]",
        "Set character label color",
        {
          default: "cyan",
        },
      )
      .globalOption("-q, --quote [color:color]", "Set quote label color", {
        default: "bold",
      })
      //// Subcommands
      // Anime quote
      .command("anime", "Print a quote from the anime.")
      .arguments("<anime:string>")
      .action(async ({ title, character, quote, tui }, anime: string) => {
        await this.quotes.getQuote(environment.byAnime + anime, {
          titleColor: title,
          characterColor: character,
          quoteColor: quote,
          tui: tui,
        });
      })
      // Character Quote
      .command("character", "Print a quote of the character.")
      .arguments("<name:string>")
      .action(async ({ title, character, quote, tui }, name: string) => {
        await this.quotes.getQuote(environment.byCharacter + name, {
          titleColor: title,
          characterColor: character,
          quoteColor: quote,
          tui: tui,
        });
      })
      // Random quote
      .command("random", "Print a random quote.")
      .action(async ({ title, character, quote, tui }) => {
        await this.quotes.getQuote(environment.random, {
          titleColor: title,
          characterColor: character,
          quoteColor: quote,
          tui: tui,
        });
      })
      // Upgrade aniquote
      .command(
        "upgrade",
        new UpgradeCommand({
          main: "index.ts",
          args: ["--allow-net", "--allow-env", "--unstable"],
          provider: new GithubProvider({ repository: "kug1/aniquote" }),
        }),
      )
      .parse();
  }
}
