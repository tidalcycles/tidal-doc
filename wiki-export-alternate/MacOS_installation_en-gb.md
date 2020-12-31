---
title: MacOS installation/en-gb
permalink: wiki/MacOS_installation/en-gb/
layout: wiki
---

<languages />

<div class="mw-translate-fuzzy">

# Automated Installation with TidalBootstrap

</div>

For an easy, hands-off install, try
[tidal-bootstrap](https://github.com/tidalcycles/tidal-bootstrap/blob/master/README.md)
instead of the manual instructions below.

# Manual Installation

## Prerequisites

### Required Prerequisites

Before installing Tidal, make sure the following are installed first:

<div class="mw-translate-fuzzy">

-   [Haskell Platform](https://www.haskell.org/platform/) - **the 'full'
    version is strongly recommended**.
-   [Atom Editor](https://atom.io/) (if you don't like the atom editor
    for some reason, please check out the [list of
    alternatives](/wiki/List_of_tidal_editors "wikilink"))
-   [SuperCollider](http://supercollider.github.io/download) (pick the
    latest version)
-   [Git](https://git-scm.com/)

</div>

### Optional Prerequisites

<div class="mw-translate-fuzzy">

The following is optional, but recommended:

</div>

-   [SC3 Plugins](https://supercollider.github.io/sc3-plugins/) - you
    may need the SuperCollider sc3-plugins if you want to use any of the
    synths included in SuperDirt. Most of the examples in the
    documentation will still work, so you could skip this step and
    return to it later.

## Install TidalCycles

<div class="mw-translate-fuzzy">

From a terminal, type and run these two commands *(ignoring any
complaints that cabal has of 'legacy v1 style of usage')*:

</div>
<div class="mw-translate-fuzzy">

cabal update

`cabal install tidal`

</div>
<div class="mw-translate-fuzzy">

If you've never installed TidalCycles before, then the
`cabal install tidal` step may take some time. At the end of the command
output, it should say `Installed tidal-x.x.x` (where x.x.x is the latest
version number) without any errors.

</div>

## Install SuperDirt

Start SuperCollider, and in the editor window paste in the following
line of code:

<div class="mw-translate-fuzzy">

Quarks.checkForUpdates(); Quarks.install("SuperDirt", "v1.0")

</div>
<div class="mw-translate-fuzzy">

Run the code by clicking on it, to make sure the cursor is on this line,
then hold down Shift and press Enter. This will download SuperDirt and
you will see it has completed when the Post Window displays:

</div>
<div class="mw-translate-fuzzy">

... the class library may have to be recompiled.

`-> SuperDirt`

</div>

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

*** Welcome to SuperCollider 3.10.0. *** For help press Ctrl-D.
```

## Install Atom Extension

<div class="mw-translate-fuzzy">

Start Atom, and install the TidalCycles plugin. You can find it via the
menus under edit &gt; settings &gt; install, then typing “tidalcycles”
into the search box. Once that’s installed, restart atom.

</div>

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
