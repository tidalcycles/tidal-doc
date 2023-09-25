---
title: whenmod
permalink: wiki/whenmod/
layout: wiki
tags:
 - Functions
 - Higher-order functions
---

**whenmod** has a similar form and behavior to
[every](every "wikilink"), but requires an additional number. It applies
the function to the pattern, when the remainder of the current loop
number divided by the first parameter, is greater or equal than the
second parameter.

For example the following makes every other block of four loops twice as
fast:

    d1 $ whenmod 8 4 (fast 2) (sound "bd sn kurt")
