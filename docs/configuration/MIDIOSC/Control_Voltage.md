---
title: Control Voltage/CV
id: control-voltage
permalink: wiki/CV/
layout: wiki
---


Tidal can send control voltage to modular synthesizers when using audio cards with DC output. A collection of CV helpers for Tidal is published in the SuperDirt Voltage library.

## [SuperDirt Voltage](https://github.com/mashaal/superdirt-voltage)

### Pitch, with scale quantisation

```haskell
-- change notes per octave on each cycle
d1 $ pitch "0 10 8 1" # scale "<12 31 8>" # x 0
```

`pitch` allows a pattern of note values. `scale` sets the amount of notes per octave. The pitch and scale values will be converted to `1v/octave`. Both `pitch` and `scale` can be sequenced for some microtonal madness...

`glide` accepts a strengh (in semitones, relative to scale), a rate (in step length).

```haskell
-- glide to pitch
d1 $ pitch "0 10 8 1" # scale "<12 31 8>" # x 0 # glide 12 0.5
```

### Gate

```haskell
-- sequence gate inputs
d2 $ gate "0 1 0 0 1 1 1" # x 1
```

`gate` will take a 0/1 pattern and return +5v signals for the `1` values. Use `-1` if you need a -5v.

### Voltage automation

```haskell
-- create stepped automation
d3 $ volt "1 0.2 0.5 -0.2" # x 2
```

`volt` will allow you to sequence voltages however you like.

### AR (Attack + Release)

```haskell
-- create ar
d4 $ trig "1 ~ 1 1" # ar 0 0.5 # x 3
```

```haskell
-- patternise adsr
d5 $ trig "1 ~ 1 1" # ar (range 0.1 1 sine) "<0 0.4>" # x 4
```

`trig` will create a trigger sequence, `ar` will generate a new envelope for each trigger. Both of these can be sequenced.

In the second example, the attack time would grow for each triggered envelope over course of the cycle.

### Clock

```haskell
-- clock cv output
d6 $ clock # x 5
```

`clock` will output a clock cv, which matches the bpm of your tidal project. You can `slow` / `fast` this as well.
