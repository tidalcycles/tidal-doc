---
title: Reverting to an earlier version/en
permalink: wiki/Reverting_to_an_earlier_version/en/
layout: wiki
---

<languages/> To return to an earlier version of tidal, use the

``` bash
ghc-pkg
```

command. For example:

``` bash
ghc-pkg list tidal
```

The above will list the version or versions you have installed. If there
is more than one, the most recent will be used.

To uninstall a version, you can do, for example:

``` bash
ghc-pkg unregister tidal-1.0.6
```

Do this for each version until the most recent is the one you want.

If you don't have the one you want installed, you can do this:

``` bash
cabal install tidal-0.9.10
```

# Atom editor package

You will probably also need to install an old version of the atom
package to match. You can do this from the commandline too. For example,
to install a version of the atom package compatible with tidal 0.9.x,
you can do this:

``` bash
apm install tidalcycles@0.12.1
```
