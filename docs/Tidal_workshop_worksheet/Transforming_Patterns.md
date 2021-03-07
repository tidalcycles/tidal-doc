---
title: Transforming Patterns
permalink: wiki/Transforming_Patterns/
layout: wiki
---

We can start to make much more complex
patterns using transformations

Using functions like

``` haskell
slow
```

you can start to transcend the cycle

``` haskell
slow
```

stretches the pattern over more cycles

``` haskell
d1 $ sound "arpy arpy:1 arpy:2 arpy:3"

<!--T:5-->
d1 $ slow 2 $ sound "arpy arpy:1 arpy:2 arpy:3"
```

``` haskell
fast
```

squashes the pattern into less than one cycle

You might also see people writing

``` haskell
density
```

\- it’s the same thing!

``` haskell
fast 0.5
```

is the same as

``` haskell
slow 2
```

!

``` haskell
d1 $ fast 2 $ sound "arpy arpy:1 arpy:2 arpy:3"

<!--T:10-->
d1 $ fast 0.5 $ sound "arpy arpy:1 arpy:2 arpy:3"
```

``` haskell
hurry
```

is similar to fast, but also applies a speed transformation

``` haskell
d1 $ sound "arpy arpy arpy:1 arpy:2"

<!--T:13-->
d1 $ hurry 2 $ sound "arpy arpy arpy:1 arpy:2"

<!--T:14-->
d1 $ hurry 0.5 $ sound "arpy arpy arpy:1 arpy:2"
```

You can reverse a pattern with ‘rev’

``` haskell
d1 $ rev $ sound "arpy arpy:1 arpy:2 arpy:3"
```

Or play it forwards and then backwards with ‘palindrome’

``` haskell
d1 $ palindrome $ sound "arpy arpy:1 arpy:2 arpy:3"
```

``` haskell
iter
```

starts the pattern at a different point each cycle, shifting it the
given number of times until it gets back to where it started

``` haskell
d1 $ iter 4 $ sound "arpy arpy:1 arpy:2 arpy:3"
```

``` haskell
every
```

allows us to schedule transformations or effects in different cycles
e.g. every fourth cycle, play twice as fast:

``` haskell
d1 $ every 4 (fast 2) $ sound "arpy arpy:1 arpy:2 arpy:3"
```

... or you could schedule an effect in the same way, using

``` haskell
#
```

``` haskell
d1 $ every 4 (# vowel "a o") $ sound "arpy arpy:1 arpy:2 arpy:3"
```

``` haskell
jux
```

(short for 'juxtapose') takes a transformation or an effect and plays it
in one speaker the original pattern plays in the other speaker.

``` haskell
d1 $ sound "arpy arpy:1 arpy:2 arpy:3"
d1 $ jux (rev) $ sound "arpy arpy:1 arpy:2 arpy:3"
d1 $ jux (hurry 2) $ sound "arpy arpy arpy:1 arpy:2"
```

``` haskell
chunk
```

applies a transformation or an effect to a different part of the pattern
each time. For example with

``` haskell
4
```

as a parameter, it will step through each quarter of the cycle.

``` haskell
d1 $ chunk 4 (hurry 2) $ sound  "arpy arpy:1 arpy:2 arpy:3"
d1 $ chunk 4 (# speed 2) $ sound  "alphabet:0 alphabet:1 alphabet:2 alphabet:3"
```

## Feeling brave?

More than one transformation is possible! You can chain them together
using

``` haskell
.
```

``` haskell
d1 $ jux (rev . (slow 1.5)) $ sound "arpy arpy:1 arpy:2 arpy:3"
```

Remember that (almost) everything is a pattern so we can apply these
transformations to our effects too!

``` haskell
d1 $ sound "jvbass [jvbass jvbass] jvbass ~" # note "1 [3 5] 7"
d1 $ sound "jvbass [jvbass jvbass] jvbass ~" # iter 3 (note "1 [3 5] 7")
```

What about slowing down or scaling sine and saw?
