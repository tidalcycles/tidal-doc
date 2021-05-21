---
title: cut
permalink: wiki/cut/
layout: wiki
tags:
 - Control Functions
---

[Type](/wiki/Type_signature "wikilink"):

    cut :: Pattern Int -> ControlPattern

In the style of classic drum-machines, **cut** will stop a playing
sample as soon as another sample with the same cutgroup is played.

An example would be an open hi-hat followed by a closed one, and
stopping the open hi-hat from playing when a closed one starts:

    d1 $ stack [
      sound "bd",
      sound "~ [~ [ho:2 hc/2]]" # cut "1"
      ]

This will mute the open hi-hat every second cycle when the closed one is
played.

Using `cut` with negative values will only cut the same sample. This is
useful to cut very long samples.

    d1 $ sound "[bev, [ho:3](3,8)]" # cut "-1"

Using `cut "0"` is effectively *no* cutgroup.

You can also specify a pattern of cutgroups to mute a sample at
different times:

    d1 $ sound "bev(3,8)" # cut "[1 2 3]*2"
