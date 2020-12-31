---
title: MacOS installation/es
permalink: wiki/MacOS_installation/es/
layout: wiki
---

<languages />

<div class="mw-translate-fuzzy">

# Instalación automática con TidalBootstrap

</div>

For an easy, hands-off install, try
[tidal-bootstrap](https://github.com/tidalcycles/tidal-bootstrap/blob/master/README.md)
instead of the manual instructions below.

# Instalación manual

# Prerequisitos

# Recursos previos necesarios:

Antes de instalar Tidal, asegurate que los siguientes estén instalados.

<div class="mw-translate-fuzzy">

-   [Haskell Platform](https://www.haskell.org/platform/) - **se
    recomienda la versión completa**.
-   [Atom Editor](https://atom.io/) (si no te gusta el editor de atom
    por alguna razón, por favor revisá la [lista de
    alternativas](/wiki/List_of_tidal_editors "wikilink"))
-   [SuperCollider](http://supercollider.github.io/download) (la última
    versión)
-   [Git](https://git-scm.com/)

</div>

## Recursos Previos Opcionales

<div class="mw-translate-fuzzy">

Lo siguiente es opcional, pero recomendado:

</div>

-   [SC3 Plugins](https://supercollider.github.io/sc3-plugins/) - vas a
    necesitar los plugins sc3 si querés usar alguno de los
    sintetizadores incluidos en SuperDirt. La mayoría de los ejemplos en
    la documentación van a funcionar, así que podes saltear este paso y
    volver luego.

# Instalar TidalCycles

<div class="mw-translate-fuzzy">

Desde una terminal, escribí y ejecutá los siguientes comandos (ignorando
cualquier queja alrededor de que cabal tiene un "legado v1 de estilo de
uso"):

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

# Instalar SuperDirt

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

# Instalar la extensión de Atom.

<div class="mw-translate-fuzzy">

Abrí Atom, instalá el plugin para TidalCycles. Podes encontrarlo en el
menú edit \> settings \> install, después escribí “tidalcycles” en la
caja de búsqueda. Una vez que se instaló, reiniciá Atom.

</div>

Once it's installed, you'll need to change the "ghci path" setting for
the tidalcycles package to the following:

    ~/.ghcup/bin/ghci

Once that’s all installed and configured, restart atom.

## Install VS Code Extension

Start VS Code, and install the TidalCycles extension by searching the
extensions marketplace. You can follow the instructions from
[here](https://marketplace.visualstudio.com/items?itemName=tidalcycles.vscode-tidalcycles)
to ensure you know how to use it correctly.

# Probá tu instalación.

Ahora podes intentár [Iniciar TidalCycles y SuperDirt por primera
vez](/wiki/Start_tidalcycles_and_superdirt_for_the_first_time "wikilink").
