---
title: Mini Notation
id: mini_notation
---

**Mini-notation** is the name of a special notation used for writing patterns of various sort (*notes*, *samples*, *parameters*).  To use the mini-notation, use a string delimited by quotation marks: `""`. Internally, the mini-notation is actually parsed and understood as a shortcut for a function that you could otherwise write using longer function compositions. 

Learning the mini-notation is **essential** for learning how to make music with **Tidal Cycles**. The notation is rather intuitive. We encourage you to try all these examples to see if you understand what effect every symbol can have on your pattern.


## Mini-notation table

| Symbol | Description                             | Example                            | Equivalent                                                     |
|--------|-----------------------------------------|------------------------------------|----------------------------------------------------------------|
| `~`    | Create a rest                           | `d1 $ s "~ hh"`                    |                                                                |
| `[ ]`  | Create a pattern grouping               | `d1 $ s "[bd sd] hh"`              | `d1 $ fastcat [s "bd sd", s "hh"]`                             |
| `.`    | Shorthand for pattern grouping          | `d1 $ s "bd sd . hh hh hh"`        | `d1 $ s "[bd sd] [hh hh hh]`                                   |
| `,`    | Play multiple patterns at the same time | `d1 $ s "[bd sd, hh hh hh]"`       | `d1 $ stack [s "bd sd", s "hh hh hh"]`                         |
| `*`    | Repeat a pattern                        | `d1 $ s "bd*2 sd"`                 | `d1 $ s "[bd bd] sd"`                                          |
| `/`    | Slow down a pattern                     | `d1 $ s "bd/2"`                    | `d1 $ s (slow 2 $ "bd")`                                       |
| &#124     | Create a random choice                  | `d1 $ s "[bd` &#124`cp `&#124`hh]"`              |                                                                |
| `< >`  | Alternate between patterns              | `d1 $ s "bd <sd hh cp>"`           | `d1 $ slow 3 $ s "bd sd bd hh bd cp"`                          |
| `!`    | Replicate a pattern                     | `d1 $ s "bd!3 sd"`                 | `d1 $ s "bd bd bd sd"`                                         |
| `_`    | Elongate a pattern                      | `d1 $ s "bd _ _ ~ sd _"`           | Results in pattern  `(0>1/2)\|s: "bd" (4/6>1)\|s: "sd"`        |
| `@`    | Elongate a pattern                      | `d1 $ s "superpiano@3 superpiano"` | `d1 $ s "superpiano _ _ superpiano"`                           |
| `?`    | Randomly remove events from pattern     | `d1 $ s "bd? sd"`                  | `d1 $ fastcat [degradeBy 0.5 $ s "bd", s "sd"]`                |
| `:`    | Selecting samples                       | `d1 $ s "bd:3"`                    | `d1 $ s "bd" # n 3`                                            |
| `( )`  | Euclidean sequences                     | `d1 $ s "bd(3,8)"`                 | `d1 $ euclid 3 8 $ s "bd"`                                     |
| `{ }`  | Polymetric sequences                    | `d1 $ s "{bd bd bd bd, cp cp hh}"` | 2nd pattern wraps:  `d1 $ stack [ s "bd*4", s "cp cp hh cp" ]` |
| `{ }%` | Polymetric sequence subdivision         | `d1 $ s "{bd cp hh}%8"`            | Pattern wraps:  `d1 $ s "bd cp hh bd cp hh bd cp"`             |

## The mini-notation in depth

### Rests

Use `~` to create rests in your patterns:
```c
d1 $ s "~ hh"
```

### Pattern grouping

Picture every element of your cycle as a step. Divide a simple pattern by 4:
```c
p "demo" $ s "bd bd bd bd"
```
Now use pattern grouping to create a subdivision of any step:
```c
p "demo" $ s "[bd hh] bd bd"
```
You can play with infinite layers of subdivisions. Time and human perception is the limit:
```c
p "demo" $ s "[bd [hh [cp sn:2] hh]] bd bd bd"
```

### Pattern grouping shorthand

You can use `.` to separate multiple pattern groupings in your pattern top-level:

```c
p "demo" $ s "bd*3 . hh*4 cp"
```

You can nest pattern grouping shorthands:
```c
p "demo" $ s "[bd*3 . hh:2*2] . hh*4 cp"
```

### Superposition

You can play multiple patterns at the same time inside one pattern. This is one of the most intuitive ways of dealing with superposition/polyphony. This small pattern is a complete rhythm section:

```c
d1 $ s "[bd*3,hh*4,[~ cp]*2, bass*4]"
```

:::tip
Be sure to enclose your pattern between brackets (`[]`) if you want to use superposition at the top-level.
:::

### Step repetition

You can repeat a step as many times as you like using the multiplication symbol (also illustrated above):
```c
d1 $ note "[[c3*3],[c e g c6*3]]" # s "superpiano"

d2 $ s "cp cp cp*2"
```

### Step division 

You can slow down a pattern by using division (`/`). This one needs a little bit of practice to be understood:

```c
d1 $ s "bd cp/2"
```

The `clap` will only be heard every other cycle.

### Alternate

You can alternate between events in your pattern using the `less-than` and `more-than` symbols < >. This one can be used to add a little variation to your pattern or to create nice and simple melodies and arpeggios:

