---
title: waveloss
permalink: wiki/waveloss/
layout: wiki
tags:
 - Control Functions
---

[Type](/wiki/Type_signature "wikilink"):

    waveloss :: Pattern Double -> ControlPattern

**waveloss** divides an audio stream into tiny segments, using the
signal's zero-crossings as segment boundaries, and discards a defined
fraction of them. Values range from 0 to 100.

    d1 $ s "drum*8" # waveloss "20 66.6 80 10"
