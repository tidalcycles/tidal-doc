---
title: OSC
id: osc
permalink: wiki/MIDI/
layout: wiki
---

**Open Sound Control (OSC)** is a standard network protocol, ostensibly designed for music, but it's really just an easy way to send numbers and other data across a network. A range of live coding and other systems including DAWs (Digital Audio Workstations), visualisers and mixers are compatible with OSC.

Really the one and only job of Tidal Cycles is to send patterned OSC messages, most often to the **SuperDirt** audio framework. It's fairly straightforward to configure **Tidal** to send OSC to another system. It involves specifying where messages should be sent to (the target) - and the structure of the OSC data that is sent (the shape or format of the message).

## Extensive Tutorial

### Defining a Target

First, define a target:

```c
let target =
      Target {oName = "visualiser",   -- A friendly name for the target (only used in error messages)
              oAddress = "localhost", -- The target's network address, normally "localhost"
              oPort = 5050,           -- The network port the target is listening on
              oLatency = 0.2,         -- Additional delay, to smooth out network jitter/get things in sync
              oSchedule = Live,       -- The scheduling method - see below
              oWindow = Nothing,      -- Not yet used
              oHandshake = False,     -- SuperDirt specific
              oBusPort = Nothing      -- Also SuperDirt specific
             }
```

The scheduling method for oSchedule can be one of:

* **Live**: causes Tidal to schedule messages so that they are sent out at the 'right' time, minus the `oLatency` value. This is the simplest approach, that will work well in most cases.

* **Pre BundleStamp**: sends each OSC message wrapped in an OSC 'bundle' with a bundle timestamp. The bundled messages will be sent out once per frame in batches, but ahead of time (according to the `oLatency` configuration value). Tidal doesn't attempt to send them out with 'correct' timing, instead the target is expected schedule them accurately. This is more work for the target, but is potentially more accurate than the above, as potential network/processing jitter can be avoided.

* **Pre MessageStamp**: as with `BundleStamp` above, but the timestamp is added to the OSC message itself, filling in the two integer fields "sec" and "usec". You have to explicitly include these in the argument list of your osc format (see later for an example).

### Defining OSC message structure

Next, define the structure of the OSC message. It's worth first spending a bit of time familiarising yourself with the OSC spec. There are two ways to structure the OSC messages that Tidal sends. Either as an argument list, or as name-value pairs.

The argument list approach is most common. It looks like this:

```c
let oscplay = OSC "/play" $ ArgList [("s", Nothing),
                                     ("vowel", Just $ VS "a"),
                                     ("pan", Just $ VF 0.5),
                                     ("cut", Just $ VI 1),
                                     ("intensity", Just $ VI 0)
                                   ]
```

To define the OSC structure, you start with OSC, followed by the OSC "address pattern", in this case `"/play"`. Then you list the message arguments, in order. Each argument is given as a 'tuple', containing the name of the parameter, and its default value.

In the above example, the first parameter called `"s"` doesn't have a default, indicated by the keyword `Nothing`. This means that if no s parameter is given by a pattern, no OSC message will be sent.

The other arguments in the example have defaults indicated by the keyword `Just`, followed by the type of the argument and its default value. `VS` gives a default as a string, `VF` as a floating point number, and `VI` as an integer. Other available types are `VB` for true/false boolean values (which are converted to 1 / 0 integer values in the message) and `VX` for binary 'blobs'. If one or more of these arguments-with-defaults aren't present in a pattern, the message will still be sent with these default values.

If you are using **Pre MessageStamp**, you will need to add the `sec` and `usec` message parameters in order for them to be sent:

```c
let oscplay = OSC "/play" $ ArgList [("s", Nothing),
                                     ("vowel", Just $ VS "a"),
                                     ("pan", Just $ VF 0.5),
                                     ("cut", Just $ VI 1),
                                     ("intensity", Just $ VI 0),
                                     ("sec", Just $ VF 0),
                                     ("usec", Just $ VF 0)
                                   ]
```

As well as `sec` and `usec`, there are three other parameters that Tidal will always fill in if present; `cps` (cycles per second), `cycle` (the start of the event in cycles) and `delta` (the duration of the event in cycles). So add those too, if you want that information to be sent to the target:

