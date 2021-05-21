---
title: Quick example for transition
permalink: wiki/Quick_example_for_transition/
layout: wiki
tags:
 - Transitions
---

Start with a pattern on `d1`:

    d1 $ s "bd(3,8) drum*4"

You can then perform a crossfade transition to a new pattern using
`xfade`:

    xfade 1 $ s "arpy*8" # n (run 8)

Note that the argument we give to `xfade` is "1", which means to apply
the transition to the pattern that is running on `d1`.

You can use transitions on any `d` pattern in Tidal:

    d3 $ s "bd(3,8)"

    xfade 3 $ s "arpy*4"

You can also apply a transition to any arbitrary pattern name:

    p "drums" $ s "bd(3,8) drum*4"

    xfade "drums" $ s "arpy*8" # n (run 8)

Most of the transitions also have an "In" variant, where you can specify
the number of cycles that the transition takes to complete:

    xfadeIn 1 8 $ s "arpy*8" # n (run 8)

# [List of Transitions](/wiki/List_of_Transitions "wikilink")

-   [anticipate](anticipate "wikilink"),
    [anticipateIn](anticipateIn "wikilink")
-   [clutch](clutch "wikilink"), [clutchIn](clutchIn "wikilink"):
    gradually morphs from one pattern to another.
-   [interpolate](interpolate "wikilink"),
    [interpolateIn](interpolateIn "wikilink")
-   [jump](jump "wikilink"), [jumpIn](jumpIn "wikilink"),
    [jumpIn'](jumpIn' "wikilink"), [jumpMod](jumpMod "wikilink")
-   [histpan](histpan "wikilink")
-   [mortal](mortal "wikilink")
-   [xfade](xfade "wikilink"), [xfadeIn](xfadeIn "wikilink"): applies a
    crossfade, and fades one pattern out while fading a new pattern in.
-   [wait](wait "wikilink"), [waitT](waitT "wikilink")
-   [wash](wash "wikilink"), [washIn](washIn "wikilink")
