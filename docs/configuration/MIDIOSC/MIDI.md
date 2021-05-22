---
title: MIDI
id: midi
permalink: wiki/MIDI/
layout: wiki
---


Tidal can send and receive MIDI messages. You can talk with external synthesizers and hardware and receive data from your controllers. All the mapping is done directly through the language in an intuitive way.

## SuperDirt MIDI

### Prerequisites

The prerequisites require recent versions of **Tidal** and **SuperDirt**:
* Upgrade to the latest Tidal (this post assumes version 0.9.10 or greater)
* Make sure you have the latest **SuperDirt quark**. Uninstalling and reinstalling the SuperDirt quark might be easiest. See [this page](github.com/supercollider-quarks/quarks) for details on how to update Quarks.

### Initialization

To begin, you'll start in **SuperCollider**. Start up **SuperDirt** as you normally would. Then, in SuperCollider eval the following code:

```c
MIDIClient.init;
```

You should now see a list of the system MIDI devices in **SuperCollider**'s post window. The output will look something like this:

```c
MIDI Sources:
	MIDIEndPoint("LoopBe Internal MIDI", "LoopBe Internal MIDI")
	MIDIEndPoint("Focusrite USB MIDI", "Focusrite USB MIDI")
MIDI Destinations:
	MIDIEndPoint("Microsoft GS Wavetable Synth", "Microsoft GS Wavetable Synth")
	MIDIEndPoint("LoopBe Internal MIDI", "LoopBe Internal MIDI")
	MIDIEndPoint("Focusrite USB MIDI", "Focusrite USB MIDI")
```

Take note that these MIDI devices have two parts to their names. You will need both parts in the next step, which is to actually connect to the MIDI device. Eval the following line:

```c
~midiOut = MIDIOut.newByName("Focusrite USB MIDI", "Focusrite USB MIDI"); // substitute your own device here
```

Above, we have stored a reference to the device in a variable named `~midiOut`.

Finally, define the name of the "synth" in Tidal you will use to control this device. Below, we will call it "midi". Eval the following line:

```c
~dirt.soundLibrary.addMIDI(\midi, ~midiOut);
```

Optionally, you can define a latency value on your device:

```c
~midiOut.latency = 0.45;
```

That's it for initialization. You should now have a MIDI device connected in SuperDirt, running as a synth named "midi".

### Usage in Tidal

#### Note Patterns

Now we can start writing some Tidal patterns to control the MIDI device. Let's send it a trivial note pattern:
```c
d1 $ n "0 2 4 7" # s "midi"
```

That should play a simple four-note pattern. Notice we're just using the synth name "midi" to send notes to the MIDI device.

You can also use the note-name and octave notation:

```c
d1 $ n "c4 d4 e5 g3" # s "midi"
```

#### MIDI Channels

The default MIDI channel is 1. SuperDirt MIDI channels are indexed starting at zero, so MIDI channel 1 is midichan 0:

```c
d1 $ note "0 2 4 7" # s "midi" # midichan 0
```

If your synth is listening on a different channel, let's say, MIDI channel 5, you would use midichan 4:

```c
d1 $ note "0 2 4 7" # s "midi" # midichan 4
```

Notice that midichan accepts a pattern of numbers, so you can use a pattern to play on different MIDI channels:

```c
d1 $ note "0 2 4 7" # s "midi" # midichan "0 4"
```
The above pattern plays notes "0 2" on channel 1 and "4 7" on channel 5.

#### CC Params

To send a CC param to your synth, the best way to do it in the new SuperDirt MIDI is with a different Tidal pattern. To create this pattern, you'll be using two new SuperDirt MIDI params:

* **ccn**: the CC param number you want to control: ccn 30
* **ccv**: the value to send to the CC param, ranging from 0 to 127: ccv 64



Here's a full example, sending a value of 64 to CC param 30:

```c
d2 $ ccv 64 # ccn 30 # s "midi"
```

