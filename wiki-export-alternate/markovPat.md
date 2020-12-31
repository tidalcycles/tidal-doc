---
title: markovPat
permalink: wiki/markovPat/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

    markovPat :: Pattern Int -> Pattern Int -> [[Double]] -> Pattern Int

**markovPat** generates a one-cycle pattern of steps in a Markov chain
with a transition matrix and an initial state. Each row of the
transition matrix is automatically normalized.

For example:

    markovPat 8 1 [[3,5,2], [4,4,2], [0,1,0]]

Generates a pattern of 8 steps, beginning at state \#1, with three
states (0, 1, or 2):

    (0>⅛)|1
    (⅛>¼)|2
    (¼>⅜)|1
    (⅜>½)|1
    (½>⅝)|2
    (⅝>¾)|1
    (¾>⅞)|1
    (⅞>1)|0

To use it in a Tidal pattern, you will need to map the resulting steps
with something like [fmap](fmap "wikilink"):

    d1 $ s "bd*8" # speed (fmap ([1,2,3]!!) $ markovPat 8 1 [[3,5,2], [4,4,2], [0,1,0]])

    d1 $ s "drum*8" # n (fmap ([0,3,5]!!) $ markovPat 8 1 [[3,5,2], [4,4,2], [0,1,0]])

    d1 $ s (fmap (["bd", "cp", "arpy"]!!) $ markovPat 8 1 [[3,5,2], [4,4,2], [0,1,0]])
