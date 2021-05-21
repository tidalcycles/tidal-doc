---
title: jumpIn
permalink: wiki/jumpIn/
layout: wiki
tags:
 - Transitions
---

`jumpIn` takes the identifier of the ControlPattern track and an integer
*cycleCount*. It will jump **unaligned** into the given pattern after
*cycleCount* cycles have completed.

**Example:** Say you have this:

    d1 $ sound "hh*4"
    d2 $ sound "bd" --have a beat on the 1 for orientation

Then the subdivision on the hi-hat will increase 2 cycles after
evaluation of the next line:

    jumpIn 1 2 $ sound "hh*8" --`1` because `d1` is defined `let d1 = p 1`

The transition will **not** align with the beat on cycle boundary.

**See also:** [jump](jump "wikilink"), [jumpIn'](jumpIn' "wikilink"),
[jumpMod](jumpMod "wikilink")
