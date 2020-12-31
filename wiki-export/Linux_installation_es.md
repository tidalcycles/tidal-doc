---
title: Linux installation/es
permalink: wiki/Linux_installation/es/
layout: wiki
---

# Recursos previos necesarios:

Hay varias herramientas para instalar como parte del completo de tidal.

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
<div class="mw-translate-fuzzy">

Con suerte, tu distribución de linux tiene los pre-requisitos facilmente
accesibles vía el editor de paquetes. Por ejemplo, si estás usando la
versión más reciente de Ubuntu o similar, podés instalar Haskell con el
siguiente comando en la ventana de la terminal:

</div>
<div class="mw-translate-fuzzy">

sudo apt-get install build-essential cabal-install git

</div>
<div class="mw-translate-fuzzy">

Debería ser posible instalar SuperCollider mediante este método también

``` shell
supercollider sc3-plugins
```

. Sin embargo esto generalmente no funciona. Ya sea que la versión de
SuperCollider es muy vieja (SuperDirt necesita que sea al menos la
versión 3.7), o la versión de supercollider no coincide con los plugins
sc3. Si estas usando ubuntu, mint o una distribución similar, se
recomienda ignorar los paquetes de supercollider y compilarlo vos. Estos
scripts lo hacen fácil de hacer.

[`https://github.com/lvm/build-supercollider`](https://github.com/lvm/build-supercollider)

</div>

Simplemente copiá las cuatro líneas de comandos debajo de "How to?"
(ignorá la parte "the debian way")

Pre-requisitos Opcionales

Lo siguiente es opcional, pero recomendado:

-   [SC3 Plugins](https://supercollider.github.io/sc3-plugins/) - vas a
    necesitar los plugins sc3 si querés usar alguno de los
    sintetizadores incluidos en SuperDirt. La mayoría de los ejemplos en
    la documentación van a funcionar, así que podes saltear este paso y
    volver luego.

Instalar TidalCycles

Abrí una terminal. Si no sabés cómo abrir una ventana de terminal en
Linux, varía según la distribución, pero generalmente buscando
"Terminal" en el menú la encontrás. Luego escribí y ejecutá los
siguientes comandos (ignorando cualquier queja alrededor de que cabal
tiene un "legado v1 de estilo de uso"):

`cabal update`  
`cabal install tidal`

Si nunca instalaste TidalCycles antes, cabal install tidal puede llegar
a tardar bastante tiempo. Al terminar debería decír "Installed
tidal-x.x.x" (siendo x.x.x el numero de la última versión) sin ningún
error.

# Instalar SuperDirt

<div class="mw-translate-fuzzy">

TidalCycles está pensado para que corra sobre SuperDirt, así que
deberías correrlo primero para poder hacer sonido. Aquí está cómo
instalarlo:

</div>

En la ventana de edición de SuperCollider copiá y ejecutá la siguiente
línea de código.

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

## Usando SuperCollider en una terminal.

Podes instalarlo usando el interprete en la consola. Es posible que
desees familiarizarse con él si preferís usar tu propio editor de texto.
Hay muy buenos plugins para integrar SuperCollider con
[Emacs](https://github.com/supercollider/scel),
[Vim](https://github.com/supercollider/scvim)
[Atom](https://atom.io/packages/supercollider).

Para iniciar el intérprete, ejecutá run `sclang` en la terminal, después
copiá la lénea de código de abajo y apretá Enter para correrla. Una vez
que la instalación está completa, podés salir del intérprete apretando
Ctrl + C.

# Instalar las extensiones.

TidalCycles se creó para funcionar en un entorno interactivo. La manera
de hacerlo es conseguir un editor e instalar una extensión para él. Aquí
hay una lista de las extensiones recomendadas:

-   [Extensión Emacs](https://github.com/supercollider/scel)
-   [Extensión Vim](https://github.com/supercollider/scvim)
-   [Extensión Atom](https://github.com/crucialfelix/atom-supercollider)

## Instrucciones: Extensión Atom

Abrí Atom, instalá el plugin para TidalCycles. Podes encontrarlo en el
menú edit \> settings \> install, después escribí “tidalcycles” en la
caja de búsqueda. Una vez que se instaló, reiniciá Atom.

## Instrucciones: Extensión Emacs

<div class="mw-translate-fuzzy">

Un paquete MELPA es proveido para la integración de TidalCycles con
Emacs. Primero tenes que asegurarte que MELPA esta instalado en tu
equipo ([aquí las instrucciones](https://melpa.org/#/getting-started))
luego simplemente ejecutá `M-x install-package return tidal return`.

</div>

Esta extensión provee un método para archivos `*.tidal`. Una vez que el
paquete está instalado, simplemente abrí un archivo Tidal y presioná
`C-c C-s` para iniciar Tidal en Emacs, después `C-return` para correr la
línea de código donde se encuentre el cursor de tu computadora.

# Probá tu instalación.

Ahora podes intentár [Iniciar TidalCycles y SuperDirt por primera
vez](/wiki/Start_tidalcycles_and_superdirt_for_the_first_time "wikilink").

# Soluciones a problemas de instalación.

Supercollider funciona en un server de audio Jack para enviar sonido a
tus parlantes. Si en la ventana de posteos de Supercollider ves:

    Couldn't set realtime scheduling priority 1: Operation not permitted

vas a necesitar acondicionar Jack con el comando

    sudo dpkg-reconfigure jackd2

y escribir tu nombre de usuarix en el grupo de audio con

    sudo addgroup -username- audio

.

<div class="mw-translate-fuzzy">

Podés chequear si tu nombre de usuarix ya está en el grupo de audio
escribiendo el comando

    groups -username-. 

.

</div>
