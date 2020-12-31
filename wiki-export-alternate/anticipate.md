---
title: anticipate
permalink: wiki/anticipate/
layout: wiki
tags:
 - Transitions
---

[Type](/wiki/Type_signature "wikilink"):

``` haskell
anticipate :: Time -> [ControlPattern] -> ControlPattern
```

Queue up a pattern to be triggered (or dropped) in after 8 cycles. The
argument supplied to \`anticipate\` is the ID of the new pattern that is
created.

``` haskell
d1 $ sound "jvbass(3,8)"
```

``` haskell
anticipate 1 $ sound "bd sn" # delay "0.5" # room "0.3"
```

Stop the newly created pattern using its id:

``` haskell
d1 silence
```
