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
* Make sure you have the latest **SuperDirt quark**. Uninstalling and reinstalling the SuperDirt quark might be easiest. See [this page](http://github.com/supercollider-quarks/quarks) for details on how to update Quarks.

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

Finally, define the name of the "synth" in Tidal you will use to control this device. Below, we will call it `mydevice`. Eval the following line:

```c
~dirt.soundLibrary.addMIDI(\mydevice, ~midiOut);
```

Optionally, you can define a latency value on your device:

```c
~midiOut.latency = 0.45;
```

That's it for initialization. You should now have a MIDI device connected in SuperDirt, running as a synth named `mydevice`.

### Usage in Tidal

#### Note Patterns

Now we can start writing some Tidal patterns to control the MIDI device. Let's send it a trivial note pattern:
```haskell
d1 $ n "0 2 4 7" # s "mydevice"
```

That should play a simple four-note pattern. Notice we're just using the synth name `mydevice` to send notes to the MIDI device.

You can also use the note-name and octave notation:

```haskell
d1 $ n "c4 d4 e5 g3" # s "mydevice"
```

Alternatively to using `n` or `note` to pass MIDI notes, you can use the `midinote` function:

```haskell
Type: midinote :: Pattern Note -> ControlPattern
```

The only difference is that with `midinote` notes are specified with numbers from 0 (C(-1)) to 127 (G9). In **Tidal Cycles**, note 0 is C5, and in MIDI, C5 is note 60, so it's easy to translate from one system to the other by adding or subtracting `60` to the note value.

The last example could be rewritten as:

```haskell
d1 $ midinote "48 50 64 42" # s "mydevice"
```

#### MIDI Channels

Use the function `midichan` to set the MIDI channel.

```haskell
Type: midichan :: Pattern Double -> ControlPattern
```

The default MIDI channel is 1. SuperDirt MIDI channels are indexed starting at zero, so MIDI channel 1 is midichan 0:

```haskell
d1 $ note "0 2 4 7" # s "mydevice" # midichan 0
```

If your synth is listening on a different channel, let's say, MIDI channel 5, you would use `midichan 4`:

```haskell
d1 $ note "0 2 4 7" # s "mydevice" # midichan 4
```

Notice that `midichan` accepts a pattern of numbers, so you can use a pattern to play on different MIDI channels:

```haskell
d1 $ note "0 2 4 7" # s "mydevice" # midichan "0 4"
```
The above pattern plays notes "0 2" on channel 1 and "4 7" on channel 5.

#### CC Params

To send a CC param to your synth, the best way to do it in the new SuperDirt MIDI is with a different Tidal pattern. To create this pattern, you'll be using two new SuperDirt MIDI params:

* **ccn**: the CC param number you want to control: `ccn 30`
* **ccv**: the value to send to the CC param, ranging from 0 to 127: `ccv 64`

```haskell
Type: ccn :: Pattern Double -> ControlPattern
Type: ccv :: Pattern Double -> ControlPattern
```

Here's a full example, sending a value of 64 to CC param 30:

```haskell
d2 $ ccv 64 # ccn 30 # s "mydevice"
```

You can of course also specify the MIDI channel with `midichan`:

```haskell
d2 $ ccv 64 # ccn 30 # s "mydevice" # midichan 4
```

You can specify patterns of CC values:

```haskell
d2 $ ccv "20 40 60 80 100" # ccn 30 # s "mydevice"

d2 $ ccn "30*4" # ccv (range 20 100 $ slow 30 sine) # s "mydevice"
```

Note that the left-most pattern defines the rhythm in this case when using `#`.

If you have a specific feature on your device that listens on a specific CC number, you can give it a friendly name if you wish:

```c
let ringMod = 30
d2 $ ccv "0 20 50 60" # ccn ringMod # s "mydevice"
```
If you have many CC params you want to control at once, a stack works well:

```c
d2 $ fast 8 $ stack [
  ccn 30 # ccv (range 0 127 $ slow 30 sine),
  ccn 31 # ccv "[0 70 30 110]/3",
  ccn 32 # ccv 10
  ] # s "mydevice"
```

Each device has its own MIDI chart implementation, but there are a few CC numbers that are standard and should work the same in most devices:

| CC number | Function |
|:---------:| -------- |
| 1         | Modulation wheel |
| 2         | Breath controller |
| 7         | Volume |
| 10        | Pan |
| 11        | Expression pedal |
| 64        | Sustain pedal (<=63 Off, >=64 On)|

```haskell
Type: cc :: Pattern String -> ControlPattern
```

There is also the function `cc`, which allows us to pass both the number and the value in a single string:

```haskell
d2 $ cc "64:30" # s "mydevice" # midichan 4
```

#### Velocity

MIDI velocity can be set using `amp` and `gain`. They work in a similar way to when used with samples, being `amp` linear and `gain` exponential.

Default velocity is `50`, default `amp` is `0.4` and default `gain` is `1`.

In the following tables you can see how distinct `amp` and `gain` values affect velocity:

| Amp value | MIDI velocity value |
|:---------:|:-------------------:|
| 0         | 0                   |
| 0.1       | 12                  |
| 0.2       | 25                  |
| 0.3       | 38                  |
| 0.4       | 50                  |
| 0.5       | 63                  |
| 0.6       | 76                  |
| 0.7       | 88                  |
| 0.8       | 101                 |
| 0.9       | 114                 |
| 1         | 127                 |

| Gain value | MIDI velocity value |
|:----------:|:-------------------:|
| <=0.3      | 0                   |
| 0.4        | 1                   |
| 0.5        | 3                   |
| 0.6        | 6                   |
| 0.7        | 12                  |
| 0.8        | 20                  |
| 0.9        | 33                  |
| 1          | 50                  |
| 1.1        | 74                  |
| 1.2        | 105                 |
| >=1.3      | 127                 |

#### Pitch modulation

Pitch modulation can be controlled using the `midibend` function.

```haskell
Type: midibend :: Pattern Double -> ControlPattern
```

Note that usually a pitch wheel sends a number between `-8192` and `8191`, but here all numbers are positive, so the range is from `0` to `16383`, being `8192` the neutral middle point.

You can simulate the movement of the pitch wheel in various ways.

Supposing your device is called `mydevice` and receives MIDI messages on channel `5`, in this example the sound will start in a C note, and gradually increase pitch to the limit of the pitch bend modulation:

```haskell
d1 $ stack [
  midibend (segment 128 $ range 8193 16383 $ saw),
  note "c"
  ] # s "mydevice" # midichan 4
```

Now, we start at the minimum of the pitch bend modulation, and move fast to the neutral point, where we will sustain the pitch for the remaining of the cycle:

```haskell
d1 $ stack [
  midibend (smooth "0@2 8193@10 8193@0.1"),
  note "c"
  ] # s "mydevice" # midichan 4
```

#### Aftertouch

Aftertouch is used to modify the character of a sound that is already playing, usually by applying more or less pressure on a MIDI controller keyboard keys.

To pass aftertouch MIDI messages to a device, use the function `miditouch`.

```haskell
Type: miditouch :: Pattern Double -> ControlPattern
```

Aftertouch has a range from `0` to `127`, and default value is `0`.

```haskell
d1 $ stack [
  miditouch (segment 128 $ fast 4 $ range 0 64 $ sine),
  note "c"
  ] # s "mydevice" # midichan 4
```

In this example, once a note is playing, we set aftertouch from `0` to `64` and backwards several times in a cycle, as if we were pressing the C key of a MIDI controller.

#### Modulation wheel

There isn't a specific function to send modulation wheel messages, but CC `1` is used for modulation wheel, so we can use that:

```haskell
d1 $ stack [
  ccv (segment 128 $ range 0 128 $ sine) # ccn 1,
  note "c"
  ] # s "mydevice" # midichan 4
```

Here, we start the cycle with mod wheel set to `0`, go up to maximum, then down to the minimum, and end the cycle at `0` again.

#### Program change

Program change messages can be sent with the `progNum` function.

```haskell
Type: progNum :: Pattern Double -> ControlPattern
```

If you called you device `mydevice`, and it's receiving program change messages through MIDI channel `14`, you can change it's program/pattern by issuing a command like this:

```haskell
once $ s "mydevice" # progNum 10 # midichan 13
```

#### NRPN parameters

To send NRPN parameters, use functions `nrpnn` and `nrpnv`.

```haskell
Type: nrpnn :: Pattern Int -> ControlPattern
Type: nrpnv :: Pattern Int -> ControlPattern
```

NRPN numbers are composed of two bytes: MSB (Most Significant Byte) and LSB (Less Significant Byte). When using `nrpnn`, you write those two bytes in a single number. To calculate the number you have to use, multiply the first byte (MSB) by `128`, and then add the second byte (LSB). For example, if your device manual says that reverb send is set by NRPN MSP 2 and NRPN LSB 6 (or 2:6), you need to give `nrpnn` a `2*128+6=262`.

NRPN values also have two bytes, which allows for more precision than CC messages. The valid rang for `nrpnv` is from `0` to `16384`. However, note that many devices will just ignore this extra precision.

```haskell
d2 $ nrpnn (2*128+6) # nrpnv 14000 # s "mydevice" # midichan 12
```

`nrpnn` and `nrpnv` are patternable, but notice that their argument is of type `Pattern Int`, so you have to make sure to pass them `Int`s and not `Double`s:

```haskell
d2 $ nrpnv (segment 32 $ floor <$> range 0 16000 sine) # nrpnn (1*128+29) # s "mydevice" # midichan 4
```

`sine` is giving us `Double`s, so we need to convert them to `Int`s before feeding them to `nrpnv`. We do this by using `floor`, which is a Haskell function that rounds down a number, and `<$>` which applies a function (in this case `floor`) to all the elements in a collection.

```haskell
Type: nrpn :: Pattern String -> ControlPattern
```

There is also the function `nrpn`, which allows us to pass both the number and the value in a single string:

```haskell
d2 $ nrpn "262:14000" # s "mydevice" # midichan 12
```

## Tidal-Midi

The older `tidal-midi` Haskell module is not currently working (although it might return). Use the other existing solutions.

## Synchronising MIDI clock

It is often important to send MIDI clock events to synchronize tempo between devices.
Tidal can't sync its tempo to MIDI clock events that it receives, but it can act as a MIDI clock source.
The following sections show two alternatives for sending MIDI clock events that follow the tempo of Tidal.

### Synchronising MIDI clock using the Link protocol

Since version 1.9, Tidal uses the Link protocol for scheduling events.
Link is a technology that synchronizes musical beat, tempo, and phase across multiple applications. It was originally developed by a company called Ableton, but is open source and now implemented in a wide range of music software.
We can use Link to synchronize Tidal with a separate program that will act as the MIDI clock source.

This is the preferred method for sending MIDI clock events as it is easy, performant, stable, and has fewer quirks than [Synchronising MIDI clock via Tidal](#synchronising-midi-clock-via-tidal).

#### Ableton Live as the MIDI clock source

Ableton Live can synchronize with Tidal over Link and simultaneously send MIDI clock messages.

To achieve this, follow both instructions:

* Turn on Link sync in Ableton Live. See [Synchronizing via Link](https://www.ableton.com/en/manual/synchronizing-with-link-tempo-follower-and-midi/#32-1-synchronizing-via-link).
* Turn the MIDI device on as a sync destination in Live’s Link/Tempo/MIDI Preferences. See [Synchronizing External MIDI Devices to Live](https://www.ableton.com/en/manual/synchronizing-with-link-tempo-follower-and-midi/#32-3-1-synchronizing-external-midi-devices-to-live).

#### SuperCollider as the MIDI clock source

We can use Link to synchronize Tidal with SuperCollider and set up SuperCollider to send MIDI clock events. This method was inspired by [jamshark70's thread](https://scsynth.org/t/midi-clock-out-separate-process-for-better-stability/5089). This requires extending SuperCollider with a new class `LinkToMidiClock`.

First decide if the SuperCollider class should be available only to your user account or to all users on the machine. Then find the corresponding extensions directory by running one of these lines in SuperCollider:
```supercollider
Platform.userExtensionDir;   // Extensions available only to your user account
Platform.systemExtensionDir; // Extensions available to all users on the machine
```

Create a file `LinkToMidiClock.sc` in the selected extensions directory and save it with this content:
```supercollider
LinkToMidiClock {
	var <midiOut, <linkClock, routine, <isPlaying = false, d;

	*new { arg midiOut, linkClock;
		^super.newCopyArgs(midiOut, linkClock)
	}

	start {
		if(isPlaying,{
			"Can't start. LinkToMidiClock is already playing".inform;
		},{
			isPlaying = true;
			d = 1/24;
			routine = Routine {
				midiOut.start;
				loop {
					23.do { |i|
						midiOut.midiClock;
						d.wait;
					};
					midiOut.midiClock;
					(thisThread.clock.beats.ceil - thisThread.beats).wait;
				}
			}.play(linkClock, [linkClock.quantum, 0]);
		});
	}

	stop {
		if(isPlaying,{
			isPlaying = false;
			midiOut.stop;
			routine.stop;
		},{
			"Can't stop. LinkToMidiClock is not playing".inform;
		})
	}
}
```

Reboot SuperCollider or use `Language > Recompile Class Library`.

We are now ready to follow the [initialization](#Initialization) guide. We will use the MIDI device variable named `~midiOut` from the initialization in the examples below.

After the MIDI device is initialized, create a [LinkClock](https://doc.sccode.org/Classes/LinkClock.html) in SuperCollider.

```supercollider
~lc = LinkClock.new.latency_(Server.default.latency);
```

You can check that Tidal and SuperCollider have connected over Link by checking the number of Link peers:
```
~lc.numPeers; '0 means no connection, 1 means connection
```

Then, create a `LinkToMidiClock` that is connected to the MIDI device `~midiOut` and the `LinkClock` `~lc`.

```supercollider
~ltmc = LinkToMidiClock(~midiOut, ~lc);
```

MIDI clock events will be sent continously after we tell it to start, until we tell it to stop.
```supercollider
~ltmc.start;
~ltmc.stop;
```

Note: If SuperCollider and Tidal don't connect over Link, try starting Tidal before the LinkClock is created, but after SuperDirt is started. Alternatively, try creating the LinkClock before starting Tidal. This has anecdotally worked in some cases. Please report your findings in [the TidalCycles version 1.9.0 nnouncement thread](https://club.tidalcycles.org/t/tidalcycles-version-1-9-0/4292).

For more details on Tidal's integration with Link, see [Multi-User Tidal](../multiuser-tidal#link-protocol-synchronization).

### Synchronising MIDI clock via Tidal

We can alternatively use Tidal and **SuperDirt MIDI** for sending MIDI clock events. The advantage is that it also works in older versions of Tidal, but the method is somewhat more complicated.

Set up **SuperDirt MIDI** by following the [initialization](#Initialization) guide.

When that is done, you can start sending MIDI clock messages, 48 per cycle, like this:

```c
p "midiclock" $ midicmd "midiClock*48" # s "mydevice"
```

Your MIDI device should adjust its BPM to Tidal's cps. It's then a good idea to send a `stop` message like this:

```c
once $ midicmd "stop" # s "mydevice"
```

and then finally a start message to start the MIDI clock at the right time. The following sends a start message every fourth cycle:

```c
p "midictl" $ midicmd "start/4" # s "mydevice"

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

### Renaming MIDI notes

In case you have a MIDI drum machine, where the bassdrum is on MIDI note 231 and you don't want to write `231` every time, you could either do this:

```haskell
s2n :: String -> Note
s2n "BD" = 231
s2n _ = 0

d1 $ n (s2n <$> "BD*4") # sound "tr8" # midichan 9
```

Another approach is using `inhabit`, you pass it a list of names and patterns, like this:

```haskell
let drum pat = sound (inhabit [("bd", "231"), ("sd", "232")] pat)
```

```haskell
d1 $ drum "bd sd" # midichan 9
```

You could also hide the midi channel in there so you don't have to type it each time

```haskell
let drum pat = sound (inhabit [("bd", "231"), ("sd", "232")] pat) # midichan 9

d1 $ drum "bd sd"
d2 $ drum "bd*3 sd*2"
```

Note that the `232` bit is a pattern, so you could have one name trigger more than one event e.g.

```haskell
let drum pat = sound (inhabit [("bd", "231"), ("rush", "232*8"), ("sd", "232")] pat) # midichan 9

d1 $ drum "bd sd rush"
```

### Alternative with Pure Data

The above **SuperCollider** instructions are most convenient if you're using **SuperDirt**, but as an alternative you can use **Pure Data** to convert midi to **OSC**. You can get puredata from [here](https://puredata.info/) (the `vanilla` version is recommended). Then, download [this file](https://raw.githubusercontent.com/tidalcycles/Tidal/dev/pd/midi-osc-bridge.pd). Then if you start **Tidal**, open that file in **Pure Data**, and configure your **MIDI** device in **Pure Data**, things should start working.
