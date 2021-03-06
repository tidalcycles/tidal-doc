---
title: MiniTidal
permalink: wiki/MiniTidal/
layout: wiki
---

# MiniTidal (and Estuary)

MiniTidal is a parser for TidalCycles that was created to be used in the
zero-installation web-browser-based collaborative platform
[Estuary](https://github.com/dktr0/Estuary). Estuary allows TidalCycles
(as well as other live coding languages) to be used in the web browser,
without installing any software. This is particularly useful in workshop
sitations where time can be spent on examples and play instead of
installation (and participants may not wish to, or may not be able to,
install software on the machines at their disposal) - and is also useful
in situations where distributed collaboration is desired (for example,
two people jamming with Tidal from different locations via the
Internet). Because MiniTidal is part of the Tidal codebase, and because
Tidal's Haskell code is used in building Estuary, newly developed Tidal
features can often be made available through Estuary with minimal extra
work.

From the perspective of someone using them, the main difference between
Tidal and MiniTidal (in Estuary) is that they don't need to address a
specific layer/stream with d1, d2, etc when using MiniTidal (because
each code box in Estuary already targets a specific layer/stream of
event generation). Consider the following example:

    d1 $ s "bd cp" -- using Tidal via a Tidal installation, Atom plugin, etc
    s "bd cp" -- the same thing in MiniTidal/Estuary

You can try it right now here - the use of the Chrome or Chromium
(open-source) browsers is REQUIRED: <https://intramuros.mcmaster.ca>

More details about, and support for, the larger Estuary system are
available elsewhere. This page, however, is the primary home for
information about MiniTidal - what it supports and what it doesn't
(yet). The hope is that everything people do with "standard" TidalCycles
installations can be done with MiniTidal/Estuary - and the list of what
is supported (below) suggests that this goal is eminently attainable. If
you discover particular examples that don't work with MiniTidal and you
would like them to work, please bring them to the attention of the
Estuary and/or TidalCycles developers in any of the following ways:

1.  in the \#tidal or \#estuary channels on <https://talk.lurk.org>
2.  by filing an issue on <https://github.com/TidalCycles/Tidal> tagging
    @dktr0
3.  by private message to @dktr0 on <https://talk.lurk.org>

## Tidal/Haskell functions/operators currently supported by MiniTidal (with notes about any known caveats/limitations)

    -
    -|
    *
    *|
    /
    /|
    #
    %|
    +
    +|
    <|
    <~
    >|
    |-
    |-|
    |*
    |*|
    |/
    |/|
    |%
    |%|
    |+
    |+|
    |<
    |<|
    |>
    |>|
    ~>
    $
    accelerate
    almostAlways
    almostNever
    always
    append
    bandf
    bandq
    begin
    brak
    cat
    choose
    chop
    chunk
    coarse
    compress
    compressTo
    const
    cosine
    crush
    cut
    cutoff
    cycleChoose
    degrade
    degradeBy
    degradeOverBy
    delay
    delayfeedback
    delaytime
    density
    densityGap
    discretise
    distrib
    end
    euclid
    euclidFull
    euclidInv
    every
    every'
    fast
    fastcat
    fastGap
    fastspread
    fit
    fit'
    foldEvery
    gain
    hcutoff
    hresonance
    isaw
    iter
    iter'
    jux
    linger
    listToPat
    loop
    loopFirst
    n
    never
    note
    off
    often
    overlay
    palindrome
    pan
    playFor
    ply
    rand
    randcat
    range
    rarely
    repeatCycles
    resonance
    rev
    rotL
    rotR
    run
    s
    samples
    saw
    scramble
    segment
    shape
    shuffle
    silence
    sine
    slow
    slowcat
    slowspread
    slowstripe
    someCycles
    someCyclesBy
    sometimes
    sometimesBy
    sound
    spaceOut
    sparsity
    speed
    spread
    square
    stack
    stretch
    striate
    striate'
    stut
    substruct
    substruct'
    superimpose
    swing
    swingBy
    timeLoop
    tri
    trunc
    unDegradeBy
    up
    vowel
    whenmod
    within
    zoom

## TidalCycles idioms definitely not currently supported by MiniTidal

    anything involving Haskell function composition (ie. the . operator) [coming soon]
    transitions [coming eventually]
