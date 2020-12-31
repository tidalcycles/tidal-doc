---
title: cycleChoose
permalink: wiki/cycleChoose/
layout: wiki
---

[Type](/wiki/Type_signatures "wikilink"):

    cycleChoose :: [a] -> Pattern a

similar to [choose](choose "wikilink"), but only picks once per cycle

``` Haskell
d1 $ sound "drum ~ drum drum" # n (cycleChoose [0,2,3])
```
