---
title: iter
permalink: wiki/iter/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

``` haskell
iter :: Pattern Int -> Pattern a -> Pattern a
```

**iter** divides a pattern into a given number of subdivisions, plays
the subdivisions in order, but increments the starting subdivision each
cycle. The pattern wraps to the first subdivision after the last
subdivision is played.

Example:

    d1 $ iter 4 $ sound "bd hh sn cp"

This will produce the following over four cycles:

`bd hh sn cp`  
`hh sn cp bd`  
`sn cp bd hh`  
`cp bd hh sn`

# iter'

**iter**' does the same as [iter](iter "wikilink") but in the other
direction. So this:

    d1 $ iter' 4 $ sound "bd hh sn cp"

Produces this pattern:

`bd hh sn cp`  
`cp bd hh sn`  
`sn cp bd hh`  
`hh sn cp bd`

[Category:Time Functions](/wiki/Category:Time_Functions "wikilink")
