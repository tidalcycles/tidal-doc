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

### steps

```haskell
Type: steps :: [(String,String)] -> Pattern String
```
`steps` is like `step` but it takes a list of pairs like `step` would and it plays them all simultaneously.

```haskell
d1 $ s (steps [("cp","x  x x  x x  x"),("bd", "xxxx")])
```
