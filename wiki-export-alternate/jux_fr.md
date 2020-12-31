---
title: jux/fr
permalink: wiki/jux/fr/
layout: wiki
tags:
 - Functions
 - Higher-order functions
---

<languages/> [Type](/wiki/Type_signature "wikilink"):

    jux :: (ControlPattern -> ControlPattern) -> ControlPattern -> ControlPattern

La fonction **jux** crée un étrange effet stéréo. Elle applique une
fonction sur un pattern, mais seulement sur le canal de droite.
L'exemple suivant renverse le pattern dans le canal droit :

    d1 $ slow 32 $ jux (rev) $ striate' 32 (1/16) $ sound "bev"

En passant une fonction à une fonction, il est possible d'enchaîner
plusieurs transformations ( à l'aide de `.`). L'exemple suivant renverse
le pattern et le ralentit :

    d1 $ slow 32 $ jux ((# speed "0.5") . rev) $ striate' 32 (1/16) $ sound "bev"

# juxBy

[Type](/wiki/Type_signature "wikilink"):

    juxBy :: Pattern Double -> (ControlPattern -> ControlPattern) -> ControlPattern -> ControlPattern

Avec jux, le pattern originel et sa version altérée sont joués dans le
canal de droite et dans le canal de gauche (i.e la valeur de `pan` est
tantôt à 0, tantôt à 1). Parfois, cet effet est un peu trop extrême et
se remarque de manière assez désagréable lors d'une écoute au casque. La
variante **juxBy** ajoute un paramètre, qui permet de recentrer le
décalage vers le centre. Par exemple :

    d1 $ juxBy 0.5 (fast 2) $ sound "bd sn:1"

Dans l'exemple ci-dessus, la valeur de `pan` pour nos deux patterns sont
de 0.25 et 0.75. Ces valeurs sont plus raisonnables que 0 et 1.

Voir aussi :

1.  [superimpose](superimpose "wikilink") qui permet de superposer deux
    patterns.
2.  [off](off "wikilink") qui permet de superposer deux patterns et de
    les décaler dans le temps.
