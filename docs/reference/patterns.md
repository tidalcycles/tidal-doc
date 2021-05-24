---
title: Patterns
id: patterns
---

You make music with **Tidal** by creating patterns. Patterns are always declared using a specific name, `d1 ... d9`, `p "dada"`, `p 123123`, followed by the content of the pattern. These patterns are `connections` to the **SuperDirt** synthesizer that you can use to play audio samples, synthesizers, and so on. The following example is using four different patterns, separated by a blank line: 

```c
-- a bass drum
d1 $ s "bd ~ bd ~"

-- high-hat pattern
d2 $ s "[~ hh]*2"

-- 1.. 1.. 1.. 1..
d3 $ s "numbers:1"

-- clap
d4 $ s "cp cp cp"
```

## Classic pattern names 

`d1` to `d16` are considered, historically, to be the classic pattern names. Each pattern will be associated to an `orbit` (a track for effects and audio output).

```c
d1 ...
d2 ...
d3 ...
d4 ...
etc...
```
## Patterns by number

As an alternative, you can type `p` (for `pattern`) followed by any number to get a new pattern : 

```c
p 1234 $ s "bd bd"

p 4321 $ s "hh hh"
```

## Patterns by name

If you don't like numbers for some reason, you can also give "names" to your patterns:

```c
p "romeo" $ s "bd bd"

p "juliet" $ s "hh*4"
```

## Doing things once

Sometimes, you don't really want a pattern but something that will only play `once`. The `once` function does that:

```c
once $ s "trump"
```

## Stop patterns

There are some very convenient commands you can use to stop patterns.

### Stop a single pattern

To stop a specific pattern, you can use the `silence` function:

```c
p "loudpattern" $ silence
```

This function will stop your pattern next cycle.

### Stop everything

The function `hush` will stop all the patterns currently running:
```
hush
```

### Panic

Sometimes, things can go a little bit crazy. For instance, you can end up with numerous synthesizers stacking on the top of each other, leading a gradual loss of control. If you are panicking or if you are afraid, just enter `panic`:

```c
panic
```

It will behave just like `hush`, but with a twist: it will also kill all the synthesizers/audio samples currently running on the **SuperDirt** side. You should be back to total silence in no time.
