---
title: shape
permalink: wiki/shape/
layout: wiki
tags:
 - Control Functions
---

[Type](/wiki/Type_signature "wikilink"):

    shape :: Pattern Double -> ControlPattern

**shape** produces wave shaping distortion, a pattern of numbers from 0
for no distortion up to 1 for loads of distortion. It can get very loud
if you reach 1 - be careful!

    d1 $ sound "feel*4" # shape "0 0.2 0.4"

    d1 $ sound "bd*16" # shape (range 0 0.5 $ saw)
