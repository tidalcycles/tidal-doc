---
title: Concatenation
id: concatenation
---

This page will present you all the functions that can be used to concatenate (e.g. add) things together in various ways. Each function will be presented following the same model:
* **Type signature**: how the function is declared on the **Haskell** side.
* **Description**: verbal description of the function.
* **Examples**: a small list of examples that you can copy/paste in your editor.

## Many cats

### cat
```haskell
Type: cat :: [Pattern a] -> Pattern a 
```

`cat`, (also known as `slowcat`, to match with `fastcat` defined below) concatenates a list of patterns into a new pattern; each pattern in the list will maintain its original duration. For example: 

```haskell
d1 $ cat [sound "bd*2 sn", sound "arpy jvbass*2"]

d1 $ cat [sound "bd*2 sn", sound "arpy jvbass*2", sound "drum*2"]

d1 $ cat [sound "bd*2 sn", sound "jvbass*3", sound "drum*2", sound "ht mt"]
```

:::caution
There is also a `slowcat` function, perfectly similar to `cat`. This function exists as a mirror of `fastcat`.
:::

### fastcat
```haskell
Type: fastcat :: [Pattern a] -> Pattern a 
```

`fastcat` works like cat above, but squashes all the patterns to fit a single cycle. 

```haskell
d1 $ fastcat [sound "bd*2 sn", sound "arpy jvbass*2"]

d1 $ fastcat [sound "bd*2 sn", sound "arpy jvbass*2", sound "drum*2"]

d1 $ fastcat [sound "bd*2 sn", sound "jvbass*3", sound "drum*2", sound "ht mt"]
```

### timeCat
```haskell
Type: timeCat :: [(Time, Pattern a)] -> Pattern a 
```

`timeCat` is like `fastcat` except that you provide proportionate sizes of the patterns to each other for when they're concatenated into one cycle. The larger the value in the list, the larger relative size the pattern takes in the final loop. If all values are equal then this is equivalent to `fastcat` (e.g. the following two code fragments are equivalent).

```haskell
d1 $ fastcat [s "bd*4", s "hh27*8", s "superpiano" # n 0]

d1 $ timeCat [(1, s "bd*4"),
              (1, s "hh27*8"),
              (1, s "superpiano" # n 0)]
```

### randcat
```haskell
Type: randcat :: [Pattern a] -> Pattern a 
```

`randcat` is similar to `cat`, but rather than playing the given patterns in order, it picks them at random. For example: 

```haskell
d1 $ randcat [sound "bd*2 sn", sound "jvbass*3", sound "drum*2", sound "ht mt"]
```

## Append family

### append
```haskell
Type: append :: Pattern a -> Pattern a -> Pattern a
```
`append` combines two patterns into a new pattern, where cycles alternate between the first and second pattern:

```haskell
d1 $ append (sound "bd*2 sn") (sound "arpy jvbass*2")
```

It has the alias `slowAppend`, in sympathy with `fastAppend`, described below.

### fastAppend
```haskell
Type: fastAppend :: Pattern a -> Pattern a -> Pattern a
```

`fastAppend` works like append described above, but each pair of cycles from the two patterns are squashed to fit a single cycle.

```haskell
d1 $ fastAppend (sound "bd*2 sn") (sound "arpy jvbass*2")
```

## wedge
```haskell
Type: wedge :: Time -> Pattern a -> Pattern a -> Pattern a 
```

`wedge` combines two patterns by squashing them into a single cycle. It takes a ratio as the first argument. The ratio determines what percentage of the pattern cycle is taken up by the first pattern. The second pattern fills in the remainder of the pattern cycle. For example:

```haskell
d1 $ wedge (1/4) (sound "bd*2 arpy*3 cp sn*2") (sound "odx [feel future]*2 hh hh")
```

## brak

```haskell
Type: brak :: Pattern a -> Pattern a
```

`brak` makes a pattern sound a bit like a breakbeat. It does this by every other cycle, squashing the pattern to fit half a cycle, and offsetting it by a quarter of a cycle.

```haskell
d1 $ brak $ sound "[feel feel:3, hc:3 hc:2 hc:4 ho:1]"
```

## flatpat

```haskell
Type: flatpat :: Pattern [a] -> Pattern a
```

`flatpat` takes a pattern of lists and flattens it into a pattern where all the events in each list happen simultaneously. For example, the following code uses flatpat in combination with listToPat to create an alternating pattern of chords.

```haskell
d1 $ n (flatpat $ listToPat [[0,4,7],[(-12),(-8),(-5)]]) # s "superpiano" # sustain 2
```
This code is equivalent to:
```haskell
d1 $ n ("[0,4,7] [-12,-8,-5]") # s "superpiano" # sustain 2
```

## run

```haskell
Type: run :: (Num a, Enum a) => Pattern a -> Pattern a
```

The `run` function generates a pattern representing a cycle of numbers from `0` to `n-1` inclusive. Notably used to `run` through a folder of samples in order:
```haskell
d1 $ n (run 8) # sound "amencutup"
```

The first parameter to run can be given as a pattern:
```haskell
d1 $ n (run "<4 8 4 6>") # sound "amencutup"
```

## scan

```haskell
Type: scan :: (Num a, Enum a) => Pattern a -> Pattern a
```

`scan` is similar to `run`, but starts at 1 for the first cycle, adding an additional number each cycle until it reaches `n`:
```haskell
d1 $ n (scan 8) # sound "amencutup"
```
