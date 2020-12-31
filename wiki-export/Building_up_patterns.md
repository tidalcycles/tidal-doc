---
title: Building up patterns
permalink: wiki/Building_up_patterns/
layout: wiki
---

Some examples of how a melody or rhythm can be built up from simple
parts. Originally started for the Amsterdam Powcademy workshop

## Patterns as numbers

### Building an arpeggio from notes

    -- simple sequences of notes
    d1 $ n "c a f e"
      # sound "supermandolin"

    -- play one per cycle
    d1 $ n "<c a f e>"
      # sound "supermandolin"

    -- on top of that, put a copy of the sequence, offset in time and pitch:
    d1 $ n (off 0.125 (|+ 7) "<c a f e>")
      # sound "supermandolin"

    -- add some structure to the original sequence
    d1 $ n (off 0.125 (|+ 7)  "<c*2 a(3,8) f(3,8,2) e*2>")
      # sound "supermandolin"
      # legato 2

    -- reverse in one speaker
    d1 $ jux rev $ n (off 0.125 (|+ 7)  "<c*2 a(3,8) f(3,8,2) e*2>")
      # sound "supermandolin"
      # legato 2

    -- add another layer
    d1 $ jux rev $ n (off 0.125 (|+ 12) $ off 0.125 (|+ 7)  "<c*2 a(3,8) f(3,8,2) e*2>")
      # sound "supermandolin"
      # legato 2

### Building an arpeggio from chords

    -- start with c major

    d1 $ n "c'maj"
      # sound "supermandolin"
      # legato 2

    -- arpeggiate up
    d1 $ arp "up" $ n "c'maj"
      # sound "supermandolin"
      # sustain 0.5

    -- add another note to the chord
    d1 $ arp "up" $ n "c'maj'4"
      # sound "supermandolin"
      # sustain 0.5

    -- add another chord
    d1 $ arp "up" $ n "c'maj'4 e'min"
      # sound "supermandolin"
      # sustain 0.5

    -- change the arpeggiator
    d1 $ arp "pinkyup" $ n "c'maj'4 e'min"
      # sound "supermandolin"
      # sustain 0.5

    -- pattern the arpeggiator
    d1 $ arp "<pinkyup down thumbup up>" $ n "c'maj'4 e'min"
      # sound "supermandolin"
      # sustain 0.5

    -- change the chords, add some reverb
    d1 $ jux rev $ arp "<pinkyup down thumbup up>" $ n "<c'maj'4 e4'min'8 f4'maj'4>"
      # sound "supermandolin"
      # sustain 2 # room 0.3 # sz 0.9

    -- add some variety with 'chunk'
    d1 $ chunk 4 (|- note 5) $ jux rev $ 
      arp "<pinkyup down thumbup up>" $ n "<c'maj'4 e4'min'8 f4'maj'4>"
      # sound "supermandolin"
      # sustain 2 # room 0.3 # sz 0.9

## Building up a rhythm

    -- Simple bass drum - snare
    d1 $ sound "bd sn"

    -- Choose a different snare sample
    d1 $ sound "bd sn:3"

    -- Change the rhythm
    d1 $ sound "bd*2 [~ sn:3]"

    -- Add some toms
    d1 $ sound "bd*2 [[~ lt] sn:3] lt:1 [ht mt*2]"

    -- Start to transform, shift a quarter cycle every other cycle
    d1 $ every 2 (0.25 <~) $ sound "bd*2 [[~ lt] sn:3] lt:1 [ht mt*2]"

    -- Pattern the shift amount
    d1 $ every 2 ("<0.25 0.125 0.5>" <~) $ sound "bd*2 [[~ lt] sn:3] lt:1 [ht mt*2]"

    -- Add some patterned effects
    d1 $ every 2 ("<0.25 0.125 0.5>" <~) $ sound "bd*2 [[~ lt] sn:3] lt:1 [ht mt*2]"
      # squiz "<1 2.5 2>"
      # room (slow 4 $ range 0 0.2 saw)
      # sz 0.5
      # orbit 1

    -- More transformation
    d1 $ jux' [id,rev,(# speed 2)] $ every 2 ("<0.25 0.125 0.5>" <~) $ sound "bd*2 [[~ lt] sn:3] lt:1 [ht mt*2]"
      # squiz "<1 2.5 2>"
      # room (slow 4 $ range 0 0.2 saw)
      # sz 0.5
      # orbit 1

### Building up another rhythm

    -- start with a sequence..
    d1 $ n "0 0 [2 0] [2 3]" # sound "feel" # speed 1.5

    -- Add a bit of flavour
    d1 $ n "0 <0 4> [2 0] [2 3]" # sound "feel" # speed 1.5

    -- Swap the samples round every other cycle
    d1 $ every 2 (rot "<1 3 2>") $ n "0 <0 4> [2 0] [2 3]" # sound "feel" # speed 1.5

    -- Always worth trying a jux rev
    d1 $ jux rev $ every 2 (rot "<1 3 2>") $ n "0 <0 4> [2 0] [2 3]" # sound "feel" # speed 1.5

    -- Calm it down a bit by reducing the amount of panning
    d1 $ juxBy 0.4 rev $ every 2 (rot "<1 3 2>") $ n "0 <0 4> [2 0] [2 3]" # sound "feel" # speed 1.5

    -- Vary the speed
    d1 $ juxBy 0.4 rev $ every 2 (rot "<1 3 2>") $ n "0 <0 4> [2 0] [2 3]" # sound "feel" # speed "1.75 2"

    -- Add an offset vowel effect
    d1 $ off 0.25 (# vowel "<a o i>")
      $ juxBy 0.4 rev $ every 2 (rot "<1 3 2>") $ n "0 <0 4> [2 0] [2 3]" # sound "feel" # speed "1.75 2"

    -- Give it a friend
    d1 $ off 0.25 (# vowel "<a o i>")
      $ juxBy 0.4 rev $ every 2 (rot "<1 3 2>") $ n "0 <0 4> [2 0] [2 3]" # sound "feel" # speed "1.75 2"

    d2 $ juxBy 0.5 rev $ chunk 4 ((+ speed (1 + sine)) . ply 8) $ note "3(3,8)" # sound "bass"
      # speed "<2 4>"
      # legato 1
