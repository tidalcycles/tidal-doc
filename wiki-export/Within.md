---
title: within
permalink: wiki/within/
layout: wiki
tags:
 - Functions
 - Higher-order functions
---

<translate>

Use **within** to apply a function to only a part of a pattern.
**within** takes two arguments: a start time and an end time, specified
as floats between 0 and 1, which are applied to the relevant pattern.
Note that the second argument must be greater than the first for the
function to have any effect.

For example, to apply

    fast 2

to only the first half of a pattern:

    d1 $ within (0, 0.5) (fast 2) $ sound "bd*2 sn lt mt hh hh hh hh"

Or, to apply

    (# speed "0.5")

to only the last quarter of a pattern:

    d1 $ within (0.75, 1) (# speed "0.5") $ sound "bd*2 sn lt mt hh hh hh hh"

</translate>
