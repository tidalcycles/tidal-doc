---
title: rotL
permalink: wiki/rotL/
layout: wiki
---

[Type](/wiki/Type_signature "wikilink"):

``` haskell
rotL :: Time -> Pattern a -> Pattern a -> Pattern a
```

**rotL** Shifts a pattern back in time by the given amount, expressed in
cycles.

This will skip to the fourth cycle when evaluated:

    do
    {
      resetCycles;
      d1 $ rotL 4 $ seqP [ 
        (0, 12, sound "bd bd*2"), 
        (4, 12, sound "hh*2 [sn cp] cp future*4"), 
        (8, 12, sound (samples "arpy*8" (run 16)))
      ]
    }

Useful when building and testing out longer sequences.

# rotR

**rotR** is the opposite of

    rotL

as it shifts the pattern *forwards* in time.
