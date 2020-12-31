---
title: cF
permalink: wiki/cF/
layout: wiki
---

**cF** controls floating point values from [MIDI Controller
input](/wiki/Controller_Input "wikilink").

The first parameter is the default value, for when tidal hasn't received
that control. The second parameter is the CC Number of the controller.

[Type](/wiki/Type_signature "wikilink"):

    cF :: Double f => String s => Pattern Double f

    d1 $ sound "bd*16" # djf (cF 0.5 "42")

In recent versions of Tidal, the mininotation allows to write the same
statement as:

    d1 $ sound "bd*16" # djf ("^42")
