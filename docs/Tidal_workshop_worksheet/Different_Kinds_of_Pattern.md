---
title: Different Kinds of Pattern
permalink: wiki/Different_Kinds_of_Pattern/
layout: wiki
---

<languages /> <translate> What *is* pattern, anyway?

Let's think about some different kinds of pattern and how Tidal can
represent them

## Cyclic / repetitive

We can use

``` Haskell
n
```

to choose samples from a folder, this allows us to apply patterns there
too!

``` Haskell
d1 $ n "0 1 2 3" # sound "arpy"
```

``` Haskell
Run
```

is a short way of writing out sequential patterns

``` Haskell
d1 $ n (run 4) # sound "arpy"
```

or we can use

``` Haskell
..
```

``` Haskell
d1 $ n "0 .. 3" # sound "arpy"
```

## Symmetry

``` Haskell
d1 $ slow 2 $ n "0 1 2 3 3 2 1 0" # sound "arpy"
d1 $ palindrome $ n (run 4) # sound "arpy"
```

## Polymetric / polyrhythmic sequences

Play two subsequences at once by using square brackets (sort of like one
big subsequence!) separating with a comma:

``` Haskell
d1 $ sound "[voodoo voodoo:3, arpy arpy:4 arpy:2]"
```

If you use curly brackets instead of square you get a different effect.
With square brackets both halves of the sequence are fitted into the
cycle (polyrhythm). With curly brackets the pulse is set by the left
hand pattern. The right hand pattern can then overlap (or underlap!)
(polymeter).

``` Haskell
d1 $ sound "[voodoo voodoo:3, arpy arpy:4 arpy:2]"
d1 $ sound "{voodoo voodoo:3, arpy arpy:4 arpy:2}"
d1 $ sound "[drum bd hh bd, can can:2 can:3 can:4 can:2]"
d1 $ sound "{drum bd hh bd, can can:2 can:3 can:4 can:2}"
d1 $ sound "[bd sn, can:2 can:3 can:1, arpy arpy:1 arpy:2 arpy:3 arpy:5]"
d1 $ sound "{bd sn, can:2 can:3 can:1, arpy arpy:1 arpy:2 arpy:3 arpy:5}"
```

## Euclidean rhythm/Bjorklund

If you give two numbers in brackets after an element in a pattern, then
Tidal will try to distribute the first number of sounds equally across
the second number of steps.

``` Haskell
d1 $ sound "bd(5,8)"
```

You can use this notation within a single element of a pattern:

``` Haskell
d1 $ sound "bd(3,8) sn*2"
d1 $ sound "bd(3,8) sn(5,8)"
```

You can also add a third parameter, which ‘rotates’ the pattern so it
starts on a different step:

``` Haskell
d1 $ sound "bd(5,8,2)"
```

</translate>
