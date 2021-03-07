---
title: Configuration
permalink: wiki/Configuration/
layout: wiki
tags:
 - Tidal-1+
 - Reference
---

<languages/> <translate>

To configure Tidal, you'll need to edit the code used to start it up in
your text editor.

You can download a copy of this startup code here:
<https://github.com/tidalcycles/Tidal/blob/main/BootTidal.hs>

Save it somewhere safe, and if you're using the atom editor, put the
full path to it (including the filename) in the settings for the
tidalcycles package. You can then edit this file to configure tidal.

# Controlling latency

There are two configuration values which control overall latency, 'frame
timespan' and 'latency'. To find the maximum total latency, add them
together. Here's an example configuration:

    tidal <- startTidal (superdirtTarget {oLatency = 0.02}) (defaultConfig {cFrameTimespan = 1/20})

## Frame timespan

This is the duration of Tidal's calculation window in seconds. The
default is 0.05 seconds, in other words a calculation rate of 20 frames
per second.

If you find Tidal is using too much CPU, increasing the frame timespan
will probably help.

## Latency

If you get late messages in supercollider, you can increase the latency
by increasing this from its default value (which at the time of writing
is 0.02).

# SuperDirt running in another host

If you're running SuperDirt in another host (perhaps, in a multi-user
setup), you need to define this in a similar fashion as with the
latency, except in this case the keyname is "oAddress":

``` Haskell
tidal <- startTidal (superdirtTarget {oAddress = "192.168.0.23", oPort = 57120}) defaultConfig
```

In case you need to alter multiple settings for superdirtTarget, just
separate them by a comma (

    {oAddress = "1.2.3.4", oLatency = 0.04}

).

Note that in emacs (and possibly other editor) configuration files,
you'll need to escape the quotation marks.

You will also need to configure SuperDirt to accept messages coming from
another host. For example, starting dirt like this will tell listen for
OSC messages on all network interfaces:

    ~dirt.start(57120, [0, 0], NetAddr("0.0.0.0"));

</translate>
