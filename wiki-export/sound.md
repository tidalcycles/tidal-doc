---
title: sound
permalink: wiki/sound/
layout: wiki
tags:
 - Control Functions
---

[Type](/wiki/Type_signature "wikilink"):

    sound :: Pattern String -> ControlPattern

**sound** turns a pattern of strings into a control pattern representing
sounds - either sample sets or synth names. This function is *required*
when using SuperDirt.

    d1 $ sound "feel bd hh peri"

This function also has a shorthand alias called `s`:

    d1 $ s "feel bd hh peri"
