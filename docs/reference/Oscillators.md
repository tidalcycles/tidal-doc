---
title: Oscillators
permalink: wiki/Oscillators/
layout: wiki
tags:
 - Reference
 - Elemental patterns
 - Functions
---

**Oscillators** are continuously varying patterns.

Unless otherwise stated, oscillators give minimum values of 0 and
maximum values of 1, and repeat once per cycle.

Oscillators are *continuous* patterns, which means they don't have any
structure, and must be used with a pattern that does. For example

    d1 $ sound "bd*8" >| pan sine

won't work well, because the

    >|

operator instructs tidal to take structure from the right, and

    sine

doesn't have any structure, so tidal will simply trigger events at a
fixed rate (depending on your configuration, this might be very fast).

    d1 $ sound "bd*8" |> pan sine

is better, because

    |>

takes structure from the left, so eight kick drums will play, with pan
values sampled from the sine wave for each of the eight events.

''Where a pattern has the type

    Fractional a => Pattern a

, that means that they can be used both as floating point numbers or
(rational) time values.''

# sine

[Type](/wiki/Type_signature "wikilink"):

    sine :: Fractional a => Pattern a

A sine wave.

    d1 $ sound "bd*8" # pan sine

# cosine

[Type](/wiki/Type_signature "wikilink"):

    cosine :: Fractional a => Pattern a

A cosine wave, i.e. a

    sine

shifted in time by a quarter of a cycle.

    d1 $ sound "bd*8" # pan cosine # speed (sine + 0.5)

# square

[Type](/wiki/Type_signature "wikilink"):

    square :: Fractional a => Pattern a

A squarewave, starting at 0, then going up to 1 halfway through a cycle.

    d1 $ sound "bd*8" # pan (cat [square, sine])

# tri

[Type](/wiki/Type_signature "wikilink"):

    tri :: Fractional a => Pattern a

A triangle wave, starting at 0, then linearly rising to 1 halfway
through a cycle, then down again.

    d1 $ sound "bd*16" # speed (slow 2 $ range 0.5 2 tri)

# saw

[Type](/wiki/Type_signature "wikilink"):

    saw :: Fractional a => Pattern a

A sawtooth wave starting at 0, then linearly rising to 1 over one cycle,
then jumping back to 0.

    d1 $ sound "bd*8" # pan (slow 2 saw)

# isaw

\[Type signature\|Type\]\]:

    saw :: Fractional a => Pattern a

An inverted sawtooth, starting at 1, then linearly falling to 0 over one
cycle, then jumping back to 1.

    d1 $ sound "bd*8" # pan (slow 2 isaw)

# Random oscillators

## [rand](rand "wikilink")

[Type](/wiki/Type_signature "wikilink"):

    rand :: Fractional a => Pattern a

An infinitely detailed stream of (pseudo-)random numbers. See\[ the
[rand](rand "wikilink") page for more details.

    d1 $ sound "bd*8" # pan rand

## [irand](irand "wikilink")

[Type](/wiki/Type_signature "wikilink"):

    irand :: Num a => Int -> Pattern a

A function from an integer (giving the maximum) to a stream of
(pseudo-)random integer numbers. See\[ the [rand](rand#irand "wikilink")
page for more details.

    d1 $ sound "drum*8" # n (irand 8)

## [choose](choose "wikilink") and friends

These have their [own page](choose "wikilink"), click the names for more
information:

[Type](/wiki/Type_signature "wikilink"):

``` haskell
choose :: [a] -> Pattern a
```

[choose](choose "wikilink") continuously oscillates between random
choices.

[Type](/wiki/Type_signature "wikilink"):

``` haskell
chooseBy :: Pattern Double -> [a] -> Pattern a
```

[chooseBy](chooseBy "wikilink") uses an oscillator (or other pattern) to
select elements.

[Type](/wiki/Type_signature "wikilink"):

``` haskell
wchoose :: [(a, Double)] -> Pattern a
```

[wchoose](wchoose "wikilink") continuously oscillates between random
choices, with each choice given a weight/likelihood.

[Type](/wiki/Type_signature "wikilink"):

``` haskell
wchooseBy :: Pattern Double -> [(a,Double)] -> Pattern a 
```

[wchooseBy](wchooseBy "wikilink") is like [wchoose](wchoose "wikilink")
but another oscillator/pattern is used to select weighted elements.
