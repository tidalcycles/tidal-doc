---
title: Translations:Custom OSC - pre 1.5.0/24/en
permalink: wiki/Translations:Custom_OSC_-_pre_1.5.0/24/en/
layout: wiki
---

Now if you run

    d1 $ level "0.5 1" --let the level jump between -6 and 0 dBFS.

the resulting OSC message is equivalent to running

    $ oscsend localhost 5510 "/noise/level" f 0.5
    $ sleep 1
    $ oscsend localhost 5510 "/noise/level" f 1

on a command line.
