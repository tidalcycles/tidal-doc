---
title: mi-UGens
id: mi-ugens
---

## Description

[Mutable Instruments](https://mutable-instruments.net/) was a popular Eurorack module company from Normandy. The designer, engineer, and founder of Mutable Instruments, Émilie Gillet, has made all of her work [open source](https://github.com/pichenettes/eurorack). [Volker Böhm](https://vboehm.net/) has taken the time to [port](https://github.com/v7b1/mi-UGens) some of these modules to [SuperCollider](https://supercollider.github.io/) under the project title **mi-UGens** (no affiliation with Mutable Instruments).

Significant further work to make mi-UGens functional in Tidal was done by a large number of forum users, documented in [this thread](https://club.tidalcycles.org/t/mutable-instruments-ugens/2730) by [@chrislo](https://club.tidalcycles.org/u/chrislo/summary)

## Contents

 - [Installation Method (opens a new page)](./mi-ugens-installation) for Windows, Mac and Linux
 - [Synthdefs Reference](./mi-ugens#synth-reference) for miOmi, miBraids and miPlaits
 - [Effects Reference](./mi-ugens#effects-global) for miVerb, miClouds, miRings, etc (todo)

## Synth Reference

All mi-UGens Synth modules support the following common SynthDef parameters

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
