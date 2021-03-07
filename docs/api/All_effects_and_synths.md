---
title: All effects and synths
permalink: wiki/All_effects_and_synths/
layout: wiki
---

<languages/> <translate> List of Tidal effects and their descriptions

# Basic effects

## Delay

(parameters: \#delay, \#delaytime/\#delayt, \#delayfeedback/\#delayfb)

Values from 0 to 1

## Leslie

(parameters: \#leslie, \#lrate, \#lsize)

"Leslie" controls dry/wet. "lrate" is the modulation rate (typical
vintage rates would be 6.7 for "fast", 0.7 for "slow"). "lsize" is the
physical size of the cabinet in meters, this mostly affects the Doppler
amount (pitch warble)

## Reverb

(parameters: \#room, \#size, \#dry)

Thanks to Jost Muxfeld and James McCartney. Note that "size" is not room
size, just a depth metaphor. Values from 0 to 1

## Crush

(parameters: \#crush)

Bit crushing, a pattern of numbers from 1 (for drastic reduction in
bit-depth) to 16 (for barely no reduction).

## Legato

(parameters: \#legato)

Legato controls the amount of overlap between two adjacent synth sounds

## Tremolo

(parameters: \#tremolodepth/\#tremdp, \#tremolorate/\#tremr)

## Shape

(parameters: \#shape)

A type of amplifier, values from 0 to 1

## Coarse

(parameters: \#coarse)

Fake-resampling, a pattern of numbers for lowering the sample rate, i.e.
1 for original 2 for half, 3 for a third and so on.

## Phaser

(parameters: \#phaserrate/\#phasr, \#phaserdepth/\#phasdp)

## Vowel

(parameters: \#vowel)

Formant filter to make things sound like vowels, a pattern of either
\`a\`, \`e\`, \`i\`, \`o\` or \`u\`. Use a rest (\`\~\`) for no effect.

## Lowpass filter

(\#cutoff/\#lpf, \#resonance/\#lpq)

Cutoff as Hz. Resonance from 0 to 1

## Highpass filter

(\#hcutoff/\#hpf, \#hresonance/\#hpq)

Cutoff as Hz. Resonance from 0 to 1

## Bandpass filter

(\#bandf/\#bpf, \#bandq/\#bpfq).

Cutoff as Hz. Resonance from 0 to 1

## ASR-Envelope

(\#attack/\#att, \#hold, \#release/\#rel)

Values in seconds.

## MIDI specific parameters

(parameters: \#dur, \#modwheel, \#expression, \#sustainpedal)

# Extra effects + SuperCollider help file description

## Waveloss

(parameters: \#waveloss)
(Calum Gunn)

Divides an audio stream into tiny segments, using the signal's
zero-crossings as segment boundaries, and discards a fraction of them.
Takes a number between 1 and 100, denoted the percentage of segments to
drop.

(SuperCollider documentation for Waveloss.ar:

Divide an audio stream into tiny segments, using the signal's
zero-crossings as segment boundaries, and discard a fraction of them
(i.e. replace them with silence of the same length). The technique was
described by Trevor Wishart in a lecture.

Parameters: the filter drops drop out of out of chunks. mode can be 1 to
drop chunks in a simple deterministic fashion (e.g. always dropping the
first 30 out of a set of 40 segments), or 2 to drop chunks randomly but
in an appropriate proportion.)

## Squiz

(parameters: \#squiz)
(Calum Gunn)

Reminiscent of some weird mixture of filter, ring-modulator and
pitch-shifter. Try passing multiples of 2 to it - 2, 4, 8 etc.

(SuperCollider documentation for Squiz.ar:

A simplistic pitch-raising algorithm. It's not meant to sound natural;
its sound is reminiscent of some weird mixture of filter, ring-modulator
and pitch-shifter, depending on the input. The algorithm works by
cutting the signal into fragments (delimited by upwards-going
zero-crossings) and squeezing those fragments in the time domain (i.e.
simply playing them back faster than they came in), leaving silences
inbetween. All the parameters apart from memlen can be modulated.

This UGen is dedicated to Suburban Base Records. (It doesn't sound like
them, but was half-inspired by them.))

## Frequency shifter

(parameters: \#fshift, \#fshiftnote, \#fshiftphase)
(Ben Gold)

Total shift is sum of \`fshift\` (in Hz) and \`fshiftnote\` times the
current note frequency. \`fshiftphase\` allows control over the phase

(SuperCollider documentation for FreqShift.ar:

FreqShift implements single sideband amplitude modulation, also known as
frequency shifting, but not to be confused with pitch shifting.
Frequency shifting moves all the components of a signal by a fixed
amount but does not preserve the original harmonic
relationships.)

## Triode

(parameters: \#triode)
(Ben Gold)

Triode-like distortion, uses only the \`triode\` parameter

## Krush

(parameters: \#krush, \#kcutoff)
(Ben Gold)

Sonic Pi's krush modified a bit so krush "0" is the same as dry signal
uses \`krush\` and \`kcutoff\` as parameters

## Octer

(parameters: \#octer, \#octersub, \#octersubsub)
(Ben Gold)

Sonic Pi's octaver uses \`octer\` for octave harmonics, \`octersub\` for
half-frequency harmonics, and \`octersubsub\` for quarter-frequency
harmonics.

## Ring modulator

(parameters: \#ring, \#ringf, \#ringdf)
(Ben Gold)

Ring modulation with \`ring\` (modulation amount), \`ringf\` (modulation
frequency), and \`ringdf\` (slide in modulation frequency)

## Distort

(parameters: \#distort)
(Ben Gold)

A crunchy distortion with a lot of high harmonics, the only parameter is
\`distort

## Spectral delay

(parameters: \#xsdelay, \#tsdelay)
(Mads Kjeldgaard)

(.....)

## Magnitude freeze

(parameters: \#freeze)
(Mads Kjeldgaard)

Accepts integers: 1 freezes the audio, 0 doesn't.

(SuperCollider documentation for PV_Freeze:

Freezes magnitudes at current levels when freeze \> 0, and advances
phase according to difference between frames to try and maintain currect
spectral quality.)

## Spectral comb filter

(parameters: \#comb)
(Mads Kjeldgaard)

Number of teeth and width of the comb are all controlled using one
floating point number

(SuperCollider documentation for PV_RectComb:

Makes a series of gaps in a spectrum)

## Bin scrambling

(parameters: \#scram)
(Mads Kjeldgaard)

Accepts floats to control the width and placement of the scrambling in
the spectrum

(SuperCollider documentation for PV_BinScramble:

Randomizes the order of the bins. The trigger will select a new random
ordering.)

## Magnitude smearing

(parameters: \#smear)
(Mads Kjeldgaard)

Accepts floats to determine the amount of smearing.

(SuperCollider documentation for PV_MagSmear:

Average a bin's magnitude with its neighbors.)

## Bin shifting

(parameters: \#binshift)
(Mads Kjeldgaard)

Both the stretching and shifting of bins are controlled by supplying
this parameter with floats.

(SuperCollider documentation for: PV_BinShift:

Shift and scale the positions of the bins. Can be used as a very crude
frequency shifter/scaler.)

## Spectral high pass filter

(parameters: \#hbrick)
(Mads Kjeldgaard)

Accepts floats in values ranging from 0.0 to 1.0

(SuperCollider documentation for PV_BrickWall: Clears bins above
or below a cutoff point.)

## Spectral low pass filter

(parameters: \#lbrick)
(Mads Kjeldgaard)

Accepts floats in values ranging from 0.0 to 1.0

(SuperCollider documentation for PV_BrickWall: Clears bins above
or below a cutoff point.)

## Spectral conformer

(parameters: \#real, \#imag)
(Mads Kjeldgaard)

(No Description)

(SuperCollider documentation for PV_ConformalMap: Applies the
conformal mapping z → (z - a) / (1 - za\*) to the phase vocoder bins z
with a given by the real and imag inputs to the UGen. Makes a
transformation of the complex plane so the output is full of phase
vocoder artifacts but may be musically fun. Usually keep \|a\| \< 1 but
you can of course try bigger values to make it really noisy. a = 0
should give back the input mostly unperturbed. See
<http://mathworld.wolfram.com/ConformalMapping.html> )

## Spectral enhance

(parameters: \#enhance)
(Mads Kjeldgaard)

(No description)

## DJ Filter

(parameters: \#djf)
(Alex McLean)

DJ filter, a low pass filter for the first half of the range, and a high
pass for the rest.

# SuperDirt synths

Default values are in parentheses. Some undocumented parameters are
included without descriptions.

In all synths,`sustain` (default 1) affects the overall envelope
timescale. The parameters `pan` and `freq` can also be set in all
synths. The default value for `freq` is usually 440 – in synths where
it’s not, `freq` and its default value for that synth are mentioned in
its parameter list below.

## Instruments

### supermandolin

Physical modeling of a vibrating string, using a delay line (CombL)
excited by an intial pulse (Impulse). To make it a bit richer, I’ve
combined two slightly detuned delay lines.

-   `sustain` (1) changes the envelope timescale
-   `accelerate` (0) for a pitch glide
-   `detune` (0.2)

### supergong

An example of additive synthesis, building up a gong-like noise from a
sum of sine-wave harmonics. Notice how the envelope timescale and
amplitude can be scaled as a function of the harmonic frequency.

-   `voice` (0) provides something like a tone knob
-   `decay` (1) adjusts how the harmonics decay
-   `accelerate` (0) for pitch glide

For a demo, try
`d1 $ n (slow 2 $ fmap (*7) $ run 8) # s "supergong" # decay "[1 0.2]/4" # voice "[0.5 0]/8"`

### superpiano

Hooking into a nice synth piano already in SuperCollider

-   `velocity` affects how hard the keys are pressed
-   `sustain` controls envelope and decay time
-   `detune` (0.1)
-   `muffle` (1)
-   `stereo` (0.2)

### superhex

Waveguide mesh, hexagonal drum-like membrane

-   `rate` (1)
-   `accelerate` (0)

SuperCollider documentation for MembraneHexagon.ar:
MembraneCircle and MembraneHexagon are rather similar, being triangular
waveguide meshes of a drum-like membrane. You input some excitation,
such as a pulse of noise, and can adjust the tension and loss while it
plays. They’re named after the shape made out of triangular meshes.
Obviously you can’t make a circle out of triangles, but it tries. At the
moment MembraneCircle is a bit bigger than MembraneHexagon, using more
waveguides and therefore more CPU.)

### supersquare

A moog-inspired square-wave synth; variable-width pulses with filter
frequency modulated by an LFO

-   `voice` controls the pulse width (exactly zero or one will make no
    sound)
-   `decay` (0)
-   `accelerate` (0) pitch glide
-   `semitone` (12) how far off in pitch the secondary oscillator is
    (need not be integer)
-   `resonance` (0.2) filter resonance
-   `lfo` (1) how much the LFO affects the filter frequency
-   `rate` (1) LFO rate
-   `pitch1` (1) filter frequency scaling multiplier, the frequency
    itself follows the pitch set by “n”

### supersaw

A moog-inspired sawtooth synth; slightly detuned saws with triangle
harmonics, filter frequency modulated by LFO

-   `voice` (0.5) controls a relative phase and detune amount
-   `decay` (0)
-   `accelerate` (0) pitch glide
-   `semitone` (12) how far off in pitch the secondary oscillator is
    (need not be integer)
-   `resonance` (0.2) filter resonance
-   `lfo` (1) how much the LFO affects the filter frequency
-   `rate` (1) LFO rate
-   `pitch1` (1) filter frequency scaling multiplier, the frequency
    itself follows the pitch set by “n”

### superpwm

A moog-inspired PWM synth; pulses multiplied by phase-shifted pulses,
double filtering with an envelope on the second

-   `voice` controls the phase shift rate
-   `decay` (0)
-   `accelerate` (0) pitch glide
-   `semitone` (12) how far off in pitch the secondary oscillator is
    (need not be integer)
-   `resonance` (0.2) filter resonance
-   `lfo` (1) how much the LFO affects the filter frequency
-   `rate` (1) LFO rate
-   `pitch1` (1) filter frequency scaling multiplier, the frequency
    itself follows the pitch set by “n”

### supercomparator

-   `voice` (0.5) scales the comparator frequencies, higher values will
    sound “breathier”
-   `decay` (0)
-   `accelerate` (0) pitch glide
-   `resonance` (0.5) filter resonance
-   `lfo` (1) how much the LFO affects the filter frequency
-   `rate` (1) LFO rate
-   `pitch1` (1) filter frequency scaling multiplier, the frequency
    itself follows the pitch set by “n”

### superchip

Uses the Atari ST emulation UGen with 3 oscillators

-   `slide` (0) for a linear frequency glide
-   `rate` (1) repeats the above glide “n” times (can be fractional or
    negative)
-   `accelerate` (0) for an overall glide
-   `pitch2` (2) control the ratio of harmonics
-   `pitch3` (3) control the ratio of harmonics
-   `voice` (0) causes variations in the levels of the 3 oscillators

### superfork

Tuning fork from Ben Gold’s experimentation and from “On the acoustics
of tuning forks”, Rossing Russell and Brown

-   `accelerate` (0)

### superhammond

Hammond B3 sim. Frequency adjustments courtesy of [Tom
Wiltshire](https://electricdruid.net).

-   `perc`, `percf` and `decay` are an attempt at the percussion, no
    idea if it sounds at all reasonable. Vintage Hammonds had `percf` as
    2 or 3 (switchable), two `perc` levels (maybe roughly 0.7 and 1.2?),
    and two `decay` options (roughly 0 and maybe 1ish?)
-   `vibrato`, `vrate`, `perc`, `percf` are all new parameters you’ll
    need to define in Tidal if you want to change them

Voices are drawbar presets:

-   0: bass violin 16’
-   1: tibia 8’
-   2: bassoon 8’
-   3: french trumpet 8’
-   4: string ensemble
-   5: Blues
-   6: Jazz 1
-   7: Full Shout
-   8: Bro’ Jack
-   9: Jazz 2

### supervibe

Vibraphone simulation, adapted with some help from Kevin Larke’s thesis
Real Time Vibraphone Pitch and Timbre Classification

-   `decay` (0) use larger values to damp higher harmonics
-   `velocity` (1) higher velocity will brighten the sound a bit
-   `accelerate` (0) for a linear pitch bend
-   `modamp` (1) amplitude of the tremolo (0-2 is OK)
-   `modfreq` (7) frequency of the tremolo
-   `detune` (0) adjusts a high harmonic to give the sound a different
    character

### superhoover

Hoover, adapted from [Wouter Snoei’s
implementation](http://superdupercollider.blogspot.com/2009/06/more-dominator-deconstruction.html).

-   `slide` (0) for the amount of initial pitch glide, positive slides
    up in pitch, negative slides down
-   `decay` (0) for a different envelope shape
-   `accelerate` (0) for constant pitch glide

### superzow

Phased saws

-   `decay` (0) for envelope shaping
-   `accelerate` (0) for pitch bend
-   `slide` (1) how fast it moves through the phase
-   `detune` (1) for oscillator detuning

### supergrind

From synthdef.art fragment: 2018-08-16

-   `accelerate` (0) for pitch glide
-   `detune` (0) in Hz, but even small values are quite noticeable
-   `voice` (0) changes harmonics
-   `rate` (1) is the impulse trigger rate

### superprimes

From synthdef.art \#nightofprimes

-   `accelerate` (0) for pitch glide
-   `detune` (0) can be fractional
-   `voice` (0) does some subtle shaping and reverb changing
-   `rate` (0) is the impulse trigger rate

### superwavemechanics

From synthdef.art \#wavemechanics

-   `accelerate` (0) for pitch glide
-   `detune` (0) for pitch randomization
-   `voice` (0) to color/whiten the noise
-   `resonance` (0) affects reverberation

### supertron

Feedback PWM

-   `accelerate` (0)
-   `voice` (0)
-   `detune` (0)

Try `d1 $ s "supertron" # octave 3 # accelerate "0.2"`

### superreese

Vaguely Reese-like synth

-   `accelerate` (0)
-   `voice` (0)
-   `detune` (0)

### superfm

6-op FM synth (DX7-like). Works a bit different from the original DX7.
Instead of algorithms, you set the amount of modulation every operator
receives from other operators and itself (feedback), virtually providing
an endless number of possible combinations (algorithms).

-   `voice` is the preset number: `0` is user-defined; `1-5` are
    randomly generated presets
-   `lfofreq` is the overall pitch modulation frequency
-   `lfodepth` is the overall pitch modulation amplitude

Each operator responds to

-   `amp` (operator volume - becomes carrier)
-   `ratio` (frequency ratio)
-   `detune` (in Hz)
-   `eglevel` (1-4) (4 envelope generator levels)
-   `egrate` (1-4) (4 envelope generator rates)

The syntax for operator arguments is
`<argumentName + opIndex>[modulatorIndex | egIndex]`. For example:

-   `amp1 1` (op1 as carrier with full volume)
-   `ratio2 2.3` (op2 frequency ratio)
-   `mod11 0.5` (op1 feedback)
-   `mod12 0.78` (op1 modulation amount by op2)
-   `detune1 0.2` (op1 detune)
-   `eglevel12 0.1` (op1 EG level2)
-   `egrate11 0.01` (op1 EG rate1) – WARNING: higher values go FASTER!

## Default synths

### imp

Modulated band limited impulse

-   `accelerate` (0)

### psin

Modulated phase mod sines

-   `accelerate` (0)

### pmsin

Cursor modulated phase mod sines

-   `accelerate` (0)

### in

Live audio input

-   `in`

### inr

Pitch shifted live audio input

-   `accelerate` (0)

### gabor

Gabor grain

### cyclo

Shepard on a cycle

-   `accelerate` (0)

## Drums

### superkick

Kick Drum using [Rumble-San’s
implementation](http://blog.rumblesan.com/post/53271713518/drum-sounds-in-supercollider-part-1)
as a starting point

-   `n` controls the kick frequency in a nonstandard way
-   `accelerate` (0) sweeps the click filter frequency
-   `pitch1` (1) affects the click frequency
-   `decay` (1) changes the click duration relative to the overall
    timescale

### super808

A vaguely 808-ish kick drum

-   `n` controls the chirp frequency
-   `rate` (1) controls the filter sweep speed
-   `voice` (0) sets the sinewave feedback

### superhat

Hi-hat using [Rumble-San’s
implementation](http://blog.rumblesan.com/post/53271713518/drum-sounds-in-supercollider-part-1)
as a starting point

-   `n` provides some variation on the frequency in a weird way
-   `accelerate` (0) sweeps the filter

### supersnare

Snare drum using [Rumble-San’s
implementation](http://blog.rumblesan.com/post/53271713518/drum-sounds-in-supercollider-part-1)
as a starting point

-   `n` for some variation on frequency
-   `decay` (1) for scaling noise duration relative to tonal part
-   `accelerate` (0) for tonal glide

### superclap

Hand clap using [Rumble-San’s
implementation](http://blog.rumblesan.com/post/53271713518/drum-sounds-in-supercollider-part-1)
as a starting point

-   `n` (?) changes how spread is calculated
-   `delay` (1) controls the echo delay
-   `rate` (1) affects the decay time
-   `pitch1` (1) scales the bandpass frequency

### soskick

Kick drum synth. Increase pitch1 and voice for interesting electronic
percussion.

-   `midinote` – controls the root note of the kick (the source comments
    mention this, but the
    [function](https://github.com/musikinformatik/SuperDirt/blob/7589ccc3f5b780f07de869bb976677cf5af2a8e8/library/default-synths-extra.scd#L653)
    doesn’t have this parameter at all)
-   `pitch1` (0) controls modulation frequency in Hz (min: 0, max:
    SampleRate.ir / 2)
-   `voice` (1) controls modulation input phase in radians (min: 0, max:
    your sanity)
-   `pitch2` (0) controls WhiteNoise amplitude (min: 0, max: 1)
-   `speed` (0.3) controls WhiteNoise sweep (min: 0, max: 1)
-   `freq` (65)

### soshats

-   `resonance` (1) bandpass filter resonance value (min: 0, max: 1)
-   `pitch1` (238.5) oscillator modulation in radians (min: 0, max:
    SampleRate.ir / 2)
-   `sustain` (0.5)
-   `freq` (220)

### sostoms

-   `voice` (0.5) controls modulation input phase in radians (min: 0,
    max: your sanity)
-   `sustain` (0.5)
-   `freq` (261.626)

### sossnare

-   `voice` (0.385) controls modulation input phase in radians (min: 0,
    max: your sanity)
-   `semitone` (0.452) modulation frequency in semitones of fundamental
-   `pitch1` (2000) resonance filter frequency (Hz)
-   `resonance` (0.1) resonance of bandpass and resonz filters (min: 0,
    max: 1)
-   `freq` (405)

## Other sounds

### supersiren

A controllable synth siren, defaults to 1 second, draw it out with
`sustain`

### supernoise

Digital noise in several flavors with a bandpass filter

-   `voice` at 0 is a digital noise for which “n” controls rate, at 1 is
    Brown+White noise for which “n” controls knee frequency
-   `accelerate` causes glide in n, “rate” will cause it to repeat
-   `pitch1` scales the bandpass frequency (which tracks “n”)
-   `slide` works like accelerate on the bandpass
-   `resonance` is the filter resonance

### superstatic

Impulse noise with a fadein/out

</translate>
