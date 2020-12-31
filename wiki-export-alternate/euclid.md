---
title: euclid
permalink: wiki/euclid/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

    euclid :: Pattern Int -> Pattern Int -> Pattern a -> Pattern a

**euclid** creates a Euclidean rhythmic structure. It produces the same
output as the Euclidean pattern string.

For example:

    d1 $ euclid 3 8 $ sound "cp"

is the same as

    d1 $ sound "cp(3,8)"

**euclid** accepts two parameters that can be patterns:

    d1 $ euclid "<3 5>" "[8 16]/4" $ s "bd"

# euclidInv

[Type](/wiki/Type_signature "wikilink"):

    euclidInv :: Pattern Int -> Pattern Int -> Pattern a -> Pattern a

Inverts the pattern given by

    euclid

. For example,

    d1 $ stack [euclid 5 8 $ s "bd",
                euclidInv 5 8 $ s "hh27"]

to hear that the hi-hat event fires on every one of the eight even beats
that the bass drum does not.

# euclidFull

[Type](/wiki/Type_signature "wikilink"):

    euclidInv :: Pattern Int -> Pattern Int -> Pattern a -> Pattern a ->Pattern a

**euclidFull** is a convenience function for playing one pattern on the
euclidean rhythm and a different pattern on the off-beat.

    euclidFull 5 8 (s "bd") (s "hh27")

is equivalent to our above example.
