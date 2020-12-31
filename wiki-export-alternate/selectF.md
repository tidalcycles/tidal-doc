---
title: selectF
permalink: wiki/selectF/
layout: wiki
tags:
 - Functions
---

    selectF :: Pattern Double -> [Pattern a -> Pattern a] -> Pattern a -> Pattern a

chooses between a list of functions, using a pattern of floats (from
0-1)

see also: [select](select "wikilink"), [pickF](pickF "wikilink"),
[squeeze](squeeze "wikilink")
