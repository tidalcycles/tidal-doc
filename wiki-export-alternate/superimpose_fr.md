---
title: superimpose/fr
permalink: wiki/superimpose/fr/
layout: wiki
tags:
 - Functions
---

<languages/> [Type](/wiki/Type_signature "wikilink"):

    superimpose :: (Pattern a -> Pattern a) -> Pattern a -> Pattern a

**superimpose** permet de superposer deux versions d'un même pattern :
le pattern original et un pattern altéré.

    d1 $ superimpose (fast 2) $ sound "bd sn [cp ht] hh"

... donne le même résultat que :

    d1 $ stack [sound "bd sn [cp ht] hh",
                fast 2 $ sound "bd sn [cp ht] hh"
               ]

## Voir aussi

Cette fonction est similaire à d'autres, basées sur le même principe :

1.  [jux](jux "wikilink") superpose mais joue le pattern originel et le
    pattern modifié avec une panoramique différente (gauche &lt;-&gt;
    droite).
2.  [off](off "wikilink") superpose deux patterns mais les décale dans
    le temps.
3.  [layer](layer "wikilink") permet de superposer un pattern modifié
    par plusieurs fonctions.
