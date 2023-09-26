---
title: spin
permalink: wiki/spin/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

    spin :: Pattern Int -> ControlPattern -> ControlPattern

**spin** will play the given number of copies of the given control
pattern at once. For

    n

copies, each successive copy will be offset in time by an additional

    1/n

of a cycle, and also panned in space by an additional

    n

1/n

</source>

. This function works particularly well on multichannel systems.

    d1 $ slow 3 $ spin 4 $ sound "drum*3 tabla:4 [arpy:2 ~ arpy] [can:2 can:3]"
