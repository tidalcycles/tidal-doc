---
title: mask
permalink: wiki/mask/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

    mask :: Pattern Bool -> Pattern a -> Pattern a

**mask** takes a boolean (aka binary) pattern and 'masks' another
pattern with it. That is, events are only carried over if they match
within a 'true' event in the binary pattern.

For example consider this kind of messy rhythm without any rests.

    d1 $ sound (cat ["sn*8", "[cp*4 bd*4, hc*5]"]) # n (run 8)

If we apply a mask to it

    d1 $ mask "t t t ~ t t ~ t"
      $ s (cat ["sn*8", "[cp*4 bd*4, bass*5]"])
      # n (run 8) 

Due to the use of [cat](cat "wikilink") here, the same mask is first
applied to

    "sn*8"

and in the next cycle to

    "[cp4 bd4, hc*5]"

.

You could achieve the same effect by adding rests within the cat
patterns, but mask allows you to do this more easily. It kind of keeps
the rhythmic structure and you can change the used samples
independently, e.g.

    d1 $ mask "1 ~ 1 ~ 1 1 ~ 1"
      $ s (cat ["can*8", "[cp*4 sn*4, jvbass*16]"])
      # n (run 8) 

See [struct](struct "wikilink") for more examples for dealing with
binary patterns.
