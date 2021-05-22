---
title: Type Signatures 
id: type_signatures
---

## What is a type signature?

In **Haskell** (which **Tidal** lives in), a type signature tells you what kind of thing a value or function is. They're particularly useful for finding out what a function expects from you, and what it gives back.

You can find out the type of a function is with `:t` , for example to find out the type signature for `rev`, you could type `:t rev` into your editor, and evaluate it. You'll see this in the output window:

```haskell
rev :: Pattern a -> Pattern a
```

That's quite simple, it tells you that it takes a pattern as input, and gives you back a pattern as output. Let's have a look at the fast function, via `:t fast`:

```haskell
fast :: Pattern Time -> Pattern a -> Pattern a
```

That's a bit more complicated, there's three patterns there. The last one is always the output, and the ones preceding it are the inputs. So `fast` takes a pattern of time, another pattern, and gives you a pattern in return. That makes some sense too, the first parameter says how fast it should go in terms of time, and can be patterned. The second parameter is the pattern that is going to be made faster, but it doesn't say what kind of pattern it is, it just says `Pattern a`, and the same with the output. We saw the same `Pattern a` type earlier with `rev`. What does it mean?

Well the a in `Pattern a` is unconstrained - it can be whatever you like. So the `rev` function can work on any kind of pattern. This is because `rev` doesn't deal with any particular values, it just manipulates time.

So `a` is a kind of wildcard here, used in both the input and output of `rev`. This means that if you can give it a pattern of anything, but if you give it a pattern of integers, you are guaranteed to get a pattern of integers back. So you can swap that a for another type but only if you swap all instances of it for the same type.

## Going further

A more complicated example is `every`:

```haskell
every :: Pattern Int -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a
```

Now, `every` takes three parameters, a _whole number of cycles_, a _function to apply to a pattern_, and _the pattern itself_. We can see that the first parameter is a pattern of integers (aka whole numbers), fine. The second parameter is stranger - `(Pattern a -> Pattern a)`. This is how functions that are parameters are shown - wrapped in parenthesis. We can see from this that the second parameter is a function, that takes a pattern of any type as input, and gives a pattern of the same type as output. If we look back at the type signature of `rev`, it's pretty clear that we could give that as this second parameter, as the types match.. Indeed it's quite common to do `every 3 rev (s "bd sn")`, for example.

Hopefully that gives you some insight into how to read type signatures. They're really useful for understanding how to use functions, even without reading documentation.
