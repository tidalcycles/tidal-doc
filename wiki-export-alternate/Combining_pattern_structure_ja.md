---
title: Combining pattern structure/ja
permalink: wiki/Combining_pattern_structure/ja/
layout: wiki
tags:
 - Tidal-1+
 - Reference
---

# Combining numerical patterns

A core feature of Tidal is the ease in which two patterns can be
combined.

For example, these are two patterns being combined by adding together
their elements:

``` Haskell
"2 3" + "4 5 6"
```

The result of the above is equivalent to the pattern

``` Haskell
"6 [7 8] 9"
```

. But why?

Let's look closer. The two patterns line up over time like this:

      |  2  |  3  |
    + | 4 | 5 | 6 |

Unlike in previous versions of Tidal, when you combine two patterns in
this way, by default the structure now comes from *both patterns*. This
means you end up with *four* events, because the

``` Haskell
5
```

in the middle lines up both with the

``` Haskell
2
```

and the

``` Haskell
3
```

, and gets split in half between them. We can add the resulting pattern
to our table:

      |  2  |  3  |
    + | 4 | 5 | 6 |
    = | 6 |7|8| 9 |

You can see that the

``` Haskell
4
```

fits inside

``` Haskell
2
```

, so where they intersect, you get a new event equal to their sum

``` Haskell
6
```

.

Also see that the event with value

``` Haskell
5
```

is cut in half, to create two, shorter events. Half matches with the

``` Haskell
2
```

event and the other half matches with the

``` Haskell
3
```

event.

The fourth and final event comes from the intersection of

``` Haskell
3
```

and

``` Haskell
6
```

, giving a value of

``` Haskell
9
```

.

## Structure from the left

In previous versions of Tidal, the structure always came from the left.
You can still do this, but in this case using

``` Haskell
|+
```

.

For example:

``` Haskell
"2 3" |+ "4 5 6"
```

In the above example, you end up with structure from the first
(leftmost) pattern, like this:

       |  2  |  3  |
    |+ | 4 | 5 | 6 |
     = |  6  |  8  |

You can see the structure comes from the

``` Haskell
2
```

and

``` Haskell
3
```

.

``` Haskell
2
```

lines up with

``` Haskell
4
```

, and the start of

``` Haskell
3
```

is in

``` Haskell
5
```

, so you end up with

``` Haskell
2+4=6
```

and

``` Haskell
3+5=8
```

. The result is the equivalent of

``` Haskell
"6 8"
```

## Structure from the right

Likewise, you can take the structure from the right, with

``` Haskell
+|
```

. So

``` Haskell
"2
3" +| "4 5 6"
```

looks like:

       |  2  |  3  |
    +| | 4 | 5 | 6 |
     = | 6 | 7 | 9 |

The result is the equivalent of

``` Haskell
"6 7 9"
```

.

## All the operators

So far, we've just looked at

Note that

``` Haskell
+
```

is actually an alias for

``` Haskell
|+|
```

. So

``` Haskell
|+
```

is to take the structure from the left,

``` Haskell
+|
```

from the right, and

``` Haskell
|+|
```

or

``` Haskell
+
```

for both. Here are the basic operators you can use to combine numerical
patterns:

