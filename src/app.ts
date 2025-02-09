import { Quotes } from "./quotes.ts";
import { Logger } from "./utils/logger.ts";
import { environment } from "./environment/environment.ts";
import { Command, GithubProvider, UpgradeCommand } from "../deps.ts";
import { ColorType } from "./types/types.ts";

export class App {
  constructor(
    private quotes: Quotes,
    private logger: Logger,
  ) {}

  run() {
    const cmd = new Command()
      // Main command
      .name("aniquote")
      .version("4.1.2")
      .description("A CLI tool for printing anime quotes in your terminal.")
      .globalType("color", new ColorType())
      .group("Customization options")
      .option("--tui", "Print the quote in a TUI instance.")
      .option(
        "-t, --titleColor [color:color]",
        "Set anime title label color",
        {
          default: "red",
        },
      )
      .option(
        "-c, --characterColor [color:color]",
        "Set character label color",
        {
          default: "cyan",
        },
      )
      .option("-q, --quoteColor [color:color]", "Set quote label color", {
        default: "bold",
      })
      .action(async ({ titleColor, characterColor, quoteColor, tui }) => {
        await this.quotes.getQuote(environment.random, {
          titleColor,
          characterColor,
          quoteColor,
          tui,
        });
      })
      .help({
        hints: false,
        colors: false,
      })

      //// Subcommands
      // Anime quote

      /*
      .command("anime", "Print a quote from the anime.")
      .arguments("<title:string>")
      .action(
        async (
          { titleColor, characterColor, quoteColor, tui },
          anime: string
        ) => {
          await this.quotes.getQuote(environment.byAnime + anime, {
            titleColor,
            characterColor,
            quoteColor,
            tui,
          });
        }
      )
      */

      // Character Quote

      /*
      .command("character", "Print a quote of the character.")
      .arguments("<name:string>")
      .action(
        async (
          { titleColor, characterColor, quoteColor, tui },
          name: string,
        ) => {
          await this.quotes.getQuote(environment.byCharacter + name, {
            titleColor,
            characterColor,
            quoteColor,
            tui,
          });
        },
      )
      */

      // Random quote

      /*
      .command("random", "Print a random quote.")
      .action(async ({ titleColor, characterColor, quoteColor, tui }) => {
        await this.quotes.getQuote(environment.random, {
          titleColor,
          characterColor,
          quoteColor,
          tui,
        });
      })
      */

      // Upgrade aniquote
      .command(
        "upgrade",
        new UpgradeCommand({
          main: "index.ts",
          args: ["--allow-net", "--allow-env", "--global"],
          provider: new GithubProvider({ repository: "kug1/aniquote" }),
        }),
      );

    try {
      cmd.parse(Deno.args);
    } catch (error) {
      this.logger.error(error)
    }
  }
}
