---
title: fastGap
permalink: wiki/fastGap/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

``` haskell
fastGap :: Pattern Time -> Pattern a -> Pattern a
```

**fastGap** speeds up a pattern like [fast](fast "wikilink"), but rather
than it playing multiple times as

     fast

would it instead leaves a *gap* in the remaining space of the cycle. For
example, the following will play the sound pattern "bd sn" only once but
compressed into the first half of the cycle, i.e. twice as fast.

    d1 $ sound (fastGap 2 "bd sn")

**See also: [fast](fast "wikilink").**

[Category:Time Functions](/wiki/Category:Time_Functions "wikilink")