```c
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
```

### Named parameters

Instead of giving an argument list as above, you can specify named parameters like this:

```c
let oscplay = OSC "/play" Named {required = ["s"]}
```

With such a definition, all parameters in a pattern will be sent to the target. Instead of having fixed positions in a message as with an argument list, the parameters will be in an arbitrary order, but as name-value pairs. That is, each parameter will be prefixed by an additional string parameter, giving its name. As you can see in the example, a list of 'required' parameters is given - unless all of the parameters named in this list are present in an patterned event, it will not be sent.


### Defining additional parameters

Many parameters are defined in `Sound.Tidal.Params`, and available to a Tidal session. If you want to send parameters which aren't already defined, you can define them yourself. For example `'intensity'` used above needs to be defined, like this:

```c
let intensity = pF "intensity"
```

### Mapping message structures to targets

The final thing that needs defining, is a mapping between targets and the OSC message structures they accept. In this case there's only one target that accepts a single kind of OSC message, so it's simple:

```c
let oscmap = [(target, [oscplay])]
```

### Starting and sending patterns to the stream

Then you can start a `'stream'` for turning patterns into OSC like this:

```c
stream <- startStream defaultConfig oscmap
```

And start sending a pattern like this:

```c
streamReplace stream 1 $ s "hello" # cut 1 # intensity 3
```

### Shortcuts

You can define some shortcuts like this:

```c
let x1 = streamReplace stream 1
    x2 = streamReplace stream 2
    x3 = streamReplace stream 3
    x4 = streamReplace stream 4
```

Then this will work:

```c
x1 $ s "hello" # cut 1 # intensity 3
```

This is much like how `d1`, `d2`, etc... are defined in `BootTidal.hs`. Refer to the the default `BootTidal.hs` file (look at the sidebar) to see how the other tidal functions are normally defined.

### Recap

Here's all that code together:

```c
let target =
      Target {oName = "visualiser",   -- A friendly name for the target (only used in error messages)
              oAddress = "localhost", -- The target's network address, normally "localhost"
              oPort = 5050,           -- The network port the target is listening on
              oLatency = 0.2,         -- Additional delay, to smooth out network jitter/get things in sync
              oSchedule = Live,       -- The scheduling method - see below
              oWindow = Nothing,      -- Not yet used
              oHandshake = False,     -- SuperDirt specific
              oBusPort = Nothing      -- Also SuperDirt specific
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
```

### Multiple targets and messages

It's possible to pattern multiple OSC messages and send them to multiple targets, from the same `'stream'`. For example to make a stream that sends both to the above target and to **SuperDirt**, you could do this:
```c
let oscmap = [(target, [oscplay]),
              (superdirtTarget, [superdirtShape])
             ]

stream <- startStream defaultConfig oscmap

d = streamReplace stream

d 1 $ s "bd"
```

The `bd` above will be sent to both `target` and `superdirtTarget`.

### Complex targets with multiple message formats

Some OSC targets are more complicated, accept multiple OSC formats and also specifying data in the osc 'address pattern'. Lets take the ASCII-Simple-Video-Synth as an example. Here's the Tidal specification for it:

```c
let target = Target {oName = "ascii",
                     oAddress = "127.0.0.1",
                     oPort = 5050,
                     oLatency = 0.2,
                     oWindow = Nothing,
                     oSchedule = Live,
                     oHandshake = False,
                     oBusPort = Nothing 
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
```

This software accepts a number of address patterns, some of which include the colour which is being addressed. To make this colour patternable, it is given a name in curly braces, `"{asccolour}"`. This is then patternable with the `'ascColour'` parameter in the Tidal pattern.

When you assign multiple OSC message formats to a stream, it's a good idea to make sure that every format has at least one unique, non-default argument. This ensures that messages will only be sent when the non-default arguments are set in the pattern. Otherwise, all the formats will be sent for every patterned event.


## Controller input

Tidal 1.0.0 now has support for external input, using the **OSC** protocol. Here's a quick guide to getting it going, including using a simple 'bridge' for getting MIDI input working. 

### Configuration

