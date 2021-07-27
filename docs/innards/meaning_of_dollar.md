---
title: The meaning of $  
id: meaning_of_dollar
---

## What is the dollar?

The dollar (`$`) is a mysterious thing. It doesn't really do anything, but is super useful. It's easy to get it mixed up with other operators in **Tidal**, for example `#`, because in a way they both 'join things together'. But what is `$`, exactly?

The `$` is used a lot in **Haskell** (the language which **Tidal** lives inside). Like a lot of things in Haskell, `$` is a function. Like all operators (e.g. `+`), it has two inputs - the left side, and the right side, and has one output. The left input must be a function, and all that `$` does is pass what's on the right hand side, and give it to that function. In other words, in this expression:
```haskell
rev $ "1 2 3"
```
... the dollar takes `"1 2 3"` and passes it to the function `rev`. So actually the above is the same as this:

```haskell
rev "1 2 3"
```

So if we can do without it, why is it useful? Lets look at a slightly more complex example:

```haskell
fast 2 $ rev "1 2 3"
```

Here the dollar takes care of passing `rev "1 2 3"` to `fast 2`. If we missed it out, then we'd get an error.

```haskell
-- this gives an error!
fast 2 rev "1 2 3"
```

That's because the computer will first read `fast 2`, then `rev`, and try to treat `rev` as a pattern to be speeded up. But on its own, `rev` isn't a pattern, but a function for transforming pattern.

To avoid this error, we could use parenthesis:

```haskell
fast 2 (rev "1 2 3")
```

Here the brackets make sure `rev "1 2 3"` is calculated first, before it is passed as a pattern to `fast 2`.

So, both `$` and parenthesis can be used to control which code is calculated first. The `$` is often used to avoid having to match opening and closing brackets, but sometimes parenthesis makes more sense.

Note that you can't use `$` with operators. For example:

```haskell
-- this doesn't work either!
4 * $ 2 + 3
-- but this does
4 * (2 + 3)
```

## Comparing $ and &#35;

So, `$` is used to join a parameter (on the right) with a function (on the left). `#` (and all its friends `|+|`, `|*|`, etc) are used to combine a pattern on the right with a pattern on the left. Check out the page `Pattern structure` in the `Basics` section.

