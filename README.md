<h1 align="center">aniquote</h1>
<h3 align="center">Anime quote fetcher</h3>

<a href="https://opensource.org/licenses/MIT">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg">
</a>

---

## Commands

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

## Dependencies

- [Deno](https://deno.land/manual/getting_started/installation)

## Installation

```sh
git clone https://github.com/kug1/aniquote && cd ./aniquote
./install.sh
```

_You can uninstall with `deno uninstall aniquote`_

## Acknowledgements

- [CondensedMilk7](https://github.com/CondensedMilk7) _heavily inspired by his Countryfetch project structure_
- Thanks to [rocktimsaikia](https://github.com/rocktimsaikia) for awesome [Animechan](https://animechan.vercel.app/) API!
