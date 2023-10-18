---
title: mi-UGens
id: mi-ugens
description: mi-UGens - installation manual and usage reference for TidalCycles
---

## Description

[Mutable Instruments](https://mutable-instruments.net/) was a popular Eurorack module company from Normandy. The designer, engineer, and founder of Mutable Instruments, [Émilie Gillet](https://github.com/pichenettes), has made all of her work [open source](https://github.com/pichenettes/eurorack). [Volker Böhm](https://vboehm.net/) has taken the time to [port](https://github.com/v7b1/mi-UGens) some of these modules to [SuperCollider](https://supercollider.github.io/) under the project title **mi-UGens** (no affiliation with Mutable Instruments).

Significant further work to make mi-UGens functional in Tidal was done by a large number of forum users, documented in [this thread](https://club.tidalcycles.org/t/mutable-instruments-ugens/2730) by [@chrislo](https://club.tidalcycles.org/u/chrislo/summary)

## Contents

 - [Installation Method (opens a new page)](/reference/mi-ugens-installation.md) for Windows, Mac and Linux
 - [Synth Reference](/reference/mi-ugens.md#synths) for miOmi, miBraids and miPlaits
 - [Effects Reference](/reference/mi-ugens.md#effects) for miVerb, miClouds, miRings, etc

## Synths

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

### `omi`
**Description:** miOmi or "Ominous Voice", an almost vibraphone-like synth, electric bass lows and tinkling highs. `omi` does not take any extra parameters. 

**Example:**

```haskell
d1  $ s "omi" <| note "a [~ g] [c b] [g gs]" 
    # octave "<3 4 5 6 7 8>"
    # sustain "{1 2 1}%8"
```

### `braids`
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

### `plaits`
**Description:** miPlaits is the spiritual successor of *miBraids*, with direct access to a large palette of easily tweakable raw sonic material, covering the whole gamut of synthesis techniques. [More information...](https://web.archive.org/web/20201111233906/https://mutable-instruments.net/modules/plaits/manual/)

Parameter (def) | Range | Description
----------------|-------|------------
`engine` (0) | 0-15 | 16 available engine selections, the later numbers focus on noisy and percussive sounds. All engines are detailed in the [Plaits engine page](/reference/mi-ugens-plaits.md)
`timbre` (0.5) | 0.0-1.0 | engine specific tone control - sweeps the spectral content from dark/sparse to bright/dense
`harm` (0.5) | 0.0-1.0 | engine specific tone control - **harmonics** controls the frequency spread or the balance between the various constituents of the tone
`morph` (0.5) | 0.0-1.0 | engine specific tone control - explores lateral timbral variations
`level` (1) | 0.0-1.0 | Opens the internal low-pass gate, to simultaneously control the amplitude and brightness of the output signal. Also acts as an accent control when triggering the physical or percussive models
`lpgdecay` (0) | 0.0-1.0 | adjust the ringing time of the LPG and the decay time of the internal envelope
`lpgcolour` (0) | 0.0-1.0 | adjust the response of the LPG, from VCFA to VCA
`lpg d c` | see above | convenience function for simultaneous `lpgdecay` and `lpgcolour` control
`mode` (0) | 0-1 | synthdef specific mode to control signal mixing, [more information](https://github.com/cleary/ansible-tidalcycles-synth-mi-ugens/pull/1)

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

### `tides`
**Description:** miTides is a tidal (not, Tidal) modulator based on the concept of **Flow** (a voltage goes up) and **Ebb** (a voltage goes back to it's initial level). [More information...](https://web.archive.org/web/20200918083807/https://mutable-instruments.net/modules/tides/manual/)

Parameter | Range | Description
----------|-------|------------
`tidesshape` (0.5) | 0.0-1.0 | shape of the ascending and descending segments
`tidessmooth` (0.5) | 0.0-1.0 | waveshape transformation, 0.0-0.5 smooths edges, 0.5-1.0 adds kinks and bumps along the slope
`slope` (0.5) | 0.0-1.0 | ratio between the durations of the ascending and descending segments
`shift` (0.5) | 0.0-1.0 | mode specific control, adjusting amplitude and other parameters
`mode` (2)| 0-3 | different output modes. For details see the [Manual](https://web.archive.org/web/20200918083807/https://mutable-instruments.net/modules/tides/manual/)

**Example:**

```haskell
d1  $ s "tides" <| note "a [~ g] [c b] [g gs]"
    # octave "<3 4 5 6 7 8>"
    # sustain "{1 2 1}%8"
    # mode "<0 1 2 3>"
    # shift (slow 5 sine)
    # tidesshape (slow 7 sine)
    # tidessmooth (range 0.2 1 $ slow 8 sine)
    # slope (slow 3 sine)
```

## Effects

### `verb` (global)
**Description:** miVerb is a gentle reverb implemented as a global effect with a large number of tweakable parameters

Parameter | Range | Description
----------|-------|------------
`verb w t d h` | na | convenience function, combining `wet`, `time`, `damp`, and `hp` 
`verbgain` | 0.0-1.0+ | gain level
`verbwet` | 0.0-1.0 | dry/wet mix
`verbtime` | 0.0-1.0+ | sustain time, be careful with feedback using values over 1 
`verbdamp` | 0.0-1.0 | suppression on the sustain, higher values suppress more quickly
`verbhp` | 0.0-1.0 | smaller values emulate larger chamber spaces
`verbfreeze` | 0 \| 1 | enable with `1`, freezes the last reverb event allowing it to tail off completely
`verbdiff` | 0.0-1.0 | new verb events interact with existing verb trails, lower values for a more pronounced effect

**Example:**

```haskell
d1  $ s "[[bd sd], linnhats*8]"
    # verb 0.9 0.9 0.1 0.2
```

### `clouds` (global)
**Description:** miClouds is a granular audio processor. It creates textures and soundscapes by combining multiple overlapping, delayed, transposed and enveloped segments of sound taken from an audio recording buffer. [More information...](https://web.archive.org/web/20201028001939/https://mutable-instruments.net/modules/clouds/manual/)

Parameter | Range | Description
----------|-------|------------
`clouds p s d t` | na | convenience function, combining `pos`, `size`, `dens` and `tex`
`cloudsblend w s f r` | na | convenience function, combining `wet`, `spread`, `fb` and `rvb`
`cloudspos` | 0.0-1.0 | selects from which part of the recording buffer the audio grains are played
`cloudssize` | 0.0-1.0 | grain size
`cloudspitch` | 0.0-1.0 | transposition
`cloudsdens` | 0.0-1.0 | grain density
`cloudstex` | 0.0-1.0 | grain texture, morphs through various shapes of grain envelopes
`cloudsgain` | 0.0-1.0+ | gain level
`cloudswet` | 0.0-1.0 | blend wet/dry mix
`cloudsspread` | 0.0-1.0 | blend stereo spread
`cloudsfb` | 0.0-1.0 | **WARNING** values over 0.3 get dangerous - blend feedback amount
`cloudsrvb` | 0.0-1.0 | blend reverberation amount
`cloudsfreeze` | 0 \| 1 | stops the recording of incoming audio, granularization is now performed on the last piece of audio
`cloudsmode` | 0-3 | infamous alternate modes, 0 = normal operation, 3 = spectral processor
`cloudslofi` | 0.0-1.0 | undocumented

**Example:**

```haskell
d1  $ s "[[bd sd], [linnhats*8]]"
    # clouds 0.1 0.5 0.05 0.1
    # cloudsblend 1 0.2 0.33 0.8
```

### `elements`
**Description:** miElements is a modal synthesis voice effect, generating raw sounds from a variety of sound creation techniques (bowing, blowing, or striking). [More information...](https://web.archive.org/web/20200422215323/https://www.mutable-instruments.net/modules/elements/manual/)

Parameter | Range | Description
----------|-------|------------
`elementsstrength` | (-1.0)-1.0 | attenuates (negative) or amplifies (positive) the excitation signal
`elementspitch` | 0.0-1.0 | fundamental frequency of the resonator
`elementscontour` | 0.0-1.0 | envelope applied to the bow/blow exciters
`elementsbowlevel` | 0.0-1.0 | amplitude of scratching/bowing resonator
`elementsbowtimb` | 0.0-1.0 | smoothness of the bow material
`elementsblowlevel` | 0.0-1.0 | amount of granular blowing noise sent to the resonator
`elementsblowtimb` | 0.0-1.0 | pitch/granulation rate of the noise generator
`elementsflow` | 0.0-1.0 | airflow of the blow generator
`elementsstrikelevel` | 0.0-1.0 | amount of percussive noise sent to the resonator
`elementsstriketimb` | 0.0-1.0 | brightness/speed of the percussive excitation
`elementsmallet` | 0.0-1.0 | changes the type of percussive noise
`elementsgeom` | 0.0-1.0 | geometry and stiffness of the resonating structure, from plates, to strings, to bars/tubes, to bells/bowls
`elementsbright` | 0.0-1.0 | low values simulate wood/nylon, high values simulate glass or steel
`elementsdamp` | 0.0-1.0 | how quickly energy dissipates through the material
`elementspos` | 0.0-1.0 | simulate different string/surface excitation points
`elementsspace` | 0.0-1.0 | stereo width and amount of reverb applied to sound
`elementsmodel` | 0 \| 1 | undocumented
`elementseasteregg` | 0 \| 1 | undocumented

**Example:**
```haskell
d1  $ s "[[bd sd], linnhats*8]"
    # elementsstrength "0.9"
    # elementspitch (slow 3 sine)
    # elementsblowlevel 0.6
    # elementsblowtimb (slow 5 sine)
    # elementsflow "{0.3 0.6 0.7}"
    # elementsstrikelevel 1
    # elementsstriketimb 0.1
    # elementsmallet rand
    # elementseasteregg "[1 | 0 | 0]"
    # elementsmodel "[0 | 1]"
    # elementscontour (slow 5 saw)
    # elementsgeom 2
    # elementsbright (slow 7 saw)
    # elementsdamp 0
    # elementspos 0.314
    # elementsspace 0.9
```

### `mu`
**Description:** miMu is a low frequency distortion effect, works best on long release, low frequency sounds

Parameter | Range | Description
----------|-------|------------
`mu` | 0-5+ | adjusts gain and applies a low frequency distortion

**Example:**

```haskell
d1  $ s "bass1:1"
    # mu 5
    # gain 0.7
```

### `rings`
**Description:** miRings is a resonator effect with three families of vibrating structures simulated. [More information...](https://web.archive.org/web/20201028000143/https://mutable-instruments.net/modules/rings/manual/)

Parameter | Range | Description
----------|-------|------------
`rings f s b d p` | na | convenience function
`ringsfreq` (440) | 0-1500+ | adjusts pitch, higher values are higher pitches, does not enjoy being patterned much
`ringsstruct`| 0.0-1.0 | model specific control, see the [manual](https://web.archive.org/web/20201028000143/https://mutable-instruments.net/modules/rings/manual/)
`ringsbright`| 0.0-1.0 | adjust level of higher harmonics in the signal
`ringsdamp`| 0.0-1.0 | controls the decay time, smaller values for shorter decay
`ringspos`| 0.0-1.0 | excitation position
`ringsmodel`| 0 \| 1 | toggle between modal, and sympathetic string resonators
`ringspoly`| 0 \| 1 | toggle polyphonic mode on
`ringsinternal`| 0 \| 1 | undocumented
`ringseasteregg`| 0 \| 1 | undocumented

**Example:**

```haskell
d1  $ s "[[bd sd], linnhats*8]"
    # rings 100 rand 0.7 (slow 3 sine) 0.9
    # ringsmodel "[0|1]"
    # ringspoly "[0|1|0]"
    # ringsinternal "[1|0|1|1]"
```

### `ripples`
**Description:** miRipples is an analog 4 pole filter. [More information...](https://web.archive.org/web/20200422174618/https://www.mutable-instruments.net/modules/ripples/manual/)

Parameter | Range | Description
----------|-------|------------
`ripples c r d` | na | convenience function
`ripplescf` | 0.0-1.0 | cutoff frequency, 20Hz to 20kHz
`ripplesreson` | 0.0-1.0+ | resonance, self resonance occurs from ~0.75
`ripplesdrive` | 0-5 | gain level

**Example:**

```haskell
d1  $ s "[[bd sd], linnhats*8]"
    # ripplescf 0.4
    # ripplesreson (range 0.5 1 $ slow 7 sine)
    # ripplesdrive "{1 3 5}%2"
```

### `warps`
**Description:**  miWarps offers a variety of wave-shaping and cross-modulation effects. [More information...](https://web.archive.org/web/20200422211642/https://www.mutable-instruments.net/modules/warps/manual/)

Parameter | Range | Description
----------|-------|------------
`warpsalgo` | 0-7 | modulation algorithm. See the [manual](https://web.archive.org/web/20200918070209/https://mutable-instruments.net/modules/warps/manual/)
`warpstimb` | 0.0-1.0 | intensity of high harmonics, or algorithm tone control
`warpsosc` | 0-3 | internal oscillator state and waveform
`warpsfreq` | 0.0-1.0 | external carrier amplitude or internal oscillator frequency
`warpsvgain` | 0.0-1.0 | non-functional?
`warpseasteregg` | 0 \| 1 | undocumented

**Example:**

```haskell
d1  $ s "[[bd sd], linnhats*8]"
    # warpstimb (slow 5 sine)
    # warpsosc "<0 1 2 3>"
    # warpsalgo "<0 1 2 3 4 5 6 7 6>"
    # warpsfreq (slow 3 saw)
    # warpseasteregg 1
```
