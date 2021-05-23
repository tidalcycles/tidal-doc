---
title: Build Rhythms
id: buildrhythms
---


This page will teach you how to get started writing rhythms using different techniques. It is a good way to learn **Tidal Cycles** in a more intuitive way.

## From a simple to a complex rhythm

Simple bass drum - snare:
```haskell
d1 $ sound "bd sn"
```

Let's pick a different snare sample:
```haskell
d1 $ sound "bd sn:3"
```

Now, we are going to change the rhythm:
```haskell
d1 $ sound "bd*2 [~ sn:3]"
```

And add some toms:
```haskell
d1 $ sound "bd*2 [[~ lt] sn:3] lt:1 [ht mt*2]"
```

Start to transform, shift a quarter cycle every other cycle:
```haskell
d1 $ every 2 (0.25 <~) $ sound "bd*2 [[~ lt] sn:3] lt:1 [ht mt*2]"
```

Pattern the shift amount:
```haskell
d1 $ every 2 ("<0.25 0.125 0.5>" <~) $ sound "bd*2 [[~ lt] sn:3] lt:1 [ht mt*2]"
```

Add some patterned effects:
```haskell
d1 $ every 2 ("<0.25 0.125 0.5>" <~) $ sound "bd*2 [[~ lt] sn:3] lt:1 [ht mt*2]"
  # squiz "<1 2.5 2>"
  # room (slow 4 $ range 0 0.2 saw)
  # sz 0.5
  # orbit 1
```

More transformation:
```haskell
d1 $ jux' [id,rev,(# speed 2)] $ every 2 ("<0.25 0.125 0.5>" <~) $ sound "bd*2 [[~ lt] sn:3] lt:1 [ht mt*2]"
  # squiz "<1 2.5 2>"
  # room (slow 4 $ range 0 0.2 saw)
  # sz 0.5
  # orbit 1
```

## Another rhythmic construction

Let's start with a sequence:
```haskell
d1 $ n "0 0 [2 0] [2 3]" # sound "feel" # speed 1.5
```

We add a bit of flavour:
```haskell
d1 $ n "0 <0 4> [2 0] [2 3]" # sound "feel" # speed 1.5
```

Swap the samples round every other cycle:
```haskell
d1 $ every 2 (rot "<1 3 2>") $ n "0 <0 4> [2 0] [2 3]" # sound "feel" # speed 1.5
```

Always worth trying a `jux rev`:
```haskell
d1 $ jux rev $ every 2 (rot "<1 3 2>") $ n "0 <0 4> [2 0] [2 3]" # sound "feel" # speed 1.5
```

Calm it down a bit by reducing the amount of panning:
```haskell
d1 $ juxBy 0.4 rev $ every 2 (rot "<1 3 2>") $ n "0 <0 4> [2 0] [2 3]" # sound "feel" # speed 1.5
```
Vary the speed:
```haskell
d1 $ juxBy 0.4 rev $ every 2 (rot "<1 3 2>") $ n "0 <0 4> [2 0] [2 3]" # sound "feel" # speed "1.75 2"
```

Add an offset `vowel` effect:
```haskell
d1 $ off 0.25 (# vowel "<a o i>")
  $ juxBy 0.4 rev $ every 2 (rot "<1 3 2>") $ n "0 <0 4> [2 0] [2 3]" # sound "feel" # speed "1.75 2"
```

Let's add another friend:
```haskell
d1 $ off 0.25 (# vowel "<a o i>")
  $ juxBy 0.4 rev $ every 2 (rot "<1 3 2>") $ n "0 <0 4> [2 0] [2 3]" # sound "feel" # speed "1.75 2"


d2 $ juxBy 0.5 rev $ chunk 4 ((+ speed (1 + sine)) . ply 8) $ note "3(3,8)" # sound "bass"
  # speed "<2 4>"
  # legato 1
```
