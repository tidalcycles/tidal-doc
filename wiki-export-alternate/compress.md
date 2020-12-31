---
title: compress
permalink: wiki/compress/
layout: wiki
---

[Type](/wiki/Type_signatures "wikilink"):

``` haskell
 compress :: (Time, Time) -> Pattern a -> Pattern a 
```

**compress** takes a pattern and *squeezes* it within the specified time
span (i.e. the 'arc'). The new resulting pattern is a sped up version of
the original.

    d1 $ compress (1/4, 3/4) $ s "[bd sn]!"

In the above example, the pattern will play in an arc spanning from 25%
to 75% of the duration of a cycle. It is equivalent to:

    d1 $ s "~ [bd sn]! ~"

Another example, where all events are different:

    d1 $ compress (1/4, 3/4) $ n (run 4) # s "arpy"

It differs from [zoom](zoom "wikilink") in that it preserves the
original pattern but it speeds up its events so to match with the new
time period.
