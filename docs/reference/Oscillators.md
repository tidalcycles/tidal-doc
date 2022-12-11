---
title: Oscillators
id: oscillators
---

Oscillators are continuously varying patterns. Unless otherwise stated, oscillators give minimum values of `0` and maximum values of `1`, and repeat once per cycle.

## What is an oscillator?

Oscillators are continuous patterns, which means they don't have any structure, and must be used with a pattern that does. For example `d1 $ sound "bd*8" >| pan sine` won't work well, because the `>|` operator instructs **Tidal** to take structure from the right, and `sine` doesn't have any structure, so **Tidal** will simply trigger events at a fixed rate (depending on your configuration, this might be very fast). `d1 $ sound "bd*8" |> pan sine` is better, because `|>` takes structure from the left, so eight kick drums will play, with pan values sampled from the sine wave for each of the eight events. Where a pattern has the type `Fractional a => Pattern a`, that means that they can be used both as floating point numbers or (rational) time values.

## Using oscillators

### Periodic oscillators
#### Sine

```haskell
Type: sine :: Fractional a => Pattern a
```

`sine` is a sinusoidal wave. Playing this example, you should hear the sound slowly moving from your left to your right speaker:

```haskell
d1 $ sound "bd*8" # pan sine
```

#### Cosine

```haskell
Type: cosine :: Fractional a => Pattern a
```

A `cosine` wave, is a `sine` shifted in time by a quarter of a cycle. It sounds similar to the `sine` above:

```haskell
d1 $ sound "bd*8" # pan cosine # speed (sine + 0.5)
```

#### Square

```haskell
Type: square :: Fractional a => Pattern a
```

A Square wave, starting at 0, then going up to 1 halfway through a cycle.

```haskell
d1 $ sound "bd*8" # pan (cat [square, sine])
```

#### Tri

```haskell
Type: tri :: Fractional a => Pattern a
```

A triangle wave, starting at 0, then linearly rising to 1 halfway through a cycle, then down again:

```haskell
d1 $ sound "bd*16" # speed (slow 2 $ range 0.5 2 tri)
```

#### Saw

```haskell
Type: saw :: Fractional a => Pattern a
```

A sawtooth wave starting at 0, then linearly rising to 1 over one cycle, then jumping back to 0:

```haskell
d1 $ sound "bd*8" # pan (slow 2 saw)
```

#### Isaw

```haskell
Type: isaw :: Fractional a => Pattern a
```

An inverted sawtooth, starting at 1, then linearly falling to 0 over one cycle, then jumping back to 1:

```haskell
d1 $ sound "bd*8" # pan (slow 2 isaw)
```

#### Smooth

```haskell
Type: smooth :: Fractional a => Pattern a -> Pattern a
```

`Smooth` receives a pattern of numbers and linearly goes from one to the next, passing through all of them. As time is cycle-based, after reaching the last number in the pattern, it will smoothly go to the first one again.

```haskell
d1 $ sound "bd*4" # pan (slow 4 $ smooth "0 1 0.5 1")
```

Note how the sound goes gradually from left to right, then to the center, then to the right again, and finally comes back to the left.

### Non-periodic oscillators

#### Rand

```haskell
Type: rand :: Fractional a => Pattern a
```

An infinitely detailed stream of (pseudo-)random numbers. See the `rand` reference page for more details.

```haskell
d1 $ sound "bd*8" # pan rand
```

#### Irand

```haskell
Type: irand :: Num a => Pattern Int -> Pattern a
```

A function from an integer (giving the maximum) to a stream of (pseudo-)random integer numbers. For more details, head to the `rand` reference page:

```haskell
d1 $ sound "drum*8" # n (irand 8)
```

## Scaling oscillators

By default, the oscillators will output values scaled between `0` and `1`. You might want to use bigger or smaller values. You might want, for instance, to modulate the frequency of a filter or select a random midi note between `0` and `127`. To do so, you can use the `range` function:

```haskell
d1 $ s "bass:5*8" # lpf (range 200 5000 $ sine)
```

## Speeding up/down oscillators

Oscillators are patterns! It means that you can speed them up or down using the same function as usual (`fast`, `slow`, etc..):
```haskell
d1 $ s "bass:5*8" # lpf (slow 4 $ range 200 5000 $ sine)
```
:::tip
Notice that most of the time, the speed up/down will be in sync with your pattern. How convenient!
:::
