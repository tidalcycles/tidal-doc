---
title: midichan
permalink: wiki/midichan/
layout: wiki
tags:
 - Control Functions
---

[Type](/wiki/Type_signature "wikilink"):

    midichan :: Pattern Double -> ControlPattern

**midichan** turns a number pattern into a control pattern that controls
what MIDI channel to play a MIDI pattern on.

**midichan** is indexed at zero, which means a value of "0" will play on
MIDI channel 1, a value of "1" will play on MIDI channel 2, and so on.

    d1 $ note "0 3 7 9" # s "midi" # midichan "5"

Observe that you can make a pattern to play on multiple MIDI channels:

    d1 $ note "0 3 7 9" # s "midi" # midichan "5 1 0 3"
