---
title: Randomness/zh-hant
permalink: wiki/Randomness/zh-hant/
layout: wiki
---

<languages />
隨機性(Randomness)的加入能讓我們的pattern迅速引入一點變奏感和特色。

``` Haskell
sometimes
```

的作用與

``` Haskell
every
```

相近，與之不同的是sometimes每個循環都有機會隨機地觸發，而不是在固定的循環後觸發。

``` Haskell
d1 $ sometimes (# speed "2") $ sound "drum*8"
```

``` Haskell
often
```

的作用也與

``` Haskell
sometimes
```

相同，但發生的機率更高!

``` Haskell
d1 $ often (# speed "2") $ sound "drum*8"
```

``` Haskell
irand
```

能夠生成一個隨機的整數，其值不超過給定的數值。舉個例子:用來播放音源，隨機選擇。

``` Haskell
d1 $ sound "arpy(3,8)" # n (irand 16)
```

``` Haskell
rand
```

則產生0\~1之間的小數。

``` Haskell
d1 $ sound "tink*16" # gain rand
```

你可以用

``` Haskell
degradeBy
```

隨機地移除一些聲音。輸入0\~1之間的數值，越小則音源被刪去的機率越小。

``` Haskell
d1 $ degradeBy 0.2 $ sound "tink*16"
```

(

``` Haskell
degrade
```

與

``` Haskell
degradeBy 0.5
```

)相同。

或著你可以用

``` Haskell
?
```

去除聲音單元或結構，同樣也是一半機率。

``` Haskell
d1 $ sound "bd sn:2? bd sn?"
```
