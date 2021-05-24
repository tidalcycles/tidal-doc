---
title: Tempo
id: tempo
---

There are multiple functions that you can use to change the tempo. Tidal uses a *cycles per second* representation of time. It means that **Tempo** and **Cycles** are linked together. If you need to learn more about **Cycles**, check the sidebar for more information.

![cycle](cycle_representation.png)

## setcps 

Just give it the number of *cycles per second*, for example if your cycle has two beats in, this will be the equivalent of 120 bpm:
```c
setcps 1
```

##  cps

`cps` is no longer a standalone function (`setcps` above now does this), but a control pattern (see Controls in the sidebar). Patterning `cps` is fun. Patterns don't (yet) have independent tempos though, if you change it on one pattern, it changes on all of them.

```c
p "cpsfun" $ s "bd sd(3,8)" # cps (slow 8 $ 0.5 + saw)
```

