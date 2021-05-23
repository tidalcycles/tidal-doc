---
title: Build Arpeggios
id: buildarpeggios
---

This page will teach you how to get started writing arpeggios using different techniques. It is a good way to learn **Tidal Cycles** in a more intuitive way.


## Arpeggios from notes

Start with a simple sequence of notes:
```haskell
d1 $ n "c a f e"
  # sound "supermandolin"
```

Now, let's play one per cycle:
```haskell
d1 $ n "<c a f e>"
  # sound "supermandolin"
```

On top of that, put a copy of the sequence, offset in time and pitch:
```haskell
d1 $ n (off 0.125 (|+ 7) "<c a f e>")
  # sound "supermandolin"
```

Add some structure to the original sequence:
```haskell
d1 $ n (off 0.125 (|+ 7)  "<c*2 a(3,8) f(3,8,2) e*2>")
  # sound "supermandolin"
  # legato 2
```

Reverse in one speaker:
```haskell
d1 $ jux rev $ n (off 0.125 (|+ 7)  "<c*2 a(3,8) f(3,8,2) e*2>")
  # sound "supermandolin"
  # legato 2
```

Let's add another layer:
```haskell
d1 $ jux rev $ n (off 0.125 (|+ 12) $ off 0.125 (|+ 7)  "<c*2 a(3,8) f(3,8,2) e*2>")
  # sound "supermandolin"
  # legato 2
```

## Arpeggios from chords

We will start with a C major chord:
```haskell
d1 $ n "c'maj"
  # sound "supermandolin"
  # legato 2
```

Using the `arp` function to arpeggiate:
```haskell
d1 $ arp "up" $ n "c'maj"
  # sound "supermandolin"
  # sustain 0.5
```

Let's add another note to the chord:
```haskell
d1 $ arp "up" $ n "c'maj'4"
  # sound "supermandolin"
  # sustain 0.5
```

Add another chord:
```haskell
d1 $ arp "up" $ n "c'maj'4 e'min"
  # sound "supermandolin"
  # sustain 0.5
```

Change the arpeggiator:
```haskell
d1 $ arp "pinkyup" $ n "c'maj'4 e'min"
  # sound "supermandolin"
  # sustain 0.5
```

Oh, and we can also pattern the arpeggiator:
```haskell
d1 $ arp "<pinkyup down thumbup up>" $ n "c'maj'4 e'min"
  # sound "supermandolin"
  # sustain 0.5
```

Change the chords, add some reverb:
```haskell
d1 $ jux rev $ arp "<pinkyup down thumbup up>" $ n "<c'maj'4 e4'min'8 f4'maj'4>"
  # sound "supermandolin"
  # sustain 2 # room 0.3 # sz 0.9
```

Add some variety with 'chunk':
```haskell
d1 $ chunk 4 (|- note 5) $ jux rev $ 
  arp "<pinkyup down thumbup up>" $ n "<c'maj'4 e4'min'8 f4'maj'4>"
  # sound "supermandolin"
  # sustain 2 # room 0.3 # sz 0.9
```
