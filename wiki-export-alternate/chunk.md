---
title: chunk
permalink: wiki/chunk/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

``` haskell
chunk :: Int -> (Pattern b -> Pattern b) -> Pattern b -> Pattern b
```

**chunk** divides a pattern into a given number of parts, then cycles
through those parts in turn, applying the given function to each part in
turn (one part per cycle).

Example:

    d1 $ chunk 4 (# speed 2) $ sound "bd hh sn cp"

The below highlights in bold which part of the above pattern has the

    (# speed 2)

function applied to it over four cycles:

**`bd`**` hh sn cp`  
`bd `**`hh`**` sn cp`  
`bd hh `**`sn`**` cp`  
`bd hh sn `**`cp`**

Another example:

    d1 $ chunk 4 (hurry 2) $ sound "bd sn:2 [~ bd] sn:2"

# chunk'

**chunk**' does the same as [chunk](chunk "wikilink") but cycles through
the parts in the reverse direction.

[Category:Time Functions](/wiki/Category:Time_Functions "wikilink")
