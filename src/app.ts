import { Quotes } from "./quotes.ts";
import { Logger } from "./utils/logger.ts";
import { environment } from "./environment/environment.ts";
import {
  Command,
  GithubProvider,
  parseFlags,
  UpgradeCommand,
} from "../deps.ts";

export class App {
  constructor(private quotes: Quotes, private logger: Logger) {}

  async run() {
    const { flags } = parseFlags(Deno.args, {
      flags: [
        {
          name: "tui",
          aliases: ["t"],
        },
      ],
    });

    await new Command()
      // Main command
      .name("aniquote")
      .version("3.0.0")
      .description("A CLI tool for printing anime quotes in your terminal.")
      .action(() => {
        this.logger.warn(
          "Nothing specified... Run with '--help' to see options.",
        );
      })
      .option(
        "-a, --anime <anime:string>",
        "Print a random quote from the specified anime.",
        {
          standalone: true,
          action: async (options) => {
            await this.quotes.getQuote(environment.byAnime + options.anime);
          },
        },
      )
      .option(
        "-c, --character <character:string>",
        "Print a random quote of the specified character.",
        {
          standalone: true,
          action: async (options) => {
            await this.quotes.getQuote(
              environment.byCharacter + options.character,
            );
          },
        },
      )
      // Random quote
      .command("random", "Print a random quote.")
      .action(async () => {
        await this.quotes.getQuote(environment.random);
      })
      //// No longer supported.

      // List of all available anime
      // .command("list", "List all available anime.")
      // .action(async () => {
      //   await this.quotes.getList();
      // })

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
