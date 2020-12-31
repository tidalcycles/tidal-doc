---
title: mono
permalink: wiki/mono/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

    mono :: Pattern a -> Pattern a

**mono** makes the given pattern 'monophonic', so only one event happens
at a time.

For example,

    mono "[1 ~, 2]"

is the same as

    "1 2"

', because the start of

    2

is cut off by the

    1

.
