---
title: Network tempo sharing
permalink: wiki/Network_tempo_sharing/
layout: wiki
---

# Using network time

## Step 1: sync computer clocks

Ensure that the system clocks of all the computers are already in sync.
This can be done by making sure the computers are syncing with a network
clock via system settings, but this isn't ideal. Under the hood that
uses 'ntpd', which is designed for slowly bringing computers into
synchrony over the internet, not for quickly getting computers in sync
locally.

Instead, using [ptpd](https://github.com/ptpd/ptpd) is recommended.
However, this seems to be only available for linux and mac os, not
windows.

## Step 2: start tidal on one of the computers

Nominate one computer as the 'clock server' and start tidal there. You
will need to know the network address of this computer on the local
network. You should be able to find this in your system settings.

## Step 3: sync the other computers to the 'clock server'

Change your tidal [boot configuration](/wiki/Configuration "wikilink") on the
other computers to set the

    cTempoAddr

. option to the ip address of the clock server. For example, if the
clock server had the ip address '192.168.0.10', your startTidal line
would look something like this:

    tidal <- startTidal (superdirtTarget {oLatency = 0.02}) (defaultConfig {cFrameTimespan = 1/20, cTempoAddr = "192.168.0.10"})

Once that's done, start tidal on the other computers

# Step 4: set the cps

Use

    setcps

on one of the computers to get all the computers in sync. E.g.

    setcps 1.1

.

# Step 5: adjust latency

You will probably find that your computers are still 'out of phase',
i.e. running at the same cps, but with an offset. Set the cps low (e.g.

    setcps 0.25

), run a simple pattern on the clock server (

    d1 $ s "cp"

) and one of the other computers, and use [nudge](nudge "wikilink") to
find the offset (

    d1 $ s "cp" # nudge 0.05

).

Once you know the right offset you can make it permanent by adding it to
the [oLatency value in your configuration](/wiki/Configuration "wikilink"). As
long as you use the same audio device and so on, you shouldn't have to
adjust it again.

If you find you have to nudge backwards (e.g.

    d1 $ s "cp" # nudge (-0.05)

) this will only work up to a certain point. It's better to add latency
to the clock server in that case.
