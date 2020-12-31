---
title: Upgrading/de
permalink: wiki/Upgrading/de/
layout: wiki
---

<languages/>

Um Probleme zu vermeiden, empfehlen wir dringend, alle drei Komponenten
von TidalCycles zusammen zu aktualisieren - die TidalCycles-Library, das
Editor-Plugin und den SuperDirt-Synth.

# TidalCycles Library

Aktualisiere Tidal direkt im Terminal-Fenster mit folgenden Befehlen:

``` shell
cabal update
cabal install tidal
```

Mit diesem Befehl kannst du die aktuellste, auf deinem System
installierte Tidal-Version ermitteln:

    ghc-pkg list tidal

Wenn Dir mehr als eine Version aufgelistet wird, wird die aktuellste
verwendet.

Um eine zuvor installierte Version von Tidal zu verwenden, kannst du die
neuere Version 'deregistrieren'. Um beispielsweise die Verwendung der
Version 1.4.0 zu beenden, gib das Folgende ein:

    ghc-pkg unregister tidal-1.4.0

# Editor-Plugin

Auch das TidalCycles-Editor-Plugin musst du aktualisieren. Je nach
Editor kann es auch als 'Erweiterung' oder 'Paket' bezeichnet werden. Im
Atom-Editor erfolgt die Aktualisierung über das Menü Einstellungen &gt;
Updates.

In VSCode kannst du das TidalCycles-Package aktualisieren, indem du
deine Erweiterungen anzeigst (Menü Ansicht &gt; Erweiterungen oder auf
das Symbol Erweiterungen in der linken Aktivitätsleiste klickst), dann
nach TidalCycles suchst und aktualisierst.

# SuperDirt

Um den SuperDirt Synthesizer/Sampler zu aktualisieren, öffne
SuperCollider und führe folgenden Befehl aus, indem du ihn einfügst, den
Mauszeiger auf die Zeile setzt und Shift-Enter drückst:

``` c
Quarks.update("SuperDirt")
```

Danach muss noch die 'Class Library' neu kompiliert werden. Dies kann
entweder durch Neustart von SuperCollider oder über 'Recompile Class
Library' im Menü 'Language' erfolgen.
