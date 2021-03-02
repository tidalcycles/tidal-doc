---
id: upgrading
title: Upgrading
---

To avoid problems, we warmly recommend upgrading all three components of
TidalCycles together - the tidalcycles library itself, the editor
plugin, and the SuperDirt synth.

# TidalCycles library

Upgrade tidal with the following from a terminal window:

``` shell
cabal update
cabal install tidal --lib
```

If you're using an older version of haskell you might have to miss the
\`--lib\` off the above command.

# Editor plugin

To upgrade your tidalcycles editor plugin (which might be referred to as
an 'extension' or 'package'). In atom, you can do this via the
preferences &gt; updates menu.

In VSCode, you can upgrade the TidalCycles package by viewing your
extensions (View &gt; Extensions menu, or click on the Extensions icon
on the left-hand activity bar), searching for TidalCycles and then
choose to upgrade.

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
