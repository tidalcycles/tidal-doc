---
title: ifp
permalink: wiki/ifp/
layout: wiki
tags:
 - Functions
 - Higher-order functions
---

[Type](/wiki/Type_signature "wikilink"):

    ifp :: (Int -> Bool) -> (Pattern a -> Pattern a) -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a

**ifp** decides whether to apply one or another function depending on
the result of a test function, which is passed the current cycle as a
number. For example:

    d1 $ ifp ((== 0).(flip mod 2))
      (striate 4)
      (# coarse "24 48") $
      sound "hh hc"

This will apply

    striate 4

for every even cycle, and

    # coarse "24 48"

for every odd one.

Detail: The test function does not rely on anything tidal-specific, it
uses plain Haskell functionality for operating on numbers. That is, it
calculates the modulo of 2 of the current cycle which is either 0 (for
even cycles) or 1. It then compares this value against 0 and returns the
result, which is either True or False. This is what the first part of

    ifp

's type signature signifies (

    Int -> Bool

), a function that takes a whole number and returns either True or
False.
