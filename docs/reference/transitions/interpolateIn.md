---
title: interpolateIn
permalink: wiki/interpolateIn/
layout: wiki
tags:
 - Transitions
---

[Type](/wiki/Type_signature "wikilink"):

``` haskell
interpolateIn :: Time -> [ControlPattern] -> ControlPattern
```

Morph control values between patterns in a given number of cycles. The
first argument supplied to \`interpolate\` is the ID of the new pattern
that is created and the second is the number of cycles.

``` haskell
d1 $ sound "arpy*16" # cutoff 100
```

``` haskell
interpolateIn 1 2 $ sound "arpy*16" # cutoff 16000
```

Stop the newly created pattern using its id:

``` haskell
d1 silence
```
