---
title: Translations:Custom OSC - pre 1.5.0/6/fr
permalink: wiki/Translations:Custom_OSC_-_pre_1.5.0/6/fr/
layout: wiki
---

Dans le premier exemple ci-dessus,

    BundleStamp

permet l'envoi 'ahead of time in batches' d'un message, à la vitesse
définie par le

    cFrameTimespan

défini dans la configuration de Tidal. Chaque message OSC sera placé
dans un lot de messages avec une signature temporelle. Ce sera au client
qui reçoit le message de scheduler le message correctement.
