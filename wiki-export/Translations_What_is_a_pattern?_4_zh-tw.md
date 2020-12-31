---
title: Translations:What is a pattern?/4/zh-tw
permalink: wiki/Translations:What_is_a_pattern?/4/zh-tw/
layout: wiki
---

上述的代碼看上去像是一行字符串，但Tidal默默地將它語法分析為一個圖式（使用名為parseBP_E的隱藏函數）。從字符串到Tidal圖式的類型轉換，我們可以通過加入

``` Haskell
:: Pattern String
```

向此圖式取值。在這裡，我們類似於告訴Tidal將這個字符串視為一個圖式然後輸出：
