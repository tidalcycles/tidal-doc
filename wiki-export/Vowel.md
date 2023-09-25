---
title: vowel
permalink: wiki/vowel/
layout: wiki
tags:
 - Control Functions
---

[Type](/wiki/Type_signature "wikilink"):

    vowel :: Pattern String -> ControlPattern

**vowel** turns a string pattern into a control pattern that creates a
formant filter to produce vowel sounds on samples.

Use values `a`, `e`, `i`, `o`, and `u` to add the effect. The rest `~`
character creates no effect:

    d1 $ s "jvbass*4" # vowel "[a e ~ i o u]/8"
