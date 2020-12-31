---
title: Translations:What is a pattern?/9/en
permalink: wiki/Translations:What_is_a_pattern?/9/en/
layout: wiki
---

So a pattern is a function from a timespan (also known as an *arc*), to
values with each have a beginning and end. A function like

``` Haskell
rev
```

, is therefore a combinator, which takes such a function as input, and
gives a new function as output (with input and output timing
manipulations baked-in, in order to reverse the pattern).
