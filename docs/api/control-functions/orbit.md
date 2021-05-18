---
title: orbit
permalink: wiki/orbit/
layout: wiki
tags:
 - Control Functions
---

[Type](/wiki/Type_signature "wikilink"):

    orbit :: Pattern Int -> ControlPattern

**orbit** is used to separate out audio channels. One use is to deal
with global effects such as [room](room "wikilink") and
[delay](delay "wikilink").

For example if you run both of the following patterns at the same time,
the reverb will switch on and off, seemingly at random. This is because
reverb is a global effect, is therefore shared by both patterns, and one
is trying to turn it on, while the other is trying to switch it off.

    d1 $ sound "feel*4" # room 0.9 # sz 0.9

    d2 $ sound "bd*16" # room 0

The answer is to put them into different orbits:

    d1 $ sound "feel*4" # room 0.9 # sz 0.9 # orbit 0

    d2 $ sound "bd*16" # room 0 # orbit 1

Orbits can also be used for sending out [separate audio
outputs](/wiki/Separate_audio_outputs "wikilink") to external software, such
as a DAW.

There are two orbits (0 and 1) available by default, but you can add
more by [Configuring SuperDirt](/wiki/Configuring_SuperDirt "wikilink").
