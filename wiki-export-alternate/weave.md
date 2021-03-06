---
title: weave
permalink: wiki/weave/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

    weave :: Time -> ControlPattern -> [ControlPattern] -> ControlPattern

**weave** applies one control pattern to a list of other control
patterns, with a successive time offset. For example:

    d1 $ weave 16 (pan sine)
      [sound "bd sn cp",
       sound "casio casio:1",
       sound "[jvbass*2 jvbass:2]/2",
       sound "hc*4"
      ]

In the above, the

    pan sine

control pattern is slowed down by the given number of cycles, in
particular

    16

, and applied to all of the given

    sound

patterns. What makes this interesting is that the

    pan

control pattern is successively offset for each of the given sound
patterns; because the pan is closed down by 16 cycles, and there are
four patterns, they are 'spread out', i.e. with a gap of four cycles.
For this reason, the four patterns seem to chase after each other around
the stereo field. Try listening on headphones to hear this more clearly.

You can even have it the other way round, and have the effect parameters
chasing after each other around a sound parameter, like this:

    d1 $ weave 16 (sound "arpy" >| n (run 8))
      [vowel "a e i",
       vowel "i [i o] o u",
       vowel "[e o]/3 [i o u]/2",
       speed "1 2 3"
      ]

# weaveWith

[Type](/wiki/Type_signature "wikilink"):

    weaveWith :: Time -> Pattern a -> [Pattern a -> Pattern a] -> Pattern a

    weaveWith

(formerly known as

    weave'

) is similar to the above, but weaves with a list of functions, rather
than a list of controls. For example:

    d1 $ weaveWith 3 (sound "bd [sn drum:2*2] bd*2 [sn drum:1]")
      [fast 2, 
       (# speed "0.5"),
       chop 16
      ]
