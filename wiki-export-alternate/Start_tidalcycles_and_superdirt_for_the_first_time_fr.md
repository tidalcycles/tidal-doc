---
title: Start tidalcycles and superdirt for the first time/fr
permalink: wiki/Start_tidalcycles_and_superdirt_for_the_first_time/fr/
layout: wiki
---

<languages /> Démarrer Tidal Cycles est un processus en deux étapes :

1.  Démarrer SuperCollider et lancer SuperDirt.
2.  Démarrer Tidal Cycles depuis votre éditeur de code.

# Démarrer SuperDirt depuis SuperCollider

Il existe deux manières de lancer SuperDirt :

1.  à l'aide de l'IDE de SuperCollider.
2.  en utilisant l'interpréteur `sclang` dans un terminal.

Pour les nouveaux utilisateurs, nous recommendons de passer par l'IDE.

## Utiliser l'IDE de SuperCollider

Pour démarrer SuperDirt, copiez et collez le code suivant dans l'éditeur
de texte de l'IDE :

`SuperDirt.start`

Cliquez ensuite sur le code et pressez les touches Shift + Entrée. La
console devrait vous avertir des étapes du lancement. Si tout se passe
bien, vous devriez voir :

`SuperDirt: listening to Tidal on port 57120`

### Démarrage automatique de SuperDirt dans l'IDE

Si vous souhaitez démarrer SuperDirt automatiquement lorsque vous
démarrez SuperCollider, ajoutez le code `SuperDirt.start` à votre
fichier de lancement. Vous le trouverez en cliquant sur Fichier -&gt;
Open Startup File. Si vous souhaitez utiliser une version comportant
plus d'options de lancement, [référez-vous à cet
exemple](https://github.com/musikinformatik/SuperDirt/blob/master/superdirt_startup.scd).

## En utilisant SuperCollider depuis le terminal

Vous pouvez lancer SuperDirt en utilisant
\[githubusercontent.com/musikinformatik/SuperDirt/develop/superdirt\_startup.scd
ce script de lancement\], simplement en tapant
`sclang superdirt_startup.scd` depuis votre terminal.

Dès que SuperDirt est lancé, vous devriez apercevoir la ligne suivante :

`SuperDirt: listening to Tidal on port 57120`

Le script de démarrage est extrêmement simple. Il vous permet d'utiliser
deux orbits (pistes d'effets) et charge les samples par défaut. Vous
souhaiterez certainement le configurer un peu plus, et ajouter quelques
orbits : [ Samples personnalisées](/wiki/Custom_Samples "wikilink").

# Démarrer Tidal Cycles depuis votre éditeur de texte

## Explications pour Emacs

Rendez-vous sur la page de [ l'installation pour
Linux](/wiki/Linux_installation "wikilink") pour installer le plugin Emacs, si
ce n'est pas déjà fait. Une fois que le plugin est installé, vous aurez
uniquement besoin d'un fichier `*.tidal` et du raccourci `C-c C-s` pour
lancer Tidal. Si tout se passe bien, vous devriez voir le résultat
apparaître dans une fenêtre différente.

Vous n'aurez désormais qu'à taper `C-return` pour évaluer tout ce qui se
trouve sous le curseur d'édition. Vous pouvez vérifier que tout
fonctionne bien en reproduisant l'exemple ci-dessous :

`d1 $ sound "bd sn"`

Vous devriez entendre une grosse caisse suivie d'une caisse claire.
Utilisez la commande suivante pour tout arrêter :

`hush`

## Instructions pour Atom

1.  Démarrez Atom
2.  Enregistrer un nouveau fichier au format `.tidal`.
3.  Ouvrez le menu des packages et sélectionnez TidalCycles -&gt; Boot
    Tidal Cycles. Une petite fenêtre s'ouvrira sous le code.

Essayez de jouer un pattern simple en pressant Shift+Entrée. Ctrl+Entrée
fonctionne également, et jouera plusieurs lignes.

`d1 $ sound "bd sn"`

Si vous entendez quelque chose, tout fonctionne !

Si vous rencontrez un problème, n'hésitez pas à poser des questions et à
décrire les erreurs que vous rencontrez sur le forum, ou sur le channel
\#tidal-install du [RocketChat](https://talk.lurk.org/channel/tidal).

Comme il est de coutume pour les logiciels libres, vous trouverez
plusieurs éditeurs alternatifs qui composeront votre système Tidal
Cycles. Atom et SuperDirt vous serviront peut-être toujours, mais
n'hésitez pas à essayer un autre éditeur de code.
