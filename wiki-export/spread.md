---
title: spread
permalink: wiki/spread/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

``` haskell
spread :: (a -> t -> Pattern b) -> [a] -> t -> Pattern b
```

The **spread** function allows you to take a pattern transformation
which takes a parameter, such as \`slow\`, and provide several
parameters which are switched between. In other words it 'spreads' a
function across several values.

Taking a simple high hat loop as an example:

``` haskell
d1 $ sound "ho ho:2 ho:3 hc"
```

We can speed it up by different amounts, such as by 2x:

``` haskell
d1 $ fast 2 $ sound "ho ho:2 ho:3 hc"
```

Or by 3x:

``` haskell
d1 $ fast 3 $ sound "ho ho:2 ho:3 hc"
```

But if we use **spread**, we can make a pattern which alternates between
the two speeds:

``` haskell
d1 $ spread fast[2,3] $ sound "ho ho:2 ho:3 hc"
```

Note that many functions now allow pattern input. This is equivalent to
the above

``` haskell
d1 $ fast "<2 3>" $ sound "ho ho:2 ho:3 hc"
```

Note that if you pass

``` haskell
($)
```

as the function to spread values over, you can put different functions
as the list of values. For example:

``` haskell
d1 $ spread ($) [density 2, rev, slow 2, striate 3, (# speed "0.8")]
    $ sound "[bd*2 [~ bd]] [sn future]*2 cp jvbass*4"
```

Above, the pattern will have these transforms applied to it, one at a
time, per cycle:

-   cycle 1:
    ``` haskell
    density 2
    ```

    \- pattern will increase in speed
-   cycle 2:
    ``` haskell
    rev
    ```

    \- pattern will be reversed
-   cycle 3:
    ``` haskell
    slow 2
    ```

    \- pattern will decrease in speed
-   cycle 4:
    ``` haskell
    striate 3
    ```

    \- pattern will be granualized
-   cycle 5:
    ``` haskell
    (# speed "0.8")
    ```

    \- pattern samples will be played back more slowly

After

``` haskell
(# speed "0.8")
```

, the transforms will repeat and start at

``` haskell
density 2
```

again.

# spreadf

A convenient shorthand for

``` haskell
spread ($)
```

# fastspread

**fastspread** works the same as **spread**, but the result is squashed
into a single cycle. If you gave four values to **spread**, then the
result would seem to speed up by a factor of four. Compare these two:

``` haskell
d1 $ spread ($) [gap 4, striate 4] $ sound "ho ho:2 ho:3 hc"
```

``` haskell
d1 $ fastspread ($) [gap 4, striate 4] $ sound "ho ho:2 ho:3 hc"
```

# spreadChoose

**spreadChoose** (alias **spreadr**) works the same as **spread**, but
the values are selected at random, one cycle at a time. For example:

``` haskell
d1 $ spreadChoose ($) [gap 4, striate 4] $ sound "ho ho:2 ho:3 hc"
```

[Category:Higher-order
functions](/wiki/Category:Higher-order_functions "wikilink")
