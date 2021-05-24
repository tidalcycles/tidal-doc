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
prometheus scriabin gong shang jiao zhi yu whole augmented augmented2 hexMajor7 
hexDorian hexPhrygian hexSus hexMajor6 hexAeolian major ionian dorian phrygian 
lydian mixolydian aeolian minor locrian harmonicMinor harmonicMajor melodicMinor 
melodicMinorDesc melodicMajor bartok hindu todi purvi marva bhairav ahirbhairav 
superLocrian romanianMinor hungarianMinor neapolitanMinor enigmatic spanish 
leadingWhole lydianMinor neapolitanMajor locrianMajor diminished diminished2 
chromatic
```

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

The chordList function outputs all the available chords. At the time of writing:

```plaintext
major maj aug plus sharp5 six 6 sixNine six9 sixby9 6by9 major7 maj7 major9 maj9 add9 major11 maj11 add11 major13 maj13
 add13 dom7 dom9 dom11 dom13 sevenFlat5 7f5 sevenSharp5 7s5 sevenFlat9 7f9 nine eleven 11 thirteen 13 minor min diminish
ed dim minorSharp5 msharp5 mS5 minor6 min6 m6 minorSixNine minor69 min69 minSixNine m69 mSixNine m6by9 minor7flat5 min7f
lat5 m7flat5 m7f5 minor7 min7 m7 minor7sharp5 min7sharp5 m7sharp5 m7s5 minor7flat9 min7flat9 m7flat9 m7f9 minor7sharp9 m
in7sharp9 m7sharp9 m7s9 diminished7 dim7 minor9 min9 m9 minor11 min11 m11 minor13 min13 m13 one 1 five 5 sus2 sus4 seven
Sus2 7sus2 sevenSus4 7sus4 nineSus4 ninesus4 9sus4 sevenFlat10 7f10 nineSharp5 9s5 m9sharp5 m9s5 sevenSharp5flat9 7s5f9 
m7sharp5flat9 elevenSharp 11s m11sharp m11s
```

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

The arp function takes an additional pattern of arpeggiate modes. For example, using the `1.0` version of **Tidal**, chord name notation (root note / chord type / additional notes above the chord):

```haskell
d1 $ n (arp "<up down diverge>" "<a'm9'8 e'7sus4'8>") # sound "superpiano"
```

The different arpeggiate modes are:
```haskell
up down updown downup up&down down&up converge
diverge disconverge pinkyup pinkyupdown
thumbup thumbupdown
```
