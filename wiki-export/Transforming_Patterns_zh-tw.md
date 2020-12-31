---
title: Transforming Patterns/zh-tw
permalink: wiki/Transforming_Patterns/zh-tw/
layout: wiki
---

<languages /> 我們將開始使用轉換(transformation)做出更複雜的pattern。

使用如

``` haskell
slow
```

這類函數可使循環模式大為不同。

``` haskell
slow
```

延展了pattern，跨及更多個cycle。

``` haskell
d1 $ sound "arpy arpy:1 arpy:2 arpy:3"

d1 $ slow 2 $ sound "arpy arpy:1 arpy:2 arpy:3"
```

``` haskell
fast
```

將pattern壓縮到比一個cycle更小的區間。

你也許會看到有些人用

``` haskell
density
```

這兩者功能是一樣的。

``` haskell
fast 0.5
```

以及

``` haskell
slow 2
```

是一樣的!

``` haskell
d1 $ fast 2 $ sound "arpy arpy:1 arpy:2 arpy:3"

d1 $ fast 0.5 $ sound "arpy arpy:1 arpy:2 arpy:3"
```

``` haskell
hurry
```

跟

``` haskell
fast
```

有點像，差異在於多了撥放速度(音高)的變換。

``` haskell
d1 $ sound "arpy arpy arpy:1 arpy:2"

d1 $ hurry 2 $ sound "arpy arpy arpy:1 arpy:2"

d1 $ hurry 0.5 $ sound "arpy arpy arpy:1 arpy:2"
```

你可以使用

``` haskell
rev
```

來反轉一個pattern。

``` haskell
d1 $ rev $ sound "arpy arpy:1 arpy:2 arpy:3"
```

或是像鐘擺一樣前後來回

``` haskell
palindrome
```

``` haskell
d1 $ palindrome $ sound "arpy arpy:1 arpy:2 arpy:3"
```

``` haskell
iter
```

當cycle進行時，改變pattern的起始點。每結束一個cycle，pattern的起始點就往後移動，直到結尾再從頭開始循環。移動的間隔由給定的數字而定。

``` haskell
d1 $ iter 4 $ sound "numbers:1 numbers:2 numbers:3 numbers:4"
```

結果為 "1 2 3 4" "2 3 4 1" "3 4 1 2" "4 1 2 3" ......

``` haskell
every
```

可以讓我們在循環之中安排不同的轉換和效果。
例如:每四個循環出現一個以雙倍速度撥放的循環。

``` haskell
d1 $ every 4 (fast 2) $ sound "arpy arpy:1 arpy:2 arpy:3"
```

...或著安排一個效果，使用

``` haskell
#
```

``` haskell
d1 $ every 4 (# vowel "a o") $ sound "arpy arpy:1 arpy:2 arpy:3"
```

``` haskell
jux
```

'juxtapose'
的簡稱。進行某個轉換或是效果，其變形後的結果由其中一個聲道撥出，另一個聲道則維持原樣。

``` haskell
d1 $ sound "arpy arpy:1 arpy:2 arpy:3"
d1 $ jux (rev) $ sound "arpy arpy:1 arpy:2 arpy:3"
d1 $ jux (hurry 2) $ sound "arpy arpy arpy:1 arpy:2"
```

``` haskell
chunk
```

只在循環特定的區段內加入變換或是效果，且隨時間改變區段位置。舉例來說參數設為

``` haskell
4
```

的話，效果將只在1/4個cycle內起作用且四個循環內各影響不同的區段。

``` haskell
d1 $ chunk 4 (hurry 2) $ sound  "arpy arpy:1 arpy:2 arpy:3"
d1 $ chunk 4 (# speed 2) $ sound  "alphabet:0 alphabet:1 alphabet:2 alphabet:3"
```

## 有把握了嗎?

可以一次進行多個轉換! 用

``` haskell
.
```

將它們連結。

``` haskell
d1 $ jux (rev . (slow 1.5)) $ sound "arpy arpy:1 arpy:2 arpy:3"
```

要記住(幾乎)一切都是pattern，因此我們也可以將轉換運用在效果上。

``` haskell
d1 $ sound "jvbass [jvbass jvbass] jvbass ~" # note "1 [3 5] 7"
d1 $ sound "jvbass [jvbass jvbass] jvbass ~" # iter 3 (note "1 [3 5] 7")
```

如果設定sine、saw波的擺動幅度，或是放慢它們的頻率將會如何呢?
