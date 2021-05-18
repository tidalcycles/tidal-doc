---
title: hpf
permalink: wiki/hpf/
layout: wiki
tags:
 - Control Functions
---

[Type](/wiki/Type_signature "wikilink"):

    hpf :: Pattern Double -> ControlPattern

**hpf** turns a number pattern into a control pattern that sets the
cutoff frequency of a high pass filter. In SuperDirt, this is in Hz (try
a range between 0 and 10000). In classic dirt, it is from 0 to 1.

**hpf** is a shortcut for [hcutoff](hcutoff "wikilink").

    d1 $ s "drum*8" # hpf "100 1000 2000 5000"
