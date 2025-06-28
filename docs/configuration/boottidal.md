---
title: The Boot File 
id: boot-tidal
---

Every time you start Tidal, the software is reading from a configuration file usually named `BootTidal.hs`. Generally, this file will be attached to your text editor (check the plugin you are using). Save this file somewhere safe, you will have to tweak it sometimes: changing options, adding new functionality, etc...

Some users went really far into customizing their setup: [Jarmlib](https://github.com/jarmitage/jarmlib). You can take a look at their work to see how to extend your configuration file by adding new aliases to it.

As an example, here is the *vanilla* `BootTidal.hs` file used by the [upstream Tidal Package](https://codeberg.org/uzu/tidal/src/branch/main/BootTidal.hs) (yours may look different if you're using an earlier version - see below):
```haskell
:set -fno-warn-orphans -Wno-type-defaults -XMultiParamTypeClasses -XOverloadedStrings
:set prompt ""

-- Import all the boot functions and aliases.
import Sound.Tidal.Boot

default (Rational, Integer, Double, Pattern String)

-- Create a Tidal Stream with the default settings.
-- To customize these settings, use 'mkTidalWith' instead
tidalInst <- mkTidal

-- tidalInst <- mkTidalWith [(superdirtTarget { oLatency = 0.01 }, [superdirtShape])] (defaultConfig {cFrameTimespan = 1/50, cProcessAhead = 1/20})

-- This orphan instance makes the boot aliases work!
-- It has to go after you define 'tidalInst'.
instance Tidally where tidal = tidalInst

-- `enableLink` and `disableLink` can be used to toggle synchronisation using the Link protocol.
-- Uncomment the next line to enable Link on startup.
-- enableLink

-- You can also add your own aliases in this file. For example:
-- fastsquizzed pat = fast 2 $ pat # squiz 1.5

:set prompt "tidal> "
:set prompt-cont ""
```

## Controlling Latency

There are three configuration values which relate to latency: `cProcessAhead`, `cFrameTimespan`, and `oLatency`. Here's an example configuration:

```haskell
tidalInst <- mkTidalWith [(superdirtTarget { oLatency = 0.05 }, [superdirtShape])] (defaultConfig {cFrameTimespan = 1/20, cProcessAhead = 3/10})
```

If you are running an earlier version of tidal, your BootTidal.hs file will look different. You can still configure the same settings by changing a line that looks like this:

```hs
tidal <- startTidal (superdirtTarget {oLatency = 0.05, oAddress = "127.0.0.1", oPort = 57120}) (defaultConfig {cVerbose = True, cFrameTimespan = 1/20, cProcessAhead = 3/10})
```

* **Frame timespan**: This is the duration of Tidal's calculation window in seconds. The default is `0.05 seconds`, in other words a calculation rate of 20 frames per second. If you find Tidal is using too much CPU, increasing the frame timespan will probably help. 

*  **Latency**: This parameter lets you account for the time a target takes to produce a sound. For example, we might need SuperDirt to schedule the event 100 ms before it should hit the speaker. A higher latency parameter will move the sound earlier in time. The default is `0.05 seconds`.

* **Process Ahead**: This parameter controls how far ahead Tidal will start processing events. It might need to be adjusted when a high latency value is set. Adjust this value if you get late messages in SuperCollider. The default is `0.3 seconds`.

## SuperDirt running in another host

If you're running **SuperDirt** on another host (perhaps, in a multi-user setup), you need to define this in a similar fashion as with the latency, except in this case the keyname is `oAddress`, giving the IP address or hostname. For example if you are running SuperDirt on another computer that has the IP adress 192.168.0.23, you would do:

```haskell
tidalInst <- mkTidalWith [(superdirtTarget { oAddress = "192.168.0.23", oPort = 57120 }, [superdirtShape])] (defaultConfig {cCtrlAddr = "0.0.0.0"})
```
Note that `cCtrlAddr` also needs to be set to `0.0.0.0`, as shown above, otherwise Tidal will not be able to send messages across a network. To explain; the `cCtrlAddr` control address is used both for receiving and sending network messages (using the Open Sound Control protocol). Setting it to `0.0.0.0` means that Tidal will be able to send and receive messages on any network that your computer is connected to (by default it will only send/receive to other programs running on your local computer and not across the a local network or the wider internet).

In case you need to alter multiple settings for `superdirtTarget`, just separate them by a comma:
```haskell
{oAddress = "1.2.3.4", oLatency = 0.04}
```

Note that in **Emacs** (and possibly other editor) configuration files, you'll need to escape the quotation marks.

You will also need to configure **SuperDirt** to accept messages coming from another host. For example, starting **Dirt** like this will tell listen for OSC messages on all network interfaces:

```haskell
~dirt.start(57120, [0, 0], NetAddr("0.0.0.0"));
```
