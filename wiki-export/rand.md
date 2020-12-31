---
title: rand
permalink: wiki/rand/
layout: wiki
tags:
 - Functions
 - Randomness and chance
 - Elemental patterns
---

[Type](/wiki/Type_signature "wikilink"):

``` haskell
rand :: Fractional a => Pattern a 
```

**rand** is an [oscillator](/wiki/Oscillators "wikilink") that generates a
pattern of (pseudo-)random, floating point numbers between 0 and 1. For
example to randomly pan around the stereo field you can:

    d1 $ sound "bd*8" # pan rand

Or to enjoy a randomised **speed** from 0.5 to 1.5, you can add 0.5 to
it.

    d1 $ sound "arpy*4" # speed (rand + 0.5)

# irand

[Type](/wiki/Type_signature "wikilink"):

``` haskell
irand :: Num a => Int -> Pattern a
```

**irand** is similar to [rand](rand "wikilink"), but generates a
[continuous oscillator](/wiki/Oscillators "wikilink") of (pseudo-)random
integers between 0 to n-1 inclusive. Notably used to pick random samples
from a folder.

    d1 $ sound "amencutup*8" # n (irand 8)
