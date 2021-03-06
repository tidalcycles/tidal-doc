---
title: Custom OSC - pre 1.5.0/en
permalink: wiki/Custom_OSC_-_pre_1.5.0/en/
layout: wiki
---

<languages/> *Note the below requires at least version 1.0.6 of
tidalcycles to be installed*

It's possible to define your own Open Sound Control messages, to target
software other than SuperDirt or Dirt. Here's some examples:

      customTarget = OSCTarget {oName = "MyStrangeSoftware", -- Give your target a name
                                oAddress = "127.0.0.1", -- the target network address
                                oPort = 5050, -- the target network port
                                oPath = "/trigger/something", -- the OSC path
                                oShape = Nothing, -- The 'shape' - see below
                                oLatency = 0.02, -- the latency (to smooth network jitter)
                                oPreamble = [], -- Some fixed data to put at the start of messages
                                oTimestamp = BundleStamp -- The style of timestamp
                               }

      anotherTarget :: OSCTarget
      anotherTarget = OSCTarget {oName = "Another one",
                                 oAddress = "127.0.0.1",
                                 oPort = 7771,
                                 oPath = "/play",
                                 oShape = Just [("note", Nothing),
                                                ("distortion", Just $ VF 0),
                                                ("loops", Just $ VI 1),
                                                ("vowel", Just $ VS "a"),
                                                ("sec", Just $ VI 0),
                                                ("usec", Just $ VI 0)
                                          ],
                                 oLatency = 0.02,
                                 oPreamble = [],
                                 oTimestamp = MessageStamp
                                }

In the first example above,

    BundleStamp

causes the message to be sent ahead of time in batches (at the rate
defined by the

    cFrameTimespan

config setting). Each OSC message will be placed inside a timestamped
bundle. In this case, it's up to the receiving client to schedule
accordingly.

The second example above instead uses

    MessageStamp

, which is similar but instead of placing the message in a bundle, the
timestamp is added as two integer values - sec and usec giving the
number of seconds and microseconds since the UNIX epoch.

Note also that the first example doesn't give an oShape. This means that
tidal will send whatever parameters you use in the pattern. It will do
this as named parameters, that is, each parameter will be preceded by
the name of the parameter, as a string.

The second example does give an oShape, as a list of names and default
values. Note that the "s" control parameter doesn't have a default
value. This means that OSC messages won't get sent unless the "s"
control is defined in the pattern.

# Using a target

Once you've defined your target, you can use it like this:

    tidal <- startTidal customTarget defaultConfig

    let p = streamReplace tidal

    p 1 $ s "bd sn" # vowel "a"

If you want to send messages to more than one target at once, you can do
it like this:

    tidal <- startMulti [customTarget, anotherTarget] defaultConfig

    let p = streamReplace tidal

    p 1 $ s "bd sn" # vowel "a"

See the standard
[BootTidal.hs](https://github.com/tidalcycles/Tidal/blob/master/BootTidal.hs)
for how the usual functions for interacting with tidal are defined.

## Example with FAUST

Let's make the [Simple
Example](https://faust.grame.fr/doc/manual/index.html#simple-example)
noise generator from the FAUST manual work with TidalCycles. (Please be
careful, loud noise can destroy your speakers or hearing.) Compile it as
explained so it will listen for OSC messages on port 5510. The matching
TidalCycles `OSCTarget` is this:

    OSCTarget {oName = "Noise", oAddress = "127.0.0.1", oPort = 5510,
      oPath = "/noise/level", oShape = Just [("level", Just $ VF 0)],
      oLatency = 0.02, oPreamble = [], oTimestamp = MessageStamp}

In the second line the OSC message is defined.

To make `level` usable like usual also define

    let level = pF "level"

Now if you run

    d1 $ level "0.5 1" --let the level jump between -6 and 0 dBFS.

the resulting OSC message is equivalent to running

    $ oscsend localhost 5510 "/noise/level" f 0.5
    $ sleep 1
    $ oscsend localhost 5510 "/noise/level" f 1

on a command line.

# Debugging

One way to debug OSC is to use a packet sniffer like
[wireshark](https://www.wireshark.org/). You can put "osc" in the filter
field (no double quotes) to filter out everything except OSC packets. If
you click on an OSC network packet and expand fields you can find a
nicely formatted representation of your OSC message.
