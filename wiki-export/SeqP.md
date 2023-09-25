---
title: seqP
permalink: wiki/seqP/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

``` haskell
seqP :: [(Time, Time, Pattern a)] -> Pattern a
```

**seqP** allows you sequence patterns, with start and end times. The
code below contains three separate patterns in a “stack”, but each has
different start times (zero cycles, four cycles, and eight cycles,
respectively). In the example, all patterns stop after 12 cycles:

    d1 $ seqP [ 
      (0, 12, sound "bd bd*2"), 
      (4, 12, sound "hh*2 [sn cp] cp future*4"), 
      (8, 12, sound (samples "arpy*8" (run 16)))
    ]

If you run the above, you probably won’t hear anything. This is because
cycles start ticking up as soon as you start Tidal, and you have
probably already gone past cycle 12.

You can reset the cycle clock back to zero by running

    setcps (-1)

followed by

    setcps 1

(**nb: at the time of writing, this doesn't yet work in version 1.0.0 of
tidal, but you can instead run [resetCycles](resetCycles "wikilink")**),
or whatever tempo you want to restart at. Alternatively, you can shift
time for the seqP pattern back to zero like this:

    d1 $ qtrigger 1 $ seqP [ 
      (0, 12, sound "bd bd*2"), 
      (4, 12, sound "hh*2 [sn cp] cp future*4"), 
      (8, 12, sound (samples "arpy*8" (run 16)))
    ]

# seqPLoop

[Type](/wiki/Type_signature "wikilink"):

``` haskell
seqPLoop :: [(Time, Time, Pattern a)] -> Pattern a
```

A third option is to use **seqPLoop** instead, which will keep looping
the sequence when it gets to the end:

    d1 $ qtrigger 1 $ seqPLoop [ 
      (0, 12, sound "bd bd*2"), 
      (4, 12, sound "hh*2 [sn cp] cp future*4"), 
      (8, 12, sound (samples "arpy*8" (run 16)))
    ]

For building and testing out longer sequences, it may be helpful to skip
cycles with **[rotL](rotL "wikilink")**.
