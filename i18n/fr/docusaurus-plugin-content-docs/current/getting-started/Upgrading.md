---
id: upgrading
title: Mise à jour
---

Pour évitez les problèmes, nous vous recommandons de mettre à jour les
trois composants qui forment Tidal Cycles en même temps :

1.  La bibliothèque Tidal.
2.  Le plugin de votre éditeur de code.
3.  Le synthétiseur SuperDirt.

# La bibliothèque Tidal Cycles

Pour mettre à jour Tidal, utilisez la commande suivante dans votre
terminal :

``` shell
cabal update
cabal install tidal
```

Vous pouvez vérifier votre version de Tidal en tapant la commande
suivante :

    ghc-pkg list tidal

SI vous voyez plus d'une version, ne vous en faites pas ! La version la
plus récente sera utilisée par défaut.

Pour retourner à une version antérieure, vous pouvez 'unregister' la
version la plus récente. Pour ce faire, tapez :

    ghc-pkg unregister tidal-1.4.0

# Plugin

Votre plugin est parfois désigné comme une "extension", parfois comme un
"package".

1.  Pour Atom : File &gt; Settings &gt; Packages &gt; cherchez
    TidalCycles.
2.  Pour VSCode : Extensions &gt; TidalCycles &gt; Update.

# SuperDirt

Pour mettre à jour SuperDirt, ouvrez SuperCollider, collez la commande
suivante et évaluez-là (Shift + Entrée) :

``` c
Quarks.update("SuperDirt")
```

Vous devrez recompiler la "class library". Pour ce faire, redémarrez
SuperCollider, ou utilisez "Recompile class library" dans le menu
"Language".
