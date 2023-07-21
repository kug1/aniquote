<h1 align="center">aniquote</h1>

<div align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg">
  </a>

  <a href="https://animechan.vercel.app/">
    <img src="https://img.shields.io/badge/API-animechan-informational" />
  </a>

  <a href="https://deno.land">
    <img src="https://img.shields.io/badge/deno-%5E1.30.2-blueviolet?logo=deno"/>
  </a>
</div>

---

## Usage

```
  Usage:   aniquote
  Version: 4.0.0

  Description:

    A CLI tool for printing anime quotes in your terminal.

  Options:

    -h, --help     - Show this help.
    -V, --version  - Show the version number for this program.

  Customization options:

    --no-tui                  - Print the quote funkly.
    -t, --title      [color]  - Set anime title label color  (Default: "red")
    -c, --character  [color]  - Set character label color    (Default: "cyan")
    -q, --quote      [color]  - Set quote label color        (Default: "bold")

  Commands:

    anime      <anime>  - Print a quote from the anime.
    character  <name>   - Print a quote of the character.
    random              - Print a random quote.
    upgrade             - Upgrade aniquote executable to latest or given version.

```

## Requirements

- [Deno](https://deno.land/manual/getting_started/installation)

## Installation

```sh
# Clone the repository and change into the directory
git clone https://github.com/kug1/aniquote && cd ./aniquote

# Make the script executable
chmod +x ./install.sh

# Run the script
./install.sh
```

_You can uninstall with `deno uninstall aniquote`_

## Acknowledgements

- [CondensedMilk7](https://github.com/CondensedMilk7) _heavily inspired by his Countryfetch project structure_
- Thanks to [rocktimsaikia](https://github.com/rocktimsaikia) for awesome [Animechan](https://animechan.vercel.app/) API!
