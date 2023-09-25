---
title: shuffle
permalink: wiki/shuffle/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

    shuffle :: Int -> Pattern a -> Pattern a

**shuffle** takes a number and a pattern as input, divides the pattern
into the given number of parts, and returns a new pattern as a random
permutation of the parts, picking one of each per cycle. This could also
be called "sampling without replacement". For example:

    d1 $ sound $ shuffle 3 "bd sn hh"

... will sometimes play

    "sn bd hh"

or

    "hh sn bd"

, but will never play

    "bd sn bd"

or

    "hh hh hh"

, because that isn't a permutation of the three parts.

*See also: [scramble](scramble "wikilink")*

[Category:Randomness and
chance](/wiki/Category:Randomness_and_chance "wikilink")
