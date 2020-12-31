---
title: accelerate/en
permalink: wiki/accelerate/en/
layout: wiki
tags:
 - Control Functions
---

<languages/> [Type](/wiki/Type_signature "wikilink"):

    accelerate :: Pattern Double -> ControlPattern

**accelerate** turns a number pattern into a control pattern that speeds
up (or slows down) samples while they play.

    d1 $ sound "jvbass*4" # accelerate "<0 1 -1 0.25 -0.5 2.1 -3>" 
