---
title: attack/fr
permalink: wiki/attack/fr/
layout: wiki
tags:
 - Control Functions
---

<languages/> [Type](/wiki/Type_signature "wikilink"):

    attack :: Pattern Double -> ControlPattern

**attack** permet de modifier le temps d'attaque d'une sample :

    d1 $ s "[jvbass rave]/2" # attack "<0 0.1 0.2 0.3 0.5>"
