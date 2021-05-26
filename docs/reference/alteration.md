---
title: Alteration
id: alteration
---


This page will present you all the functions that can be used to manipulate and alter your patterns. Each function will be presented following the same model:
* **Type signature**: how the function is declared on the **Haskell** side.
* **Description**: verbal description of the function.
* **Examples**: a small list of examples that you can copy/paste in your editor.

## Scaling

### range

```haskell
Type: range :: Num a => Pattern a -> Pattern a -> Pattern a -> Pattern a
```

`range` will take a pattern which goes from `0` to `1` (such as `sine`), and scale it to a different range - between the first and second arguments. In the below example, `range 1 1.5` shifts the range of sine from `0 - 1` to `1 - 1.5`.

```haskell
d1 $ jux (iter 4) $ sound "arpy arpy:2*2"
  |+ speed (slow 4 $ range 1 1.5 sine)
```
The above is equivalent to the following:
```haskell
d1 $ jux (iter 4) $ sound "arpy arpy:2*2"
  |+ speed (slow 4 $ sine * 0.5 + 1)
```

### rangex

```haskell
Type: rangex :: (Floating b, Functor f) => b -> b -> f b -> f b
```

`rangex` is an exponential version of `range` described above, good to use for frequencies. For example, `range 20 2000 "0.5"` will give `1010` - halfway between `20` and `2000`. But `rangex 20 2000 0.5` will give `200` - halfway between on a logarithmic scale. This usually sounds better if you’re using the numbers as pitch frequencies. Since rangex uses logarithms, don’t try to scale things to zero or less! 

### quantise

```haskell
Type: quantise :: (Functor f, RealFrac b) => b -> f b -> f b
```

`quantise` is useful for rounding a collection of numbers to some particular base fraction. For example,
```haskell
quantise 5 [0, 1.3 ,2.6,3.2,4.7,5]
```

It will round all the values to the nearest `(1/5)=0.2` and thus will output the list `[0.0,1.2,2.6,3.2,4.8,5.0]`. You can use this function to force a continuous pattern like sine into specific values. In the following example:
```haskell
d1 $ s "superchip*8" # n (quantise 1 $ range (-10) (10) $ slow 8 $ cosine) 
                     # release (quantise 5 $ slow 8 $ sine + 0.1)
```
    
all the releases selected be rounded to the nearest `0.1` and the notes selected to the nearest `1`.

`quantise` with fractional inputs does the consistent thing: `quantise 0.5` rounds values to the nearest `2`, `quantise 0.25` rounds the nearest `4`, etc... 

## Degrade

### degrade

```haskell
Type: degrade :: Pattern a -> Pattern a
```

`degrade` randomly removes events from a pattern, `50%` of the time. Example usage:

```haskell
d1 $ slow 2 $ degrade $ sound "[[[feel:5*8,feel*3] feel:3*8], feel*4]"
   # accelerate "-6"
   # speed "2"
```

### degradeBy

```haskell
Type: degradeBy :: Double -> Pattern a -> Pattern a
```

Similarly to `degrade`, `degradeBy` allows you to control the percentage of events that are removed. For example, to remove events `90%` of the time:

```haskell
d1 $ slow 2 $ degradeBy 0.9 $ sound "[[[feel:5*8,feel*3] feel:3*8], feel*4]"
   # accelerate "-6"
   # speed "2"
```

### unDegradeBy

```haskell
Type: unDegradeBy :: Double -> Pattern a -> Pattern a
```

`unDegradeBy` is `degradeBy` but with the percentage describing how many events to keep on average not remove. 

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

### palindrome 

```haskell
Type: palindrome :: Pattern a -> Pattern a
```

The `palindrome` function applies `rev` to a pattern every other cycle, so that the pattern alternates between forwards and backwards. For example this:

```haskell
d1 $ palindrome $ sound "arpy:0 arpy:1 arpy:2 arpy:3"
```
... is the same as this:
```haskell
d1 $ slow 2 $ sound "arpy:0 arpy:1 arpy:2 arpy:3 arpy:3 arpy:2 arpy:1 arpy:0"
```

... and indeed this:

