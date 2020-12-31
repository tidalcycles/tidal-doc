---
title: Multichannel sound
permalink: wiki/Multichannel_sound/
layout: wiki
tags:
 - Reference
---

In general, we deal with stereo sound, i.e. we use two speakers and
[pan](pan "wikilink") between them. Sometimes it's nice to work with
four or more speakers though, and enjoy that surround sound experience.

We set up for multichannel sound in a similar way to how we do [separate
audio outputs](/wiki/Separate_audio_outputs "wikilink"). With separate outputs
we are probably sending multiple stereo outputs though, whereas with
multichannel sound we generally send one output, but with multiple
channels.

Here's an example supercollider startup file, for panning across four
channels:

` (`  
`   s.options.numBuffers = 1024 * 256;`  
`   s.options.memSize = 8192 * 16;`  
`   s.options.maxNodes = 1024 * 32;`  
`   s.options.numOutputBusChannels = 4; // total number of channels output `  
`   s.options.numInputBusChannels = 2;`  
`   `  
`   s.waitForBoot {`  
`       ~dirt = SuperDirt(4, s); // pan across four channels`  
`       ~dirt.loadSoundFiles;`  
`       ~dirt.start(57120, [0, 0, 0, 0, 0, 0]);`  
`   };`  
`   s.latency = 0.3;`  
` );`

Have a look at [SuperDirt's
documentation](https://github.com/musikinformatik/SuperDirt) for more
details, in particular the example
[superdirt\_startup.scd](https://github.com/musikinformatik/SuperDirt/blob/develop/superdirt_startup.scd)
file.

This line sets the number of output channels coming from supercollider:

`   s.options.numOutputBusChannels = 4; // total number of channels output `

This sets the number of channels to pan across. For multichannel sound,
this will generally be the same number as above.

`   ~dirt = SuperDirt(4, s); // pan across four channels`

Each 0 in the below represents one orbit, giving us six orbits. You
probably want to keep these as zeroes, so every orbit starts from the
first channel.

`   ~dirt.start(57120, [0, 0, 0, 0, 0, 0]);`

That's it! You can save this code in your supercollider startup file
(which you can find via the supercollider menus) so you don't have to
run it manually when you start supercollider.

Then to use it, you can use things like:

    d1 $ sound "bd*16" # pan saw

The above will play kick drums in a ring around all the speakers. If you
had four speakers, by default they'd be in position 0, 0.25, 0.5 and
0.75. Therefore 0.125 would be halfway between the first two speakers,
and 0.875 would be halfway between the first and last speakers. Once you
get up to 1, you're back to the first speaker again.

Because 0 and 1 are the same speaker, the [jux](jux "wikilink") function
doesn't work well (as it will play the original pattern in position 0,
and the transformed pattern on pan position 1, which in multichannel
sound, are the same speaker. Instead, you can use

    juxBy 0.5

, or

    jux'

, which distributes a list of functions across a multichannel ring.

    d1 $ juxBy 0.5 rev $ sound "bd cp sn:2 mt*2" # pan saw

    d1 $ jux' [id, rev] $ sound "bd cp sn:2 mt*2" # pan saw

    d1 $ jux' [id, rev, fast 2] $ sound "bd cp sn:2 mt*2" # pan saw
