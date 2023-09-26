---
title: slow
permalink: wiki/slow/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

``` haskell
slow :: Pattern Time -> Pattern a -> Pattern a
```

**slow** slows down a pattern. For example, the following will play the
sound pattern "bd sn kurt" twice as slow (i.e. so it repeats once every
two cycles), and the vowel pattern three times as slow:

    d1 $ sound (slow 2 "bd sn kurt")
       # slow 3 (vowel "a e o")

*See also: [fast](fast "wikilink").*

[Category:Time Functions](/wiki/Category:Time_Functions "wikilink")
