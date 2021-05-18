---
title: hpq
permalink: wiki/hpq/
layout: wiki
tags:
 - Control Functions
---

[Type](/wiki/Type_signature "wikilink"):

    hpq :: Pattern Double -> ControlPattern

**hpq** turns a number pattern into a control pattern that sets the
resonance of a high pass filter. Values range from 0 to 1.

**hpq** is a shortcut for [hresonance](hresonance "wikilink").

    d1 $ s "drum*8" # hpf "1000" # hpq "0 0.2 0.4 0.6"
