---
title: Pattern Structure
id: pattern_structure
---

A core feature of **Tidal** is the ease in which two patterns can be combined. For example, these are two patterns being combined by adding together their elements:

```c
"2 3" + "4 5 6"
```

The result of the above is equivalent to the pattern `"6 [7 8] 9"`. But why? Let's look closer. The two patterns line up over time like this:

```plaintext
  |  2  |  3  |
+ | 4 | 5 | 6 |
```

Unlike in previous versions of **Tidal**, when you combine two patterns in this way, by default the structure now comes from both patterns. This means you end up with four events, because the `5` in the middle lines up both with the `2` and the `3`, and gets split in half between them. We can add the resulting pattern to our table:
```plaintext
  |  2  |  3  |
+ | 4 | 5 | 6 |
= | 6 |7|8| 9 |
```

You can see that the `4` fits inside `2`, so where they intersect, you get a new event equal to their sum `6`.

Also see that the event with value `5` is cut in half, to create two, shorter events. Half matches with the `2` event and the other half matches with the `3` event.

The fourth and final event comes from the intersection of `3` and `6`, giving a value of `9`.


## Structure from the left

In previous versions of Tidal, the structure always came from the left. You can still do this, but in this case using `|+`. For example:
```c
"2 3" |+ "4 5 6"
```

In the above example, you end up with structure from the first (leftmost) pattern, like this:
```plaintext
   |  2  |  3  |
|+ | 4 | 5 | 6 |
 = |  6  |  8  |
```

You can see the structure comes from the `2` and `3`. `2` lines up with `4`, and the start of `3` is in `5`, so you end up with `2+4=6` and `3+5=8`. The result is the equivalent of `"6 8"`.

## Structure from the right

Likewise, you can take the structure from the right, with `+|`. So `"2 3" +| "4 5 6"` looks like:
```plaintext
   |  2  |  3  |
+| | 4 | 5 | 6 |
 = | 6 | 7 | 9 |
```

The result is the equivalent of `"6 7 9"`.

## All the operators

Note that `+` is actually an alias for `|+|`. So `|+` is to take the structure from the left, `+|` from the right, and `|+|` or `+` for both. Here are the basic operators you can use to combine numerical patterns:

| Function     | Both           | Left  | Right |
|--------------|----------------|-------|-------|
| Add          | `\|+\|` or (+) | `\|+` | `+\|` |
| Substract    | `\|-\|` or (-) | `\|-` | `-\|` |
| Multiply     | `\|*\|` or (*) | `\|*` | `*\|` |
| Divide       | `\|/\|` or (/) | `\|/` | `/\|` |
| Modulo       | `\|%\|` or (%) | `\|%` | `%\|` |
| Left values  | `\|<\|` or (<) | `\|<` | `<\|` |
| Right Values | `\|>\|` or (>) | `\|>` | `>\|` |


The last two are interesting, they let you only take values from one side. So for example you could take structure from the left, but values from the right with `|>`, for example:

```plaintext
   |  2  |  3  |
|> | 4 | 5 | 6 |
 = |  4  |  5  |
```

This is very similar to how `|+|` used to work in the versions of tidal prior to 1.0.0 - it took structure from the left, but values from the right. In fact, # is an alias for `|>`, mirroring the behaviour in previous versions of tidal.

## Combining control patterns

A control pattern (formerly known as a `param pattern`), is a pattern that's been given a control name. For example the number pattern `"1 2 3"` can be turned into a control pattern like this:
```plaintext
speed "1 2 3"
```

Control patterns can be combined together in the same way as numerical patterns. For example:

```c
d1 $ sound "drum" |+| n "1 2 3"
```

Nothing actually gets added together in the above, they're just combined into the equivalent of `d1 $ sound "drum:1 drum:2 drum:3"`. However if you specify the same numerical control more than once, then their values _will_ be combined. For example:

```c
d1 $ sound "drum" |+| n "2 3" |+| n "4 5 6"
```

The above will be equivalent to:

```c
d1 $ sound "drum" |+| n "6 [7 8] 9"
```
