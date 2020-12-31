---
title: Translations:What is a pattern?/22/en
permalink: wiki/Translations:What_is_a_pattern?/22/en/
layout: wiki
---

``` Haskell
-- | A function that represents events taking place over time
type Query a = (State -> [Event a])
```
