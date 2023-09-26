---
title: range
permalink: wiki/range/
layout: wiki
tags:
 - Functions
---

**range** will take a pattern which goes from 0 to 1 (such as
[sine](sine "wikilink")), and scale it to a different range - between
the first and second arguments. In the below example,

    range 1 1.5

shifts the range of sine from 0 - 1 to 1 - 1.5.

    d1 $ jux (iter 4) $ sound "arpy arpy:2*2"
      |+ speed (slow 4 $ range 1 1.5 sine)

The above is equivalent to the following:

    d1 $ jux (iter 4) $ sound "arpy arpy:2*2"
      |+ speed (slow 4 $ sine * 0.5 + 1)

# rangex

**rangex** is an exponential version of range described above, good to
use for frequencies. For example,

    range 20 2000 "0.5"

will give

    1010

\- halfway between 20 and 2000. But

    rangex 20 2000 0.5

will give

    200

\- halfway between on a logarithmic scale. This usually sounds better if
you’re using the numbers as pitch frequencies. Since rangex uses
logarithms, don’t try to scale things to zero or less!
