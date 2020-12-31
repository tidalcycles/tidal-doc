---
title: Understanding the $/en
permalink: wiki/Understanding_the_$/en/
layout: wiki
tags:
 - Reference|$
---

The dollar (

``` Haskell
$
```

) is a mysterious thing. It doesn't really do anything, but is super
useful. It's easy to get it mixed up with other operators in Tidal, for
example

``` Haskell
#
```

, because in a way they both 'join things together'. But what is

``` Haskell
$
```

, exactly?

The

``` Haskell
$
```

is used a *lot* in Haskell (the language which Tidal lives inside). Like
a lot of things in Haskell,

``` Haskell
$
```

is a *function*. Like all operators (e.g.

``` Haskell
+
```

), it has two inputs - the left side, and the right side, and has one
output. The left input must be a function, and all that

``` Haskell
$
```

does is pass what's on the right hand side, and give it to that
function.

In other words, in this expression:

``` Haskell
rev $ "1 2 3"
```

... the dollar takes

``` Haskell
"1 2 3"
```

and passes it to the function

``` Haskell
rev
```

. So actually the above is the same as this:

``` Haskell
rev "1 2 3"
```

So if we can do without it, why is it useful? Lets look at a slightly
more complex example:

``` Haskell
fast 2 $ rev "1 2 3"
```

Here the dollar takes care of passing

``` Haskell
rev "1 2 3"
```

to

``` Haskell
fast 2
```

. If we missed it out, then we'd get an error.

``` Haskell
-- this gives an error!
fast 2 rev "1 2 3"
```

That's because the computer will first read

``` Haskell
fast 2
```

, then

``` Haskell
rev
```

, and try to treat

``` Haskell
rev
```

as a pattern to be speeded up. But on its own,

``` Haskell
rev
```

isn't a pattern, but a function for transforming pattern.

To avoid this error, we could use parenthesis:

``` Haskell
fast 2 (rev "1 2 3")
```

Here the brackets make sure

``` Haskell
rev "1 2 3"
```

is calculated first, before it is passed as a pattern to

``` Haskell
fast 2
```

.

So, both

``` Haskell
$
```

and parenthesis can be used to control which code is calculated first.
The

``` Haskell
$
```

is often used to avoid having to match opening and closing brackets, but
sometimes parenthesis makes more sense.

Note that you *can't* use

``` Haskell
$
```

with operators. For example:

``` Haskell
-- this doesn't work either!
4 * $ 2 + 3
-- but this does
4 * (2 + 3)
```

= Comparing

``` Haskell
$
```

and

``` Haskell
#
```

=

So,

``` Haskell
$
```

is used to join a parameter (on the right) with a function (on the
left).

``` Haskell
#
```

(and all its friends

``` Haskell
|+|
```

,

``` Haskell
|*|
```

, etc) are used to combine a pattern on the right with a pattern on the
left.
