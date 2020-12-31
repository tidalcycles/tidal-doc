---
title: stack
permalink: wiki/stack/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

    stack :: [Pattern a] -> Pattern a

**stack** takes a list of patterns and combines them into a new pattern
by layering them up - effectively playing all of the patterns in the
list simultaneously.

    d1 $ stack [ 
      sound "bd bd*2", 
      sound "hh*2 [sn cp] cp future*4", 
      sound "arpy" +| n "0 .. 15"
    ]

This is particularly useful if you want to apply a function or synth
control pattern to multiple patterns at once:

    d1 $ whenmod 5 3 (striate 3) $ stack [ 
      sound "bd bd*2", 
      sound "hh*2 [sn cp] cp future*4", 
      sound "arpy" +| n "0 .. 15"
    ] # speed "[[1 0.8], [1.5 2]*2]/3"

# overlay

[Type](/wiki/Type_signature "wikilink"):

    overlay :: Pattern a -> Pattern a -> Pattern a

The **overlay** function is similar to [cat](cat "wikilink") described
above, but combines two patterns, rather than a list of patterns. For
example:

    d1 $ sound (overlay "bd sn:2" "cp*3")

...is the same as...

    d1 $ sound "[bd sn:2, cp*3]"

# &lt;&gt;

[Type](/wiki/Type_signature "wikilink"):

    (<>) :: Pattern a -> Pattern a -> Pattern a

**&lt;&gt;** is the same as [overlay](cat#overlay "wikilink") described
above but in operator form. For example:

    d1 $ sound ("bd sn:2" <> "cp*3")

**See also: [cat](cat "wikilink")**
