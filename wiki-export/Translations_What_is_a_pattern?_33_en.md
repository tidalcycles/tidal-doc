---
title: Translations:What is a pattern?/33/en
permalink: wiki/Translations:What_is_a_pattern?/33/en/
layout: wiki
tags:
 - Reference|Pattern
---

A

``` Haskell
ControlMap
```

is simply a dictionary (or map) for storing some values by name (using a
string). As well as using it for external control values within the A

``` Haskell
State
```

datatype, we also use it to make

``` Haskell
ControlPattern
```

s\. They are simply patterns of controlmaps, and are used for
representing patterns of synthesiser messages. So for example the

``` Haskell
speed
```

function in

``` Haskell
sound "bd sn" # speed "2 3"
```

) turns a pattern of numbers into a pattern of controlmaps, the A

``` Haskell
sound
```

turns a pattern of words into a pattern of controlmaps, and the A

``` Haskell
#
```

composes them together into a new pattern of controlmaps. . Feel free to
comment on the discussion page if something is unclear!
