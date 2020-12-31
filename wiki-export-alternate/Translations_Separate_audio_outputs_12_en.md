---
title: Translations:Separate audio outputs/12/en
permalink: wiki/Translations:Separate_audio_outputs/12/en/
layout: wiki
---

If your editor plugin (and therefore BootTidal.hs), then

    d1

will automatically be sent to orbit 0, d2 to orbit 1, and so on. Or you
can be explicit by using the orbit control, e.g.

    d1 $ sound "bd" # orbit 3
