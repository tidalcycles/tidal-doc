---
title: Interaction
permalink: wiki/Interaction/
layout: wiki
tags:
 - Reference
 - Tidal-1+
---

<languages/> <translate> In Tidal 1.0.0, the way you interact with
patterns has changed a bit.

The range of functions for interaction set up by default can be seen in
the [bootup
code](https://codeberg.org/uzu/tidal/src/branch/main/BootTidal.hs).

# Patterns by number and by name

As before you can use

``` haskell
d1
```

,

``` haskell
d2
```

etc to start different patterns, e.g:

``` Haskell
d1 $ sound "bd sd"

<!--T:6-->
d1 $ silence
```

But now as an alternative you can also use

``` haskell
p
```

and specify *any* number, like this:

``` Haskell
p 100323523 $ sound "bd sd"

<!--T:9-->
p 100323523 $ silence
```

Theoretically, you can have any number of patterns running at once.

You can also refer to them by name, if you want.

``` Haskell
p "jimmy" $ sound "bd sd"
p "susan" $ sound "cp(3,8)"

<!--T:13-->
p "jimmy" $ silence
p "susan" $ silence
```

# Transitions

If you want to do a transition, you put it in place of the

``` haskell
p
```

, e.g.:

``` haskell
xfade "susan" $ sound "gabba(3,8,<0 2 4>)"
xfade "susan" $ sound "cp*2"
```

(The old t1, t2 etc method no longer works.)

# Doing things once

If you just want a pattern to run for one cycle and then stop, you can
do use

``` haskell
once
```

:

``` haskell
once $ s "bd sd(3,8)"
```

# Changing tempo with setcps

Just give it the number of cycles per second, for example if your cycle
has two beats in, this will be the equivalent of 120 bpm:

    setcps 1

# Changing tempo with cps

``` haskell
cps
```

is no longer a standalone function (\`setcps\` above now does this), but
a control pattern. Patterning cps is *fun*. Patterns don't (yet) have
independent tempos though, if you change it on one pattern, it changes
on all of them.

``` haskell
p "cpsfun" $ s "bd sd(3,8)" # cps (slow 8 $ 0.5 + saw)
```

</translate>
