---
title: Mini notation syntax
permalink: wiki/Mini_notation_syntax/
layout: wiki
---

<languages/> <translate>

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 25%" />
<col style="width: 35%" />
<col style="width: 35%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Symbol</p></th>
<th><p>Description</p></th>
<th><p>Example</p></th>
<th><p>Equivalent</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre><code>[ ]</code></pre></td>
<td><p>Create a pattern grouping</p></td>
<td><pre><code>d1 $ s &quot;[bd sd] hh&quot;</code></pre></td>
<td><pre><code>d1 $ fastcat [s &quot;bd sd&quot;, s &quot;hh&quot;]</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>.</code></pre></td>
<td><p>Shorthand for pattern grouping</p></td>
<td><pre><code>d1 $ s &quot;bd sd . hh hh hh&quot;</code></pre></td>
<td><pre><code>d1 $ s &quot;[bd sd] [hh hh hh]</code></pre></td>
</tr>
<tr class="odd">
<td><pre><code>,</code></pre></td>
<td><p>Play multiple patterns at the same time</p></td>
<td><pre><code>d1 $ s &quot;[bd sd, hh hh hh]&quot;</code></pre></td>
<td><pre><code>d1 $ stack [s &quot;bd sd&quot;, s &quot;hh hh hh&quot;]</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>*</code></pre></td>
<td><p>Repeat a pattern</p></td>
<td><pre><code>d1 $ s &quot;bd*2 sd&quot;</code></pre></td>
<td><pre><code>d1 $ s &quot;[bd bd] sd&quot;</code></pre></td>
</tr>
<tr class="odd">
<td><pre><code>/</code></pre></td>
<td><p>Slow down a pattern</p></td>
<td><pre><code>d1 $ s &quot;bd/2&quot;</code></pre></td>
<td><pre><code>d1 $ s (slow 2 $ &quot;bd&quot;)</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>&lt; &gt;</code></pre></td>
<td><p>Alternate between patterns</p></td>
<td><pre><code>d1 $ s &quot;bd &lt;sd hh cp&gt;&quot;</code></pre></td>
<td><pre><code>d1 $ slow 3 $ s &quot;bd sd bd hh bd cp&quot;</code></pre></td>
</tr>
<tr class="odd">
<td><pre><code>!</code></pre></td>
<td><p>Replicate a pattern</p></td>
<td><pre><code>d1 $ s &quot;bd!3 sd&quot;</code></pre></td>
<td><pre><code>d1 $ s &quot;bd bd bd sd&quot;</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>_</code></pre></td>
<td><p>Elongate a pattern</p></td>
<td><pre><code>d1 $ s &quot;bd _ _ ~ sd _&quot;</code></pre></td>
<td><p>Results in pattern</p>
<pre><code>(0&gt;1/2)|s: &quot;bd&quot; (4/6&gt;1)|s: &quot;sd&quot;</code></pre></td>
</tr>
<tr class="odd">
<td><pre><code>@</code></pre></td>
<td><p>Elongate a pattern</p></td>
<td><pre><code>d1 $ s &quot;superpiano@3 superpiano&quot;</code></pre></td>
<td><pre><code>d1 $ s &quot;superpiano _ _ superpiano&quot;</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>?</code></pre></td>
<td><p>Randomly remove events from pattern</p></td>
<td><pre><code>d1 $ s &quot;bd? sd&quot;</code></pre></td>
<td><pre><code>d1 $ fastcat [degradeBy 0.5 $ s &quot;bd&quot;, s &quot;sd&quot;]</code></pre></td>
</tr>
<tr class="odd">
<td><pre><code>:</code></pre></td>
<td><p>Selecting samples</p></td>
<td><pre><code>d1 $ s &quot;bd:3&quot;</code></pre></td>
<td><pre><code>d1 $ s &quot;bd&quot; # n 3</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>( )</code></pre></td>
<td><p>Euclidean sequences</p></td>
<td><pre><code>d1 $ s &quot;bd(3,8)&quot;</code></pre></td>
<td><pre><code>d1 $ euclid 3 8 $ s &quot;bd&quot;</code></pre></td>
</tr>
<tr class="odd">
<td><pre><code>{ }</code></pre></td>
<td><p>Polymetric sequences</p></td>
<td><pre><code>d1 $ s &quot;{bd bd bd bd, cp cp hh}&quot;</code></pre></td>
<td><p>2nd pattern wraps:</p>
<pre><code>d1 $ stack [ s &quot;bd*4&quot;, s &quot;cp cp hh cp&quot; ]</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>{ }%</code></pre></td>
<td><p>Polymetric sequence subdivision</p></td>
<td><pre><code>d1 $ s &quot;{bd cp hh}%8&quot;</code></pre></td>
<td><p>Pattern wraps:</p>
<pre><code>d1 $ s &quot;bd cp hh bd cp hh bd cp&quot;</code></pre></td>
</tr>
</tbody>
</table>

</translate>
