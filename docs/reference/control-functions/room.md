---
title: room
permalink: wiki/room/
layout: wiki
tags:
 - Control Functions
---

[Type](/wiki/Type_signature "wikilink"):

    room :: Pattern Double -> ControlPattern

**room** controls reverb. It turns a number pattern (ranging from 0 to
1) into a control pattern that controls how much of the audio is signal
is sent into the reverb effect.

    d1 $ sound "bd feel odx drum" # room "0 1 0.25 0.75" # size 0.5 # orbit 1

As room is a global effect, you will want to use it in tandem with
[orbit](orbit "wikilink") (unless you're only running one pattern at a
time).

The [size](size "wikilink") function controls the reverb size.
