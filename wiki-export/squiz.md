---
title: squiz
permalink: wiki/squiz/
layout: wiki
tags:
 - Control Functions
---

[Type](/wiki/Type_signature "wikilink"):

    squiz :: Pattern Double -> ControlPattern

**squiz** is a simplistic pitch-raising algorithm, reminiscent of some
weird mixture of filter, ring-modulator and pitch-shifter.

Values range from 1 to infinity, and represent the pitch ratio - for
example, a value of 2 raises the pitch by one octave.

    d1 $ s "drum*8" # squiz "1 2 8 256"
