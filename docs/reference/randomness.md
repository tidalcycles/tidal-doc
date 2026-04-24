---
title: Randomness
id: randomness
---

This page will present you all the functions that can be used to introduce some randomness in your musical patterns. Each function will be presented following the same model:

- **Type signature**: how the function is declared on the **Haskell** side.
- **Description**: verbal description of the function.
- **Examples**: a small list of examples that you can copy/paste in your editor.

## Pseudo-randomisation

### rand

```haskell
Type: rand :: Fractional a => Pattern a
```

`rand` is an oscillator that generates a pattern of (pseudo-)random, floating point numbers between `0.0` and `1.0`. For example to randomly pan around the stereo field you can:

```haskell
d1 $ sound "bd*8" # pan rand
```

Or to enjoy a randomised speed from `0.5` to `1.5`, you can add `0.5` to it.

```haskell
d1 $ sound "arpy*4" # speed (rand + 0.5)
```

### irand

```haskell
Type: irand :: Num a => Int -> Pattern a
```

`irand` is similar to `rand`, but generates a continuous oscillator of (pseudo-)random integers between `0` to `n-1` inclusive. Notably used to pick random samples from a folder.

```haskell
d1 $ sound "amencutup*8" # n (irand 8)
```

### randrun

```haskell
Type: randrun :: Int -> Pattern Int
```

`randrun n` generates a pattern of random integers less than n.

