---
title: randslice
permalink: wiki/randslice/
layout: wiki
tags:
 - Functions
 - Randomness and chance
---

[Type](/wiki/Type "wikilink"):

    randslice :: Pattern Int -> ControlPattern -> ControlPattern

**randslice** chops the sample into the given number of pieces and then
plays back a random one each cycle:

    d1 $ randslice 32 $ sound "bev"

Use [fast](fast "wikilink") to get more than one per cycle;

    d1 $ fast 4 $ randslice 32 $ sound "bev"

See also [slice](slice "wikilink")
