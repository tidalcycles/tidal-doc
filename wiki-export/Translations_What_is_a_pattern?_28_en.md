---
title: Translations:What is a pattern?/28/en
permalink: wiki/Translations:What_is_a_pattern?/28/en/
layout: wiki
---

``` Haskell
-- | A datatype that's basically a query, plus a hint about whether its events
-- are Analogue or Digital by nature
data Pattern a = Pattern {nature :: Nature, query :: Query a}
```
