---
title: smooth
permalink: wiki/smooth/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

    smooth :: Fractional a => Pattern a -> Pattern a

**smooth** blends between the numbers (rational or floating point) in a
pattern. It does linear interpolation, that is it will go in a straight
line from one number to the next. For example,

    smooth "1 2"

will go from 1 to 2 and back to 1 again over one cycle, so that one
quarter of the way through it will have the value 1.5.

The result will be an [oscillator](/wiki/Oscillators "wikilink"), which means
it does not have structure on its own. You can give it structure simply
by combining it with one that does (e.g.

    "0 0 2*2 1" + smooth "0 10 11"

), or by using a function like [segment](segment "wikilink") or
[struct](struct "wikilink").

    smooth

copes with polyphonic patterns (where events overlap), by running the
[mono](mono "wikilink") function internally.
