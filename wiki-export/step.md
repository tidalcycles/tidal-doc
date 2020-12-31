---
title: step
permalink: wiki/step/
layout: wiki
---

[Type](/wiki/Type_signatures "wikilink"):

``` haskell
 step :: String -> String -> Pattern String 
```

**step** acts as a kind of simple step-sequencer using strings. For
example,

    step "sn" "x x 12 "

is equivalent to the pattern of strings given by

    "sn ~ sn ~ sn:1 sn:2 ~"

.

    step

substitutes the given string for each x, for each number it substitutes
the string followed by a colon and the number, and for everything else
it puts in a rest.

In other words, step generates a pattern of strings in exactly the
syntax you'd want for selecting samples and that can be fed directly
into the

    s

function.

    d1 $ s (step "sn" "x x 12 ")

# steps

[Type](/wiki/Type_signatures "wikilink"):

``` haskell
 steps :: [(String,String)] -> Pattern String 
```

**steps** is like step but it takes a *list* of pairs like

    step

would and it plays them all simultaneously.

    d1 $ s (steps [("cp","x  x x  x x  x"),("bd", "xxxx")])

# step'

[Type](/wiki/Type_signatures "wikilink"):

``` haskell
 step' :: [String] -> String -> Pattern String 
```

**step**' is like

    step

but more general, using the numbers in the step-sequencing string as
indexes into the list of strings you give it.

    d1 $ s (step' ["superpiano","supermandolin"] "0 1 000 1") # sustain 4 # n 0 

is equivalent to

    d1 $ s "superpiano ~ supermandolin ~ superpiano!3 ~ supermandolin" # sustain 4 # n 0
