---
title: stutter
permalink: wiki/stutter/
layout: wiki
---

[Type](/wiki/Type_signature "wikilink"):

    stutter :: Integral i => i -> Time -> Pattern a -> Pattern a

**stutter** is like [stut](stut "wikilink") that doesn't reduce the
volume or [ply](ply "wikilink") if you controlled the timing.

    stutter n t

repeats each event in the pattern

    n

times, separated by

    t

time (in fractions of a cycle).

The code

    d1 $ stutter 4 (1/16) $ s "bd cp"

should be functionally equivalent to

    d1 $ stut 4 1 (1/16) $ s "bd cp"

Specific conveniences functions that use

    stutter

are:

    echo   = stutter (2 :: Int)
    triple = stutter (3 :: Int)
    quad   = stutter (4 :: Int)
    double = echo
