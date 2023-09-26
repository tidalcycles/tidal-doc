---
title: rev
permalink: wiki/rev/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

``` haskell
rev :: Pattern a -> Pattern a
```

**rev** returns a 'reversed' version of the given pattern.

For example

``` haskell
rev "1 [~ 2] ~ 3"
```

is equivalent to

``` haskell
rev "3 ~ [2 ~] 1"
```

.

Note that

``` haskell
rev
```

reverses on a cycle-by-cycle basis. This means that

``` haskell
rev (slow 2 "1 2 3 4")
```

would actually result in

``` haskell
(slow 2 "2 1 4 3")
```

. This is because the

``` haskell
slow 2
```

makes the repeating pattern last two cycles, each of which is reversed
independently.

In practice

``` haskell
rev
```

is generally used with conditionals, for example with
[every](every "wikilink"):

``` haskell
d1 $ every 3 rev $ n "0 1 [~ 2] 3" # sound "arpy"
```

or [jux](jux "wikilink"):

``` haskell
d1 $ jux rev $ n (iter 4 "0 1 [~ 2] 3") # sound "arpy"
```

[Category:Time Functions](/wiki/Category:Time_Functions "wikilink")
