---
title: sig
permalink: wiki/sig/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

``` haskell
sig :: (Time -> a) -> Pattern a
```

**sig** takes a function of time and turns it into a pattern. It's very
useful for creating continuous patterns such as [sine](sine "wikilink")
or [perlin](perlin "wikilink"). For example, [saw](saw "wikilink") is
defined as

    saw = sig $ \t -> mod' (fromRational t) 1

[Category:Time Functions](/wiki/Category:Time_Functions "wikilink")
