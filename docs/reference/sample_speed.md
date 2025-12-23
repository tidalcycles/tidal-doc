---
title: Sample speed
id: sample_speed
---

This page presents many functions that allow to change the speed at which samples play.

Each function will be presented following the same model:
* **Type signature**: how the function is declared on the **Haskell** side.
* **Description**: verbal description of the function.
* **Examples**: a small list of examples that you can copy/paste in your editor.

## Playback-rate effects

This section presents effects that change both the speed and the pitch of the samples. As frequencies are scaled at the same ratio of the speed, a 2x playback rate will correspond to half the duration and the pitch sounding an octave higher, and a 0.5x playback rate will correspond to double the duration and the pitch sounding an octave lower.

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

### loopAt
    
```haskell
Type: loopAt :: Pattern Time -> ControlPattern -> ControlPattern
```

`loopAt` makes sample fit the given number of cycles. Internally, it works by setting the unit control to "c", changing the playback speed of the sample with the speed parameter, and setting the density of the pattern to match.

```haskell
d1 $ loopAt 4 $ sound "breaks125"
```

It’s a good idea to use this in conjuction with `chop`, so the break is chopped into pieces and you don’t have to wait for the whole sample to start/stop.

```haskell
d1 $ loopAt 4 $ chop 32 $ sound "breaks125"
```

Like all **Tidal** functions, you can mess about with this considerably. The below example shows how you can supply a pattern of cycle counts to `loopAt`:
```haskell
d1 $ juxBy 0.6 (|* speed "2") $ loopAt "<4 6 2 3>" $ chop 12 $ sound "fm:14"
```

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
