---
title: off/en
permalink: wiki/off/en/
layout: wiki
tags:
 - Functions
---

<languages/> [Type](/wiki/Type "wikilink"):

    Pattern Time -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a

**off** is similar to [superimpose](superimpose "wikilink"), in that it
applies a function to a pattern, and layers up the results on top of the
original pattern. The difference is that

    off

takes an extra pattern being a time (in cycles) to shift the transformed
version of the pattern by.

The following plays a pattern on top of itself, but offset by an eighth
of a cycle, with a distorting bitcrush effect applied.

    d1 $ off 0.125 (# crush 2) $ sound "bd [~ sn:2] mt lt*2"

The following makes arpeggios by adding offset patterns that are shifted
up the scale:

    d1 $ slow 2 $ 
      n (off 0.25 (+12) $ off 0.125 (+7) $ slow 2 "c(3,8) a(3,8,2) f(3,8) e(3,8,4)") 
      # sound "superpiano"
