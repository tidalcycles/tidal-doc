---
title: Custom OSC
permalink: wiki/Custom_OSC/
layout: wiki
---

**The following is where in-development documentation will appear for
TidalCycles 1.5.0 and later. For older versions, please see [Custom OSC
- pre 1.5.0](/wiki/Custom_OSC_-_pre_1.5.0 "wikilink").**

Open Sound Control (OSC) is a standard network protocol, ostensibly
designed for music, but it's really just an easy way to send numbers and
other data across a network. A range of live coding and other systems
including DAWs (Digital Audio Workstations), visualisers and mixers are
compatible with OSC.

Really the one and only job of TidalCycles is to send patterned OSC
messages, most often to the SuperDirt audio framework. It's fairly
straightforward to configure Tidal to send OSC to another system. It
involves specifying where messages should be sent to (the *target*) -
and the structure of the OSC data that is sent (the *shape* or *format*
of the message).

## Defining a 'Target'

First, define a target:

    let target =
          Target {oName = "visualiser",   -- A friendly name for the target (only used in error messages)
                  oAddress = "localhost", -- The target's network address, normally "localhost"
                  oPort = 5050,           -- The network port the target is listening on
                  oLatency = 0.2,         -- Additional delay, to smooth out network jitter/get things in sync
                  oSchedule = Live,       -- The scheduling method - see below
                  oWindow = Nothing       -- Not yet used
                 }

The scheduling method for

    oSchedule

can be one of:

-   Live

    \- causes Tidal to schedule messages so that they are sent out at
    the 'right' time, minus the oLatency value. This is the simplest
    approach, that will work well in most cases.

-   Pre BundleStamp

    \- sends each OSC message wrapped in an OSC 'bundle' with a bundle
    timestamp. The bundled messages will be sent out once per frame in
    batches, but ahead of time (according to the oLatency configuration
    value). Tidal doesn't attempt to send them out with 'correct'
    timing, instead the target is expected schedule them accurately.
    This is more work for the target, but is potentially more accurate
    than the above, as potential network/processing jitter can be
    avoided.

-   Pre MessageStamp

    \- as with BundleStamp above, but the timestamp is added to the OSC
    message itself, filling in the two integer fields "sec" and "usec".
    You have to explicitly include these in the argument list of your
    osc format (see later for an example).

## Defining OSC message structure - as an argument list

