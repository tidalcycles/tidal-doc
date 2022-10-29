---
title: The Boot File 
id: boot-tidal
---

Everytime you start Tidal, the software is reading from a configuration file usually named `BootTidal.hs`. Generally, this file will be attached to your text editor (check the plugin you are using). Save this file somewhere safe, you will have to tweak it sometimes: changing options, adding new functionality, etc...

Some users went really far into customizing their setup: [Jarmlib](https://github.com/jarmitage/jarmlib). You can take a look at their work to see how to extend your configuration file.

As an example, here is the *vanilla* `BootTidal.hs` file used by the [Atom Package for Tidal](https://raw.githubusercontent.com/tidalcycles/atom-tidalcycles/master/lib/BootTidal.hs):
```c
:set -XOverloadedStrings
:set prompt ""

import Sound.Tidal.Context
import System.IO (hSetEncoding, stdout, utf8)
hSetEncoding stdout utf8

-- total latency = oLatency + cFrameTimespan
tidal <- startTidal (superdirtTarget {oLatency = 0.1, oAddress = "127.0.0.1", oPort = 57120}) (defaultConfig {cFrameTimespan = 1/20})

:{
let p = streamReplace tidal
    hush = streamHush tidal
    list = streamList tidal
    mute = streamMute tidal
    unmute = streamUnmute tidal
    solo = streamSolo tidal
    unsolo = streamUnsolo tidal
    once = streamOnce tidal
    first = streamFirst tidal
    asap = once
    nudgeAll = streamNudgeAll tidal
    all = streamAll tidal
    resetCycles = streamResetCycles tidal
    setcps = asap . cps
    xfade i = transition tidal True (Sound.Tidal.Transition.xfadeIn 4) i
    xfadeIn i t = transition tidal True (Sound.Tidal.Transition.xfadeIn t) i
    histpan i t = transition tidal True (Sound.Tidal.Transition.histpan t) i
    wait i t = transition tidal True (Sound.Tidal.Transition.wait t) i
    waitT i f t = transition tidal True (Sound.Tidal.Transition.waitT f t) i
    jump i = transition tidal True (Sound.Tidal.Transition.jump) i
    jumpIn i t = transition tidal True (Sound.Tidal.Transition.jumpIn t) i
    jumpIn' i t = transition tidal True (Sound.Tidal.Transition.jumpIn' t) i
    jumpMod i t = transition tidal True (Sound.Tidal.Transition.jumpMod t) i
    mortal i lifespan release = transition tidal True (Sound.Tidal.Transition.mortal lifespan release) i
    interpolate i = transition tidal True (Sound.Tidal.Transition.interpolate) i
    interpolateIn i t = transition tidal True (Sound.Tidal.Transition.interpolateIn t) i
    clutch i = transition tidal True (Sound.Tidal.Transition.clutch) i
    clutchIn i t = transition tidal True (Sound.Tidal.Transition.clutchIn t) i
    anticipate i = transition tidal True (Sound.Tidal.Transition.anticipate) i
    anticipateIn i t = transition tidal True (Sound.Tidal.Transition.anticipateIn t) i
    forId i t = transition tidal False (Sound.Tidal.Transition.mortalOverlay t) i
    d1 = p 1 . (|< orbit 0)
    d2 = p 2 . (|< orbit 1)
    d3 = p 3 . (|< orbit 2)
    d4 = p 4 . (|< orbit 3)
    d5 = p 5 . (|< orbit 4)
    d6 = p 6 . (|< orbit 5)
    d7 = p 7 . (|< orbit 6)
    d8 = p 8 . (|< orbit 7)
    d9 = p 9 . (|< orbit 8)
    d10 = p 10 . (|< orbit 9)
    d11 = p 11 . (|< orbit 10)
    d12 = p 12 . (|< orbit 11)
    d13 = p 13
    d14 = p 14
    d15 = p 15
    d16 = p 16
:}

:{
let setI = streamSetI tidal
    setF = streamSetF tidal
    setS = streamSetS tidal
    setR = streamSetR tidal
    setB = streamSetB tidal
:}

:set prompt "tidal> "
:set prompt-cont ""

```

## Controlling Latency

There are three configuration values which relate to latency: `cProcessAhead`, `cFrameTimespan`, and `oLatency`. Here's an example configuration:

```haskell
tidal <- startTidal (superdirtTarget {oLatency = 0.05}) (defaultConfig {cFrameTimespan = 1/20, cProcessAhead = 3/10})
```

* **Frame timespan**: This is the duration of Tidal's calculation window in seconds. The default is `0.05 seconds`, in other words a calculation rate of 20 frames per second. If you find Tidal is using too much CPU, increasing the frame timespan will probably help. 

*  **Latency**: This parameter lets you account for the time a target takes to produce a sound. For example, we might need SuperDirt to schedule the event 100 ms before it should hit the speaker. A higher latency parameter will move the sound earlier in time. The default is `0.05 seconds`.

* **Process Ahead**: This parameter controls how far ahead Tidal will start processing events. It might need to be adjusted when a high latency value is set. Adjust this value if you get late messages in SuperCollider. The default is `0.3 seconds`.

## SuperDirt running in another host

If you're running **SuperDirt** in another host (perhaps, in a multi-user setup), you need to define this in a similar fashion as with the latency, except in this case the keyname is `oAddress`:

```haskell
tidal <- startTidal (superdirtTarget {oAddress = "192.168.0.23", oPort = 57120}) defaultConfig
```

In case you need to alter multiple settings for `superdirtTarget`, just separate them by a comma:
```haskell
{oAddress = "1.2.3.4", oLatency = 0.04}
```

Note that in **Emacs** (and possibly other editor) configuration files, you'll need to escape the quotation marks.

You will also need to configure **SuperDirt** to accept messages coming from another host. For example, starting **Dirt** like this will tell listen for OSC messages on all network interfaces:

```haskell
~dirt.start(57120, [0, 0], NetAddr("0.0.0.0"));
```
