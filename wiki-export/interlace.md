---
title: interlace
permalink: wiki/interlace/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

    interlace :: ControlPattern -> ControlPattern -> ControlPattern

*'interlace* shifts between two patterns, by using SuperDirt's
[shape](shape "wikilink") distortion control pattern. For example:

    d1 $ interlace (sound  "bd sn kurt") (every 3 rev $ sound "bd sn:2")

Over 16 cycles, the first pattern will slowly rise and fall in
waveshaping distortion (and as a result, in volume), and the second
pattern will do the opposite, falling and then rising. The resulting
effect sounds like the patterns are taking turns coming 'to the front'
of the audio scene.

The above is the equivalent of the following:

    d1 $ sound "bd sn kurt" # shape (slow 16 $ sine * 0.9)
    d2 $ every 3 rev $ sound "bd sn:2" # shape (8 <~ (slow 16 $ sine * 0.9))

I.e. the distortion will follow a sinewave from 0 to 0.9, over 16
cycles. The second pattern will do the same, but offset by 8 cycles.
