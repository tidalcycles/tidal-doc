---
title: Translations:All effects and synths/39/en
permalink: wiki/Translations:All_effects_and_synths/39/en/
layout: wiki
---

A simplistic pitch-raising algorithm. It's not meant to sound natural;
its sound is reminiscent of some weird mixture of filter, ring-modulator
and pitch-shifter, depending on the input. The algorithm works by
cutting the signal into fragments (delimited by upwards-going
zero-crossings) and squeezing those fragments in the time domain (i.e.
simply playing them back faster than they came in), leaving silences
inbetween. All the parameters apart from memlen can be modulated.
