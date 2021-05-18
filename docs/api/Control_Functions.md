---
title: Control Functions
permalink: wiki/Control_Functions/
layout: wiki
tags:
 - Control Functions
 - Functions
---

| Function name                             | Input type       | Description                                                                                                                                        |
|-------------------------------------------|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| [s](s "wikilink")                         | `Pattern String` | An alias of [sound](sound "wikilink")                                                                                                              |
| [n](n "wikilink")                         | `Pattern Double` |                                                                                                                                                    |
| [sound](sound "wikilink")                 | `Pattern String` | Sounds - either sample sets or synth names. This control is \*required\* when triggering sounds via SuperDirt.                                     |
| [begin](begin "wikilink")                 | `Pattern Double` | Starts sample playback some fraction from the beginning. 0.5 would start playback at the middle.                                                   |
| [end](end "wikilink")                     | `Pattern Double` | Stops sample playback some fraction from the end. 0.5 would stop playback at the middle.                                                           |
| [accelerate](accelerate "wikilink")       | `Pattern Double` | Speeds up (or slows down) samples while they play.                                                                                                 |
| [cps](cps "wikilink")                     | `Pattern Double` |                                                                                                                                                    |
| [nudge](nudge "wikilink")                 | `Pattern Double` |                                                                                                                                                    |
| [unit](unit "wikilink")                   | `Pattern String` |                                                                                                                                                    |
| [loop](loop "wikilink")                   | `Pattern Double` | Specifies how many times to loop through the sample.                                                                                               |
| [legato](legato "wikilink")               | `Pattern Double` |                                                                                                                                                    |
| [sustain](sustain "wikilink")             | `Pattern Double` |                                                                                                                                                    |
| [gain](gain "wikilink")                   | `Pattern Double` | Specifies volume. Values less than 1 make the sound quieter. Values greater than 1 make the sound louder.                                          |
| [channel](channel "wikilink")             | `Pattern Int`    |                                                                                                                                                    |
| [pan](pan "wikilink")                     | `Pattern Double` | Controls stereo position for playback. With the default two-channel setup, zero is left, one is right.                                             |
| [note](note "wikilink")                   | `Pattern Double` |                                                                                                                                                    |
| [freq](freq "wikilink")                   | `Pattern Double` |                                                                                                                                                    |
| [midinote](midinote "wikilink")           | `Pattern Double` |                                                                                                                                                    |
| [octave](octave "wikilink")               | `Pattern Int`    | Sets where "middle" C is. Default is 5, so "n 0" corresponds to "midinote 60"                                                                      |
| [offset](offset "wikilink")               | `Pattern Double` |                                                                                                                                                    |
| [cut](cut "wikilink")                     | `Pattern Int`    |                                                                                                                                                    |
| [orbit](orbit "wikilink")                 | `Pattern Int`    |                                                                                                                                                    |
| [shape](shape "wikilink")                 | `Pattern Double` | Distorts the sound, has a maximum value of 1.                                                                                                      |
| [hcutoff](hcutoff "wikilink")             | `Pattern Double` | Frequency in Hz for a high-pass filter. Alias is "hpf".                                                                                            |
| [hresonance](hresonance "wikilink")       | `Pattern Double` | Resonance for high-pass filter. Alias is "hpq".                                                                                                    |
| [bandf](bandf "wikilink")                 | `Pattern Double` |                                                                                                                                                    |
| [bandq](bandq "wikilink")                 | `Pattern Double` |                                                                                                                                                    |
| [crush](crush "wikilink")                 | `Pattern Double` |                                                                                                                                                    |
| [coarse](coarse "wikilink")               | `Pattern Int`    |                                                                                                                                                    |
| [cutoff](cutoff "wikilink")               | `Pattern Double` |                                                                                                                                                    |
| [attack](attack "wikilink")               | `Pattern Double` |                                                                                                                                                    |
| [release](release "wikilink")             | `Pattern Double` |                                                                                                                                                    |
| [hold](hold "wikilink")                   | `Pattern Double` |                                                                                                                                                    |
| [tremolorate](tremolorate "wikilink")     | `Pattern Double` |                                                                                                                                                    |
| [tremolodepth](tremolodepth "wikilink")   | `Pattern Double` |                                                                                                                                                    |
| [phaserrate](phaserrate "wikilink")       | `Pattern Double` |                                                                                                                                                    |
| [phaserdepth](phaserdepth "wikilink")     | `Pattern Double` |                                                                                                                                                    |
| [vowel](vowel "wikilink")                 | `Pattern String` |                                                                                                                                                    |
| [delaytime](delaytime "wikilink")         | `Pattern Double` |                                                                                                                                                    |
| [delayfeedback](delayfeedback "wikilink") | `Pattern Double` |                                                                                                                                                    |
| [delayAmp](delayAmp "wikilink")           | `Pattern Double` | *missing from params?*                                                                                                                             |
| [delaySend](delaySend "wikilink")         | `Pattern Double` | *missing from params?*                                                                                                                             |
| [lock](lock "wikilink")                   | `Pattern Double` | 1 to lock delay to cycles per second (cps) aka tempo sync so with `# lock 1 # delayt 0.25` = 1/4 of cycle delay etc 0 to leave in terms of seconds |
| [size](size "wikilink")                   | `Pattern Double` |                                                                                                                                                    |
| [room](room "wikilink")                   | `Pattern Double` |                                                                                                                                                    |
| [dry](dry "wikilink")                     | `Pattern Double` |                                                                                                                                                    |
| [leslie](leslie "wikilink")               | `Pattern Double` |                                                                                                                                                    |
| [lrate](lrate "wikilink")                 | `Pattern Double` |                                                                                                                                                    |
| [lsize](lsize "wikilink")                 | `Pattern Double` |                                                                                                                                                    |
| [waveloss](waveloss "wikilink")           | `Pattern Double` | Drops samples n out of 100.                                                                                                                        |
| [squiz](squiz "wikilink")                 | `Pattern Double` | A weird pitch-shifter. Accepts numbers over 1.                                                                                                     |
