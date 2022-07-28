<h1 align="center">aniquote</h1>

<div align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-brightgreen.svg">
  </a>
</div>

---

## Why?

While i was browsing [Unixporn](https://www.reddit.com/r/unixporn/) looking to steal someone's dotfiles i saw some anime-related (Berserk) rices and thought people might like to print a quote of that character or from the series. And since im a beginner to Deno and never did CLI tools before i thought i'd give it a try.

## Requirements

- [Deno](https://deno.land/manual/getting_started/installation)

## Installation

```sh
git clone https://github.com/kug1/aniquote && cd ./aniquote
./install.sh
```

_You can uninstall with `deno uninstall aniquote`_

## Usage

```
Usage:
        aniquote [flag]
        aniquote [command]


Available Commands
        random    Print a random quote.
        list      Print a list of all available anime in a table.
        help      Print help message.

Flags:
        --anime, -a <anime-name>
                Prints a random quote from the anime.

        --character, -c <character-name>
                Prints a random quote of the character.

        --help, -h
                Print help message

Examples:
        aniquote --anime Kuroko no Basuke
                Prints a random Kuroko no Basuke quote.

        aniquote -c Guts
                Prints a random quote of Guts.
```

## Acknowledgements

- [CondensedMilk7](https://github.com/CondensedMilk7) _heavily inspired by his Countryfetch project structure_
- Thanks to [rocktimsaikia](https://github.com/rocktimsaikia) for awesome [Animechan](https://animechan.vercel.app/) API!
