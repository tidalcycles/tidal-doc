---
title: Link synchronisation
permalink: wiki/Link_synchronisation/
layout: wiki
---

# Network-based time synchronisation using the Link protocol by Ableton

This requires tidal version 1.0.11 or later. It is experimental, so the
interface will change in future releases of tidal, with additional
functionality. For now though, it seems to work well.

To synchronise with the Link protocol, follow the following steps:

1.  Download and run Carabiner, which acts as a bridge between the link
    protocol and software like Tidal. You can get [downloads for Windows
    and MacOs
    here](https://github.com/Deep-Symmetry/carabiner/releases). Linux
    users can find [instructions for compiling
    here](https://github.com/Deep-Symmetry/carabiner).
2.  Have another link-compatible app to hand that you want to sync to.
3.  Start tidal in your editor, and run the following to connect to
    carabiner:
        sock <- carabiner tidal 4 (-0.14)
4.  Run a tidal pattern (e.g.
        d1 $ (sound "cp bd bd bd")

    ), change the bpm in another link-compatible app and see if it
    works.
5.  To change the BPM from tidal, you currently have to run e.g.
    \`sendMsg sock "bpm 155"\`

Please report your experience (good or bad) in this thread:
<https://toplap.lurk.org/t/link-support-preview/418>

Thanks!

## Notes

You can't adjust

    cps

in Tidal and have that change bpm in the link network yet - this will be
fixed up soon.

You can tweak the startup command:

    sock <- carabiner tidal 4 (-0.14)

The

    4

. here is the number of beats per cycle, used to convert between link's
beats-per-minute and tidal's cycles-per-second. You might prefer

    2

(or

    3

if you're doing a waltz).

The

    -0.14

in the above is a latency time adjustment to get tidal in phase, you
might need to tweak it, to get it bang on.

Each time you adjust these numbers you have to restart tidal, by
restarting your editor. This will be more easily configured in the
future.
