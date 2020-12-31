---
title: cat/en
permalink: wiki/cat/en/
layout: wiki
tags:
 - Functions
---

<languages/> [Type](/wiki/Type_signature "wikilink"):

    cat :: [Pattern a] -> Pattern a

**cat**, (also known as

    slowcat

, to match with

    fastcat

defined below) concatenates a list of patterns into a new pattern; each
pattern in the list will maintain its original duration. For example:

    d1 $ cat [sound "bd*2 sn", sound "arpy jvbass*2"]

    d1 $ cat [sound "bd*2 sn", sound "arpy jvbass*2", sound "drum*2"]

    d1 $ cat [sound "bd*2 sn", sound "jvbass*3", sound "drum*2", sound "ht mt"]

# fastcat

[Type](/wiki/Type_signature "wikilink"):

    fastcat :: [Pattern a] -> Pattern a

**fastcat** works like

    cat

above, but squashes all the patterns to fit a single cycle. Examples:

    d1 $ fastcat [sound "bd*2 sn", sound "arpy jvbass*2"]

    d1 $ fastcat [sound "bd*2 sn", sound "arpy jvbass*2", sound "drum*2"]

    d1 $ fastcat [sound "bd*2 sn", sound "jvbass*3", sound "drum*2", sound "ht mt"]

**See also: [append](append "wikilink"),
[fastAppend](append#fastAppend "wikilink")**
