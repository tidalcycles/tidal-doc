---
title: Start tidalcycles and superdirt for the first time/de
permalink: wiki/Start_tidalcycles_and_superdirt_for_the_first_time/de/
layout: wiki
---

<languages />

Die folgende zwei Schritte sind bei jedem Start von TidalCycles
erforderlich:

1.  Starte Supercollider und dann dann SuperDirt innerhalb von
    Supercollider
2.  Starte TidlaCycles in deinem bevorzugtem Editor

# SuperDirt in SuperCollider starten

Es gibt zwei Möglichkeiten, um SuperDirt zu starten. Du kannst ihn
entweder über die SuperCollider-IDE laufen starten oder den
SuperCollider-Interpreter `sclang` in einem Terminal verwenden. Neuen
Benutzern wird empfohlen, die Entwicklungsumgebung von SuperCollider zu
nutzen.

## SuperCollider IDE nutzen

Kopiere den folgenden Code in ein SuperCollider-Fenster, um SuperDirt zu
starten:

`SuperDirt.start`

Klicke dann auf den Code, halte die Shift-Taste gedrückt und betätige
die Eingabe-Taste. Im 'Post-Window' siehst du jetzt einige Information
zum Start-Prozess von SuperDirt. Am Ende sollte dort Folgendes stehen:

`SuperDirt: listening to Tidal on port 57120`

### Automatischer SuperDirt-Start via SuperCollider-IDE

Wenn SuperDirt automatisch beim Start von SuperCollider aufgerufen
werden soll, füge die Zeile `SuperDirt.start` in die startup-Datei von
SuperCollider ein. Die Startup-Datei kannst du in SuperCollider selbst
verändern. Rufe sie dafür über File -\> Open Startup File auf. Wenn du
eine erweiterte Startup-Datei mit weiteren Optionen nutzen möchtest,
schau Dir [dieses
Beispiel](https://github.com/musikinformatik/SuperDirt/blob/master/superdirt_startup.scd)
an.

## Den Terminal Interpreter von Super Collider nutzen

Du kannst SuperDirt mit Hilfe [dieses
Startup-Scripts](https://raw.githubusercontent.com/musikinformatik/SuperDirt/develop/superdirt_startup.scd)
starten. Gebe dazu einfach `sclang superdirt_startup.scd` in deinem
Terminal-Fenster ein.

Nachdem alles geladen wurde, sollte die folgende Meldung erscheinen:

`SuperDirt: listening to Tidal on port 57120`

Das Default Startup-Skript ist sehr simple. Es unterstützt zwei Orbits
und lädt die Standard-Samples. Das kannst du ändern, um zum Beispiel
[Custom Samples](/wiki/Custom_Samples "wikilink") zu laden oder weitere Orbits
hinzuzufügen.

# TidalCycles im Texteditor starten

## Anleitung für Emacs

Wenn du das Emacs-PlugIn noch nicht installiert hast, schau Dir noch mal
die [Linux installation](/wiki/Linux_installation "wikilink") an. Nachdem das
TidalCycles-PlugIn installiert ist, musst du nur eine `*.tidal` Datei
öffnen und dann `C-c C-s` drücken, um Tidal in Emacs zu starten. Wenn
alles geklappt hat solltest du den Output von Tidal in einem separatem
Fenster sehen.

Jetzt kannst du einfach `C-return` drücken, um den Code in der aktuell
mit dem Cursor markierten Zeile auszuführen. Du kannst das mit diesem
einfachen Beispiel ausprobieren:

`d1 $ sound "bd sn"`

Du solltest einen Bassdrum-Sound gefolgt von einem Snare-Sound hören.
Führe Folgendes aus, um alle Instrumente zu stoppen:

`hush`

## Anleitung für Atom

1.  Starte Atom
2.  Erzeuge eine neue Datei und speichere sie mit der Dateiendung .tidal
    ab, z.B. test.tidal
3.  Wähle TidalCycles -\> Boot TidalCycles aus dem Packages-Menü. Am
    unteren Fensterrand sollte ein kleines Fenster erscheinen und darin
    als Eingabeaufforderung 't\>' (und hoffentlich keine
    Fehlermeldungen).

Lass einen simplen Pattern laufen. Gebe dafür folgenden Code ein und
führe ihn aus, indem du 'Shift' hältst und dann 'Enter' drückst.
('Control/Enter' ist auch möglich, dann werden allerdings mehrer
Codezeilen auf einmal ausgeführt).

`d1 $ sound "bd sn"`

Glückwunsch, wenn du einen Sound hörst.

Wenn du Probleme hast, kann�st du gerne in unserem Forum Fragen stellen
und Probleme schildern. Auch im \#tidal Kanal im [Lurk
RocketChat](https://talk.lurk.org/channel/tidal) bist du herzlich
willkommen.

Wie bei freier Software üblich, hast du alternative Auswahlmöglichkeiten
für die Komponenten, aus denen dein TidalCycles-System besteht. Atom und
SuperDirt mögen alles sein, was du je brauchst, aber es gibt auch andere
Editoren und Synths, die du verwenden kannst.
