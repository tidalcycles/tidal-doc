---
title: Trigger a pattern from the start
id: startpattern
---

The **Tidal Cycles** cycles clock is always ticking. Sometimes, you will need to start your pattern from the beginning, in a deterministic way. There are [many ways to do so](https://club.tidalcycles.org/t/how-to-trigger-a-pattern-reliably-from-the-start/3058/11).

## nudge

`nudge` is a function originally implemented to play around with the timing of audio sample playback. You can use it to get a nice `swing` effect. You can also use it to deal with various timing problems.

You can set a nudge value on individual patterns to get them to `shift` in time:
```haskell
d1 $ s "bd*4" # nudge 0.9 -- here I'm setting the nudge for this pattern
```

If you need to affect all of the patterns, you can also use `nudge` on every pattern using `all`:
```haskell
d1 $ s "bd*4" # nudge 0.9 -- nudge for this pattern
d2 $ fast 2 $ s "~ sn" # nudge 0.4 -- different value

all $ (|+ nudge 0.2) -- adding 0.2 to the nudge param. 
-- that would result in # nudge 1.1 for d1 and 0.6 for d2 
nudgeAll 0.2 -- alternative shorthand version
```

## qtrigger and trigger

```haskell
d2 $ sound "bd hh hh hh"
d2 $ qtrigger 2 $ sound "bd hh hh hh"
d2 $ trigger 2 $ sound "bd hh hh hh"
```

## resetCycles

Use `resetCycles` to... reset the cycle count:

```haskell
do 
  resetCycles
  d1 $ s "bd*4"
  d2 $ s "~ hh ~ hh*2"
```
