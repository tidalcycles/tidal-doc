---
title: Accumulation
id: accumulation
---

This page will present you all the functions that can be used to pile up things: sounds, patterns, etc... Each function will be presented following the same model:

* **Type signature**: how the function is declared on the **Haskell** side.
* **Description**: verbal description of the function.
* **Examples**: a small list of examples that you can copy/paste in your editor.

## Superposition
### overlay

```haskell
Type: overlay :: Pattern a -> Pattern a -> Pattern a
```

The `overlay` function is similar to `cat`, but combines two patterns, rather than a list of patterns. For example:

```haskell
d1 $ sound (overlay "bd sn:2" "cp*3")
```

...is the same as...

```haskell
d1 $ sound "[bd sn:2, cp*3]"
```

### \<\>

```haskell
Type: (<>) :: Pattern a -> Pattern a -> Pattern a
```

`\<\>` is the same as overlay described above but in operator form. For example:

```haskell
d1 $ sound ("bd sn:2" <> "cp*3")
```

### stack

```haskell
Type: stack :: [Pattern a] -> Pattern a
```

`stack` takes a list of patterns and combines them into a new pattern by layering them up - effectively playing all of the patterns in the list simultaneously:

```haskell
d1 $ stack [ 
  sound "bd bd*2", 
  sound "hh*2 [sn cp] cp future*4", 
  sound "arpy" +| n "0 .. 15"
]
```

This is particularly useful if you want to apply a function or synth control pattern to multiple patterns at once:

```haskell
d1 $ whenmod 5 3 (striate 3) $ stack [ 
  sound "bd bd*2", 
  sound "hh*2 [sn cp] cp future*4", 
  sound "arpy" +| n "0 .. 15"
] # speed "[[1 0.8], [1.5 2]*2]/3"
```

### superimpose

```haskell
Type: superimpose :: (Pattern a -> Pattern a) -> Pattern a -> Pattern a
```

`superimpose` plays a modified version of a pattern 'on top of' the original pattern, resulting in the modified and original version of the patterns being played at the same time. For example this:

```haskell
d1 $ superimpose (fast 2) $ sound "bd sn [cp ht] hh"
```

...is the same as this:

```haskell
d1 $ stack [sound "bd sn [cp ht] hh",
            fast 2 $ sound "bd sn [cp ht] hh"
           ]
```

### layer

```haskell
Type: [a -> Pattern b] -> a -> Pattern b
```

The `layer` function allows you to layer up multiple functions on one pattern. For example the following will play two versions of the pattern at the same time, one reversed and one at twice the speed.

```haskell
d1 $ layer [rev, fast 2] $ sound "arpy [~ arpy:4]"
```
If you want to include the original version of the pattern in the layering, use the `id` function:
```haskell
d1 $ layer [id, rev, fast 2] $ sound "arpy [~ arpy:4]"
```

### steps

```haskell
Type: steps :: [(String,String)] -> Pattern String
```
`steps` is like `step` but it takes a list of pairs like `step` would and it plays them all simultaneously.

```haskell
d1 $ s (steps [("cp","x  x x  x x  x"),("bd", "xxxx")])
```

## Building iterations

### iter

```haskell
Type: iter :: Pattern Int -> Pattern a -> Pattern a
```

`iter` divides a pattern into a given number of subdivisions, plays the subdivisions in order, but increments the starting subdivision each cycle. The pattern wraps to the first subdivision after the last subdivision is played. Example:

```haskell
d1 $ iter 4 $ sound "bd hh sn cp"
```

This will produce the following over four cycles:
```plaintext
bd hh sn cp
hh sn cp bd
sn cp bd hh
cp bd hh sn
```

### iter'

`iter'` does the same as `iter` but in the other direction. So this:

```haskell
d1 $ iter' 4 $ sound "bd hh sn cp"
```

Produces this pattern:

```plaintext
bd hh sn cp
cp bd hh sn
sn cp bd hh
hh sn cp bd
```
