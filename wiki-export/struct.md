---
title: struct
permalink: wiki/struct/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

    struct :: Pattern Bool -> Pattern a -> Pattern a

**struct** places a rhythmic 'boolean' structure on the pattern you give
it.

For example:

    d1 $ struct ("t ~ t*2 ~") $ sound "cp"

... is the same as ...

    d1 $ sound "cp ~ cp*2 ~"

The structure comes from a *boolean* pattern, i.e. a binary one
containing true or false values. Above we only used true values, denoted
by

    t

. It's also possible to include false values with

    f

, which

    struct

will simply treat as silience. For example, this would have the same
outcome as the above:

    d1 $ struct ("t f t*2 f") $ sound "cp"

These true/false binary patterns become useful when you conditionally
manipulate them, for example 'inverting' the values using
[every](every "wikilink") and [inv](inv "wikilink"):

    d1 $ struct (every 3 inv "t f t*2 f") $ sound "cp"

In the above, the boolean values will be 'inverted' every third cycle,
so that the structure comes from the

    f

s rather than

    t

.

Note that euclidean patterns also create true/false values, for example:

    d1 $ struct (every 3 inv "t(3,8)") $ sound "cp"

In the above, the euclidean pattern creates

    "t f t f t f f t"

which gets inverted to

    "f t f t f t t f"

every third cycle.

Note that if you prefer you can use

    1

and

    0

instead of

    t

and

    f

.

See also [mask](mask "wikilink").
