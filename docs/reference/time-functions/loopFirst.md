---
title: loopFirst
permalink: wiki/loopFirst/
layout: wiki
tags:
 - Functions
 - Time Functions
---

[Type](/wiki/Type_signature "wikilink"):

    loopFirst :: Pattern a -> Pattern a

**loopFirst** is a function that takes a pattern and loops only the
first cycle of the pattern. For example, in the following code will
*only* play the bass drum sample.

    d1 $ loopFirst $ s "<<bd*4 ht*8> cp*4>"

This function combines with [sometimes](sometimes "wikilink") to insert
events from the first cycle randomly into subsequent cycles of the
pattern:

    d1 $ sometimes loopFirst $ s "<<bd*4 ht*8> cp*4>"
