---
title: jux/en
permalink: wiki/jux/en/
layout: wiki
tags:
 - Functions
 - Higher-order functions
---

<languages/> [Type](/wiki/Type_signature "wikilink"):

    jux :: (ControlPattern -> ControlPattern) -> ControlPattern -> ControlPattern

The **jux** function creates strange stereo effects, by applying a
function to a pattern, but only in the right-hand channel. For example,
the following reverses the pattern on the righthand side:

    d1 $ slow 32 $ jux (rev) $ striate' 32 (1/16) $ sound "bev"

When passing functions to functions like jux and
[every](every "wikilink"), it’s possible to chain multiple transforms
together with

    .

, for example this both reverses and halves the playback speed of the
pattern in the righthand channel:

    d1 $ slow 32 $ jux ((# speed "0.5") . rev) $ striate' 32 (1/16) $ sound "bev"

# juxBy

[Type](/wiki/Type_signature "wikilink"):

    juxBy :: Pattern Double -> (ControlPattern -> ControlPattern) -> ControlPattern -> ControlPattern

With jux, the original and effected versions of the pattern are panned
hard left and right (i.e., panned at 0 and 1). This can be a bit much,
especially when listening on headphones. The variant **juxBy** has an
additional parameter, which brings the channel closer to the centre. For
example:

    d1 $ juxBy 0.5 (fast 2) $ sound "bd sn:1"

In the above, the two versions of the pattern would be panned at 0.25
and 0.75, rather than 0 and 1.

**See also: [superimpose](superimpose "wikilink") and
[off](off "wikilink")**
