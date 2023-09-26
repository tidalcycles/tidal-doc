---
title: hurry
permalink: wiki/hurry/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

``` haskell
hurry :: Pattern Time -> Pattern a -> Pattern a
```

**hurry** is similiar to [fast](fast "wikilink"), in that it speeds up a
pattern, but it also increases the [speed](speed "wikilink") control by
the same factor, so if you're triggering samples, the sound gets higher
in pitch. For example:

    d1 $ every 2 (hurry 2) $ sound "bd sn:2 ~ cp"

[Category:Time Functions](/wiki/Category:Time_Functions "wikilink")
