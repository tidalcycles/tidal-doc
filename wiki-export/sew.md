---
title: sew
permalink: wiki/sew/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

    Pattern Bool -> Pattern a -> Pattern a -> Pattern a

**sew** Uses a pattern of boolean (true or false) values to switch
between two other patterns. For example the following will play the
first pattern for the first half of a cycle, and the second pattern for
the other half.

    d1 $ sound (sew "t f" "bd*8" "cp*8")

The above combines two patterns of strings, and passes the result to the
[sound](sound "wikilink") function. It's also possible to sew together
two control patterns, for example:

    d1 $ sew "t <f t> <f [f t] t>" (n "0 .. 15" # s "future") (s "cp:3*16" # speed saw + 1.2)

You can also use Euclidean rhythm syntax in the boolean sequence:

    d1 $ sew "t(11,16)" (n "0 .. 15" # s "future") (s "cp:3*16" # speed sine + 1.5)

See also [stitch](stitch "wikilink")
