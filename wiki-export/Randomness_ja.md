---
title: Randomness/ja
permalink: wiki/Randomness/ja/
layout: wiki
---

<languages />
ランダム性を加えると、パターンに対し、特徴やバリエーションをすぐに与えられます。

``` Haskell
sometimes
```

は

``` Haskell
every
```

と似ていますが、セットの区切りで発動する代わりに、ランダムな確率で現れます。

``` Haskell
d1 $ sometimes (# speed "2") $ sound "drum*8"
```

``` Haskell
often
```

は

``` Haskell
sometimes
```

と似ていますが、より頻繁に発動します!

``` Haskell
d1 $ often (# speed "2") $ sound "drum*8"
```

``` Haskell
irand
```

は、指定した数字までの、ランダムなinteger(整数)を生成します。 例
ランダムなサンプルを再生したいときは:

``` Haskell
d1 $ sound "arpy(3,8)" # n (irand 16)
```

``` Haskell
rand
```

は、0から1の間の小数を生成します。

``` Haskell
d1 $ sound "tink*16" # gain rand
```

``` Haskell
degradeBy
```

でランダムに要素を外すことができます。数字は、サンプルが再生される確率を指定します。

``` Haskell
d1 $ degradeBy 0.2 $ sound "tink*16"
```

(

``` Haskell
degrade
```

単独での使用は、

``` Haskell
degradeBy 0.5
```

と同じ意味です)

または、

``` Haskell
?
```

を使い、50%の確率で要素を再生しないことができます。

``` Haskell
d1 $ sound "bd sn:2? bd sn?"
```
