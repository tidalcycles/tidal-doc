---
title: Controller Input/fr
permalink: wiki/Controller_Input/fr/
layout: wiki
tags:
 - Reference
 - Tidal-1+
---

<languages/>

Tidal 1.0.0 vous permet de contrôler le code directement à l'aide d'un
contrôleur. Voici quelques explications rapides pour mettre en place le
système. Nous avons inclus un petit outil qui permet de mettre en place
le système.

# Open Sound Control

Si vous souhaitez faire entrer du MIDI dans Tidal, vous pouvez sauter la
section suivante.

Si la dernière version de Tidal est installée (\> 1.0.0), Tidal écoute
automatiquement les messages reçus par OSC (Open Sound Control), sur le
`localhost` (127.0.0.1), port 6010.

Vous pouvez changer cette configuration : écouter une autre interface,
changer le port, etc :

``` haskell
tidal <- startTidal superdirtTarget (defaultConfig {cCtrlAddr = "0.0.0.0", cCtrlPort = 6060})
```

Si vous souhaitez empêcher Tidal d'écouter les messages entrants,
utilisez cette ligne :

``` haskell
tidal <- startTidal superdirtTarget (defaultConfig {cCtrlListen = False})
```

Les messages OSC attendus par Tidal ont un nom de chemin particulier :

    /ctrl

, suivi de deux valeurs, la clé correspondant au contrôle et sa valeur
effective. La clé peut être sous forme textuelle ou numérique. La valeur
peut être un `float`, un `int` ou une `string`. Exemple de message :

    /ctrl sf hello 0.4

. Dans cet exemple, `sf` est un `typetag`. Il spécifie que la première
value est une `string` et que la seconde valeur est un `float`.
Consultez [la documentation OSC](http://opensoundcontrol.org/spec-1_0)
pour en apprendre plus.

Vous pouvez utiliser un message pour contrôler un pattern :

``` haskell
d1 $ sound "bd" # speed (cF 1 "hello")
```

``` haskell
cF
```

est utilisé pour les messages de type `float`. Le second paramètre `1`
est la valeur par défaut, utilisée lorsque Tidal n'a pas encore reçu de
contrôle. Il existe également

``` haskell
cS
```

pour les `string` et

``` haskell
cI
```

pour les `int`. Pour des valeurs qui évoluent dans le temps, utilisez

``` haskell
cT
```

. Pour des ratios, utilisez

``` haskell
cR
```

.

# MIDI

Si vous utilisez le MIDI, vous n'aurez pas à vous soucier de la section
précedente. Vous aurez besoin de quelque chose qui convertira le MIDI en
OSC. Voici comment procéder en utilisant SuperCollider. Avec Atom et
SuperCollider lancés, évaluez la ligne suivante dans SuperCollider :

    // Ce bloc mappe les contrôles MIDI en OSC.
    (
    var on, off, cc;
    var osc;

    osc = NetAddr.new("127.0.0.1", 6010);

    MIDIClient.init;
    MIDIIn.connectAll;

    on = MIDIFunc.noteOn({ |val, num, chan, src|
        osc.sendMsg("/ctrl", num.asString, val/127);
    });

    off = MIDIFunc.noteOff({ |val, num, chan, src|
        osc.sendMsg("/ctrl", num.asString, 0);
    });

    cc = MIDIFunc.cc({ |val, num, chan, src|
        osc.sendMsg("/ctrl", num.asString, val/127);
    });

    if (~stopMidiToOsc != nil, {
        ~stopMidiToOsc.value;
    });

    ~stopMidiToOsc = {
        on.free;
        off.free;
        cc.free;
    };
    )

    // Evaluez cette ligne pour tout arrêter.
    ~stopMidiToOsc.value;

Vous devriez pouvoir jouer avec un pattern qui utilise le paramètre CC
12 :

    d1 $ sound "bd" # speed (cF 1 "12")

Si vous souhaitez utiliser le MIDI pour créer un pattern, vous aurez
besoin de [ le segmenter](segment "wikilink"), puisque les valeurs
entrantes sont généralement en très haute résolution. Cet exemple ne
sélectionne qu'une valeur par cycle, et l'applique à l'aide de la
fonction `range` :

    d1 $ sound "amencutup" + n (run (segment 1 $ range 1 16 $ cF 0 "32" ))

## Alternative : Pure Data

Les instructions pour SuperCollider sont utiles si vous utilisez
SuperDirt, mais Pure Data fonctionne tout aussi bien pour convertir du
MIDI en OSC. Vous pouvez télécharger Pure Data [https://puredata.info/ à
cette adresse](https://puredata.info/_à_cette_adresse "wikilink"). Nous
recommandons la version 'vanilla'.

Téléchargez ensuite le fichier suivant :
[lien](https://raw.githubusercontent.com/tidalcycles/Tidal/master/pd/midi-osc-bridge.pd).

Démarrez Tidal et lancez le fichier que vous venez de télécharger.
Configurez votre MIDI dans Pure Data et tout devrait fonctionner.
