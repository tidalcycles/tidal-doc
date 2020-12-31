---
title: flatpat
permalink: wiki/flatpat/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

``` haskell
flatpat :: Pattern [a] -> Pattern a
```

**flatpat** takes a pattern of lists and *flattens* it into a pattern
where all the events in each list happen simultaneously.

For example, the following code uses

    flatpat

in combination with [listToPat](listToPat "wikilink") to create an
alternating pattern of chords.

    d1 $ n (flatpat $ listToPat [[0,4,7],[(-12),(-8),(-5)]]) # s "superpiano" # sustain 2

This code is equivalent to

    d1 $ n ("[0,4,7] [-12,-8,-5]") # s "superpiano" # sustain 2
