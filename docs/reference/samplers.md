---
title: Samplers
id: samplers
---

This page presents many functions related to the use of samples inside TidalCycles.

For specific information about functions used to slice and loop samples see [Sampling](https://tidalcycles.org/docs/reference/sampling).

Each function will be presented following the same model:
* **Type signature**: how the function is declared on the **Haskell** side.
* **Description**: verbal description of the function.
* **Examples**: a small list of examples that you can copy/paste in your editor.

## Amplitude manipulation

These functions are used to control the amplitude (volume) of the sounds.

### amp

```haskell
Type: amp :: Pattern Double -> ControlPattern
```

`amp` controls the amplitude of the sound using a linear function. Its default value is `0.4`. For the power function equivalent, see `gain`.

```haskell
d1 $ s "arpy" # amp 0.6
```

This will play the first `arpy` sample at a volume slightly louder than the default.

```haskell
d1 $ s "arpy" # amp "<0.4 0.8 0.2>"
```

In the above example, the volume changes at each cycle.

### gain

```haskell
Type: gain :: Pattern Double -> ControlPattern
```

`gain` controls the amplitude of the sound using a power function. Its default value is `1`. Smaller values make the sound quieter, and greater values make the sound louder.

As `gain` uses a power function, the volume change around `1` is subtle, but it gets more noticable as it increases or decreases. Typical values for `gain` are between `0` and `1.5`. For the linear equivalent, see `amp`.

```haskell
d1 $ s "arpy" # gain 0.8
```

This plays the first `arpy` sample at a quieter level than the default.

```haskell
d1 $ s "ab*16" # gain (range 0.8 1.3 $ sine)
```

This plays a hihat sound, `16` times per cycle, with a `gain` moving from `0.8` to `1.3` following a sine wave.


## Sample trimming, relative to their length

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


## Sample trimming, relative to the next events: dealing with overlaps

By default, samples play from start to end when triggered. We can override this behavior so that they are cut off by the next event of the pattern.

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

## Sample trimming, in seconds
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

Here, we take advantage that `sustain` receives a pattern to build a different break from the original sample.

## Speed-related effects

These section presents effects change  that both the speed and the pitch of the samples.

### accelerate

```haskell
Type: accelerate :: Pattern Double -> ControlPattern
```

A pattern of numbers that speed up (or slow down) samples while they play.

```haskell
d1 $ s "arpy" # accelerate 2
```

In this example, the sound starts at the original pitch, and gets higher as it plays. You can use a negative number to make the sound get lower.

```haskell
d1 $ arp "up" $ note "c'maj'4" # s "arpy" # accelerateTake "susan" [0.2,1,-1]
```

Using [state values](https://tidalcycles.org/docs/reference/state_values/#introduction-to-state-values), in this example we apply a different acceleration to each played note.

### speed

```haskell
Type: speed :: Pattern Double -> ControlPattern
```

A pattern of numbers which changes the speed of sample playback. As a result, the sample duration and pitch will be modified. Negative values will play the sample backwards.

```haskell
d1 $ slow 5 $ s "sax:5" # legato 1 # speed 0.5
```

This will play the `sax:5` sample at half its rate. As a result, the sample will last twice the normal time, and will be pitched a whole octave lower. This is equivalent to `d1 $ slow 5 $ s "sax:5" # legato 1 |- note 12`.

```haskell
d1 $ fast 2 $ s "breaks125:1" # cps (125/60/4) # speed (-2)
```

In the above example, the break (which lasts for exactly one bar at 125 BPM), will be played backwards, and at double speed (so, we use `fast 2` to fill the whole cycle).


### unit

```haskell
Type: unit :: Pattern String -> ControlPattern
```

`unit` is used in conjunction with `speed`. It accepts values of "r" (rate), "c" (cycles), or "s" (seconds).

`unit "r"` is the default. See the above `speed` section.

Using `unit "c"` means `speed` will be interpreted in cycles. For example, `speed 2` means samples will be stretched to fill half a cycle:

```haskell
d1 $ stack [
s "sax:5" # legato 1 # speed 2 # unit "c",
s "bd*2"
]
```

## Time stretching

According to Wikipedia, *time stretching* is the process of changing the speed or duration of an audio signal without affecting its pitch.

This section presents the functions available in TidalCycles that let us time-stretch our samples at real time.

### timescale

```haskell
Type: timescale :: Pattern Double -> ControlPattern
```

`timescale` is the main function used to activate time-stretching, and usually the only one you need. It receives a single parameter which is the stretching rate to apply.

You can use any positive number as the ratio, but the particular method used is designed for ratios greater than 1, and work reasonably well for values between 0.1 and 3.

```haskell
d1 $ slow 2 $ s "breaks152" # legato 1 # timescale (152/130) # cps (130/60/4)
```

In the example above, we set tempo at 130 beats per minute. But we want to play one of the `breaks152` samples, which are, as indicated, at 152 BPM. So, the ratio we want is 152 over 130. This will slow down the sample to fit in our 130 BPM tempo.

### timescalewin

```haskell
Type: timescalewin :: Pattern Double -> ControlPattern
```

The algorithm used to time-stretch a sample divides our sample in many little parts, modifies them, and puts them all together again. It uses one particular parameter, called `windowSize`, which is the length of each sample part.

The `windowSize` value is automatically calculated, but we can change it using `timescalewin`. The `windowSize` value is multiplied by the number we provide to `timescalewin`.

`timescalewin` can be used to improve the quality of time-stretching for some samples, or simply as an effect.

Let's compare the next two code examples:

```haskell
d1 $ slow 2 $ s "breaks152" # legato 1 # timescale (152/130) # timescalewin 0.01 # cps (130/60/4)
```

```haskell
d1 $ slow 2 $ s "breaks152" # legato 1 # timescale (152/130) # timescalewin 10 # cps (130/60/4)
```

In the first one, passing `0.01` makes the window size a lot smaller, and the extreme chopping of the sample causes a rougher sound.

In the second one, passing `10` makes the chunks a lot bigger. The method used overlaps the treated chunks when recomposing the sample, and, with the bigger window size, this overlap is noticeable and causes a kind of delay effect.
