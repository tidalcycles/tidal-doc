---
title: Alteration
id: alteration
---


This page will present you all the functions that can be used to manipulate and alter your patterns. Each function will be presented following the same model:
* **Type signature**: how the function is declared on the **Haskell** side.
* **Description**: verbal description of the function.
* **Examples**: a small list of examples that you can copy/paste in your editor.

## Repetitions
### ply

```haskell
Type: ply :: Pattern Int -> Pattern a -> Pattern a
```

The `ply` function repeats each event the given number of times. For example:

```haskell
ply 3 $ s "bd ~ sn cp"
```
... is equivalent to ...

```haskell
s "[bd bd bd] ~ [sn sn sn] [cp cp cp]"
```

The first parameter may be given as a pattern, so that:

```haskell
ply "2 3" $ s "bd ~ sn cp"
```
... is equivalent to ...

```haskell
s "[bd bd] ~ [sn sn sn] [cp cp cp]"
```
Here is an example of it being used conditionally:

```haskell
d1 $ every 3 (ply 4) $ s "bd ~ sn cp"
```

### stutter
```haskell
Type: stutter :: Integral i => i -> Time -> Pattern a -> Pattern a
```

`stutter` is like `stut` that doesn't reduce the volume or `ply` if you controlled the timing. `stutter n t` repeats each event in the pattern `n` times, separated by `t` time (in fractions of a cycle).

```haskell
d1 $ stutter 4 (1/16) $ s "bd cp"
```
should be functionally equivalent to

```haskell
d1 $ stut 4 1 (1/16) $ s "bd cp"
```
Specific conveniences functions that use stutter are:

```haskell
echo   = stutter (2 :: Int)
triple = stutter (3 :: Int)
quad   = stutter (4 :: Int)
double = echo
```

### stripe

```haskell
Type: stripe :: Pattern Int -> Pattern a -> Pattern a
```

The `stripe` function repeats a pattern at random speeds. The first parameter gives the number of cycles to operate over, for example `stripe 2` will repeat a pattern twice, over two cycles. Each cycle will be played at a random speed, but in such a way that the total duration will be the same.

For example in the following example, the start of every third repetition of the `d1` pattern will match with the clap on the d2 pattern.

```haskell
d1 $ stripe 3 $ sound "bd sd ~ [mt ht]"


d2 $ sound "cp"
```

### slowstripe

```haskell
Type: slowstripe :: Pattern Int -> Pattern a -> Pattern a
```

The `slowstripe` function is the same as `stripe` but the result is also slowed down by `n` time (where `n` is the first parameter of the function. This means that the mean average duration of the stripes is exactly one cycle, and every nth stripe starts on a cycle boundary (in indian classical terms, the sam). Usage:

```haskell
d1 $ slowstripe 3 $ sound "bd sd ~ [mt ht]"

d2 $ sound "cp"
```

## Truncation
### trunc

```haskell
Type: trunc :: Pattern Time -> Pattern a -> Pattern a
```

`trunc` truncates a pattern so that only a fraction of the pattern is played. The following example plays only the first three quarters of the pattern:
```haskell
d1 $ trunc 0.75 $ sound "bd sn*2 cp hh*4 arpy bd*2 cp bd*2"
```

You can also pattern the first parameter, for example to cycle through three values, one per cycle:

```haskell
d1 $ trunc "<0.75 0.25 1>" $ sound "bd sn:2 [mt rs] hc"
```

### linger

```haskell
Type: linger :: Pattern Time -> Pattern a -> Pattern a
```

`linger` is similar to `trunc`, in that it truncates a pattern so that only the first fraction of the pattern is played. However unlike trunk, `linger` repeats that part to fill the remainder of the cycle.

For example this repeats the first quarter, so you only hear a single repeating note:
```haskell
d1 $ linger 0.25 $ n "0 2 [3 4] 2" # sound "arpy"
```

or slightly more interesting, applied only every fourth cycle:
```haskell
d1 $ every 4 (linger 0.25) $ n "0 2 [3 4] 2" # sound "arpy"
```

or to a chopped-up sample:
```haskell
d1 $ every 2 (linger 0.25) $ loopAt 2 $ chop 8 $ sound "breaks125"
```

You can also pattern the first parameter, for example to cycle through three values, one per cycle:
```haskell
d1 $ linger "<0.75 0.25 1>" $ sound "bd sn:2 [mt rs] hc"

d1 $ linger "<0.25 0.5 1>" $ loopAt 2 $ chop 8 $ sound "breaks125"
```


## Step sequencers
### step

```haskell
Type: step :: String -> String -> Pattern String
```

`step` acts as a kind of simple step-sequencer using strings. For example, `step "sn" "x x 12 "` is equivalent to the pattern of strings given by `"sn ~ sn ~ sn:1 sn:2 ~"`. `step` substitutes the given string for each x, for each number it substitutes the string followed by a colon and the number, and for everything else it puts in a rest.

In other words, `step` generates a pattern of strings in exactly the syntax you'd want for selecting samples and that can be fed directly into the s function.

```haskell
d1 $ s (step "sn" "x x 12 ")
```

### step'
```haskell
Type: step' :: [String] -> String -> Pattern String
```

`step' `is like `step` but more general, using the numbers in the step-sequencing string as indexes into the list of strings you give it.

```haskell
d1 $ s (step' ["superpiano","supermandolin"] "0 1 000 1") # sustain 4 # n 0
```
is equivalent to

```haskell
d1 $ s "superpiano ~ supermandolin ~ superpiano!3 ~ supermandolin" # sustain 4 # n 0
```

:::tip
There is also `steps`. You can take a look at this function in the `Accumulation` section
:::
