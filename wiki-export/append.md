---
title: append
permalink: wiki/append/
layout: wiki
tags:
 - Functions
---

<languages/> <translate> [Type](/wiki/Type_signature "wikilink"):

    append :: Pattern a -> Pattern a -> Pattern a

**append** combines two patterns into a new pattern, where cycles
alternate between the first and second pattern.

    d1 $ append (sound "bd*2 sn") (sound "arpy jvbass*2")

It has the alias

    slowAppend

, in sympathy with [fastAppend](append#fastAppend "wikilink"), described
below.

# fastAppend

[Type](/wiki/Type_signature "wikilink"):

    fastAppend :: Pattern a -> Pattern a -> Pattern a

**fastAppend** works like [append](append "wikilink") described above,
but each pair of cycles from the two patterns are squashed to fit a
single cycle.

    d1 $ fastAppend (sound "bd*2 sn") (sound "arpy jvbass*2")

**See also: [cat](cat "wikilink"), [fastcat](cat#fastcat "wikilink")**

</translate>
