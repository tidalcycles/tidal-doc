---
title: Different Kinds of Pattern/fr
permalink: wiki/Different_Kinds_of_Pattern/fr/
layout: wiki
---

<languages /> Qu'est-ce qu'un pattern ?

Essayons de penser à d'autres types de patterns et à comment Tidal
pourrait les représenter.

## Cycles / répétitions

Nous pouvons utiliser

``` Haskell
n
```

pour choisir une sample dans un dossier. Cela nous permet d'appliquer un
pattern ici aussi !

``` Haskell
d1 $ n "0 1 2 3" # sound "arpy"
```

``` Haskell
Run
```

est une manière abrégée d'écrire ce type de patterns.

``` Haskell
d1 $ n (run 4) # sound "arpy"
```

Nous pouvons aussi utiliser

``` Haskell
..
```

.

``` Haskell
d1 $ n "0..4" # sound "arpy"
```

## Symétrie

``` Haskell
d1 $ slow 2 $ n "0 1 2 3 3 2 1 0" # sound "arpy"
d1 $ palindrome $ n (run 4) # sound "arpy"
```

## Séquences polyrythmiques / polymétriques

Vous pouvez jouez deux sous-patterns en même temps en définissant chacun
d'entre eux entre crochets droits, et en les séparant par une virgule :

``` Haskell
d1 $ sound "[voodoo voodoo:3, arpy arpy:4 arpy:2]"
```

Si vous utilisez des crochets courbes en lieu et place des crochets
droits, vous obtiendrez un effet différent. Avec les crochets droits,
chacun des sous-patterns sera joué en un seul cycle (polyrythmie). Avec
les crochets courbes, la pulsation est donnée par le premier pattern. Le
premier et le second pattern peuvent donc alors se chevaucher
(polymétrie).

``` Haskell
d1 $ sound "[voodoo voodoo:3, arpy arpy:4 arpy:2]"
d1 $ sound "{voodoo voodoo:3, arpy arpy:4 arpy:2}"
d1 $ sound "[drum bd hh bd, can can:2 can:3 can:4 can:2]"
d1 $ sound "{drum bd hh bd, can can:2 can:3 can:4 can:2}"
d1 $ sound "[bd sn, can:2 can:3 can:1, arpy arpy:1 arpy:2 arpy:3 arpy:5]"
d1 $ sound "{bd sn, can:2 can:3 can:1, arpy arpy:1 arpy:2 arpy:3 arpy:5}"
```

## Rythmes euclidiens/Bjorklund

Si vous indiquez deux nombres entre parenthèses après un élément dans un
pattern, alors Tidal distribuera le premier nombre (sons) équitablement
par rapport au second (nombre de steps).

``` Haskell
d1 $ sound "bd(5,8)"
```

Si vous le souhaitez, vous pouvez n'utiliser ce type de notation que
pour un seul élément dans votre pattern.

``` Haskell
d1 $ sound "bd(3,8) sn*2"
d1 $ sound "bd(3,8) sn(5,8)"
```

Vous pouvez également ajouter un troisième paramètre, qui permet de
donner une "rotation" au pattern. Celui-ci commencera sur un step
différent à chaque itération.

``` Haskell
d1 $ sound "bd(5,8,2)"
```
