---
title: Workshop (0.9.10)
id: workshop
---

----
:::caution
This tutorial is based on Tidalcycles version 0.9.10. Some of the latest features (post 1.0.0) will not be presented. Major features and changes were added post 1.0. This tutorial should still work as an introduction to Tidal but might not present the most recent and *exciting* features.
:::

Welcome to this **Tidal Cycles** tutorial. This is designed to be used as a worksheet during hands-on beginner/mixed workshops, and is based on Tidalcycles version `0.9.10`. By Lucy Cheesman, adapted to wiki format by Alex McLean.

----

## Getting started

Once everything is installed, follow the following startup procedure
each time.

1.  Launch **SuperDirt** - In **SuperCollider**, type `'SuperDirt.start'` and run
    the code by holding down `Ctrl` and pressing `Enter` (while your
    cursor is on the same line as the code).
2.  Launch **Tidal Cycles** - In Atom, start a new file and save it with a `.tidal` extension (e.g. `examples.tidal`).

### Notes in Haskell

Haskell is using double dashes `--` at the beginning of a line to denotate a comment. A comment is a piece of code that will be ignored by the interpreter. You can use comments to take notes in your code. You can also use comments to ignore a specific line or pattern:

```haskell
–- I'm a comment

-- this pattern will not play
-- d1 $ s "bd hh sn hh"

-- "fast 2" will be ignored
d1
--  $ fast 2
  $ s "hh*8"

```

----

## Basic patterns

The basic format for making sound in Tidal looks like this:
```haskell
d1 $ sound "drum"
```
You can stop making a sound using `silence`:
```haskell
d1 $ silence
```
Pick a different sound from the same set, with `:`:
```haskell
d1 $ sound "drum:1"
```

### Default sample library

Some of the samples which come with **Tidal** are listed below. Try some out!

```plaintext
flick sid can metal future gabba sn mouth co gretsch mt arp h cp
cr newnotes bass hc tabla bass0 hh bass1 bass2 oc bass3 ho odx
diphone2 house off ht tink perc bd industrial pluck trump printshort
jazz voodoo birds3 procshort blip drum jvbass psr wobble drumtraks koy
rave bottle kurt latibro rm sax lighter lt arpy feel less stab ul
```

You can see what other sounds there are (or add your own) by looking in the `Dirt-Samples` folder. You can find it via the `SuperCollider` menu: `'File > Open user support directory > downloaded-quarks > Dirt-Samples'`. Make a sequence:

```haskell
d1 $ sound "bd hh sn hh"
```

The more steps in the sequence, the faster it goes:

```haskell
d1 $ sound "bd bd hh bd sn bd hh bd"
```

This is because of the way **Tidal** handles time. There is a universal `‘cycle’` (sort of like a musical 'bar') which is always running. **Tidal** will play all of the sounds between the speech marks in one cycle, unless we tell it not to (we’ll learn how to do that later). You’ll also notice `Tidal` will space the sounds out evenly within the cycle Which means we can end up with polyrhythmic structures (more on those later). We can change the length of the cycle using `setcps` (where `cps` stands for cycles per second) - this is a bit like bpm (beats per minute).

```haskell
setcps 0.6
```

You can use `d1, d2, d3...d9` to play multiple sequences at the same time:

```haskell
d2 $ sound "sn sn:2 sn bd sn"
```

You can stop all the running patterns with `hush`.

You can pause everything by changing the cycle length to a negative number (remember to put negative numbers in brackets).
```haskell
setcps (-1)
```
Start it up again with a positive number
```haskell
setcps 0.6
```
Or you can `solo` one channel:
```haskell
d1 $ sound "arpy cp arpy:2"

d2 $ sound "sn sn:2 bd sn"

solo 2

-- now only the second pattern will be playing

unsolo 2

-- now both will be playing, again
```

### More variety

Let's add some more variety to our sequences:

Add a silence/rest with `~`:
```haskell
d1 $ sound "bd ~ sn:3 bd sn:5 ~ bd:2 sn:2"
```

