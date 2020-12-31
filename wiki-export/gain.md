---
title: gain
permalink: wiki/gain/
layout: wiki
tags:
 - Control Functions
---

[Type](/wiki/Type_signature "wikilink"):

    gain :: Pattern Double -> ControlPattern

**gain** turns a number pattern into a control pattern that specifies
volume. Values less than 1 make the sound quieter. Values greater than 1
make the sound louder.

    d1 $ gain "1 0.5 1.25" # sound "feel"

    d1 $ sound "bd*16" # gain (slow 3 $ sine)
