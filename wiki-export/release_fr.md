---
title: release/fr
permalink: wiki/release/fr/
layout: wiki
tags:
 - Control Functions
---

<languages/> [Type](/wiki/Type_signature "wikilink"):

    release :: Pattern Double -> ControlPattern

**release** permet de spécifier le temps d'extinction d'une sample :

    d1 $ s "jvbass*8" # release "<0.1 0.3 0.6>"
