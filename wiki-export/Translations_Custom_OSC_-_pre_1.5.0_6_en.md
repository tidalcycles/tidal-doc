---
title: Translations:Custom OSC - pre 1.5.0/6/en
permalink: wiki/Translations:Custom_OSC_-_pre_1.5.0/6/en/
layout: wiki
---

In the first example above,

    BundleStamp

causes the message to be sent ahead of time in batches (at the rate
defined by the

    cFrameTimespan

config setting). Each OSC message will be placed inside a timestamped
bundle. In this case, it's up to the receiving client to schedule
accordingly.
