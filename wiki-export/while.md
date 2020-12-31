---
title: while
permalink: wiki/while/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

    Pattern Bool -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a

**while** uses a binary pattern to conditionally apply a function to a
source pattern. The function is applied when a "true" value is active,
and the pattern remains unchanged when a "false" value is active.

For example, the following pattern changes the `speed` in the last
quarter of the pattern:

    d1 $ while "f f f t" (# speed 2) $ s "bd*8"

This code will reverse the pattern, but only in the first half of the
pattern:

    d1 $ while "t f" rev $ s "drum*8" # n "0 .. 7"

You can use Euclidean patterns, or more complex binary patterns, to
achieve interesting results:

    d1 $ while "t(<3 5>,8,<0 1 5>)" rev $ s "drum*8" # n "0 .. 7"
