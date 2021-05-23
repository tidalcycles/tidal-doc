---
title: What is a pattern? 
id: what_is_a_pattern
---

## Introduction

In **Tidal**, what is a pattern? There are a lot of ways of answering this question. A technical definition is that under the hood, a pattern is a function from time to events. You give a pattern a start and end time, and it gives you back the events that are active (in part or in whole) during that timespan. An event is itself a value with a start and end time.

This is mostly hidden when it comes to using **Tidal** to make music, but lets have a closer look at the innards of a really simple pattern:

```haskell
"1 2 3"
```

The above might look like a `string`, but **Tidal** quietly parses it into a pattern for you (using a hidden function called `parseBP_E`). We can ask that pattern for values by casting the string pattern to a Tidal pattern by appending `:: Pattern String` to the pattern string. You're kind of telling **Tidal** to treat this string as a pattern and show you what it sees:

```haskell
"1 2 3" :: Pattern String
```

If you run the above, you should see the contents of the first cycle in the output buffer:
```haskell
(0>⅓)|"1"
(⅓>⅔)|"2"
(⅔>1)|"3"
```

From that we can see the first event `1` is active for the first third of the cycle, and so on.

So a pattern is a function from a `timespan` (also known as an `arc`), to values with each have a beginning and end. A function like `rev`, is therefore a combinator, which takes such a function as input, and gives a new function as output (with input and output timing manipulations baked-in, in order to reverse the pattern).

## Types of pattern

That's the basics, lets have a look at some code. The core representation for patterns is in the `Sound.Tidal.Pattern` module. The core representation is in the ten or so lines at the top. Lets step through it. Some **Haskell** knowledge will be helpful here, but you will hopefully get the gist even without software development experience.

```haskell
-- | Time is rational
type Time = Rational
```

The above states that time is rational. This means that rather than representing time as integers (whole numbers), or as floating point numbers, **Tidal** represents time as a ratio of two integers. This means that for example a third can be represented precisely, as one over three. Music is of course full of such ratios, and not representing them as such can cause a great deal of problems.. Basically, this means that if you add three one-thirds together, you'll get a whole. Seems obvious but not all systems do this!

```haskell
-- | A time arc (start and end)
type Arc = (Time, Time)
```

This is the representation of an `arc`, or timespan. We like to call this a time arc rather than a time span, because in Tidal the notion of time is cyclic. Here the two time values are simply the beginning and end of an arc.

```haskell
-- | The second arc (the part) should be equal to or fit inside the
-- first one (the whole that it's a part of).
type Part = (Arc, Arc)
```

Tidal often needs to represent part of an `arc`. It does so with two `arcs`, the first representing the whole of the part, and the second the part itself. Often both arcs will be the same, which simply means that we have a whole that has a single part.

```haskell
-- | An event is a value that's active during a timespan
type Event a = (Part, a)
```

An event then, consists of a part, and a value of type a. This a can stand for any type (but you can only have events of the same type in any one pattern). For example you can have a pattern of words, of numbers, of colours or even of other patterns..

```haskell
data State = State {arc :: Arc,
                    controls :: ControlMap
                   }
```

Since version `1.0.0`, **Tidal** patterns can also respond to changing state as well as progressing time. So the above represents the entire input to a **Tidal** pattern, the current timespan, and the current state of external controllers (whether MIDI controllers, or other software). What is interesting is that the current time (the arc isn't a point in time, but an `arc`, or timespan. This aligns with the idea of the psychological 'specious present' having a duration.

```haskell
-- | A function that represents events taking place over time
type Query a = (State -> [Event a])
```

Here is that function from time to events we were talking about earlier. We simplified a bit - it's a function from a timespan plus some additional state, to events. Notice the a is carried from the type of the events to the type of the query. This again shows how a particular pattern can only represent events of the same type.

Notice also that a list of events is returned (denoted by the square brackets). This simply means that tidal supports polyphony - many events can take place at the same time. Remember though that each event has its own `arc`; two events might be returned for the same timespan, but they may well not start and end at the same time, and might not overlap at all.

It may also be that the arc of an event might extend outside the arc in the query state. This is one case where we get part of an arc back - the part will be the intersection of the arc of the query and that of the event.

```haskell
-- | Also known as Continuous vs Discrete/Amorphous vs Pulsating etc.
data Nature = Analog | Digital
            deriving Eq
```

## Analogue and Digital patterns

An important feature of **Tidal** is that you can accurately compose analogue (continuous) and digital (discrete) patterns together. For example it can be nice to multiply a discrete pattern of notes by a continuously varying sinewave. It's a bit of a myth that computers can only represent digital structures, but when it comes to combining analogue and digital patterns together, it's useful to be able to know which is which, hence the above datatype for doing that.

```haskell
-- | A datatype that's basically a query, plus a hint about whether its events
-- are Analogue or Digital by nature
data Pattern a = Pattern {nature :: Nature, query :: Query a}
```

Here finally we arrive at the `Pattern` datatype, which simply consists of an either digital or analogue nature, plus a query for calculating events for a particular timespan.

The only thing we haven't done is define what the `ControlMap` type is that we saw earlier. As well as being used to represent controller state, it's part of the definition of one more type, the `ControlPattern`, here we go:

```haskell
data Value = VS { svalue :: String }
           | VF { fvalue :: Double }
           | VI { ivalue :: Int }
           deriving (Eq,Ord,Typeable,Data)

type ControlMap = Map.Map String Value
type ControlPattern = Pattern ControlMap
```

A `ControlMap` is simply a dictionary (or `map`) for storing some values by name (using a string). As well as using it for external control values within the State datatype, we also use it to make ControlPatterns. They are simply patterns of controlmaps, and are used for representing patterns of synthesiser messages. So for example the speed function in `sound "bd sn" # speed "2 3"`) turns a pattern of numbers into a pattern of controlmaps, the sound turns a pattern of words into a pattern of controlmaps, and the # composes them together into a new pattern of controlmaps. Feel free to comment on the discussion page if something is unclear! 
