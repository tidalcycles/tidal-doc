---
title: rot
permalink: wiki/rot/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

``` haskell
rot :: Ord a => Pattern Int -> Pattern a -> Pattern a
```

The **rot** function 'rotates' the values in a pattern, while preserving
its structure. For example in the following, each value will shift to
its neighbour's position one step to the left, so that b takes the place
of a, a of c, and c of b:

``` haskell
rot 1 "a ~ b c"
```

The result is equivalent of

``` haskell
"b ~ c a"
```

The first parameter is the number of steps, and may be given as a
pattern, for example:

``` haskell
d1 $ rot "<0 0 1 3>" $ n "0 ~ 1 2 0 2 ~ 3*2" # sound "drum"
```

The above will not rotate the pattern for the first two cycles, will
rotate it by one the third cycle, and by three the fourth cycle.

[Category:Tidal-1+](/wiki/Category:Tidal-1+ "wikilink")
