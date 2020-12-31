---
title: Basic Patterns/zh-tw
permalink: wiki/Basic_Patterns/zh-tw/
layout: wiki
---

<languages />

讓Tidal發出聲音，用這個最基本的語法吧，它長這樣。

``` Haskell
d1 $ sound "drum"
```

你可以使用

``` Haskell
silence
```

讓它停止。

``` Haskell
d1 $ silence
```

用

``` Haskell
:
```

來選擇資料夾裡其他的音檔

``` Haskell
d1 $ sound "drum:1"
```

以下列出一部份Tidal內建的聲音庫。試著用用看!

    flick sid can metal future gabba sn mouth co gretsch mt arp h cp
    cr newnotes bass hc tabla bass0 hh bass1 bass2 oc bass3 ho odx
    diphone2 house off ht tink perc bd industrial pluck trump printshort
    jazz voodoo birds3 procshort blip drum jvbass psr wobble drumtraks koy
    rave bottle kurt latibro rm sax lighter lt arpy feel less stab ul

查看一下究竟還有哪些聲音庫可使用(或是新增自己的)。你可以尋找"Dirt-Samples"這個資料夾，它在SuperCollider的主選單中'File
\> Open user support directory \> downloaded-quarks \> Dirt-Samples'。

## 產生一個序列

``` Haskell
d1 $ sound "bd hh sn hh"
```

在序列中有越多聲音單元，聲音出現的時間加快了。

``` Haskell
d1 $ sound "bd bd hh bd sn bd hh bd"
```

那是因為Tidal處理時間的方式而產生了這樣的結果。 Tidal的時間"循環(cycle)"
持續不斷的在重複，類似音樂的一個"小節"。而Tidal會在一個循環時間內播放引號內的所有聲音，除非你刻意不讓它這麼做(這個之後會說明)。你應該也注意到了Tidal在一個循環裡等分了每個聲音的間隔，這說明我們可以簡單地進入一個復節奏(polyrhythmic)的結構中，這點稍後也會說明。

<div class="mw-translate-fuzzy">

