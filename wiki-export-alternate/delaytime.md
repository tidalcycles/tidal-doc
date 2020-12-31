---
title: delaytime
permalink: wiki/delaytime/
layout: wiki
tags:
 - Control Functions
---

[Type](/wiki/Type_signature "wikilink"):

    delaytime :: Pattern Double -> ControlPattern

**delaytime** turns a number pattern into a control pattern that changes
the length of the delay effect. The [delay](delay "wikilink") function
is required in order for `delaytime` to have any effect.

    d1 $ s "drum*4 [drum:1 drum:2/2]" # delaytime "<0 0.01 0.1 0.2 0.5>" # delay "0.5"

Interesting results can be achieved when applying a continuous function
to `delaytime`:

    d1 $ s "drum*4 [drum:1 drum:2/2]" # delaytime (range 0.01 0.3 $ slow 4 sine) # delay "0.5"

For clock synced delay, specify the `lock` parameter as 1 otherwise
delay defaults to unsynced. The below should fill the empty spaces in
the pattern with a ghost hit evenly between the specified samples.

    d1 $ s "bd sn" # delaytime 0.25 # delay "0.8" # lock 1

Changing the cycles per second and the delay will adjust itself.

    setcps 0.91

    d1 $ s "bd sn" # delaytime 0.25 # delay "0.8" # lock 1
