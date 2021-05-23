---
title: Randomness
id: randomness
---

This page will present you all the functions that can be used to introduce some randomness in your musical patterns. Each function will be presented following the same model:
* **Type signature**: how the function is declared on the **Haskell** side.
* **Description**: verbal description of the function.
* **Examples**: a small list of examples that you can copy/paste in your editor.

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
