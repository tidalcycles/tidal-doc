---
title: cat
permalink: wiki/cat/
layout: wiki
tags:
 - Functions
---

<languages/> <translate> [Type](/wiki/Type_signature "wikilink"):

    cat :: [Pattern a] -> Pattern a

**cat**, (also known as

    slowcat

, to match with

    fastcat

defined below) concatenates a list of patterns into a new pattern; each
pattern in the list will maintain its original duration. For example:

    d1 $ cat [sound "bd*2 sn", sound "arpy jvbass*2"]

    <!--T:4-->
    d1 $ cat [sound "bd*2 sn", sound "arpy jvbass*2", sound "drum*2"]

    <!--T:5-->
    d1 $ cat [sound "bd*2 sn", sound "jvbass*3", sound "drum*2", sound "ht mt"]

# fastcat

[Type](/wiki/Type_signature "wikilink"):

    fastcat :: [Pattern a] -> Pattern a

**fastcat** works like

    cat

above, but squashes all the patterns to fit a single cycle. Examples:

    d1 $ fastcat [sound "bd*2 sn", sound "arpy jvbass*2"]

    <!--T:9-->
    d1 $ fastcat [sound "bd*2 sn", sound "arpy jvbass*2", sound "drum*2"]

    <!--T:10-->
    d1 $ fastcat [sound "bd*2 sn", sound "jvbass*3", sound "drum*2", sound "ht mt"]

# timeCat

[Type](/wiki/Type_signature "wikilink"):

    timeCat :: [(Time, Pattern a)] -> Pattern a

**timeCat** is like **fastcat** except that you provide proportionate
sizes of the patterns to each other for when they're concatenated into
one cycle. The larger the value in the list, the larger relative size
the pattern takes in the final loop. If all values are equal then this
is equivalent to **fastcat**, e.g. the following two code fragments are
equivalent.

    d1 $ fastcat [s "bd*4", s "hh27*8", s "superpiano" # n 0]

    d1 $ timeCat [(1, s "bd*4"),
                  (1, s "hh27*8"),
                  (1, s "superpiano" # n 0)]

**See also: [append](append "wikilink"),
[fastAppend](append#fastAppend "wikilink")**

</translate>
