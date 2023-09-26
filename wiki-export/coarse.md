---
title: coarse
permalink: wiki/coarse/
layout: wiki
tags:
 - Control Functions
---

[Type](/wiki/Type_signature "wikilink"):

    coarse :: Pattern Int -> ControlPattern

**coarse** turns a number pattern into a control pattern that lowers the
sample rate of a sample. i.e. 1 for original 2 for half, 3 for a third
and so on.

    d1 $ s "bd*2 arpy*2 cp hh*3" # coarse "<4 8 16 24>"
