---
title: snowball
permalink: wiki/snowball/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

    snowball :: Int -> (Pattern a -> Pattern a -> Pattern a) -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a

The **snowball** function recursively combines a pattern with a modified
version itself using a combination function over the given number of
cycles. Each passing cycle is one level deeper in the recursion and is
based of all the previous cycles.

It takes 3 arguments. First a number representing an iteration limit.
Second, an operator to combine the patterns with. Third, a function to
modify the patterns with.

For example:

    d1 $ note (scale "minor" $ snowball 4 (+) (slow 2) $ (run 3)) #sound "gtr" #gain 0.9

For the first cycle, we hear the result of the \`run\` function. In the
second cycle we hear the previous pattern added to a slowed version of
itself. The third cycle we hear the result of cycle 2 added to a slowed
version of itself. Same goes for the 4th cycle. The result is a rising
wandering melody over four cycles. (note that it takes more than 4
cycles to repeat as the base pattern is slowed by 2 again and again
until the iteration limit is reached.

This, as the name suggests, can quickly get out of hand.
