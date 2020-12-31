---
title: off/fr
permalink: wiki/off/fr/
layout: wiki
tags:
 - Functions
---

<languages/> [Type](/wiki/Type "wikilink"):

    Pattern Time -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a

**off** est similaire à [superimpose](superimpose "wikilink"). Il
applique une fonction sur un pattern, et joue ce pattern en même temps
au-dessus du pattern original. La différence est que `off` reçoit un
argument supplémentaire : un décalage temporel.

`off` joue le même pattern décalé d'une certaine valeur dans le temps.

L'exemple suivant permet de jouer une superposition de patterns, décalés
d'un huitième de cycle l'un par rapport à l'autre. L'un des deux
patterns reçoit également un effet de bitcrush.

    d1 $ off 0.125 (# crush 2) $ sound "bd [~ sn:2] mt lt*2"

L'exemple suivant joue des arpèges en transposant un pattern originel :

    d1 $ slow 2 $ 
      n (off 0.25 (+12) $ off 0.125 (+7) $ slow 2 "c(3,8) a(3,8,2) f(3,8) e(3,8,4)") 
      # sound "superpiano"
