---
title: deconstruct
permalink: wiki/deconstruct/
layout: wiki
tags:
 - Functions
---

[Type](/wiki/Type_signature "wikilink"):

    deconstruct :: Int -> Pattern String -> String

The **deconstruct** function displays the given number of steps within a
pattern of strings. It's useful for visualising simple patterns, for
example for seeing what a euclidean pattern is doing.

For example:

    deconstruct 8 "[bd(3,8), sn(5,8,2)]"

returns:

    "[bd, sn] sn ~ [bd, sn] sn ~ [bd, sn] ~"
