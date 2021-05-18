---
title: Basic Patterns
permalink: wiki/Basic_Patterns/
layout: wiki
---

The basic format for making sound in Tidal looks like this

``` Haskell
d1 $ sound "drum"
```

You can stop making a sound using

``` Haskell
silence
```

:

``` Haskell
d1 $ silence
```

Pick a different sound from the same set, with \`:\`

``` Haskell
d1 $ sound "drum:1"
```

Some of the samples which come with Tidal are listed below. Try some
out!

    flick sid can metal future gabba sn mouth co gretsch mt arp h cp
    cr newnotes bass hc tabla bass0 hh bass1 bass2 oc bass3 ho odx
    diphone2 house off ht tink perc bd industrial pluck trump printshort
    jazz voodoo birds3 procshort blip drum jvbass psr wobble drumtraks koy
    rave bottle kurt latibro rm sax lighter lt arpy feel less stab ul

You can see what other sounds there are (or add your own) by looking in
the *Dirt-Samples* folder. You can find it via the SuperCollider menu:
'File \> Open user support directory \> downloaded-quarks \>
Dirt-Samples'.

## Make a sequence

``` Haskell
d1 $ sound "bd hh sn hh"
```

The more steps in the sequence, the faster it goes:

``` Haskell
d1 $ sound "bd bd hh bd sn bd hh bd"
```

This is because of the way Tidal handles time. There is a universal
‘cycle’ (sort of like a musical 'bar') which is always running. Tidal
will play all of the sounds between the speech marks in one cycle,
unless we tell it not to (we’ll learn how to do that later). You’ll also
notice Tidal will space the sounds out evenly within the cycle Which
means we can end up with polyrhythmic structures (more on those later).

We can change the length of the cycle using

    setcps

(where cps stands for cycles per second) - this is a bit like bpm (beats
per minute).

``` Haskell
setcps 0.6
```

You can use d1, d2, d3...d9 to play multiple sequences at the same time

``` Haskell
d2 $ sound "sn sn:2 sn bd sn"
```

You can stop all the running patterns with

``` Haskell
hush
```

.

``` Haskell
hush
```

You can pause everything by changing the cycle length to a negative
number (remember to put negative numbers in brackets).

``` Haskell
setcps (-1)
```

Start it up again with a positive number

``` Haskell
setcps 0.6
```

Or you can \`solo\` one channel:

``` Haskell
d1 $ sound "arpy cp arpy:2"

<!--T:84-->
d2 $ sound "sn sn:2 bd sn"

<!--T:85-->
solo 2

<!--T:86-->
-- now only the second pattern will be playing

<!--T:87-->
unsolo 2

<!--T:88-->
-- now both will be playing, again
```

Let add some more variety to our sequences.

Add a silence/rest with

``` Haskell
~
```

:

``` Haskell
d1 $ sound "bd ~ sn:3 bd sn:5 ~ bd:2 sn:2"
```

Fit a subsequence into a step with square brackets:

``` Haskell
d1 $ sound "bd [bd cp] bd bd"
```

This can make for flexible time signatures:

``` Haskell
d1 $ sound "[bd bd sn:5] [bd sn:3]"
```

You can put subsequences inside subsequences:

``` Haskell
d1 $ sound "[[bd bd] bd sn:5] [bd sn:3]"
```

Keep going..

``` Haskell
d1 $ sound "[[bd [bd bd bd bd]] bd sn:5] [bd sn:3]"
```

You can repeat a step with

``` Haskell
*
```

:

``` Haskell
d1 $ sound "bd sd*2"
```

This works with subsequences too:

``` Haskell
d1 $ sound "bd [sd cp]*2"
```

Or you can do the opposite using

``` Haskell
/
```

:

``` Haskell
d1 $ sound "bd sn/2"
```

``` Haskell
d1 $ sound "bd [sn cp]/2"
```

``` Haskell
*
```

works by 'speeding up' a step to play it multiple times.

``` Haskell
/
```

works by 'slowing it down'.

We can also schedule patterns across cycles using

``` Haskell
<
```

and

``` Haskell
>
```

:

``` Haskell
d1 $ sound "bd <sd cp arpy>"
```

``` Haskell
d1 $ sound "<bd sn> <sd [cp cp]> <bd [cp cp]>"
```

## Effects

Tidal has lots of effects we can use to change the way things sound.

``` Haskell
vowel
```

is a filter which adds a vowel sound -- try a, e, i, o and u

``` Haskell
d1 $ sound "drum drum drum drum" # vowel "a"
```

We create patterns of effects in much the same way we create patterns of
sounds. We call these effect and sound patterns 'control patterns'. So

``` Haskell
d1 $ sound "drum drum drum drum" # vowel "a o e e"
```

Remember that we can use "\<\>" to schedule across cycles

``` Haskell
d1 $ sound "drum drum drum drum" # vowel "<a o e e>"
```

You can add a non-vowel letter to pause the vowel effect

``` Haskell
d1 $ sound "drum drum drum drum" # vowel "a o p p"
```

Tidal does its best to map patterns across to one another

``` Haskell
d1 $ sound "drum drum drum drum" # vowel "a o e"
```

The structure comes from the left - try swapping the parameters

``` Haskell
d1 $ vowel "a o ~ i" # sound "drum"
```

**Health warning** - This is one of the changes coming up in the new
Tidal - you will be able to control which side the structure comes from.
. Or combine structure from *both* sides.

``` Haskell
gain
```

changes the volume of different sounds

``` Haskell
d1 $ sound "bd hh sn:1 hh sn:1 hh" # gain "1 0.7 0.5"
```

``` Haskell
speed
```

and

``` Haskell
note
```

are used for pitching samples.

``` Haskell
speed
```

affects the speed of playback, e.g. 2 = up an octave

``` Haskell
d1 $ sound "numbers:1 numbers:2 numbers:3 numbers:4" # speed "1 1.5 2 0.5"
```

Or we can take the pattern from the

``` Haskell
speed
```

parameter

``` Haskell
d1 $ speed "1 2 4" # sound "jungbass:6"
```

``` Haskell
note
```

pitches the sample up in semitones, e.g. 12 = up an octave

``` Haskell
d1 $ up "0 ~ 12 24" # sound "jungbass:6"
```

``` Haskell
pan
```

allows us to create stereo effects - 0 = left, 0.5 = middle, 1 = right

``` Haskell
d1 $ sound "numbers:1 numbers:2 numbers:3 numbers:4" # pan "0 0.5 1"
```

``` Haskell
shape
```

adds distortion (but be careful - it also makes the sound much louder)

``` Haskell
d1 $ sound "kurt:4 kurt:4" # shape "0 0.78" # gain "0.7"
```

## feeling brave ?

Try more effects:
<https://tidalcycles.org/index.php/Category:Control_Functions>

``` Haskell
delay
```

/

``` Haskell
delaytime
```

/

``` Haskell
delayfeedback
```

/

``` Haskell
cutoff
```

/

``` Haskell
resonance
```

/

``` Haskell
room
```

/

``` Haskell
size
```

## Continuous patterns

``` Haskell
sine
```

is a continuous pattern following a sine curve from 0 to 1 and back

``` Haskell
d1 $ sound "bd*32" # gain sine
```

You can also try

``` Haskell
tri
```

,

``` Haskell
saw
```

and

``` Haskell
rand
```

.
