---
title: SuperDirt MIDI Tutorial
permalink: wiki/SuperDirt_MIDI_Tutorial/
layout: wiki
---

<languages/> <translate>

# Prerequisites

The prerequisites require recent versions of Tidal and SuperDirt:

-   Upgrade to the latest Tidal (this post assumes version 0.9.10 or
    greater)
    </li>
-   Make sure you have the latest SuperDirt quark. Uninstalling and
    reinstalling the SuperDirt quark might be easiest. See
    [1](https://github.com/supercollider-quarks/quarks)(github.com/supercollider-quarks/quarks)
    for details on how to update Quarks.

# Usage

To begin, you'll start in SuperCollider. Start up SuperDirt as you
normally would. Then, in SuperCollider eval the following code:

    MIDIClient.init;

You should now see a list of the system MIDI devices in SuperCollider's
post window. The output will look something like this:

    MIDI Sources:
        MIDIEndPoint("LoopBe Internal MIDI", "LoopBe Internal MIDI")
        MIDIEndPoint("Focusrite USB MIDI", "Focusrite USB MIDI")
    MIDI Destinations:
        MIDIEndPoint("Microsoft GS Wavetable Synth", "Microsoft GS Wavetable Synth")
        MIDIEndPoint("LoopBe Internal MIDI", "LoopBe Internal MIDI")
        MIDIEndPoint("Focusrite USB MIDI", "Focusrite USB MIDI")

Take note that these MIDI devices have *two* parts to their names. You
will need both parts in the next step, which is to actually connect to
the MIDI device. Eval the following line:

    ~midiOut = MIDIOut.newByName("Focusrite USB MIDI", "Focusrite USB MIDI"); // substitute your own device here

Above, we have stored a reference to the device in a variable named
`~midiOut`.

Finally, define the name of the "synth" in Tidal you will use to control
this device. Below, we will call it "midi". Eval the following line:

    ~dirt.soundLibrary.addMIDI(\midi, ~midiOut);

Optionally, you can define a latency value on your device:

    ~midiOut.latency = 0.45;

That's it for initialization. You should now have a MIDI device
connected in SuperDirt, running as a synth named "midi".

# Usage in Tidal

## Note Patterns

Now we can start writing some Tidal patterns to control the MIDI device.
Let's send it a trivial note pattern:

    d1 $ n "0 2 4 7" # s "midi"

That should play a simple four-note pattern. Notice we're just using the
synth name "midi" to send notes to the MIDI device.

You can also use the note-name and octave notation:

    d1 $ n "c4 d4 e5 g3" # s "midi"

## MIDI Channels

The default MIDI channel is 1. SuperDirt MIDI channels are indexed
starting at zero, so MIDI channel 1 is `midichan 0`:

    d1 $ note "0 2 4 7" # s "midi" # midichan 0

If your synth is listening on a different channel, let's say, MIDI
channel 5, you would use `midichan 4`:

    d1 $ note "0 2 4 7" # s "midi" # midichan 4

Notice that `midichan` accepts a pattern of numbers, so you can use a
pattern to play on different MIDI channels:

    d1 $ note "0 2 4 7" # s "midi" # midichan "0 4"

The above pattern plays notes "0 2" on channel 1 and "4 7" on channel 5.

## CC Params

To send a CC param to your synth, the best way to do it in the new
SuperDirt MIDI is with a different Tidal pattern. To create this
pattern, you'll be using two new SuperDirt MIDI params:

-   `ccn` - the CC param number you want to control: `ccn 30`
-   `ccv` - the value to send to the CC param, ranging from 0 to 127:
    `ccv 64`

Here's a full example, sending a value of 64 to CC param 30:

    d2 $ ccv 64 # ccn 30 # s "midi"

You can of course also specify the MIDI channel with `midichan`:

    d2 $ ccv 64 # ccn 30 # s "midi" # midichan 4

You can specify patterns of CC values:

    d2 $ ccv "20 40 60 80 100" # ccn 30 # s "midi"

    d2 $ ccn "30*4" # ccv (range 20 100 $ slow 30 sine) # s "midi"

Note that the left-most pattern defines the rhythm in this case when
using `#`.

If you have a specific feature on your device that listens on a specific
CC number, you can give it a friendly name if you wish:

    let ringMod = 30
    d2 $ ccv "0 20 50 60" # ccn ringMod # s "midi"

If you have many CC params you want to control at once, a `stack` works
well:

    d2 $ density 8 $ stack [
      ccn 30 # ccv (range 0 127 $ slow 30 sine),
      ccn 31 # ccv "[0 70 30 110]/3",
      ccn 32 # ccv 10 
      ] # s "midi"

# MIDI Clock

See the [MIDI Clock](/wiki/MIDI_Clock "wikilink") page. </translate>
