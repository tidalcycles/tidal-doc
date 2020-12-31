---
title: Prerequisites
permalink: wiki/Prerequisites/
layout: wiki
---

Tidal installs under Windows, Mac OS X and Linux.

# Required Prerequisites

Before installing Tidal, make sure the following are installed first:

-   [Haskell Platform](https://www.haskell.org/platform/) - **the 'full'
    version is strongly recommended**.
-   [Atom Editor](https://atom.io/) (if you don't like the atom editor
    for some reason, please check out the [list of
    alternatives](/wiki/List_of_tidal_editors "wikilink"))
-   [SuperCollider](http://supercollider.github.io/download) (pick the
    latest version)
-   [Git](https://git-scm.com/)

# Optional Prerequisites

The following is optional, but recommended:

-   [SC3 Plugins](https://supercollider.github.io/sc3-plugins/) - you
    may need the SuperCollider sc3-plugins if you want to use any of the
    synths included in SuperDirt. Most of the examples in the
    documentation will still work, so you could skip this step and
    return to it later.

# Special note for Linux Users

Hopefully your Linux distribution makes the above easily available to
you via a package manager. For example, if you are using recent version
of Ubuntu or similar, you can install haskell with the following command
in a terminal window:

`sudo apt-get install build-essential cabal-install git`

It *should* be possible to install supercollider via this method too,
via

``` shell
supercollider sc3-plugins
```

. However this often doesn't work. Either the supercollider version is
too old (superdirt needs at least version 3.7), or the version of
supercollider is mismatched with sc3-plugins. If you're using ubuntu,
mint or a similar distribution, my advice is to ignore the supercollider
packages and just compile them yourself. These scripts make it super
easy to do so:

` `[`https://github.com/lvm/build-supercollider`](https://github.com/lvm/build-supercollider)

Just paste in the four commandline instructions under "How to?" in turn
(you can ignore the bit about 'the debian way')
