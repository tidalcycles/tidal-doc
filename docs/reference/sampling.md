---
title: Sampling
id: sampling
---


This page will present you all the functions that can be used to slice, cut, reverse or explode your audio samples, incoming signals or oscillators. Each function will be presented following the same model:
* **Type signature**: how the function is declared on the **Haskell** side.
* **Description**: verbal description of the function.
* **Examples**: a small list of examples that you can copy/paste in your editor.


## Audio sampling
### chop

```haskell
Type: chop :: Pattern Int -> ControlPattern -> ControlPattern
```

`chop` cuts each sample into the given number of parts, allowing you to explore a technique known as 'granular synthesis'. It turns a pattern of samples into a pattern of parts of samples. For example:

```haskell
d1 $ chop 16 $ sound "arpy ~ feel*2 newnotes"
```

In the above, each sample is chopped into 16 bits, resulting in 64 (16*4) events. You can pattern that first parameter:

```haskell
d1 $ chop "<16 128 32>" $ sound "arpy ~ feel*2 newnotes"
```

You end up with a pattern of the chopped up bits of samples. You'll already be able to hear this more clearly if you for example reverse the pattern, as you'll reverse the order of the sample parts:

```haskell
d1 $ slow 2 $ rev $ chop 16 $ sound "breaks125"
```
Lets try that reverse in just one speaker:

```haskell
d1 $ slow 2 $ jux rev $ chop 16 $ sound "breaks125"
```

Different values of `chop` can yield very different results, depending on the samples used:

```haskell
d1 $ chop 16 $ sound (samples "arpy*8" (run 16))
d1 $ chop 32 $ sound (samples "arpy*8" (run 16))
d1 $ chop 256 $ sound "bd*4 [sn cp] [hh future]*2 [cp feel]"
```

You can also use `chop` (or `striate`) with very long samples, to cut it into short chunks and pattern those chunks. The following cuts a sample into 32 parts, and plays it over 8 cycles:

```haskell
d1 $ loopAt 8 $ chop 32 $ sound "bev"
```

The `loopAt` takes care of changing the speed of sample playback so that the sample fits in the given number of cycles perfectly. As a result, in the above the granules line up perfectly, so you can’t really hear that the sample has been cut into bits. Again, this becomes more apparent when you do further manipulations of the pattern, for example `rev` to reverse the order of the cut up bits:

```haskell
d1 $ loopAt 8 $ rev $ chop 32 $ sound "bev"
```

### striate

```haskell
Type: striate :: Pattern Int -> ControlPattern -> ControlPattern
```

`striate` is a kind of granulator, cutting samples into bits in a similar to `chop`, but the resulting bits are organised differently. For example:

```haskell
d1 $ slow 4 $ striate 3 $ sound "numbers:0 numbers:1 numbers:2 numbers:3"
```

This plays the loop the given number of times, but triggering progressive portions of each sample. So in this case it plays the loop three times, the first time playing the first third of each sample, then the second time playing the second third of each sample, and then finally the last third of each sample.. Compare this with `chop`:

```haskell
d1 $ slow 4 $ chop 3 $ sound "numbers:0 numbers:1 numbers:2 numbers:3"
```

You can hear that the striate version 'interlaces' the cut up bits of samples together, whereas the chop version plays the bits from each chopped up sample in turn. It might be worth listening to the samples without granulation, in case that helps understand what’s happening in the above:

```haskell
d1 $ slow 4 $ sound "numbers:0 numbers:1 numbers:2 numbers:3"
```

### striateBy

```haskell
Type: striateBy :: Pattern Int -> Pattern Double -> ControlPattern -> ControlPattern
```
`striateBy` (formerly called `striate'`) is a variant of `striate`, with an extra parameter, which specifies the length of each part. `striate` still scans across the sample over a single cycle, but if each bit is longer, it creates a sort of stuttering effect. For example the following will cut the bev sample into 32 parts, but each will be 1/16th of a sample long:

```haskell
d1 $ slow 32 $ striateBy 32 (1/16) $ sound "bev"
```

Note that striate uses the `begin` and `end` parameters internally. This means that if you’re using `striate` or `striateBy` you probably shouldn’t also specify begin or end.

### slice

```haskell
Type: Pattern Int -> Pattern Int -> ControlPattern -> ControlPattern
```

`slice` is similar to `chop` and `striate`, in that it's used to slice samples up into bits. The difference is that it allows you to rearrange those bits as a pattern.

```haskell
d1 $ slice 8 "7 6 5 4 3 2 1 0" $ sound "breaks165"
  # legato 1
```

