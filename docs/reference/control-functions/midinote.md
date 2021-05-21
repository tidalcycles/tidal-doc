---
title: midinote
permalink: wiki/midinote/
layout: wiki
tags:
 - Control Functions
---

[Type](/wiki/Type_signature "wikilink"):

    midinote :: Pattern Double -> ControlPattern

**midinote** turns a number pattern into a control pattern that
specifies the note on a MIDI keyboard to play, beginning at zero. This
is different from [note](note "wikilink"), which instead normalizes zero
to Middle C. **midinote** only works when using SuperDirt MIDI patterns.

To play a low A0, which is MIDI note 21:

    d1 $ s "midi" # midinote "21"

To play a C4, or "middle C":

    d1 $ s "midi" # midinote "60"

**midinote** is very similar to [note](note "wikilink"). The difference
is that **midinote** is not normalized to Middle C. `midinote "0"` plays
the absolute lowest note in MIDI, and `note "0"` plays Middle C.
