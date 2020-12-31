---
title: perlin
permalink: wiki/perlin/
layout: wiki
tags:
 - Functions
 - Randomness and chance
 - Elemental patterns
---

[Type](/wiki/Type_signature "wikilink"):

``` haskell
perlin :: Pattern Double 
```

**perlin** produces 1D Perlin (smooth) noise. It works like
[rand](rand "wikilink") but smoothly moves between random values each
cycle.

For example, you can smoothly and randomly change speed:

    d1 $ sound "bd*32" # speed (perlin + 0.5)

The perlin function produces a new random value to move to every cycle.
If you want a new random value to be generated more or less frequently,
you can use [fast](fast "wikilink") or [slow](slow "wikilink"),
respectively:

    d1 $ sound "bd*32" # speed (fast 4 $ perlin + 0.5)
    d1 $ sound "bd*32" # speed (slow 4 $ perlin + 0.5)

# perlinWith

**perlinWith** allows you to specify a pattern as input to generate
random values instead of using the default cycle count:

    d1 $ s "arpy*32" # cutoff (perlinWith (saw * 4) * 2000)

# perlin2

**perlin2** creates 2D noise by allowing you to specify a custom pattern
as a second dimension (cycle number remains as the first dimension):

    d1 $ s "bd*32" # speed (perlin2 (sine*4) + 1)

# perlin2With

**perlin2With** is the same as `perlinWith` except allows you to provide
two functions for 2D noise:

    d1
     $ s "[arpy*32]"
     # lpf (range 60 5000 $ perlin2With (cosine*2) (sine*2))
     # lpq 0.3
