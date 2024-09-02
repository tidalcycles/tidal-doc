---
title: Synthesizers
id: synthesizers
---

**SuperDirt** is installed along with an extensive list of *default* audio effects and synthesizers. Note that you can also extend this list by adding your own synthesizers and audio effects to the audio engine. For instance, check out the [Mutable Instruments](https://club.tidalcycles.org/t/mutable-instruments-ugens/2730) or the [SynthDefs for Tidal](https://club.tidalcycles.org/t/synthdefs-for-tidal/1092) threads on the **Tidal Club** forum.

## Basic instruments

Default values are in **parentheses**.  In all synths, `sustain` (default 1) affects the overall envelope timescale. The parameters `pan` and `freq` can also be set in all synths. The default value for freq is usually 440 – in synths where it’s not, `freq` and its default value for that synth are mentioned in its parameter list below.

:::caution
Some undocumented parameters are included without descriptions.
:::


### Additive synthesis
#### supergong

An example of additive synthesis, building up a gong-like noise from a sum of sine-wave harmonics. Notice how the envelope timescale and amplitude can be scaled as a function of the harmonic frequency.

* `voice` (0): provides something like a tone knob
* `decay` (1): adjusts how the harmonics decay
* `accelerate` (0): for pitch glide

```c
d1 $ n (slow 2 $ fmap (*7) $ run 8)
  # s "supergong"
  # decay "[1 0.2]/4"
  # voice "[0.5 0]/8"
```

### Substractive synthesis
#### supersquare

A moog-inspired square-wave synth; variable-width pulses with filter frequency modulated by an LFO:

* `voice`: controls the pulse width (exactly zero or one will make no sound)
* `decay` (0): the decay
* `accelerate` (0): pitch glide
* `semitone` (12): how far off in pitch the secondary oscillator is (need not be integer)
* `resonance` (0.2): filter resonance
* `lfo` (1): how much the LFO affects the filter frequency
* `rate` (1): LFO rate
* `pitch1` (1): filter frequency scaling multiplier, the frequency itself follows the pitch set by “n”

#### supersaw

A moog-inspired sawtooth synth; slightly detuned saws with triangle harmonics, filter frequency modulated by LFO:

* `voice` (0.5): controls a relative phase and detune amount
* `decay` (0)
* `accelerate` (0): pitch glide
* `semitone` (12): how far off in pitch the secondary oscillator is (need not be integer)
* `resonance` (0.2) filter resonance
* `lfo` (1) how much the LFO affects the filter frequency
* `rate` (1): LFO rate
* `pitch1` (1): filter frequency scaling multiplier, the frequency itself follows the pitch set by “n”

#### superpwm

A moog-inspired PWM synth; pulses multiplied by phase-shifted pulses, double filtering with an envelope on the second

* `voice`: controls the phase shift rate
* `decay` (0): decay.
* `accelerate` (0): pitch glide
* `semitone` (12): how far off in pitch the secondary oscillator is (need not be integer)
* `resonance` (0.2): filter resonance
* `lfo` (1): how much the LFO affects the filter frequency
* `rate` (1): LFO rate
* `pitch1` (1): filter frequency scaling multiplier, the frequency itself follows the pitch set by “n”

#### superchip

Uses the Atari ST emulation *UGen* with 3 oscillators:

* `slide` (0): for a linear frequency glide
* `rate` (1): repeats the above glide “n” times (can be fractional or negative)
* `accelerate` (0): for an overall glide
* `pitch2` (2): control the ratio of harmonics
* `pitch3` (3): control the ratio of harmonics
* `voice` (0): causes variations in the levels of the 3 oscillators

#### superhoover

Hoover, adapted from [Wouter Snoei](http://superdupercollider.blogspot.com/2009/06/more-dominator-deconstruction.html)’s implementation:

* `slide` (0): for the amount of initial pitch glide, positive slides up in pitch, negative slides down
* `decay` (0): for a different envelope shape
* `accelerate` (0): for constant pitch glide

#### superzow

Phased saws:

* `decay` (0): for envelope shaping
* `accelerate` (0): for pitch bend
* `slide` (1): how fast it moves through the phase
* `detune` (1): for oscillator detuning

#### supertron

Feedback PWM:

* `accelerate` (0): pitch-glide
* `voice` (0): number of voices
* `detune` (0): detune amount

```c
d1 $ s "supertron"
  # octave 3
  # accelerate "0.2"
```

#### superreese

Vaguely Reese-like synth:

* `accelerate` (0): pitch-glide.
* `voice` (0): number of voices
* `detune` (0): detune amount

#### supernoise

Digital noise in several flavors with a bandpass filter:

#### superstatic

Impulse noise with a fadein/fadeout.

* `voice`: at 0 is a digital noise for which “n” controls rate, at 1 is Brown+White noise for which “n” controls knee frequency
* `accelerate`: causes glide in n, “rate” will cause it to repeat
* `pitch1`: scales the bandpass frequency (which tracks “n”)
* `slide`: works like accelerate on the bandpass
* `resonance`: is the filter resonance

#### supercomparator

* `voice` (0.5): scales the comparator frequencies, higher values will sound “breathier”
* `decay` (0)
* `accelerate` (0): pitch glide
* `resonance` (0.5): filter resonance
* `lfo` (1): how much the LFO affects the filter frequency
* `rate` (1): LFO rate
* `pitch1` (1): filter frequency scaling multiplier, the frequency itself follows the pitch set by “n”

### Physical modelling
#### supermandolin

Physical modeling of a vibrating string, using a delay line (`CombL`) excited by an intial pulse (`Impulse`). To make it a bit richer, I’ve combined two slightly detuned delay lines:

* `sustain` (1): changes the envelope timescale
* `accelerate` (0): pitch-glide
* `detune` (0.2): detune amount

#### superpiano

Hooking into a nice synth piano already in **SuperCollider**:

* `velocity`: affects how hard the keys are pressed
* `sustain`: controls envelope and decay time
* `detune` (0.1): detune amount.
* `muffle` (1)
*  `stereo` (0.2): stereo amount.

#### superfork

Tuning fork from Ben Gold’s experimentation and from “On the acoustics of tuning forks”, Rossing Russell and Brown:

* `accelerate` (0): pitch-glide amount.

#### superhammond

Hammond B3 sim. Frequency adjustments courtesy of [Tom Wiltshire](https://electricdruid.net/):

* `perc`, `percf` and `decay`: an attempt at the percussion, no idea if it sounds at all reasonable. Vintage Hammonds had `percf` as 2 or 3 (switchable), two perc levels (maybe roughly 0.7 and 1.2?), and two decay options (roughly 0 and maybe 1ish?)
* `vibrato`, `vrate`, `perc`, `percf`: new parameters you’ll need to define in Tidal if you want to change them.

Voices are drawbar presets:

* **0.** bass violin 16’
* **1.** tibia 8’
* **2.** bassoon 8’
* **3.** french trumpet 8’
* **4.** string ensemble
* **5.** Blues
* **6.** Jazz 1
* **7.** Full Shout
* **8.** Bro’ Jack
* **9.** Jazz 2


#### supervibe

Vibraphone simulation, adapted with some help from Kevin Larke’s thesis Real Time Vibraphone Pitch and Timbre Classification:

* `decay` (0): use larger values to damp higher harmonics
* `velocity` (1): higher velocity will brighten the sound a bit
* `accelerate` (0): for a linear pitch bend
* `modamp` (1): amplitude of the tremolo (0-2 is OK)
* `modfreq` (7): frequency of the tremolo
* `detune` (0): adjusts a high harmonic to give the sound a different character

### FM synthesis
#### superfm

6 operator FM synth (**DX7**-like). Works a bit different from the original **DX7**. Instead of algorithms, you set the amount of modulation every operator receives from other operators and itself (feedback), virtually providing an endless number of possible combinations (algorithms).

Addition reference sources:  
- [superfm super-tutorial](https://www.youtube.com/watch?v=REgE33Esy2Q) by Loopier (aka Roger Pibernat) who created superfm.
- [Club Tidal superfm thread](https://club.tidalcycles.org/t/superfm/1761): discussion on various ways to load and use the parameter variables.
- [GitHub source of superfm variables for Tidal](https://gist.github.com/loopier/2535109e5d64cc43f56475d902cda905)

:::tip

To use superfm, you need to initialize all of the parameter variables you will use. Get the full list from the GitHub source (above) and execute this in your editor or add it to your `BootTidal.hs`. If you get "Variable not in scope" error messages, then you haven't loaded the variable definitions properly.

:::

General parameters:  
* `voice`: preset number: 0 is user-defined; 1-5 are randomly generated presets
* `lfofreq`: overall pitch modulation frequency
* `lfodepth`: overall pitch modulation amplitude

Each operator (of 6) responds to:

* `amp`: operator volume - makes the operator a carrier
* `ratio`: frequency ratio - multiple of the base frequency (default: 440)
    * use whole numbers for harmonic, decimal values for inharmonic frequencies
* `detune`: in Hz
* `eglevel`: 1-4 (env stage), envelope generator levels (env generators have 4 stages ADSR)
* `egrate` : 1-4 (env stage), envelope generator rates

The syntax for operator arguments is `<argumentName + opIndex>[modulatorIndex | egIndex]`. For example:

* `# amp1 1` : op1 as carrier with full volume
* `# ratio2 2.3` : op2 frequency ratio of 2.3
* `# mod12 0.78` : op1 modulation amount by op2
* `# mod11 0.5 # feedback 1` : op1 feedback (self modulate), need to specify feedback level
* `# detune1 0.2` : op1 detune
* `# egrate11 0.01` : op1 EG stage 1 rate (stage 1 is the attack)
* `# eglevel11 1` : op1 EG stage 1 level
* `# egrate12 5` : op1 EG stage 2 rate (stage )

:::info

Higher env generator (egrate) values go faster!

:::

superfm examples   
```
d1 $ s "superfm" # n 0 #octave "<4 5 6>"
  #amp1 1 #amp3 1
  #mod11 1 #feedback 2
  #mod12 "0 1 2"
  #ratio2 3
  #eglevel22 0.1

-- env generator values for 4 stages on one operator
d1 $ n "[0 11]/8" # "superfm" #octave 4
  # amp1 1
  # ratio2 2.5
  # mod12 4
  # egrate11 0.3 # eglevel11 1 -- slow attack
  # egrate12 1  # eglevel12 0.1 -- fast decay to 1/2 amp
  # egrate13 0.5 # eglevel13 0.8 -- 2nd amp swell
  # egrate14 0.4 # eglevel14 0 -- decay of mod to 0

d1 $ freq "<200 300> <400 800>" #s "superfm"
  # amp1 1 # amp3 1
  # mod12 2 # ratio2 "<8 4> 0.5 0.9 1.4 2.5"
  # mod34 1 # ratio3 4
```

<details>
  <summary>superfm code examples (longer)</summary>

      d1 $ s "superfm/2"
        # octave 4
        -- # n "<0 5 11>"
        # n (irand 40 -10)
        # amp1 1
        # amp2 1
        # amp3 0.8
        # amp4 0
        # amp5 0.8
        # amp6 1
        # ratio2 2
        # ratio3 8
        # ratio4 5
        # ratio5 5
        # ratio6 6.5
        # detune5 1
        # feedback 0.8
        # mod11 1
        # mod16 2.5
        # mod23 3.5
        # mod34 4.8
        # mod45 3.5
        # mod65 2
        # egrate11 0.01
        # egrate21 0.01
        # egrate31 0.5
        # egrate61 0.1
        # egrate62 0.5
        # egrate63 1
        # eglevel62 0.13
        # eglevel63 1.5
        # lfofreq 0.2
        # lfodepth 0.01
        # room 0.8 # size 0.8 # dry 0.2

        --- from Club Tidal
        d1 $ s "superfm"
        # octave 4
        # n 0
        # amp1 1
        # amp2 1
        # amp3 0
        # amp4 0
        # amp5 0
        # amp6 1
        # ratio2 2
        # ratio3 3
        # ratio4 4
        # ratio5 0.5
        # ratio6 0.25
        # feedback 1
        # mod11 1
        # mod16 1
        # mod23 1
        # mod34 1
        # mod45 1
        # mod66 1
        # egrate61 1
        # egrate62 10
        # egrate63 1
        # eglevel62 0.13
        # eglevel63 1.5
        # room 0.5

</details>


### Drum synthesis
#### superhex

Waveguide mesh, hexagonal drum-like membrane:

* `rate` (1): ??
* `accelerate` (0): pitch-glide amount

#### superkick

Kick Drum using [Rumble-San](http://blog.rumblesan.com/post/53271713518/drum-sounds-in-supercollider-part-1)’s implementation as a starting point:

* `n`: controls the kick frequency in a nonstandard way
* `accelerate` (0): sweeps the click filter frequency
* `pitch1` (1): affects the click frequency
* `decay` (1): changes the click duration relative to the overall timescale

#### super808

A vaguely 808-ish kick drum:

* `n`: controls the chirp frequency
* `rate` (1): controls the filter sweep speed
* `voice` (0): sets the sinewave feedback

#### superhat

Hi-hat using [Rumble-San](http://blog.rumblesan.com/post/53271713518/drum-sounds-in-supercollider-part-1)’s implementation as a starting point:

* `n`: provides some variation on the frequency in a weird way
* `accelerate` (0): sweeps the filter

#### supersnare

Snare drum using [Rumble-San](http://blog.rumblesan.com/post/53271713518/drum-sounds-in-supercollider-part-1)’s implementation as a starting point:

* `n` for some variation on frequency
* `decay` (1): for scaling noise duration relative to tonal part
* `accelerate` (0): for tonal glide

#### superclap

Hand clap using [Rumble-San](http://blog.rumblesan.com/post/53271713518/drum-sounds-in-supercollider-part-1)’s implementation as a starting point:

* `n` (?): changes how spread is calculated
* `delay` (1): controls the echo delay
* `rate` (1): affects the decay time
* `pitch1` (1): scales the bandpass frequency

#### soskick

Kick drum synth. Increase `pitch1` and `voice` for interesting electronic percussion:

* `midinote` – controls the root note of the kick (the source comments mention this, but the function doesn’t have this parameter at all)
* `pitch1` (0): controls modulation frequency in Hz (min: 0, max: SampleRate.ir / 2)
* `voice` (1): controls modulation input phase in radians (min: 0, max: your sanity)
* `pitch2` (0): controls WhiteNoise amplitude (min: 0, max: 1)
* `speed` (0.3): controls WhiteNoise sweep (min: 0, max: 1)
* `freq` (65)

#### soshats

* `resonance` (1): bandpass filter resonance value (min: 0, max: 1)
* `pitch1` (238.5): oscillator modulation in radians (min: 0, max: `SampleRate.ir / 2`)
* `sustain` (0.5): sustain amount
* `freq` (220): frequency

#### sostoms

* `voice` (0.5): controls modulation input phase in radians (min: 0, max: your sanity)
* `sustain` (0.5): sustain amount
* `freq` (261.626): frequency

#### sossnare

`voice` (0.385): controls modulation input phase in radians (min: 0, max: your sanity)
`semitone` (0.452): modulation frequency in semitones of fundamental
`pitch1` (2000): resonance filter frequency (Hz)
`resonance` (0.1): resonance of bandpass and resonz filters (min: 0, max: 1)
`freq` (405): frequency

### Audio Input
#### in

Live audio input:
* `in`: audio input

#### inr

Pitch shifted live audio input:

* `inr`: audio input
* `accelerate` (0): pitch-glide

### Other synths and goodies

#### imp

Modulated band limited impulse:
* `accelerate` (0): pitch-glide amount

#### psin

Modulated phase mod sines:
* `accelerate` (0): pitch-glide amount

#### gabor

Gabor grain

#### cyclo

Shepard on a cycle:
* `accelerate` (0): pitch-glide amount.

#### supersiren

A controllable synth siren, defaults to 1 second, draw it out with `sustain`.

#### supergrind

From `synthdef.art` fragment(2018-08-16):

* `accelerate` (0): for pitch glide
* `detune` (0): in Hz, but even small values are quite noticeable
* `voice` (0): changes harmonics
* `rate` (1): is the impulse trigger rate
