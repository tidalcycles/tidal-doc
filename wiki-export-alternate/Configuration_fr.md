---
title: Configuration/fr
permalink: wiki/Configuration/fr/
layout: wiki
tags:
 - Tidal-1+
 - Reference
---

<languages/>

Pour configurer Tidal, vous aurez besoin d'éditer le code de la séquence
de lancement dans votre éditeur favori.

Vous pouvez télécharger une version du `startup code` en suivant [ ce
lien](https://github.com/tidalcycles/Tidal/blob/master/BootTidal.hs "wikilink").

Sauvegardez-le quelque part. Si vous utilisez Atom, renseignez le chemin
de destination vers le fichier dans les options. Vous pouvez ensuite
éditer le fichier pour configurer Tidal.

# Latence

Il existe deux options permettant de configurer la latence :

1.  `frame timespan`
2.  `latency`

Pour connaître la latence maximale, additionnez ces deux valeurs. Voici
un exemple de configuration :

    tidal <- startTidal (superdirtTarget {oLatency = 0.02}) (defaultConfig {cFrameTimespan = 1/20})

## Frame timespan

Il s'agit de la fenêtre de calcul de Tidal exprimée en secondes. Le
paramètre par défaut est 0.05, soit 20 frames par seconde.

Si vous trouvez que Tidal utilise trop de CPU, augmenter cette valeur
vous sera utile.

## Latence

Si vous recevez beaucoup de `late messages` dans SuperCollider, vous
pouvez augmenter la latence (la valeur par défaut est de 0.02).

# SuperDirt sur un autre hôte

Si vous utilisez SuperDirt sur un autre hôte (en réseau ou configuration
multi-utilisateur), vous aurez besoin de définir la latence. Cette
fois-ci, le paramètre dont vous aurez besoin s'appelle `oAddress`.

``` Haskell
tidal <- startTidal (superdirtTarget {oAddress = "192.168.0.23", oPort = 57120}) defaultConfig
```

Si vous avez besoin de définir la valeur pour plusieurs hôtes SuperDirt,
séparez les par un point : (

    {oAddress = "1.2.3.4", oLatency = 0.04}

).

Notez que pour Emacs (et très certainement pour d'autres éditeurs), vous
aurez besoin d'une 'escape sequence'.

Vous aurez à configurer SuperDirt pour recevoir des messages en
provenance d'un autre hôte. Par exemple, en démarrant Tidal avec la
configuration suivante, vous lui donnerez pour ordre d'écouter tout les
messages OSC sur une adresse particulière :

    ~dirt.start(57120, [0, 0], NetAddr("0.0.0.0"));
