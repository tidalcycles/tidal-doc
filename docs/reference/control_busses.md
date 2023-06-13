---
title: Control Busses
id: control_busses
---

This page introduces the feature known as *control busses*, which was
introduced on Tidal 1.7.

Control busses let you route an effect via a bus. In practice, this means you
can pattern the effects of a sound while it's playing.

## Why we need control busses

Let's say we want to modify the `sax` sample as it's playing, applying distinct values of the `squiz` effect:

```haskell
d1 $ sound "sax" # legato 1 # squiz "1 2 5 1.5"
```

This won't work. As the structure is defined by `sound "sax"` there is only one event per cycle, so `squiz` will always take the first value (`1`).

There are some workarounds we can try:

```haskell
d1 $ sound "sax" # legato 1 >| squiz "1 2 5 1.5"
```

Now the structure is taken from the right part, so there will be `4` events per cycle, each one with a different `squiz` value. But the sample will be triggered `4` times from the beginning. We'd like to modify `squiz` as the sample is playing, not by retriggering it.

Another idea is using `chop`:

```haskell
d1 $ chop 4 $ sound "sax" # legato 1 # squiz "1 2 5 1.5"
```

This cuts the `sax` sample into four pieces, and applies one of the `squiz` values to each piece. As the sample doesn't last for exactly one cycle, there is a noticeable change in sound at the cut points, and sound is not smooth.

## Using control busses

The above problem can be easily solved using a control bus:

```haskell
d1 $ sound "sax" # legato 1 # squizbus 1 "1 2 5 1.5"
```

Now we are modifying the `squiz` amount while the sample is playing.

`squizbus` is defined like this:

```haskell
Type: squizbus :: Pattern Int -> Pattern Double -> ControlPattern
```

The first parameters is an identification for the control bus. It needs to be unique, so if you were controlling two effects separately you would need to use different numbers:

```haskell
d1 $ sound "sax" # legato 1 # squizbus 1 "1 2 5 1.5" # lpfbus 2 "400 2000 3000" # lpq 0.2
```

This identification needs to be unique across all patterns, unless you wanted two subpatterns to be controlled from the same source. In that case, you would probably have e.g. one control pattern like `lpfbus 2 "1000 5000"` and others receiving only like `hpfrecv 2`:

```haskell
d1 $ sound "sax" # legato 1 # lpfbus 2 "400 2000 5000" # lpq 0.4 # pan 0

d2 $ sound "sax" # legato 1 # hpfrecv 2 # pan 1
```

Here, you can hear how the low pass filter and the high pass filter change as the sample plays, but using both the same values.

`hpfrecv` is defined like this:

```haskell
Type: hpfrecv :: Pattern Int -> ControlPattern
```

You can even pattern that identification:

```haskell
d1 $ sound "sax" # legato 1 # squizbus 1 "1 2 5 1.5" # lpfbus 2 "400 2000 5000" # lpq 0.4 # pan 0

d2 $ sound "sax" # legato 1 # hpfrecv "<2 1>" # pan 1
```

Most effects have a `bus` and a `recv` function to be used this way.

Control busses can also be used to create LFOs on effects:

```haskell
d1 $ slow 6 $ note "c'maj" # s "superpiano" # legato 2 # lpq 0.2 # (lpfbus 1 $ segment 512 $ fast 4 $ range 200 2000 $ sine)

d1 $ slow 6 $ note "c'maj" # s "superpiano" # legato 2 # lpq 0.2 # (lpfbus 1 $ segment 512 $ fast 4 $ smooth "200 2000")
```

Note that in these examples, we use `segment` to sample the value of `sine` and `smooth`, as these are continuous patterns and won't work directly.

Additionally, you can prepare patterns to receive control signals, and then send them from other patterns:

```haskell
d1 $ s "ade" # panrecv 1 # lpfrecv 2

once $ slow 4 $ panbus 1 $ segment 128 $ range (-1) 1 $ fast 4 $ sine

d2 $ lpfbus 2 $ segment 128 $ smooth "2000 0"
```

## Limitations

Not all control parameters can be controlled via a bus. The following is the whole list of parameters that can't be:

```
midinote, note, n, octave, begin, end, sustain, legato, loop, unit, length, fadeTime, fadeInTime, speed, endSpeed, gain, overgain,
channel, lag, offset, sound, array, midichan, control, ccn, ccv, polyTouch, midibend, miditouch, ctlNum, frameRate, frames,
hours, midicmd, minutes, progNum, seconds, songPtr, uid, val, timescale, timescalewin, accelerate
```

Note that `note`, `n`, `gain` and `accelerate` are in this list, but `amp` is not.

If you try to use a bus on one of these parameters, you will receive an error message like this:

```haskell
d1 $ sound "sax" # nbus 1 "0 1 2"
```
```
Error in pattern: Control parameter 'n' can't be sent to a bus.
```

`panbus` will work, but in the range -1 to 1 instead of 0 to 1:

```haskell
d1 $ sound "sax" # panbus 1 "-1 0 1"
```

## Control busses and MIDI

It is possible to map MIDI CC numbers to control busses, and use an external MIDI controller to modify parameters in real time.

```haskell
d1 $ n "<d6'm9 g6'dom7'ii>" # s "superhoover" # djfbus 1 (cF 0.5 "21")
```

In the above example, CC number `21` is mapped to `djf`. `cF` indicates that the MIDI CC value is to be treated as a float, and the `0-127` value from the MIDI signal is automatically converted to a `0-1` range. `0.5` is the default starting value.

```haskell
d1 $ n "<d6'm9 g6'dom7'ii>" # s "superhoover" # roombus 3 ("^23")
```

In this example, `roombus 3 ("^23")` maps CC number `23` to the `room` parameter, without specifying any initial value.

In some cases, you'll need to adapt the default CC values range:

```haskell
d1 $ n "<d6'm9 g6'dom7'ii>" # s "superhoover" # squizbus 2 (7 * "^22" + 1)
```

`squiz` amount doesn't have a 0-1 range for its values. We need values greater or equal than `1` for this.

In the last example, the `0-1` range is modified, getting a range from `1` to `8`, which are good values for `squiz`.

The whole example and the resulting sound is available at [this forum post](https://club.tidalcycles.org/t/tidal-1-7-control-busses-midi-control-input/2934/1) by @cleary.
