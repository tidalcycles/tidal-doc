---
title: inv
permalink: wiki/inv/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

``` haskell
inv :: Functor f => f Bool -> f Bool
```

**inv** inverts a collection of Boolean values, such as

``` haskell
Pattern Bool
```

, thus turning

    True

into

    False

and visa-versa.

This is particularly useful when using functions such as
[struct](struct "wikilink") that use a pattern of Booleans to control
another pattern.

The following example gives a bass drum and a hi-hat on alternate beats
by using

    inv

along with

    struct

    let pat = "[t f]*4"

    d1 $ struct pat $ s "bd"

    d2 $ struct (inv pat) $ s "hh27"
