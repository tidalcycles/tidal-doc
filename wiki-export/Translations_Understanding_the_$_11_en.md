---
title: Translations:Understanding the $/11/en
permalink: wiki/Translations:Understanding_the_$/11/en/
layout: wiki
---

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
