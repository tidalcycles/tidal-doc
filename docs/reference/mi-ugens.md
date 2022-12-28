---
title: mi-UGens
id: mi-ugens
---

## Description

[Mutable Instruments](https://mutable-instruments.net/) was a popular Eurorack module company from Normandy. The designer, engineer, and founder of Mutable Instruments, Émilie Gillet, has made all of her work [open source](https://github.com/pichenettes/eurorack). [Volker Böhm](https://vboehm.net/) has taken the time to [port](https://github.com/v7b1/mi-UGens) some of these modules to [SuperCollider](https://supercollider.github.io/) under the project title **mi-UGens** (no affiliation with Mutable Instruments).

Significant further work to make mi-UGens functional in Tidal was done by a significant number of forum users, documented in [this thread](https://club.tidalcycles.org/t/mutable-instruments-ugens/2730) by [@chrislo](https://club.tidalcycles.org/u/chrislo/summary)

## Contents

 - [Installation Method](mi-ugens#installation) for Windows, Mac and Linux
 - [Synthdefs Reference](mi-ugens#synth-reference) for miOmi, miBraids and miPlaits
 - [Effects Reference](mi-ugens#effects-global) for miVerb, miClouds, miRings, etc (todo)

## Installation

### Automatic

For debian/ubuntu/mint systems, these ugens can be installed as part of the [ansible Tidal installer](https://github.com/cleary/ansible-tidalcycles#ugens-mutable-instruments)

### Manual

1. Unpack the [latest release](https://github.com/v7b1/mi-UGens/releases/latest/) from [mi-UGens](https://github.com/v7b1/mi-UGens) appropriate to your Operating System

2. Move the top level directory of the archive (`mi-UGens/`) into the SuperCollider Extensions folder (create it if it doesn't exist):

 - Linux:   `/home/<youruser>/.local/share/SuperCollider/Extensions/mi-UGens`
 - Windows: `C:\Users\<youruser>\AppData\Local\SuperCollider\Extensions\mi-UGens`
 - OSX:     `/Users/<youruser>/Library/Application Support/SuperCollider/Extensions/mi-UGens`

**Note:** The SuperCollider Extensions folder can be found by running `Platform.userExtensionDir` in SuperCollider. The path will be printed to the post window.

3. Create a new synthdef file `mi-ugens.scd`, with [these synthdefs](https://raw.githubusercontent.com/cleary/ansible-tidalcycles-synth-mi-ugens/master/files/mutable-instruments-synthdefs.scd)

 - Linux:   `/home/<youruser>/.local/share/SuperCollider/synthdefs/mi-ugens.scd`
 - Windows: `C:\Users\<youruser>\AppData\Local\SuperCollider\synthdefs\mi-ugens.scd`
 - OSX:     `/home/<youruser>/Library/Application Support/SuperCollider/synthdefs/mi-ugens.scd`


4. Create a new parameter definitions file, `mi-ugens-params.hs`, with [these parameters](https://raw.githubusercontent.com/cleary/ansible-tidalcycles-synth-mi-ugens/master/files/mutable-instruments-ugens_parameters.hs)

 - Linux:   `/home/<youruser>/.local/share/SuperCollider/synthdefs/mi-ugens-params.hs`
 - Windows: `C:\Users\<youruser>\AppData\Local\SuperCollider\synthdefs\mi-ugens-params.hs`
 - OSX:     `/Users/<youruser>/Library/Application Support/SuperCollider/synthdefs/mi-ugens-params.hs`

5. Configure SuperCollider - edit your `startup.scd`:

 - Linux:   `/home/<youruser>/.conf/SuperCollider/startup.scd`
 - Windows: `C:\Users\<youruser>\AppData\Local\SuperCollider\startup.scd`
 - OSX:     `/Users/<youruser>/Library/Application Support/SuperCollider/startup.scd`

6. Load the `mi-ugens.scd` synthdef in `startup.scd`. Use the full path from **3.**

*NOTE FOR WINDOWS USERS: you must use double backslashes for the `load()` path in startup.scd, eg `load("C:\\Users\\<youruser>\...");`*

After:
```
...
  ~dirt = SuperDirt(2, s);
```
```
  // load mi-ugens.scd synthdefs
  load("FULL_PATH_TO_mi-ugens.scd");
  // end load mi-ugens.scd synthdefs
```

7. Configure `verb` and `clouds` as **Global Effects**. Add the following stanza as indicated to your `startup.scd`:

After:
```
...
            ~d10 = ~dirt.orbits[9]; ~d11 = ~dirt.orbits[10]; ~d12 = ~dirt.orbits[11];
        );
```
```          
        // define global effects for mutable instruments effects
        ~dirt.orbits.do { |x|
            var clouds = GlobalDirtEffect(\global_mi_clouds, [\cloudspitch, \cloudspos, \cloudssize, \cloudsdens, \cloudstex, \cloudswet, \cloudsgain, \cloudsspread, \cloudsrvb, \cloudsfb, \cloudsfreeze, \cloudsmode, \cloudslofi]);
            var verb = GlobalDirtEffect(\global_mi_verb, [\verbwet, \verbtime, \verbdamp, \verbhp, \verbfreeze, \verbdiff, \verbgain]);
            x.globalEffects = x.globalEffects
              .addFirst(clouds)
              .addFirst(verb); 
            x.initNodeTree;    
        };                     
        // end define global effects for mutable instruments effects
```

8. Save your `startup.scd` and exit

9. You can choose to import the `mi-ugens-params.hs` parameter definitions manually in your tidal session, or add the following line to the `BootTidal.hs` file associated with your editor of choice (locating the correct `BootTidal.hs` is beyond the scope of this reference)
```
        ...
        :script "FULL_PATH_TO_mi-ugens-params.hs"
        :set prompt (.*$)
        ...
```

10. Start/restart SuperCollider

**OSX Users Note: you may see a security dialog disallowing the ugens to run. Please see [this post by @oscd](https://club.tidalcycles.org/t/mutable-instruments-ugens/2730/106) for workarounds/fixes**


## Synth Reference

All mi-UGens Synth modules support the following common SynthDef paramaters

**Supported parameters (default value)**

Parameter | Default
----------|--------
`freq` | 440
`sustain` | 1
`pan` | 0
`begin` | 0
`end` | 1
`speed` | 1
`accelerate` | 0

### omi
**Description:** miOmi or "Ominous Voice", an almost vibraphone-like synth, electric bass lows and tinkling highs. `omi` does not take any extra parameters. 

**Example:**

```haskell
d1  $ s "omi" <| note "a [~ g] [c b] [g gs]" 
    # octave "<3 4 5 6 7 8>"
    # sustain "{1 2 1}%8"
```

### braids
**Description:** miBraids is a voltage-controlled monophonic digital sound source. Each algorithm is controlled by two continuously variable parameters, `timbre` and `color`. [More information...](https://web.archive.org/web/20200508162718/https://mutable-instruments.net/modules/braids/manual/)

Parameter (def) | Range | Description
----------------|-------|------------
`model` (0) | 0-47 | 48 available model selections, for details on each of the models see this [manual](https://web.archive.org/web/20200508162718/https://mutable-instruments.net/modules/braids/manual/)
`timbre` (0.5) | 0.0-1.0 | model specific tone control
`color` (0.5) | 0.0-1.0 | model specific tone control

**Example:**

```haskell
d1  $ s "braids" <| note "a [~ g] [c b] [g gs]" 
    # octave "<3 4 5 6 7 8>"
    # sustain "{1 2 1}%8"
    # model (slow 48 $ run 48)
    # timbre (slow 3 sine)
    # color (saw)
```

### plaits
**Description:** miPlaits is the spiritual successor of *miBraids*, with direct access to a large palette of easily tweakable raw sonic material, covering the whole gamut of synthesis techniques. [More information...](https://web.archive.org/web/20201111233906/https://mutable-instruments.net/modules/plaits/manual/)

Parameter (def) | Range | Description
----------------|-------|------------
`engine` (0) | 0-15 | 16 available engine selections, the later numbers focus on noisy and percussive sounds. For details, see this [manual](https://web.archive.org/web/20201111233906/https://mutable-instruments.net/modules/plaits/manual/)
`timbre` (0.5) | 0.0-1.0 | engine specific tone control - sweeps the spectral content from dark/sparse to bright/dense
`harm` (0.5) | 0.0-1.0 | engine specific tone control - **harmonics** controls the frequency spread or the balance between the various constituents of the tone
`morph` (0.5) | 0.0-1.0 | engine specific tone control - explores lateral timbral variations
`level` (1) | 0.0-1.0 | Opens the internal low-pass gate, to simultaneously control the amplitude and brightness of the output signal. Also acts as an accent control when triggering the physical or percussive models
`lpgdecay` (0) | 0.0-1.0 | adjust the ringing time of the LPG and the decay time of the internal envelope
`lpgcolour` (0) | 0.0-1.0 | adjust the response of the LPG, from VCFA to VCA
`lpg d c` | see above | convenience function for simultaneous `lpgdecay` and `lpgcolour` control

**Example:**

```haskell
d1  $ s "plaits" <| note "a [~ g] [c b] [g gs]" 
    # octave "<3 4 5 6 7 8>"
    # sustain "{1 2 1}%8"
    # engine (slow 16 $ run 16)
    # timbre (slow 3 sine)   
    # harm (slow 4 saw)  
    # morph (slow 9 saw)
    # level (slow 8 sine)
```


## Effects (Global)

### verb
Description: todo

- param
- param
- param

### clouds
Description: todo

- param
- param
- param

### etc
