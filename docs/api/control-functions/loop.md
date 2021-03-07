---
title: loop
permalink: wiki/loop/
layout: wiki
tags:
 - Control Functions
---

[Type](/wiki/Type_signature "wikilink"):

    loop :: Pattern Double -> ControlPattern

**loop** turns a number pattern into a control pattern that changes the
number of times a sample plays from its [begin](begin "wikilink") and
[end](end "wikilink") points. A negative value behaves the same as its
positive counterpart. With fractional **loop** values, the final
iteration will be incomplete - for example, a value of **2.3** loops
thrice with the final loop playing 30% of the sample between its
[begin](begin "wikilink") and [end](end "wikilink") points.

    d1 $ s "ho" # loop "2.2"

To alter the loop points, you can use [begin](begin "wikilink") and
[end](end "wikilink").
