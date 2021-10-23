---
title: Windows (manual)
permalink: wiki/Windows_installation/
layout: wiki
---

<translate>

# Easy install

For an easy, automated install experience, see the [Windows choco
install](/wiki/Windows_choco_install "wikilink").

# Manual install

If you prefer to install the different parts of a Tidal environment by
hand, perhaps because you already have SuperCollider or Haskell
installed, then follow the below instructions.

## Prerequisites

### Required Prerequisites

Before installing Tidal, make sure the following are installed first:

-   Haskell Platform - Please note! There's a bug in the windows haskell
    installer, please install [this
    version](https://downloads.haskell.org/platform/8.6.5/HaskellPlatform-8.6.5-core-x86_64-setup.exe)
    (Haskell 8.6.5 'full' install) and it should work
-   [Atom Editor](https://atom.io/) (if you don't like the atom editor
    for some reason, please check out the [list of
    alternatives](/wiki/List_of_tidal_editors "wikilink"))
-   [SuperCollider](http://supercollider.github.io/download) (pick the
    latest version)
-   [Git](https://git-scm.com/)

### Optional Prerequisites

The following is optional, but recommended:

-   [SC3 Plugins](https://supercollider.github.io/sc3-plugins/) - you
    may need the SuperCollider sc3-plugins if you want to use any of the
    synths included in SuperDirt. Most of the examples in the
    documentation will still work, so you could skip this step and
    return to it later.

## Install TidalCycles

Open a Command Prompt (or PowerShell), then type and run these two
commands:

`cabal v1-update`  
`cabal v1-install tidal`

If you've never installed TidalCycles before, then the
`cabal v1-install tidal` step may take some time.

If you see an error with the network library, then you need to fix
something with your Haskell install. You can [find instructions
here](https://forum.toplap.org/t/trouble-launching-tidal-in-atom/678/3).

## Install SuperDirt

Start SuperCollider, and in the editor window paste in the following
line of code:

    Quarks.checkForUpdates({Quarks.install("SuperDirt", "v1.7.2"); thisProcess.recompile()})

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

<!--T:28-->
*** Welcome to SuperCollider 3.12.1. *** For help press Ctrl-D.
```

## Install Atom Extension

Start Atom, and install the TidalCycles plugin. You can find it via the
menus under edit \> settings \> install, then typing “tidalcycles” into
the search box. Once that’s installed, restart atom.

## Test Your Installation

Now you are ready to [Start TidalCycles and SuperDirt for the first
time](/wiki/Start_tidalcycles_and_superdirt_for_the_first_time "wikilink").
</translate>

## I've installed Tidal Cycles. What's next?

Look at the sidebar. You will see a list of text editors you can install to interact with Tidal and start playing :smile:.
