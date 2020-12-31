---
title: segment
permalink: wiki/segment/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

    segment :: Pattern Time -> Pattern a -> Pattern a

**segment** 'samples' the pattern at a rate of n events per cycle.
Useful for turning a continuous pattern into a discrete one.

In this example, the pattern originates from the shape of a sine wave, a
continuous pattern. Without

    segment

the samples will get triggered at an undefined frequency which may be
very high.

    d1 $ n (slow 2 $ segment 16 $ range 0 32 $ sine) # sound "amencutup"

# discretise

    segment

used to be known as

    discretise

. The old name remains as an alias and will still work, but may be
removed or repurposed in a future version of tidal.
