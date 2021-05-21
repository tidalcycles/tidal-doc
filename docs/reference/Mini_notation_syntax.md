---
title: Mini notation syntax
permalink: wiki/Mini_notation_syntax/
layout: wiki
---

| Symbol | Description                      | Example                       | Equivalent                                    |
| ------ | -------------------------------- | ----------------------------- | --------------------------------------------- |
| .      | Shorthand for pattern grouping   | d1 $ s "bd sd . hh hh hh"     | d1 $ s "[bd sd] [hh hh hh]                    |
| ,  | Play multiple patterns at the same time | d1 $ s "[bd sd, hh hh hh]" | d1 $ stack [s "bd sd", s "hh hh hh"]          |
| *      | Repeat a pattern                 | d1 $ s "bd*2 sd"              | d1 $ s "[bd bd] sd"                           |
| /      | Slow down a pattern              | d1 $ s "bd/2"                 | d1 $ s (slow 2 $ "bd")                        |
| &lt >    | Alternate between patterns       | d1 $ s "bd &ltsd hh cp>"        | d1 $ slow 3 $ s "bd sd bd hh bd cp"           |
| !      | Replicate a pattern              | d1 $ s "bd!3 sd"              | d1 $ s "bd bd bd sd"                          |
| _      | Elongate a pattern     | d1 $ s "bd _ _ ~ sd _"   | Results in pattern (0>1/2)&#124;s: "bd" (4/6>1)&#124;s: "sd" |
| @      | Elongate a pattern               | d1 $ s "superpiano@3 superpiano" | d1 $ s "superpiano _ _ superpiano"         |
| ?      | Randomly remove events from pattern     | d1 $ s "bd? sd"        | d1 $ fastcat [degradeBy 0.5 $ s "bd", s "sd"] |
| :      | Selecting samples                | d1 $ s "bd:3"                 | d1 $ s "bd" # n 3                             |
| ( )    | Euclidean sequences              | d1 $ s "bd(3,8)"              | d1 $ euclid 3 8 $ s "bd"                      |
