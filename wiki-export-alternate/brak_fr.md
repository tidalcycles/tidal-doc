---
title: brak/fr
permalink: wiki/brak/fr/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

    brak :: Pattern a -> Pattern a

""brak"" produit un motif qui ressemble un peu à un breakbeat. La
fonction le fait un cycle sur deux, en écrasant le motif pour l'adapter
à un demi-cycle et en le décalant d'un quart de cycle.

    d1 $ brak $ sound "[feel feel:3, hc:3 hc:2 hc:4 ho:1]"

[Category:Time Functions](/wiki/Category:Time_Functions "wikilink")
