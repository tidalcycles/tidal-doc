---
title: Translations:Controller Input/9/en
permalink: wiki/Translations:Controller_Input/9/en/
layout: wiki
---

The OSC message that Tidal expects has the path

    /ctrl

, and two values - the key and the value. The key can either be a string
or an integer (tidal will convert an integer to a string for you). The
value can be a string, integer or float. For example the OSC message

    /ctrl sf hello 0.4

, for a message to set the

    hello

control to

    0.4

.In this example

    sf

is the OSC typetag. It specifies that the first value is a (s)tring and
the second value is a(f)loat see [OSC
specs](http://opensoundcontrol.org/spec-1_0)
