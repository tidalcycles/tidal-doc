---
title: Interaction/fr
permalink: wiki/Interaction/fr/
layout: wiki
tags:
 - Reference
 - Tidal-1+
---

<languages/> De nouveaux changements sont apparus avec Tidal 1.0.0.

Il est possible de consulter toutes les fonctions pensées pour
l'interaction avec les patterns en consultant le fichier suivant :
[bootup
code](https://github.com/tidalcycles/Tidal/blob/master/BootTidal.hs).

# Nommer ou numéroter les patterns

Dans les versions antérieures, il était possible d'utiliser `d1`, `d2`,
etc, pour lancer plusieurs patterns :

``` Haskell
d1 $ sound "bd sd"

d1 $ silence
```

Désormais, vous pouvez également utiliser `p` suivi d'un `"nom"` entre
guillemets :

``` Haskell
p 100323523 $ sound "bd sd"

p 100323523 $ silence
```

De cette manière, vous pouvez théoriquement lancer un nombre infini de
patterns.

Vous pouvez faire référence à un pattern par son nom.

``` Haskell
p "jimmy" $ sound "bd sd"
p "susan" $ sound "cp(3,8)"

p "jimmy" $ silence
p "susan" $ silence
```

# Transitions

Si vous souhaitez réaliser une transition, vous pouvez utiliser les
patterns nommés :

``` haskell
xfade "susan" $ sound "gabba(3,8,<0 2 4>)"
xfade "susan" $ sound "cp*2"
```

(Les vieilles méthodes `t1` et `t2` ne fonctionnent plus.)

# Jouer un pattern une seule et unique fois

Si vous souhaitez jouer un pattern pour un seul et unique cycle, vous
pouvez utiliser `once`.

``` haskell
once $ s "bd sd(3,8)"
```

# Changer le tempo avec setcps

Donnez à `setcps` le nombre de cycles par seconde que vous désirez. Si
votre cycle vaut 1, il sera équivalent à 120 BPM.

    setcps 1

# Changer de tempo avec cps

`cps` n'est plus une fonction indépendante mais une fonction de
contrôle. Jouer à modifier les `cps` est assez fun. Les patterns n'ont
pas pour le moment de tempo indépendant ! Si vous changez le `cps` d'un
pattern, tout les patterns suivront.

``` haskell
p "cpsfun" $ s "bd sd(3,8)" # cps (slow 8 $ 0.5 + saw)
```
