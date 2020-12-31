---
title: delay
permalink: wiki/delay/
layout: wiki
tags:
 - Control Functions
---

[Type](/wiki/Type_signature "wikilink"):

    delay :: Pattern Double -> ControlPattern

**delay** turns a number pattern into a control pattern that changes the
level of the initial delay signal. A value of `1` means the first echo
will be as loud as the original sound.

    d1 $ s "[drum cp]*2 jvbass" # delay "[0 0.5]/2" # orbit 1

As delay is a global effect, you will want to use it in tandem with
[orbit](orbit "wikilink") (unless you're only running one pattern at a
time).