<table>
<thead>
<tr class="header">
<th><p>Function</p></th>
<th><p>Both</p></th>
<th><p>Left</p></th>
<th><p>Right</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>Add</p></td>
<td><div class="sourceCode" id="cb1"><pre class="sourceCode Haskell"><code class="sourceCode haskell"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a><span class="op">|+|</span></span></code></pre></div>
<p>(or</p>
<div class="sourceCode" id="cb2"><pre class="sourceCode Haskell"><code class="sourceCode haskell"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a><span class="op">+</span></span></code></pre></div>
<p>)</p></td>
<td><div class="sourceCode" id="cb3"><pre class="sourceCode Haskell"><code class="sourceCode haskell"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a><span class="op">|+</span></span></code></pre></div></td>
<td><div class="sourceCode" id="cb4"><pre class="sourceCode Haskell"><code class="sourceCode haskell"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a><span class="op">+|</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td><p>Subtract</p></td>
<td><div class="sourceCode" id="cb5"><pre class="sourceCode Haskell"><code class="sourceCode haskell"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a><span class="op">|-|</span></span></code></pre></div>
<p>(or</p>
<div class="sourceCode" id="cb6"><pre class="sourceCode Haskell"><code class="sourceCode haskell"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a><span class="op">-</span></span></code></pre></div>
<p>)</p></td>
<td><div class="sourceCode" id="cb7"><pre class="sourceCode Haskell"><code class="sourceCode haskell"><span id="cb7-1"><a href="#cb7-1" aria-hidden="true" tabindex="-1"></a><span class="op">|-</span></span></code></pre></div></td>
<td><div class="sourceCode" id="cb8"><pre class="sourceCode Haskell"><code class="sourceCode haskell"><span id="cb8-1"><a href="#cb8-1" aria-hidden="true" tabindex="-1"></a><span class="op">-|</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td><p>Multiply</p></td>
<td><div class="sourceCode" id="cb9"><pre class="sourceCode Haskell"><code class="sourceCode haskell"><span id="cb9-1"><a href="#cb9-1" aria-hidden="true" tabindex="-1"></a><span class="op">|*|</span></span></code></pre></div>
<p>(or</p>
<div class="sourceCode" id="cb10"><pre class="sourceCode Haskell"><code class="sourceCode haskell"><span id="cb10-1"><a href="#cb10-1" aria-hidden="true" tabindex="-1"></a><span class="op">*</span></span></code></pre></div>
<p>)</p></td>
<td><div class="sourceCode" id="cb11"><pre class="sourceCode Haskell"><code class="sourceCode haskell"><span id="cb11-1"><a href="#cb11-1" aria-hidden="true" tabindex="-1"></a><span class="op">|*</span></span></code></pre></div></td>
<td><div class="sourceCode" id="cb12"><pre class="sourceCode Haskell"><code class="sourceCode haskell"><span id="cb12-1"><a href="#cb12-1" aria-hidden="true" tabindex="-1"></a><span class="op">*|</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td><p>Divide</p></td>
<td><div class="sourceCode" id="cb13"><pre class="sourceCode Haskell"><code class="sourceCode haskell"><span id="cb13-1"><a href="#cb13-1" aria-hidden="true" tabindex="-1"></a><span class="op">|/|</span></span></code></pre></div>
<p>(or</p>
<div class="sourceCode" id="cb14"><pre class="sourceCode Haskell"><code class="sourceCode haskell"><span id="cb14-1"><a href="#cb14-1" aria-hidden="true" tabindex="-1"></a><span class="op">/</span></span></code></pre></div>
<p>)</p></td>
<td><div class="sourceCode" id="cb15"><pre class="sourceCode Haskell"><code class="sourceCode haskell"><span id="cb15-1"><a href="#cb15-1" aria-hidden="true" tabindex="-1"></a><span class="op">|/</span></span></code></pre></div></td>
<td><div class="sourceCode" id="cb16"><pre class="sourceCode Haskell"><code class="sourceCode haskell"><span id="cb16-1"><a href="#cb16-1" aria-hidden="true" tabindex="-1"></a><span class="op">/|</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td><p>Modulo</p></td>
<td><div class="sourceCode" id="cb17"><pre class="sourceCode Haskell"><code class="sourceCode haskell"><span id="cb17-1"><a href="#cb17-1" aria-hidden="true" tabindex="-1"></a><span class="op">|%|</span></span></code></pre></div></td>
<td><div class="sourceCode" id="cb18"><pre class="sourceCode Haskell"><code class="sourceCode haskell"><span id="cb18-1"><a href="#cb18-1" aria-hidden="true" tabindex="-1"></a><span class="op">|%</span></span></code></pre></div></td>
<td><div class="sourceCode" id="cb19"><pre class="sourceCode Haskell"><code class="sourceCode haskell"><span id="cb19-1"><a href="#cb19-1" aria-hidden="true" tabindex="-1"></a><span class="op">%|</span></span></code></pre></div></td>
</tr>
<tr class="even">
<td><p>Left values</p></td>
<td><div class="sourceCode" id="cb20"><pre class="sourceCode Haskell"><code class="sourceCode haskell"><span id="cb20-1"><a href="#cb20-1" aria-hidden="true" tabindex="-1"></a><span class="op">|&lt;|</span></span></code></pre></div></td>
<td><div class="sourceCode" id="cb21"><pre class="sourceCode Haskell"><code class="sourceCode haskell"><span id="cb21-1"><a href="#cb21-1" aria-hidden="true" tabindex="-1"></a><span class="op">|&lt;</span></span></code></pre></div></td>
<td><div class="sourceCode" id="cb22"><pre class="sourceCode Haskell"><code class="sourceCode haskell"><span id="cb22-1"><a href="#cb22-1" aria-hidden="true" tabindex="-1"></a><span class="op">&lt;|</span></span></code></pre></div></td>
</tr>
<tr class="odd">
<td><p>Right values</p></td>
<td><div class="sourceCode" id="cb23"><pre class="sourceCode Haskell"><code class="sourceCode haskell"><span id="cb23-1"><a href="#cb23-1" aria-hidden="true" tabindex="-1"></a><span class="op">|&gt;|</span></span></code></pre></div></td>
<td><div class="sourceCode" id="cb24"><pre class="sourceCode Haskell"><code class="sourceCode haskell"><span id="cb24-1"><a href="#cb24-1" aria-hidden="true" tabindex="-1"></a><span class="op">|&gt;</span></span></code></pre></div></td>
<td><div class="sourceCode" id="cb25"><pre class="sourceCode Haskell"><code class="sourceCode haskell"><span id="cb25-1"><a href="#cb25-1" aria-hidden="true" tabindex="-1"></a><span class="op">&gt;|</span></span></code></pre></div></td>
</tr>
</tbody>
</table>

The last two are interesting, they let you only take values from one
side. So for example you could take structure from the left, but values
from the right with

``` Haskell
|>
```

, for example:

       |  2  |  3  |
    |> | 4 | 5 | 6 |
     = |  4  |  5  |

This is very similar to how

``` Haskell
|+|
```

used to work in the versions of tidal prior to 1.0.0 - it took structure
from the left, but values from the right. In fact,

``` Haskell
#
```

is an alias for

``` Haskell
|>
```

, mirroring the behaviour in previous versions of tidal.

# Combining control patterns

A control pattern (formerly known as a 'param pattern'), is a pattern
that's been given a control name. For example the number pattern

``` Haskell
"1 2 3"
```

can be turned into a control pattern like this

    speed "1 2 3"

.

Control patterns can be combined together in the same way as numerical
patterns. For example:

``` Haskell
d1 $ sound "drum" |+| n "1 2 3"
```

Nothing actually gets added together in the above, they're just combined
into the equivalent of

``` Haskell
d1 $ sound "drum:1 drum:2 drum:3"
```

. However if you specify the same numerical control more than once, then
their values \_will\_ be combined. For example:

``` Haskell
d1 $ sound "drum" |+| n "2 3" |+| n "4 5 6"
```

The above will be equivalent to:

``` Haskell
d1 $ sound "drum" |+| n "6 [7 8] 9"
```
