---
title: linger
permalink: wiki/linger/
layout: wiki
tags:
 - Functions
 - Time Functions
---

[Type](/wiki/Type_signature "wikilink"):

    linger :: Pattern Time -> Pattern a -> Pattern a

**linger** is similar to [trunc](trunc "wikilink"), in that it truncates
a pattern so that only the first fraction of the pattern is played.
However unlike trunk, linger repeats that part to fill the remainder of
the cycle.

For example this repeats the first quarter, so you only hear a single
repeating note:

    d1 $ linger 0.25 $ n "0 2 [3 4] 2" # sound "arpy"

or slightly more interesting, applied only every fourth cycle:

    d1 $ every 4 (linger 0.25) $ n "0 2 [3 4] 2" # sound "arpy"

or to a chopped-up sample:

    d1 $ every 2 (linger 0.25) $ loopAt 2 $ chop 8 $ sound "breaks125"

You can also pattern the first parameter, for example to cycle through
three values, one per cycle:

    d1 $ linger "<0.75 0.25 1>" $ sound "bd sn:2 [mt rs] hc"

    d1 $ linger "<0.25 0.5 1>" $ loopAt 2 $ chop 8 $ sound "breaks125"
