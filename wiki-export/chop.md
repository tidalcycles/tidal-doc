---
title: chop
permalink: wiki/chop/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

    chop :: Pattern Int -> ControlPattern -> ControlPattern

**chop** cuts each sample into the given number of parts, allowing you
to explore a technique known as 'granular synthesis'. It turns a pattern
of samples into a pattern of parts of samples. For example:

    d1 $ chop 16 $ sound "arpy ~ feel*2 newnotes"

In the above, each sample is chopped into 16 bits, resulting in 64
(16\*4) events. You can pattern that first parameter:

    d1 $ chop "<16 128 32>" $ sound "arpy ~ feel*2 newnotes"

You end up with a pattern of the chopped up bits of samples. You'll
already be able to hear this more clearly if you for example reverse the
pattern, as you'll reverse the order of the sample parts:

    d1 $ slow 2 $ rev $ chop 16 $ sound "breaks125"

Lets try that reverse in just one speaker:

    d1 $ slow 2 $ jux rev $ chop 16 $ sound "breaks125"

Different values of chop can yield very different results, depending on
the samples used:

    d1 $ chop 16 $ sound (samples "arpy*8" (run 16))
    d1 $ chop 32 $ sound (samples "arpy*8" (run 16))
    d1 $ chop 256 $ sound "bd*4 [sn cp] [hh future]*2 [cp feel]"

You can also use chop (or (striate)\[\#striate\]) with very long
samples, to cut it into short chunks and pattern those chunks. The
following cuts a sample into 32 parts, and plays it over 8 cycles:

    d1 $ loopAt 8 $ chop 32 $ sound "bev"

The [loopAt](loopAt "wikilink") takes care of changing the speed of
sample playback so that the sample fits in the given number of cycles
perfectly. As a result, in the above the granules line up perfectly, so
you can’t really hear that the sample has been cut into bits. Again,
this becomes more apparent when you do further manipulations of the
pattern, for example rev to reverse the order of the cut up bits:

    d1 $ loopAt 8 $ rev $ chop 32 $ sound "bev"

*See also: [striate](striate "wikilink"), [gap](gap "wikilink")*
