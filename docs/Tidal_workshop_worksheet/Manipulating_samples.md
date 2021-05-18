---
title: Manipulating samples
permalink: wiki/Manipulating_samples/
layout: wiki
---

<languages />

<translate> So far we've just used short samples. Longer samples can
cause us some problems if we’re not careful. Let’s see what happens with
a long sample

``` Haskell
d1 $ sound "bev"
-- wait a bit, then..
hush
```

As you can hear, Tidal will keep triggering the sample each cycle, even
if it’s very long. Even if you stop the pattern playing, you will still
need to listen while the samples play out.

You can use

``` Haskell
cut
```

to truncate the sample when the next one is triggered

``` Haskell
d1 $ sound "bev" # cut 1
```

The number in ‘cut’ define a group, so you can play with interference
across different patterns

``` Haskell
d1 $ sound "bev ~" # cut 1
d2 $ slow 4 $ sound "pebbles ~" # cut 1
```

``` Haskell
legato
```

also truncates samples, but using a fixed length

``` Haskell
d1 $ sound "bev ~ bev ~" # legato 1
```

We can also

``` Haskell
chop
```

samples for a ‘granular synthesis' effect

``` Haskell
d1 $ chop 32 $ sound "bev"
```

``` Haskell
striate
```

is similar to

``` Haskell
chop
```

but organises the playback in a different way

``` Haskell
d1 $ slow 4 $ chop 4 $ sound "arpy:1 arpy:2 arpy:3 arpy:4"
d1 $ slow 4 $ striate 4 $ sound "arpy:1 arpy:2 arpy:3 arpy:4"
```

``` Haskell
randslice
```

chops the sample into pieces and then plays back a random one each cycle

``` Haskell
d1 $ randslice 32 $ sound "bev"
```

We can also use

``` Haskell
loopAt
```

to fit samples to a set number of cycles:

``` Haskell
d1 $ loopAt 8 $ sound "bev"
```

As always we can add patterns and transformations to these functions, or
combine them for interesting effects

``` Haskell
d1 $ loopAt "<8 4 16>" $ chop 64 $  sound "bev*4" # cut 1
d1 $ rev $ loopAt 8 $ chop 128 $ sound "bev"
```

</translate>
