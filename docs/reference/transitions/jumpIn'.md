---
title: jumpIn'
permalink: wiki/jumpIn'/
layout: wiki
tags:
 - Transitions
---

`jumpIn'` takes the identifier of the ControlPattern track and an
integer *cycleCount*. It will jump **at cycle boundary** into the given
pattern after *cycleCount* cycles have completed.

**Example:** Say you have this:

    d1 $ sound "hh*4"
    d2 $ sound "bd" --have a beat on the 1 for orientation

Then the subdivision on the hi-hat will increase 2 cycles after
evaluation of the next line:

    jumpIn' 1 2 $ sound "hh*8" --`1` because `d1`

The transition will align with the beat on cycle boundary.

**See also:** [jump](jump "wikilink"), [jumpIn](jumpIn "wikilink"),
[jumpMod](jumpMod "wikilink")
