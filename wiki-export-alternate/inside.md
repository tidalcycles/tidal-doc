---
title: inside
permalink: wiki/inside/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signatures "wikilink"):

    inside :: Pattern Time -> (Pattern a -> Pattern b) -> Pattern a -> Pattern b

**inside** carries out an operation 'inside' a cycle.

For example, while

    rev "0 1 2 3 4 5 6 7"

is the same as

    "7 6 5 4 3 2 1 0"

,

    inside 2 rev "0 1 2 3 4 5 6 7"

gives

    "3 2 1 0 7 6 5 4"

.

What this function is really doing is 'slowing down' the pattern by a
given factor, applying the given function to it, and then 'speeding it
up' by the same factor. In other words, this:

    inside 2 rev "0 1 2 3 4 5 6 7"

Is doing this:

    fast 2 $ rev $ slow 2 "0 1 2 3 4 5 6 7"

.. so rather than whole cycles, each half of a cycle is reversed.

# outside

[Type](/wiki/Type_signatures "wikilink"):

    outside :: Pattern Time -> (Pattern a -> Pattern b) -> Pattern a -> Pattern b

**outside** is the inverse of the **inside** function. **outside**
applies its function outside the cycle.

Say you have a pattern that takes 4 cycles to repeat and apply the
\`rev\` function.

     d1 $ rev $ cat [s "bd bd sn",s "sn sn bd", s"lt lt sd", s "sd sd bd"] 

The above generates:

      d1 $ rev $ cat [s "sn bd bd",s "bd sn sn", s "sd lt lt", s "bd sd sd"] 

However if you apply \`outside\`:

     d1 $ outside 4 (rev) $ cat [s "bd bd sn",s "sn sn bd", s"lt lt sd", s "sd sd bd"]  

The result is :

      d1 $ rev $ cat [s "bd sd sd", s "sd lt lt", s "sn sn bd", s "bd bd sn"] 

Notice the whole idea has been reversed.

What this function is really doing is 'speeding up' the pattern by a
given factor, applying the given function to it, and then 'slowing it
down' by the same factor. In other words, this:

     d1 $ slow 4 $ rev $ fast 4 $ cat [s "bd bd sn",s "sn sn bd", s"lt lt sd", s "sd sd bd"]  

This compresses the idea into a single cycle before \`rev\` operates and
then slows it back to the original speed.