You can of course also specify the MIDI channel with midichan:

```c
d2 $ ccv 64 # ccn 30 # s "midi" # midichan 4
```

You can specify patterns of CC values:

```c
d2 $ ccv "20 40 60 80 100" # ccn 30 # s "midi"

d2 $ ccn "30*4" # ccv (range 20 100 $ slow 30 sine) # s "midi"
```

Note that the left-most pattern defines the rhythm in this case when using `#`.

If you have a specific feature on your device that listens on a specific CC number, you can give it a friendly name if you wish:

```c
let ringMod = 30
d2 $ ccv "0 20 50 60" # ccn ringMod # s "midi"
```
If you have many CC params you want to control at once, a stack works well:

```c
d2 $ density 8 $ stack [
  ccn 30 # ccv (range 0 127 $ slow 30 sine),
  ccn 31 # ccv "[0 70 30 110]/3",
  ccn 32 # ccv 10 
  ] # s "midi"
```

## Tidal-Midi

The older `tidal-midi` Haskell module is not currently working (although it might return). Use the other existing solutions.

### Synchronising MIDI clock

Once you've set up **SuperDirt MIDI** by following the tutorial, sending `midiclock` is fairly straightforward and works well, although still in development. This will become easier still in the future.

First, you can start sending MIDI clock messages, 48 per cycle, like this:

```c
p "midiclock" $ midicmd "midiClock*48" # s "midi"
```

Your MIDI device should then adjust its BPM to Tidal's cps. Then it's worth sending a `stop` message like this:

```c
once $ midicmd "stop" # s "midi"
```

and then finally a start message to start the MIDI clock at the right time. The following sends a start message every fourth cycle:

```c
p "midictl" $ midicmd "start/4" # s "midi"

```
Once everything's started and in sync, it's probably best to stop sending the start messages to avoid glitching:

```c
p "midictl" $ silence
```

However now if you do hush, the `midiclock` will stop as well as all the other patterns. To avoid this, you can overwrite the hush function with a version that silences particular patterns:

```c
let hush = mapM_ ($ silence) [d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,d14,d15,d16]
```

You will probably find that the downbeats for SuperDirt and your MIDI devices don't align. As a starting point, set MIDI latency in supercollider to 0:

```supercollider
~midiOut.latency = 0;
```

Make sure any offset on the MIDI side is also set to 0, then gradually adjust one of them until they align. If they stay in alignment when you change the cps, all is good! 


## Controller Input

**Tidal** 1.0.0 now has support for external input, using the OSC protocol. Here's a quick guide to getting it going, including using a simple 'bridge' for getting MIDI input working. 

### Setup

To use MIDI, you don't have to worry too much about mapping OSC. However, you do have to run something to convert MIDI into OSC (**Tidal** is listening for OSC messages). Here's how to do that using SuperCollider. First, with **Tidal** and **SuperDirt** already running, run the below code block in **SuperCollider**:


```c
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
```

### Usage

You should then be able to run a pattern such as the following, that uses `CC value 12`:

```haskell
d1 $ sound "bd" # speed (cF 1 "12")
```

If you want to use MIDI in a pattern forming statement, you may find it helpful to `segment` the input first, as the raw pattern coming from your MIDI device will be at very high resolution. This example takes only one value per cycle & remaps the value with the `range` function: 

```haskell
d1 $ sound "amencutup" + n (run (segment 1 $ range 1 16 $ cN 0 "32" ))
```

### Alternative with Pure Data

The above **SuperCollider** instructions are most convenient if you're using **SuperDirt**, but as an alternative you can use **Pure Data** to convert midi to **OSC**. You can get puredata from [here](https://puredata.info/) (the `vanilla` version is recommended). Then, download [this file](https://raw.githubusercontent.com/tidalcycles/Tidal/main/pd/midi-osc-bridge.pd). Then if you start **Tidal**, open that file in **Pure Data**, and configure your **MIDI** device in **Pure Data**, things should start working.
