---
title: degrade
permalink: wiki/degrade/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

    degrade :: Pattern a -> Pattern a

**degrade** randomly removes events from a pattern, 50% of the time.
Example usage:

    d1 $ slow 2 $ degrade $ sound "[[[feel:5*8,feel*3] feel:3*8], feel*4]"
       # accelerate "-6"
       # speed "2"

# degradeBy

[Type](/wiki/Type_signature "wikilink"):

``` haskell
degradeBy :: Double -> Pattern a -> Pattern a
```

Similarly to

    degrade

, **degradeBy** allows you to control the percentage of events that are
removed. For example, to remove events 90% of the time:

    d1 $ slow 2 $ degradeBy 0.9 $ sound "[[[feel:5*8,feel*3] feel:3*8], feel*4]"
       # accelerate "-6"
       # speed "2"

# unDegradeBy

[Type](/wiki/Type_signature "wikilink"):

``` haskell
unDegradeBy :: Double -> Pattern a -> Pattern a
```

    unDegradeBy

is

    degradeBy

but with the percentage describing how many events to *keep* on average
not *remove*.

[Category:Randomness and
chance](/wiki/Category:Randomness_and_chance "wikilink")
