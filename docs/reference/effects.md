---
title: Audio effects
id: audio_effects
---

## Basic effects

### Amplitude manipulation

These functions are used to control the amplitude (volume) of the sounds.

#### amp

```haskell
Type: amp :: Pattern Double -> ControlPattern
```

`amp` controls the amplitude of the sound using a linear function. Its default value is `0.4`. For the power function equivalent, see `gain`.

```haskell
d1 $ s "arpy" # amp 0.6
```

This will play the first `arpy` sample at a volume slightly louder than the default.

```haskell
d1 $ s "arpy" # amp "<0.4 0.8 0.2>"
```

In the above example, the volume changes at each cycle.

#### gain

```haskell
Type: gain :: Pattern Double -> ControlPattern
```

`gain` controls the amplitude of the sound using a power function. Its default value is `1`. Smaller values make the sound quieter, and greater values make the sound louder.

As `gain` uses a power function, the volume change around `1` is subtle, but it gets more noticable as it increases or decreases. Typical values for `gain` are between `0` and `1.5`. For the linear equivalent, see `amp`.

```haskell
d1 $ s "arpy" # gain 0.8
```

This plays the first `arpy` sample at a quieter level than the default.

```haskell
d1 $ s "ab*16" # gain (range 0.8 1.3 $ sine)
```

This plays a hihat sound, `16` times per cycle, with a `gain` moving from `0.8` to `1.3` following a sine wave.

### Pitch

#### Octer

Made by Ben Gold. [Sonic Pi](https://sonic-pi.net/)'s octaver.
* `octer`: octave harmonics
* `octersub`: half-frequency harmonics
* `octersubsub`: quarter-frequency harmonics

#### Frequency Shifter

Made by Ben Gold. Simple frequency shifter. Description taken from the SuperCollider `FreqShift` object documentation:
> FreqShift implements single sideband amplitude modulation, also known as frequency shifting, but not to be confused with pitch shifting. Frequency shifting moves all the components of a signal by a fixed amount but does not preserve the original harmonic relationships.)

* `fshift`: shift
* `fshiftnote`:
* `fshiftphase`: phase of the shifted frequency

:::tip
The total shift (in hertz) is `fshift * fshiftnote`.
:::

#### Ring modulation

Made by Ben Gold. Ring modulation:
* `ring`: modulation amount
* `ringf`: modulation frequency
* `ringdf`: slide in modulation frequency


#### Tremolo

* `tremolodepth` / `tremdp`: tremolo depth
* `tremolorate` / `tremr`: tremolo speed

### Time and Space

#### Delay

**Tidal** default delay effect:

* `delay`: wet/dry
* `delaytime` / `delayt`: delay time
* `delayfeedback` / `delayfb`: feedback amount
* `lock`: a pattern of numbers. Specifies whether `delaytime` is calculated relative to cps. When set to 1, `delaytime` is a direct multiple of a cycle.

#### Reverb

**Tidal** default reverb effect, by Jost Muxfeld and James McCartney. Values from 0 to 1:

* `dry`: dry amount
* `room`: room size
* `size` / `sz`: metaphor for depth

#### Leslie

Emulation of a Leslie speaker: speakers rotating in a wooden amplified cabinet:

* `leslie`: dry and wet amount
* `lrate`: modulation rate (`6.7` for fast, `0.7` for slow)
* `lsize`: physical size of the cabinet in meters. Be careful, it might be slightly larger than your computer. Affects the Doppler amount (pitch warble)

#### Phaser

* `phaserrate` / `phasr`: speed
* `phaserdepth` / `phasdp`: depth

#### Spectral delay

