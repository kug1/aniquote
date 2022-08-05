import { Quotes } from "./quotes.ts";
import { environment } from "./environment/environment.ts";
import { Command, UpgradeCommand, GithubProvider } from "../deps.ts";

export class App {
  constructor(private quotes: Quotes) {}

  async run() {
    await new Command()
      // Main command
      .name("aniquote")
      .version("v2.0.0")
      .description("A CLI tool for printing anime quotes in your terminal.") 
      .arguments("<command>")
      .option(
        "-a, --anime <anime:string>",
        "Print a quote from the specified anime.", 
        {
          standalone: true,
          action: async(options) => { await this.quotes.getQuote(environment.byAnime + options.anime); }
        }
      )
      .option(
        "-c, --character <character:string>",
        "Print a quote of the specified character.", 
        { 
          standalone: true, 
          action: async(options) => { await this.quotes.getQuote(environment.byCharacter + options.character); }
        }
      )

      // Random quote
      .command("random", "Print a random quote.")
      .action(async () => {
        await this.quotes.getQuote(environment.random);
      })

      // List of all available anime
      .command("list", "List all available anime.")
      .action(async () => {
        await this.quotes.getList();
      })

      // Upgrade aniquote
      .command(
        "upgrade",
        new UpgradeCommand({
          main: "index.ts",
          args: ["--allow-net", "--allow-env"],
          provider: new GithubProvider({ repository: "kug1/aniquote" }),
        })
      )
      .parse();
  }
}
