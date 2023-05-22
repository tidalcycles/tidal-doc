---
title: Adding Global Effects
id: adding_global_effects
---

This help file is based on a file found in the [SuperDirt GitHub](https://github.com/musikinformatik/SuperDirt/blob/develop/hacks/adding-effects.scd) repository. Report to the original version to get more information or add your improved workflow to this page to help other users.

:::caution
Make sure you've started **SuperCollider** and that **SuperDirt** is currently running. To start it, you can type `SuperDirt.start` in the interactive text editor.
:::


We want to add a new global effect on each `orbit`. A global effect is definitely not the same thing as an "effect". Global effects will always be there on the signal chain, waiting for you to tweak their parameters. Effects, on the contrary, can be used and called specifically for a pattern only. They are instantiated on demand.

We can take a look at all the global effects declared on each orbit using this command in **SuperCollider**: 


```c
// these are the global effects on each orbit
~dirt.orbits.do { |x| x.globalEffects.postln }
```

## Low-pass Filter

We are going to add a global low-pass filter on every `orbit`. First we need to generate a `SynthDef` for it:

### Building a SynthDef

```c
(
var numChannels = ~dirt.numChannels;
(1..SuperDirt.maxSampleNumChannels).do { |numChannels|
	SynthDef("dirt_global_lpf" ++ numChannels, { |dryBus, effectBus, gate = 1, cutoffFreq = 440|
		var signal = In.ar(dryBus, numChannels);

		var rq;
		signal = signal.asArray.collect { |sig|
			rq = 1/LFNoise2.kr(0.1).exprange(10, 20);
			RLPF.ar(sig, cutoffFreq, rq).tanh;
		};
		signal = signal * EnvGen.kr(Env.asr, gate, doneAction:2);
		DirtPause.ar(signal.sum, graceTime:4);

		Out.ar(effectBus, signal)
	}, [\ir, \ir]).add;
};
)
```

### Adding on the orbits

We need to add this `SynthDef` on each **SuperDirt** orbit:

```haskell
(
~dirt.orbits.do { |x|
	x.globalEffects = x.globalEffects
		.addFirst(GlobalDirtEffect(\dirt_global_lpf, [\cutoffFreq]))

	x.initNodeTree;
};
)

~dirt.orbits.do { |x| x.globalEffects.postln; " ----------".postln; }
```

### Tidal Side

Add the following line to your **Tidal** Boot file:
```haskell
let cutoffFreq = pF "cutoffFreq"
```

You can now have fun playing with your new effect:
```haskell
cps (40/120)
d1 $ sound "[sn [sn sn]][sn [sn sn*3]][sn [sn*5 sn]][bd bd]" # cutoffFreq "220 880"
```
