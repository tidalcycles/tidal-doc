---
title: gap
permalink: wiki/gap/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

    gap :: Pattern Int -> ControlPattern -> ControlPattern

**gap** is similar to [chop](chop "wikilink") in that it granulates
every sample in place as it is played, but every other grain is silent.
Use an integer value to specify how many granules each sample is chopped
into:

    d1 $ gap 8 $ sound "jvbass"

    d1 $ gap 16 $ sound "[jvbass drum:4]"

You can also provide a pattern here:

    d1 $ gap "<32 16 8 4>" $ sound "rave"

*See also: [striate](striate "wikilink"), [chop](chop "wikilink")*
