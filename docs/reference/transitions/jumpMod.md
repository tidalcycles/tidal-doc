---
title: jumpMod
permalink: wiki/jumpMod/
layout: wiki
tags:
 - Transitions
---

`jumpMod` takes the identifier of the ControlPattern track and an
integer *cycleMod*. It will jump **at cycle boundary** into the given
pattern when `` currentCycle `mod` cycleMod == 0 ``.

**Example:** Say you have this:

    d1 $ sound "hh*4"
    d2 $ sound "bd" --have a beat on the 1 for orientation

Then the subdivision on the hi-hat will increase in one of the next 2
cycles after evaluation of the next line:

    jumpMod 1 2 $ sound "hh*8" --`1` because `d1`

The transition will align with one of the next 2 `bd` onsets.

**See also:** [jump](jump "wikilink"), [jumpIn](jumpIn "wikilink"),
[jumpIn'](jumpIn' "wikilink")
