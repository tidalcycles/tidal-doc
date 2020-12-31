---
title: MacOS automated installation
permalink: wiki/MacOS_automated_installation/
layout: wiki
---

We are still working on this automated installation, but it seems to
work well for most people. If you have problems, please join us on the
[\#tidal-install](https://chat.toplap.org/channel/tidal-install) chat
channel and we'll do our best to help. We'd be very happy to hear about
successes too!

# Running the script

You can run the install script by simply opening a terminal window,
pasting in the following and pressing enter:

``` shell
curl https://raw.githubusercontent.com/tidalcycles/tidal-bootstrap/master/tidal-bootstrap.command -sSf | sh
```

It will probably ask for your password at some point. As you type,
characters won't be echoed to the screen, so you'll have to look at your
keys and do your best!

We're still working on this, and a lot of confusing info will scroll
past. Just let it run until the end.

# What the script does

The script installs the tools mentioned in TidalCycles [manual
installation guide](/wiki/Installation "wikilink"). In particular, the script
checks if the following programs are installed on the system, and
installs them if they are missing.

-   SuperCollider (and SuperDirt)
-   Atom (and the TidalCycles plugin)
-   Haskell language (ghcup)
-   The Tidal pattern engine
