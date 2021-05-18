---
title: zoom
permalink: wiki/zoom/
layout: wiki
tags:
 - Functions
 - Time Functions
---

[Type](/wiki/Type_signature "wikilink"):

    zoom :: (Time, Time) -> Pattern a -> Pattern a

Plays a portion of a pattern, specified by the beginning and end of a
time span (known as an 'arc'). The new resulting pattern is played over
the time period of the original pattern:

    d1 $ zoom (0.25, 0.75) $ sound "bd*2 hh*3 [sn bd]*2 drum"

In the pattern above, zoom is used with an arc from 25% to 75%. It is
equivalent to this pattern:

    d1 $ sound "hh*3 [sn bd]*2"

Here’s an example of it being used with a conditional:

    d1 $ every 4 (zoom (0.25, 0.75)) $ sound "bd*2 hh*3 [sn bd]*2 drum"
