---
title: Separate audio outputs/en
permalink: wiki/Separate_audio_outputs/en/
layout: wiki
tags:
 - Reference
---

<languages/>

# How can I output/record separate audio channels?

Lets say you wanted to make a multi-track recording, with different
patterns playing at the same time, but recorded separately.. Or wanted
to route the audio from some patterns into external effects processor.
How is this possible?

Tidal's audio engine is (most often) SuperDirt, and the key to routing
audio channels is understanding how to configure and use orbits. You can
think of each orbit as an audio output, with its own set of global
effects (by default, reverb and delay).

Have a look at [SuperDirt's
documentation](https://github.com/musikinformatik/SuperDirt), in
particular the example
[superdirt_startup.scd](https://github.com/musikinformatik/SuperDirt/blob/develop/superdirt_startup.scd)
file. You'll want to paste the setup code into the supercollider editor
window. If you save it in your supercollider startup file it will
automatically run when you open supercollider - you can find that file
via the menus.

There are probably only two bits that you will want to change in the
setup code. If you wanted six stereo outputs, that would require 12
channels in total, so you would set the number of output bus channels
accordingly, i.e.:

`s.options.numOutputBusChannels = 12;`

You assign the orbits to separate stereo channels by offsetting each
one, like this:

`~dirt.start(57120, [0, 2, 4, 6, 8, 10]);`

You might also be tempted to change the number in this line:

`~dirt = SuperDirt(2, s);`

However if you want to work in stereo, you should keep this number to 2,
i.e. the number of channels per orbit.

If your editor plugin (and therefore BootTidal.hs), then

    d1

will automatically be sent to orbit 0, d2 to orbit 1, and so on. Or you
can be explicit by using the orbit control, e.g.

    d1 $ sound "bd" # orbit 3

You're now free to route the audio to a DAW for e.g. effects processing
or recording, or record all the channels straight from supercollider
into a single multichannel file. Have a look around the [SuperDirt hacks
folder](https://github.com/musikinformatik/SuperDirt/tree/master/hacks)
for more fun with orbits.
