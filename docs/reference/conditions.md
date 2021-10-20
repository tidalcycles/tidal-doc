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

### foldEvery

```haskell
Type: foldEvery' :: [Int] -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a
```

`foldEvery` is similar to chaining multiple `every` functions together. It transforms a pattern with a function, once per any of the given number of cycles. If a particular cycle is the start of more than one of the given cycle periods, then it it applied more than once. 

### when

```haskell
Type: when :: (Int -> Bool) -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a
```

Only when the given test function returns `True` the given pattern transformation is applied. The test function will be called with the current cycle as a number.

```haskell
d1 $ when ((elem '4').show) (striate 4) $ sound "hh hc"
```

The above will only apply striate `4` to the pattern if the current cycle number contains the number `4`. So the fourth cycle will be striated and the fourteenth and so on. Expect lots of striates after cycle number `399`. 

### whenT

This function is not documented.

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


### someCycles

`someCycles` is similar to `sometimes`, but instead of applying the given function to random events, it applies it to random cycles. For example the following will either distort all of the events in a cycle, or none of them:

```haskell
d1 $ someCycles (# crush 2) $ n "0 1 [~ 2] 3" # sound "arpy"
```

### someCyclesBy

As with `sometimesBy`, if you want to be specific, you can use `someCyclesBy` and a number. For example:

```haskell
someCyclesBy 0.93 (# speed 2)
```

will apply the speed control on average `93` cycles out of a hundred.



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

### cycleChoose

```haskell
Type: cycleChoose :: [a] -> Pattern a
```

Similar to `choose`, but only picks once per cycle:
```haskell
d1 $ sound "drum ~ drum drum" # n (cycleChoose [0,2,3])
```

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

### sew
```haskell
Type: Pattern Bool -> Pattern a -> Pattern a -> Pattern a
```

`sew` uses a pattern of boolean (true or false) values to switch between two other patterns. For example the following will play the first pattern for the first half of a cycle, and the second pattern for the other half.

```haskell
d1 $ sound (sew "t f" "bd*8" "cp*8")
```
The above combines two patterns of strings, and passes the result to the sound function. It's also possible to sew together two control patterns, for example:

```haskell
d1 $ sew "t <f t> <f [f t] t>" (n "0 .. 15" # s "future") (s "cp:3*16" # speed saw + 1.2)
```
You can also use Euclidean rhythm syntax in the boolean sequence:

```haskell
d1 $ sew "t(11,16)" (n "0 .. 15" # s "future") (s "cp:3*16" # speed sine + 1.5)
```

### stitch

```haskell
Type: Pattern Bool -> Pattern a -> Pattern a -> Pattern a
```

`stitch` uses the first (binary) pattern to switch between the following two patterns. The resulting structure comes from the binary pattern, not the source patterns. This differs from sew where the resulting structure comes from the source patterns. For example, the following uses a euclidean pattern to control CC0:

```haskell
d1 $ ccv (stitch "t(7,16)" 127 0) # ccn 0  # "midi"
```

### select

```haskell
select :: Pattern Double -> [Pattern a] -> Pattern a
```
Chooses between a list of patterns, using a pattern of floats (from `0` to `1`). 

### selectF

```haskell
selectF :: Pattern Double -> [Pattern a -> Pattern a] -> Pattern a -> Pattern a
```
Chooses between a list of functions, using a pattern of floats (from `0` to `1`) 

### pickF

```haskell
pickF :: Pattern Int -> [Pattern a -> Pattern a] -> Pattern a -> Pattern a
```
Chooses between a list of functions, using a pattern of integers.

### squeeze

```haskell
squeeze :: Pattern Int -> [Pattern a] -> Pattern a
```
Chooses between a list of patterns, using a pattern of integers.

### euclid

```haskell
Type: euclid :: Pattern Int -> Pattern Int -> Pattern a -> Pattern a
```

`euclid` creates a Euclidean rhythmic structure. It produces the same output as the Euclidean pattern string. For example:

```haskell
d1 $ euclid 3 8 $ sound "cp"
```
is the same as:

```haskell
d1 $ sound "cp(3,8)"
```

`euclid` accepts two parameters that can be patterns:
```haskell
d1 $ euclid "<3 5>" "[8 16]/4" $ s "bd"
```

### euclidInv
```haskell
Type: euclidInv :: Pattern Int -> Pattern Int -> Pattern a -> Pattern a
```

Inverts the pattern given by `euclid`. For example:
```haskell
d1 $ stack [euclid 5 8 $ s "bd",
            euclidInv 5 8 $ s "hh27"]
```
to hear that the hi-hat event fires on every one of the eight even beats that the bass drum does not.

### euclidFull

```
Type: euclidFull :: Pattern Int -> Pattern Int -> Pattern a -> Pattern a ->Pattern a
```

`euclidFull` is a convenience function for playing one pattern on the euclidean rhythm and a different pattern on the off-beat.
```haskell
euclidFull 5 8 (s "bd") (s "hh27")
```

is equivalent to our above example. 


### contrast

```haskell
Type: contrast :: (ControlPattern -> ControlPattern) -> (ControlPattern -> ControlPattern) -> ControlPattern -> ControlPattern -> ControlPattern
```
`contrast` is like a if-else-statement over patterns. For `contrast t f p` you can think of `t` al the true-branch, `f` as the false branch, and `p` as the test.

For contrast, you can use any control pattern as a test of equality: `n "<0 1>"`, `speed "0.5"`, or things like that. This lets you choose specific properties of the pattern you're transforming for testing, like in the following example:

```haskell
d1 $ contrast (|+ n 12) (|- n 12) (n "c") $ n (run 4) # s "superpiano"
```
where every note that isn't middle-c will be shifted down an octave but middle-c will be shifted up to c5.

Since the test given to contrast is also a pattern, you can do things like have it alternate between options:

```haskell
d1 $ contrast (|+ n 12) (|- n 12) (s "<superpiano superchip>") $ s "superpiano superchip" # n 0
```

If you listen to this you'll hear that which instrument is shifted up and which instrument is shifted down alternates between cycles. 

### contrastBy

`contrastBy` is currently undocumented.

## ifp

```haskell
Type: ifp :: (Int -> Bool) -> (Pattern a -> Pattern a) -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a
```

`ifp` decides whether to apply one or another function depending on the result of a test function, which is passed the current cycle as a number. For example:
```haskell
d1 $ ifp ((== 0).(flip mod 2))
  (striate 4)
  (# coarse "24 48") $
  sound "hh hc"
```
This will apply `striate 4` for every even cycle, and `# coarse "24 48"` for every odd one.

:::tip
The test function does not rely on anything Tidal-specific, it uses plain Haskell functionality for operating on numbers. That is, it calculates the modulo of `2` of the current cycle which is either `0` (for even cycles) or `1`. It then compares this value against `0` and returns the result, which is either `True` or `False`. This is what the first part of `ifp`'s type signature signifies `(Int -> Bool)`, a function that takes a whole number and returns either `True` or `False`. 
:::