Next, define the structure of the OSC message. It's worth first spending
a bit of time [familiarising yourself with the OSC
spec](http://opensoundcontrol.org/spec-1_0). There are two ways to
structure the OSC messages that Tidal sends. Either as an argument list,
or as name-value pairs.

The argument list approach is most common. It looks like this:

    let oscplay = OSC "/play" $ ArgList [("s", Nothing),
                                         ("vowel", Just $ VS "a"),
                                         ("pan", Just $ VF 0.5),
                                         ("cut", Just $ VI 1),
                                         ("intensity", Just $ VI 0)
                                       ]

To define the OSC structure, you start with

    OSC

, followed by the OSC "address pattern", in this case "/play". Then you
list the message arguments, in order. Each argument is given as a
'tuple', containing the name of the parameter, and its default value.

In the above example, the first parameter called "s" doesn't have a
default, indicated by the keyword

    Nothing

. This means that if no

    s

parameter is given by a pattern, no OSC message will be sent.

The other arguments in the example have defaults indicated by the
keyword

    Just

, followed by the type of the argument and its default value. VS gives a
default as a string, VF as a floating point number, and VI as an
integer. Other available types are VB for true/false boolean values
(which are converted to 1 / 0 integer values in the message) and VX for
binary 'blobs'. If one or more of these arguments-with-defaults aren't
present in a pattern, the message will still be sent with these default
values.

If you are using

    Pre MessageStamp

, you will need to add the

    sec

and

    usec

message parameters in order for them to be sent:

    let oscplay = OSC "/play" $ ArgList [("s", Nothing),
                                         ("vowel", Just $ VS "a"),
                                         ("pan", Just $ VF 0.5),
                                         ("cut", Just $ VI 1),
                                         ("intensity", Just $ VI 0),
                                         ("sec", Just $ VF 0),
                                         ("usec", Just $ VF 0)
                                       ]

As well as

    sec

and

    usec

, there are three other parameters that Tidal will always fill in if
present;

    cps

(cycles per second),

    cycle

(the start of the event in cycles) and

    delta

(the duration of the event in cycles). So add those too, if you want
that information to be sent to the target:

    let oscplay = OSC "/play" $ ArgList [("s", Nothing),
                                         ("vowel", Just $ VS "a"),
                                         ("pan", Just $ VF 0.5),
                                         ("cut", Just $ VI 1),
                                         ("intensity", Just $ VI 0),
                                         ("sec", Just $ VF 0),
                                         ("usec", Just $ VF 0),
                                         ("cps", Just $ VF 0),
                                         ("cycle", Just $ VF 0),
                                         ("delta", Just $ VF 0)
                                       ]

## Named parameters

Instead of giving an argument list as above, you can specify named
parameters like this:

    let oscplay = OSC "/play" Named {required = ["s"]}

With such a definition, all parameters in a pattern will be sent to the
target. Instead of having fixed positions in a message as with an
argument list, the parameters will be be in an arbitrary order, but as
name-value pairs. That is, each parameter will be prefixed by an
additional string parameter, giving its name. As you can see in the
example, a list of 'required' parameters is given - unless all of the
parameters named in this list are present in an patterned event, it will
not be sent.

## Defining additional parameters

Many parameters are defined in
[Sound.Tidal.Params](https://github.com/tidalcycles/Tidal/blob/master/src/Sound/Tidal/Params.hs),
and available to a Tidal session. If you want to send parameters which
aren't already defined, you can define them yourself. For example
'intensity' used above needs to be defined, like this:

    let intensity = pF "intensity"

## Mapping message structures to targets

The final thing that needs defining, is a mapping between targets and
the OSC message structures they accept. In this case there's only one
target that accepts a single kind of OSC message, so it's simple:

    let oscmap = [(target, [oscplay])]

## Starting and sending patterns to the stream

Then you can start a 'stream' for turning patterns into OSC like this:

    stream <- startStream defaultConfig oscmap

And start sending a pattern like this:

    streamReplace stream 1 $ s "hello" # cut 1 # intensity 3

## Shortcuts

You can define some shortcuts like this:

    let x1 = streamReplace stream 1
        x2 = streamReplace stream 2
        x3 = streamReplace stream 3
        x4 = streamReplace stream 4

Then this will work:

    x1 $ s "hello" # cut 1 # intensity 3

This is much like how d1, d2 etc are defined in BootTidal.hs . Refer to
the [the default BootTidal.hs
file](https://github.com/tidalcycles/Tidal/blob/master/BootTidal.hs) to
see how the other tidal functions are normally defined.

## Summary

Here's all that code together:

    let target =
          Target {oName = "visualiser",   -- A friendly name for the target (only used in error messages)
                  oAddress = "localhost", -- The target's network address, normally "localhost"
                  oPort = 5050,           -- The network port the target is listening on
                  oLatency = 0.2,         -- Additional delay, to smooth out network jitter/get things in sync
                  oSchedule = Live,       -- The scheduling method - see below
                  oWindow = Nothing       -- Not yet used
                 }
        oscplay = OSC "/play" $ ArgList [("s", Nothing),
                                         ("vowel", Just $ VS "a"),
                                         ("pan", Just $ VF 0.5),
                                         ("volume", Just $ VF 1),
                                         ("cut", Just $ VI 1),
                                         ("intensity", Just $ VI 0)
                                       ]
        intensity = pF "intensity"
        oscmap = [(target, [oscplay])]


    stream <- startStream defaultConfig oscmap

    let x1 = streamReplace stream 1
        x2 = streamReplace stream 2
        x3 = streamReplace stream 3
        x4 = streamReplace stream 4

# Multiple targets and messages

It's possible to pattern multiple OSC messages and send them to multiple
targets, from the same 'stream'. For example to make a stream that sends
both to the above target and to superdirt, you could do this:

    let oscmap = [(target, [oscplay]),
                  (superdirtTarget, [superdirtShape])
                 ]

    stream <- startStream defaultConfig oscmap

    d = streamReplace stream

    d 1 $ s "bd"

The \`bd\` above will be sent to both \`target\` and
\`superdirtTarget\`.

# Complex targets with multiple message formats

Some OSC targets are more complicated, accept multiple OSC formats and
also specifying data in the osc 'address pattern'.

Lets take the
[ASCII-Simple-Video-Synth](https://github.com/zarquin/ASCII-Simple-Video-Synth)
as an example. Here's the Tidal specification for it:

    let target = Target {oName = "ascii",
                         oAddress = "127.0.0.1",
                         oPort = 5050,
                         oLatency = 0.2,
                         oWindow = Nothing,
                         oSchedule = Live
                        }
        formats = [OSC "/{asccolour}/speed"  $ ArgList [("ascspeed", Nothing)],
                   OSC "/{asccolour}/mode"   $ ArgList [("ascmode", Nothing)],
                   OSC "/{asccolour}/offset" $ ArgList [("ascoffset", Nothing)],
                   OSC "/{asccolour}/scale"  $ ArgList [("ascscale", Nothing)],
                   OSC "/shape/sides" $ ArgList [("ascsides", Nothing)],
                   OSC "/shape/size"  $ ArgList [("ascsize", Nothing)],
                   OSC "/shape/xinc"  $ ArgList [("ascxinc", Nothing)],
                   OSC "/shape/yinc"  $ ArgList [("ascyinc", Nothing)]
                  ]
        ascspeed  = pI "ascspeed"
        ascmode   = pI "ascmode"
        ascoffset = pI "ascoffset"
        ascscale  = pI "ascscale"
        ascsides  = pI "ascsides"
        ascsize   = pI "ascsize"
        ascxinc   = pI "ascxinc"
        ascyinc   = pI "ascyinc"
        asccolour = pS "asccolour"
        oscmap = [(target, formats)]

    stream <- startStream defaultConfig oscmap

    streamReplace stream 1 $ asccolour "blue green red"
      # ascspeed "38 15"
      # ascsides 3
      # ascoffset 10
      # ascxinc 10
      # ascyinc 10
      # ascmode 0
      # ascsize 30

This software accepts a number of address patterns, some of which
include the colour which is being addressed. To make this colour
patternable, it is given a name in curly braces, "{asccolour}". This is
then patternable with the 'ascColour' parameter in the tidal pattern.

When you assign multiple OSC message formats to a stream, it's a good
idea to make sure that every format has at least one unique, non-default
argument. This ensures that messages will only be sent when the
non-default arguments are set in the pattern. Otherwise, all the formats
will be sent for every patterned event.

# Debugging

One way to debug OSC is to use a packet sniffer like
[wireshark](https://www.wireshark.org/). You can put "osc" in the filter
field (no double quotes) to filter out everything except OSC packets. If
you click on an OSC network packet and expand fields you can find a
nicely formatted representation of your OSC message.
