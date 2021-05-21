---
title: hresonance
permalink: wiki/hresonance/
layout: wiki
tags:
 - Control Functions
---

[Type](/wiki/Type_signature "wikilink"):

    hresonance :: Pattern Double -> ControlPattern

**hresonance** turns a number pattern into a control pattern that sets
the resonance of a high pass filter. Values range from 0 to 1.

[hpq](hpq "wikilink") is a shortcut for **hresonance**.

    d1 $ s "drum*8" # hpf "1000" # hresonance "0 0.2 0.4 0.6"
