---
title: MIDI Clock/fr
permalink: wiki/MIDI_Clock/fr/
layout: wiki
---

<languages/> Après avoir configuré [ SuperDirt
MIDI](/wiki/SuperDirt_MIDI_Tutorial "wikilink"), il sera très simple d'émettre
une horloge MIDI. Cette fonctionnalité est toujours en développement, et
sera simplifiée dans les prochaines versions.

Pour commencer, vous pouvez envoyer un certain nombre de messages
horloge, par exemple, 48 par cycle :

    p "midiclock" $ midicmd "midiClock*48" # s "midi"

Votre machine MIDI devrait dès lors s'ajuster au [cps](cps "wikilink")
de Tidal. Notez qu'il est utile d'envoyer un message `stop` :

    once $ midicmd "stop" # s "midi" 

Finalement, vous souhaiterez peut-être envoyer un message `start` au bon
moment. La ligne suivante permet de lancer un nouveau message tout les
quatre cycles :

    p "midictl" $ midicmd "start/4" # s "midi" 

Une fois que tout est synchronisé, il est préférable de stopper l'envoi
des messages `start` pour éviter les bugs et les glitchs :

    p "midictl" $ silence

Toutefois, si vous utilisez `hush`, l'horloge MIDI s'arrêtera, ainsi que
tout les autres patterns. Pour éviter cela, vous souhaiterez peut-être
réécrire la fonction `hush` pour qu'elle ne stoppe que certains patterns
particuliers :

    let hush = mapM_ ($ silence) [d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,d14,d15,d16]

Parfois, les pulsations ont du mal à s'aligner entre SuperDirt et vos
machines MIDI. Commencez par mettre la latence à 0 dans SuperCollider :

    ~midiOut.latency = 0;

Assurez-vous que la latence de votre machine est également à 0, puis
ajustez le système progressivement, jusqu'à alignement. Si tout reste
synchronisé lorsque vous changez le `cps`, tout est bon !
