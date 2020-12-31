---
title: stitch
permalink: wiki/stitch/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

    Pattern Bool -> Pattern a -> Pattern a -> Pattern a

**stitch** uses the first (binary) pattern to switch between the
following two patterns. The resulting structure comes from the binary
pattern, not the source patterns. This differs from **sew** where the
resulting structure comes from the source patterns.

For example, the following uses a euclidean pattern to control CC0:

    d1 $ ccv (stitch "t(7,16)" 127 0) # ccn 0  # "midi"

See also [sew](sew "wikilink")
