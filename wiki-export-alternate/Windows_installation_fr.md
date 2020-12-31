---
title: Windows installation/fr
permalink: wiki/Windows_installation/fr/
layout: wiki
---

# Easy install

For an easy, automated install experience, see the [Windows choco
install](/wiki/Windows_choco_install "wikilink").

# Manual install

If you prefer to install the different parts of a Tidal environment by
hand, perhaps because you already have supercollider or haskell
installed, then follow the below instructions.

<div class="mw-translate-fuzzy">

# Prérequis

</div>
<div class="mw-translate-fuzzy">

## Prérequis nécessaires

</div>

Avant d'installer Tidal, soyez sûr.e que les outils suivants sont
installés :

<div class="mw-translate-fuzzy">

-   Haskell Platform - *'la version complète (full version) est
    recommandée*, vous pouvez [télécharger la version 8.4.3
    ici](https://www.haskell.org/platform/download/8.4.3/HaskellPlatform-8.4.3-full-x86_64-setup.exe)
    de haskell (la version complète ne semble pas être disponible pour
    la denière version de haskell, mais vous [pouvez vérifier
    ici](https://www.haskell.org/platform/windows.html)).
-   [Éditeur Atom](https://atom.io/) (si vous n'aimez pas Atom, allez
    voir la [liste des alternatives](/wiki/List_of_tidal_editors "wikilink"))
-   [SuperCollider](http://supercollider.github.io/download) (choisissez
    la dernière version).
-   [Git](https://git-scm.com/)

</div>
<div class="mw-translate-fuzzy">

## Prérequis optionnels

</div>

Ce qui suit est optionnel, mais recommandé:

-   [SC3 Plugins](https://supercollider.github.io/sc3-plugins/) - vous
    aurez besoin des plugins sc3 de SuperCollider si vous voulez
    utiliser les synthétiseurs inclus dans SuperDirt. La plupart des
    exemples dans la documentation vont fonctionner, donc vous pouvez
    passer cette étape et revenir plus tard.

<div class="mw-translate-fuzzy">

# Installer TidalCycles

</div>
<div class="mw-translate-fuzzy">

Ouvrez un Invite de Commande (ou Powershell), puis tapez et lancez ces
deux commandes "(en ignorant le message 'legacy v1 style of usage' de
cabal)":

</div>
<div class="mw-translate-fuzzy">

cabal update

`cabal install tidal`

</div>
<div class="mw-translate-fuzzy">

Si vous n'avez jamais installé TidalCycles avant, alors la commande
`cabal install tidal` risque de prendre un peu de temps. À la fin de la
sortie de commande, il devrait être affiché `Installed tdal-x.x.x` (où
x.x.x est le dernier numéro de version) sans erreurs.

</div>

If you see an error with the network library, then you need to fix
something with your Haskell install. You can [find instructions
here](https://forum.toplap.org/t/trouble-launching-tidal-in-atom/678/3).

<div class="mw-translate-fuzzy">

# Installer SuperDirt

</div>

Démarrez SuperCollider, et dans la fenêtre de l'éditeur, tapez la ligne
de code suivante:

<div class="mw-translate-fuzzy">

Quarks.checkForUpdates(); Quarks.install("SuperDirt", "v1.0")

</div>
<div class="mw-translate-fuzzy">

Lancez le code en cliquant dessus, pour être sûr que le curseur est sur
la bonne ligne, puis maintenez Shift and appuyez sur Entrée. Cela va
lancer le téléchargement de SuperDirt et vous verrez affiché le message
suivant dans la fenêtre Post Display quand l'installation sera
complétée:

</div>
<div class="mw-translate-fuzzy">

... the class library may have to be recompiled.

`-> SuperDirt`

</div>

``` plaintext
Installing SuperDirt
Installing Vowel
Vowel installed
Installing Dirt-Samples
Dirt-Samples installed
SuperDirt installed
compiling class library...
...
(then some blah blah, and finally, something like:)
...

*** Welcome to SuperCollider 3.10.0. *** For help press Ctrl-D.
```

<div class="mw-translate-fuzzy">

# Installer l'extension Atom

</div>

Lancez Atom, et installez le plugin Tidal Cycles. Vous pouvez le trouver
dans les menus edit &gt; settings &gt; install, puis en tapant
tidalcycles dans le champ de recherche. Une fois le plugin installé,
redémarrez Atom.

<div class="mw-translate-fuzzy">

# Testez votre installation

</div>

Vous êtes désormais prêt.e à [démarrer Tidal Cycles et SuperDirt pour la
première
fois](/wiki/Start_tidalcycles_and_superdirt_for_the_first_time "wikilink").
