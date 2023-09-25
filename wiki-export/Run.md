---
title: run
permalink: wiki/run/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

``` haskell
run :: (Num a, Enum a) => Pattern a -> Pattern a 
```

The **run** function generates a pattern representing a cycle of numbers
from 0 to n-1 inclusive. Notably used to ‘run’ through a folder of
samples in order:

    d1 $ n (run 8) # sound "amencutup"

The first parameter to run can be given as a pattern:

    d1 $ n (run "<4 8 4 6>") # sound "amencutup"

# scan

[Type](/wiki/Type_signature "wikilink"):

``` haskell
scan :: (Num a, Enum a) => Pattern a -> Pattern a
```

**scan** is similar to [run](run "wikilink"), but starts at 1 for the
first cycle, adding an additional number each cycle until it reaches n

    d1 $ n (scan 8) # sound "amencutup"
