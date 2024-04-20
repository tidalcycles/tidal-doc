---
title: Sample trimming
id: sample_trimming
---

By default, samples play from start to end when triggered. This page presents many functions that allow to trim the samples inside TidalCycles.

Each function will be presented following the same model:
* **Type signature**: how the function is declared on the **Haskell** side.
* **Description**: verbal description of the function.
* **Examples**: a small list of examples that you can copy/paste in your editor.

## Absolute

This function allows us to indicate the sample duration in seconds.

### sustain

```haskell
Type: sustain :: Pattern Double -> ControlPattern
```

A pattern of numbers that indicates the total duration of sample playback in seconds.

:::caution
This `sustain` refers to the whole playback duration, and is not to be confused with the sustain level of a typical ADSR envelope.
It's also not to be confused with `legato`, which modifies the playback duration relative to the event duration.
:::

```haskell
d1 $ fast 2 $ s "breaks125:1" # cps (120/60/4) # sustain 1
```

At 120 BPM, a cycle lasts for two seconds. In the above example, we cut the sample so it plays just for one second, and repeat this part two times, so we fill the whole cycle. Note that sample pitch isn't modified.

```haskell
d1 $ s "breaks125:2!3" # cps (120/60/4) # sustain "0.4 0.2 0.4" # begin "0 0 0.4"
```

## Event-relative

The following functions allow us to deal with sample overlaps.

### cut

```haskell
Type: cut :: Pattern Int -> ControlPattern
```

In the style of classic drum-machines, `cut` will stop a playing sample as soon as another sample with in same cutgroup is to be played. For example,

```haskell
d1 $ fast 2 $ sound "ho:4 hc ho:4 hc" # cut 1
```

makes the pattern sound more realistic, by "choking" the open hi-hat when the closed one plays. 

### legato

```haskell
Type: legato :: Pattern Double -> ControlPattern
```

`legato` modifies the note length relative to the event length. When its value is 1, is equivalent to stopping the sample when the next event (whether it is a sample or a silence), is triggered. Notice the difference between

```haskell
d1 $ sound "sax ~ ~ sax ~ ~ sax ~" # legato 1
```

and

```haskell
d1 $ sound "sax ~ ~ sax ~ ~ sax ~" # cut 1
```

Also, notice how these two lines are equivalent:
```haskell
d1 $ sound "sax ~" # legato 1
d1 $ sound "sax" # legato 0.5
```

:::caution
Not to be confused with `sustain`, which gives playback of a sample a duration in seconds.
:::

:::tip
If you come from a classical music background, these two terms will probably sound conterintuitive, as there *legato* indicates that notes are to be played smoothly and connected, without silences, and that's what `cut` does in Tidal. You could think about the number after `legato` as the quantity of *tenuto* or each sample has. However, if it **really** bothers you, you can change your [Boot File](https://tidalcycles.org/docs/configuration/boot-tidal/) by appending the lines `tenuto = pF "legato"` and `legato = pI "cut"` in one of the `:{:}` blocks.
:::

## Relative to the sample length

These functions let us trim each sample by specifying on which part Tidal begins and/or ends playing it.

### begin

```haskell
Type: begin :: Pattern Double -> ControlPattern
```

`begin` receives a pattern of numbers from 0 to 1. It cuts off the beginning of each sample. The numbers indicate how much of each sample will be skipped, relative to its length (`0` would play the sample from the start, `1` would skip the whole sample, `0.25` would cut off the first quarter from each sample). For example:

```haskell
d1 $ s "bev" # begin 0.5 # legato 1
```

In the above example, the sample is started from the half of its total length.

```haskell
d1 $ n "0 1 2" # s "ade" # begin "<0 0.25 0.5 0.75>" # legato 1
```

In this other example, the first `3` `ade` samples are played on every cycle, but the start point from which they are played changes on each cycle.

### end

```haskell
Type: end :: Pattern Double -> ControlPattern
```

The same as `begin`, but cuts off the end of samples. For example, `0.75` will cut off the last quarter of each sample.

```haskell
d1 $ s "bev" # begin 0.5 # end 0.65
```

This will play only a small part of the sample: from `50%` its length to `65%` its length.

```haskell
d1 $ s "bev" >| begin 0.5 >| end "[0.65 0.55]"
```

The example above will play the sample two times for cycle, but the second time will play a shorter segment than the first time, creating some kind of canon effect.

### grain

```haskell
Type: grain :: Pattern Double -> Pattern Double -> ControlPattern
```

`grain` is another way to specify what part of samples we want to play. Instead of specifying the `begin` and `end`, here we write the `begin` and the `length`.

For example:

```haskell
d1 $ slow 2 $ s "bev" # grain 0.2 0.1 # legato 1
```

is equivalent to:

```haskell
d1 $ slow 2 $ s "bev" # begin 0.2 # end 0.3 # legato 1
```

### grain'

```haskell
Type: grain' :: Pattern String -> ControlPattern
```

`grain'` is simply a fast shortcut to join a `begin` and an `end`.

```haskell
d1 $ slow 2 $ s "bev" # grain' "0.2:0.3" # legato 1
```

This example is equivalent to:

```haskell
d1 $ slow 2 $ s "bev" # begin 0.2 # end 0.3 # legato 1
```

Here, we take advantage that `sustain` receives a pattern to build a different break from the original sample.
