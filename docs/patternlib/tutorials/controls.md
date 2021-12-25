---
title: Controls
id: controls
---

Control functions are used to turn patterns of strings (words) or numbers into control patterns. What is a control pattern you might say? A control pattern is a pattern that will govern how samples are playing in the **SuperDirt** audio synth (or other software you are using to control **Tidal**). This includes audio control functions such as `gain` and `pan`, sample manipulation functions such as `begin` and `end`, and effect functions such as `delay` and `shape`.

**TLDR**: Control functions are functions that are used to shape the sounds your patterns make (effects, parameters).


## Controls patterns are patterns

Every parameter is patternable! Everything is patternable.

## Control synthesizers

The default synthesizers, or any **SuperDirt** synthesizer can be activated using the `sound` control pattern. For instance, this pattern will alternate between multiple synths over the same melody:
```c
d1 $ note "c d e f g a"
   # sound "<superpiano supersquare supersaw>"
```

## Controls effects

Most of the time, you will use control patterns to use effects on your patterns. For instance, this drum pattern will be filtered:
```c
d1 $ s " bd hh bd hh*2"
  # lpf "500 1000 1500"
  # lpq 0.5
```

## Combine everything

You can easily combine the last two examples to get a filtered melody playing every three instruments rotating for each note:  

```c
d1 $ note "c d e f g a"
   # sound "<superpiano supersquare supersaw>"
   # lpf "500 1000 1500"
   # lpq 0.5
```

## Learn more about control patterns

Look at the sidebar. The `Synthesizers` and `Audio effects` page will give you a list of all the existing controls you can use on the *vanilla* version of **Tidal**.
