---
title: every/en
permalink: wiki/every/en/
layout: wiki
tags:
 - Functions
---

<languages/> [Type](/wiki/Type_signature "wikilink"):

``` haskell
every :: Pattern Int -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a
```

**every** is function, that allows you to apply another function
conditionally. It takes three inputs, how often the function should be
applied (e.g.

``` haskell
3
```

to apply it every 3 cycles), the function to be applied, and the pattern
you are applying it to.

For example to reverse a pattern every three cycles (and for the other
two play it normally):

``` haskell
d1 $ every 3 rev $ n "0 1 [~ 2] 3" # sound "arpy"
```

Note that if the function you're applying requires additional parameters
itself (such as

``` haskell
fast 2
```

to make a pattern twice as fast), then you'll need to wrap it in
parenthesis, like so:

``` haskell
d1 $ every 3 (fast 2) $ n "0 1 [~ 2] 3" # sound "arpy"
```

Otherwise, the

``` haskell
every
```

function will think it is being passed too many parameters.

See also [every'](every' "wikilink").

[Category:Higher-order
functions](/wiki/Category:Higher-order_functions "wikilink")
[Category:Conditional
Transformers](/wiki/Category:Conditional_Transformers "wikilink")
