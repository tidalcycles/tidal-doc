---
title: Mini notation syntax/fr
permalink: wiki/Mini_notation_syntax/fr/
layout: wiki
---

<languages/>

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 25%" />
<col style="width: 35%" />
<col style="width: 35%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Symboles</p></th>
<th><p>Description</p></th>
<th><p>Exemples</p></th>
<th><p>Notations équivalentes</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre><code>[ ]</code></pre></td>
<td><p>Grouper des évènements</p></td>
<td><pre><code>d1 $ s &quot;[bd sd] hh&quot;</code></pre></td>
<td><pre><code>d1 $ fastcat [s &quot;bd sd&quot;, s &quot;hh&quot;]</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>.</code></pre></td>
<td><p>Notation raccourcie pour grouper les évènements</p></td>
<td><pre><code>d1 $ s &quot;bd sd . hh hh hh&quot;</code></pre></td>
<td><pre><code>d1 $ s &quot;[bd sd] [hh hh hh]</code></pre></td>
</tr>
<tr class="odd">
<td><pre><code>,</code></pre></td>
<td><p>Jouer plusieurs patterns en même temps</p></td>
<td><pre><code>d1 $ s &quot;[bd sd, hh hh hh]&quot;</code></pre></td>
<td><pre><code>d1 $ stack [s &quot;bd sd&quot;, s &quot;hh hh hh&quot;]</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>*</code></pre></td>
<td><p>Répéter un élément</p></td>
<td><pre><code>d1 $ s &quot;bd*2 sd&quot;</code></pre></td>
<td><pre><code>d1 $ s &quot;[bd bd] sd&quot;</code></pre></td>
</tr>
<tr class="odd">
<td><pre><code>/</code></pre></td>
<td><p>Ralentir un élément</p></td>
<td><pre><code>d1 $ s &quot;bd/2&quot;</code></pre></td>
<td><pre><code>d1 $ s (slow 2 $ &quot;bd&quot;)</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>&lt; &gt;</code></pre></td>
<td><p>Alterner entre des éléments</p></td>
<td><pre><code>d1 $ s &quot;bd &lt;sd hh cp&gt;&quot;</code></pre></td>
<td><pre><code>d1 $ slow 3 $ s &quot;bd sd bd hh bd cp&quot;</code></pre></td>
</tr>
<tr class="odd">
<td><pre><code>!</code></pre></td>
<td><p>Répliquer un évènement</p></td>
<td><pre><code>d1 $ s &quot;bd!3 sd&quot;</code></pre></td>
<td><pre><code>d1 $ s &quot;bd bd bd sd&quot;</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>_</code></pre></td>
<td><p>Allonger un pattern</p></td>
<td><pre><code>d1 $ s &quot;bd _ _ ~ sd _&quot;</code></pre></td>
<td><p>Results in pattern</p>
<pre><code>(0&gt;1/2)|s: &quot;bd&quot; (4/6&gt;1)|s: &quot;sd&quot;</code></pre></td>
</tr>
<tr class="odd">
<td><pre><code>@</code></pre></td>
<td><p>Allonger un pattern</p></td>
<td><pre><code>d1 $ s &quot;superpiano@3 superpiano&quot;</code></pre></td>
<td><pre><code>d1 $ s &quot;superpiano _ _ superpiano&quot;</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>?</code></pre></td>
<td><p>Supprimer aléatoirement certains évènements dans un pattern</p></td>
<td><pre><code>d1 $ s &quot;bd? sd&quot;</code></pre></td>
<td><pre><code>d1 $ fastcat [degradeBy 0.5 $ s &quot;bd&quot;, s &quot;sd&quot;]</code></pre></td>
</tr>
<tr class="odd">
<td><pre><code>:</code></pre></td>
<td><p>Changer de sample</p></td>
<td><pre><code>d1 $ s &quot;bd:3&quot;</code></pre></td>
<td><pre><code>d1 $ s &quot;bd&quot; # n 3</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>( )</code></pre></td>
<td><p>Séquences euclidiennes</p></td>
<td><pre><code>d1 $ s &quot;bd(3,8)&quot;</code></pre></td>
<td><pre><code>d1 $ euclid 3 8 $ s &quot;bd&quot;</code></pre></td>
</tr>
</tbody>
</table>
