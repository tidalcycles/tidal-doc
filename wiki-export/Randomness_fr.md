---
title: Randomness/fr
permalink: wiki/Randomness/fr/
layout: wiki
---

<languages /> Le hasard permet d'introduire rapidement de la variété et
du caractère dans nos patterns.

``` Haskell
sometimes
```

fonctionne un peu comme

``` Haskell
every
```

, mais au lieu de se produire de façon certaine après un certain
intervalle de temps, ici, notre transformation n'aura qu'une chance
aléatoire d'avoir lieu.

``` Haskell
d1 $ sometimes (# speed "2") $ sound "drum*8"
```

``` Haskell
often
```

fonctionne comme

``` Haskell
sometimes
```

mais se produit plus fréquemment.

``` Haskell
d1 $ often (# speed "2") $ sound "drum*8"
```

``` Haskell
irand
```

génère un nombre intégral aléatoire, dans l'intervalle précisé :

``` Haskell
d1 $ sound "arpy(3,8)" # n (irand 16)
```

``` Haskell
rand
```

génère un nombre décimal aléatoire entre 0 et 1.

``` Haskell
d1 $ sound "tink*16" # gain rand
```

Vous pouvez utiliser

``` Haskell
degradeBy
```

pour supprimer aléatoirement certains événements. Le nombre indique la
chance qu'à la sample d'être lue.

``` Haskell
d1 $ degradeBy 0.2 $ sound "tink*16"
```

(

``` Haskell
degrade
```

est identique à

``` Haskell
degradeBy 0.5
```

)

Vous pouvez également utiliser ? pour indiquer que la sample à 50% de
chance d'être ou de ne pas être jouée.

``` Haskell
d1 $ sound "bd sn:2? bd sn?"
```
