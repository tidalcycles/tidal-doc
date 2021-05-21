---
title: repeatCycles
permalink: wiki/repeatCycles/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

``` haskell
repeatCycles :: Int -> Pattern a -> Pattern
```

**repeatCycles** is a function that repeats each cycle of a given
pattern a given number of times.. It takes two inputs, the number of
repeats, and the pattern you are transforming.

For example, to repeat each random cycle of notes three times:

``` haskell
d1 $ repeatCycles 3 $ sound "arpy(5,8)" # n (irand 8)
```

[Category:Randomness and
chance](/wiki/Category:Randomness_and_chance "wikilink") [Category:Time
Functions](/wiki/Category:Time_Functions "wikilink")
