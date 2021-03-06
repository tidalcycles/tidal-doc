---
title: soak
permalink: wiki/soak/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

    soak :: Int -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a

The **soak** function applies the given function over the given number
of cycles. For example:

    d1 $ soak 4 (* speed 1.5) $ sound "bd(3,8) sd:2"

For the first cycle, the function won't be applied at all, the second
it'll be applied once, the third twice and fourth three times. The
result is an increase of playback speed over four cycles.

The following creates a wandering melodic phrase that returns to the
original after 4 cycles:

    d1 $ (note $ scale "hexPhrygian" $ soak 4 ((0.25 <~).(|+ irand(2))) "0 . 2 3 ~ . 0 1 . -1 -2") #s "gtr"

This example will build up a kick rush over 4 bars:

    d1 $ soak 4 (iter 8. slow 2 .ply 3) $ euclid 3 5 $ sound "bd sn"
