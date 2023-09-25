---
title: speed
permalink: wiki/speed/
layout: wiki
tags:
 - Control Functions
---

[Type](/wiki/Type_signature "wikilink"):

    speed :: Pattern Double -> ControlPattern

**speed** turns a number pattern into a control pattern that sets the
playback speed of a sample where 1 means normal speed. Can be used as a
cheap way of changing pitch for samples. Negative numbers will cause the
sample to be played backwards.

    d1 $ s "numbers" # speed "1"
    d1 $ s "numbers" # speed "2"
    d1 $ s "numbers" # speed "0.5"
    d1 $ s "numbers" # speed "-1"
    d1 $ s "numbers" # speed "[1 1.5 0.75 -1.25]/4"

When using this method to alter sample pitch, there’s a convenience
parameter **up**, which uses units of semitones instead of
multiplicative values. For example,

    d1 $ s "arpy*4" # up "0 4 7 0"

will play the “arpy” sample at the original speed, then up 4 semitones
(a third), then up 7 semitones (a fifth), then once more at the original
speed.

The behavior of speed can also be changed by the [unit](unit "wikilink")
function.
