---
title: Translations:Controller Input/9/fr
permalink: wiki/Translations:Controller_Input/9/fr/
layout: wiki
---

Les messages OSC attendus par Tidal ont un nom de chemin particulier :

    /ctrl

, suivi de deux valeurs, la clé correspondant au contrôle et sa valeur
effective. La clé peut être sous forme textuelle ou numérique. La valeur
peut être un `float`, un `int` ou une `string`. Exemple de message :

    /ctrl sf hello 0.4

. Dans cet exemple, `sf` est un `typetag`. Il spécifie que la première
value est une `string` et que la seconde valeur est un `float`.
Consultez [la documentation OSC](http://opensoundcontrol.org/spec-1_0)
pour en apprendre plus.
