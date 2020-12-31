---
title: begin
permalink: wiki/begin/
layout: wiki
tags:
 - Control Functions
---

[Type](/wiki/Type_signature "wikilink"):

    begin :: Pattern Double -> ControlPattern

**begin** turns a number pattern into a control pattern that changes the
start position of a sample.

**begin** takes a pattern of numbers from 0 to 1. It skips the beginning
of each sample, e.g. 0.25 to cut off the first quarter from each sample,
0.5 to cut off the first half, and so on:

    d1 $ s "rave/2" # begin "<0 0.25 0.5>"

You can use [end](end "wikilink") to alter the playback end position of
a sample.
