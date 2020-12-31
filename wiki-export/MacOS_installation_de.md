---
title: MacOS installation/de
permalink: wiki/MacOS_installation/de/
layout: wiki
---

<languages />

# Einfache Installation

Für eine einfache und unkomplizierte Installation versuche es mit
[tidal-bootstrap](https://github.com/tidalcycles/tidal-bootstrap/blob/master/README.md)
anstelle der folgenden Anweisungen für eine manuelle Installation.

# Manuelle Installation

## Voraussetzungen

### Notwendige Voraussetzungen

Bevor du TidalCycles installierst, stelle sicher, dass du die folgenden
Komponenten installiert hast:

-   [Haskell](https://www.haskell.org/ghcup/) (via ghcup)
-   [Atom-Editor](https://atom.io/) (wenn du den Atom-Editor nicht
    magst, wirf einen Blick auf die [Liste alternativer
    Editoren](/wiki/List_of_tidal_editors "wikilink"))
-   [SuperCollider](http://supercollider.github.io/download) (verwende
    die aktuellste Version)
-   [Git](https://git-scm.com/)

### Optionale Voraussetzungen

Das Folgende ist optional, aber sehr empfehlenswert:

-   [SC3-Plugins](https://supercollider.github.io/sc3-plugins/) - Du
    benötigst die SuperCollider sc3-Plugins, wenn du einen der in
    SuperDirt enthaltenen Synthesizer verwenden möchtest. Die meisten
    Beispiele in der Dokumentation funktionieren auch ohne diese
    Plugins. Du kannst diesen Schritt also auch überspringen und später
    darauf zurückkommen.

### TidalCycles installieren

Füge den folgenden Code in ein Terminal-Fenster ein:

     . "$HOME/.ghcup/env"
     echo '. $HOME/.ghcup/env' >> "$HOME/.bashrc"
     cabal update
     cabal install tidal --lib

Wenn du TidalCycles noch nie installiert hast, kann der Schritt
`cabal install tidal --lib` einige Zeit dauern. Am Ende sollte auf jeden
Fall `Installated tidal-x.x.x` (wobei x.x.x die neueste Versionsnummer
ist) ohne Fehler ausgegeben werden.

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

Starte Atom, um das TidalCycles-Plugin zu installieren. Öffne Menü \>
edit \> settings \> install und gebe dann 'tidalcycles' in das Suchfeld
ein.

Nach der Installation musst du noch die Einstellung für den "ghci
path"-des tidalcycles-Packages ändern:

    ~/.ghcup/bin/ghci

Starte Atom nach der Installation und Konfiguration neu.

## VS Code-Erweiterung installieren

Starte VS Code und installiere die TidalCycles-Erweiterung - zu finden
im Marketplace. Du kannst dieser Anleitung
[hier](https://marketplace.visualstudio.com/items?itemName=tidalcycles.vscode-tidalcycles)
folgen, wenn du nicht sicher bist wie das genau funktioniert.

## Teste deine Installation

Jetzt bist du soweit, um [ TidalCycles und SuperDirt zum ersten Mal zu
starten](/wiki/Start_tidalcycles_and_superdirt_for_the_first_time "wikilink").
