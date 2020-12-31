---
title: grp
permalink: wiki/grp/
layout: wiki
---

[Type](/wiki/Type "wikilink"):

    [String -> ControlMap] -> Pattern String -> ControlPattern

**grp** groups together parameters into a single string, using **:** as
a list separator.

    adr = grp [mF "attack", mF "decay", mF "release"]

    d1 $ sound "arpy" # adr "0.25:0.5:1"

If you have custom parameters you can also create a group for them:

    myps = pS "mypatstring" -- pattern string
    mypf = pF "mypatfloat"  -- pattern float
    mypi = pI "mypatint"    -- pattern int

    myp = grp [mS "mypatstring", mF "mypatfloat", mI "mypatint"]

    d1 $ myp "mystring:0.5:1"