```c
d1 $ fast 2 $ n "<c e g>" # s "superpiano"

d2 $ s "bd <[hh sn] [hh cp]>"
```

### Replicate

Use `!` to replicate a given event `x` times:
```c
d2 $ s "bd!2 cp!2"
```

:::caution
This is not the same thing as the `*` symbol. `!` will create new steps or `replicate` the steps. `*` will only multiply a step by a given factor:
```c
-- so far so good
d2 $ s "bd!2 cp!2"
-- oh wait!
d2 $ s "bd!2 cp*2"
```
:::

### Elongate

Elongate or `_` will extend the duration of an event for `x` steps:
```c
d2 $ s "bd _ _ hh*4"
```

You might here a lot of silence between the first hit and the hi-hat. That's perfectly normal. Silence is cool too.

### Randomization

You can use a question mark `?` to randomly remove some events from the patter, with a probability of `1/2`.
```c
d1 $ s "bd hh? bd hh?"
```

### Random choice

You can use the &#124 symbol between brackets `[]` to choose between multiple events with an equal probability: 
```c
d1 $ s "[bd*4|hh*12|cp*2]"
```

### Sample Selection

When entering the name of an audio sample, you are in fact entering the name of the `folder` containing it. To select a specific file in the selected folder, use the `:` symbol followed by any number:
```c
p "scroll" s "arpy:1 arpy:2 arpy:3 arpy:4 arpy:5"

-- all right, that's better
p "scroll" $  s "[bd*4, [arpy:1,arpy:2,arpy:3,arpy:4,arpy:5](5,8)]"
```

:::tip
You can't go too far in the folder and select a file that doesn't exist. Something like `cp:1238129038123` will work:
```c
d1 $ s "cp:1238129038123"
```
Tidal will not complain. It will just cycle in the folder until it finds the right sample.
:::

### Euclidian Sequences

Euclidian rhythms are rhythms obtained using the greatest common divisor of two numbers. They were described in 2004 by [Godfried Toussaint](https://en.wikipedia.org/wiki/Godfried_Toussaint), a canadian computer scientist. Euclidian rhythms are really useful for computer/algorithmic music because they can accurately describe a large number of rhythms used in the most important music world traditions. The algorithm work by providing two numbers: 
* the number of beats
* the number of steps/silences to fill 

An euclidian rhythm will distribute the first number of beats to the second numbers of steps to be filled. With Tidal, you can create euclidian rhythms by adding an event followed by the `(x,y)` indicator, `x` and `y` corresponding to the numbers described above:
```c
d1 $ s "[bd(3,8), cp(2,8), hh(7,8), bass:1(7,16)]"

d1 $ s "[bd(5,8), cp(4,8), hh(7,8), bass:1(7,16)]"

d1 $ s "[bd(5,8), cp(1,8)?, hh(7,8), bass:1(8,16)]"
```

#### More examples
```c
The Euclidean Algorithm Generates Traditional Musical Rhythms by Toussaint
(2,5) : A thirteenth century Persian rhythm called Khafif-e-ramal.
(3,4) : The archetypal pattern of the Cumbia from Colombia, as well as a Calypso rhythm from Trinidad.
(3,5,2) : Another thirteenth century Persian rhythm by the name of Khafif-e-ramal, as well as a Rumanian folk-dance rhythm.
(3,7) : A Ruchenitza rhythm used in a Bulgarian folk-dance.
(3,8) : The Cuban tresillo pattern.
(4,7) : Another Ruchenitza Bulgarian folk-dance rhythm.
(4,9) : The Aksak rhythm of Turkey.
(4,11) : The metric pattern used by Frank Zappa in his piece titled Outside Now.
(5,6) : Yields the York-Samai pattern, a popular Arab rhythm.
(5,7) : The Nawakhat pattern, another popular Arab rhythm.
(5,8) : The Cuban cinquillo pattern.
(5,9) : A popular Arab rhythm called Agsag-Samai.
(5,11) : The metric pattern used by Moussorgsky in Pictures at an Exhibition.
(5,12) : The Venda clapping pattern of a South African children’s song.
(5,16) : The Bossa-Nova rhythm necklace of Brazil.
(7,8) : A typical rhythm played on the Bendir (frame drum).
(7,12) : A common West African bell pattern.
(7,16,14) : A Samba rhythm necklace from Brazil.
(9,16) : A rhythm necklace used in the Central African Republic.
(11,24,14) : A rhythm necklace of the Aka Pygmies of Central Africa.
(13,24,5) : Another rhythm necklace of the Aka Pygmies of the upper Sangha.

```


### Polymetric Sequences

Creating polymetric sequences is a fairly advanced thing you can do using the **Tidal** mini-notation. To do so, enclose your pattern between curly brackets (`{}`):

```c
d1 $ s "{bd*2, hh*4, bd hh 808:4}"
```

### Polymetric Sequences with Subdivision

Alternatively, you can also add the precise subdivision you are looking for by using `%` followed by the subdivision number:
```c
d1 $ s "{bd hh 808:4}%8"
d2 $ s "{bd cp 808:5}%4" # speed 2
```
