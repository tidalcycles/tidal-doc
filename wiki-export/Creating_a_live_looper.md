---
title: Creating a live looper
permalink: wiki/Creating_a_live_looper/
layout: wiki
---

[Live looping](https://en.wikipedia.org/wiki/Live_looping) is the
practice of recording and playing back of music in real-time. Below
we'll create a custom instrument in SuperCollider that we can call from
TidalCycles to record a loop, and then playback in the usual fashion.

**First let's start with our custom SynthDef (run this in
SuperCollider)**

-   tested on Tidal 1.0.7 / SuperCollider 3.10.0 / Windows10

<!-- -->

    (
    var diversions=();
    var dirt=~dirt;
    SynthDef(\rec,{
        |buffer,duration|
        var line = Line.ar(dur:duration, doneAction:2);
        RecordBuf.ar(SoundIn.ar([0,1]), buffer, doneAction: Done.freeSelf, loop: 0);
    }).add;
    ~diversions=diversions;
    ~diversions[\rec] = {
        var seconds = 1/(~cps*~speed);
        var frames = ~dirt.server.sampleRate*seconds;
        var bufferName = format("rec%",~n.asInteger).asSymbol;
        mod(~cycle,1/~speed).postln;
        if(mod(~cycle,1/~speed)==0,{
            var buffer = Buffer.alloc(~dirt.server,frames,~numChannels);
            ~dirt.soundLibrary.addBuffer(bufferName, buffer);
            Synth(\rec,[buffer:buffer,duration:seconds]);
        });
        true;
    };
    ~dirt.orbits[0].defaultParentEvent[\diversion] = { |e| diversions[~s].value; };
    )

**Record from TidalCycles**

The synthdef we created makes an instrument named 'rec' available that
records into a buffer. We can call it from Tidal like this:

    -- recording
    d1 $ loopAt 1 $ s "rec" + n "0"

This will record into a sample named 'rec0' that we can reference in
other code.

**Playback**

We can playback the recording as-is like this:

    -- playback 
    d2 $ loopAt 1 $ s "rec0" 

That's it! You have a basic looper setup. From here you can start
experimenting with layering, gain structures, delays, varying the speed
of playback, etc.

**Examples**

This will play a simple melody first, then layer the recorded 4 cycle
loop at half speed,

    d1 $ stack [
      every 2 (fast 2) $ n "[0 3 5 7]/4" # s "tink", 
      loopAt 4 $ s "rec" + n "1",
      loopAt 8 $ s "rec1" 
      ] # gain "1.25" # room "0.6" # size "0.9" 

This will play an arpeggio, recording a one cycle loop every 4 cycles,
and playing back the loop at 2x speed.

    d1 $ stack [
      n (arp "updown" "<c'maj'4 e'maj7'4>") # sound "notes",
      whenmod 4 3 (const $ loopAt 1 $ s "rec" + n "6") $ s "~",
      loopAt 0.5 $ s "rec6" # gain "1.25"
    ]

**Further hacks**

By default this only records into a temporary buffer which will
disappear when we close SuperCollider. With a small addition, we can
write the loop out to disk for later use.

To do this, add the following line below your Synth() call

     ...
     Synth(\rec,[buffer:buffer,duration:seconds]);
     s.record(duration: seconds);  // <-- add this line

This will capture the recording to SuperCollider's recording directory,
the path of which can be found by running:

    thisProcess.platform.recordingsDir

**Warning!** you could write a lot of recordings to disk if you're not
careful :)
