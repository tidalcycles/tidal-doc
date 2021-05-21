---
title: Sublime Text
permalink: wiki/Sublime_Text/
layout: wiki
---
----

![sublimelogo](sublimelogo.png)

**Sublime Text** is a popular cross-platform text editor. It is closed source and costs $70 USD. You can still use Sublime Text without buying it but be ready to deal with an ominous pop-up window that remind you to buy it every few minutes. Sublime Text is very lightweight and highly configurable.

## Installation

The installation process should be easy on every major operating system. Head to the [official website](https://sublimetext.com) to download/install it.

## Configuration for Tidal

To do live coding in **Sublime Text**, you need to install the package **Sublime REPL** via *Package Control*. To avoid fiddling with the existing **Haskell REPL** supplied by **Sublime REPL**, simply clone this modified version of it:

```bash
cd ~/Library/Application Support/Sublime Text 3/Packages/SublimeREPL/config
git clone https://gist.github.com/lvm/e0943b0d42507af60eee174ed263adde Tidal
```
:::caution
The boot up code used by the **Sublime REPL** is currently broken. A simple fix is to copy and paste the code from
[this link](https://github.com/tidalcycles/Tidal/blob/main/BootTidal.hs) into `\~/Library/Application Support/Sublime Text
3/Packages/SublimeREPL/config/Tidal/ghci-tidal.conf` replacing whatever was already there.
:::

### Legacy version

If you are using classic **Dirt** rather than the new **SuperDirt**, an older version of the config can be used:

```bash
cd ~/Library/Application Support/Sublime Text 3/Packages/SublimeREPL/config
git clone https://gist.github.com/lennart/8b811cd4f568f7d7100e Tidal
```

This way, `Cmd+Shift+P -> “Sublime REPL: Tidal”` will load up a `ghci` instance that loads Tidal, binds Dirt channels and adds macros for `hush` and `cps`.

Splitting windows beforehand (e.g. `Cmd+Alt+Shift+2` for two row layout) will load the REPL into the other splitscreen, so you can code in one and evaluate into the other. Code by line evaluation is mapped to `Ctrl+l` by default but this can be customized to what you prefer:
```json
{ "keys": ["shift+enter"],
   "command": "repl_transfer_current",
   "args": {"scope": "lines"} }
```

If you get the error Cannot find REPL for `plain`, try renaming your file to `.hs` instead of `.tidal`, since we are using a modified version of a Haskell REPL.
Of course you have to make sure dirt is already running when you can hear any sound.
