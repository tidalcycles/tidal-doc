---
title: quantise
permalink: wiki/quantise/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

    quantise :: (Functor f, RealFrac b) => b -> f b -> f b

**quantise** is useful for rounding a collection of numbers to some
particular base fraction. For example,

    quantise 5 [0, 1.3 ,2.6,3.2,4.7,5]

it will round all the values to the nearest

    (1/5)=0.2

and thus will output the list

     [0.0,1.2,2.6,3.2,4.8,5.0] 

.

You can use this function to force a continuous pattern like
[sine](sine "wikilink") into specific values. In the following example

    d1 $ s "superchip*8" # n (quantise 1 $ range (-10) (10) $ slow 8 $ cosine) 
                         # release (quantise 5 $ slow 8 $ sine + 0.1)

all the releases selected be rounded to the nearest

    0.1

and the notes selected to the nearest

    1

    quantise

with fractional inputs does the consistent thing:

    quantise 0.5

rounds values to the nearest

    2

,

    quantise 0.25

rounds the nearest

    4

&c.
