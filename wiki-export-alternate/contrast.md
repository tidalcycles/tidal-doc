---
title: contrast
permalink: wiki/contrast/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

    contrast :: (ControlPattern -> ControlPattern) -> (ControlPattern -> ControlPattern) -> ControlPattern -> ControlPattern -> ControlPattern

**contrast** is like a if-else-statement over patterns. For

    contrast f g p

you can think of

    f

as the true-branch,

    g

as the false branch, and

    p

as the test.

For contrast, you can use any control pattern as a test of equality:

    n "<0 1>"

,

    speed "0.5"

, or things like that. This lets you choose specific properties of the
pattern you're transforming for testing, like in the following example

      d1 $ contrast (|+ n 12) (|- n 12) (n "c") $ n (run 4) # s "superpiano"

where every note that isn't middle-c will be shifted down an octave but
middle-c will be shifted up to c5.

Since the test given to

    contrast

is also a pattern, you can do things like have it alternate between
options

    d1 $ contrast (|+ n 12) (|- n 12) (s "<superpiano superchip>") $ s "superpiano superchip" # n 0

If you listen to this you'll hear that which instrument is shifted up
and which instrument is shifted down alternates between cycles.

**See also: [fix](fix "wikilink"),[unfix](unfix "wikilink")**