```haskell
d1 $ every 2 rev $ sound "arpy:0 arpy:1 arpy:2 arpy:3"
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

### chunk

```haskell
Type: chunk :: Int -> (Pattern b -> Pattern b) -> Pattern b -> Pattern b
```

`chunk` divides a pattern into a given number of parts, then cycles through those parts in turn, applying the given function to each part in turn (one part per cycle). Example:

```haskell
d1 $ chunk 4 (# speed 2) $ sound "bd hh sn cp"
```

The below highlights in bold which part of the above pattern has the (# speed 2) function applied to it over four cycles:
```plaintext
bd hh sn cp
bd hh sn cp
bd hh sn cp
bd hh sn cp
```
Another example:
```haskell
d1 $ chunk 4 (hurry 2) $ sound "bd sn:2 [~ bd] sn:2"
```

### chunk'

`chunk'` does the same as chunk but cycles through the parts in the reverse direction. 

### runWith

Old name for `chunk`.

### runWith'

Old name for `chunk'`?

## Shuffling and scrambling

### bite

```haskell
Type: bite :: Int -> Pattern Int -> Pattern a -> Pattern a
```
The `bite` function allows you to slice each cycle into a given number of equal sized bits, and then pattern those bits by number. It's similar to `slice`, but is for slicing up patterns, rather than samples. The following slices the pattern into four bits, and then plays those bits in turn.

```haskell
d1 $ bite 4 "0 1 2 3" $ n "0 .. 7" # sound "arpy"
```

Of course that doesn't actually change anything, but then you can reorder those bits:
```haskell
d1 $ bite 4 "2 0 1 3" $ n "0 .. 7" # sound "arpy"
```

The slices bits of pattern will be squeezed or contracted to fit:
```haskell
d1 $ bite 4 "2 [0 3] 1*4 1" $ n "0 .. 7" # sound "arpy"
```

### shuffle

```haskell
Type: shuffle :: Int -> Pattern a -> Pattern a
```

`shuffle` takes a number and a pattern as input, divides the pattern into the given number of parts, and returns a new pattern as a random permutation of the parts, picking one of each per cycle. This could also be called "sampling without replacement". For example:

```haskell
d1 $ sound $ shuffle 3 "bd sn hh"
```
... will sometimes play `"sn bd hh"` or `"hh sn bd"`, but will never play `"bd sn bd"` or `"hh hh hh"`, because that isn't a permutation of the three parts. 

### scramble

```haskell
Type: scramble :: Int -> Pattern a -> Pattern a
```

`scramble` takes a number and a pattern as input, divides the pattern into the given number of parts, and returns a new pattern by randomly selecting from the parts. This could also be called "sampling with replacement". For example:
```haskell
d1 $ sound $ scramble 3 "bd sn hh"
```
... will sometimes play `"sn bd hh"` or `"hh sn bd"`, but can also play `"bd sn bd"` or `"hh hh hh"`, because it can make any random combination of the three parts.

### rot

```haskell
Type: rot :: Ord a => Pattern Int -> Pattern a -> Pattern a
```
The `rot` function 'rotates' the values in a pattern, while preserving its structure. For example in the following, each value will shift to its neighbour's position one step to the left, so that `b` takes the place of `a`, `a` of `c`, and `c` of `b`:
```haskell
rot 1 "a ~ b c"
```
The result is equivalent of:
```haskell
"b ~ c a"
```
The first parameter is the number of steps, and may be given as a pattern, for example:
```haskell
d1 $ rot "<0 0 1 3>" $ n "0 ~ 1 2 0 2 ~ 3*2" # sound "drum"
```
The above will not rotate the pattern for the first two cycles, will rotate it by one the third cycle, and by three the fourth cycle. 



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

### lindenmeyer

```haskell
Type: Num b => Int -> String -> String -> [b]
```

`lindenmayer` takes an integer `b`, a Lindenmayer system rule set and an initiating string as input in order to generate an L-system tree string of `b` iterations. It can be used in conjunction with a step function to convert the generated string into a playable pattern. For example:
```haskell
d1 $ slow 16 $ sound $ step' ["feel:0", "sn:1", "bd:0"]
(take 512 $ lindenmayer 5 "0:1~~~,1:0~~~2~~~~~0~~~2~,2:2~1~,~:~~1~"
"0")
```
... generates an L-system with initiating string "0" and maps it onto a list of samples.

Complex L-system trees with many rules and iterations can sometimes result in unwieldy strings. Using `take n` to only use the first `n` elements of the string, along with a `slow` function, can make the generated values more manageable. 

## Higher-order

### spread

```haskell
Type: spread :: (a -> t -> Pattern b) -> [a] -> t -> Pattern b
```

The `spread` function allows you to take a pattern transformation which takes a parameter, such as `slow`, and provide several parameters which are switched between. In other words it 'spreads' a function across several values. Taking a simple high hat loop as an example:

```haskell
d1 $ sound "ho ho:2 ho:3 hc"
```
We can speed it up by different amounts, such as by 2x:
```haskell
d1 $ fast 2 $ sound "ho ho:2 ho:3 hc"
```
Or by 3x:

```haskell
d1 $ fast 3 $ sound "ho ho:2 ho:3 hc"
```

But if we use `spread`, we can make a pattern which alternates between the two speeds:
```haskell
d1 $ spread fast[2,3] $ sound "ho ho:2 ho:3 hc"
```

Note that many functions now allow pattern input. This is equivalent to the above:
```haskell
d1 $ fast "<2 3>" $ sound "ho ho:2 ho:3 hc"
```

Note that if you pass (`$`) as the function to spread values over, you can put different functions as the list of values. For example:
```haskell
d1 $ spread ($) [density 2, rev, slow 2, striate 3, (# speed "0.8")] $ sound "[bd*2 [~ bd]] [sn future]*2 cp jvbass*4"
```
Above, the pattern will have these transforms applied to it, one at a time, per cycle:

```plaintext
cycle 1: density 2 - pattern will increase in speed
cycle 2: rev - pattern will be reversed
cycle 3: slow 2 - pattern will decrease in speed
cycle 4: striate 3 - pattern will be granualized
cycle 5: (# speed "0.8") - pattern samples will be played back more slowly
```
After `(# speed "0.8")`, the transforms will repeat and start at `density 2` again.

### spreadf

A convenient shorthand for spread (`$`).

### fastspread

`fastspread` works the same as `spread`, but the result is squashed into a single cycle. If you gave four values to `spread`, then the result would seem to speed up by a factor of four. Compare these two:

```haskell
d1 $ spread ($) [gap 4, striate 4] $ sound "ho ho:2 ho:3 hc"
d1 $ fastspread ($) [gap 4, striate 4] $ sound "ho ho:2 ho:3 hc"
```

### spreadChoose

`spreadChoose` (alias `spreadr`) works the same as spread, but the values are selected at random, one cycle at a time. For example:

```haskell
d1 $ spreadChoose ($) [gap 4, striate 4] $ sound "ho ho:2 ho:3 hc" 
```
