---
title: Translations:Linux installation/6/en
permalink: wiki/Translations:Linux_installation/6/en/
layout: wiki
---

# Install Supercollider

Installing supercollider via this method (i.e.
`sudo apt-get install supercollider sc3-plugins`) generally doesn't
work. Either the supercollider version is too old (superdirt needs at
least version 3.7), or the version of supercollider is mismatched with
sc3-plugins. If you're using ubuntu, mint or a similar distribution, my
advice is to ignore the supercollider packages and just compile them
yourself. Instructions for compiling from source on various distros is
available
[here](https://supercollider.github.io/development/building.html). If
you're using a recent Debian-based distro (for example, Ubuntu \>=
18.04), these scripts make it easy to do so:

` `[`https://github.com/lvm/build-supercollider`](https://github.com/lvm/build-supercollider)
