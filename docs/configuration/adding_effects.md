---
title: Adding Effects
id: adding_effects
---

This help file is based on a file found in the [SuperDirt GitHub](https://github.com/musikinformatik/SuperDirt/blob/develop/hacks/adding-effects.scd) repository. Report to the original version to get more information or add your improved workflow to this page to help other users. Adding new effects for **Tidal** and **SuperDirt** is a three-step process: 

1. add the desired parameters to **Tidal**
2. add a module definition to **SuperDirt**, so it can be found when the parameter is not `nil`
3. add the `SynthDef` to **SuperDirt**, so it can be played

## Adding a spectral delay

We are going to add a weird spectral delay to **SuperDirt**. This assumes that you have an instance of **SuperDirt** accessible via `~dirt` in the **SuperCollider** interactive editor.

### Tidal Side

We are going to add two parameters: `tsdelay` (float, delay time) and `xsdelay` (int, delay structure). Run the following Tidal Code (as if it was a tidal pattern):

```haskell
let tsdelay = pF "tsdelay"
    xsdelay = pI "xsdelay"
```

If you want this the above be automatically available every time you start tidal, then add it to the definitions in your [BootTidal.hs boot file](https://tidalcycles.org/docs/configuration/boot-tidal/).

### SuperCollider Side

Add a module for **SuperDirt**. This adds a responder for the parameters.
```c
(
~dirt.addModule('spectral-delay', { |dirtEvent|
	dirtEvent.sendSynth('spectral-delay' ++ ~dirt.numChannels,
		// OPTIONAL
		// passing this array of parameters could be left out,
		// but it makes it clear what happens
		[
			xsdelay: ~xsdelay,
			tsdelay: ~tsdelay,
			sustain: ~sustain,
			out: ~out
		]
	)
}, { ~tsdelay.notNil or: { ~xsdelay.notNil } }); // play synth only if at least one of the two was given
)
```

You can previsualise the effect order using this command in **SuperCollider**:
```c
~dirt.modules;
```

You can reorder the effects if you need to. For instance, if you want the low pass filter to come after the delay, run the following line:

```c
~dirt.orderModules(['spectral-delay', 'hpf', 'klm']);
```

### Make a SynthDef

The last step is to declare our spectral delay itself, that will be declared in a classic **SuperCollider** SynthDef:
```c
(

var numChannels =  ~dirt.numChannels;

SynthDef("spectral-delay" ++ numChannels, { |out, tsdelay, xsdelay = 1, sustain|

	var signal, delayTime, delays, freqs, filtered;
	var size = 16;
	var maxDelayTime = 0.2;

	signal = In.ar(out, numChannels);
	delayTime = tsdelay * maxDelayTime;
	filtered = (1..size).sum { |i|
		var filterFreq = i.linexp(1, size, 40, 17000);
		var sig = BPF.ar(signal, filterFreq, 0.005);
		// the delay pattern is determined from xsdelay by bitwise-and:
		DelayN.ar(sig, maxDelayTime, i & xsdelay * (1/size) * delayTime )
	};
	signal = signal * 0.2 + (filtered * 4); // this controls wet/dry
	ReplaceOut.ar(out, signal)

}).add;
)
```

### Final result

Now you should be able to write the following in **Tidal**:
```haskell
d1 $ sound "can*4" # tsdelay "0 0.25 0.5 0.75 1" # xsdelay "3 124 3 12 62 2"
```
