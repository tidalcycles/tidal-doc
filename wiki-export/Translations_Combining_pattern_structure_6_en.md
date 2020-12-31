---
title: Translations:Combining pattern structure/6/en
permalink: wiki/Translations:Combining_pattern_structure/6/en/
layout: wiki
---

Unlike in previous versions of Tidal, when you combine two patterns in
this way, by default the structure now comes from *both patterns*. This
means you end up with *four* events, because the

``` Haskell
5
```

in the middle lines up both with the

``` Haskell
2
```

and the

``` Haskell
3
```

, and gets split in half between them. We can add the resulting pattern
to our table:
