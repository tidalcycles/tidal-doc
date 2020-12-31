---
title: midicmd
permalink: wiki/midicmd/
layout: wiki
tags:
 - Control Functions
---

[Type](/wiki/Type_signature "wikilink"):

    midicmd :: Pattern String -> ControlPattern

**midicmd** turns a string pattern into a control pattern that controls
what *type* of MIDI pattern to play. i.e. a control-change pattern, a
note pattern, etc.

The default value of **midicmd** is `noteon`, which plays a note
pattern:

    d1 $ note "0 3 7 9" # s "midi" # midicmd "noteon"

    -- is the same as:
    d1 $ note "0 3 7 9" # s "midi"

If you want to send a control-change pattern, you need to specify a
value of "control":

    d1 $ control "0 50 100 30" # ctlNum 1 # s "midi" # midicmd "control"

Other types of **midicmd** values include "program", "touch",
"polytouch", and "bend".
