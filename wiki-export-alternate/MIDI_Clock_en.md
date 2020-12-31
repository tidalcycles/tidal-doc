---
title: MIDI Clock/en
permalink: wiki/MIDI_Clock/en/
layout: wiki
---

<languages/> Once you've set up SuperDirt MIDI by following [the
tutorial](/wiki/SuperDirt_MIDI_Tutorial "wikilink"), sending midiclock is
fairly straightforward and works well, although still in development.
This will become easier still in the future.

First, you can start sending MIDI clock messages, 48 per cycle, like
this:

    p "midiclock" $ midicmd "midiClock*48" # s "midi"

Your MIDI device should then adjust its BPM to Tidal's
[cps](cps "wikilink"). Then it's worth sending a 'stop' message like
this:

    once $ midicmd "stop" # s "midi" 

and then finally a start message to start the MIDI clock at the right
time. The following sends a start message every fourth cycle:

    p "midictl" $ midicmd "start/4" # s "midi" 

Once everything's started and in sync, it's probably best to stop
sending the start messages to avoid glitching:

    p "midictl" $ silence

However now if you do

    hush

, the midiclock will stop as well as all the other patterns. To avoid
this, you can overwrite the

    hush

function with a version that silences particular patterns:

    let hush = mapM_ ($ silence) [d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,d14,d15,d16]

You will probably find that the downbeats for superdirt and your MIDI
devices don't align. As a starting point, set MIDI latency in
supercollider to 0:

    ~midiOut.latency = 0;

Make sure any offset on the MIDI side is also set to 0, then gradually
adjust one of them until they align. If they stay in alignment when you
change the cps, all is good!
