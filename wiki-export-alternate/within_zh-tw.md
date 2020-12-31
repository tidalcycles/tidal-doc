---
title: within/zh-tw
permalink: wiki/within/zh-tw/
layout: wiki
tags:
 - Functions
 - Higher-order functions
---

使用**within**將函數作用於圖式中的一部分。**within**接受兩個參數：起始和終止點（時序），兩者類型都是０和１之間的浮點數，且作用於相關的圖式。注意第二個參數（終止點）必須大於第一個（起始點）函數才能產生作用。

舉例來說, 將

    fast 2

只應用在圖式的前半段：

    d1 $ within (0, 0.5) (fast 2) $ sound "bd*2 sn lt mt hh hh hh hh"

或者將

    (# speed "0.5")

作用於圖式最後四分之一

    d1 $ within (0.75, 1) (# speed "0.5") $ sound "bd*2 sn lt mt hh hh hh hh"
