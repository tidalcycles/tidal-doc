---
title: scale
permalink: wiki/scale/
layout: wiki
tags:
 - Functions
---

*Not to be confused with [range](range "wikilink").*

[Type](/wiki/Type_signature "wikilink"):

    scale :: Num a => Pattern String -> Pattern Int -> Pattern a

The **scale** function interprets a pattern of note numbers into a
particular named scale.

For example:

    d1 $ jux rev $ chunk 4 (fast 2 . (|- n 12)) $ off 0.25 (|+ 7) $ struct (iter 4 "t(5,8)")
      $ n (scale "ritusen" "0 .. 7") # sound "superpiano"

''Please note that prior to Tidal version 1.0.0,

    scale

had a very different function as a range operator. Veteran users will
need to switch to using [range](range "wikilink") for this
functionality.''

## scaleList

[Type](/wiki/Type_signature "wikilink"):

    scaleList :: String

The **scaleList** function outputs all the available scales, at the time
of writing:

`minPent majPent ritusen egyptian kumai hirajoshi iwato chinese indian pelog `  
`prometheus scriabin gong shang jiao zhi yu whole augmented augmented2 hexMajor7 `  
`hexDorian hexPhrygian hexSus hexMajor6 hexAeolian major ionian dorian phrygian `  
`lydian mixolydian aeolian minor locrian harmonicMinor harmonicMajor melodicMinor `  
`melodicMinorDesc melodicMajor bartok hindu todi purvi marva bhairav ahirbhairav `  
`superLocrian romanianMinor hungarianMinor neapolitanMinor enigmatic spanish `  
`leadingWhole lydianMinor neapolitanMajor locrianMajor diminished diminished2 `  
`chromatic`

## getScale

[Type](/wiki/Type_signature "wikilink"):

    getScale :: Num a => [(String, [a])] -> Pattern String -> Pattern Int -> Pattern a

You can build your own \`scale\` function with additional scales if you
wish, using

    getScale

. For example:

    let scale = getScale (scaleTable ++ [("techno", [0,2,3,5,7,8,10]),
                                         ("broken", [0,1,4,7,8,10])
                                        ])

The above takes the standard scaleTable as a starting point, and adds
two custom scales to it.

You'll be able to use the new function as normal:

    d1 $ n (scale "techno" "0 1 2 3 4 5 6 7") # sound "superpiano"

## toScale

[Type](/wiki/Type_signature "wikilink"):

    toScale :: Num a => [a] -> Pattern Int -> Pattern a

    toScale

allows you to quickly apply a scale without naming it. For example:

    d1 $ n (toScale [0,2,3,5,7,8,10] "0 1 2 3 4 5 6 7") # sound "superpiano"
