---
title: interpolate
permalink: wiki/interpolate/
layout: wiki
tags:
 - Transitions
---

[Type](/wiki/Type_signature "wikilink"):

``` haskell
interpolate :: Time -> [ControlPattern] -> ControlPattern
```

Morph control values between patterns in four cycles. The argument
supplied to \`interpolate\` is the ID of the new pattern that is
created.

``` haskell
d1 $ sound "arpy*16" # cutoff 100
```

``` haskell
interpolate 1 $ sound "arpy*16" # cutoff 16000
```

Stop the newly created pattern using its id:

``` haskell
d1 silence
```
