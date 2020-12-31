---
title: Custom Samples/en
permalink: wiki/Custom_Samples/en/
layout: wiki
tags:
 - Reference
---

<languages/> Adding and using your own custom samples in TidalCycles is
relatively easy. You don't actually add samples into TidalCycles, but
instead add them into SuperCollider and the SuperDirt quark. To do this,
you will need to customize your SuperDirt startup code.

# Custom SuperDirt Startup

When you open SuperCollider, instead of the normal `SuperDirt.start`
code, you will need to write a longer script that tells SuperDirt where
to find your samples. The startup script will look like this:

``` c
(
s.waitForBoot {
    ~dirt = SuperDirt(2, s); // two output channels
    ~dirt.loadSoundFiles("/Users/myUserName/Dirt/samples/*"); // specify sample folder to load
    s.sync; // wait for supercollider to finish booting up
    ~dirt.start(57120, [0, 0]); // start superdirt, listening on port 57120, create two orbits each sending audio to channel 0
};
);
```

To run the above code, place the cursor anywhere inside that code block,
then press `Ctrl+Enter` (or `Command+Enter` on MacOS) to evaluate the
whole block.

The above code will boot the SuperCollider server, then start up
SuperDirt with some samples located at `/Users/myUserName/Dirt/samples`.

You can reference a longer example startup script located in the
SuperDirt code repository:
<https://github.com/musikinformatik/SuperDirt/blob/develop/superdirt_startup.scd>

## Windows Paths

If you are running Windows, you will need to escape the backslash
characters in Windows paths:

    ~dirt.loadSoundFiles("c:\\Users\\myUserName\\Dirt\\samples\\*")

# Sample Folder Structure

In the above example, we have imported a folder at the path
`/Users/myUserName/Dirt/samples`. In order for SuperDirt to recognize
the sound names that Tidal sends, the `/Users/myUserName/Dirt/samples`
folder will need to have sub-folders for each sound name, and each sound
name folder will need to have sample files:

`Users/`  
`|-- myUserName/`  
`    |-- Dirt/`  
`        |-- samples/`  
`            |-- myBass/`  
`            |   |-- bass1.wav`  
`            |   |-- bass2.wav`  
`            |   |-- bass3.wav`  
`            |-- hits/`  
`            |   |-- hit1.wav`  
`            |   |-- hit2.wav`  
`            |   |-- hit3.wav`  
`            |-- field/`  
`            |   |-- bridge.wav`  
`            |   |-- mountains1.wav`  
`            |   |-- mountains2.wav`  
`            |   |-- plains.wav`  
`            |   |-- river.wav`

# Using the Custom Samples in Tidal Code

Given the folder structure above, you can now use the `myBass`, `hits`,
and `field` sounds in your Tidal patterns:

    d1 $ s "mybass hits*4" # n (slow 2 $ run 3)
    d2 $ n "<0 2 1>" # s "field" # cut 1

# Specifying Multiple Folders

If you have samples located in many folders, you can import them all:

``` c
(
s.waitForBoot {
    ~dirt = SuperDirt(2, s); // two output channels

        // load samples from multiple folders:
    ~dirt.loadSoundFiles("/Users/myUserName/Dirt/samples/*"); 
    ~dirt.loadSoundFiles("/Users/myUserName/sounds/*"); 
    ~dirt.loadSoundFiles("/Users/myUserName/recordings/chaska-sessions/*");
    ~dirt.loadSoundFiles("/Users/myUserName/recordings/super-duper-experiments/*"); 

    s.sync; // wait for supercollider to finish booting up
    ~dirt.start(57120, [0, 0]); // start superdirt, listening on port 57120, create two orbits each sending audio to channel 0
};
);
```
