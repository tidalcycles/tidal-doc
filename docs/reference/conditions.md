---
title: Conditions
id: conditions
---

This page will present you all the functions that can be used to add conditions to your patterns. Each function will be presented following the same model:
* **Type signature**: how the function is declared on the **Haskell** side.
* **Description**: verbal description of the function.
* **Examples**: a small list of examples that you can copy/paste in your editor.


## Conditions on cycle numbers

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

:::tip
The `every` functions can be used to silence a full cycle or part of a cycle by using `silent` or `mask "~"`. Mask provides additional flexibility to turn on/off individual steps.
:::

```haskell
d1 $ every 3 silent $ n "2 9 11 2" # s "hh27"
d1 $ every 3 (mask "~") $ n "2 9 10 2" # s "hh27"
d1 $ every 3 (mask "0 0 0 0") $ n "2 9 11 2" # s "hh27"
```

### foldEvery

```haskell
Type: foldEvery :: [Int] -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a
```

`foldEvery` is similar to chaining multiple `every` functions together. It transforms a pattern with a function, once per any of the given number of cycles. If a particular cycle is the start of more than one of the given cycle periods, then it it applied more than once.

```haskell
d1 $ foldEvery [5,3] (|+ n 1) $ s "moog" # legato 1
```

The first `moog` samples are tuned to C2, C3 and C4. Note how on cycles multiple of 3 or 5 the pitch is an octave higher, and on multiples of 15 the pitch is two octaves higher, as the transformation is applied twice.

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

```haskell
Type: whenT :: (Time -> Bool) -> (Pattern a -> Pattern a) ->  Pattern a -> Pattern a
```

Only when the given test function returns `True` the given pattern transformation is applied. It differs from `when`, being passed a continuous `Time` value instead of the cycle number. Basically, a `Rational` version of `when`.

```haskell
d1 $ whenT ((< 0.5).(flip Data.Fixed.mod' 2)) (# speed 2) $ sound "hh(4,8) hc(3,8)"
```

The above will apply `# speed 2` only when the remainder of the current `Time` divided by `2` is less than `0.5`.

### whenmod

```haskell
Type: whenmod :: Int -> Int -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a
```

`whenmod` has a similar form and behavior to `every`, but requires an additional number. It applies the function to the pattern, when the remainder of the current loop number divided by the first parameter, is greater or equal than the second parameter. For example the following makes every other block of four loops twice as `fast`:
```haskell
d1 $ whenmod 8 4 (fast 2) (sound "bd sn kurt")
```

### ifp

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

## Conditions on ControlPatterns

### fix

```haskell
Type: fix :: (ControlPattern -> ControlPattern) -> ControlPattern -> ControlPattern -> ControlPattern
```

The `fix` function applies another function to matching events in a pattern of controls. `fix` is `contrast` where the false-branching function is set to the identity `id`.

For example:
```haskell
d1 $ slow 2 $ fix (# crush 3) (n "[1,4]") $ n "0 1 2 3 4 5 6" # sound "arpy"
```
The above only adds the `crush` control when the `n` control is set to either `1` or `4`.

You can be quite specific, for example
```haskell
fix (hurry 2) (s "drum" # n "1")
```
to apply the function `hurry 2` to sample `1` of the drum sample set, and leave the rest as they are.

### unfix

`unfix` is `fix` but only applies when the testing pattern is *not* a match.

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

```haskell
Type: contrastBy :: (a -> Value -> Bool) -> (ControlPattern -> Pattern b) -> (ControlPattern -> Pattern b) -> Pattern (Map.Map String a) -> Pattern (Map.Map String Value) -> Pattern b
```
`contrastBy` is a more general version of `contrast` where you can specify an abritrary boolean function that will be used to compare the control patterns. For example, `contrast` itself is defined as `contrastBy (==)`, to test for equality.

Compare the following:
```haskell
d1 $ contrast (|+ n 12) (|- n 12) (n "2") $ n "0 1 2 [3 4]" # s "superpiano"

d2 $ contrastBy (>=) (|+ n 12) (|- n 12) (n "2") $ n "0 1 2 [3 4]" # s "superpiano"
```
In the latter example, we test for "greater than or equals to" instead of simple equality.

## Choosing patterns and functions
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

### inhabit

```haskell
inhabit :: [(String, Pattern a)] -> Pattern String -> Pattern a
```
`inhabit` allows you to link patterns to some String, or in other words, to give patterns a name and then call them from within another pattern of Strings.

For example, we may make our own bassdrum, hi-hat and snaredrum kit using tidal:

```haskell
do
  let drum = inhabit [("bd",s "sine" |- accelerate 1.5),("hh",s "alphabet:7" # begin 0.7 # hpf 7000),("sd",s "invaders:3" # speed 12)]
  d1 $ drum "[bd*8?, [~hh]*4, sd(6,16)]"
```

`inhabit` can be very useful when using MIDI controlled drum machines, since you can give understandable drum names to patterns of notes.

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

## Euclidians

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

## ControlPattern conditions

### fix
```haskell
Type: fix :: (ControlPattern -> ControlPattern) -> ControlPattern -> ControlPattern -> ControlPattern
```

With `fix` you can apply a ControlPattern as a condition and apply a function wich matches the controls. The first parameter is the function to apply and the second paramete is the condition.
```haskell
d1 $ fix (ply 2) (s "hh") $ s "bd hh sn hh"
```

### fixRange
```haskell
fixRange :: (ControlPattern -> Pattern ValueMap) -> Pattern (Map.Map String (Value, Value)) -> ControlPattern -> ControlPattern
```
The `fixRange` function isn't very user-friendly at the moment but you can create a `fix` variant with a range condition. Any value of a ControlPattern wich matches the values will apply the passed function.

```haskell
d1 $ (fixRange ((# distort 1) . (# gain 0.8)) (pure $ Map.singleton "note"  ((VN 0, VN 7)))) $ s "superpiano" <| note "1 12 7 11"
```

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
