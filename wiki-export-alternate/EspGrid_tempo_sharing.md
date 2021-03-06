---
title: EspGrid tempo sharing
permalink: wiki/EspGrid_tempo_sharing/
layout: wiki
---

# EspGrid tempo sharing

EspGrid is a language-neutral, separate piece of open source software
for sharing tempo and other things in electronic ensembles. You (and all
of your friends) run EspGrid in the background of your "foreground"
music applications - when any program or person changes things like the
tempo, those changes are reflected everywhere.

## Step 1: Start EspGrid/espgridd

Detailed instructions for installing and starting EspGrid/espgridd are
here [1](https://dktr0.github.io/EspGrid/install.html)

## Step 2: Start Tidal / SuperDirt / etc

Do this however you normally do it!

## Step 3: Tell Tidal to sync with EspGrid

Just evaluate 'espgrid tidal' in your editor session.

## Step 4: Change the tempo

You can change the tempo for everyone synced to EspGrid with 'cpsEsp
0.5' 'cpsEsp 0.75' etc. If others change the tempo (including via the OS
X GUI EspGrid app, SuperCollider quarks, etc) your tempo should change
as well.
