---
title: bandq
permalink: wiki/bandq/
layout: wiki
tags:
 - Control Functions
---

[Type](/wiki/Type_signature "wikilink"):

    bandq :: Pattern Double -> ControlPattern

**bandq** turns a number pattern into a control pattern that sets the
q-factor of the band-pass filter. Higher values (larger than 1) narrow
the band-pass. Has the shorthand `bpq`.

You can use [bpq](bpq "wikilink") as a shortcut for **bandq**.

    d1 $ s "[drum cp]*2 [drum:1 hh*2]" # bandf "100 1000 2000" # bandq "<0.5 1 2>"
