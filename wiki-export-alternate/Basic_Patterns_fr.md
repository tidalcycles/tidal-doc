---
title: Basic Patterns/fr
permalink: wiki/Basic_Patterns/fr/
layout: wiki
---

<languages />

Voici la ligne de code la plus élémentaire pour produire du son avec
Tidal Cycles :

``` Haskell
d1 $ sound "drum"
```

Vous pouvez stopper la lecture d'un son en utilisant

``` Haskell
silence
```

:

``` Haskell
d1 $ silence
```

Choisissez un son différent au sein d'un même jeu de samples (dossier) à
l'aide de \`:\`

``` Haskell
d1 $ sound "drum:1"
```

Une partie des samples pré-installés avec Tidal sont listés ci-dessous.
Essayez-les !

    flick sid can metal future gabba sn mouth co gretsch mt arp h cp
    cr newnotes bass hc tabla bass0 hh bass1 bass2 oc bass3 ho odx
    diphone2 house off ht tink perc bd industrial pluck trump printshort
    jazz voodoo birds3 procshort blip drum jvbass psr wobble drumtraks koy
    rave bottle kurt latibro rm sax lighter lt arpy feel less stab ul

Vous pouvez connaître la liste des samples (ou ajouter les vôtres) en
explorant le dossier "Dirt-samples". Vous pouvez y accéder rapidement en
utilisant le menu de SuperCollider : 'File &gt; Open user support
directory &gt; downloaded-quarks &gt; Dirt-Samples'.

## Construire un pattern

``` Haskell
d1 $ sound "bd hh sn hh"
```

Plus il y aura de steps dans votre pattern, plus celui-ci aura tendance
à accélérer en proportion.

``` Haskell
d1 $ sound "bd bd hh bd sn bd hh bd"
```

Ceci s'explique par la manière spécifique qu'à Tidal Cycles de gérer le
temps. Il existe un 'cycle' universel (une sorte de mesure) qui est
perpétuellement jouée en boucle par l'ordinateur. Tidal jouera tout les
sons situés entre les guillemets au cours du cycle, tant qu'on ne lui
donnera pas l'indication contraire. Vous apprendrez à lui donner cette
indication plus tard.

Vous remarquerez également que chaque son sera toujours espacé de
manière égale au cours du cycle. Ceci nous permet de générer des
polyrythmies !

<div class="mw-translate-fuzzy">

Nous pouvons changer la longueur du cycle en spécifiant le \`cps\`
(cycles per second). Vous remarquerez que cette appellation est quelque
peu similaire au plus classique "bpm" (beats per minute).

</div>
<div class="mw-translate-fuzzy">

``` Haskell
cps 0.6
```

</div>

Vous pouvez utiliser d1, d2, d3 ... d9 pour jouer plusieurs séquences en
même temps.

``` Haskell
d2 $ sound "sn sn:2 sn bd sn"
```

Vous pouvez stopper tous les patterns en cours de lecture avec

``` Haskell
hush
```

.

<div class="mw-translate-fuzzy">

``` Haskell
`hush`
```

</div>

Vous pouvez mettre en pause tout les patterns en donnant à votre cycle
une valeur négative. Attention, il faut toujours spécifier les nombres
négatifs entre guillemets.

<div class="mw-translate-fuzzy">

``` Haskell
cps (-1)
```

</div>

Démarrez le cycle à nouveau en spécifiant une valeur positive :

<div class="mw-translate-fuzzy">

``` Haskell
cps 0.6
```

</div>
<div class="mw-translate-fuzzy">

Vous pouvez choisir d'isoler un pattern avec \`solo\`. Attention, il est
impossible d'annuler cette fonction (... mais ce sera le cas dans une
version ultérieure de Tidal) !

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

Ajoutons un peu de variété à nos patterns.

Ajouter un silence, une pause ou un soupir avec

``` Haskell
~
```

:

``` Haskell
d1 $ sound "bd ~ sn:3 bd sn:5 ~ bd:2 sn:2"
```

Vous pouvez ajouter un sous-pattern en le spécifiant entre crochets
droits :

<div class="mw-translate-fuzzy">

``` Haskell
d1 $ sound "bd [bd cp] bd bd"
<syntaxhighlight>
</div>

Cette fonctionnalité permet d'obtenir des mesures rythmiques plus flexibles :

