---
title: Translations:Separate audio outputs/12/fr
permalink: wiki/Translations:Separate_audio_outputs/12/fr/
layout: wiki
---

Le fichier `BootTidal.hs` de votre éditeur de code envoie
automatiquement `d1` sur l'`orbit` 0, `d2` sur l'`orbit` 1, etc... Vous
pouvez définir explicitement quel `orbit` utiliser :

    d1 $ sound "bd" # orbit 3

.
