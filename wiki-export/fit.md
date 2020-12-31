---
title: fit
permalink: wiki/fit/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

``` haskell
fit :: Int -> [a] -> Pattern Int -> Pattern a
```

The **fit** function takes a pattern of integer numbers, which are used
to select values from the given list. What makes this a bit strange is
that only a given number of values are selected each cycle. For example:

    d1 $ sound (fit 3 ["bd", "sn", "arpy", "arpy:1", "casio"] "0 [~ 1] 2 1")

The above fits samples into the pattern by number, i.e. for the first
cycle this will be "bd", "sn" and "arpy", giving the result "bd \[\~
sn\] arpy sn" (note that we start counting at zero, so that 0 picks the
first value). For the following cycle, the same is done again, but
offset by the number given in the first parameter. In the above case
it's

    3

, which is effectively added to all the numbers, giving "3 \[\~ 4\] 5
4", giving giving the pattern "arpy:1 \[\~ casio\] bd casio" (note that
the list wraps round here, so 5 goes back to choose the first element in
the list). The next cycle, 6 is added to all the numbers, then 9, and so
on.

# fit'

[Type](/wiki/Type_signature "wikilink"):

    fit' :: Time -> Int -> Pattern Int -> Pattern Int -> Pattern a -> Pattern a

'''fit' ''' is a generalization of fit, where the list is instead
constructed by using another integer pattern to slice up a given
pattern. The first argument is the number of cycles of that latter
pattern to use when slicing. It’s easier to understand this with a few
examples:

    d1 $ sound (fit' 1 2 "0 1" "1 0" "bd sn")

So what does this do? The first 1 just tells it to slice up a single
cycle of "bd sn". The 2 tells it to select two values each cycle, just
like the first argument to fit. The next pattern "0 1" is the “from”
pattern which tells it how to slice, which in this case means "0" maps
to "bd", and "1" maps to "sn". The next pattern "1 0" is the “to”
pattern, which tells it how to rearrange those slices. So the final
result is the pattern "sn bd".

A more useful example might be something like

    d1 $ fit' 1 4 (run 4) "[0 3*2 2 1 0 3*2 2 [1*8 ~]]/2" $ chop 4 $ (sound "breaks152" # unit "c")

which uses chop to break a single sample into individual pieces, which
fit' then puts into a list (using the run 4 pattern) and reassembles
according to the complicated integer pattern.
