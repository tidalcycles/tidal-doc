---
title: leslie
permalink: wiki/leslie/
layout: wiki
tags:
 - Control Functions
---

[Type](/wiki/Type_signature "wikilink"):

    leslie :: Pattern Double -> ControlPattern

**leslie** controls dry/wet. "lrate" is the modulation rate (typical
vintage rates would be 6.7 for "fast", 0.7 for "slow"). "lsize" is the
physical size of the cabinet in meters, this mostly affects the Doppler
amount (pitch warble).

    d1 $ s "supermandolin*8" # leslie 1 # lsize 2.8 # lrate 6.7
