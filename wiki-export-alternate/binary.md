---
title: binary
permalink: wiki/binary/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

    binary :: Pattern Int -> Pattern Bool

**binary** allows you to express a boolean pattern as a decimal number.

For example \`163\` in binary is \`10100011\`, and so these are
equivalent:

    d1 $ struct (binary 163) $ sound "clap:4"

    d1 $ struct "t f t f f f t t" $ sound "clap:4"

That number can be patterned:

    d1 $ struct (binary ("163 63")) $ sound "clap:4"

# binaryN

[Type](/wiki/Type_signature "wikilink"):

    binaryN :: Int -> Pattern Int -> Pattern Bool

**binaryN** lets you specify a number of bits for the pattern. For
example

    55532

gives the boolean pattern

    1101100011101100

:

    d1 $ struct (binaryN 16 55532) $ sound "bd"

# ascii

[Type](/wiki/Type_signature "wikilink"):

    ascii :: Pattern String -> Pattern Bool

Turns characters into 8-bit binary patterns, using their ASCII encoding.
E.g. the letter 'a' give the binary pattern

    01100001

.

    d1 $ struct (ascii "<[a b] [c d] [e f] [g h]>") $ sound "bd" # speed 2
