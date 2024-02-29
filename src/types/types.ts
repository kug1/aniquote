import { ArgumentValue, StringType, ValidationError } from "../../deps.ts";

// All types and enums

// Quote coming from the res object
export type QuoteModel = {
  id: number;
  anime: string;
  character: string;
  quote: string;
};

// Colors
export type OptionsObject = {
  titleColor: string | boolean;
  characterColor: string | boolean;
  quoteColor: string | boolean;
  tui: boolean | undefined;
};

export type ErrorResponse = {
  error: string;
};

export class ColorType extends StringType {
  public colors = [
    "black",
    "red",
    "green",
    "yellow",
    "blue",
    "magenta",
    "cyan",
    "white",
    "bgBlack",
    "bgRed",
    "bgGreen",
    "bgYellow",
    "bgBlue",
    "bgMagenta",
    "bgCyan",
    "bgWhite",
    "lightBlack",
    "lightRed",
    "lightGreen",
    "lightYellow",
    "lightBlue",
    "lightMagenta",
    "lightCyan",
    "lightWhite",
    "bgLightBlack",
    "bgLightRed",
    "bgLightGreen",
    "bgLightYellow",
    "bgLightBlue",
    "bgLightMagenta",
    "bgLightCyan",
    "bgLightWhite",
    "underline",
    "italic",
    "invert",
    "bold",
  ];

  complete(): Array<string> {
    return this.colors;
  }

  public parse({ label, name, value }: ArgumentValue): string {
    if (!this.colors.includes(value)) {
      throw new ValidationError(
        `${label} "${name}" must be a valid color, but got "${value}". Possible values are: ${this.colors.join(
          ", "
        )}`
      );
    }

    return value;
  }
}