Spectral delay coded by [Mads Kjeldgaard](https://madskjeldgaard.dk/):

* `xsdelay`: ???
* `tsdelay`: ???

#### Magnitude Freeze

Made by [Mads Kjeldgaard](https://madskjeldgaard.dk/). Freeze magnitudes at current levels when `freze > 0` and advances phase according to difference between frames to try and maintain current spectral quality:
* `freeze`: freeze amount

### Envelope

#### ASR Envelope

* `attack` / `att`: in seconds.
* `hold` : in seconds.
* `release` / `rel`: in seconds.

#### Legato

* `legato`: amount of overlap between two adjacent synth sounds. Values less than one (e.g. `0.5`) will cut the sound off sooner. Values greater than one (e.g. `1.5`) will cut the sound off later

### Filters

#### DJ Filter

Made by Alex McLean. A fun classic DJ Filter. Low pass filter for the first half of the range, high pass for the rest:
* `djf`: 0 to 1

#### Lowpass filter

* `cutoff` / `lpf`: cutoff amount in hertz
* `resonance` / `lpq`: from 0 to 1

:::caution
Be gentle with the resonance amount
:::

#### Highpass filter

* `hcutoff` / `hpf`: cutoff amount in hertz
* `hresonance` / `hpq`: resonance

#### Bandpass filter

* `bandf` / `bpf`: center frequency in hertz
* `bandq` / `bpq`: resonance

#### Vowel

Formant filter to make things sound like vowels. You can use `a e i o u`. Use a rest `~` or consonant `p` to override the effect:

- `vowel`: choose a vowel or a pattern of vowels

```haskel
d1 $ s "gtr*5" #vowel "a e i o u"
d1 $ s "gtr*7" #vowel "p p a e i o ~"
```

#### Spectral comb filter

Made by [Mads Kjeldgaard](https://madskjeldgaard.dk/). Number of teeth and width of the comb are all controlled using one floating point number:
* `comb`: number of teeths and width of the comb filter

#### Spectral high pass filter

Made by [Mads Kjeldgaard](https://madskjeldgaard.dk/).
* `hbrick`: floats from `0.0` to `1.0`

#### Spectral low pass filter

Made by [Mads Kjeldgaard](https://madskjeldgaard.dk/).
* `lbrick`: floats from `0.0` to `1.0`


### Distortion

#### Distort

Made by Ben Gold. A crunchy distortion with a lot of high harmonics.
* `distort`: distortion amount

#### Triode

Made by Ben Gold. Triode-like distortion, uses only one parameter.
* `triode`: distortion amount

#### Shape

A type of amplifier:
* `shape`: values from 0 to 1

:::caution
It might get loud
:::

#### Squiz

Made by Calum Gunn. Reminiscent of some weird mixture of filter, ring-modulator and pitch-shifter. Try passing multiples of `2` to it - `2`, `4`, `8` etc. The SuperCollider manual defines `Squiz` as:
> A simplistic pitch-raising algorithm. It's not meant to sound natural; its sound is reminiscent of some weird mixture of filter, ring-modulator and pitch-shifter, depending on the input. The algorithm works by cutting the signal into fragments (delimited by upwards-going zero-crossings) and squeezing those fragments in the time domain (i.e. simply playing them back faster than they came in), leaving silences inbetween. All the parameters apart from memlen can be modulated.

* `squiz`: squiz amount

### Phasing
### Shaping
### Tremolo
### Leslie
### Spectral
### Bits

#### Bin shifting

Made by [Mads Kjeldgaard](https://madskjeldgaard.dk/). Shift and scale the position of the bins. Can be used as a very crude frequency shifter/scaler:

* `binshift`: stretching and shifting of bins

#### Bin scrambling

Made by [Mads Kjeldgaard](https://madskjeldgaard.dk/). Accepts floats to control the width and placement of the scrambling in the spectrum:
* `scram`: ???

#### Crush

A classic bitcrushing effect:
* `crush`: 1 for a drastic reduction in bit-depth, 16 for barely no reduction

#### Coarse

Fake audio resampling:
* `coarse`: 1 for original, 2 for half, 3 for a third and so on

#### Waveloss

Made by Calum Gunn. Divides an audio stream into tiny segments, using the signal's zero-crossings as segment boundaries, and discards a fraction of them. Takes a number between `1` and `100`, denoted the percentage of segments to drop. The SuperCollider manual describes the Waveloss effect this way:

> Divide an audio stream into tiny segments, using the signal's zero-crossings as segment boundaries, and discard a fraction of them (i.e. replace them with silence of the same length). The technique was described by Trevor Wishart in a lecture.
> Parameters: the filter drops drop out of out of chunks. mode can be 1 to drop chunks in a simple deterministic fashion (e.g. always dropping the first 30 out of a set of 40 segments), or 2 to drop chunks randomly but in an appropriate proportion.)

* `mode`: ???
* `waveloss`: ???

#### Krush

Made by Ben Gold from [Sonic Pi](https://sonic-pi.net/)'s `krush`.
* `krush`: dry-wet (0 for dry)
* `kcutoff`: cutoff of the krush filter

### Other

#### Magnitude smearing

Made by Mads Kjeldgaard. Accepts floats to determine the amount of smearing:
* `smear`: amount of smearing

#### Spectral conformer

Made by [Mads Kjeldgaard](https://madskjeldgaard.dk/). SuperCollider description:
> Applies the conformal mapping z → (z - a) / (1 - za*) to the phase vocoder bins z with a given by the real and imag inputs to the UGen. Makes a transformation of the complex plane so the output is full of phase vocoder artifacts but may be musically fun. Usually keep |a| < 1 but you can of course try bigger values to make it really noisy. a = 0 should give back the input mostly unperturbed.

You can also check [this link](http://mathworld.wolfram.com/ConformalMapping.html).
* `real`: ???
* `imag`: ???

#### Spectral enhance

Made by [Mads Kjeldgaard](https://madskjeldgaard.dk/).
* `enhance`: ???
