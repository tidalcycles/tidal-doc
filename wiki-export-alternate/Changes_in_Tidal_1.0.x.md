---
title: Changes in Tidal 1.0.x
permalink: wiki/Changes_in_Tidal_1.0.x/
layout: wiki
tags:
 - Reference
---

Under the hood, Tidal 1.0.0 is a major rewrite. If you're used to
previous versions, this will mostly be evident in terms of new
functionality. But there are some breaking changes too.

Below is a growing list of changes and additions. I
([User%3AYaxu](/wiki/User%3AYaxu "wikilink")) have tried to thank people who
have done/contributed towards things, apologies to those I've missed.
Things not marked are probably entirely my fault.

# Name changes, new functions, changed behaviour

-   The old
        scale

    has been renamed to [range](range "wikilink")

-   [scale](scale "wikilink") is now used to specify musical scale

-   protate

    and friends has been replaced with [rot](rot "wikilink")

-   New function [fix](fix "wikilink") for manipulating control patterns
    with matching control values

-   New function [mono](mono "wikilink") for making a pattern monophonic
    (thanks [bgold](https://github.com/bgold-cosmos/))

-   New function [smooth](smooth "wikilink") for turning a
    discrete/digital numerical pattern into a continuous/analog one, by
    interpolating between the values (thanks
    [bgold](https://github.com/bgold-cosmos/))

-   Chord names can now be put into numerical patterns, e.g.
        n "c'maj e'min"

    . The old

        chordP

    has been removed.

-   discretise

    is now known as [segment](segment "wikilink")

-   e

    is now known as [euclid](euclid "wikilink")

-   breakOut

    is now known as [arpeggiate](arpeggiate "wikilink")

-   Functions generally standardised into being 'slow', e.g.
    [scan](scan "wikilink") n will work over n cycles, not squeeze the
    whole buildup into a single cycle.

-   Functions that only worked on one numerical type generalised to work
    on any where it makes sense, e.g. [rand](rand "wikilink") can now be
    used as a pattern of time/rational values as well as double/floating
    point values (thanks [msp](https://github.com/msp/))

-   [select](select "wikilink") functions for choosing between patterns
    with a pattern of floats

-   [wchoose](wchoose "wikilink") weights no longer have to add up to 1

-   weave' is now known as [weaveWith](weaveWith "wikilink")

-   New [arp](arp "wikilink") function for arpeggiation

-   Easy ways to send [Custom OSC](/wiki/Custom_OSC "wikilink") to systems
    other than superdirt

-   The meaning of [stut](stut "wikilink") and
    [stutWith](stutWith "wikilink") parameters have changed to match
    each other.

# Interaction

-   [solo](solo "wikilink") now does a 'true' solo. I.e. there is now
    also [unsolo](unsolo "wikilink").
-   You can now run a cycle immediately, once, with
    [once](once "wikilink")
-   Experimental transition [interpolate](interpolate "wikilink") for
    merging between new and old values

# Other new features

<https://talk.lurk.org/channel/tidal>

-   Tidal now takes input from OSC and MIDI - see [Controller
    Input](/wiki/Controller_Input "wikilink")
    -   This means you can send numbers and strings into tidal to be
        used as control values, function parameters, or parsed sequences
-   'Show' instance for patterns (and control patterns) is now more
    readable
-   If you treat a control pattern as a number, you'll be manipulating
    the
        n

    control, e.g.

        (s "bd" # n "1 2") + 3

    will add 3 to both 1 and 2.
-   More parameters are patternable, e.g.
    [sometimesBy](sometimesBy "wikilink")
-   The parser can now produce binary (boolean) patterns where euclidean
    rhythms produce true and false values not, true and silence. Useful
    for use with e.g. [sew](sew "wikilink") and
    [struct](struct "wikilink")
-   Configuration is done via a boot script and not environment
    variables

# Documentation

-   Documentation has moved to the wiki you're looking at right now
    (thanks to many, including [kindohm](http://github.com/kindohm))
-   What we used to call a 'param pattern' is now called a 'control
    pattern'

# Tempo and scheduling changes

-   [setcps](/wiki/Interaction#Changing_tempo_with_setcps "wikilink") is now
    used to set a fixed tempo
-   Tempo can now be patterned, using [cps](cps "wikilink") as a control
    pattern

# Pattern structure

The way patterns are combined has been reworked:

-   The old 'structure comes from the left' adage no longer applies -
    you can now control where structure comes from

-   The behaviour of
        |+|

    ,

        |*|

    has changed.

-   #

    works the same as before, but is now an alias for

        >|

    , rather than

        |=|

    (which no longer exists).

# Regressions

-   tidal-midi is not currently working (but midi is still working great
    via superdirt)
-   tidalink is not currently working (should be fixed soon)
-   classic dirt is not currently supported (should also be fixed soon)

See [Combining pattern
structure](/wiki/Combining_pattern_structure "wikilink") for full info.

# Internal and dev changes

-   Switched to system.random for random number generation (thanks
    [d0kt0r0](https://github.com/d0kt0r0/)
-   MiniTidal moved into core tidal repo (thanks
    [d0kt0r0](https://github.com/d0kt0r0/))
-   Started on a unit test suite (thanks
    [vivid-synth](https://github.com/vivid-synth),
    [msp](https://github.com/msp/),
    [nini-faroux](https://github.com/nini-faroux) and co)
-   More lawful Applicative and Monad instances for Pattern
-   Definition of &lt;\* and \*&gt;, that work like &lt;\*&gt; but using
    the structure on the left or right
-   &lt;\*&gt; now uses structure on *both* sides
-   innerJoin and outerJoin for 'flattening' patterns of patterns -
    works like join but taking structure from the inner or outer pattern
    respectively.
-   Patterns are now flagged as either analog or digital
-   Tidal is generally a single process, multithreaded thing, rather
    than multi-process as before
-   The websocket tempo protocol has been replaced with an OSC based one
-   The modules have been extensively reorganised, e.g. Strategies no
    longer exists, but Pattern, Core, Control and UI do.
-   Compiles without warnings
-   Better stack support (thanks
    [tonyday567](https://github.com/tonyday567))
-   Fleshed out datatype structure (thanks
    [tonyday567](https://github.com/tonyday567))
-   Tidyier travis builds with more haskell versions tested (thanks
    [tonyday567](https://github.com/tonyday567))
-   New function [inv](inv "wikilink") for inverting a binary (boolean)
    pattern
-   Calculation is done based on hZ rather than calculations/cycle. By
    default it tidal runs at 20 calculations per second.
