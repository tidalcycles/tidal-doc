---
title: bite
permalink: wiki/bite/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

``` haskell
bite :: Int -> Pattern Int -> Pattern a -> Pattern a
```

The **bite** function allows you to slice each cycle into a given number
of equal sized bits, and then pattern those bits by number. It's similar
to [slice](slice "wikilink"), but is for slicing up patterns, rather
than samples.

The following slices the pattern into four bits, and then plays those
bits in turn.

    d1 $ bite 4 "0 1 2 3" $ n "0 .. 7" # sound "arpy"

Of course that doesn't actually change anything, but then you can
reorder those bits:

    d1 $ bite 4 "2 0 1 3" $ n "0 .. 7" # sound "arpy"

The slices bits of pattern will be squeezed or contracted to fit:

    d1 $ bite 4 "2 [0 3] 1*4 1" $ n "0 .. 7" # sound "arpy"

## chew

[Type](/wiki/Type_signature "wikilink"):

``` haskell
chew :: Int -> Pattern Int -> Pattern a -> Pattern a
```

**chew** works the same as

    bite

, but speeds up/slows down playback of sounds as well as squeezing /
contracting the slices of pattern.

Compare these:

    d1 $ bite 4 "0 1*2 2*2 [~ 3]" $ n "0 .. 7" # sound "drum"

    d1 $ chew 4 "0 1*2 2*2 [~ 3]" $ n "0 .. 7" # sound "drum"
