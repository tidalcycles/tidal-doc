---
title: pan
permalink: wiki/pan/
layout: wiki
tags:
 - Control Functions
---

[Type](/wiki/Type_signature "wikilink"):

    pan :: Pattern Double -> ControlPattern

**pan** turns a number pattern (ranging from 0 to 1) into a control
pattern that specifies the audio channel. In a 2-channel setup, a value
of `0` pans the audio hard left and a value of `1` pans the audio hard
right. The default value is `0.5`, which produces full volume on both
channels.

    d1 $ sound "bd feel odx drum" # pan "0 1 0.25 0.75"

    d1 $ sound "bd*16" # pan (slow 3 $ sine)
