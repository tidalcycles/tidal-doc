---
title: every'
permalink: wiki/every'/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

``` haskell
every' :: Int -> Int -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a
```

**every**' is a generalisation of [every](every "wikilink"), taking one
additional argument. The additional argument allows you to offset the
function you are applying.

For example,

``` haskell
every' 3 0 (fast 2)
```

will speed up the cycle on cycles 0,3,6,… whereas

``` haskell
every' 3 1 (fast 2)
```

will transform the pattern on cycles 1,4,7,…

With this in mind, setting the second argument of

``` haskell
every'
```

to 0 gives the equivalent

``` haskell
every
```

function. For example,

``` haskell
every 3
```

is equivalent to

``` haskell
every' 3 0
```

.

[Category:Higher-order
functions](/wiki/Category:Higher-order_functions "wikilink")
[Category:Conditional
Transformers](/wiki/Category:Conditional_Transformers "wikilink")
