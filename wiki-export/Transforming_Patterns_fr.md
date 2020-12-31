---
title: Transforming Patterns/fr
permalink: wiki/Transforming_Patterns/fr/
layout: wiki
---

<languages /> Nous pouvons commencer à créer des patterns beaucoup plus
complexes en utilisant des transformations :

Nous pouvons utiliser des fonctions comme

``` haskell
slow
```

pour altérer le cycle.

``` haskell
slow
```

permet d'étendre le pattern sur un plus grand nombre de cycles.

``` haskell
d1 $ sound "arpy arpy:1 arpy:2 arpy:3"

d1 $ slow 2 $ sound "arpy arpy:1 arpy:2 arpy:3"
```

``` haskell
fast
```

produit l'effet inverse. Il compresse un pattern en x fois de moins de
cycles.

Vous verrez également les gens écrire

``` haskell
density
```

. C'est tout à fait équivalent !

``` haskell
fast 0.5
```

produira le même effet que :

``` haskell
slow 2
```

!

``` haskell
d1 $ fast 2 $ sound "arpy arpy:1 arpy:2 arpy:3"

d1 $ fast 0.5 $ sound "arpy arpy:1 arpy:2 arpy:3"
```

``` haskell
hurry
```

est identique à "fast", mais applique aussi une seconde transformation,
celle de la vitesse de lecture de la sample.

``` haskell
d1 $ sound "arpy arpy arpy:1 arpy:2"

d1 $ hurry 2 $ sound "arpy arpy arpy:1 arpy:2"

d1 $ hurry 0.5 $ sound "arpy arpy arpy:1 arpy:2"
```

Vous pouvez renverser un pattern avec ‘rev’.

``` haskell
d1 $ rev $ sound "arpy arpy:1 arpy:2 arpy:3"
```

Ou le jouer dans un sens puis dans l'autre en utilisant ‘palindrome’ :

``` haskell
d1 $ palindrome $ sound "arpy arpy:1 arpy:2 arpy:3"
```

``` haskell
iter
```

démarre le pattern sur un élément différent à chaque fois, changeant de
point de départ à chaque itération, jusqu'à revenir à son point de
départ (le pattern normal).

``` haskell
d1 $ iter 4 $ sound "arpy arpy:1 arpy:2 arpy:3"
```

``` haskell
every
```

nous permet de prévoir certaines transformations et de les appliquer
lors de la lecture d'un cycle particulier. Par exemple : joue les
samples deux fois plus rapidement tout les quatre cycles.

``` haskell
d1 $ every 4 (fast 2) $ sound "arpy arpy:1 arpy:2 arpy:3"
```

... vous pouvez aussi prévoir un effet de la même manière, en utilisant

``` haskell
#
```

.

``` haskell
d1 $ every 4 (# vowel "a o") $ sound "arpy arpy:1 arpy:2 arpy:3"
```

``` haskell
jux
```

(contraction de 'juxtapose') joue une version transformée d'un pattern
dans une des enceintes et conserve le pattern original dans l'autre
enceinte.

``` haskell
d1 $ sound "arpy arpy:1 arpy:2 arpy:3"
d1 $ jux (rev) $ sound "arpy arpy:1 arpy:2 arpy:3"
d1 $ jux (hurry 2) $ sound "arpy arpy arpy:1 arpy:2"
```

``` haskell
chunk
```

applique une transformation ou un effet sur une partie différente du
pattern à chaque fois. Par exemple, en prenant

``` haskell
4
```

comme paramètre, la transformation se déclenchera à chaque quart de
cycle.

``` haskell
d1 $ chunk 4 (hurry 2) $ sound  "arpy arpy:1 arpy:2 arpy:3"
d1 $ chunk 4 (# speed 2) $ sound  "alphabet:0 alphabet:1 alphabet:2 alphabet:3"
```

## Êtes-vous courageux ?

Il est possible d'appliquer plusieurs transformations en même temps en
utilisant

``` haskell
.
```

.

``` haskell
d1 $ jux (rev . (slow 1.5)) $ sound "arpy arpy:1 arpy:2 arpy:3"
```

Rappelez-vous que pour Tidal Cycles, (presque) tout est un pattern. Nous
pouvons donc appliquer ces transformations à nos effets également !

``` haskell
d1 $ sound "jvbass [jvbass jvbass] jvbass ~" # note "1 [3 5] 7"
d1 $ sound "jvbass [jvbass jvbass] jvbass ~" # iter 3 (note "1 [3 5] 7")
```

Et si nous ralentissions ou accélérions en utilisant "sine" et "saw" ?
