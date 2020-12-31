---
title: slowSqueeze
permalink: wiki/slowSqueeze/
layout: wiki
---

[Type](/wiki/Type_signatures "wikilink"):

``` haskell
slowSqueeze :: Pattern Time -> Pattern a -> Pattern a
```

**fastSqueeze** slows down a pattern according to the given time
pattern. It is the

    slow

analogue to [fastSqueeze](fastSqueeze "wikilink").

If the time pattern only has a single value in a cycle,

    slowSqueeze

becomes equivalent to

    slow

:

    d1 $ slow "<2 4>" $ s "bd*8"

is the same as

    d1 $ slowSqueeze "<2 4>" $ s "bd*8"

but when the time pattern has *multiple* values in it the behavior is a
little different! Instead, a slowed version of the pattern will be made
for each value in the time pattern and then they're *all* combined
together in a cycle, according to the structure of the time pattern. For
example,

    d1 $ slowSqueeze "2 4 8 16" $ s "bd*8"

is equivalent to

    d1 $ s "bd*4 bd*2 bd bd/2"

and

    d1 $ slowSqueeze "2 4 [8 16]" $ s "bd*8"

is equivalent to

    d1 $ s "bd*4 bd*2 [bd bd/2]"
