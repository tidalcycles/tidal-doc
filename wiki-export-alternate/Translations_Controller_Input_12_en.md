---
title: Translations:Controller Input/12/en
permalink: wiki/Translations:Controller_Input/12/en/
layout: wiki
---

``` haskell
cF
```

is what you use for floating point controls. The second parameter

    1

is the default value, for when tidal hasn't received that control yet.
There is also

``` haskell
cS
```

for strings and

``` haskell
cI
```

for integers. For time values (for using e.g. as the first parameter of

``` haskell
fast
```

/

``` haskell
slow
```

), use

``` haskell
cT
```

. For ratios add

``` haskell
cR
```
