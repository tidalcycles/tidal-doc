---
title: accelerate/fr
permalink: wiki/accelerate/fr/
layout: wiki
tags:
 - Control Functions
---

<languages/> [Type](/wiki/Type_signature "wikilink"):

    accelerate :: Pattern Double -> ControlPattern

**accelerate** reçoit un pattern de nombres et permet d'accélérer ou de
ralentir la vitesse de lecture d'une sample :

    d1 $ sound "jvbass*4" # accelerate "<0 1 -1 0.25 -0.5 2.1 -3>" 
