---
title: randcat
permalink: wiki/randcat/
layout: wiki
tags:
 - Functions
 - Randomness and chance
---

[Type](/wiki/Type_signature "wikilink"):

    randcat :: [Pattern a] -> Pattern a

**randcat** is similar to [cat](cat "wikilink"), but rather than playing
the given patterns in order, it picks them at random. For example:

    d1 $ randcat [sound "bd*2 sn", sound "jvbass*3", sound "drum*2", sound "ht mt"]
