---
title: lpq
permalink: wiki/lpq/
layout: wiki
tags:
 - Control Functions
---

[Type](/wiki/Type_signature "wikilink"):

    lpq :: Pattern Double -> ControlPattern

**lpq** turns a number pattern into a control pattern that sets the
resonance of a low pass filter. Values range from 0 to 1.

**lpq** is a shortcut for [resonance](resonance "wikilink").

    d1 $ s "drum*8" # lpf "400" # lpq "0 0.2 0.4 0.6"
