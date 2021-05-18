---
title: scramble
permalink: wiki/scramble/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

    scramble :: Int -> Pattern a -> Pattern a

**scramble** takes a number and a pattern as input, divides the pattern
into the given number of parts, and returns a new pattern by randomly
selecting from the parts. This could also be called "sampling with
replacement". For example:

    d1 $ sound $ scramble 3 "bd sn hh"

... will sometimes play

    "sn bd hh"

or

    "hh sn bd"

, but can also play

    "bd sn bd"

or

    "hh hh hh"

, because it can make any random combination of the three parts.

*See also: [shuffle](shuffle "wikilink")*

[Category:Randomness and
chance](/wiki/Category:Randomness_and_chance "wikilink")
