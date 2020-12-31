---
title: Translations:Manipulating samples/19/zh-hant
permalink: wiki/Translations:Manipulating_samples/19/zh-hant/
layout: wiki
---

``` Haskell
d1 $ loopAt "<8 4 16>" $ chop 64 $  sound "bev*4" # cut 1
d1 $ rev $ loopAt 8 $ chop 128 $ sound "bev"
```
