---
title: Transitions
id: transitions
---


## What are transitions?


Transitions are functions you can use to switch musically between patterns. Start with a pattern on `d1`:
```haskell
d1 $ s "bd(3,8) drum*4"
```

You can then perform a crossfade transition to a new pattern using `xfade`:
```haskell
xfade 1 $ s "arpy*8" # n (run 8)
```

Note that the argument we give to `xfade` is `1`, which means to apply the transition to the pattern that is running on `d1`.

You can use transitions on any `d` pattern in Tidal:
```haskell
d3 $ s "bd(3,8)"
xfade 3 $ s "arpy*4"
```

You can also apply a transition to any arbitrary pattern name:
```haskell
p "drums" $ s "bd(3,8) drum*4"
xfade "drums" $ s "arpy*8" # n (run 8)
```
Most of the transitions also have an `"In"` variant, where you can specify the number of cycles that the transition takes to complete:
```haskell
xfadeIn 1 8 $ s "arpy*8" # n (run 8)
```

The following sections will present you all the transition functions that can you can use to switch musically from a pattern to another. Each function will be presented following the same model:

* **Type signature**: how the function is declared on the **Haskell** side.
* **Description**: verbal description of the function.
* **Examples**: a small list of examples that you can copy/paste in your editor.

## Anticipate
### anticipate

```haskell
Type: anticipate :: Time -> [ControlPattern] -> ControlPattern
```

Queue up a pattern to be triggered (or dropped) in after `8` cycles. The argument supplied to `anticipate` is the ID of the new pattern that is created.
```haskell
d1 $ sound "jvbass(3,8)"
anticipate 1 $ sound "bd sn" # delay "0.5" # room "0.3"
```

Stop the newly created pattern using its id: `d1 silence`

### anticipateIn

```haskell
anticipateIn :: Show a => a -> Time -> ControlPattern -> IO ()
```

Start playing a pattern after a specified number of cycles and assign it an ID.

The first argument is the ID of the newly created pattern, and the second argument is the number of cycles after which the pattern will begin playing.

```haskell
d1 $ fast 2 $ sound "hh*4"

anticipateIn 2 8 $ fast 2 $ sound "bd sn" *| gain "0.9 0.6"

d2 silence
```

## Clutch
### Clutch

```haskell
clutch :: Show a => a -> ControlPattern -> IO ()
```

`clutch` degrades the current pattern while undegrading the next. The argument provided to `clutch` is the ID of the pattern that `clutch` creates or the pattern that `clutch` is replacing.

This is like `xfade` but not by gain of samples but by randomly removing events from the current pattern and slowly adding back in missing events from the next one.

```haskell
d1 $ sound "bd(3,8)"

clutch 1 $ sound "[hh*4, odx(3,8)]"
```

`clutch` takes two cycles for the transition, essentially this is `clutchIn 2`.

### clutchIn

```haskell
clutchIn :: Show a => a -> Time -> ControlPattern -> IO ()
```

`In` variant of the function above.

## histpan

```haskell
histpan :: Show a => a -> Int -> ControlPattern -> IO ()
```

This will `pan` the last four patterns on the `d1` channel from left to right, the most recent on the left:
```haskell
histpan 1 4 $ sound "bd sn"
```

## Interpolate
### interpolate

```haskell
Type: interpolate :: Time -> [ControlPattern] -> ControlPattern
```
Morph control values between patterns in four cycles. The argument supplied to `interpolate` is the ID of the new pattern that is created.
```haskell
d1 $ sound "arpy*16" # cutoff 100

interpolate 1 $ sound "arpy*16" # cutoff 16000
```

Stop the newly created pattern using its id:
```haskell
d1 silence
```

### interpolateIn

```haskell
Type: interpolateIn :: Time -> [ControlPattern] -> ControlPattern
```

Morph control values between patterns in a given number of cycles. The first argument supplied to `interpolate` is the ID of the new pattern that is created and the second is the number of cycles.
```haskell
d1 $ sound "arpy*16" # cutoff 100
interpolateIn 1 2 $ sound "arpy*16" # cutoff 16000
```
Stop the newly created pattern using its id:
```haskell
d1 silence
```

## Jump
### jump

```haskell
jump :: Show a => a -> ControlPattern -> IO ()
```

`jump` is essentially the no transition-transition. It jumps directly into the given pattern. The variants `jumpIn`, `jumpIn'` and `jumpMod` provide more useful capabilities.

Say you have:
```haskell
d1 $ sound "hh*4"
```

Then both of the following lines will have the same effect when evaluated:
```haskell
d1 $ sound "hh*8"
jump 1 $ sound "hh*8" --`1` to change the pattern in `d1`
```

### jumpIn

```haskell
jumpIn :: Show a => a -> Int -> ControlPattern -> IO ()
```

`jumpIn` takes the identifier of the `ControlPattern` track and an integer `cycleCount`. It will jump unaligned into the given pattern after `cycleCount` cycles have completed.

Say you have this:
```haskell
d1 $ sound "hh*4"
d2 $ sound "bd" --have a beat on the 1 for orientation
```

