import { ArgumentValue, Type, ValidationError } from "../../deps.ts";

// All types and enums

// Quote coming from the res object
export interface QuoteModel {
  anime: string;
  character: string;
  quote: string;
}

// Colors
export interface LabelColors {
  titleColor: string | boolean;
  characterColor: string | boolean;
  quoteColor: string | boolean;
}

export class ColorType extends Type<string> {
  private readonly colors = [
    "black",
    "red",
    "green",
    "yellow",
    "blue",
    "magenta",
    "cyan",
    "white",
    "lightWhite",
    "lightRed",
  ];

  complete(): Array<string> {
    return this.colors;
  }

  // Possible values that are going to show up in the help text.
  // values(): Array<string> {
  // return ["red", "brightBlue", "magenta"];
  // }

  public parse({ label, name, value }: ArgumentValue): string {
    if (!this.colors.includes(value)) {
      throw new ValidationError(
        `${label} "${name}" must be a valid color, but got "${value}". Possible values are: ${
          this.colors.join(
            ", ",
          )
        }`,
      );
    }

    return value;
  }
}
