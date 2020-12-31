---
title: Functions for shifting time
permalink: wiki/Functions_for_shifting_time/
layout: wiki
tags:
 - Functions
 - Time Functions
---

*The title of this page should be "&lt;\~, \~&gt; and friends", but
unfortunately this software doesn't allow titles with &lt; or &gt; in!*

# &lt;\~

[Type](/wiki/Type_signature "wikilink"):

``` haskell
 (<~) :: Pattern Time -> Pattern a -> Pattern a 
```

**&lt;\~** is an operator that shifts a pattern backward in time, by the
given amount.

For example, to shift a pattern by a quarter of a cycle, every fourth
cycle:

    d1 $ every 4 (0.25 <~) $ sound ("arpy arpy:1 arpy:2 arpy:3")

Or to alternate between different shifts:

    d1 $ "<0 0.5 0.125>" <~ sound ("arpy arpy:1 arpy:2 arpy:3")

# \~&gt;

[Type](/wiki/Type_signature "wikilink"):

``` haskell
(~>) :: Pattern Time -> Pattern a -> Pattern a 
```

**\~&gt;** Is the same as above, but shifts a pattern forwards in time.
For example:

    d1 $ every 4 (0.25 ~>) $ sound ("bd ~ sn:1 [mt ht]")
