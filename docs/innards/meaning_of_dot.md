---
title: The meaning of .
id: meaning_of_dot
---

The dot (`.`) is the **Haskell** operator for function composition. Function composition comes from mathematics but actually, it can be really useful to make music. Haskell was originally designed by mathematicians and computer magicians. Its syntax borrowed quite a lot from mathematical notation. In some cases, Haskell is sometimes more precise and strict than other languages. The syntax is also much more compact. 

## Introduction 

When you make music with **Tidal**, you are composing functions: feeding the output of a function to another function, etc... Your function will generally output a pattern that will be parsed and sent to **SuperDirt** to turn it into sound. `$` is another really useful function composition operator that you are using everytime you play with **Tidal**.

Tidal functions are small little programs that do very few things. The name is sometimes a good description of the purpose of any given function. `fast` will make things faster, `slow` will slow them down, `striate` will striate, etc.. By feeding the output of a function to another one, you transform your pattern more and more, until your "composed" and definitive function feels allright for you.

## The dot

The dot is a `function composition` operator. Let's take an example:
```haskell
d1
  $ fast 2
  $ s "hh*4"
```
This small code snippet will play a fast uninteresting hi-hat pattern.

Now, look at the following example:
```haskell
-- with the dot operator
d1 
  $ every 2 (# speed 2) . fast 2
  $ s "bd hh bd hh"

-- without the dot operator
d1 
  $ every 2 (# speed 2) 
  $ fast 2
  $ s "bd hh bd hh"
```

We did the same thing using two different methods:
1. we "composed" a new function made of the output of `fast 2` fed to the `every 2 (# speed 2)` function.
2. we passed the result of `fast 2 $ s "bd hh bd hh"` to `every 2 (# speed 2)`.

Luckily for us, these two examples sound the same. But you might start to see that we haven't applied the same method to get to the same result. Actually, we used two different `function composition` operators.

The dot (`.`) will take many of your functions and "compose" them together to make one single function that you can feed to another one as if it had always been a single function the whole time. Let's take a look at a more complex example that will do just that:

```haskell
d1 
  $ superimpose ((# speed "2*12") . (# squiz (slow 2 $ range 1 16 $ sine)) . (striate
  "[4|2|3]") . (ply "[[1 1 2 4]|[1 1 2 2]]") . (# room "0 0.5") . (# sz "0.2 0.4"))
  $ fast 2
  $ s "bd hh bd hh" # amp 0.4

```

`superimpose` expects a modified version of a pattern and our regular pattern. I fed only one function to describe the modified version, but I used the `.` to chain together many functions that will now be counted as one. The isolated modified function looks like:
```haskell
((# speed "2*12") . (# squiz (slow 2 $ range 1 16 $ sine)) . (striate
  "[4|2|3]") . (ply "[[1 1 2 4]|[1 1 2 2]]") . (# room "0 0.5") . (# sz "0.2 0.4"))
```
Let's see the type of this function using `:t`:
```haskell
:: Pattern ControlMap -> Pattern ControlMap
```

Cool! As you can see, we are in fact dealing with a super simple object, made of many many tiny parts chained together using `.`.

## Why should I use it?

The `.` is a very elegant operator to chain together functions at the speed of light. Using it, you might be able to compose more complex patterns easily.