Fit a subsequence into a step with square brackets:
```haskell
d1 $ sound "bd [bd cp] bd bd"
```
This can make for flexible time signatures:
```haskell
d1 $ sound "[bd bd sn:5] [bd sn:3]"
```
You can put subsequences inside subsequences:
```haskell
d1 $ sound "[[bd bd] bd sn:5] [bd sn:3]"
```
Keep going..
```haskell
d1 $ sound "[[bd [bd bd bd bd]] bd sn:5] [bd sn:3]"
```
You can repeat a step with `*`:
```haskell
d1 $ sound "bd sd*2"
```
This works with subsequences too:
```haskell
d1 $ sound "bd [sd cp]*2"
```
Or you can do the opposite using */*:
```haskell
d1 $ sound "bd sn/2"

d1 $ sound "bd [sn cp]/2"
```
`*` works by 'speeding up' a step to play it multiple times. `/` works by 'slowing it down'.

We can also schedule patterns across cycles using `<` and `>`:

```haskell
d1 $ sound "bd <sd cp arpy>"

d1 $ sound "<bd sn> <sd [cp cp]> <bd [cp cp]>"
```

## Effects

Tidal has lots of effects we can use to change the way things sound. `vowel` is a filter which adds a vowel sound -- try `a, e, i, o` and `u`:

```haskell
d1 $ sound "drum drum drum drum" # vowel "a"
```

We create patterns of effects in much the same way we create patterns of sounds. We call these effect and sound patterns 'control patterns'. So:
```haskell
d1 $ sound "drum drum drum drum" # vowel "a o e e"
```

Remember that we can use `"<>"` to schedule across cycles:
```haskell
d1 $ sound "drum drum drum drum" # vowel "<a o e e>"
```

You can add a non-vowel letter to pause the `vowel` effect:
```haskell
d1 $ sound "drum drum drum drum" # vowel "a o p p"
```

Tidal does its best to map patterns across to one another:
```haskell
d1 $ sound "drum drum drum drum" # vowel "a o e"
```

The structure comes from the left - try swapping the parameters:
```haskell
d1 $ vowel "a o ~ i" # sound "drum"
```

`gain` changes the volume of different sounds:
```haskell
d1 $ sound "bd hh sn:1 hh sn:1 hh" # gain "1 0.7 0.5"
```

`speed` and `note` are used for pitching samples. `speed` affects the speed of playback (e.g. 2 = up an octave):
```haskell
d1 $ sound "numbers:1 numbers:2 numbers:3 numbers:4" # speed "1 1.5 2 0.5"
```

Or we can take the pattern from the speed parameter:
```haskell
d1 $ speed "1 2 4" # sound "jungbass:6"
```

`note` pitches the sample up in semitones (e.g. 12 = up an octave):
```haskell
d1 $ up "0 ~ 12 24" # sound "jungbass:6"
```

`pan` allows us to create stereo effects (0 = left, 0.5 = middle, 1 = right):
```haskell
d1 $ sound "numbers:1 numbers:2 numbers:3 numbers:4" # pan "0 0.5 1"
```

`shape` adds distortion (but be careful - it also makes the sound much louder):
```haskell
d1 $ sound "kurt:4 kurt:4" # shape "0 0.78" # gain "0.7"
```

### Learn more about effects

You can take a look at the `Basics > Effects` section to learn more about effects and to see the complete list of effects. We also suggest you to take a look at the `Basics > Oscillators` section to see how you can apply an LFO to some of these effects.

----

## Transforming patterns

We can start to make much more complex patterns using transformations. Using functions like `slow` you can start to transcend the cycle. `slow` stretches the pattern over more cycles:

### Slow, fast and hurry

```haskell
d1 $ sound "arpy arpy:1 arpy:2 arpy:3"

d1 $ slow 2 $ sound "arpy arpy:1 arpy:2 arpy:3"
```
`fast` squashes the pattern into less than one cycle. You might also see people writing `density` - it’s the same thing. Take a look:

```haskell
fast 0.5 is the same as slow 2!

d1 $ fast 2 $ sound "arpy arpy:1 arpy:2 arpy:3"

d1 $ fast 0.5 $ sound "arpy arpy:1 arpy:2 arpy:3"
```

`hurry` is similar to `fast`, but also applies a speed transformation:

```haskell
d1 $ sound "arpy arpy arpy:1 arpy:2"
d1 $ hurry 2 $ sound "arpy arpy arpy:1 arpy:2"
d1 $ hurry 0.5 $ sound "arpy arpy arpy:1 arpy:2"
```

### Reorganise patterns

You can reverse a pattern with `rev`:
```haskell
d1 $ rev $ sound "arpy arpy:1 arpy:2 arpy:3"
```

Or play it forwards and then backwards with `palindrome`:
```haskell
d1 $ palindrome $ sound "arpy arpy:1 arpy:2 arpy:3"
```
`iter` starts the pattern at a different point each cycle, shifting it the given number of times until it gets back to where it started:
```haskell
d1 $ iter 4 $ sound "arpy arpy:1 arpy:2 arpy:3"
```

`every` allows us to schedule transformations or effects in different cycles. The following example will play twice as fast every four cycles: 
```haskell
d1 $ every 4 (fast 2) $ sound "arpy arpy:1 arpy:2 arpy:3"
```
... or you could schedule an effect in the same way, using `#`:
```haskell
d1 $ every 4 (# vowel "a o") $ sound "arpy arpy:1 arpy:2 arpy:3"
```

`jux` (short for `juxtapose`) takes a transformation or an effect and plays it in one speaker the original pattern plays in the other speaker:
```haskell
d1 $ sound "arpy arpy:1 arpy:2 arpy:3"
d1 $ jux (rev) $ sound "arpy arpy:1 arpy:2 arpy:3"
d1 $ jux (hurry 2) $ sound "arpy arpy arpy:1 arpy:2"
```

`chunk` applies a transformation or an effect to a different part of the pattern each time. For example with 4 as a parameter, it will step through each quarter of the cycle.

```haskell
d1 $ chunk 4 (hurry 2) $ sound  "arpy arpy:1 arpy:2 arpy:3"
d1 $ chunk 4 (# speed 2) $ sound  "alphabet:0 alphabet:1 alphabet:2 alphabet:3"
```

### Even further into transformations

More than one transformation is possible! You can chain them together using `.`:
```haskell
d1 $ jux (rev . (slow 1.5)) $ sound "arpy arpy:1 arpy:2 arpy:3"
```

Remember that (almost) everything is a pattern so we can apply these transformations to our effects too:
```haskell
d1 $ sound "jvbass [jvbass jvbass] jvbass ~" # note "1 [3 5] 7"
d1 $ sound "jvbass [jvbass jvbass] jvbass ~" # iter 3 (note "1 [3 5] 7")
```

What about slowing down or scaling (using `scale`) `sine` and `saw`?

-----

## Different kind of patterns

What is pattern, anyway? Let's think about some different kinds of pattern and how **Tidal** can represent them.

### Cyclic / repetitive

We can use `n` to choose samples from a folder, this allows us to apply patterns there too:
```haskell
d1 $ n "0 1 2 3" # sound "arpy"
```

`run` is a short way of writing out sequential patterns:
```haskell
d1 $ n (run 4) # sound "arpy"
```

or we can use:
```haskell
d1 $ n "0 .. 3" # sound "arpy"
```
### Symmetry

```haskell
d1 $ slow 2 $ n "0 1 2 3 3 2 1 0" # sound "arpy"
d1 $ palindrome $ n (run 4) # sound "arpy"
```

### Polymetric / polyrhythmic sequences

Play two subsequences at once by using square brackets (sort of like one big subsequence!) separating with a comma:
```haskell
d1 $ sound "[voodoo voodoo:3, arpy arpy:4 arpy:2]"
```
If you use curly brackets instead of square you get a different effect. With square brackets both halves of the sequence are fitted into the cycle (polyrhythm). With curly brackets the pulse is set by the left hand pattern. The right hand pattern can then overlap (or underlap!) (polymeter):

```haskell
d1 $ sound "[voodoo voodoo:3, arpy arpy:4 arpy:2]"
d1 $ sound "{voodoo voodoo:3, arpy arpy:4 arpy:2}"
d1 $ sound "[drum bd hh bd, can can:2 can:3 can:4 can:2]"
d1 $ sound "{drum bd hh bd, can can:2 can:3 can:4 can:2}"
d1 $ sound "[bd sn, can:2 can:3 can:1, arpy arpy:1 arpy:2 arpy:3 arpy:5]"
d1 $ sound "{bd sn, can:2 can:3 can:1, arpy arpy:1 arpy:2 arpy:3 arpy:5}"
```

### Euclidean rhythm/Bjorklund

If you give two numbers in brackets after an element in a pattern, then **Tidal** will try to distribute the first number of sounds equally across the second number of steps:
```haskell
d1 $ sound "bd(5,8)"
```
You can use this notation within a single element of a pattern:
```haskell
d1 $ sound "bd(3,8) sn*2"
d1 $ sound "bd(3,8) sn(5,8)"
```
You can also add a third parameter, which ‘rotates’ the pattern so it starts on a different step:
```haskell
d1 $ sound "bd(5,8,2)"
```

-----

## Randomness

Randomness can help us quickly introduce character and variation into our patterns. `sometimes` works a bit like `every`, but instead of happening after a set period, changes have a random chance of appearing:
```haskell
d1 $ sometimes (# speed "2") $ sound "drum*8"
```

`often` (75%) works like `sometimes` (50%) but happens more often:
```haskell
d1 $ often (# speed "2") $ sound "drum*8"
```

`irand` generates a random integer up to the number specified. (e.g. to play a random sample):

```haskell
d1 $ sound "arpy(3,8)" # n (irand 16)
```

`rand` generates a random decimal between `0` and `1`:
```haskell
d1 $ sound "tink*16" # gain rand
```

You can use `degradeBy` to remove random elements. The number indicates how likely a sample is to play:
```haskell
d1 $ degradeBy 0.2 $ sound "tink*16"
```
(`degrade` on its own is the same as `degradeBy 0.5`)

Or, you can use `?` to remove sounds with a 50% likelihood:

```haskell
d1 $ sound "bd sn:2? bd sn?"
```

-----

## Manipulating Samples

So far we've just used short samples. Longer samples can cause us some problems if we’re not careful. Let’s see what happens with a long sample:

```haskell
d1 $ sound "bev"
-- wait a bit, then..
hush
```

As you can hear, **Tidal** will keep triggering the sample each cycle, even if it’s very long. Even if you stop the pattern playing, you will still need to listen while the samples play out. You can use `cut` to truncate the sample when the next one is triggered:
```haskell
d1 $ sound "bev" # cut 1
```

The number in `cut` define a group, so you can play with interference across different patterns:
```haskell
d1 $ sound "bev ~" # cut 1
d2 $ slow 4 $ sound "pebbles ~" # cut 1
```

`legato` also truncates samples, but using a fixed length:
```haskell
d1 $ sound "bev ~ bev ~" # legato 1
```

We can also `chop` samples for a *granular synthesis* effect:

```haskell
d1 $ chop 32 $ sound "bev"
```

`striate` is similar to `chop` but organises the playback in a different way:

```haskell
d1 $ slow 4 $ chop 4 $ sound "arpy:1 arpy:2 arpy:3 arpy:4"
d1 $ slow 4 $ striate 4 $ sound "arpy:1 arpy:2 arpy:3 arpy:4"
```

`randslice` chops the sample into pieces and then plays back a random one each cycle:
```haskell
d1 $ randslice 32 $ sound "bev"
```
We can also use `loopAt` to fit samples to a set number of cycles:
```haskell
d1 $ loopAt 8 $ sound "bev"
```
As always we can add patterns and transformations to these functions, or combine them for interesting effects:
```haskell
d1 $ loopAt "<8 4 16>" $ chop 64 $  sound "bev*4" # cut 1
d1 $ rev $ loopAt 8 $ chop 128 $ sound "bev"
```
