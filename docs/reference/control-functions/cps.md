---
title: cps
permalink: wiki/cps/
layout: wiki
tags:
 - Control Functions
---

[Type](/wiki/Type_signature "wikilink"):

    cps :: Pattern Double -> ControlPattern

**cps** turns a number pattern into a control pattern that changes the
tempo of all running patterns:

    d1 $ s "bd*8" # cps "0.7 1 0.5 1.2"

    d1 $ s "bd*8" # cps "<0.7 1 0.5 1.2>"

This allows for smooth, continuous time stretches with a continuous
function:

    d1 $ s "bd*8" # cps (range 1 2 $ slow 4 sine)

Note that the behavior of **cps** is *global* and affects all running
patterns, even though it only needs to be used on one pattern:

    d1 $ s "bd*8" # cps "<1 1.5 0.75>"

    -- this pattern is affected by the cps changes
    d2 $ s "cp(3,8)"
