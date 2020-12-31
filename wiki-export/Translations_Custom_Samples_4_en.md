---
title: Translations:Custom Samples/4/en
permalink: wiki/Translations:Custom_Samples/4/en/
layout: wiki
---

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
