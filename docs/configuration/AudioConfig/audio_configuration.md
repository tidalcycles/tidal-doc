---
title: Audio Outputs
id: audio_outputs
---

## Separate audio channels 

Lets say you wanted to make a multi-track recording, with different patterns playing at the same time, but recorded separately.. Or wanted to route the audio from some patterns into external effects processor. How is this possible? Tidal's audio engine is (most often) **SuperDirt**, and the key to routing audio channels is understanding how to configure and use orbits. You can think of each orbit as an audio output, with its own set of global effects (by default, reverb and delay).

Have a look at [SuperDirt's documentation](https://github.com/musikinformatik/SuperDirt), in particular the example
[superdirt_startup.scd](https://github.com/musikinformatik/SuperDirt/blob/develop/superdirt_startup.scd)
file. You'll want to paste the setup code into the **SuperCollider** editor
window. If you save it in your **SuperCollider** startup file it will
automatically run when you open **SuperCollider** - you can find that file
via the menus.

There are probably only two bits that you will want to change in the
setup code. If you wanted six stereo outputs, that would require `12`
channels in total, so you would set the number of output bus channels
accordingly, i.e.:
```c
s.options.numOutputBusChannels = 12;
```

You assign the orbits to separate stereo channels by offsetting each
one, like this:
```c
~dirt.start(57120, \[0, 2, 4, 6, 8, 10\]);
```
You might also be tempted to change the number in this line:

```c
~dirt = SuperDirt(2, s);
```

However if you want to work in stereo, you should keep this number to 2,
i.e. the number of channels per orbit.

If your editor plugin (and therefore ```BootTidal.hs```), then `d1` will automatically be sent to orbit 0, `d2` to orbit 1, and so on. Or you can be explicit by using the orbit control, e.g.
```c
d1 $ sound "bd" # orbit 3
```

You're now free to route the audio to a DAW for e.g. effects processing
or recording, or record all the channels straight from **SuperCollider**
into a single multichannel file. 

## Multichannel sound

In general, we deal with stereo sound, i.e. we use two speakers and **pan** between them. Sometimes it's nice to work with four or more speakers though, and enjoy that surround sound experience. We set up for multichannel sound in a similar way to how we do [separate audio outputs](##Separate audio channels). With separate outputs we are probably sending multiple stereo outputs though, whereas with multichannel sound we generally send one output, but with multiple channels.

Here's an example supercollider startup file, for panning across four channels:


```c
(
s.options.numBuffers = 1024 * 256;
s.options.memSize = 8192 * 16;
s.options.maxNodes = 1024 * 32;
s.options.numOutputBusChannels = 4; // total number of channels output 
s.options.numInputBusChannels = 2;

s.waitForBoot {
~dirt = SuperDirt(4, s); // pan across four channels
~dirt.loadSoundFiles;
~dirt.start(57120, [0, 0, 0, 0, 0, 0]);
};
s.latency = 0.3;
);
```

Have a look at **SuperDirt**'s documentation for more details, in particular the example `superdirt_startup.scd` file.

This line sets the number of output channels coming from supercollider:

```c
s.options.numOutputBusChannels = 4; // total number of channels output 
```

This sets the number of channels to pan across. For multichannel sound, this will generally be the same number as above.

```c
~dirt = SuperDirt(4, s); // pan across four channels
```

Each 0 in the below represents one orbit, giving us six orbits. You probably want to keep these as zeroes, so every orbit starts from the first channel.

```c
~dirt.start(57120, [0, 0, 0, 0, 0, 0]);
```

That's it! You can save this code in your supercollider startup file (which you can find via the supercollider menus) so you don't have to run it manually when you start supercollider.

Then to use it, you can use things like:

```c
d1 $ sound "bd*16" # pan saw
```

The above will play kick drums in a ring around all the speakers. If you had four speakers, by default they'd be in position `0`, `0.25`, `0.5` and `0.75`. Therefore `0.125` would be halfway between the first two speakers, and `0.875` would be halfway between the first and last speakers. Once you get up to `1`, you're back to the first speaker again.

Because `0` and `1` are the same speaker, the jux function doesn't work well (as it will play the original pattern in position `0`, and the transformed pattern on pan position `1`, which in multichannel sound, are the same speaker. Instead, you can use `juxBy 0.5` , or `jux'`, which distributes a list of functions across a multichannel ring.

```c
d1 $ juxBy 0.5 rev $ sound "bd cp sn:2 mt*2" # pan saw

d1 $ jux' [id, rev] $ sound "bd cp sn:2 mt*2" # pan saw

d1 $ jux' [id, rev, fast 2] $ sound "bd cp sn:2 mt*2" # pan saw
```

## Hack the audio

Have a look around the [SuperDirt hacks
folder](https://github.com/musikinformatik/SuperDirt/tree/master/hacks)
for more fun with orbits:
* Orbit routing
* Sound spatialisation
* Audio looping
* Adding global / local effects

## Audio mixing and mastering

### StageMaster

[StageMaster](https://github.com/calumgunn/StageMaster), made by Calum Gunn, is a light mastering chain for use during live coding performance in **SuperCollider**. It adds light compression, EQ and limiting to all output.
