---
title: Adding Synthesizers
id: adding_synthesizers
---

## Troubleshooting

### I can hear 'clicks'

When using your custom synthesizers for **Tidal**, you will sometimes hear 'clicks'. These clicks are breaks/discontinuities in the audio signal. Audio clicks are ubiquitous in computer music, and people are doing everything they can to avoid them and to fix the problem.

If you can hear audio clicks while playing with your custom **SuperCollider** synths, try the following:
* rewrite your `SynthDef` the **Tidal way** (see above).
* raise the `legato` value in your pattern.
* increase the `fadeTime` parameter in **SuperDirt**:
```c
~dirt.orbits[3].set(\fadeTime, 0.01);
~dirt.orbits[4].set(\fadeTime, 0.1);
```
