---
title: Controller Input/en
permalink: wiki/Controller_Input/en/
layout: wiki
tags:
 - Reference
 - Tidal-1+
---

<languages/>

Tidal 1.0.0 now has support for external input, using the OSC protocol.
Here's a quick guide to getting it going, including using a simple
'bridge' for getting MIDI input working.

# Open Sound Control

If you just want to get MIDI input into tidal, you can skip to the [next
section](/wiki/Controller_Input#MIDI "wikilink").

With version 1.0.0 [installed](/wiki/Installation "wikilink") and
[configured](/wiki/Configuration "wikilink"), then by default Tidal will
automatically listen for external control messages over the OSC (Open
Sound Control) network protocol, on localhost (127.0.0.1), port 6010.

This is configurable - if you prefer it to listen to for example all
network interfaces, and port 6060 you can change your configuration to
this:

``` haskell
tidal <- startTidal superdirtTarget (defaultConfig {cCtrlAddr = "0.0.0.0", cCtrlPort = 6060})
```

If you prefer to switch off listening to controls all together, use this
instead:

``` haskell
tidal <- startTidal superdirtTarget (defaultConfig {cCtrlListen = False})
```

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
the second value is a (f)loat see [OSC
specs](http://opensoundcontrol.org/spec-1_0)

You could then use this control in a pattern like so:

``` haskell
d1 $ sound "bd" # speed (cF 1 "hello")
```

``` haskell
cF
```

is what you use for floating point controls. The second parameter

    1

is the default value, for when tidal hasn't received that control yet.
There is also

``` haskell
cS
```

for strings and

``` haskell
cI
```

for integers. For time values (for using e.g. as the first parameter of

``` haskell
fast
```

/

``` haskell
slow
```

), use

``` haskell
cT
```

. For ratios add

``` haskell
cR
```

# MIDI

To use MIDI, you don't have to worry about too much of the above, but
for now you do have to run something to convert MIDI into OSC. Here's
how to do that using SuperCollider. First, with Tidal (e.g. inside atom)
and SuperDirt already running, run the below code block in
supercollider:

    // Evaluate the block below to start the mapping MIDI -> OSC.
    (
    var on, off, cc;
    var osc;

    osc = NetAddr.new("127.0.0.1", 6010);

    MIDIClient.init;
    MIDIIn.connectAll;

    on = MIDIFunc.noteOn({ |val, num, chan, src|
        osc.sendMsg("/ctrl", num.asString, val/127);
    });

    off = MIDIFunc.noteOff({ |val, num, chan, src|
        osc.sendMsg("/ctrl", num.asString, 0);
    });

    cc = MIDIFunc.cc({ |val, num, chan, src|
        osc.sendMsg("/ctrl", num.asString, val/127);
    });

    if (~stopMidiToOsc != nil, {
        ~stopMidiToOsc.value;
    });

    ~stopMidiToOsc = {
        on.free;
        off.free;
        cc.free;
    };
    )

    // Evaluate the line below to stop it.
    ~stopMidiToOsc.value;

You should then be able to run a pattern such as the following, that
uses CC value 12:

    d1 $ sound "bd" # speed (cF 1 "12")

If you want to use MIDI in a pattern forming statement, you may find it
helpful to [segment](segment "wikilink") the input first, as the raw
pattern coming from your MIDI device will be at very high resolution.
This example takes only one value per cycle & remaps the value with the

    range

function:

    d1 $ sound "amencutup" + n (run (segment 1 $ range 1 16 $ cF 0 "32" ))

## Alternative: pure-data

The above SuperCollider instructions are most convenient if you're using
SuperDirt, but as an alternative you can use puredata to convert midi to
OSC. You can get puredata from <https://puredata.info/> (the 'vanilla'
version is recommended).

Then download this file:
<https://raw.githubusercontent.com/tidalcycles/Tidal/master/pd/midi-osc-bridge.pd>

Then if you start tidal, open that file in puredata, and configure your
MIDI device in puredata, things should start working.
