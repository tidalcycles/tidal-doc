---
title: resonance
permalink: wiki/resonance/
layout: wiki
tags:
 - Control Functions
---

[Type](/wiki/Type_signature "wikilink"):

    resonance :: Pattern Double -> ControlPattern

**resonance** turns a number pattern into a control pattern that sets
the resonance of a low pass filter. Values range from 0 to 1.

[lpq](lpq "wikilink") is a shortcut for **resonance**.

    d1 $ s "drum*8" # cutoff "1000" # resonance "0 0.2 0.4 0.6"
