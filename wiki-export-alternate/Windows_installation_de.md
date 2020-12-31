---
title: Windows installation/de
permalink: wiki/Windows_installation/de/
layout: wiki
---

# Einfache Installation

Für eine einfache und automatisierte Installation vschau Dir [Windows
choco install](/wiki/Windows_choco_install "wikilink") an.

# Manuelle Installation

Wenn du es vorziehst, die verschiedenen Teile deiner
TidalCycles-Umgebung manuell zu installieren - vielleicht weil du
bereits SuperCollider oder Haskell installiert hast - dann folge den
nachstehenden Anweisungen.

## Voraussetzungen

### Notwendige Voraussetzungen

Bevor du TidalCycles installierst, stelle sicher, dass du die folgenden
Komponenten installiert hast:

-   Haskell-Plattform - Bitte beachten! Es gibt einen Fehler im
    Windows-Haskell-Installationsprogramm, also installiere [diese
    Version](https://www.haskell.org/platform/download/8.4.3/HaskellPlatform-8.4.3-full-x86_64-setup.exe)
    (Haskell 8.4.3 'full' install). So sollte es funktionieren.
-   [Atom-Editor](https://atom.io/) (wenn du den Atom-Editor aus
    irgendeinem Grund nicht magst, schau Dir die [Liste der
    Alternativen](/wiki/List_of_tidal_editors "wikilink") an)
-   [SuperCollider](http://supercollider.github.io/download)
    (installiere die neueste Version)
-   [Git](https://git-scm.com/)

### Optionale Voraussetzungen

Das Folgende ist optional, aber sehr empfehlenswert:

[SC3 Plugins](https://supercollider.github.io/sc3-plugins/) - Du
benötigst die SuperCollider sc3-Plugins, wenn du einen der in SuperDirt
enthaltenen Synthesizer verwenden möchtest. Die meisten Beispiele in
dieser Dokumentation funktionieren auch ohne diese Plugins. Du kannst
diesen Schritt also auch überspringen und später darauf zurückkommen.

### TidalCycles installieren

Öffne eine Eingabeaufforderung (oder PowerShell), gib dann diese beiden
Befehle ein und führe sie aus:

`cabal update`  
` cabal install tidal`

Wenn du noch nie TidalCycles installierst hast, kann der Schritt
`cabal install tidal` einige Zeit in Anspruch nehmen.

Wenn Dir ein Fehler in der Netzwerkbibliothek angezeigt wird, dann musst
du deine Haskell-Installation anpassen. Die Anweisungen dazu findest du
[hier](https://forum.toplap.org/t/trouble-launching-tidal-in-atom/678/3).

## SuperDirt installieren

Starte SuperCollider und füge ins Editor-Fenster den folgenden Code ein:

Quarks.checkForUpdates({Quarks.install("SuperDirt", "v1.1.1");
thisProcess.recompile()})

Führe den Code aus, indem du den Cursor auf die Zeile bewegst (einfach
darauf klicken) und dann ENTER bei gehaltener Shift-Taste drückst.

Die Installation dauert eine Weile und Dir wird ungefähr so etwas hier
angezeigt:

``` plaintext
Installing SuperDirt
Installing Vowel
Vowel installed
Installing Dirt-Samples
Dirt-Samples installed
SuperDirt installed
compiling class library...
...
(dann noch mehr blah blah und zum Schluss so etwas hier:)

*** Welcome to SuperCollider 3.10.0. *** For help press Ctrl-D.
```

## Atom-Erweiterung installieren

Starte Atom, um das TidalCycles-Plugin zu installieren. Öffne Menü &gt;
edit &gt; settings &gt; install und gebe dann 'tidalcycles' in das
Suchfeld ein. Starte Atom nach der Installation neu.

## Teste deine Installation

Jetzt bist du soweit, um [TidalCycles und SuperDirt zum ersten Mal zu
starten](/wiki/Start_tidalcycles_and_superdirt_for_the_first_time "wikilink").
