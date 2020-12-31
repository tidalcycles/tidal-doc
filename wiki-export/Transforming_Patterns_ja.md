---
title: Transforming Patterns/ja
permalink: wiki/Transforming_Patterns/ja/
layout: wiki
---

<languages />
パターンを変形すると、もっとより複雑なパターンを作ることができます。

``` haskell
slow
```

関数などを使うと、1サイクルという枠組みを超えて、パターンを変形できます

``` haskell
slow
```

は、パターンを複数のサイクル間にまたがるように、引きのばせます。

``` haskell
d1 $ sound "arpy arpy:1 arpy:2 arpy:3"

d1 $ slow 2 $ sound "arpy arpy:1 arpy:2 arpy:3"
```

``` haskell
fast
```

は、パターンを1サイクル未満の長さに圧縮します。

``` haskell
density
```

という記法を見ることがあるでしょう。これも行うことは同じです!

``` haskell
fast 0.5
```

は

``` haskell
slow 2
```

と同じ意味です!

``` haskell
d1 $ fast 2 $ sound "arpy arpy:1 arpy:2 arpy:3"

d1 $ fast 0.5 $ sound "arpy arpy:1 arpy:2 arpy:3"
```

``` haskell
hurry
```

は fast に似ていますが、スピードの変形を行わない点で異なります。

``` haskell
d1 $ sound "arpy arpy arpy:1 arpy:2"

d1 $ hurry 2 $ sound "arpy arpy arpy:1 arpy:2"

d1 $ hurry 0.5 $ sound "arpy arpy arpy:1 arpy:2"
```

``` haskell
rev
```

で、パターンを逆再生します。

``` haskell
d1 $ rev $ sound "arpy arpy:1 arpy:2 arpy:3"
```

``` haskell
palindrome
```

は、順に再生と逆再生をつなげて行います。

``` haskell
d1 $ palindrome $ sound "arpy arpy:1 arpy:2 arpy:3"
```

``` haskell
iter
```

は、サイクルごとに異なる点からパターンを開始します。開始された点に戻るまで、指定回数ずらしながら再生を続けます。

``` haskell
d1 $ iter 4 $ sound "arpy arpy:1 arpy:2 arpy:3"
```

``` haskell
every
```

は、変形やエフェクトを、サイクルを指定してスケジューリングできます。

例 4サイクルごとに、2倍の速さで再生:

``` haskell
d1 $ every 4 (fast 2) $ sound "arpy arpy:1 arpy:2 arpy:3"
```

...また、同じ方法でエフェクトもスケジューリングできます。

``` haskell
d1 $ every 4 (# vowel "a o") $ sound "arpy arpy:1 arpy:2 arpy:3"
```

``` haskell
jux
```

('juxtapose'の略)
は、変形やエフェクトを取り込み、変形やエフェクト後のパターンを一方のスピーカー、元パターンを一方のスピーカーで再生します。

``` haskell
d1 $ sound "arpy arpy:1 arpy:2 arpy:3"
d1 $ jux (rev) $ sound "arpy arpy:1 arpy:2 arpy:3"
d1 $ jux (hurry 2) $ sound "arpy arpy arpy:1 arpy:2"
```

``` haskell
chunk
```

は、毎回パターンの異なる部分に変形やエフェクトを適用します。例えばパラメータに

``` haskell
4
```

を指定すると、サイクルの1/4ごとに適用されます。

``` haskell
d1 $ chunk 4 (hurry 2) $ sound  "arpy arpy:1 arpy:2 arpy:3"
d1 $ chunk 4 (# speed 2) $ sound  "alphabet:0 alphabet:1 alphabet:2 alphabet:3"
```

## 他にもっと試したいなら

1つ以上の変形を連ねることができます!

``` haskell
.
```

で、変形やエフェクトを連鎖できます。

``` haskell
d1 $ jux (rev . (slow 1.5)) $ sound "arpy arpy:1 arpy:2 arpy:3"
```

(ほぼ)すべてのものはパターンなので、これらの変形はエフェクトにも適用できることをお忘れなく!

``` haskell
d1 $ sound "jvbass [jvbass jvbass] jvbass ~" # note "1 [3 5] 7"
d1 $ sound "jvbass [jvbass jvbass] jvbass ~" # iter 3 (note "1 [3 5] 7")
```

sin波や、ノコギリ波を減速したり、拡大すると何が起こるでしょうか。
