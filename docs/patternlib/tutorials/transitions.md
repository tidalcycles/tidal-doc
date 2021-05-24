---
title: Transitions
id: transitions
---


## What are transitions? 


Transitions are functions you can use to switch musically between patterns. Start with a pattern on `d1`:
```haskell
d1 $ s "bd(3,8) drum*4"
```

You can then perform a crossfade transition to a new pattern using `xfade`:
```haskell
xfade 1 $ s "arpy*8" # n (run 8)
```

Note that the argument we give to `xfade` is `1`, which means to apply the transition to the pattern that is running on `d1`.

You can use transitions on any `d` pattern in Tidal:
```haskell
d3 $ s "bd(3,8)"
xfade 3 $ s "arpy*4"
```

You can also apply a transition to any arbitrary pattern name:
```haskell
p "drums" $ s "bd(3,8) drum*4"
xfade "drums" $ s "arpy*8" # n (run 8)
```
Most of the transitions also have an `"In"` variant, where you can specify the number of cycles that the transition takes to complete:
```haskell
xfadeIn 1 8 $ s "arpy*8" # n (run 8)
```

## More about transitions

Check out the `Small Reference > Transitions` section to learn more about transitions.
