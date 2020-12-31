---
title: Basic Patterns/ja
permalink: wiki/Basic_Patterns/ja/
layout: wiki
---

<languages />

Tidalで音を鳴らすには、基本このように書きます

``` Haskell
d1 $ sound "drum"
```

``` Haskell
silence
```

で、音を止めます:

``` Haskell
d1 $ silence
```

``` Haskell
:
```

で、同じセットから他の音を使います

``` Haskell
d1 $ sound "drum:1"
```

Tidalでデフォルトで使えるサンプルを次に挙げました。いくつか試してみましょう。

    flick sid can metal future gabba sn mouth co gretsch mt arp h cp
    cr newnotes bass hc tabla bass0 hh bass1 bass2 oc bass3 ho odx
    diphone2 house off ht tink perc bd industrial pluck trump printshort
    jazz voodoo birds3 procshort blip drum jvbass psr wobble drumtraks koy
    rave bottle kurt latibro rm sax lighter lt arpy feel less stab ul

ほかにどんなサンプルがあるか (または自分で追加するには) は
*Dirt-Samples* フォルダを見てみましょう。SuperColliderのメニューから
'File &gt; Open user support directory &gt; downloaded-quarks &gt;
Dirt-Samples' で見られます。

## シーケンスを作る

``` Haskell
d1 $ sound "bd hh sn hh"
```

シーケンスのなかに、ステップを増やせば増やすほど、ステップはより早く再生されます:

``` Haskell
d1 $ sound "bd bd hh bd sn bd hh bd"
```

これは、Tidalが時間を扱う方法のためです。‘サイクル’
(音楽の1小節のようなもの)が常に繰り返されています。Tidalは、明示的に指定(その方法はあとで学びます)しないかぎり、引用符("")に囲まれたすべての音を1サイクルで再生します。Tidalは、サイクル内に等しく音をちりばめます。つまり、ポリリズム構造をとれるということです(これもあとで学びます)。

<div class="mw-translate-fuzzy">

サイクルの長さを

``` Haskell
cps
```

(1サイクルの秒数)を使って変えられます -
BPM(分あたりの拍数)と似ていますね。

</div>
<div class="mw-translate-fuzzy">

``` Haskell
cps 0.6
```

</div>

同時に複数のシーケンスを再生するには d1, d2, d3 ... d9 を使います

``` Haskell
d2 $ sound "sn sn:2 sn bd sn"
```

全ての再生中のパターンを止めるには

``` Haskell
hush
```

を使います。

<div class="mw-translate-fuzzy">

``` Haskell
`hush`
```

</div>

サイクルの長さを負数(負数は括弧で囲む必要があります。覚えておきましょう)にしても、すべての再生を止めることができます。

<div class="mw-translate-fuzzy">

``` Haskell
cps (-1)
```

</div>

正の数にして、もう一度再生できるようにしましょう。

<div class="mw-translate-fuzzy">

``` Haskell
cps 0.6
```

</div>
<div class="mw-translate-fuzzy">

``` Haskell
solo
```

でひとつのチャンネルだけ再生することもできます。しかし、注意として
'unosolo' (再び複数チャンネルの再生に戻る) することはできません
(ですが、次のバージョンで機能を追加する予定です!)。

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

もう少しバリエーションを加えてみましょう。

``` Haskell
~
```

で休符/休みを加えます:

``` Haskell
d1 $ sound "bd ~ sn:3 bd sn:5 ~ bd:2 sn:2"
```

四角かっこ

``` Haskell
[ ]
```

で囲んだサブシーケンスを、ステップのひとつとして並べます:

<div class="mw-translate-fuzzy">

``` Haskell
d1 $ sound "bd [bd cp] bd bd"
<syntaxhighlight>
</div>

これより柔軟に拍子を作り出せます:

<syntaxhighlight lang="Haskell">
d1 $ sound "[bd bd sn:5] [bd sn:3]"
```

サブシーケンスの中に、サブシーケンスを入れられます:

``` Haskell
d1 $ sound "[[bd bd] bd sn:5] [bd sn:3]"
```

もっと入れられます..

``` Haskell
d1 $ sound "[[bd [bd bd bd bd]] bd sn:5] [bd sn:3]"
```

ステップを

``` Haskell
*
```

で繰り返せます:

