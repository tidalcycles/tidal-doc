---
title: Upgrading/en
permalink: wiki/Upgrading/en/
layout: wiki
---

<languages/>

To avoid problems, we warmly recommend upgrading all three components of
TidalCycles together - the tidalcycles library itself, the editor
plugin, and the SuperDirt synth.

# TidalCycles library

Upgrade tidal with the following from a terminal window:

``` shell
cabal update
cabal install tidal
```

You can verify that the latest version of tidal has installed with this
command in a terminal window:

    ghc-pkg list tidal

If you see more than one listed don't worry - the most recent one will
be used.

To go back to using the previously installed version of tidal, you can
'unregister' the newer one. For example to stop using version 1.4.0,
type:

    ghc-pkg unregister tidal-1.4.0

# Editor plugin

To upgrade your tidalcycles editor plugin (which might be referred to as
an 'extension' or 'package'). In atom, you can do this via the
preferences \> updates menu.

In VSCode, you can upgrade the TidalCycles package by viewing your
extensions (View \> Extensions menu, or click on the Extensions icon on
the left-hand activity bar), searching for TidalCycles and then choose
to upgrade.

# SuperDirt

To upgrade the SuperDirt sound synthesiser/sampler, open supercollider,
and run the following (paste it in, put your cursor on that line, hit
shift-enter):

``` c
Quarks.update("SuperDirt")
```

After this, you'll need to recompile the class library. You can do this
either by restarting supercollider, or via the "Recompile class library"
entry on the "Language" menu.
