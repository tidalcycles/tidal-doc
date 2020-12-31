---
title: Windows installation/en-gb
permalink: wiki/Windows_installation/en-gb/
layout: wiki
---

# Easy install

For an easy, automated install experience, see the [Windows choco
install](/wiki/Windows_choco_install "wikilink").

# Manual install

If you prefer to install the different parts of a Tidal environment by
hand, perhaps because you already have supercollider or haskell
installed, then follow the below instructions.

<div class="mw-translate-fuzzy">

# Prerequisites

</div>
<div class="mw-translate-fuzzy">

## Required Prerequisites

</div>

Before installing Tidal, make sure the following are installed first:

<div class="mw-translate-fuzzy">

-   Haskell Platform - **the 'full' version is strongly recommended**,
    you can [download it here for version
    8.4.3](https://www.haskell.org/platform/download/8.4.3/HaskellPlatform-8.4.3-full-x86_64-setup.exe)
    of haskell (the full platform doesn't seem to be available for the
    latest haskell version yet, but you [can check
    here](https://www.haskell.org/platform/windows.html)).
-   [Atom Editor](https://atom.io/) (if you don't like the atom editor
    for some reason, please check out the [list of
    alternatives](/wiki/List_of_tidal_editors "wikilink"))
-   [SuperCollider](http://supercollider.github.io/download) (pick the
    latest version)
-   [Git](https://git-scm.com/)

</div>
<div class="mw-translate-fuzzy">

## Optional Prerequisites

</div>

The following is optional, but recommended:

-   [SC3 Plugins](https://supercollider.github.io/sc3-plugins/) - you
    may need the SuperCollider sc3-plugins if you want to use any of the
    synths included in SuperDirt. Most of the examples in the
    documentation will still work, so you could skip this step and
    return to it later.

<div class="mw-translate-fuzzy">

# Install TidalCycles

</div>
<div class="mw-translate-fuzzy">

Open a Command Prompt (or PowerShell), then type and run these two
commands *(ignoring any complaints that cabal has of 'legacy v1 style of
usage')*:

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

If you see an error with the network library, then you need to fix
something with your Haskell install. You can [find instructions
here](https://forum.toplap.org/t/trouble-launching-tidal-in-atom/678/3).

<div class="mw-translate-fuzzy">

# Install SuperDirt

</div>

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

<div class="mw-translate-fuzzy">

# Install Atom Extension

</div>

Start Atom, and install the TidalCycles plugin. You can find it via the
menus under edit \> settings \> install, then typing “tidalcycles” into
the search box. Once that’s installed, restart atom.

<div class="mw-translate-fuzzy">

# Test Your Installation

</div>

Now you are ready to [Start TidalCycles and SuperDirt for the first
time](/wiki/Start_tidalcycles_and_superdirt_for_the_first_time "wikilink").