If you just want to get **MIDI** input into tidal, check the MIDI page in the sidbar.

With version 1.0.0 installed and configured, then by default **Tidal** will automatically listen for external control messages over the **OSC** network protocol, on localhost (127.0.0.1), port 6010. This is configurable - if you prefer it to listen to for example all network interfaces, and port 6060 you can change your configuration (`BootTidal.hs`) to this: 

```haskell
tidal <- startTidal superdirtTarget (defaultConfig {cCtrlAddr = "0.0.0.0", cCtrlPort = 6060})
```

If you prefer to switch off listening to controls all together, use this instead:
```haskell
tidal <- startTidal superdirtTarget (defaultConfig {cCtrlListen = False})
```

The **OSC** message that Tidal expects has the path `/ctrl`, and two values - the key and the value. The key can either be a string or an integer (tidal will convert an integer to a string for you). The value can be a string, integer or float. For example the **OSC** message `/ctrl sf hello 0.4`, for a message to set the `hello` control to `0.4`. In this example `sf` is the **OSC** typetag. It specifies that the first value is a (s)tring and the second value is a(f)loat see [OSC specs](http://opensoundcontrol.org/spec-1_0). 

You could then use this control in a pattern like so:
```haskell
d1 $ sound "bd" # speed (cF 1 "hello")
```

`cF` is what you use for floating point controls. The second parameter `1` is the default value, for when tidal hasn't received that control yet. There is also `cS` for strings and `cI` for integers. For time values (for using e.g. as the first parameter of fast/slow), use `cT`. For ratios add `cR`. If you want to receive entire patterns (written as a string of mini notation), use `cP`.

## Debugging

One way to debug OSC is to use a packet sniffer like [WireShark](https://www.wireshark.org/). You can put `osc` in the filter field to filter out everything except OSC packets. If you click on an `OSC network packet` and expand fields you can find a nicely formatted representation of your OSC message. 

## OSC SuperDirt API

For the curious, this is what an OSC trigger message from **Tidal Cycles** to **SuperDirt** looks like, as of **Tidal** version 1.7.x and probably later:

Lets consider this pattern: `sound "bd" # speed 2`. This is the kind of OSC message it generates: 

``` Bundle
Timetag: Feb 22, 2021 21:54:04.960054397 UTC
Size: 92 bytes
Message: /dirt/play ,sfsfsfsisssf
    Header
        Path: /dirt/play
        Format: ,sfsfsfsisssf
    String: cps
    Float: 0.4
    String: cycle
    Float: 40549
    String: delta
    Float: 2.5
    String: orbit
    Int32: 0
    String: s
    String: bd
    String: speed
     Float: 2
```

It consists of a single message, wrapped in a bundle, which provides the timestamp for when the event should be triggered. Because the OSC target for superdirt has `oSchedule` set to `Pre BundleStamp`, messages will be sent in bursts, ahead of time, and it's up to the receiver (such as superdirt) to schedule them accurately.

The message inside the bundle has the path `/dirt/play`, and contains a variable number of name-value pairs. You can see the `s bd` and "speed 2" pairs, but Tidal adds a number of additional ones.. The current `cps` tempo, the position of the event in cycles (since **Tidal** started), the `delta` or duration of the event in seconds, and the `orbit` number.

## Playback controllers

**Tidal** `1.7.4` adds the ability to interact with patterns through the same OSC interface used for controller input. By default, it listens for OSC messages on localhost (`127.0.0.1`), port `6010`. 

The next section describes the playback control functions that are available, followed by an example of using MIDI control in **SuperCollider** to control several patterns.

###  Open Sound Control Functions

#### Mute a Pattern

You can mute or unmute a pattern by sending an OSC message with the path `/mute` or `/unmute` and an argument specifying a pattern. Just like in regular tidal code, this can be either a number (for `d1`, `d2`, etc) or a string (for named patterns).

For example the OSC message `/mute 3` would mute `d3`.

#### Solo a Pattern

You can also solo or unsolo a pattern by sending an OSC message with the path `/solo` or `/unsolo` and an argument specifying a pattern, which can again be a number and a string.

For example the OSC message `/solo 3` would solo `d3`.

#### Control All Patterns

You can also control all playing patterns using the OSC paths `/muteAll`, `/unmuteAll`, `/unsoloAll` and, of course, `/hush`. All of these messages have no arguments.

#### MIDI Example

Here is a full **SuperCollider** example for mapping buttons on a **MIDI** controller to patterns so that the note on/off messages from the buttons toggle pattern muting or trigger other effects.

This example uses the **MIDI** buttons for the notes `C4` (MIDI value 60), `D4` and `E4` for toggling mute on `d1`, `d2` and `d3`. It uses notes `F4`, `G4` and `A4` to toggle solo on `d1`, `d2` and `d3`. It also uses the note `C5` to trigger muteAll and note `D5` to trigger unmuteAll.

Edit the first section of the code (MIDI Controller Mapping) to define which controller buttons you want to use for controlling patterns. The rest of the code should work with the mappings you define, and shouldn't need any editing, but can also be useful for adapting.

Start with **Tidal** (e.g. inside `Atom`) and **SuperDirt** already running and then run the below code block in **SuperCollider**:

```c
// Evaluate the block below to start the mapping MIDI -> OSC.
(
var mutes, solos, muteAll, unmuteAll, unsoloAll, hush;
var playbackControl, playbackState;
var osc;

/* -- MIDI Controller Mapping ---------------------------- */
// Edit this section to configure your MIDI controller

// "mutes" and "solos" are each a Dictionary of MIDI numbers -> Pattern IDs

// In this case, C4, D4 & E4 mute patterns d1, d2 & d3
mutes = Dictionary[
	60 -> 1,
	62 -> 2,
	64 -> 3
];

// In this case, F4, G4 & A4 solo patterns d1, d2 & d3
solos = Dictionary[
	65 -> 1,
	67 -> 2,
	69 -> 3
];

// This MIDI note triggers "muteAll"
// In this case, it's set to C5
muteAll = 72;

// This MIDI note triggers "unmuteAll"
// In this case, it's set to D5
unmuteAll = 74;

// This MIDI note triggers "unsoloAll"
// In this case, it's unused
unsoloAll = nil;

// This MIDI note triggers "hush"
// In this case, it's unused
hush = nil;

/* ------------------------------------------------------- */

playbackState = Dictionary[];

union(mutes.values.asSet, solos.values.asSet).do({
	arg item;
	playbackState.put(item, Dictionary[\mute -> false, \solo -> false]);
});

osc = NetAddr.new("127.0.0.1", 6010);

MIDIClient.init;
MIDIIn.connectAll;

playbackControl = MIDIFunc.noteOn({ |val, num, chan, src|
	var patID, patState;
	if (mutes.at(num) !== nil, {
		patID = mutes.at(num);
		patState = playbackState.at(patID);
		if (patState.trueAt(\mute), {
			osc.sendMsg("/unmute", patID);
			patState.put(\mute, false);
		}, {
			osc.sendMsg("/mute", patID);
			patState.put(\mute, true);
		});
	});

	if (solos.at(num) !== nil, {
		patID = solos.at(num);
		patState = playbackState.at(patID);
		if (patState.trueAt(\solo), {
			osc.sendMsg("/unsolo", patID);
			patState.put(\solo, false);
		}, {
			osc.sendMsg("/solo", patID);
			patState.put(\solo, true);
		});
	});

	if (muteAll == num, {
		osc.sendMsg("/muteAll");
		playbackState.do({
			arg patState;
			patState.put(\mute, true);
		});
	});

	if (unmuteAll == num, {
		osc.sendMsg("/unmuteAll");
		playbackState.do({
			arg patState;
			patState.put(\mute, false);
		});
	});

	if (unsoloAll == num, {
		osc.sendMsg("/unsoloAll");
		playbackState.do({
			arg patState;
			patState.put(\solo, false);
		});
	});

	if (hush == num, {
		osc.sendMsg("/hush");
	});
});

if (~stopMidiMuteControl != nil, {
	~stopMidiMuteControl.value;
});

~stopMidiMuteControl = {
	playbackControl.free;
};
)

// Evaluate the line below to stop it.
~stopMidiMuteControl.value;
```
