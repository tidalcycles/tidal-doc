---
title: someCycles
permalink: wiki/someCycles/
layout: wiki
tags:
 - Functions
---

*See also: [sometimes](sometimes "wikilink")*

[Type](/wiki/Type_signature "wikilink"):

``` haskell
someCycles :: (Pattern a -> Pattern a) -> Pattern a -> Pattern a
```

**someCycles** is similar to [sometimes](sometimes "wikilink"), but
instead of applying the given function to random events, it applies it
to random cycles. For example the following will either distort all of
the events in a cycle, or none of them:

``` haskell
d1 $ someCycles (# crush 2) $ n "0 1 [~ 2] 3" # sound "arpy"
```

# someCyclesBy

As with

``` haskell
sometimesBy
```

, if you want to be specific, you can use

``` haskell
someCyclesBy
```

and a number. For example

``` haskell
someCyclesBy 0.93 (# speed 2)
```

will apply the

``` haskell
speed
```

control on average 93 cycles out of a hundred.

[Category:Higher-order
functions](/wiki/Category:Higher-order_functions "wikilink")
[Category:Randomness and
chance](/wiki/Category:Randomness_and_chance "wikilink") [Category:Conditional
Transformers](/wiki/Category:Conditional_Transformers "wikilink")
