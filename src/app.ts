import { Quotes } from "./quotes.ts";
import { Logger } from "./utils/logger.ts";
import { environment } from "./environment/environment.ts";
import { Command, GithubProvider, UpgradeCommand } from "../deps.ts";

export class App {
  constructor(private quotes: Quotes, private logger: Logger) {}

  async run() {
    await new Command()
      // Main command
      .name("aniquote")
      .version("3.0.0")
      .description("A CLI tool for printing anime quotes in your terminal.")
      .action(async () => {
        await this.quotes.getQuote(environment.random);
      })
      //// Subcommands
      // Anime quote
      .command("anime", "Print a quote from the anime.")
      .arguments("<anime:string>")
      .action(async (_options, anime: string) => {
        await this.quotes.getQuote(environment.byAnime + anime);
      })
      // Character Quote
      .command("character", "Print a quote of the character.")
      .arguments("<name:string>")
      .action(async (_options, name: string) => {
        await this.quotes.getQuote(environment.byCharacter + name);
      })
      // Random quote
      .command("random", "Print a random quote.")
      .action(async () => {
        await this.quotes.getQuote(environment.random);
      })
      // No longer supported.

      // List all available anime
      // .command("list", "List all available anime.")
      // .action(async () => {
      // await this.quotes.getList();
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