``` Haskell
d1 $ sound "bd sd*2"
```

これはサブシーケンスにも使えます:

``` Haskell
d1 $ sound "bd [sd cp]*2"
```

``` Haskell
/
```

で逆のこともできます:

``` Haskell
d1 $ sound "bd sn/2"
```

``` Haskell
d1 $ sound "bd [sn cp]/2"
```

``` Haskell
*
```

は 'スピードアップ' し、掛け合わせた回数だけステップを再生します。逆に、

``` Haskell
/
```

は遅く再生する様はたらきます。

``` Haskell
<
```

と

``` Haskell
>
```

で囲むと、サイクル間で、パターンをスケジューリングできます:

``` Haskell
d1 $ sound "bd <sd cp arpy>"
```

``` Haskell
d1 $ sound "<bd sn> <sd [cp cp]> <bd [cp cp]>"
```

## エフェクト

Tidalには、音の鳴り方を変えるたくさんのエフェクトがあります。

``` Haskell
vowel
```

は母音の音を加えるフィルターです。 a, e, i, o, uを試してみましょう。

``` Haskell
d1 $ sound "drum drum drum drum" # vowel "a"
```

エフェクトのパターンは、音のパターンと同じように作ります。エフェクトや音のパターンを「コントロール・パターン」と呼びます。

``` Haskell
d1 $ sound "drum drum drum drum" # vowel "a o e e"
```

サイクル間でスケジューリングするため、

``` Haskell
<>
```

を使っているのを覚えておきましょう。

``` Haskell
d1 $ sound "drum drum drum drum" # vowel "<a o e e>"
```

母音でない文字を入れると、母音エフェイト(vowel effect)を止められます。

``` Haskell
d1 $ sound "drum drum drum drum" # vowel "a o p p"
```

Tidalは、ひとつから他方へ、うまくパターンをマッピングします。

``` Haskell
d1 $ sound "drum drum drum drum" # vowel "a o e"
```

構造は左から右へ渡されます。左と右のパラメータを逆転させてみましょう。

``` Haskell
d1 $ vowel "a o ~ i" # sound "drum" 
```

"警告" -
これは新しいTidalの変更点のひとつです。新しいTidalでは、左右どちらから構造を渡すか、または「両側から」渡すか、指定できるようになります。

``` Haskell
gain
```

は、それぞれの音のボリュームを変えます

``` Haskell
d1 $ sound "bd hh sn:1 hh sn:1 hh" # gain "1 0.7 0.5"
```

``` Haskell
speed
```

と

``` Haskell
note
```

は、サンプルの音高を変えます。

``` Haskell
speed
```

は、再生の速度を変えます。例. 2 は1オクターブ上がります

``` Haskell
d1 $ sound "numbers:1 numbers:2 numbers:3 numbers:4" # speed "1 1.5 2 0.5"
```

またはパターンを

``` Haskell
speed
```

パラメータから受け取ることもできます

``` Haskell
d1 $ speed "1 2 4" # sound "jungbass:6"
```

``` Haskell
note
```

は、音高を半音ずつ変えます。例. 12 で1オクターブ上がります

``` Haskell
d1 $ up "0 ~ 12 24" # sound "jungbass:6"
```

<div class="mw-translate-fuzzy">

``` Haskell
Pan
```

はステレオ効果を作れます - 0 = 左, 0.5 = 中心, 1 = 右

</div>

``` Haskell
d1 $ sound "numbers:1 numbers:2 numbers:3 numbers:4" # pan "0 0.5 1"
```

``` Haskell
shape
```

はディストーションを加えます
(ですが、音量も同時に上げるため注意してください)

``` Haskell
d1 $ sound "kurt:4 kurt:4" # shape "0 0.78" # gain "0.7"
```

## もっと色々試してみたいですか？

<div class="mw-translate-fuzzy">

他のエフェクトを試してみましょう
<http://tidalcycles.org/patterns.html#effects>

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

/

``` Haskell
cutoff
```

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

## 連続パターン

``` Haskell
sine
```

は連続パターンです。sin波にしたがって、0から1に変化し、また0へ戻ります。

``` Haskell
d1 $ sound "bd*32" # gain sine
```

``` Haskell
tri
```

や

``` Haskell
saw
```

や

``` Haskell
rand
```

も試せます。
