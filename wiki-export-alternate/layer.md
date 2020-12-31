---
title: layer
permalink: wiki/layer/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

    [a -> Pattern b] -> a -> Pattern b

The **layer** function allows you to layer up multiple functions on one
pattern.

For example the following will play two versions of the pattern at the
same time, one reversed and one at twice the speed.

    d1 $ layer [rev, fast 2] $ sound "arpy [~ arpy:4]"

If you want to include the original version of the pattern in the
layering, use the

    id

function:

    d1 $ layer [id, rev, fast 2] $ sound "arpy [~ arpy:4]"

## See also

This function is related to [superimpose](superimpose "wikilink"), in
particular

    layer [id, rev]

is the same as

    superimpose rev

.
