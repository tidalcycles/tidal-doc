---
title: Troubleshooting a Tidal install/fr
permalink: wiki/Troubleshooting_a_Tidal_install/fr/
layout: wiki
---

<langages/> Si vous ne parvenez pas à faire fonctionner Tidal après
avoir suivi toutes les étapes de l'installation, voici quelques étapes
qui vous permettront de comprendre quel est le problème :

# Haskell

Ouvrez un terminal et entrez la commande suivante :

`  ghci`

Vous devriez voir :

` GHCi, version 8.6.3: `[`http://www.haskell.org/ghc/`](http://www.haskell.org/ghc/)`  :? for help`  
` Prelude> `

Si ce n'est pas le cas, il vous faut installer Haskell. Si Haskell est
installé mais que le numéro de version diffère, ne vous en faites pas !
Au moment où ces lignes sont écrites, Tidal a été testé sur toutes les
versions antérieures à la 7.10.3.

# Bibliothèque Tidal

Gardez votre prompt ghci ouvert et tapez (ou collez) :

` import Sound.Tidal.Context`

Vous devriez voir :

` GHCi, version 8.6.3: `[`http://www.haskell.org/ghc/`](http://www.haskell.org/ghc/)`  :? for help`  
` Prelude> import Sound.Tidal.Context`  
` Prelude Sound.Tidal.Context> `

Si vous apercevez un message d'erreur du type :

` `<no location info>`: error:`  
`   Could not find module ‘Sound.Tidal.Context’`

Cela signifie que la bibliothèque Tidal n'est pas installée. Pour
l'installer, ouvrez un nouveau terminal et tapez :

` cabal update`  
` cabal new-install tidal --lib`

Si vous voyez un message d'erreur (ignorons les messages à propos de
'legacy v1 style'), assurez-vous d'avoir bien installé l'intégralité de
la plateforme Haskell et réessayez. Si cela ne fonctionne toujours pas,
venez détailler votre message d'erreur et demander de l'aide à la [
communauté](/wiki/Community "wikilink").

# SuperCollider / SuperDirt

Démarrez SuperCollider et tapez la commande suivante :

` SuperDirt.start`

En gardant le curseur sur la même ligne, pressez les touches
Shift+Entrée.

Vous devriez apercevoir dans la console un message indiquant le
chargement des samples, et éventuellement le message suivant :

` SuperDirt: listening to Tidal on port 57120`

Si vous apercevez un message d'erreur du type :

## ERROR: Class not defined.

Si vous voyez :

` ERROR: Class not defined.`

Cela signifie que SuperDirt n'est pas installé. Installez-le en tapant
la commande suivante :

` include("SuperDirt")`

Si l'installation ne fonctionne pas, assurez-vous de posséder la
commande `git`. Pour ce faire, tapez `git --version` dans un terminal.
Si la commande n'est pas disponible, installez Git. Une fois que c'est
fait, vous devriez pouvoir tenter à nouveau l'installation.

Redémarrer SuperCollider fonctionne parfois pour les utilisateurs qui
viennent tout juste de l'installer.

## Could not bind to requested port

Si vous voyez l'erreur suivante :

` Could not bind to requested port. This may mean it is in use already by another application.`  
` ERROR: Could not open UDP port 57120`

Cela signifie que des processus zombies de SuperCollider tournent déjà,
bloquant les ports. Quittez SuperCollider et tuez les processus `sclang`
et `scserver` dans votre gestionnaire de tâches. Si cela ne fonctionne
toujours pas, redémarrez votre ordinateur.

# Problèmes de compilation

Les problèmes surviennent souvent lors de l'installation de la
bibliothèque Haskell de Tidal. Lorsque cela survient, votre installation
est en partie fautive.

``` shell
cabal update
cabal new-install tidal --lib
```

## ghc-pkg recache

Si des packages `cabal` ne parviennent pas à se compiler, cette ligne
peut aider :

``` shell
sudo ghc-pkg recache
cabal update
cabal new-install tidal --lib
```

## Version de Haskell

Bien souvent, installer la version complète de la plateforme Haskell
règlera tout vos problèmes. Vous pouvez l'obtenir en suivant ce lien :
<https://www.haskell.org/platform/>

# Sons manquants

Si tout fonctionne, mais que vous n'entendez aucun son : il y a
probablement eu un problème lors du téléchargement de la très large
librairie de sons par défaut de Tidal.

Vous pouvez résoudre le problème en trouvant le dossier `Dirt-samples` à
l'aide des menus de SuperCollider. Par le biais du menu, ouvrez le 'user
supported directory'. Cliquez sur 'downloaded-quarks' puis sur
'Dirt-Samples'. Plusieurs dossiers seront peut-être vides. Vous pouvez
télécharger les samples manquants en suivant ce lien : [ Dirt
Samples](https://github.com/musikinformatik/Dirt-Samples "wikilink").

Remplacez les dossiers manquants.

# Installation à partir de 'stack'

Si vous rencontrez problèmes sur problèmes en installant Tidal à partir
de `cabal`, l'installation à partir de `stack` résoudra vos problèmes.

Tapez la commande suivante dans votre terminal :

``` bash
stack install tidal
```

Vous n'aurez qu'à spécifier l'emplacement de votre installation stack
dans Atom. Remplacez la `ghci path` par

    stack exec --package tidal -- ghci

. Relancez Atom et tout devrait fonctionner.
