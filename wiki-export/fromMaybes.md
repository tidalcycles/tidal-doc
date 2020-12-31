---
title: fromMaybes
permalink: wiki/fromMaybes/
layout: wiki
tags:
 - Functions
---

<languages/> <translate> [Type](/wiki/Type_signature "wikilink"):

    fromMaybes :: [Maybe a] -> Pattern a

**fromMaybes** is much like [listToPat](listToPat "wikilink") but when
it encounters a

    Nothing

it puts a gap in the pattern and when it encounters

    Just x

puts

    x

in the pattern.

    d1 $ n (fromMaybes [Just 0, Nothing, Just 2]) # s "superpiano"

is equivalent to

    d1 $ n "0 ~ 2" # s "superpiano"

**See also:
[listToPat](listToPat "wikilink"),[fromList](fromList "wikilink")**

</translate>
