---
title: append/fr
permalink: wiki/append/fr/
layout: wiki
tags:
 - Functions
---

<languages/> [Type](/wiki/Type_signature "wikilink"):

    append :: Pattern a -> Pattern a -> Pattern a

**append** permet de combiner deux patterns pour n'en faire qu'un. Les
cycles alternent entre le premier pattern et le second :

    d1 $ append (sound "bd*2 sn") (sound "arpy jvbass*2")

Cette fonction possède un alias : `slowAppend`, pour la différencier de
`fastAppend`.

# fastAppend

[Type](/wiki/Type_signature "wikilink"):

    fastAppend :: Pattern a -> Pattern a -> Pattern a

**fastAppend** fonctionne comme [append](append "wikilink"), à une
différence près. La combinaison des deux patterns s'effectue au cours
d'un seul et unique cycle (accélération) :

    d1 $ fastAppend (sound "bd*2 sn") (sound "arpy jvbass*2")

**Voir aussi : [cat](cat "wikilink"),
[fastcat](cat#fastcat "wikilink")**
