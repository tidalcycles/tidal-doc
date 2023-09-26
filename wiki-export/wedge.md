---
title: wedge
permalink: wiki/wedge/
layout: wiki
tags:
 - Functions
---

**wedge** combines two patterns by squashing them into a single cycle.
It takes a ratio as the first argument. The ratio determines what
percentage of the pattern cycle is taken up by the first pattern. The
second pattern fills in the remainder of the pattern cycle. For example:

    d1 $ wedge (1/4) (sound "bd*2 arpy*3 cp sn*2") (sound "odx [feel future]*2 hh hh")
