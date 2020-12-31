---
title: foldEvery
permalink: wiki/foldEvery/
layout: wiki
tags:
 - Functions
 - Higher-order functions
---

[Type](/wiki/Type_signature "wikilink"):

    foldEvery :: [Int] -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a

**foldEvery** transforms a pattern with a function, once per any of the
given number of cycles. If a particular cycle is the start of more than
one of the given cycle periods, then it it applied more than once. It is
similar to chaining multiple [every](every "wikilink") functions
together.

Example:

    d1 $ foldEvery [3, 4, 5] (fast 2) $ sound "bd sn kurt"

this is equal to:

    d1 $ every 3 (fast 2) $ every 4 (fast 2) $ every 5 (fast 2) $ sound "bd sn kurt"
