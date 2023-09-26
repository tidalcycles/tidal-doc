---
title: silence
permalink: wiki/silence/
layout: wiki
tags:
 - Functions
 - Elemental patterns
---

[Type](/wiki/Type "wikilink"):

    silence :: Pattern a

**silence** is the empty pattern, it contains nothing, nada. It's still
useful, though!

    d1 $ sound "bd(3,8)" -- make a sound

    d1 $ silence -- stop it again

    d1 $ cat [sound "bd(3,8)", silence] -- silence every other pattern
