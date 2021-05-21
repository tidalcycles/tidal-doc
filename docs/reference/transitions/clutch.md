---
title: clutch
permalink: wiki/clutch/
layout: wiki
tags:
 - Transitions
---

[Type](/wiki/Type_signatures "wikilink"):

    clutch :: Time -> [Pattern a] -> Pattern a 

**clutch** degrades the current pattern while undegrading the next. The
argument provided to \`clutch\` is the ID of the pattern that \`clutch\`
creates or the pattern that \`clutch\` is replacing.

This is like [xfade](xfade "wikilink") but not by gain of samples but by
randomly removing events from the current pattern and slowly adding back
in missing events from the next one.

    d1 $ sound "bd(3,8)"

    clutch 1 $ sound "[hh*4, odx(3,8)]"

**clutch** takes two cycles for the transition, essentially this is
*[clutchIn](clutchIn "wikilink") 2*.
