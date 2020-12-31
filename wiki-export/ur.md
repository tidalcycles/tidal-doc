---
title: ur
permalink: wiki/ur/
layout: wiki
tags:
 - Functions
 - Higher-order functions
---

The **ur** function is designed for longer form composition, by allowing
you to create 'patterns of patterns' in a repeating loop. It takes three
parameters -- how long the loop will take, a pattern giving the
structure of the composition, a lookup table for named patterns to feed
into that structure, and a second lookup table for named
transformations/fx.

Lets say you had three patterns (called 'a', 'b' and 'c'), and that you
wanted to play them four cycles each, over twelve cycles in total. Here
is one way to do it:

    let pats =
          [
            ("a", stack [n "c4 c5 g4 f4 f5 g4 e5 g4" # s "superpiano" # gain "0.7",
                         n "[c3,g4,c4]" # s "superpiano"# gain "0.7"
                        ]
            ),
            ("b", stack [n "d4 c5 g4 f4 f5 g4 e5 g4" # s "superpiano" # gain "0.7",
                         n "[d3,a4,d4]" # s "superpiano"# gain "0.7"
                        ]
            ),
            ("c", stack [n "f4 c5 g4 f4 f5 g4 e5 g4" # s "superpiano" # gain "0.7",
                         n "[f4,c5,f4]" # s "superpiano"# gain "0.7"
                        ]
            )
          ]
    in
    d1 $ ur 12 "a b c" pats []

In

    ur 12 "a b c" pats []

, the

    12

is the duration of the loop (in cycles), the

    "a b c"

is the structure of named patterns, and

    pats

is the lookup table, defined above. So the "a b c" pattern happens over
the 12 cycles, with the

    a

,

    b

and

    c

standing in for each of the three patterns given in the lookup table.
Because there are three events in this pattern, and it happens over 12
cycles. then each event is four cycles long.

In the above, the fourth parameter is given as an empty list, but that
is where you can put another lookup table, of functions rather than
patterns this time. Here's an example:

    let pats =
          [
            ("a", stack [n "c4 c5 g4 f4 f5 g4 e5 g4" # s "superpiano" # gain "0.7",
                         n "[c3,g4,c4]" # s "superpiano"# gain "0.7"
                        ]
            ),
            ("b", stack [n "d4 c5 g4 f4 f5 g4 e5 g4" # s "superpiano" # gain "0.7",
                         n "[d3,a4,d4]" # s "superpiano"# gain "0.7"
                        ]
            ),
            ("c", stack [n "f4 c5 g4 f4 f5 g4 e5 g4" # s "superpiano" # gain "0.7",
                         n "[f4,c5,f4]" # s "superpiano"# gain "0.7"
                        ]
            )
          ]
        fx = [("reverb", (# (room 0.8 # sz 0.99 # orbit 1))),
              ("faster", fast 2)
             ]
    in
    d1 $ ur 12 "a b:reverb c:faster" pats fx

In the above,

    b

has the function applied that's named as

    reverb

, while

    c

is made to go

    faster

.

It's also possible to schedule multiple patterns at once, like in the
following:

    let pats = [("drums", s "drum cp*2"),
                ("melody", s "arpy:2 arpy:3 arpy:5"),
                ("craziness", s "cp:4*8" # speed ( sine + 0.5))
               ]
        fx = [("higher", (# speed 2))]
    in
    d1 $ ur 8 "[drums, melody] [drums,craziness,melody] melody:higher" pats fx
