---
title: unit
permalink: wiki/unit/
layout: wiki
---

[Type](/wiki/Type_signature "wikilink"):

    unit :: Pattern String -> ControlPattern

`unit` controls how the [speed](speed "wikilink") parameter is
interpreted. It accepts a pattern of the following values: `"r"`
(default), `"c"`, or `"s"`.

With `unit "r"`, `speed` multiplies the sample playback rate, so `1` is
normal `2` is double speed, `0.5` half speed, etc.

With `unit "c"`, `speed` specifies the playback rate *relative to cycle
length*. So `unit "c" # speed "1"` will speed up or slow down the sample
to fit in one cycle, `unit "c" # speed "2"` will play the sample twice
as fast (so that it fits in half a cycle), etc. This can be useful for
beat matching if your sample is a drum loop.

With `unit "s"`, `speed` specifies the playback *length* in seconds.

    -- stretches sample to fit in 1 cycle
    d1 $ sound "breaks125" # unit "c"

    -- stretchs sample to fit in half a cycle
    d1 $ sound "breaks125" # unit "c" # speed 2
    d1 $ sound "breaks125*2" # unit "c" # speed 2

    d1 $ stack [
      n "[0 1 1 1]/2" # sound "casio"
    , sound "breaks125/2" # unit "c" # cut 1 # speed 0.5
    ] # cps "[0.5 1 1.5 2]/8"
