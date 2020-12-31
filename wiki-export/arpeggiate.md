---
title: arpeggiate
permalink: wiki/arpeggiate/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

    arpeggiate :: Pattern a -> Pattern a 

The **arpeggiate** (alias **arpg**) function spreads chords of note
numbers over time.

For example, using the 1.0 chord name notation & older list notation:

    d1 $ n (arpg "'major7 [0,4,7,11]") # sound "superpiano"

## arp

[Type](/wiki/Type_signature "wikilink"):

    arp :: Pattern String -> Pattern a -> Pattern a

The **arp** function takes an additional pattern of arpeggiate modes.

For example, using the 1.0 chord name notation (root note / chord type /
additional notes above the chord):

    d1 $ n (arp "<up down diverge>" "<a'm9'8 e'7sus4'8>") # sound "superpiano"

The different arpeggiate modes are:

`up down updown downup up&down down&up converge`  
`diverge disconverge pinkyup pinkyupdown`  
`thumbup thumbupdown`

The different [chords](chords "wikilink") available are:

`major maj minor min major7 maj7 dom7 minor7 min7 aug `  
`dim dim7 one 1 five 5 plus sharp5 msharp5 sus2 sus4 six 6 `  
`m6 sevenSus2 7sus2 sevenSus4 7sus4 sevenFlat5 7f5 m7flat5 `  
`m7f5 sevenSharp5 7s5 m7sharp5 m7s5 nine m9 m7sharp9 m7s9 `  
`maj9 nineSus4 ninesus4 9sus4 sixby9 6by9 m6by9 sevenFlat9 `  
`7f9 m7flat9 m7f9 sevenFlat10 7f10 nineSharp5 9s5 m9sharp5 `  
`m9s5 sevenSharp5flat9 7s5f9 m7sharp5flat9 eleven 11 m11 `  
`maj11 elevenSharp 11s m11sharp m11s thirteen 13 m13`
