---
title: end
permalink: wiki/end/
layout: wiki
tags:
 - Control Functions
---

[Type](/wiki/Type_signature "wikilink"):

    end :: Pattern Double -> ControlPattern

**end** turns a number pattern into a control pattern that changes the
playback end position of a sample.

**end** takes a pattern of numbers from 0 to 1. It controls the end
point of each sample. e.g. 0.75 to only play 75% of each sample, 0.5 to
only play 50%, and so on:

    d1 $ s "rave/2" # end "<0 0.25 0.5>"

You can use [begin](begin "wikilink") to alter the playback start
position of a sample.
