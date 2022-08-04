<h1 align="center">aniquote</h1>

<div align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-brightgreen.svg">
  </a>
</div>

---

## Why?

While i was browsing [Unixporn](https://www.reddit.com/r/unixporn/) looking to steal someone's dotfiles (im too lazy to rice myself) i saw some anime-related rices and thought people might like to print a quote of that character or from the series. And since im a beginner to Deno and never did CLI tools before i thought i'd give it a try.

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
  Usage:   aniquote                                                                                         
  Version: v2.0.0

  Description:

    A CLI tool for printing anime quotes in your terminal.

  Options:

    -h, --help                    - Show this help.                            
    -V, --version                 - Show the version number for this program.  
    -a, --anime      <anime>      - Print a quote from the specified anime.    
    -c, --character  <character>  - Print a quote of the specified character.  

  Commands:

    random   - Print a random quote.                                  
    list     - List all available anime.                              
    upgrade  - Upgrade aniquote executable to latest or given version.
```

## Acknowledgements

- [CondensedMilk7](https://github.com/CondensedMilk7) _heavily inspired by his Countryfetch project structure_
- Thanks to [rocktimsaikia](https://github.com/rocktimsaikia) for awesome [Animechan](https://animechan.vercel.app/) API!
