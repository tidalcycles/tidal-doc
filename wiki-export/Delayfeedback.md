---
title: delayfeedback
permalink: wiki/delayfeedback/
layout: wiki
tags:
 - Control Functions
---

[Type](/wiki/Type_signature "wikilink"):

    delayfeedback :: Pattern Double -> ControlPattern

**delayfeedback** turns a number pattern into a control pattern that
changes the feedback level of the delay effect. The
[delay](delay "wikilink") function is required in order for the
`delayfeedback` function to have any effect.

You can use [delayfb](delayfb "wikilink") as a shortcut for
**delayfeedback**.

    d1 $ s "drum jvbass [cp arpy] jvbass:1" # delayfeedback "[0.1 0.5 0.9]/6" # delay "0.5"
