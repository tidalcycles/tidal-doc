---
title: hcutoff
permalink: wiki/hcutoff/
layout: wiki
tags:
 - Control Functions
---

[Type](/wiki/Type_signature "wikilink"):

    hcutoff :: Pattern Double -> ControlPattern

**hcutoff** turns a number pattern into a control pattern that sets the
cutoff frequency of a high pass filter. In SuperDirt, this is in Hz (try
a range between 0 and 10000). In classic dirt, it is from 0 to 1.

[hpf](hpf "wikilink") is a shortcut for **hcutoff**.

    d1 $ s "drum*8" # hcutoff "100 1000 2000 5000"