Then the subdivision on the hi-hat will increase `2` cycles after evaluation of the next line:
```haskell
jumpIn 1 2 $ sound "hh*8" --`1` because `d1` is defined `let d1 = p 1`
```
The transition will not align with the beat on cycle boundary.


### jumpIn'

```haskell
jumpIn' :: Show a => a -> Int -> ControlPattern -> IO ()
```

`jumpIn'` takes the identifier of the `ControlPattern` track and an integer `cycleCount`. It will jump at cycle boundary into the given pattern after `cycleCount` cycles have completed.

Example: Say you have this:
```haskell
d1 $ sound "hh*4"
d2 $ sound "bd" --have a beat on the 1 for orientation
```

Then the subdivision on the hi-hat will increase 2 cycles after evaluation of the next line:
```haskell
jumpIn' 1 2 $ sound "hh*8" --`1` because `d1`
```
The transition will align with the beat on cycle boundary.


### jumpMod

```haskell
jumpMod :: Show a => a -> Int -> ControlPattern -> IO ()
```

`jumpMod` takes the identifier of the `ControlPattern` track and an integer `cycleMod`. It will jump at cycle boundary into the given pattern when currentCycle `mod cycleMod == 0`.

Example: Say you have this:
```haskell
d1 $ sound "hh*4"
d2 $ sound "bd" --have a beat on the 1 for orientation
```
Then the subdivision on the hi-hat will increase in one of the next 2 cycles after evaluation of the next line:
```haskell
jumpMod 1 2 $ sound "hh*8" --`1` because `d1`
```
The transition will align with one of the next 2 bd onsets.

## Wait
### wait
Wait functions are used to pause a running pattern for a given number of cycles. 

```haskell
wait :: Show a => a -> Time -> ControlPattern -> IO ()
```

```haskell
d1 $ s "[bd ~ [bd [ht lt]] ho]"
d2 $ s "hh27:2*4 cp*3"
wait 2 4 $ s "feel:4*4 cp*3"
```

Here `wait 2 4` pauses pattern "2" for "4" cycles then starts the new pattern.
This is useful if you want to have one pattern on pause for a certain number of cycles while you make a change. 

### waitT

```haskell
waitT :: Show a => a -> (Time -> [ControlPattern] -> ControlPattern) -> Time -> ControlPattern -> IO ()
```

```haskell
d1 $ s "[bd ~ [bd [ht lt]] ho]"
waitT 2 (Sound.Tidal.Transition.xfadeIn 2) 4 $ s "hh*8"
waitT 2 (Sound.Tidal.Transition.clutch) 2 $ s "hh*8"
```

`waitT` allows you to specify any of the transition functions: `xfadeIn, clutchIn, anticipate` etc.
Note the arguments and you need to include any argument for the specified transition: \
`waitT <patternID> (Sound.Tidal.Transition.<transitionName>  <transitionArg>) <cycles>`

## Wash
### wash

```haskell
wash :: (Pattern a -> Pattern a)
-> (Pattern a -> Pattern a) -> Time -> Time -> Time -> Time -> [Pattern a] -> Pattern a
```

`wash` is a function used to define a couple of the other transitions, `anticipate` and `jump`. It's not really useful on its own, unless you wanted to make your own version of `anticipate`. It looks like it needs some work to make it more user friendly.

### washIn

```haskell
washIn :: (Pattern a -> Pattern a) -> Time -> Time -> [Pattern a] -> Pattern a
```

## Fade
### xfade

```haskell
xfade :: Show a => a -> ControlPattern -> IO ()
```

Start with a pattern on d1:
```haskell
d1 $ s "bd(3,8) drum*4"
```
You can then perform a crossfade transition to a new pattern using xfade:

```haskell
xfade 1 $ s "arpy*8" # n (run 8)
```
Note that the argument we give to `xfade` is `1`, which means to apply the transition to the pattern that is running on `d1`.

You can use transitions on any `d` pattern in Tidal:
```haskell
d3 $ s "bd(3,8)"

xfade 3 $ s "arpy*4"
```

You can also apply a transition to any arbitrary pattern name:
```haskell
p "drums" $ s "bd(3,8) drum*4"

xfade "drums" $ s "arpy*8" # n (run 8)
```

### xfadeIn

```haskell
xfadeIn :: Show a => a -> Time -> ControlPattern -> IO ()
```

Same thing as `xfade`, but you can specify the number of cycles that the transition takes to complete:

```haskell
xfadeIn 1 8 $ s "arpy*8" # n (run 8)
```

### fadeIn

```haskell
fadeIn :: Time -> Pattern a -> Pattern a
```

’Undegrades’ a pattern over the given time.

### fadeInFrom

```haskell
fadeInFrom :: Time -> Time -> Pattern a -> Pattern a
```

Alternate version to `fadeIn` where you can provide the time from which the fade in starts.

### fadeOut

```haskell
fadeOut :: Time -> Pattern a -> Pattern a
```

Degrades a pattern over the given time.

### fadeOutFrom

```haskell
fadeOutFrom :: Time -> Time -> Pattern a -> Pattern a
```

Alternate version to `fadeOut` where you can provide the time from which the fade out starts.
