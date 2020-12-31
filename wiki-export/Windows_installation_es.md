---
title: Windows installation/es
permalink: wiki/Windows_installation/es/
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

# Prerequisitos

</div>
<div class="mw-translate-fuzzy">

## Recursos previos necesarios.

</div>

Antes de instalar Tidal, asegurate que los siguientes estén instalados.

<div class="mw-translate-fuzzy">

-   Haskell Platform - **se recomienda la versión completa**, podés
    [descargar la versión
    8.3.4](https://www.haskell.org/platform/download/8.4.3/HaskellPlatform-8.4.3-full-x86_64-setup.exe)
    de haskell aquí (la plataforma completa parece no estar disponible
    para la ultima versión de haskell, pero podés [encontrarla
    aquí](https://www.haskell.org/platform/windows.html)).
-   [Editor Atom](https://atom.io/) (si no te gusta el editor de atom
    por algún motivo aquí hay una [lista de
    alternativas](/wiki/List_of_tidal_editors "wikilink"))
-   [SuperCollider](http://supercollider.github.io/download) (la ultima
    versión)
-   [Git](https://git-scm.com/)

</div>
<div class="mw-translate-fuzzy">

## Recursos Previos Opcionales

</div>

Lo siguiente es opcional, pero recomendado:

-   [SC3 Plugins](https://supercollider.github.io/sc3-plugins/) - vas a
    necesitar los plugins sc3 si querés usar alguno de los
    sintetizadores incluidos en SuperDirt. La mayoría de los ejemplos en
    la documentación van a funcionar, así que podes saltear este paso y
    volver luego.

<div class="mw-translate-fuzzy">

# Instalar TidalCycles

</div>
<div class="mw-translate-fuzzy">

Abrí una terminal (o PowerShell). Luego escribí y ejecutá los siguientes
comandos (ignorando cualquier queja alrededor de que cabal tiene un
"legado v1 de estilo de uso"):

</div>
<div class="mw-translate-fuzzy">

cabal update

`cabal install tidal`

</div>
<div class="mw-translate-fuzzy">

Si nunca instalaste TidalCycles antes, `cabal install tidal` puede
llegar a tardar bastante tiempo. Al terminar debería decír
`"Installed tidal-x.x.x"` (siendo x.x.x el numero de la última versión)
sin ningún error.

</div>

If you see an error with the network library, then you need to fix
something with your Haskell install. You can [find instructions
here](https://forum.toplap.org/t/trouble-launching-tidal-in-atom/678/3).

<div class="mw-translate-fuzzy">

# Instalar SuperDirt

</div>

En la ventana de edición de SuperCollider copiá y ejecutá la siguiente
línea de código:

<div class="mw-translate-fuzzy">

Quarks.checkForUpdates(); Quarks.install("SuperDirt", "v1.0")

</div>
<div class="mw-translate-fuzzy">

Corré el código haciendo clic en él, para asegurarte de que el cursor
está en esa línea, después apretá Shift y Enter. Esto va a descargar
SuperDirt y vas a poder ver que se completó la descarga cuando puedas
leer:

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

# Instalar la extensión de Atom.

</div>

Abrí Atom, instalá el plugin para TidalCycles. Podes encontrarlo en el
menú edit \> settings \> install, después escribí “tidalcycles” en la
caja de búsqueda. Una vez que se instaló, reiniciá Atom.

<div class="mw-translate-fuzzy">

# Probá tu instalación.

</div>

Ahora podes intentar [Start TidalCycles and SuperDirt for the first
time](/wiki/Start_tidalcycles_and_superdirt_for_the_first_time "wikilink").