我們可以用 "cps" (cycles per second//一秒循環幾次)
改變一個cycle的時間長短 - 它與一般熟知的 bpm (beats per
minute)有些許相似。

</div>
<div class="mw-translate-fuzzy">

``` Haskell
cps 0.6
```

</div>

d1, d2, d3...d9讓你能夠同時播放不同的序列。

``` Haskell
d2 $ sound "sn sn:2 sn bd sn"
```

使用

``` Haskell
hush
```

來停止所有正在運行的pattern。

<div class="mw-translate-fuzzy">

``` Haskell
`hush`
```

</div>

你可以將cps設為負數(記得將負數放在括號內)來暫停。

<div class="mw-translate-fuzzy">

``` Haskell
cps (-1)
```

</div>

輸入一個正數得以重新啟動

<div class="mw-translate-fuzzy">

``` Haskell
cps 0.6
```

</div>
<div class="mw-translate-fuzzy">

你也可以"solo"(獨奏)其中某一軌-但是要注意目前不能"unsolo"，下一版的Tidal才有這個功能。

</div>
<div class="mw-translate-fuzzy">

``` Haskell
d1 $ sound "arpy cp arpy:2"
d2 $ sound "sn sn:2 bd sn"
solo $ d2 $ sound "sn sn:2 bd sn"
```

</div>

d2 $ sound "sn sn:2 bd sn"

solo 2

-- now only the second pattern will be playing

unsolo 2

-- now both will be playing, again

</syntaxhighlight>

讓我們的序列產生更多變化吧

用

``` Haskell
~
```

增加一些安靜的片刻/休止

``` Haskell
d1 $ sound "bd ~ sn:3 bd sn:5 ~ bd:2 sn:2"
```

使用方括號在單元中塞進一個子序列

<div class="mw-translate-fuzzy">

``` Haskell
d1 $ sound "bd [bd cp] bd bd"
<syntaxhighlight>
</div>

如此一來相當於能夠靈活地改變拍號

<syntaxhighlight lang="Haskell">
d1 $ sound "[bd bd sn:5] [bd sn:3]"
```

你可以在子序列中放入更多個子序列

``` Haskell
d1 $ sound "[[bd bd] bd sn:5] [bd sn:3]"
```

一直持續....

``` Haskell
d1 $ sound "[[bd [bd bd bd bd]] bd sn:5] [bd sn:3]"
```

你可以用

``` Haskell
*
```

重複某個單元:

``` Haskell
d1 $ sound "bd sd*2"
```

這個方法也能用在序列上

``` Haskell
d1 $ sound "bd [sd cp]*2"
```

與之相反，使用

``` Haskell
/
```

符號。

``` Haskell
d1 $ sound "bd sn/2"
```

``` Haskell
d1 $ sound "bd [sn cp]/2"
```

``` Haskell
*
```

加速了某段序列或單元，反覆播放。

``` Haskell
/
```

產生減速的效果

可以使用

``` Haskell
<
```

and

``` Haskell
>
```

在循環中依序改變pattern

``` Haskell
d1 $ sound "bd <sd cp arpy>"
```

``` Haskell
d1 $ sound "<bd sn> <sd [cp cp]> <bd [cp cp]>"
```

## 聲音效果器

Tidal有著許多處理聲音的能力，這些效果可以改變聲音的原貌。

``` Haskell
vowel
```

這是一個模擬母音發聲的濾波效果器(filter) -- 試試看 a, e, i, o 和 u
這幾個母音。

``` Haskell
d1 $ sound "drum drum drum drum" # vowel "a"
```

創造聲音效果的pattern與創造聲音pattern方法大同小異，我們稱這些patterns
"control patterns"。

``` Haskell
d1 $ sound "drum drum drum drum" # vowel "a o e e"
```

還記得可以使用

``` Haskell
 < > 
```

次序地改變每個cycle的內容嗎

``` Haskell
d1 $ sound "drum drum drum drum" # vowel "<a o e e>"
```

你可以加入一個非母音的字母，它會暫停母音濾波效果器的作用。

``` Haskell
d1 $ sound "drum drum drum drum" # vowel "a o p p"
```

Tidal擅長結合不同的pattern。

``` Haskell
d1 $ sound "drum drum drum drum" # vowel "a o e"
```

整體的結構是向左邊參考 - 試試看將 sound、vowel前後互換。

``` Haskell
d1 $ vowel "a o ~ i" # sound "drum" 
```

**溫馨提醒** -
在接下來的新版Tidal中，你可以決定結構參照的方向..或是結合雙邊的結構。見https://tidalcycles.org/index.php/Combining_pattern_structure

``` Haskell
gain
```

功能是改變音量，每個聲音都可以有不同的音量。

``` Haskell
d1 $ sound "bd hh sn:1 hh sn:1 hh" # gain "1 0.7 0.5"
```

``` Haskell
speed
```

以及

``` Haskell
note
```

用來改變音檔播放的音高。

``` Haskell
speed
```

造成了播放速度的改變, 例如 2 = 升高一個8度 (octave)。

``` Haskell
d1 $ sound "numbers:1 numbers:2 numbers:3 numbers:4" # speed "1 1.5 2 0.5"
```

也可以使用

``` Haskell
speed
```

的pattern當主要結構，只要把它移到左邊。

``` Haskell
d1 $ speed "1 2 4" # sound "jungbass:6"
```

``` Haskell
note
```

改變音檔的音高，以半音(semitone)為單位，例如 12 = 升高一個八度(octave)

``` Haskell
d1 $ up "0 ~ 12 24" # sound "jungbass:6"
```

<div class="mw-translate-fuzzy">

``` Haskell
Pan
```

讓我們能夠控制左右聲道，產生stereo的效果。0 = 左聲道, 0.5 = 置中, 1 =
右聲道。

</div>

``` Haskell
d1 $ sound "numbers:1 numbers:2 numbers:3 numbers:4" # pan "0 0.5 1"
```

``` Haskell
shape
```

產生破音(distortion)失真的效果，音量會變大請留意。

``` Haskell
d1 $ sound "kurt:4 kurt:4" # shape "0 0.78" # gain "0.7"
```

## 開始有些信心了?

<div class="mw-translate-fuzzy">

試試看更多的效果:
<https://tidalcycles.org/index.php/Category:Control_Functions>

</div>
<div class="mw-translate-fuzzy">

``` Haskell
delay
```

/

``` Haskell
delaytime
```

/

``` Haskell
delayfeedback
```

/ syntaxhighlight lang="Haskell" inline\>cutoff

</syntaxhighlight>

/

``` Haskell
resonance
```

/

``` Haskell
room
```

/

``` Haskell
size
```

</div>

## 連續型的 pattern

``` Haskell
sine
```

為一個連續型的pattern，以正弦波(sine)的軌跡在數值0到1間擺盪。

``` Haskell
d1 $ sound "bd*32" # gain sine
```

你也可以試試看

``` Haskell
tri
```

,

``` Haskell
saw
```

and

``` Haskell
rand
```

這幾種不同的波形。 tri = 三角波、saw = 鋸齒波、rand = 隨機數值(noise)。
