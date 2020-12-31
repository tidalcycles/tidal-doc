---
title: Type signatures
permalink: wiki/Type_signatures/
layout: wiki
tags:
 - Reference
---

In Haskell (which Tidal lives in), a type signature tells you what kind
of thing a value or function is. They're particularly useful for finding
out what a function expects from you, and what it gives back.

You can find out the type of a function is with

``` haskell
:t
```

, for example to find out the type signature for [rev](rev "wikilink"),
you could type

``` haskell
:t rev
```

into your editor, and evaluate it. You'll see this in the output window:

``` haskell
rev :: Pattern a -> Pattern a
```

That's quite simple, it tells you that it takes a pattern as input, and
gives you back a pattern as output. Let's have a look at the
[fast](fast "wikilink") function, via

``` haskell
:t fast
```

:

``` haskell
fast :: Pattern Time -> Pattern a -> Pattern a
```

That's a bit more complicated, there's three patterns there. The last
one is always the output, and the ones preceding it are the inputs. So

``` haskell
fast
```

takes a pattern of time, another pattern, and gives you a pattern in
return. That makes some sense too, the first parameter says how fast it
should go in terms of time, and can be patterned. The second parameter
is the pattern that is going to be made faster, but it doesn't say what
kind of pattern it is, it just says

``` haskell
Pattern a
```

, and the same with the output. We saw the same

``` haskell
Pattern a
```

type earlier with

``` haskell
rev
```

. What does it mean?

Well the

``` haskell
a
```

in

``` haskell
Pattern a
```

is unconstrained - it can be whatever you like. So the

``` haskell
rev
```

function can work on any kind of pattern. This is because

``` haskell
rev
```

doesn't deal with any particular values, it just manipulates time.

So

``` haskell
a
```

is a kind of wildcard here, used in both the input and output of

    rev

. This means that if you can give it a pattern of anything, but if you
give it a pattern of integers, you are *guaranteed* to get a pattern of
integers back. So you can swap that

``` haskell
a
```

for another type but only if you swap all instances of it for the same
type.

A more complicated example is [every](every "wikilink"):

``` haskell
every :: Pattern Int -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a
```

Now,

``` haskell
every
```

takes three parameters, a whole number of cycles, a function to apply to
a pattern, and the pattern itself. We can see that the first parameter
is a pattern of integers (aka whole numbers), fine. The second parameter
is stranger -

``` haskell
(Pattern a -> Pattern a)
```

. This is how functions that are parameters are shown - wrapped in
parenthesis. We can see from this that the second parameter is a
function, that takes a pattern of any type as input, and gives a pattern
of the same type as output. If we look back at the type signature of

``` haskell
rev
```

, it's pretty clear that we could give that as this second parameter, as
the types match.. Indeed it's quite common to do

``` haskell
every 3 rev (s "bd sn")
```

, for example.

Hopefully that gives you some insight into how to read type signatures.
They're really useful for understanding how to use functions, even
without reading documentation.

Feel free to add any questions to the discussion page.
