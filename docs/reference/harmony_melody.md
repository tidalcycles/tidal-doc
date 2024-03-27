---
title: Harmony & Melody
id : harmony_melody
---

This page will present you all the functions that can be used to deal with harmonies, scales and various musical objects. Each function will be presented following the same model:
* **Type signature**: how the function is declared on the **Haskell** side.
* **Description**: verbal description of the function.
* **Examples**: a small list of examples that you can copy/paste in your editor.

## Scales
### scale
```haskell
Type: scale :: Num a => Pattern String -> Pattern Int -> Pattern a
```

The `scale` function interprets a pattern of note numbers into a particular named scale. For example:

```haskell
d1 $ jux rev $ chunk 4 (fast 2 . (|- n 12)) $ off 0.25 (|+ 7) $ struct (iter 4 "t(5,8)")
  $ n (scale "ritusen" "0 .. 7") # sound "superpiano"
```

:::caution
Prior to **Tidal** version 1.0.0, scale had a very different function as a `range` operator. Veteran users will need to switch to using `range` for this functionality.
:::

### scaleList

```haskell
Type: scaleList :: String
```
The `scaleList` function outputs all the available scales, at the time of writing:

```plaintext
minPent majPent ritusen egyptian kumai hirajoshi iwato chinese indian pelog
prometheus scriabin gong shang jiao zhi yu whole wholetone augmented augmented2
hexMajor7 hexDorian hexPhrygian hexSus hexMajor6 hexAeolian major ionian
dorian phrygian lydian mixolydian aeolian minor locrian harmonicMinor harmonicMajor
melodicMinor melodicMinorDesc melodicMajor bartok hindu todi purvi marva
bhairav ahirbhairav superLocrian romanianMinor hungarianMinor neapolitanMinor
enigmatic spanish leadingWhole lydianMinor neapolitanMajor locrianMajor
diminished octatonic diminished2 octatonic2 messiaen1 messiaen2 messiaen3
messiaen4 messiaen5 messiaen6 messiaen7 chromatic bayati hijaz sikah rast
saba iraq
```

### scaleTable

```haskell
Type: scaleTable :: Fractional a => [(String, [a])]
```

The `scaleTable` function outputs a list of all available scales and their corresponding notes. For example, its first entry is `("minPent",[0.0,3.0,5.0,7.0,10.0])` which means that a minor pentatonic scale is formed by the root (`0`), the minor third (`3` semitones above the root), the perfect fourth (`5` semitones above the root), etc.

As the list is big, you can use the Haskell function `lookup` to look up a specific scale:

```haskell
lookup "phrygian" scaleTable
```

This will output `Just [0.0,1.0,3.0,5.0,7.0,8.0,10.0]`.

You can also do a reverse look up into the scale table. For example:

```haskell
filter (\(_,x)->take 3 x==[0,2,4]) scaleTable
```

The above example will output all scales, the first three notes of which are the root, the major second (`2` semitones above the fundamental), and the major third (`4` semitones above the root).

### getScale

```haskell
Type: getScale :: Num a => [(String, [a])] -> Pattern String -> Pattern Int -> Pattern a
```
You can build your own `scale` function with additional scales if you wish, using `getScale`. For example:

```haskell
let scale = getScale (scaleTable ++ [("techno", [0,2,3,5,7,8,10]),
                                     ("broken", [0,1,4,7,8,10])
                                    ])
```

The above takes the standard `scaleTable` as a starting point, and adds two custom scales to it. You'll be able to use the new function as normal:

```haskell
d1 $ n (scale "techno" "0 1 2 3 4 5 6 7") # sound "superpiano"
```

### toScale

```haskell
Type: toScale :: Num a => [a] -> Pattern Int -> Pattern a
```

`toScale` allows you to quickly apply a scale without naming it. For example:

```haskell
d1 $ n (toScale [0,2,3,5,7,8,10] "0 1 2 3 4 5 6 7") # sound "superpiano"
```


## Chords

### chordList

```haskell
Type: chordList :: String
```

The `chordList` function outputs all the available chords. At the time of writing:

```plaintext
major maj M aug plus sharp5 six 6 sixNine six9 sixby9 6by9 major7 maj7 major9 maj9 add9 major11 maj11 add11 major13 maj13
add13 dom7 dom9 dom11 dom13 sevenFlat5 7f5 sevenSharp5 7s5 sevenFlat9 7f9 nine eleven 11 thirteen 13 minor min m diminished
dim minorSharp5 msharp5 mS5 minor6 min6 m6 minorSixNine minor69 min69 minSixNine m69 mSixNine m6by9 minor7flat5 minor7f5 min7flat5
min7f5 m7flat5 m7f5 minor7 min7 m7 minor7sharp5 minor7s5 min7sharp5 min7s5 m7sharp5 m7s5 minor7flat9 minor7f9 min7flat9 min7f9 m7flat9 m7f9 minor7sharp9 minor7s9 min7sharp9 min7s9
m7sharp9 m7s9 diminished7 dim7 minor9 min9 m9 minor11 min11 m11 minor13 min13 m13 one 1 five 5 sus2 sus4 sevenSus2 7sus2
sevenSus4 7sus4 nineSus4 ninesus4 9sus4 sevenFlat10 7f10 nineSharp5 9sharp5 9s5 minor9sharp5 minor9s5 min9sharp5 min9s5
m9sharp5 m9s5 sevenSharp5flat9 7s5f9 minor7sharp5flat9 m7sharp5flat9
elevenSharp 11s minor11sharp m11sharp m11s
```

:::caution
You'll need to run `import Sound.Tidal.Chords` before using this function.
:::

### chordTable

