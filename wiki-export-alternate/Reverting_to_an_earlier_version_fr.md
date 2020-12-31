---
title: Reverting to an earlier version/fr
permalink: wiki/Reverting_to_an_earlier_version/fr/
layout: wiki
---

<languages/> Pour revenir à une version antérieure de Tidal, utilisez la
commande

``` bash
ghc-pkg
```

. Par exemple :

``` bash
ghc-pkg list tidal
```

Cette ligne va lister toutes les versions installées. S'il y en a plus
d'une, la plus récente sera utilisée.

Pour désinstaller une version, vous pouvez taper :

``` bash
ghc-pkg unregister tidal-1.0.6
```

Faites cela pour chaque version jusqu'à ce que la plus récente soit
celle que vous désirez.

Si vous ne possédez pas la version que vous souhaitez, vous pouvez taper
la ligne suivante :

``` bash
cabal install tidal-0.9.10
```

# Atom

Vous aurez besoin d'installer une version antérieure du package atom,
qui correspond à votre version. Vous pouvez également faire cela depuis
le terminal. Pour installer une version compatible avec Tidal 0.9.x,
faites :

``` bash
apm install tidalcycles@0.12.1
```
