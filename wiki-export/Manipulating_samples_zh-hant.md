---
title: Manipulating samples/zh-hant
permalink: wiki/Manipulating_samples/zh-hant/
layout: wiki
---

<languages />

到目前為止我們只使用了較短的音源(samples)。時長較長的音源在使用時如果沒有留意可能會讓我們遇到一些麻煩。一起來看看當使用較長音源時會發生甚麼問題。

``` Haskell
d1 $ sound "bev"
--稍微等它播一段時間...然後
hush
```

如你所聽到的，Tidal每達一個循環就會播放相同的音檔(sample)。儘管你停止了pattern也必須等待已經觸發的音檔整段播放完畢。

你可以使用

``` Haskell
cut
```

使下個音源被觸發時將原本在播放的截止。

``` Haskell
d1 $ sound "bev" # cut 1
```

" cut "
後面的數字定義了一個群組，你可以將不同軌的pattern放在同一群裡，互相影響。

``` Haskell
d1 $ sound "bev ~" # cut 1
d2 $ slow 4 $ sound "pebbles ~" # cut 1
```

``` Haskell
legato
```

也能將音源尾部裁切，但它會是一個給定的長度。legato
值可介於(0-1)，單位是cycle，ex: 0.5為二分之一cycle。相較於 legato ，hold
函數是以秒為單位。

``` Haskell
d1 $ sound "bev ~ bev ~" # legato 1
```

我們也可以

``` Haskell
chop
```

一個音源，製造"顆粒合成(granular synthesis)" 的效果。

``` Haskell
d1 $ chop 32 $ sound "bev"
```

``` Haskell
striate
```

是一個與

``` Haskell
chop
```

相似的函數，但是在回放的方式上有所不同。

``` Haskell
d1 $ slow 4 $ chop 4 $ sound "arpy:1 arpy:2 arpy:3 arpy:4"
d1 $ slow 4 $ striate 4 $ sound "arpy:1 arpy:2 arpy:3 arpy:4"
```

``` Haskell
randslice
```

將一個音源等分成許多部份，每一個循環隨機撥放一段。

``` Haskell
d1 $ randslice 32 $ sound "bev"
```

我們也可以使用

``` Haskell
loopAt
```

將音源長度調整至與一或多個循環等長的狀態，但是音高會改變。

``` Haskell
d1 $ loopAt 8 $ sound "bev"
```

如同以往我們可以把這些函數轉換加上pattern，或著結合起來變成有趣的效果。

``` Haskell
d1 $ loopAt "<8 4 16>" $ chop 64 $  sound "bev*4" # cut 1
d1 $ rev $ loopAt 8 $ chop 128 $ sound "bev"
```
