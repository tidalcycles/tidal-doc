---
title: Translations:Understanding the $/2/en
permalink: wiki/Translations:Understanding_the_$/2/en/
layout: wiki
---

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
