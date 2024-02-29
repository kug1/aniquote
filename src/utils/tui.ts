import { Canvas, crayon, LabelComponent, Tui } from "../../deps.ts";
import { OptionsObject, QuoteModel } from "../types/types.ts";

export class TUI {
  public run(value: QuoteModel, options: OptionsObject) {
    const tui = new Tui({
      style: crayon.black,
      canvas: new Canvas({
        refreshRate: 1000 / 60,
        stdout: Deno.stdout,
      }),
    });

    const titleColor = crayon.keyword(options.titleColor.toString());
    const characterColor = crayon.keyword(options.characterColor.toString());
    const quoteColor = crayon.keyword(options.quoteColor.toString());

    new LabelComponent({
      tui,
      theme: { base: titleColor },
      align: {
        horizontal: "center",
        vertical: "top",
      },
      rectangle: {
        get column() {
          return ~~(tui.canvas.size.columns / 2 - this.width / 2);
        },
        get row() {
          return ~~(tui.canvas.size.rows / 2 - (this.height / 2 + 6));
        },
        height: 2,
        width: -1,
      },
      value: value.anime,
    });

    new LabelComponent({
      tui,
      theme: { base: characterColor },
      align: {
        horizontal: "center",
        vertical: "top",
      },
      rectangle: {
        get column() {
          return ~~(tui.canvas.size.columns / 2 - this.width / 2);
        },
        get row() {
          return ~~(tui.canvas.size.rows / 2 - (this.height / 2 + 4));
        },
        height: 2,
        width: -1,
      },
      value: value.character,
    });

    new LabelComponent({
      tui,
      theme: { base: quoteColor },
      align: {
        horizontal: "center",
        vertical: "center",
      },
      rectangle: {
        get column() {
          return ~~(tui.canvas.size.columns / 2 - this.width / 2);
        },
        get row() {
          return ~~(tui.canvas.size.rows / 2 - this.height / 2);
        },
        height: 10,
        width: -1,
      },
      value: `"${value.quote}"`,
    });

    tui.run();
    tui.dispatch();
  }
}
