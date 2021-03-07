---
title: nudge
permalink: wiki/nudge/
layout: wiki
tags:
 - Control Functions
---

[Type](/wiki/Type_signature "wikilink"):

    nudge :: Pattern Double -> ControlPattern

**nudge** turns a number pattern into a control pattern that changes the
timing of a sample. Allows for nice things like swing feeling:

    d1 $ stack [
      sound "bd bd/4",
      sound "hh(5,8)"
      ] # nudge "[0 0.04]*4"

Low values will give a more human feeling, high values might result in
quite the contrary.

You can also use `nudge` to create continuous time stretches (although
this might be better to do with [cps](cps "wikilink")):

    d1 $ s "drum*8" # nudge (range 0 1 $ slow 8 sine)

You can also use `nudge` to fine-tune timing with other processes.
