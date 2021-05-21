---
title: size
permalink: wiki/size/
layout: wiki
tags:
 - Control Functions
---

[Type](/wiki/Type_signature "wikilink"):

    size :: Pattern Double -> ControlPattern

**size** controls reverb room decay time. It turns a number pattern
(ranging from 0 to 1) into a control pattern that controls the room
decay time of the reverb effect.

    d1 $ sound "bd" # room "0.5" # size "<0.1 0.5 0.9>"

The [room](room "wikilink") function controls the reverb effect amount.
