---
title: Performance
id: performance
---


This page will present you all the functions that will be useful during the performance: tempo management, reset, etc... Each function will be presented following the same model:
* **Type signature**: how the function is declared on the **Haskell** side.
* **Description**: verbal description of the function.
* **Examples**: a small list of examples that you can copy/paste in your editor.

## Tempo
### resetCycles
### setcps

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

## Tracks

## all

## once

