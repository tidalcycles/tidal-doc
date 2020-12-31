---
title: SuperDirt MIDI Tutorial/fr
permalink: wiki/SuperDirt_MIDI_Tutorial/fr/
layout: wiki
---

<languages/>

# Prérequis

Une version récente de Tidal et de SuperDirt doit être installée :

-   Mettez à jour votre Tidal (vous devez posséder une version
    supérieure à la 0.9.0).
-   Assurez vous de posséder le quark le plus récent de SuperDirt.
    Désinstaller SuperDirt et le réinstaller est la solution la plus
    commode. Voir [ cette
    page](https://github.com/supercollider-quarks/quarks "wikilink").

# Utilisation

Pour commencer, vous aurez besoin de Supercollider. Lancez SuperDirt
comme d'habitude, puis évaluez la ligne suivante :

    MIDIClient.init;

Vous devriez voir une liste de toutes les entrées et sorties MIDI de
votre système. Cela devrait ressembler à ça :

    MIDI Sources:
        MIDIEndPoint("LoopBe Internal MIDI", "LoopBe Internal MIDI")
        MIDIEndPoint("Focusrite USB MIDI", "Focusrite USB MIDI")
    MIDI Destinations:
        MIDIEndPoint("Microsoft GS Wavetable Synth", "Microsoft GS Wavetable Synth")
        MIDIEndPoint("LoopBe Internal MIDI", "LoopBe Internal MIDI")
        MIDIEndPoint("Focusrite USB MIDI", "Focusrite USB MIDI")

Prenez note que chaque interface MIDI est composée de deux noms
complémentaires. Vous aurez besoin des deux pour vous connecter en MIDI.
Evaluez la ligne suivante :

    ~midiOut = MIDIOut.newByName("Focusrite USB MIDI", "Focusrite USB MIDI"); // votre sortie MIDI

Nous avons stocké une référence à la sortie MIDI souhaitée dans la
variable : `~midiOut`.

Pour finir, vous aurez besoin de déclarer un nouveau synthétiseur MIDI
que Tidal peut reconnaître. Nous avons fait le choix de l'appeler `midi`
:

    ~dirt.soundLibrary.addMIDI(\midi, ~midiOut);

Si vous le souhaitez, il est possible de régler la latence :

    ~midiOut.latency = 0.45;

C'est tout ! Vous devriez avoir un synthétiseur MIDI connecté à Tidal
dans SuperDirt, nommé `midi`.

# Utilisation dans Tidal

## Patterns de note

Nous allons maintenant écrire quelques patterns pour contrôler notre
synthétiseur. Envoyons une suite de notes :

    d1 $ n "0 2 4 7" # s "midi"

Cela devrait jouer un pattern de quatre notes. Notez que vous utilisez
le synthétiseur `midi` pour envoyer des notes MIDI.

Vous pouvez utiliser la notation habituelle :

    d1 $ n "c4 d4 e5 g3" # s "midi"

## Canaux MIDI

Le canal par défaut est le canal MIDI 1. SuperDirt commence à les
indexer à partir de 0. Le premier canal est donc : `midichan 0`.

    d1 $ note "0 2 4 7" # s "midi" # midichan 0

Si votre synthétiseur écoute un canal différent, le canal 5 par exemple,
vous utiliseriez la commande `midichan 4`.

    d1 $ note "0 2 4 7" # s "midi" # midichan 4

Notez que `midichan` accepte également des patterns de nombres. Vous
pouvez utiliser cela pour répartir vos notes sur différents canaux :

    d1 $ note "0 2 4 7" # s "midi" # midichan "0 4"

Le pattern ci-dessus joue les notes 0 et 2 sur le canal 1 et les notes 4
et 7 sur le canal 5.

## Paramètres CC

Pour envoyer un paramètre CC à votre synthétiseur, vous utiliserez un
autre pattern TIdal. Pour créer ce type de patterns, vous utiliserez
deux nouveaux paramètres SuperDirt MIDI :

-   `ccn` - le numéro attribué au contrôle désiré : `ccn 30`
-   `ccv` - la valeur que vous souhaitez assigner à votre paramètre, sur
    une échelle de 0 à 127 : `ccv 64`

Voici un exemple complet, qui envoie une valeur de 64 sur le paramètre
30 :

    d2 $ ccv 64 # ccn 30 # s "midi"

Vous pouvez spécifier le canal MIDI à l'aide de `midichan`.

    d2 $ ccv 64 # ccn 30 # s "midi" # midichan 4

Vous pouvez créer des patterns de paramètres CC :

    d2 $ ccv "20 40 60 80 100" # ccn 30 # s "midi"

    d2 $ ccn "30*4" # ccv (range 20 100 $ slow 30 sine) # s "midi"

Notez que le pattern le plus à gauche définit le rythme.

Si vous souhaitez utiliser un paramètre spécial de votre synthétiseur,
qui écoute sur un numéro CC particulier, vous pouvez le nommer pour le
reconnaître plus facilement :

    let ringMod = 30
    d2 $ ccv "0 20 50 60" # ccn ringMod # s "midi"

Si vous désirez contrôler plusieurs paramètres CC en même temps, vous
pouvez utiliser `stack` pour ce faire :

    d2 $ density 8 $ stack [
      ccn 30 # ccv (range 0 127 $ slow 30 sine),
      ccn 31 # ccv "[0 70 30 110]/3",
      ccn 32 # ccv 10 
      ] # s "midi"

# Horloge MIDI

Consultez [ cette page](/wiki/MIDI_Clock "wikilink") pour plus d'informations.
