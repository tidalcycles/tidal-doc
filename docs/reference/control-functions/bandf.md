---
title: bandf
permalink: wiki/bandf/
layout: wiki
tags:
 - Control Functions
---

[Type](/wiki/Type_signature "wikilink"):

    bandf :: Pattern Double -> ControlPattern

**bandf** turns a number pattern into a control pattern that sets the
center frequency of a band pass filter. In SuperDirt, this is in Hz (try
a range between 0 and 10000). In classic dirt, it is from 0 to 1.

You can use [bpf](bpf "wikilink") as a shortcut for **bandf**.

    d1 $ s "drum*8" # bandf "100 1000 2000"