The above slices the sample into eight bits, and then plays them backwards, equivalent of applying `rev $ chop 8`. Here's a more complex example:

```haskell
d1 $ slice 8 "[<0*8 0*2> 3*4 2 4] [4 .. 7]" $ sound "breaks165"
  # legato 1
```

Note that the order of the first two parameters changed since tidal version `1.0.0`.

### splice

```haskell
Type: splice :: Pattern Int -> Pattern Int -> ControlPattern -> ControlPattern
```
`splice` is similar to slice, but the slices are automatically pitched up or down to fit their 'slot'.

```haskell
d1 $ splice 8 "[<0*8 0*2> 3*4 2 4] [4 .. 7]" $ sound "breaks165"
```

### randslice

```haskell
Type: randslice :: Pattern Int -> ControlPattern -> ControlPattern
```
`randslice` chops the sample into the given number of pieces and then plays back a random one each cycle:

```haskell
d1 $ randslice 32 $ sound "bev"
```

Use `fast` to get more than one per cycle;
```haskell
d1 $ fast 4 $ randslice 32 $ sound "bev"
```

### chew

```haskell
Type: chew :: Int -> Pattern Int -> Pattern a -> Pattern a
```
`chew` works the same as bite, but speeds up/slows down playback of sounds as well as squeezing / contracting the slices of pattern.

Compare these:

```haskell
d1 $ bite 4 "0 1*2 2*2 [~ 3]" $ n "0 .. 7" # sound "drum"

d1 $ chew 4 "0 1*2 2*2 [~ 3]" $ n "0 .. 7" # sound "drum"
```

### loopAt
    
```haskell
Type: loopAt :: Pattern Time -> ControlPattern -> ControlPattern
```

`loopAt` makes sample fit the given number of cycles. Internally, it works by setting the unit control to "c", changing the playback speed of the sample with the speed parameter, and setting the density of the pattern to match.

```haskell
d1 $ loopAt 4 $ sound "breaks125"
```

It’s a good idea to use this in conjuction with `chop`, so the break is chopped into pieces and you don’t have to wait for the whole sample to start/stop.

```haskell
d1 $ loopAt 4 $ chop 32 $ sound "breaks125"
```

Like all **Tidal** functions, you can mess about with this considerably. The below example shows how you can supply a pattern of cycle counts to `loopAt`:
```haskell
d1 $ juxBy 0.6 (|* speed "2") $ loopAt "<4 6 2 3>" $ chop 12 $ sound "fm:14"
```

### smash

```haskell
Type: smash :: Pattern Int -> [Pattern Time] -> ControlPattern -> ControlPattern
```

`smash` is a combination of `spread` and `striate` - it cuts the samples into the given number of bits, and then cuts between playing the loop at different speeds according to the values in the list. So this:

```haskell
d1 $ smash 3 [2,3,4] $ sound "ho ho:2 ho:3 hc"
```

Is a bit like this:
```haskell
d1 $ slow "<2 3 4>" $ striate 3 $ sound "ho ho:2 ho:3 hc"
```

### smash'

```haskell
Type: smash' :: Int -> [Pattern Time] -> ControlPattern -> ControlPattern
```

`smash'` is `smash` but based on `chop` instead of `striate`.

Compare:

```haskell
d1 $ smash 6 [2,3,4] $ sound "ho ho:2 ho:3 hc"
```
to
```haskell
d1 $ smash' 6 [2,3,4] $ sound "ho ho:2 ho:3 hc"
```
or
```haskell
d1 $ smash 12 [2,3,4] $ s "bev*4"
```
vs
```haskell
d1 $ smash' 12 [2,3,4] $ s "bev*4"
```
for a dramatic difference.

## Signal sampling 
### segment

```haskell
Type: segment :: Pattern Time -> Pattern a -> Pattern a
```

`segment` 'samples' the pattern at a rate of `n` events per cycle. Useful for turning a continuous pattern into a discrete one. In this example, the pattern originates from the shape of a sine wave, a continuous pattern. Without segment the samples will get triggered at an undefined frequency which may be very high.

```haskell
d1 $ n (slow 2 $ segment 16 $ range 0 32 $ sine) # sound "amencutup"
```

### discretise

`segment` used to be known as `discretise`. The old name remains as an alias and will still work, but may be removed or repurposed in a future version of **Tidal**. 

### sig

```haskell
Type: sig :: (Time -> a) -> Pattern a
```
`sig` takes a function of time and turns it into a pattern. It's very useful for creating continuous patterns such as `sine` or `perlin`. For example, `saw` is defined as

```haskell
saw = sig $ \t -> mod' (fromRational t) 1
```
