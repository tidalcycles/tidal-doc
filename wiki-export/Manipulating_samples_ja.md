---
title: Manipulating samples/ja
permalink: wiki/Manipulating_samples/ja/
layout: wiki
---

<languages />

これまでは短いサンプルを使ってきました。長いサンプルは、注意して扱わないと問題を引き起こすことがあります。長いサンプルで何が起きるか見てみましょう。

``` Haskell
d1 $ sound "bev"
-- wait a bit, then..
hush
```

聴いてわかるように、Tidalは、サンプルの再生を毎サイクル発動し続けます。途中でパターンの演奏を停止しても、サンプルの残りは流れ続けます。

``` Haskell
cut
```

を使うと、次のサンプルの再生が発動したら、再生中のサンプルを切り捨てることができます。

``` Haskell
d1 $ sound "bev" # cut 1
```

``` Haskell
cut
```

の引数はグループを定義します。そのため、異なるパターン間の干渉で遊べます。

``` Haskell
d1 $ sound "bev ~" # cut 1
d2 $ slow 4 $ sound "pebbles ~" # cut 1
```

``` Haskell
legato
```

もサンプルを切り捨てますが、固定長を使います。

``` Haskell
d1 $ sound "bev ~ bev ~" # legato 1
```

``` Haskell
chop
```

を使い、「グラニュラーシンセシス」エフェクトを得られます。

``` Haskell
d1 $ chop 32 $ sound "bev"
```

``` Haskell
striate
```

は

``` Haskell
chop
```

に似ていますが、再生を違った方法でコントロールします。

``` Haskell
d1 $ slow 4 $ chop 4 $ sound "arpy:1 arpy:2 arpy:3 arpy:4"
d1 $ slow 4 $ striate 4 $ sound "arpy:1 arpy:2 arpy:3 arpy:4"
```

``` Haskell
randslice
```

は、サンプルを複数に分け、各サイクルでランダムにひとつを選び、再生します。

``` Haskell
d1 $ randslice 32 $ sound "bev"
```

``` Haskell
loopAt
```

を使うと、サンプルを、設定したサイクル数に合わせ調整します:

``` Haskell
d1 $ loopAt 8 $ sound "bev"
```

これまで同様パターンや変形をこれらの関数に追加したり、組み合わせることで、面白いエフェクトが得られます。

``` Haskell
d1 $ loopAt "<8 4 16>" $ chop 64 $  sound "bev*4" # cut 1
d1 $ rev $ loopAt 8 $ chop 128 $ sound "bev"
```
