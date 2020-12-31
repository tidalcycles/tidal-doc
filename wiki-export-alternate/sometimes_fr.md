---
title: sometimes/fr
permalink: wiki/sometimes/fr/
layout: wiki
tags:
 - Functions
---

<languages/> *Consulte régalement : [someCycles](someCycles "wikilink")*

[Type](/wiki/Type_signature "wikilink"):

``` haskell
sometimes :: (Pattern a -> Pattern a) -> Pattern a -> Pattern a
```

**sometimes** est une fonction qui applique une autre fonction sur un
pattern 50% du temps, de manière aléatoire. `sometimes` requiert deux
paramètres : une fonction à appliquer, et le pattern qui la reçoit.

Par exemple, voici comment ajouter de la distortion 50% du temps :

``` haskell
d1 $ sometimes (# crush 2) $ n "0 1 [~ 2] 3" # sound "arpy"
```

`sometimes` appartient à une famille plus large de fonctions similaires
:

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

Si vous souhaitez préciser le facteur de chance, vous pouvez utiliser
`sometimesBy` suivi d'un nombre compris entre 0 et 1. Par exemple,
`sometimesBy 0.93 (# speed 2)` applique l'effet 93% du temps.

[Category:Higher-order
functions](/wiki/Category:Higher-order_functions "wikilink")
[Category:Randomness and
chance](/wiki/Category:Randomness_and_chance "wikilink") [Category:Conditional
Transformers](/wiki/Category:Conditional_Transformers "wikilink")
