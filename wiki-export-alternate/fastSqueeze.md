---
title: fastSqueeze
permalink: wiki/fastSqueeze/
layout: wiki
---

[Type](/wiki/Type_signatures "wikilink"):

``` haskell
fastSqueeze :: Pattern Time -> Pattern a -> Pattern a
```

**fastSqueeze** speeds up a pattern by a time pattern given as input,
squeezing the resulting pattern inside one cycle and playing the
original pattern *at every repetition*.

To better understand how it works let's compare it with
[fast](fast "wikilink"):

    d1 $ fast "1 2" $ s "bd sn"

    -- output
    (0>½)|s: "bd"
    (½>¾)|s: "bd"
    (¾>1)|s: "sn"

This will give

    bd

played in the first half cycle and

    bd sn

in the second half.

On the other hand, using **fastSqueeze**;

    fastSqueeze "1 2" $ s "bd sn"

    --output
    (0>¼)|s: "bd"
    (¼>½)|s: "sn"
    (½>⅝)|s: "bd"
    (⅝>¾)|s: "sn"
    (¾>⅞)|s: "bd"
    (⅞>1)|s: "sn"

the original pattern will play in the first half and two repetitions of
the original pattern will play in the second half. That is, every
repetition contains the whole pattern.

If the time pattern has a single value, it becomes equivalent to

    fast

:

    d1 $ fastSqueeze 2 $ s "bd sn"
    -- is equal to
    d1 $ fast 2 $ s "bd sn"
    -- and equivalent to
    d1 $ s "[bd sn]*2"
