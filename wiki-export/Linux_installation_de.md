---
title: Linux installation/de
permalink: wiki/Linux_installation/de/
layout: wiki
---

# Erforderliche Vorbereitungen

Folgendes muss du installieren, damit TidalCycles funktioniert:

-   [Git](https://git-scm.com/)
-   [Haskell](https://www.haskell.org/platform/)
-   [SuperCollider](http://supercollider.github.io/download)
-   [Atom Editor](https://atom.io/) (wenn du den Atom-Editor aus
    irgendeinem Grund nicht magst, schau bitte in die [Liste mit
    alternativen Editoren](/wiki/List_of_tidal_editors "wikilink"))

Hoffentlich macht es Dir deine Linux-Distribution einfach und stellt Dir
die erforderliche Software über einen Paketmanager zur Verfügung. Wenn
du z.B. eine aktuelle Version von Ubuntu oder ähnliches verwendest,
kannst du Haskell mit dem folgenden Befehl in einem Terminalfenster
installieren:

`sudo apt-get install build-essential cabal-install git jackd2`

# Supercollider installieren

Die Installation von Supercollider über diese Methode (d.h.
`sudo apt-get install supercollider sc3-plugins`) funktioniert allgemein
nicht. Entweder ist die Version von Supercollider zu alt (superdirt
benötigt mindestens Version 3.7) oder die Version von Supercollider ist
mit den sc3-plugins nicht kompatibel. Wenn du ubuntu, Mint oder eine
ähnliche Distribution verwendest, raten wir Dir das
Supercollider-Package zu ignorieren und es stattdessen selbst zu
kompilieren. Eine Anleitung dazu findest du hier
[hier](https://supercollider.github.io/development/building.html).

Wenn du eine aktuelle, auf Debian basierende Distribution verwendest
(z.B. Ubuntu \>= 18.04), machen es Dir diese Skripte einfach:

` `[`https://github.com/lvm/build-supercollider`](https://github.com/lvm/build-supercollider)

oder ein aktualisierter Fork (es werden Supercollider und sc3-Plugins
installiert):

` `[`https://github.com/willbasky/build-supercollider`](https://github.com/willbasky/build-supercollider)

Füge einfach die Anweisungen unter "How to?" nacheinander in die
Kommadozeile ein.(Die Anmerkung über den 'Debian way' kannst du
ignorieren).

# Optionale Vorbereitungen

Das Folgende ist optional, wir empfehlen aber die Installation.

-   [SC3-Plugins](https://supercollider.github.io/sc3-plugins/) - Du
    benötigst SuperColliders sc3-Plugins, wenn Du einen der in SuperDirt
    enthaltenen Synthesizer verwenden möchtest. Die meisten Beispiele in
    der Dokumentation werden auch ohne diese PlugIns funktionieren, so
    dass du diesen Schritt jetzt auch überspringen und später darauf
    zurückkommen kannst.

# Tidal installieren

Öffne ein Terminal. Wenn du nicht sicher bist, wie man ein
Terminal-Fenster unter Linux öffnet, ist das je nach Distribution
unterschiedlich. Im Allgemeinen findest du das 'Terminal' in den Menüs.
Tippe anschließend diese beiden Befehle ein und führe sie aus
*(ignoriere dabei alle Beschwerden, die cabal zu 'legacy v1 style of
usage' hat)*:

`cabal update`  
`cabal install tidal`

Wenn du noch nie TidalCycles installiert hast, kann der Schritt
`cabal install tidal` einige Zeit in Anspruch nehmen. Am Ende der
Befehlsausgabe sollte `Installated tidal-x.x.x` (wobei x.x.x die neueste
Versionsnummer ist) ohne Fehler erscheinen.

# SuperDirt installieren

TidalCycles setzt auf SuperDirt auf. SuperDirt muss laufen, damit Tidal
Sounds machen kann. So wird SuperDirt installiert:

Starte SuperCollider und gebe im Editorfenster den folgenden Code ein:

`Quarks.checkForUpdates({Quarks.install("SuperDirt", "v1.1.1"); thisProcess.recompile()})`

Klicke auf den Code, um den Cursor in dieser Zeile zu platzieren. Dann
kannst du ihn ausführen, indem du die Umschalttaste gedrückt hältst und
dann zusätzlich die Eingabetaste drückst.

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

## Den SuperCollider Interpreter im Terminal nutzen

Du kannst SuperCollider auch mit Hilfe des Terminals installieren. Mach
Dich damit vertraut, wenn du einen eigenen Texteditor verwenden
möchtest. Es sind großartige SuperCollider-Plugins für
[Emacs](https://github.com/supercollider/scel),
[Vim](https://github.com/supercollider/scvim) oder
[Atom](https://atom.io/packages/supercollider) verfügbar.

Um den Interpreter zu starten, führe einfach `sclang` in einem Terminal
aus, füge dann die Befehlszeile von oben ein und drücke die
Eingabetaste, um sie auszuführen. Wenn die Installation abgeschlossen
ist, kannst du den Interpreter durch Drücken von 'Strg + C' verlassen.

# Installation der Editor-Erweiterung

TidalCycles wurde entwickelt, um in einer interaktiven Umgebung zu
laufen. Dafür brauchst du einen Texteditor und eine passende Erweiterung
für TidalCycles. Hier ist eine Liste von Erweiterungen, die du
vielleicht ausprobieren möchtest:

-   [Emacs extension](https://github.com/supercollider/scel)
-   [Vim extension](https://github.com/supercollider/scvim)
-   [Atom extension](https://github.com/crucialfelix/atom-supercollider)

## Atom-Erweiterung installieren

Starte Atom und installiere das TidalCycles-Plugin. Du findest es im
Menü unter Bearbeiten \> Einstellungen \> Installieren. Gib hier dann
"tidalcycles" in das Suchfeld ein. Sobald das PlugIn installiert ist,
starte Atom neu.

## Emacs-Erweiterung installieren

Für die Integration von TidalCycles in Emacs wird ein MELPA-Package
bereitgestellt. Du musst zuerst sicherstellen, daß du MELPA auf deinem
Rechner installiert hast ([Hier ist die
Anleitung](https://melpa.org/#/getting-started)), dann führe einfach
`M-x package-install `<return>` tidal `<return> aus.

Diese Erweiterung bietet einen Major Mode für `*.tidal` Dateien. Sobald
das Paket installiert ist, kannst du einfach ein Tidal-Skript öffnen und
`C-c C-s` eingeben, um Tidal in Emacs zu starten. Und dann `C-return`,
um die Anweisung in der Zeile mit dem Cursor auszuführen.

# Teste deine Installation

Jetzt bist du soweit, um [ TidalCycles und SuperDirt zum ersten Mal zu
starten](/wiki/Start_tidalcycles_and_superdirt_for_the_first_time "wikilink").

# Installation Troubleshooting

SuperCollider läuft auf einem Jack-Audioserver, um Sound an die
Lautsprecher zu liefern. Wenn du im Post-Fenster von SuperCollider
diesen Fehler siehst

    Couldn't set realtime scheduling priority 1: Operation not permitted

musst du Jack mit dem Befehl

     sudo dpkg-reconfigure jackd2 

einrichten und deinen Benutzernamen mit

     sudo addgroup -username- audio 

zur Audio Gruppe hinzufügen.

Du kannst überprüfen, ob dein Benutzername bereits in der Audio Gruppe
enthalten ist, indem du den Befehl

    groups -username-

eingibst. Eventuell musst du dich aus- und wieder einloggen, damit es
wirksam wird.
