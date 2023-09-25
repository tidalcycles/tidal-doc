---
title: stut
permalink: wiki/stut/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

    stut :: Pattern Integer -> Pattern Double -> Pattern Rational -> ControlPattern -> ControlPattern

**stut** applies a type of delay to a pattern. It has three parameters,
which could be called depth, feedback and time. Depth is an integer and
the others floating point. This adds a bit of echo:

    d1 $ stut 4 0.5 0.1 $ sound "bd sn"

The above results in

    4

repeats (the original plus 3 echoes), each echo 50% (that's the

    0.5

) quieter than the last, separated by 1/10th (that's the

    0.1

) of a cycle.

It is possible to reverse the echo:

    d1 $ stut 4 0.5 (-0.1) $ sound "bd sn"

# stutWith

[Type](/wiki/Type_signature "wikilink"):

    stutWith :: Pattern Int -> Pattern Time -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a

**stutWith** (formerly known as

    stut'

) is similar to

    stut

described above, but instead of just decreasing volume to produce
echoes, stutWith applies a function each step and overlays the result
delayed by the given time.

    d1 $ stutWith 3 (1/3) (# vowel "{a e i o u}%2") $ sound "bd sn"

In this case there are two overlays delayed by 1/3 of a cycle, where
each has the vowel filter applied.

    d1 $ stutWith 4 (1/6) (|* speed "1.5") $ sound "arpy arpy:2"

In the above, three versions are put on top, with each step getting
higher in pitch as

    |* speed "1.5"

is successively applied.
