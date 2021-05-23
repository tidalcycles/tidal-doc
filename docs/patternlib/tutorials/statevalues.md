---
title: State Values
id: state_values
---

State values were recently introducted in **Tidal** version `1.7.2`. For a more `in-depth` introduction, Alex McLean prepared a [Google Slides](https://docs.google.com/presentation/d/1Ibrne2zp8qTt6ItXoBv2vEat45-5hPZaeR_hAVK-JEQ/edit#slide=id.p) document you can take a look at. It will explain why such a feature was needed and how it was implemented.

## The problem with state

What is the problem? It's tricky to get events to line up. Let's say that you wanted to pattern the structure independently from the notes (*isorhythm*?):
```haskell
d1 $ slow 2 $ sound "alphabet(5,8)" # n "0 .. 4"
```
There are ways to fix this (e.g. with the `fix` function), but they are not too satisfying/easy. 

## Introduction to State Values

But now you can use a state value called "susan" to take values from a (circular) list:
```haskell
d1 $ sound "alphabet(5,8)" # nTake "susan" [0 .. 4]
```
If you change it on-the-fly then you have to wait for the list to empty before it changes:
```haskell
d1 $ sound "alphabet(5,8)" # nTake "susan" [7]
```
It can cope with infinite lists, but then the list will never empty:
```haskell
d1 $ sound "alphabet(5,8)" # nTake "susan" [0 ..]
```
You can stop it and it will always start from where it left off:
```haskell
d1 $ sound "alphabet(5,8)" # nTake "susan" [0 ..]
```
You can also just count without a list:
```haskell
d1 $ sound "alphabet(5,8)" # nCount "harold"
```
This is the same named state as used by `setF` and for reading from OSC/MIDI. So you can reset the counter like this:
```haskell
setF "harold" 0
```

Or have another pattern use it:
```haskell
d2 $ sound "newnotes*16" # n "^harold" # gain 1
```
There is also `nCountTo` to counting to a modulo:
```haskell
d1 $ struct "t(7,12,3)" $
  sound "gretsch"
  # nCountTo "rachael" 5
```

## Un-intuitive behavior

You can pattern that.. It starts behaving in ways you wouldn't expect from a **Tidal** perspective though.. Because the counter runs independently from the pattern:
```haskell
d1 $ struct "t(7,12,3)" $
  sound "gretsch"
  # nCountTo "rachael" "<4 8>"
```

Likewise, `rev` won't reverse the counter:
```haskell
-- notes go up
d1 $ sound "newnotes(5,8)" # nCount "harold"
```

The structure is reversed, but the notes still go up:
```haskell
d1 $ rev $ sound "newnotes(5,8)" # nCount "harold"
```

You should be able to add `Take` to any control, and `Count` / `CountTo` to any numerical control.

:::warning
This feature is unstable, so these  names might change.
:::
