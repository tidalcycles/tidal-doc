---
title: swingBy
permalink: wiki/swingBy/
layout: wiki
tags:
 - Functions
 - Time Functions
---

[Type](/wiki/Type_signature "wikilink"):

    swingBy :: Pattern Time -> Pattern Time -> Pattern a -> Pattern a

The function

    swingBy x n

breaks each cycle into

    n

slices, and then delays events in the second half of each slice by the
amount

    x

, which is relative to the size of the (half) slice. So if

    x

is 0 it does nothing,

    0.5

delays for half the note duration, and

    1

will wrap around to doing nothing again. The end result is a shuffle or
swing-like rhythm. For example:

    d1 $ swingBy (1/3) 4 $ sound "hh*8"

will delay every other "hh" 1/3 of the way to the next "hh".

# swing

[Type](/wiki/Type_signature "wikilink"):

    swing :: Pattern Time -> Pattern a -> Pattern a

**swing** is an alias for

    swingBy (1/3)
