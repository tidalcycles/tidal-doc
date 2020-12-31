---
title: anticipateIn
permalink: wiki/anticipateIn/
layout: wiki
tags:
 - Transitions
---

[Type](/wiki/Type_signature "wikilink"):

``` haskell
anticipateIn Time -> Time -> [ControlPattern] -> ControlPattern
```

Start playing a pattern after a specified number of cycles and assign it
an ID.

The first argument is the number of cycles after which the pattern will
begin playing, and the second argument is the ID of the newly created
patttern.

``` haskell
d1 $ fast 2 $ sound "bd sd"
anticipateIn 2 2 $ fast 4 $ sound "hh*2" *| gain "0.9 0.6"
d2 silence
```
