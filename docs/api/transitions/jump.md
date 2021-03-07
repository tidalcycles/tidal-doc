---
title: jump
permalink: wiki/jump/
layout: wiki
tags:
 - Transitions
---

`jump` is essentially the *no transition*-transition. It jumps directly
into the given pattern. The variants [jumpIn](jumpIn "wikilink"),
[jumpIn'](jumpIn' "wikilink") and [jumpMod](jumpMod "wikilink") provide
more useful capabilities.

**Example:** Say you have

    d1 $ sound "hh*4"

then both of the following lines will have the same effect when
evaluated:

    d1 $ sound "hh*8"
    jump 1 $ sound "hh*8" --`1` to change the pattern in `d1`

**See also:** [jumpIn](jumpIn "wikilink"),
[jumpIn'](jumpIn' "wikilink"), [jumpMod](jumpMod "wikilink")
