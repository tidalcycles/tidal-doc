---
title: chords
permalink: wiki/chords/
layout: wiki
---

### List of chords

`6by9 7f10 7f5 7f9 7s5 7s5f9 7sus2 7sus4 9s5 9sus4 aug dim dim7 dom7 eleven elevenSharp five m11 `  
`m11s m11sharp m13m6 m6by9 m7f5 m7f9 m7flat5 m7flat9 m7s5 m7s9 m7sharp5 m7sharp5flat9 m7sharp9 m9 `  
`m9s5 m9sharp5 maj maj11 maj7 maj9 major major7 min min7 minor minor7 msharp5 nine nineSharp5 `  
`nineSus4 ninesus4 one plus sevenFlat10 sevenFlat5 sevenFlat9 sevenSharp5 sevenSharp5flat9 sevenSus2 `  
`sevenSus4 sharp5 six sixby9 sus2 sus4 thirteen`

## chordList

[Type](/wiki/Type_signature "wikilink"):

    chordList :: String

(requires: **import Sound.Tidal.Chords**)

The **chordList** function outputs all the available chords, at the time
of writing:

`major maj minor min aug dim major7 maj7 dom7 minor7 min7 dim7 one 1 five 5 plus sharp5 msharp5 `  
`sus2 sus4 six 6 m6 sevenSus2 7sus2 sevenSus4 7sus4 sevenFlat5 7f5 m7flat5 m7f5 sevenSharp5 7s5 `  
`m7sharp5 m7s5 nine m9 m7sharp9 m7s9 maj9 nineSus4 ninesus4 9sus4 sixby9 6by9 m6by9 sevenFlat9 7f9 `  
`m7flat9 m7f9 sevenFlat10 7f10 nineSharp5 9s5 m9sharp5 m9s5 sevenSharp5flat9 7s5f9 m7sharp5flat9 `  
`eleven 11 m11 maj11 elevenSharp 11s m11sharp m11s thirteen 13 m13`

### Using chords

The list above can be combined with a root using the

    '

to use with the synths in Super Dirt like this:

`d1 $ n "c'maj e'min" # s "supermandolin"`

Samples tuned to concert C can also be used:

`d1 $ note "c'maj e'min" # s "gtr"`

Chord inversions can be achieved by appending the

    '

to a chord, along with one or more

    i

characters. A single

    i

is the first inversion (same as default with no

    i

). A second inversion looks like this:

`d1 $ n "c'major7'ii" # s "supermandolin"`

The number of notes in a chord can be modified by appending the

    '

to a chord, along with an integer. 6 notes can be played in the above
chord inversion like this:

`d1 $ n "c'major7'ii'6" # s "supermandolin"`

The root can be set as 'sharp' or 'flat' with

    s

or

    f

respectively:

`d1 $ n "cf'maj c'maj cs'maj" # s "supermandolin"`

The octave can be set with a number. The default is

    5

:

`d1 $ n("c4'maj c5'maj c6'maj") # s "supermandolin"`

The chords can be patterned using the

    |+

operator:

`d1 $ n ("c e f" |+ "<'maj 'min>") # s "supermandolin"`

This will give a pattern equivalent to:

`d1 $ n ("c'maj e'maj f'maj, c'min e'min f'min") # s "supermandolin`
