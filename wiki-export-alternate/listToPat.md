---
title: listToPat
permalink: wiki/listToPat/
layout: wiki
tags:
 - Functions
---

<languages/> <translate> [Type](/wiki/Type_signature "wikilink"):

    listToPat :: [a] -> Pattern a

**listToPat** takes a list of things and turns them into a pattern where
each item in the list becomes an event all happening in the same cycle,
looping upon subsequent cycles. Can also be called as

     fastFromList 

    d1 $ n (listToPat [0, 1, 2]) # s "superpiano"

is equivalent to

    d1 $ n "[0 1 2]" # s "superpiano"

**See also: [fromList](fromList "wikilink")**

</translate>
