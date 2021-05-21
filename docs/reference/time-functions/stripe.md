---
title: stripe
permalink: wiki/stripe/
layout: wiki
tags:
 - Functions
 - Randomness and chance
 - Time Functions
---

[Type](/wiki/Type_signature "wikilink"):

    stripe :: Pattern Int -> Pattern a -> Pattern a

The **stripe** function repeats a pattern at random speeds. The first
parameter gives the number of cycles to operate over, for example

    stripe 2

will repeat a pattern twice, over two cycles. Each cycle will be played
at a random speed, but in such a way that the total duration will be the
same.

For example in the following example, the start of every third
repetition of the

    d1

pattern will match with the clap on the

    d2

pattern.

    d1 $ stripe 3 $ sound "bd sd ~ [mt ht]"

    d2 $ sound "cp"

# slowstripe

[Type](/wiki/Type_signature "wikilink"):

    slowstripe :: Pattern Int -> Pattern a -> Pattern a

The **slowstripe** function is the same as **stripe** but the result is
also slowed down by n time (where n is the first parameter of the
function. This means that the mean average duration of the stripes is
exactly one cycle, and every nth stripe starts on a cycle boundary (in
indian classical terms, the *sam*).

usage:

    d1 $ slowstripe 3 $ sound "bd sd ~ [mt ht]"

    d2 $ sound "cp"
