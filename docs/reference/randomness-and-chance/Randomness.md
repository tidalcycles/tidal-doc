---
title: Randomness
permalink: wiki/Randomness/
layout: wiki
---

<languages /> <translate> Randomness can help us quickly introduce
character and variation into our patterns

``` Haskell
sometimes
```

works a bit like

``` Haskell
every
```

, but instead of happening after a set period, changes have a random
chance of appearing

``` Haskell
d1 $ sometimes (# speed "2") $ sound "drum*8"
```

``` Haskell
often
```

works like

``` Haskell
sometimes
```

but happens more often!

``` Haskell
d1 $ often (# speed "2") $ sound "drum*8"
```

``` Haskell
irand
```

generates a random integer up to the number specified. e.g. to play a
random sample:

``` Haskell
d1 $ sound "arpy(3,8)" # n (irand 16)
```

``` Haskell
rand
```

generates a random decimal between 0 and 1

``` Haskell
d1 $ sound "tink*16" # gain rand
```

You can use

``` Haskell
degradeBy
```

to remove random elements. The number indicates how likely a sample is
to play

``` Haskell
d1 $ degradeBy 0.2 $ sound "tink*16"
```

(

``` Haskell
degrade
```

on its own is the same as

``` Haskell
degradeBy 0.5
```

)

Or, you can use ? to remove sounds with a 50% likelihood

``` Haskell
d1 $ sound "bd sn:2? bd sn?"
```

</translate>
