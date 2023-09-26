---
title: fast
permalink: wiki/fast/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

``` haskell
fast :: Pattern Time -> Pattern a -> Pattern a
```

**fast** speeds up a pattern. For example, the following will play the
sound pattern "bd sn kurt" twice as fast (i.e. so it repeats twice per
cycle), and the vowel pattern three times as fast:

    d1 $ sound (fast 2 "bd sn kurt")
       # fast 3 (vowel "a e o")

The first parameter can be patterned, for example to play the pattern at
twice the speed for the first half of each cycle and then four times the
speed for the second half:

    d1 $ fast "2 4" $ sound "bd sn kurt cp"

You can also use this function by its older alias,

    density

.

*See also: [slow](slow "wikilink").*

[Category:Time Functions](/wiki/Category:Time_Functions "wikilink")
