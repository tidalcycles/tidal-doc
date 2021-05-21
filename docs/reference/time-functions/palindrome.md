---
title: palindrome
permalink: wiki/palindrome/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

    palindrome :: Pattern a -> Pattern a

The **palindrome** function applies [rev](rev "wikilink") to a pattern
[every](every "wikilink") other cycle, so that the pattern alternates
between forwards and backwards.

For example this:

    d1 $ palindrome $ sound "arpy:0 arpy:1 arpy:2 arpy:3"

... is the same as this:

    d1 $ slow 2 $ sound "arpy:0 arpy:1 arpy:2 arpy:3 arpy:3 arpy:2 arpy:1 arpy:0"

... and indeed this:

    d1 $ every 2 rev $ sound "arpy:0 arpy:1 arpy:2 arpy:3"

[Category:Time Functions](/wiki/Category:Time_Functions "wikilink")
