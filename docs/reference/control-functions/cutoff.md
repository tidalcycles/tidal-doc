---
title: cutoff
permalink: wiki/cutoff/
layout: wiki
tags:
 - Control Functions
---

[Type](/wiki/Type_signature "wikilink"):

    cutoff :: Pattern Double -> ControlPattern

**cutoff** turns a number pattern into a control pattern that sets the
cutoff frequency of a low pass filter. In SuperDirt, this is in Hz (try
a range between 0 and 10000). In classic dirt, it is from 0 to 1.

A shortcut for **cutoff** is [lpf](lpf "wikilink").

    d1 $ s "drum*8" # cutoff "100 1000 2000"
