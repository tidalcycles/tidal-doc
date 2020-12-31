---
title: ghost
permalink: wiki/ghost/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

    ghost :: Pattern ControlMap -> Pattern ControlMap

**ghost** adds quieter, pitch-shifted, copies of an event after the
event, emulating ghost notes that are common in drumming patterns.

    d1 $ stack [ ghost $ sound "~ sn", sound "bd*2 [~ bd]" ]

The example above creates a kick snare pattern with ghost notes applied
to the snare hit.
