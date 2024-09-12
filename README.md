<h1 align="center">aniquote</h1>

<div align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg">
  </a>

  <a href="https://animechan.xyz/">
    <img src="https://img.shields.io/badge/API-animechan-informational" />
  </a>
</div>

---

## Usage

```
  Usage:   aniquote
  Version: 4.1.0

  Description:

    A CLI tool for printing anime quotes in your terminal.

  Options:

    -h, --help     - Show this help.
    -V, --version  - Show the version number for this program.

  Customization options:

    --tui                          - Print the quote in a TUI instance.
    -t, --titleColor      [color]  - Set anime title label color
    -c, --characterColor  [color]  - Set character label color
    -q, --quoteColor      [color]  - Set quote label color

  Commands:

    upgrade             - Upgrade aniquote executable to latest or given version.

```

## Requirements

- [Deno](https://docs.deno.com/runtime/manual/getting_started/installation)

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

- [CondensedMilk7](https://github.com/CondensedMilk7) heavily inspired by their Countryfetch project structure.
- Thanks to [rocktimsaikia](https://github.com/rocktimsaikia) for the awesome [Animechan](https://animechan.io/) API!
