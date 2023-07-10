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

1. Comment out any existing lines in *BootTidal.hs* that begin with `tidal <- startTidal`.

2. Add the following lines to *BootTidal.hs*:

```haskell
 -- Target and shape for pattern visualizing.
 patternTarget = Target { oName = "Pattern handler", oAddress = "127.0.0.1", oPort = 5050, oBusPort = Nothing, oLatency = 0.02, oWindow = Nothing, oSchedule = Pre BundleStamp, oHandshake = False }
 patternShape = OSC "/trigger/something" $ Named {requiredArgs = []}

 -- Target for playing music via SuperCollider.
 musicTarget = superdirtTarget { oLatency = 0.1, oAddress = "127.0.0.1", oPort = 57120 }

 config = defaultConfig {cFrameTimespan = 1/20}

 -- Send pattern as OSC both to SuperCollider and to tidal-vis.
 tidal <- startStream config [(musicTarget, [superdirtShape]), (patternTarget, [patternShape])]

 -- Send pattern as OSC to SuperCollider only.
 -- tidal <- startTidal musicTarget config
```

3. Install **tidal-vis** and run:

```bash
 cabal update
 cabal install tidal-vis
 tidal-vis
```

4. Eval your **Tidal** code.

## Learn more

To learn more about *tidal-vis*, head to the [GitHub
repository](https://github.com/tidalcycles/tidal-vis) of the project.

:::info  

For a different approach to visualizing Tidal patterns, see the [Didactic Pattern Visualizer](https://github.com/ivan-abreu/didacticpatternvisualizer/tree/main) by Iván Abreu. Also see the blog post on it (by hh) with examples and code: [Tidal Visualization with Didactic Pattern Visualizer](https://tidalcycles.org/blog/blog_topic_visualizer).

:::
