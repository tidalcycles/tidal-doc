---
title: Lazy loading
id: lazy_loading
---

If you are working with large sample libraries or if you use an old computer, you can turn on *lazy loading* in **SuperDirt** as mentionned [here](https://club.tidalcycles.org/t/superdirt-lazy-samples-loading/3148).

## What is lazy loading?

Instead of loading all your audio samples in the RAM as usual, **SuperDirt** will load audio samples **on request**. This is better for people working with a limited amount of memory.

## How to turn it on?

To enable it, update **SuperDirt** to the last commit (go into the downloaded-quarks/SuperDirt folder then `git pull`) then, in the **SuperDirt** startup code, before any `~dirt.loadSoundFiles` call, put a `~dirt.doNotReadYet = true;`.

That's it. It should work without problems.
