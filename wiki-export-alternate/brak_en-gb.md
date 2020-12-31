---
title: brak/en-gb
permalink: wiki/brak/en-gb/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

    brak :: Pattern a -> Pattern a

**brak** makes a pattern sound a bit like a breakbeat. It does this by
every other cycle, squashing the pattern to fit half a cycle, and
offsetting it by a quarter of a cycle.

    d1 $ brak $ sound "[feel feel:3, hc:3 hc:2 hc:4 ho:1]"

[Category:Time Functions](/wiki/Category:Time_Functions "wikilink")
