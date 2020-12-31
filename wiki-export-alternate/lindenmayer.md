---
title: lindenmayer
permalink: wiki/lindenmayer/
layout: wiki
---

[Type](/wiki/Type_signature "wikilink"):

     Num b => Int -> String -> String -> [b] 

**lindenmayer** takes an integer `b`, a Lindenmayer system rule set and
an initiating string as input in order to generate an L-system tree
string of `b` iterations. It can be used in conjunction with a

    step

function to convert the generated string into a playable pattern.

For example:

    d1 $ slow 16 $ sound $ step' ["feel:0", "sn:1", "bd:0"]
    (take 512 $ lindenmayer 5 "0:1~~~,1:0~~~2~~~~~0~~~2~,2:2~1~,~:~~1~"
    "0")

... generates an L-system with initiating string

    "0"

and maps it onto a list of samples.

Complex L-system trees with many rules and iterations can sometimes
result in unwieldy strings. Using

     take n 

to only use the first `n` elements of the string, along with a

     slow 

function, can make the generated values more manageable.
