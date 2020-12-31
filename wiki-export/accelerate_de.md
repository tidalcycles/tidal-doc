---
title: accelerate/de
permalink: wiki/accelerate/de/
layout: wiki
tags:
 - Control Functions
---

<languages/>

[Type](/wiki/Type_signature "wikilink"):

    accelerate :: Pattern Double -> ControlPattern

**accelerate** verwandelt ein 'number pattern' in ein 'control pattern',
das die Samples während der Wiedergabe beschleunigt (oder verlangsamt).

    d1 $ sound "jvbass*4" # accelerate "<0 1 -1 0.25 -0.5 2.1 -3>" 
