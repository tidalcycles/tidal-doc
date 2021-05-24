---
title: Composition
id: composition
---


This page will present you all the functions that can be used to compose long form pieces with **Tidal Cycles**. Each function will be presented following the same model:
* **Type signature**: how the function is declared on the **Haskell** side.
* **Description**: verbal description of the function.
* **Examples**: a small list of examples that you can copy/paste in your editor.


## ur
```haskell
Type: ur :: Time -> Pattern String -> [(String, Pattern a)] -> [(String, Pattern a -> Pattern a)] -> Pattern a
```

The `ur` function is designed for longer form composition, by allowing you to create 'patterns of patterns' in a repeating loop. It takes three parameters -- how long the loop will take, a pattern giving the structure of the composition, a lookup table for named patterns to feed into that structure, and a second lookup table for named transformations/fx.

Lets say you had three patterns (called `a`, `b` and `c`), and that you wanted to play them four cycles each, over twelve cycles in total. Here is one way to do it:

```haskell
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
```

In `ur 12 "a b c" pats []`, the `12` is the duration of the loop (in cycles), the `"a b c"` is the structure of named patterns, and pats is the lookup table, defined above. So the `"a b c"` pattern happens over the 12 cycles, with the `a`, `b` and `c` standing in for each of the three patterns given in the lookup table. Because there are three events in this pattern, and it happens over 12 cycles. then each event is four cycles long.

In the above, the fourth parameter is given as an empty list, but that is where you can put another lookup table, of functions rather than patterns this time. Here's an example:

```haskell
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
```

In the above, `b` has the function applied that's named as reverb, while `c` is made to go faster. It's also possible to schedule multiple patterns at once, like in the following:

```haskell
let pats = [("drums", s "drum cp*2"),
            ("melody", s "arpy:2 arpy:3 arpy:5"),
            ("craziness", s "cp:4*8" # speed ( sine + 0.5))
           ]
    fx = [("higher", (# speed 2))]
in
d1 $ ur 8 "[drums, melody] [drums,craziness,melody] melody:higher" pats fx
```


## seqP

```haskell
Type: seqP :: [(Time, Time, Pattern a)] -> Pattern a
```

`seqP` allows you sequence patterns, with start and end times. The code below contains three separate patterns in a `stack`, but each has different start times (zero cycles, four cycles, and eight cycles, respectively). In the example, all patterns stop after 12 cycles:

```haskell
d1 $ seqP [ 
  (0, 12, sound "bd bd*2"), 
  (4, 12, sound "hh*2 [sn cp] cp future*4"), 
  (8, 12, sound (samples "arpy*8" (run 16)))
]
```

If you run the above, you probably won’t hear anything. This is because cycles start ticking up as soon as you start **Tidal**, and you have probably already gone past cycle 12.

You can reset the cycle clock back to zero by running `setcps (-1)` followed by `setcps 1` (nb: at the time of writing, this doesn't yet work in version `1.0.0` of tidal, but you can instead run `resetCycles`), or whatever tempo you want to restart at. Alternatively, you can shift time for the seqP pattern back to zero like this:

```haskell
d1 $ qtrigger 1 $ seqP [ 
  (0, 12, sound "bd bd*2"), 
  (4, 12, sound "hh*2 [sn cp] cp future*4"), 
  (8, 12, sound (samples "arpy*8" (run 16)))
]
```

## seqPLoop

```haskell
Type: seqPLoop :: [(Time, Time, Pattern a)] -> Pattern a
```

A third option is to use `seqPLoop` instead, which will keep looping the sequence when it gets to the end:

```haskell
d1 $ qtrigger 1 $ seqPLoop [ 
  (0, 12, sound "bd bd*2"), 
  (4, 12, sound "hh*2 [sn cp] cp future*4"), 
  (8, 12, sound (samples "arpy*8" (run 16)))
]
```

For building and testing out longer sequences, it may be helpful to skip cycles with `rotL`. 
