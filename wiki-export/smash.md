---
title: smash
permalink: wiki/smash/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

    smash :: Pattern Int -> [Pattern Time] -> ControlPattern -> ControlPattern

**smash** is a combination of [spread](spread "wikilink") and
[striate](striate "wikilink") - it cuts the samples into the given
number of bits, and then cuts between playing the loop at different
speeds according to the values in the list.

So this:

    d1 $ smash 3 [2,3,4] $ sound "ho ho:2 ho:3 hc"

Is a bit like this:

    d1 $ slow "<2 3 4>" $ striate 3 $ sound "ho ho:2 ho:3 hc"

# smash'

[Type](/wiki/Type_signature "wikilink"):

    smash' :: Int -> [Pattern Time] -> ControlPattern -> ControlPattern

**smash**' is

     smash 

but based on [chop](chop "wikilink") instead of

    striate

.

Compare

    d1 $ smash 6 [2,3,4] $ sound "ho ho:2 ho:3 hc"

to

    d1 $ smash' 6 [2,3,4] $ sound "ho ho:2 ho:3 hc"

or

    d1 $ smash 12 [2,3,4] $ s "bev*4"

vs

    d1 $ smash' 12 [2,3,4] $ s "bev*4"

for a dramatic difference