```haskell
Type: chordTable :: Num a => [(String, [a])]
```

The `chordTable` function outputs a list of all available chords and their corresponding notes. For example, its first entry is `("major",[0,4,7])` which means that a major triad is formed by the root (`0`), the major third (`4` semitones above the root), and the perfect fifth (`7` semitones above the root).

As the list is big, you can use the function `chordL` to look up a specific chord:

```haskell
chordL "minor7"
```

This will output `(0>1)|[0,3,7,10]`.

If you know the notes from a chord, but can't find the name of it, you can use this Haskell code to do a reverse look up into the table:

```haskell
filter (\(_,x)->x==[0,4,7,10]) chordTable
```

This will output: `[("dom7",[0,4,7,10])]`

:::caution
You'll need to run `import Sound.Tidal.Chords` before using this function.
:::

## Arpeggios

### arpeggiate

```haskell
Type: arpeggiate :: Pattern a -> Pattern a
```

The `arpeggiate` (alias `arpg`) function spreads chords of note numbers over time. For example, using the `1.0` version of **Tidal**, chord name notation & older list notation:

```haskell
d1 $ n (arpg "'major7 [0,4,7,11]") # sound "superpiano"
```

### arp

```haskell
Type: arp :: Pattern String -> Pattern a -> Pattern a
```

The `arp` function takes an additional pattern of arpeggiate modes. For example, using the `1.0` version of **Tidal**, chord name notation (root note / chord type / additional notes above the chord):

```haskell
d1 $ n (arp "<up down diverge>" "<a'm9'8 e'7sus4'8>") # sound "superpiano"
```

The different arpeggiate modes are:
```haskell
up down updown downup up&down down&up converge
diverge disconverge pinkyup pinkyupdown
thumbup thumbupdown
```

### rolled

```haskell
Type: rolled :: Pattern a -> Pattern a
```

The `rolled` function takes no arguments, and simulates a downward strum pattern on a guitar. Notes are played low to high, and are evenly distributed within (1/4) of the chord event length, as opposed to `arp`/`arpeggiate` that spread the notes over the whole event.

```haskell
d1 $ rolled $ n "<a'm9'8 e'7sus4'8>" # sound "superpiano"
```

### rolledBy

```haskell
Type: rolledBy :: Pattern (Ratio Integer) -> Pattern a -> Pattern a
```

The `rolledBy` function works the same as `rolled`, but allows you to specify the fraction of the event that the notes will be spread over, or the "length" of the roll.

```haskell
d1 $ rolledBy 0.45 $ n "<a'm9'8 e'7sus4'8>" # sound "superpiano"
```

## Chord Modifiers/Voicings

There are a variety of different chord modifiers available, designed to change the way a chord is "voiced" (note ordering, octave choices, etc). A significant amount of discussion on what these should be and how they should work was covered in this [forum thread](https://club.tidalcycles.org/t/rfc-working-on-making-chord-naming-chordlist-more-consistent/2717/52), and (largely) implemented by [polymorphic.engine](https://github.com/tidalcycles/Tidal/pull/931).

All of the different modifiers can be patterned together.

### Number of Chord tones

You can set the number of chord tones in a chord. Extra tones are created by working through the existing list of tones and either duplicating them an octave higher; reducing tones subtracts items from the chord tone list starting from the highest notes. This can also be patterned.

By default, `c'min9` has 5 chord tones `[0,3,7,10,14]` - we can increase that to 8, ie `[0,3,7,10,14,12,15,19]`:

```haskell
d1 $ n "c'min9'8" # sound "superpiano"
```

We can reduce it to 4 chord tones (ie take away the 9th), `[0,3,7,10]`:
```haskell
d1 $ n "c'min9'4" # sound "superpiano"
```

### Open voicing

This emulates an "Open" Piano voicing, where the first and third note of a chord are dropped down an octave/12 semitones, spreading the range of the chord tones by an extra octave.

```haskell
d1 $ n "c'min9'o" # sound "superpiano"
```

### Drop N voicings

Drop voicings are similar to Open voicings, dropping the Nth highest note in the chord down by an octave/12 semitones. This is a "drop 3" voicing:

```haskell
d1 $ n "c'min9'd3" # sound "superpiano"
```

### Chord Inversions

A chord is inverted by taking the lowest N notes in a chord, and raising them by an octave/12 semitones. This is the 2nd inversion for `c'min9`:

```haskell
d1 $ n "c'min9'i2" # sound "superpiano"
```

## Pitched sample playback

By default, SuperDirt treats all samples as having a pitch of C4 (MIDI note 60). Playing a sample tonally is simple as long the sound is indeed a C. But what if not?

### metatune

It is possible to embed pitch metadata in WAV files in the form of a [smpl chunk](https://www.recordingblogs.com/wiki/sample-chunk-of-a-wave-file). This is used by some samplers to automatically map samples to MIDI notes. SuperDirt also reads the pitch metadata for all loaded samples, allowing them to be pitched correctly (assuming the metadata is correct) by setting the `metatune` parameter to 1.

For example, the sample `bass1:18` from Dirt-Samples is an F2 (MIDI note 41) and is tagged with the appropriate pitch metadata. With `metatune`, we can easily play it in tune with a superpiano chord:

```haskell
d1 $ stack
  [ note "<d4 c4 a3 bf3>" # s "bass1:18" # legato 1 # metatune 1
  , note "[~ d5'min'o]*4" # s "superpiano" # release 0.4
  ] # cps 0.35
```

Smpl chunk metadata can be edited with various tools such as [pitcheon](https://github.com/ahihi/pitcheon) or [LoopAuditioneer](https://loopauditioneer.sourceforge.io/).
