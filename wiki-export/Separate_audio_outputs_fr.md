---
title: Separate audio outputs/fr
permalink: wiki/Separate_audio_outputs/fr/
layout: wiki
tags:
 - Reference
---

<languages/>

# Comment enregistrer sur plusieurs pistes audio ?

Imaginons que vous souhaitiez réaliser un enregistrement multi-piste,
avec plusieurs patterns simultanés, chacun enregistré sur une piste
différente. Imaginons que vous souhaitez router l'audio de vos patterns
dans plusieurs processeurs d'effets externes. Comment faire ?

Le système audio de Tidal est par défaut SuperDirt. Pour router les
sorties audio, il est nécessaire de comprendre comment configurer et
utiliser les `orbits`. Un `orbit` est une sortie audio, avec sa propre
configuration d'effets (par défaut, une reverb et un délai).

Regardons la [documentation de
SuperDirt](https://github.com/musikinformatik/SuperDirt), et en
particulier l'exemple suivant :
[superdirt_startup.scd](https://github.com/musikinformatik/SuperDirt/blob/develop/superdirt_startup.scd).
Collez le code dans votre éditeur, ou sauvegardez-le comme
`startup file` si vous souhaitez l'utiliser à chaque ouverture de
SuperCollider.

Vous n'aurez besoin de changer que deux éléments. Si vous souhaitez six
sorties stéréo, vous aurez besoin de 12 canaux au total. Changez le
nombre de sorties audio :

`s.options.numOutputBusChannels = 12;`

Vous pouvez assigner vos `orbits` pour séparer les sorties audio.
Comptez deux pistes par `orbit` :

`~dirt.start(57120, [0, 2, 4, 6, 8, 10]);`

Vous serez peut-être tentés de changer cette ligne :

`~dirt = SuperDirt(2, s);`

Toutefois, si vous travaillez en stéréo, vous devriez laisser le nombre
tel qu'il est.

Le fichier `BootTidal.hs` de votre éditeur de code envoie
automatiquement `d1` sur l'`orbit` 0, `d2` sur l'`orbit` 1, etc... Vous
pouvez définir explicitement quel `orbit` utiliser :

    d1 $ sound "bd" # orbit 3

.

Vous pouvez maintenant router l'audio vers n'importe quel logiciel pour
ajouter des effets ou enregistrer. Vous pouvez également enregistrer
tout les canaux directement depuis SuperCollider. Consultez le dossier
[SuperDirt
hacks](https://github.com/musikinformatik/SuperDirt/tree/master/hacks)
pour en apprendre plus.
