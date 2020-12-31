---
title: lpf
permalink: wiki/lpf/
layout: wiki
tags:
 - Control Functions
---

[Type](/wiki/Type_signature "wikilink"):

    lpf :: Pattern Double -> ControlPattern

**lpf** turns a number pattern into a control pattern that sets the
cutoff frequency of a low pass filter. In SuperDirt, this is in Hz (try
a range between 0 and 10000). In classic dirt, it is from 0 to 1.

**lpf** is a shortcut for [cutoff](cutoff "wikilink").

    d1 $ s "drum*8" # lpf "100 1000 2000"
