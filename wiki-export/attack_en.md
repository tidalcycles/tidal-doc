---
title: attack/en
permalink: wiki/attack/en/
layout: wiki
tags:
 - Control Functions
---

<languages/> [Type](/wiki/Type_signature "wikilink"):

    attack :: Pattern Double -> ControlPattern

**attack** turns a number pattern into a control pattern that changes
the "fade in" time of a sample.

    d1 $ s "[jvbass rave]/2" # attack "<0 0.1 0.2 0.3 0.5>"
