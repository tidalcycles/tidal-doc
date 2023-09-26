---
title: crush
permalink: wiki/crush/
layout: wiki
tags:
 - Control Functions
---

[Type](/wiki/Type_signature "wikilink"):

    crush :: Pattern Double -> ControlPattern

**crush** turns a number pattern into a control pattern that creates a
bit-crushing effect.

Use values between 1 and 16, where 1 results in a drastic bit reduction,
and 16 results in barely any reduction.

You can also use negative values for a slightly different effect.

    d1 $ s "[bd cp] hh drum arpy*2" # crush "<16 4 2>"