<syntaxhighlight lang="Haskell">
d1 $ sound "[bd bd sn:5] [bd sn:3]"
```

Vous pouvez encore ajouter des sous-patterns au sein même des
sous-patterns :

``` Haskell
d1 $ sound "[[bd bd] bd sn:5] [bd sn:3]"
```

Et ainsi de suite...

``` Haskell
d1 $ sound "[[bd [bd bd bd bd]] bd sn:5] [bd sn:3]"
```

Vous pouvez répéter un step avec

``` Haskell
*
```

:

``` Haskell
d1 $ sound "bd sd*2"
```

Ceci fonctionne également pour les sous-patterns :

``` Haskell
d1 $ sound "bd [sd cp]*2"
```

Vous pouvez au contraire ralentir un step en utilisant :

``` Haskell
/
```

:

``` Haskell
d1 $ sound "bd sn/2"
```

``` Haskell
d1 $ sound "bd [sn cp]/2"
```

``` Haskell
*
```

accélère un pas, ce qui revient à le jouer x fois.

``` Haskell
/
```

ralentit un pas, ce qui revient à le jouer x fois moins.

Nous pouvons aussi préparer des patterns qui seront joués lors d'un
cycle ultérieur en utilisant

``` Haskell
<
```

et

``` Haskell
>
```

:

``` Haskell
d1 $ sound "bd <sd cp arpy>"
```

``` Haskell
d1 $ sound "<bd sn> <sd [cp cp]> <bd [cp cp]>"
```

## Effets

Tidal intègre un grand nombre d'effets que nous pouvons utiliser pour
modifier le rendu d'un pattern ou d'une séquence :

``` Haskell
vowel
```

est un filtre formant qui permet d'obtenir le son d'une voyelle. Essayez
: a, e, i, o et u.

``` Haskell
d1 $ sound "drum drum drum drum" # vowel "a"
```

Nous pouvons créer des patterns d'effets de la même manière que nous
créons des patterns de son. Il est de coutume d'appeler ces effets et
ces patterns de son des "patterns de contrôle".

``` Haskell
d1 $ sound "drum drum drum drum" # vowel "a o e e"
```

Rappelez-vous qu'il est possible d'utiliser "&lt;&gt;" pour planifier à
travers le pattern.

``` Haskell
d1 $ sound "drum drum drum drum" # vowel "<a o e e>"
```

Vous pouvez ajouter une consonne pour stopper l'effet de voyelle.

``` Haskell
d1 $ sound "drum drum drum drum" # vowel "a o p p"
```

Tidal fait du mieux qu'il peut pour répartir équitablement les patterns
(sons, effets).

``` Haskell
d1 $ sound "drum drum drum drum" # vowel "a o e"
```

La structure du pattern est toujours indiquée par l'élément indiqué en
début de ligne. Essayez par exemple d'inverser les paramètres :

``` Haskell
d1 $ vowel "a o ~ i" # sound "drum" 
```

"ATTENTION" — Dans les prochaines versions de Tidal, vous serez en
mesure de contrôler quel élément donne la structure, ou de combiner des
structures.

``` Haskell
gain
```

modifie l'amplitude des différents sons.

``` Haskell
d1 $ sound "bd hh sn:1 hh sn:1 hh" # gain "1 0.7 0.5"
```

``` Haskell
speed
```

et

``` Haskell
note
```

sont utilisées pour modifier la hauteur des samples (le pitch).

``` Haskell
speed
```

affecte la vitesse de lecture de la sample. Puisque 2 jouera le sample
deux fois plus rapidement, la hauteur du sample joué sera une octave
plus haut.

``` Haskell
d1 $ sound "numbers:1 numbers:2 numbers:3 numbers:4" # speed "1 1.5 2 0.5"
```

Nous pouvons aussi utiliser

``` Haskell
speed
```

pour définir le pattern :

``` Haskell
d1 $ speed "1 2 4" # sound "jungbass:6"
```

``` Haskell
note
```

permet de modifier la hauteur du sample un demi-ton par demi-ton. 12
sera donc ici une octave.

``` Haskell
d1 $ up "0 ~ 12 24" # sound "jungbass:6"
```

<div class="mw-translate-fuzzy">

``` Haskell
Pan
```

permet de créer un effet stéréo : - 0 = son dans le moniteur gauche, 0.5
= son centré, 1 = son dans le moniteur droit.

</div>

``` Haskell
d1 $ sound "numbers:1 numbers:2 numbers:3 numbers:4" # pan "0 0.5 1"
```

``` Haskell
shape
```

ajoute de la distorsion. Attention, cela augmente drastiquement le
volume.

``` Haskell
d1 $ sound "kurt:4 kurt:4" # shape "0 0.78" # gain "0.7"
```

## Êtes-vous courageux ?

<div class="mw-translate-fuzzy">

Essayez plus d'effets : <http://tidalcycles.org/patterns.html#effects>

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

/ syntaxhighlight lang="Haskell" inline&gt;cutoff

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

## Patterns continus

``` Haskell
sine
```

est un pattern continu qui suit les valeurs d'une oscillation
sinusoïdale de 0 à 1, et de 1 à 0, etc..

``` Haskell
d1 $ sound "bd*32" # gain sine
```

Vous pouvez aussi essayer

``` Haskell
tri
```

,

``` Haskell
saw
```

et

``` Haskell
rand
```

.
