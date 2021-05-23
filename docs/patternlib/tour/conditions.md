---
title: Conditions
id: conditions
---

This page will present you all the functions that can be used to add conditions to your patterns. Each function will be presented following the same model:
* **Type signature**: how the function is declared on the **Haskell** side.
* **Description**: verbal description of the function.
* **Examples**: a small list of examples that you can copy/paste in your editor.


## Every and the others

### every
```haskell
Type: every :: Pattern Int -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a
```

`every` is function that allows you to apply another function conditionally. It takes three inputs: how often the function should be applied (e.g. `3` to apply it every `3` cycles), the function to be applied, and the pattern you are applying it to. For example: to reverse a pattern every three cycles (and for the other two play it normally)

```haskell
d1 $ every 3 rev $ n "0 1 [~ 2] 3" # sound "arpy"
```

Note that if the function you're applying itself requires additional parameters (such as fast 2 to make a pattern twice as fast), then you'll need to wrap it in parenthesis, like so:

```haskell
d1 $ every 3 (fast 2) $ n "0 1 [~ 2] 3" # sound "arpy"
```

Otherwise, the `every` function will think it is being passed too many parameters.

### every'

```haskell
Type: every' :: Int -> Int -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a
```

`every'` is a generalisation of `every`, taking one additional argument. The additional argument allows you to offset the function you are applying.

For example, `every' 3 0 (fast 2)` will speed up the cycle on cycles 0,3,6,… whereas `every' 3 1 (fast 2)` will transform the pattern on cycles 1,4,7,…

With this in mind, setting the second argument of `every'` to `0` gives the equivalent `every` function. For example, `every 3` is equivalent to `every' 3 0`. 


### whenmod

```haskell
Type: whenmod :: Int -> Int -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a
```

`whenmod` has a similar form and behavior to `every`, but requires an additional number. It applies the function to the pattern, when the remainder of the current loop number divided by the first parameter, is greater or equal than the second parameter. For example the following makes every other block of four loops twice as `fast`:
```haskell
d1 $ whenmod 8 4 (fast 2) (sound "bd sn kurt")
```


## The "sometimes" family

### sometimes

```haskell
Type: sometimes :: (Pattern a -> Pattern a) -> Pattern a -> Pattern a
```

`sometimes` is function, that applies another function to a pattern, around 50% of the time, at random. It takes two inputs, the function to be applied, and the pattern you are applying it to.

For example to distort half the events in a pattern:
```haskell
d1 $ sometimes (# crush 2) $ n "0 1 [~ 2] 3" # sound "arpy"
```

`sometimes` has a number of variants, which apply the function with different likelihood: 

| function     |  likelihood |
|--------------|-------------|
| always       | 100%        |
| almostAlways | 90%         |
| often        | 75%         |
| sometimes    | 50%         |
| rarely       | 25%         |
| almostNever  | 10%         |
| never        | 0%          |


### sometimesBy

If you want to be specific, you can use `sometimesBy` and a number, for example:
```haskell
sometimesBy 0.93 (# speed 2)
```

to apply the speed control on average 93 times out of a hundred.

## Choosing
### choose
```haskell
Type: choose :: [a] -> Pattern a
```
The `choose` function emits a stream of randomly choosen values from the given list, as a continuous pattern:
```haskell
d1 $ sound "drum ~ drum drum" # n (choose [0,2,3])
```

As with all continuous patterns, you have to be careful to give them structure; in this case choose gives you an infinitely detailed stream of random choices. 

### chooseby

```haskell
Type: chooseBy :: Pattern Double -> [a] -> Pattern a
```
The `chooseBy` function is like choose but instead of selecting elements of the list randomly, it uses the given pattern to select elements.
```haskell
chooseBy "0 0.25 0.5" ["a","b","c","d"]
```
will result in the pattern `"a b c" `.

### wchoose

```haskell
Type: wchoose :: [(a, Double)] -> Pattern a
```

`wchoose` is similar to `choose`, but allows you to 'weight' the choices, so some are more likely to be chosen than others. The following is similar to the previous example, but the `2` is twice as likely to be chosen than the `0` or `3`.

```haskell
d1 $ sound "drum ~ drum drum" # n (wchoose [(0,0.25),(2,0.5),(3,0.25)])
```
:::caution
Prior to version `1.0.0` of **Tidal**, the weights had to add up to `1`, but this is no longer the case. 
:::

### wchooseby

```haskell
Type: wchooseBy :: Pattern Double -> [(a,Double)] -> Pattern a
```

The `wchooseBy` function is like `wchoose` but instead of selecting elements of the list randomly, it uses the given pattern to select elements. 

## Boolean conditions

### struct

```haskell
Type: struct :: Pattern Bool -> Pattern a -> Pattern a
```

`struct` places a rhythmic 'boolean' structure on the pattern you give it. For example:

```haskell
d1 $ struct ("t ~ t*2 ~") $ sound "cp"
```
... is the same as ...

```haskell
d1 $ sound "cp ~ cp*2 ~"
```

The structure comes from a boolean pattern, i.e. a binary one containing true or false values. Above we only used true values, denoted by `t`. It's also possible to include false values with `f`, which struct will simply treat as silience. For example, this would have the same outcome as the above:
```haskell
d1 $ struct ("t f t*2 f") $ sound "cp"
```

These true/false binary patterns become useful when you conditionally manipulate them, for example 'inverting' the values using `every` and `inv`:
```haskell
d1 $ struct (every 3 inv "t f t*2 f") $ sound "cp"
```
In the above, the boolean values will be 'inverted' every third cycle, so that the structure comes from the `fs` rather than `t`. Note that euclidean patterns also create true/false values, for example:

```haskell
d1 $ struct (every 3 inv "t(3,8)") $ sound "cp"
```

In the above, the euclidean pattern creates `"t f t f t f f t"` which gets inverted to `"f t f t f t t f"` every third cycle. Note that if you prefer you can use `1` and `0` instead of `t` and `f`.

### mask

```haskell
Type: mask :: Pattern Bool -> Pattern a -> Pattern a
```

`mask` takes a boolean (aka binary) pattern and 'masks' another pattern with it. That is, events are only carried over if they match within a 'true' event in the binary pattern. For example consider this kind of messy rhythm without any rests:

```haskell
d1 $ sound (cat ["sn*8", "[cp*4 bd*4, hc*5]"]) # n (run 8)
```
If we apply a mask to it:

```haskell
d1 $ mask "t t t ~ t t ~ t"
  $ s (cat ["sn*8", "[cp*4 bd*4, bass*5]"])
  # n (run 8)
```
Due to the use of `cat` here, the same mask is first applied to `"sn*8"` and in the next cycle to `"[cp4 bd4, hc*5]"`.

You could achieve the same effect by adding rests within the `cat` patterns, but mask allows you to do this more easily. It kind of keeps the rhythmic structure and you can change the used samples independently:
```haskell
d1 $ mask "1 ~ 1 ~ 1 1 ~ 1"
  $ s (cat ["can*8", "[cp*4 sn*4, jvbass*16]"])
  # n (run 8)
```
