---
title: trigger
permalink: wiki/trigger/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

``` haskell
trigger :: Show a => a -> Pattern b -> Pattern b
```

The **trigger** function causes the pattern passed to it to be 'reset'
every time its evaluated. In the following example, the gain envelope
resets each time the pattern is run:

    d1 $ sound "bd*2 cp:4(5,8,<0 2>)"
      # gain (trigger 1 $ slow 2 envL)

Or similarly with a dj filteR:

    d1 $ sound "bd*2 cp:4(5,8,<0 2>)"
      # djf (trigger 1 $ range 0.1 0.9 $ slow 2 envL)

The first parameter is the id of the pattern that does the triggering.
In the above examples, it's

    1

, so in this case

    d1

is triggering itself.

In this example, running the

    d2

pattern resets the envelope in the

    d1

pattern:

    d1 $ sound "bd*2 cp:4(5,8,<0 2>)"
      # djf (trigger 2 $ range 0.1 0.9 $ slow 2 envL)

    d2 $ sound "~ arpy*2"

Note that if you manipulate time after a trigger, e.g. with
[fast](fast "wikilink") or [slow](slow "wikilink"), then you will also
be manipulating the trigger point and the results will probably not be
what you intended. For example the

    fast

in the following will move the trigger point into the past, so the
envelope is immediately opened fully:

    d1 $ fast 2 $ sound "bd*2 cp:4(5,8,<0 2>)"
      # djf (trigger 1 $ range 0.1 0.9 $ slow 2 envL)

The above can be fixed by only applying

    fast

to the part of the pattern you want to speed up:

    d1 $ (fast 2 $ sound "bd*2 cp:4(5,8,<0 2>)")
      # djf (trigger 1 $ range 0.1 0.9 $ slow 2 envL)
