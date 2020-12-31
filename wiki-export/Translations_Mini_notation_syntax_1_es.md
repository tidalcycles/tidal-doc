---
title: Translations:Mini notation syntax/1/es
permalink: wiki/Translations:Mini_notation_syntax/1/es/
layout: wiki
---

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 25%" />
<col style="width: 35%" />
<col style="width: 35%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Símbolo</p></th>
<th><p>Descripción</p></th>
<th><p>Ejemplo</p></th>
<th><p>Equivalencia</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><pre><code>[ ]</code></pre></td>
<td><p>Crear un patron agrupado</p></td>
<td><pre><code>d1 $ s &quot;[bd sd] hh&quot;</code></pre></td>
<td><pre><code>d1 $ fastcat [s &quot;bd sd&quot;, s &quot;hh&quot;]</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>.</code></pre></td>
<td><p>Atajo para agrupar patrones</p></td>
<td><pre><code>d1 $ s &quot;bd sd . hh hh hh&quot;</code></pre></td>
<td><pre><code>d1 $ s &quot;[bd sd] [hh hh hh]</code></pre></td>
</tr>
<tr class="odd">
<td><pre><code>,</code></pre></td>
<td><p>Reproducir múltiples patrones a la vez</p></td>
<td><pre><code>d1 $ s &quot;[bd sd, hh hh hh]&quot;</code></pre></td>
<td><pre><code>d1 $ stack [s &quot;bd sd&quot;, s &quot;hh hh hh&quot;]</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>*</code></pre></td>
<td><p>Repetir un patrón</p></td>
<td><pre><code>d1 $ s &quot;bd*2 sd&quot;</code></pre></td>
<td><pre><code>d1 $ s &quot;[bd bd] sd&quot;</code></pre></td>
</tr>
<tr class="odd">
<td><pre><code>/</code></pre></td>
<td><p>Ralentizar un patrón</p></td>
<td><pre><code>d1 $ s &quot;bd/2&quot;</code></pre></td>
<td><pre><code>d1 $ s (slow 2 $ &quot;bd&quot;)</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>&lt; &gt;</code></pre></td>
<td><p>Alternar entre patrones</p></td>
<td><pre><code>d1 $ s &quot;bd &lt;sd hh cp&gt;&quot;</code></pre></td>
<td><pre><code>d1 $ slow 3 $ s &quot;bd sd bd hh bd cp&quot;</code></pre></td>
</tr>
<tr class="odd">
<td><pre><code>!</code></pre></td>
<td><p>Replicar un patrón</p></td>
<td><pre><code>d1 $ s &quot;bd!3 sd&quot;</code></pre></td>
<td><pre><code>d1 $ s &quot;bd bd bd sd&quot;</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>_</code></pre></td>
<td><p>Alargar un patrón</p></td>
<td><pre><code>d1 $ s &quot;bd _ _ ~ sd _&quot;</code></pre></td>
<td><p>Results in pattern</p>
<pre><code>(0&gt;1/2)|s: &quot;bd&quot; (4/6&gt;1)|s: &quot;sd&quot;</code></pre></td>
</tr>
<tr class="odd">
<td><pre><code>@</code></pre></td>
<td><p>Alargar un patrón</p></td>
<td><pre><code>d1 $ s &quot;superpiano@3 superpiano&quot;</code></pre></td>
<td><pre><code>d1 $ s &quot;superpiano _ _ superpiano&quot;</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>?</code></pre></td>
<td><p>Quitar elementos del patrón aleatoriamente</p></td>
<td><pre><code>d1 $ s &quot;bd? sd&quot;</code></pre></td>
<td><pre><code>d1 $ fastcat [degradeBy 0.5 $ s &quot;bd&quot;, s &quot;sd&quot;]</code></pre></td>
</tr>
<tr class="odd">
<td><pre><code>:</code></pre></td>
<td><p>Seleccionar samples</p></td>
<td><pre><code>d1 $ s &quot;bd:3&quot;</code></pre></td>
<td><pre><code>d1 $ s &quot;bd&quot; # n 3</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>( )</code></pre></td>
<td><p>Secuencias eucledianas</p></td>
<td><pre><code>d1 $ s &quot;bd(3,8)&quot;</code></pre></td>
<td><pre><code>d1 $ euclid 3 8 $ s &quot;bd&quot;</code></pre></td>
</tr>
<tr class="odd">
<td><pre><code>{ }</code></pre></td>
<td><p>Secuencias polimétricas</p></td>
<td><pre><code>d1 $ s &quot;{bd bd bd bd, cp cp hh}&quot;</code></pre></td>
<td><pre><code>d1 $ stack [ s &quot;bd*4&quot;, s &quot;cp cp hh cp&quot; ]</code></pre></td>
</tr>
<tr class="even">
<td><pre><code>{ }%</code></pre></td>
<td><p>Subdivisión de secuencias polimétricas</p></td>
<td><pre><code>d1 $ s &quot;{bd cp hh}%8&quot;</code></pre></td>
<td><pre><code>d1 $ s &quot;bd cp hh bd cp hh bd cp&quot;</code></pre></td>
</tr>
</tbody>
</table>
