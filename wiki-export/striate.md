---
title: striate
permalink: wiki/striate/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

    striate :: Pattern Int -> ControlPattern -> ControlPattern

**striate** is a kind of granulator, cutting samples into bits in a
similar to [chop](chop "wikilink"), but the resulting bits are organised
differently. For example:

    d1 $ slow 4 $ striate 3 $ sound "numbers:0 numbers:1 numbers:2 numbers:3"

This plays the loop the given number of times, but triggering
progressive portions of each sample. So in this case it plays the loop
three times, the first time playing the first third of each sample, then
the second time playing the second third of each sample, and then
finally the last third of each sample..

Compare this with [chop](chop "wikilink"):

    d1 $ slow 4 $ chop 3 $ sound "numbers:0 numbers:1 numbers:2 numbers:3"

You can hear that the striate version 'interlaces' the cut up bits of
samples together, whereas the chop version plays the bits from each
chopped up sample in turn. It might be worth listening to the samples
without granulation, in case that helps understand what’s happening in
the above:

    d1 $ slow 4 $ sound "numbers:0 numbers:1 numbers:2 numbers:3"

# striateBy

[Type](/wiki/Type_signature "wikilink"):

    striateBy :: Pattern Int -> Pattern Double -> ControlPattern -> ControlPattern

*striateBy* (formerly called

    striate'

) is a variant of

    striate

, with an extra parameter, which specifies the length of each part.

    striate

still scans across the sample over a single cycle, but if each bit is
longer, it creates a sort of stuttering effect. For example the
following will cut the bev sample into 32 parts, but each will be 1/16th
of a sample long:

    d1 $ slow 32 $ striateBy 32 (1/16) $ sound "bev"

Note that striate uses the [begin](begin "wikilink") and
[end](end "wikilink") parameters internally. This means that if you’re
using

    striate

or

    striateBy

you probably shouldn’t also specify begin or end.

*See also: [chop](chop "wikilink")*
