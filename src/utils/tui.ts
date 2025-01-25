import { Canvas, crayon, Label, Tui } from "../../deps.ts";
import { OptionsObject, QuoteObject } from "../types/types.ts";

export class TUI {
  public run(value: QuoteObject, options: OptionsObject) {
    const tui = new Tui({
      style: crayon.black,
      refreshRate: 1000 / 60,
      canvas: new Canvas({
        stdout: Deno.stdout,
        size: {
          columns: 79,
          rows: 90
        }
      }),
    });

    const titleColor = crayon.keyword(options.titleColor.toString());
    const characterColor = crayon.keyword(options.characterColor.toString());
    const quoteColor = crayon.keyword(options.quoteColor.toString());

    new Label({
      parent: tui,
      theme: { base: titleColor },
      align: {
        horizontal: "center",
        vertical: "top",
      },
      rectangle: {
        get column() {
          return ~~(tui.canvas.size.value.rows / 2 - this.height / 2);
        },
        get row() {
          return ~~(tui.canvas.size.value.rows / 2 - (this.height / 2 + 6));
        },
        height: 2,
        width: -1,
      },
      text: value.data.anime.name,
      zIndex: 0,
    });

    new Label({
      parent: tui,
      theme: { base: characterColor },
      align: {
        horizontal: "center",
        vertical: "top",
      },
      rectangle: {
        get column() {
          return ~~(tui.canvas.size.value.columns / 2 - this.width / 2);
        },
        get row() {
          return ~~(tui.canvas.size.value.rows / 2 - (this.height / 2 + 4));
        },
        height: 2,
        width: -1,
      },
      text: value.data.character.name,
      zIndex: 0
    });

    new Label({
      parent: tui,
      theme: { base: quoteColor },
      align: {
        horizontal: "center",
        vertical: "center",
      },
      rectangle: {
        get column() {
          return ~~(tui.canvas.size.value.columns / 2 - this.width / 2);
        },
        get row() {
          return ~~(tui.canvas.size.value.rows / 2 - this.height / 2);
        },
        height: 10,
        width: -1,
      },
      text: `"${value.data.content}"`,
      zIndex: 0
    });

    tui.run();
    tui.dispatch();
  }
}
