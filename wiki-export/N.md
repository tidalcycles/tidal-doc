---
title: n
permalink: wiki/n/
layout: wiki
tags:
 - Control Functions
---

[Type](/wiki/Type_signature "wikilink"):

    n :: Pattern Int -> ControlPattern

**n** turns a number pattern into a control pattern that changes the
sample being played in the specified sound folder on disk. The default
value is **0**, which plays the first sample in the sound folder. A
value of **1** plays the next sample in the folder, a value of **2**
plays the next, and so on:

    d1 $ s "drum*4" # n "0"
    d1 $ s "drum*4" # n "1"
    d1 $ s "drum*4" # n "2 3"
    d1 $ s "drum*4" # n "0 1 2 3"

A shorthand version of **n** is to use a colon followed by a number
after a sound name:

    d1 $ s "drum:0"
    d1 $ s "drum:1"
    d1 $ s "drum:0 drum:3 drum:2 drum:1*2"

You can of course combine sound patterns with patterns of **n** to
easily create patterns with more complexity:

    d1 $ s "drum [cp hh] odx*2 arpy*2" # n "[1 3 5 0 2]/2"

**n** is an index that starts at zero, so to play the 5th sample in a
folder, you would use the number 4:

    d1 $ s "drum" # n "4"
