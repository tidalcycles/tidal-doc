---
title: MacOS (manual)
permalink: wiki/MacOS_installation/
layout: wiki
---

<languages /> <translate>

## Try the easy installation script

For an easy, hands-off install, try
[tidal-bootstrap](https://github.com/tidalcycles/tidal-bootstrap/blob/master/README.md)
. If you want to install Tidal Cycles manually, read the instructions below.

## Prerequisites

Before installing Tidal, make sure the following are installed first:

-   [Haskell](https://www.haskell.org/ghcup/) (via [Ghcup](https://www.haskell.org/ghcup/))
-   [Atom Editor](https://atom.io/) (if you don't like the atom editor
    for some reason, please check out the [list of
    alternatives](/wiki/List_of_tidal_editors "wikilink"))
-   [SuperCollider](https://supercollider.github.io/downloads) (pick the
    latest version)
-   [Git](https://git-scm.com/)

### Optional Prerequisites

The following is optional, but highly recommended:

-   [SC3 Plugins](https://supercollider.github.io/sc3-plugins/) - you
    may need the SuperCollider sc3-plugins if you want to use any of the
    synths included in SuperDirt. Most of the examples in the
    documentation will still work, so you could skip this step and
    return to it later.

## Install TidalCycles

In a terminal window, we will add the path to our GHC installation to a
file that is executed by our terminal every time it loads.

For macOS 10.14 or before, the terminal uses bash, so the file we need
to modify is .bashrc:

     . "$HOME/.ghcup/env"
     echo '. $HOME/.ghcup/env' >> "$HOME/.bashrc"

For macOS10.15 Catalina, the terminal uses zsh, so the file we need to
modify is .zshrc:

     . "$HOME/.ghcup/env"
     echo '. $HOME/.ghcup/env' >> "$HOME/.zshrc"

After this, we will use cabal to first update it package directory, and
then to install the TidalCycles library. We will also run these two
commands every time we want to update our TidalCycles library to the
latest version.

     cabal update
     cabal install tidal --lib

If you've never installed TidalCycles before, then the
`cabal install tidal --lib` step may take some time. At the end of the
command output, it should say `Installed tidal-x.x.x` (where x.x.x is
the latest version number) without any errors.

## Install SuperDirt

Start SuperCollider, and in the editor window paste in the following
line of code:

``` plaintext
Quarks.checkForUpdates({Quarks.install("SuperDirt", "v1.1.3"); thisProcess.recompile()})
```

Run the code by clicking on it, to make sure the cursor is on this line,
then hold down Shift and press Enter.

It'll take a while to install. You'll see something like the following:

``` plaintext
Installing SuperDirt
Installing Vowel
Vowel installed
Installing Dirt-Samples
Dirt-Samples installed
SuperDirt installed
compiling class library...
...
(then some blah blah, and finally, something like:)
...

<!--T:31-->
*** Welcome to SuperCollider 3.10.0. *** For help press Ctrl-D.
```

## Install Atom Extension

Start Atom, and install the TidalCycles plugin. You can find it via the
menus under edit \> settings \> install, then typing “tidalcycles” into
the search box.

Once it's installed, you'll need to change the "ghci path" setting for
the tidalcycles package to the following:

    ~/.ghcup/bin/ghci

Once that’s all installed and configured, restart atom.

## Install VS Code Extension

Start VS Code, and install the TidalCycles extension by searching the
extensions marketplace. You can follow the instructions from
[here](https://marketplace.visualstudio.com/items?itemName=tidalcycles.vscode-tidalcycles)
to ensure you know how to use it correctly.

## Test Your Installation

Now you are ready to [Start TidalCycles and SuperDirt for the first
time](/wiki/Start_tidalcycles_and_superdirt_for_the_first_time "wikilink").
</translate>
