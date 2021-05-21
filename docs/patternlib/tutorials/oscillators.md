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

`sine` is a sinusoïdal wave. Playing this example, you should hear the sound slowly moving from your left to your right speaker:
```c
d1 $ sound "bd*8" # pan sine
```

#### Cosine

A `cosine` wave, is a `sine` shifted in time by a quarter of a cycle. It sounds similar to the `sine` above:

```c
d1 $ sound "bd*8" # pan cosine # speed (sine + 0.5)
```

#### Square

A Square wave, starting at 0, then going up to 1 halfway through a cycle.

```c
d1 $ sound "bd*8" # pan (cat [square, sine])
```

#### Tri

A triangle wave, starting at 0, then linearly rising to 1 halfway through a cycle, then down again:
```c
d1 $ sound "bd*16" # speed (slow 2 $ range 0.5 2 tri)
```

#### Saw

A sawtooth wave starting at 0, then linearly rising to 1 over one cycle, then jumping back to 0:

```c
d1 $ sound "bd*8" # pan (slow 2 saw)
```

#### Isaw

An inverted sawtooth, starting at 1, then linearly falling to 0 over one cycle, then jumping back to 1:

```c
d1 $ sound "bd*8" # pan (slow 2 isaw)
```

### Non-periodic oscillators

#### Rand

An infinitely detailed stream of (pseudo-)random numbers. See the `rand` reference page for more details.

```c
d1 $ sound "bd*8" # pan rand
```

#### Irand

A function from an integer (giving the maximum) to a stream of (pseudo-)random integer numbers. For more details, head to the `rand` reference page:

```c
d1 $ sound "drum*8" # n (irand 8)
```

## Scaling oscillators

By default, the oscillators will output values scaled between `0` and `1`. You might want to use bigger or smaller values. You might want, for instance, to modulate the frequency of a filter or select a random midi note between `0` and `127`. To do so, you can use the `range` function:

```c
d1 $ s "bass:5*8" # lpf (range 200 5000 $ sine) 
```

## Speeding up/down oscillators

Oscillators are patterns! It means that you can speed them up or down using the same function as usual (`fast`, `slow`, etc..): 
```c
d1 $ s "bass:5*8" # lpf (slow 4 $ range 200 5000 $ sine) 
```
:::tip
Notice that most of the time, the speed up/down will be in sync with your pattern. How convenient!
:::
