import { Canvas, crayon, LabelComponent, Theme, Tui } from "../../deps.ts";

export class TUI {
  private baseTheme: Theme = {
    base: crayon.lightWhite,
    focused: crayon.bgRed,
    active: crayon.bgBlue,
  };

  public run(value: { anime: string; character: string; quote: string }) {
    const tui = new Tui({
      style: crayon.bgBlack,
      canvas: new Canvas({
        refreshRate: 1000 / 60,
        stdout: Deno.stdout,
      }),
    });

    const titleLabel = new LabelComponent({
      tui,
      theme: { base: crayon.lightRed },
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

    const characterlabel = new LabelComponent({
      tui,
      theme: { base: crayon.cyan },
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
        // row: 10,
        height: 2,
        width: -1,
      },
      value: value.character,
    });

    const quoteLabel = new LabelComponent({
      tui,
      theme: { base: crayon.lightWhite },
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
  }
}
