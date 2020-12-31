---
title: ply
permalink: wiki/ply/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

``` haskell
ply :: Pattern Int -> Pattern a -> Pattern a
```

The **ply** function repeats each event the given number of times. For
example

``` haskell
ply 3 $ s "bd ~ sn cp"
```

... is equivalent to ...

``` haskell
s "[bd bd bd] ~ [sn sn sn] [cp cp cp]"
```

The first parameter may be given as a pattern, so that:

``` haskell
ply "2 3" $ s "bd ~ sn cp"
```

... is equivalent to ...

``` haskell
s "[bd bd] ~ [sn sn sn] [cp cp cp]"
```

Here is an example of it being used conditionally:

``` haskell
d1 $ every 3 (ply 4) $ s "bd ~ sn cp"
```
