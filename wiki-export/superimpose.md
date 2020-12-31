---
title: superimpose
permalink: wiki/superimpose/
layout: wiki
tags:
 - Functions
---

<languages/> <translate> [Type](/wiki/Type_signature "wikilink"):

    superimpose :: (Pattern a -> Pattern a) -> Pattern a -> Pattern a

**superimpose** plays a modified version of a pattern 'on top of' the
original pattern, resulting in the modified and original version of the
patterns being played at the same time. For example this:

    d1 $ superimpose (fast 2) $ sound "bd sn [cp ht] hh"

...is the same as this:

    d1 $ stack [sound "bd sn [cp ht] hh",
                fast 2 $ sound "bd sn [cp ht] hh"
               ]

## See also

Compare this function with [jux](jux "wikilink") which works similarly
but pans the two versions of the pattern left and right,
[off](off "wikilink") which offsets the modified pattern in time, and
[layer](layer "wikilink") which works like superimpose but allows you to
layer up the results of more than one function.

</translate>