However, it cannot be used the same way you would use [run](/reference/concatenation.md#run). In order to turn it into a pattern of random notes, we will have to use Haskell's `fromIntegral` function:

```haskell
d1 $ s "superpiano!16" # n (fmap fromIntegral $ randrun 13)
```

This will produce a stream of random notes from 0 to 12 and sounds as random as it gets. Of course, when played in a scale, it already sounds more pleasant:

```haskell
d1 $ s "superpiano!16" # n (scale "hexSus" (fmap fromIntegral $ randrun 13))
```

## Perlin noise

### perlin

```haskell
Type: perlin :: Pattern Double
```

`perlin` produces 1D Perlin (smooth) noise. It works like rand but smoothly moves between random values each cycle. For example, you can smoothly and randomly change speed:

```haskell
d1 $ sound "bd*32" # speed (perlin + 0.5)
```

The `perlin` function produces a new random value to move to every cycle. If you want a new random value to be generated more or less frequently, you can use `fast` or `slow`, respectively:

```haskell
d1 $ sound "bd*32" # speed (fast 4 $ perlin + 0.5)
d1 $ sound "bd*32" # speed (slow 4 $ perlin + 0.5)
```

### perlinWith

`perlinWith` allows you to specify a pattern as input to generate random values instead of using the default cycle count:

```haskell
d1 $ s "arpy*32" # cutoff (perlinWith (saw * 4) * 2000)
```

### perlin2

`perlin2` creates 2D noise by allowing you to specify a custom pattern as a second dimension (cycle number remains as the first dimension):

```haskell
d1 $ s "bd*32" # speed (perlin2 (sine*4) + 1)
```

### perlin2With

`perlin2With` is the same as `perlinWith` except allows you to provide two functions for 2D noise:

```haskell
d1
 $ s "[arpy*32]"
 # lpf (range 60 5000 $ perlin2With (cosine*2) (sine*2))
 # lpq 0.3
```

## The "sometimes" family

### sometimes

```haskell
Type: sometimes :: (Pattern a -> Pattern a) -> Pattern a -> Pattern a
```

`sometimes` is function, that applies another function to a pattern, around 50% of the time, at random. It takes two inputs, the function to be applied, and the pattern you are applying it to.

For example to distort half the events in a pattern:

```haskell
d1 $ sometimes (# crush 2) $ n "0 1 [~ 2] 3" # sound "arpy"
```

`sometimes` has a number of variants, which apply the function with different likelihood:

| function     |  likelihood |
| ------------ | ----------- |
| always       | 100%        |
| almostAlways | 90%         |
| often        | 75%         |
| sometimes    | 50%         |
| rarely       | 25%         |
| almostNever  | 10%         |
| never        | 0%          |

### sometimesBy

If you want to be specific, you can use `sometimesBy` and a number, for example:

```haskell
sometimesBy 0.93 (# speed 2)
```

to apply the speed control on average 93 times out of a hundred.

### someCycles

`someCycles` is similar to `sometimes`, but instead of applying the given function to random events, it applies it to random cycles. For example the following will either distort all of the events in a cycle, or none of them:

```haskell
d1 $ someCycles (# crush 2) $ n "0 1 [~ 2] 3" # sound "arpy"
```

### someCyclesBy

As with `sometimesBy`, if you want to be specific, you can use `someCyclesBy` and a number. For example:

```haskell
someCyclesBy 0.93 (# speed 2)
```

will apply the speed control on average `93` cycles out of a hundred.

## Choosing randomly

### choose

```haskell
Type: choose :: [a] -> Pattern a
```

The `choose` function emits a stream of randomly choosen values from the given list, as a continuous pattern:

```haskell
d1 $ sound "drum ~ drum drum" # n (choose [0,2,3])
```

As with all continuous patterns, you have to be careful to give them structure; in this case choose gives you an infinitely detailed stream of random choices.

### chooseby

```haskell
Type: chooseBy :: Pattern Double -> [a] -> Pattern a
```

The `chooseBy` function is like choose but instead of selecting elements of the list randomly, it uses the given pattern to select elements.

```haskell
chooseBy "0 0.25 0.5" ["a","b","c","d"]
```

will result in the pattern `"a b c" `.

### wchoose

```haskell
Type: wchoose :: [(a, Double)] -> Pattern a
```

`wchoose` is similar to `choose`, but allows you to 'weight' the choices, so some are more likely to be chosen than others. The following is similar to the previous example, but the `2` is twice as likely to be chosen than the `0` or `3`.

```haskell
d1 $ sound "drum ~ drum drum" # n (wchoose [(0,0.25),(2,0.5),(3,0.25)])
```

:::caution
Prior to version `1.0.0` of **Tidal**, the weights had to add up to `1`, but this is no longer the case.
:::

### wchooseby

```haskell
Type: wchooseBy :: Pattern Double -> [(a,Double)] -> Pattern a
```

The `wchooseBy` function is like `wchoose` but instead of selecting elements of the list randomly, it uses the given pattern to select elements.

### cycleChoose

```haskell
Type: cycleChoose :: [a] -> Pattern a
```

Similar to `choose`, but only picks once per cycle:

```haskell
d1 $ sound "drum ~ drum drum" # n (cycleChoose [0,2,3])
```

### markovPat

```haskell
Type: markovPat :: Pattern Int -> Pattern Int -> [[Double]] -> Pattern Int
```

`markovPat` is a way to generate (pseudo-)random patterns based on Markov chains. Rather than a predefined pattern, a Markov chain is a predefined sequence of probabilities. These probabilities govern the transitions from one step to another. This gives you direct control over the randomness of the pattern that is generated. `markovPat` takes three arguments: the sequence length, the index of the starting step, and a matrix of probabilities.

First, identify the values for each state. For example, if you want to sequence three sounds `bd`, `sd`, and `clap`:

```haskell
d1 $ s (fmap (["bd", "sd", "clap"]!!)
     $ -- the Markov chains will go here
)
```

With this mapping, `"bd"` has an index of 0, `"sd"` has an index of 1, and `"clap"` has an index of 2. Note that you can include rests by including `"~"` as one of the sounds.

Next, define the probability that each step will transition to each other step. Note, the values will be normalized, so they don't need to add up to 1.

| Current Step | `bd` [0] | `sd` [1] | `clap` [2] |
| :----------: | :------: | :------: | :--------: |
|     `bd`     |   0.1    |   0.7    |    0.2     |
|     `sd`     |   0.15   |   0.1    |    0.8     |
|    `clap`    |   0.5    |   0.3    |    0.4     |

In the above example, `bd` will have a 10% chance to repeat another `bd`, a 70% chance to transition to a `sd`, and a 20% chance to transition to a `clap`. Add this to our pattern with a sequence length of 16 and a starting index of 0:

```haskell
d1 $ s (fmap (["bd", "sd", "clap"]!!)
       $ markovPat 16 0 [
           [0.1,  0.7, 0.2],
           [0.15, 0.1, 0.8],
           [0.5,  0.3, 0.4]
         ] )
```

Like other sources of randomness, rhythmic structure can be added using functions such as `mask`.
