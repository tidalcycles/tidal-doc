---
title: slice
permalink: wiki/slice/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type "wikilink"):

    Pattern Int -> Pattern Int -> ControlPattern -> ControlPattern

**slice** is similar to [chop](chop "wikilink") and
[striate](striate "wikilink"), in that it's used to slice samples up
into bits. The difference is that it allows you to rearrange those bits
as a pattern.

    d1 $ slice 8 "7 6 5 4 3 2 1 0" $ sound "breaks165"
      # legato 1

The above slices the sample into eight bits, and then plays them
backwards, equivalent of applying

    rev $ chop 8

. Here's a more complex example:

    d1 $ slice 8 "[<0*8 0*2> 3*4 2 4] [4 .. 7]" $ sound "breaks165"
      # legato 1

See also [bite](bite "wikilink"), which is similar but slices up
patterns, rather than samples.

*Note that the order of the first two parameters changed since tidal
version 1.0.0*

[An extended use of slice](https://www.youtube.com/watch?v=TS45DxhJZzk)

## splice

[Type](/wiki/Type "wikilink"):

    splice :: Int -> Pattern Int -> ControlPattern -> ControlPattern

**splice** is similar to

    slice

, but the slices are automatically pitched up or down to fit their
'slot'.

    d1 $ splice 8 "[<0*8 0*2> 3*4 2 4] [4 .. 7]" $ sound "breaks165"
