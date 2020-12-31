---
title: Different Kinds of Pattern/zh-tw
permalink: wiki/Different_Kinds_of_Pattern/zh-tw/
layout: wiki
---

<languages /> 什麼是"pattern"，到底?

我們來看看Tidal如何表示其他各式各樣Pattern。

## 週期循環 / 反覆

我們可以使用

``` Haskell
n
```

來選擇資料夾內的音檔，音檔變換也能被pattern。

``` Haskell
d1 $ n "0 1 2 3" # sound "arpy"
```

``` Haskell
Run
```

是生產出一個漸增序列的簡單方法。

``` Haskell
d1 $ n (run 4) # sound "arpy"
```

或是我們也可以使用

``` Haskell
..
```

``` Haskell
d1 $ n "0..4" # sound "arpy"
```

## 對稱

``` Haskell
d1 $ slow 2 $ n "0 1 2 3 3 2 1 0" # sound "arpy"
d1 $ palindrome $ n (run 4) # sound "arpy"
```

## Polymetric / Polyrhythmic 序列

在方括號之間置入兩個子序列，並用逗號 ","
隔開。將可以同時撥放兩個子序列。

``` Haskell
d1 $ sound "[voodoo voodoo:3, arpy arpy:4 arpy:2]"
```

若是你改用

``` Haskell
{ }
```

括號而非

``` Haskell
[ ]
```

括號，將有不同的結果。

``` Haskell
[ ]
```

每個子序列都在一個cycle時間內結束，產生複節奏(polyrhythm)的結構。

``` Haskell
{ }
```

則是以左手邊的pattern為主結構，右邊的pattern在主結構之上變化其值，產生混合拍的結構(polymetric
or polymeter)。

``` Haskell
d1 $ sound "[voodoo voodoo:3, arpy arpy:4 arpy:2]"
d1 $ sound "{voodoo voodoo:3, arpy arpy:4 arpy:2}"
d1 $ sound "[drum bd hh bd, can can:2 can:3 can:4 can:2]"
d1 $ sound "{drum bd hh bd, can can:2 can:3 can:4 can:2}"
d1 $ sound "[bd sn, can:2 can:3 can:1, arpy arpy:1 arpy:2 arpy:3 arpy:5]"
d1 $ sound "{bd sn, can:2 can:3 can:1, arpy arpy:1 arpy:2 arpy:3 arpy:5}"
```

## Euclidian / Bjorklund 節奏

如果你將小括號(x,y)放在pattern之中的單元後方，Tidal會以y等分，每間隔x等分播放一次單元。

``` Haskell
d1 $ sound "bd(5,8)"
```

你可以在pattern內的任意元素加上個符號。

``` Haskell
d1 $ sound "bd(3,8) sn*2"
d1 $ sound "bd(3,8) sn(5,8)"
```

也可以加上第三個參數，它決定序列從第幾個step開始。詳細可以參考https://tidalcycles.org/index.php/Tutorial
裡的Euclidean Sequences 部分。

``` Haskell
d1 $ sound "bd(5,8,2)"
```
