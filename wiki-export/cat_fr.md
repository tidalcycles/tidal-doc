---
title: cat/fr
permalink: wiki/cat/fr/
layout: wiki
tags:
 - Functions
---

<languages/> [Type](/wiki/Type_signature "wikilink"):

    cat :: [Pattern a] -> Pattern a

**cat** (aussi connu sous le nom de `slowcat`) est une fonction qui
permet de concaténer une liste de patterns. Chaque pattern de la liste
conserve sa durée originelle. Par exemple :

    d1 $ cat [sound "bd*2 sn", sound "arpy jvbass*2"]

    d1 $ cat [sound "bd*2 sn", sound "arpy jvbass*2", sound "drum*2"]

    d1 $ cat [sound "bd*2 sn", sound "jvbass*3", sound "drum*2", sound "ht mt"]

# fastcat

[Type](/wiki/Type_signature "wikilink"):

    fastcat :: [Pattern a] -> Pattern a

**fastcat** fonctionne comme `cat` mais réduit la durée de chaque
pattern pour que l'ensemble ne dure qu'un cycle. Par exemple :

    d1 $ fastcat [sound "bd*2 sn", sound "arpy jvbass*2"]

    d1 $ fastcat [sound "bd*2 sn", sound "arpy jvbass*2", sound "drum*2"]

    d1 $ fastcat [sound "bd*2 sn", sound "jvbass*3", sound "drum*2", sound "ht mt"]

**Voir aussi : [append](append "wikilink"),
[fastAppend](append#fastAppend "wikilink")**
