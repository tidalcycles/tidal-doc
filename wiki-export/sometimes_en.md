---
title: sometimes/en
permalink: wiki/sometimes/en/
layout: wiki
tags:
 - Functions
---

<languages/> *See also: [someCycles](someCycles "wikilink")*

[Type](/wiki/Type_signature "wikilink"):

``` haskell
sometimes :: (Pattern a -> Pattern a) -> Pattern a -> Pattern a
```

**sometimes** is function, that applies another function to a pattern,
around 50% of the time, at random. It takes two inputs, the function to
be applied, and the pattern you are applying it to.

For example to distort half the events in a pattern:

``` haskell
d1 $ sometimes (# crush 2) $ n "0 1 [~ 2] 3" # sound "arpy"
```

sometimes has a number of variants, which apply the function with
different likelihood.

<table>
<thead>
<tr class="header">
<th><p>function</p></th>
<th><p>likelihood</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><div class="sourceCode" id="cb1"><pre class="sourceCode haskell"><code class="sourceCode haskell"><span id="cb1-1"><a href="#cb1-1" aria-hidden="true" tabindex="-1"></a>always</span></code></pre></div></td>
<td><p>100%</p></td>
</tr>
<tr class="even">
<td><div class="sourceCode" id="cb2"><pre class="sourceCode haskell"><code class="sourceCode haskell"><span id="cb2-1"><a href="#cb2-1" aria-hidden="true" tabindex="-1"></a>almostAlways</span></code></pre></div></td>
<td><p>90%</p></td>
</tr>
<tr class="odd">
<td><div class="sourceCode" id="cb3"><pre class="sourceCode haskell"><code class="sourceCode haskell"><span id="cb3-1"><a href="#cb3-1" aria-hidden="true" tabindex="-1"></a>often</span></code></pre></div></td>
<td><p>75%</p></td>
</tr>
<tr class="even">
<td><div class="sourceCode" id="cb4"><pre class="sourceCode haskell"><code class="sourceCode haskell"><span id="cb4-1"><a href="#cb4-1" aria-hidden="true" tabindex="-1"></a>sometimes</span></code></pre></div></td>
<td><p>50%</p></td>
</tr>
<tr class="odd">
<td><div class="sourceCode" id="cb5"><pre class="sourceCode haskell"><code class="sourceCode haskell"><span id="cb5-1"><a href="#cb5-1" aria-hidden="true" tabindex="-1"></a>rarely</span></code></pre></div></td>
<td><p>25%</p></td>
</tr>
<tr class="even">
<td><div class="sourceCode" id="cb6"><pre class="sourceCode haskell"><code class="sourceCode haskell"><span id="cb6-1"><a href="#cb6-1" aria-hidden="true" tabindex="-1"></a>almostNever</span></code></pre></div></td>
<td><p>10%</p></td>
</tr>
<tr class="odd">
<td><div class="sourceCode" id="cb7"><pre class="sourceCode haskell"><code class="sourceCode haskell"><span id="cb7-1"><a href="#cb7-1" aria-hidden="true" tabindex="-1"></a>never</span></code></pre></div></td>
<td><p>0%</p></td>
</tr>
</tbody>
</table>

# sometimesBy

If you want to be specific, you can use

``` haskell
sometimesBy
```

and a number, for example

``` haskell
sometimesBy 0.93 (# speed 2)
```

to apply the

``` haskell
speed
```

control on average 93 times out of a hundred.

[Category:Higher-order
functions](/wiki/Category:Higher-order_functions "wikilink")
[Category:Randomness and
chance](/wiki/Category:Randomness_and_chance "wikilink") [Category:Conditional
Transformers](/wiki/Category:Conditional_Transformers "wikilink")
