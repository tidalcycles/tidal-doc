---
title: fromList
permalink: wiki/fromList/
layout: wiki
tags:
 - Functions
---

<languages/> <translate> [Type](/wiki/Type_signature "wikilink"):

    fromList :: [a] -> Pattern a

**fromList** takes a list of things and turns them into a pattern where
each item in the list has a duration of one cycle, looping back around
at the end of the list.

    d1 $ n (fromList [0, 1, 2]) # s "superpiano"

is equivalent to

    d1 $ n "<0 1 2>" # s "superpiano"

**See also: [listToPat](listToPat "wikilink")**

</translate>
