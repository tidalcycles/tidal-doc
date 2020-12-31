---
title: Custom OSC - pre 1.5.0/fr
permalink: wiki/Custom_OSC_-_pre_1.5.0/fr/
layout: wiki
---

<languages/> *Une version de Tidal supérieure à la 1.0.6 est
nécessaire.*

Il est possible de définir vos propres messages OSC (Open Sound
Control), pour atteindre des logiciels autres que SuperDirt ou Dirt.
Voici quelques exemples :

      customTarget = OSCTarget {oName = "MyStrangeSoftware", -- Give your target a name
                                oAddress = "127.0.0.1", -- the target network address
                                oPort = 5050, -- the target network port
                                oPath = "/trigger/something", -- the OSC path
                                oShape = Nothing, -- The 'shape' - see below
                                oLatency = 0.02, -- the latency (to smooth network jitter)
                                oPreamble = [], -- Some fixed data to put at the start of messages
                                oTimestamp = BundleStamp -- The style of timestamp
                               }

      anotherTarget :: OSCTarget
      anotherTarget = OSCTarget {oName = "Another one",
                                 oAddress = "127.0.0.1",
                                 oPort = 7771,
                                 oPath = "/play",
                                 oShape = Just [("note", Nothing),
                                                ("distortion", Just $ VF 0),
                                                ("loops", Just $ VI 1),
                                                ("vowel", Just $ VS "a"),
                                                ("sec", Just $ VI 0),
                                                ("usec", Just $ VI 0)
                                          ],
                                 oLatency = 0.02,
                                 oPreamble = [],
                                 oTimestamp = MessageStamp
                                }

Dans le premier exemple ci-dessus,

    BundleStamp

permet l'envoi 'ahead of time in batches' d'un message, à la vitesse
définie par le

    cFrameTimespan

défini dans la configuration de Tidal. Chaque message OSC sera placé
dans un lot de messages avec une signature temporelle. Ce sera au client
qui reçoit le message de scheduler le message correctement.

Le second exemple privilégie plutôt

    MessageStamp

, qui est similaire. Au lieu de placer le message dans un lot, la
signature temporelle est définie par deux entiers (`sec` et `usec`), à
savoir le nombre de secondes et de micro-secondes depuis l'epoch UNIX.

Notez que le premier exemple n'utilise pas un `oShape`. Cela signifie
que Tidal enverra n'importe quel paramètre spécifié dans un pattern.
Tidal enverra n'importe quel paramètre nommé dans votre code ; le
paramètre sera précédé de son nom, représenté par une `string`.

Le second exemple utilise un `oshape`, une liste de noms et de valeurs
par défaut. Notez que le paramètre de contrôle `s` ne possède pas de
valeur par défaut. Cela signifie que les messages OSC ne seront pas
envoyés tant que `s` ne sera pas défini.

# Cibles

Une fois que vous aurez défini une cible, vous pourrez lui adresser un
message de cette manière :

    tidal <- startTidal customTarget defaultConfig

    let p = streamReplace tidal

    p 1 $ s "bd sn" # vowel "a"

Si vous souhaitez envoyer un message à plusieurs cibles simultanément,
vous pouvez faire :

    tidal <- startMulti [customTarget, anotherTarget] defaultConfig

    let p = streamReplace tidal

    p 1 $ s "bd sn" # vowel "a"

Consultez la page
[BootTidal.hs](https://github.com/tidalcycles/Tidal/blob/master/BootTidal.hs)
pour observer comment sont structurées les fonctions pour interargir
avec Tidal.

## Exemples avec FAUST

Utilisons
l'[exemple](https://faust.grame.fr/doc/manual/index.html#simple-example)
du générateur de bruit issu du manuel à l'aide de Tidal Cycles. Faites
attention, un bruit particulièrement fort peut causer des dommages à vos
oreilles et à vos hauts parleurs. Compilez le code comme expliqué dans
le manuel, afin que le générateur de bruit écoute les messages OSC
entrant sur le portè 5510. Le code correspondant pour Tidal est le
suivant :

    OSCTarget {oName = "Noise", oAddress = "127.0.0.1", oPort = 5510,
      oPath = "/noise/level", oShape = Just [("level", Just $ VF 0)],
      oLatency = 0.02, oPreamble = [], oTimestamp = MessageStamp}

In the second line the OSC message is defined.

Pour utiliser le paramètre `level`, définissez :

    let level = pF "level"

Si vous faites

    d1 $ level "0.5 1 --let the level jump between -6 and 0 dBFS

, le résultat OSC équivalent sera :

    $ oscsend localhost 5510 "/noise/level" f 0.5
    $ sleep 1
    $ oscsend localhost 5510 "/noise/level" f 1

en ligne de commande.

# Débogage

Il peut être utile d'utiliser [wireshark \|
Wireshark](https://www.wireshark.org/). Vous pouvez filtrer les messages
OSC dans le champ de recherche. Si vous cliquez sur un paquet OSC, vous
trouverez une représentation bien formatée de votre message OSC.
