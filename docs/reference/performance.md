---
title: Performance
id: performance
---


This page will present you all the functions that will be useful during the performance: tempo management, reset, etc... Each function will be presented following the same model:
* **Type signature**: how the function is declared on the **Haskell** side.
* **Description**: verbal description of the function.
* **Examples**: a small list of examples that you can copy/paste in your editor.

## Tempo
### resetCycles / setCycle

```haskell
Type: resetCycles :: IO ()
```

`resetCycles` is a global function that resets the cycle count back to 0. 
`setCycle` will start at a given cycle number.

This is useful to make sure a pattern or set of patterns start from the beginning:

```haskell
do
  resetCycles
  d1 $ s "bd hh hh hh"
  d2 $ s "ade" # cut 1

do
  setCycle 5
  d1 $ n "6 2 0 8" # s "east" 
```

:::tip

* Cycle count affects all patterns, so if there are any active, all of them will immediately jump to the beginning, which can create a strange jump in the sound (but can be used purposely, too).
* `resetCycles` is also useful in [Multi-user Tidal](https://tidalcycles.org/docs/configuration/multiuser-tidal/#tidal-instances-dont-automatically-have-the-same-cycle).
* `getnow` will show the current cycle number position. 

:::

### setcps

```haskell
Type: setcps :: Pattern Double -> IO ()
```

`setcps` is a global function that adjusts the number of cycles per second. This function can accept integers, decimals, and fractions.

The default number of cycles per second is `0.5625`, which is equivalent to `135/60/4`.

These two values are equivalent:
* **Cycles per second**: as a decimal, `setcps 0.5625`.
* **Cycles per second**: as a fraction, `setcps (135/60/4)`

Representing cycles per second using fractions has the advantage of being more human-readable and more closely aligned with how tempo is commonly represented in music as beats per minute (or bpm). Techno has a range of `120-140 bpm`. House has a range of `115-130 bpm`. And so on. If we wanted to set the tempo of our Tidal song to fast house, we would do the following:

```haskell
-- Set cps to be a fast house beat
setcps (130/60/4)
```

Regarding the example above, the first part of the fraction `(130/60)` says there will be `130` beats per minute. `130` is the number of beats and `60` is the length of the minute (`60` seconds). The second part of the fraction (`/4`) says that for every cycle in tidal there will be `4` beats. You can adjust this value to change how quickly your cycles run.

```haskell
-- The following two examples are equivalent
-- Example 1: 4 beats per cycles
setcps (130/60/4)

d1 $ n "1" # s "kick kick kick kick"

-- Example 2: 1 beat per cycle
setcps (130/60/1)

d1 $ n "1" # s "kick"
```

### trigger

```haskell
Type: trigger :: Pattern a -> Pattern a
```

Align the start of a pattern with the time a pattern is evaluated, rather than the global start time. Because of this, the pattern will probably not be aligned to the pattern grid.

In this example, try to trigger pattern 2 at different moments while pattern 1 is playing and observe the result:

```haskell
d1 $ s "bd sn bd sn"

d2 $ trigger $ s "clap*2"
```

### qtrigger

```haskell
Type: qtrigger :: Pattern a -> Pattern a
```

Quantise trigger. Aligns the start of the pattern with the next cycle boundary. For example, this pattern will fade in starting with the next cycle after the pattern is evaluated:

```haskell
d1 $ qtrigger $ s "hh(5, 8)" # amp envL
```

Note that the pattern will start playing immediately. The start of the pattern aligns with the next cycle boundary, but events will play before if the pattern has events at negative timestamps (which most loops do). These events can be filtered out, for example:

```haskell
d1 $ qtrigger $ filterWhen (>= 0) $ s "bd hh hh hh"
```

Alternatively, you can use [wait](/reference/transitions/#wait-1) to achieve the same result:

```haskell
wait 1 1 $ s "bd hh hh hh"
```

### qt

```haskell
Type: qt :: Pattern a -> Pattern a
```

This is simply an alias for `qtrigger`.

### mtrigger

```haskell
Type: mtrigger :: Int -> Pattern a -> Pattern a
```

Mod trigger. Aligns the start of a pattern to the next cycle boundary where the cycle is evenly divisible by a given number. `qtrigger` is equivalent to `mtrigger 1`.

In the following example, when activating the `d1` pattern, it will start at the same time as the next clap, even if it has to wait for 3 cycles. Once activated, the `arpy` sound will play on every cycle, just like any other pattern:

```haskell
do
  resetCycles
  d2 $ every 4 (# s "clap") $ s "bd"

d1 $ mtrigger 4 $ filterWhen (>=0) $ s "arpy"
```

### mt

```haskell
Type: mt :: Int -> Pattern a -> Pattern a
```

This is simply an alias for `mtrigger`.

### triggerWith

```haskell
Type: triggerWith :: (Time -> Time) -> Pattern a -> Pattern a
```

This aligns the start of a pattern to some value relative to the time the pattern is evaluated. The provided function maps the evaluation time (on the global cycle clock) to a new time, and then `triggerWith` aligns the pattern's start to the time that's returned.

This is a more flexible triggering function. In fact, all the other trigger functions are defined based on `triggerWith`. For example, `trigger` is just `triggerWith id`.

In the next example, use `d1` as a metronome, and play with different values (from `0` to `1`) on the `const` expression. You'll notice how the `clap` is displaced from the beginning of each cycle to the end, as the number increases:

```haskell
d1 $ s "bd hh!3"

d2 $ triggerWith (const 0.1) $ s "clap"
```

This last example is equivalent to this:

```haskell
d2 $ rotR 0.1 $ s "clap"
```

## Tracks

## all

## once
