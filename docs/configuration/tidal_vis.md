---
title: Tidal-vis
id: tidal-vis
---

**Tidal-vis** is a tool made by Alex McLean to visualize **Tidal** patterns. This package allows several things:
* OSC messages sent to **SuperCollider** to be dynamicly rendered in realtime with a separate window. Demo of realtime visualisation.
* Colour patterns to be rendered as PDF or SVG files. See *Examples.hs* in the [GitHub
  repository](https://github.com/tidalcycles/tidal-vis) for more help.
* Colour patterns to be rendered to be rendered dynamicly in separate window. See
  *CycleAnimation.hs* for more. Demo.

## Setup tidal-vis


1. Add the following lines to *BootTidal.hs*:

```haskell
 -- OSCTarget for pattern visualizing.
 patternTarget = OSCTarget { oName = "Pattern handler", oAddress = "127.0.0.1", oPort = 5050, oPath = "/trigger/something", oShape = Nothing, oLatency = 0.02, oPreamble = [], oTimestamp = BundleStamp }

 -- OSCTarget for play music via SuperCollider.
 musicTarget = superdirtTarget { oLatency = 0.1, oAddress = "127.0.0.1", oPort = 57120 }

 config = defaultConfig {cFrameTimespan = 1/20}

 -- Send pattern as osc both to SC and to tidal-vis
 tidal <- startMulti [musicTarget, patternTarget] config

 -- Send pattern as osc to SC only
 -- tidal <- startTidal musicTarget config
```


2. Comment `tidal <- startTidal...` and uncomment `tidal <- startMulti...`

3. Build **tidal-vis** and run:

```bash
 cd /tidal-vis
 stack build
 stack exec tidal-vis
```

4. Eval your **Tidal** code.

## Learn more

To learn more about *tidal-vis*, head to the [GitHub
repository](https://github.com/tidalcycles/tidal-vis) of the project.
