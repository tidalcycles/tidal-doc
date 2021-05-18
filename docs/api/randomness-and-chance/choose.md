---
title: choose
permalink: wiki/choose/
layout: wiki
tags:
 - Functions
 - Randomness and chance
---

<translate> [Type](/wiki/Type_signature "wikilink"):

``` haskell
choose :: [a] -> Pattern a
```

The **choose** function emits a stream of randomly choosen values from
the given list, as a [continuous](/wiki/Oscillators "wikilink") pattern.

    d1 $ sound "drum ~ drum drum" # n (choose [0,2,3])

As with all [continuous patterns](/wiki/Oscillators "wikilink"), you have to
be careful to give them structure; in this case **choose** gives you an
infinitely detailed stream of random choices.

# chooseBy

[Type](/wiki/Type_signature "wikilink"):

``` haskell
chooseBy :: Pattern Double -> [a] -> Pattern a
```

The **chooseBy** function is like [choose](choose "wikilink") but
instead of selecting elements of the list randomly, it uses the given
pattern to select elements.

    chooseBy "0 0.25 0.5" ["a","b","c","d"]

will result in the pattern **"a b c"**

# wchoose

[Type](/wiki/Type_signature "wikilink"):

``` haskell
wchoose :: [(a, Double)] -> Pattern a
```

**wchoose** is similar to [choose](choose "wikilink"), but allows you to
'weight' the choices, so some are more likely to be chosen than others.
The following is similar to the previous example, but the 2 is twice as
likely to be chosen than the 0 or 3.

    d1 $ sound "drum ~ drum drum" # n (wchoose [(0,0.25),(2,0.5),(3,0.25)])

*Note: prior to version 1.0.0 of tidal, the weights had to add up to 1,
but this is no longer the case.*

# wchooseBy

[Type](/wiki/Type_signature "wikilink"):

``` haskell
wchooseBy :: Pattern Double -> [(a,Double)] -> Pattern a 
```

The **wchooseBy** function is like [wchoose](wchoose "wikilink") but
instead of selecting elements of the list randomly, it uses the given
pattern to select elements.

</translate>
