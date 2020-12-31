---
title: Different Kinds of Pattern/ja
permalink: wiki/Different_Kinds_of_Pattern/ja/
layout: wiki
---

<languages /> とにかく、パターンとはなんでしょう。

さまざまな種類のパターンと、どのようにTidal上でそれを表現するか考えてみましょう。

## 反復 / 繰り返し

``` Haskell
n
```

を使い、フォルダからサンプルを選べます。パターンをそこに適用することもできます!

``` Haskell
d1 $ n "0 1 2 3" # sound "arpy"
```

``` Haskell
Run
```

で、連続パターンを短く書くことができます。

``` Haskell
d1 $ n (run 4) # sound "arpy"
```

または

``` Haskell
..
```

を使えます。

``` Haskell
d1 $ n "0..4" # sound "arpy"
```

## 対称

``` Haskell
d1 $ slow 2 $ n "0 1 2 3 3 2 1 0" # sound "arpy"
d1 $ palindrome $ n (run 4) # sound "arpy"
```

## ポリメトリック / ポリリズムシーケンス

角括弧

``` Haskell
[ ]
```

（大きなサブシーケンスのようなもの）内をカンマで2つに区切り、一度に2つのサブシーケンスを再生します:

``` Haskell
d1 $ sound "[voodoo voodoo:3, arpy arpy:4 arpy:2]"
```

``` Haskell
[ ]
```

の代わりに

``` Haskell
{ }
```

を使うと、別の効果が得られます。

``` Haskell
[ ]
```

は、シーケンスの両半分がサイクルにフィットします(ポリリズム)。

``` Haskell
{ }
```

は、パルスは左側のパターンで設定されます。右手のパターンは上から(または下に)重なります(ポリメーター)。

``` Haskell
d1 $ sound "[voodoo voodoo:3, arpy arpy:4 arpy:2]"
d1 $ sound "{voodoo voodoo:3, arpy arpy:4 arpy:2}"
d1 $ sound "[drum bd hh bd, can can:2 can:3 can:4 can:2]"
d1 $ sound "{drum bd hh bd, can can:2 can:3 can:4 can:2}"
d1 $ sound "[bd sn, can:2 can:3 can:1, arpy arpy:1 arpy:2 arpy:3 arpy:5]"
d1 $ sound "{bd sn, can:2 can:3 can:1, arpy arpy:1 arpy:2 arpy:3 arpy:5}"
```

## ユークリッド・リズム / ビョークルンド

パターン内の要素の後ろに

``` Haskell
( )
```

で2つの数字を付けると、Tidalは2つ目の数のステップにわたり、1つめの数の音を均等に分配しようとします。

``` Haskell
d1 $ sound "bd(5,8)"
```

この表記は、パターンの1つの要素内でも使えます:

``` Haskell
d1 $ sound "bd(3,8) sn*2"
d1 $ sound "bd(3,8) sn(5,8)"
```

3番目のパラメータを追加することもできます。これはパターンを '回転させる'
ので、異なるステップで開始されます:

``` Haskell
d1 $ sound "bd(5,8,2)"
```
