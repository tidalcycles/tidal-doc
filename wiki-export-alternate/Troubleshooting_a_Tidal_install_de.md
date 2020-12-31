---
title: Troubleshooting a Tidal install/de
permalink: wiki/Troubleshooting_a_Tidal_install/de/
layout: wiki
---

<langages/>

Wenn du die Installationsanweisungen für TidalCycles befolgt hast, es
aber trotzdem nicht funktioniert, findest du hier einige Möglichkeiten,
um das Problem (oder die Probleme) zu lokalisieren und zu beheben.

# Haskell

Öffne eine Terminal-Fenster und gib das hier ein:

`  ghci`

Du solltest ungefähr Folgendes sehen:

` GHCi, version 8.6.3: `[`http://www.haskell.org/ghc/`](http://www.haskell.org/ghc/)`  :? for help`  
` Prelude> `

Wenn Dir nichts Vergleichbares angezeigt wird, musst du wahrscheinlich
Haskell installieren. Keine Sorge, Dir kann durchaus eine andere
Versionsnummer angezeigt werden. Aktuell wird TidalCycles bis zurück zur
Version 7.10.3 getestet.

# Tidal library

Lass das ghci-Fenster geöffnet und tippe (oder füge ein):

` import Sound.Tidal.Context`

Jetzt sollte Dir so etwas angezeigt werden:

` GHCi, version 8.6.3: `[`http://www.haskell.org/ghc/`](http://www.haskell.org/ghc/)`  :? for help`  
` Prelude> import Sound.Tidal.Context`  
` Prelude Sound.Tidal.Context> `

Wenn du stattdessen eine Fehlermeldung erhältst:

` `<no location info>`: error:`  
`   Could not find module ‘Sound.Tidal.Context’`

Das bedeutet, dass die TidalCycles-Bibliothek nicht installiert ist. Um
sie zu installieren, öffne ein neues Terminal-Fenster und gebe Folgendes
ein:

` cabal update`  
` cabal new-install tidal --lib`

Wenn du eine Fehlermeldung siehst (ignoriere dabei Warnungen über
Befehle im 'Legacy v1-Style'), dann stelle sicher, dass du die
vollständige (full) Haskell-Plattform installiert hast und versuche es
noch einmal. Wenn es immer noch nicht funktioniert, schreib die
Fehlermeldung bitte an unsere [Community](/wiki/Community "wikilink") und
bitte dort um Hilfe.

# SuperCollider / SuperDirt

Starte SuperCollider und füge Folgendes ein:

` SuperDirt.start`

Setze deinen Cursor in die Zeile und führe sie mit Shift / Enter aus

Jetzt sollten Dich einige Messages darüber informieren, dass eine ganze
Reihe von Samplebänken geladen werden und anschließend:

` SuperDirt: listening to Tidal on port 57120`

\_

## ERROR: Class not defined.

Dir wird folgender Fehler angezeigt:

` ERROR: Class not defined.`

Das bedeutet, dass SuperDirt nicht installiert ist. Das kannst du mit
folgendem Befehl nachholen:

` include("SuperDirt")`

Wenn SuperDirt nicht installiert werden kann, stelle sicher, dass du
'git' installiert hast. Prüfe das, indem du \`git --version\` von deiner
Kommandozeile aus ausführst. Wenn das Kommando nicht gefunden wird, dann
schaue auf der Installationsseite nach, wie du git installieren kannst.
Nachdem du es installiert hast, musst du SuperCollider neu starten.
Versuche dann erneut SuperDirt zu installieren.

Wenn du SuperCollider gerade erst installiert hast, reicht vielleicht
auch ein Neustart von SuperCollider bevor du 'include("SuperDirt")
ausführst.

## Fehlermeldung: Could not bind to requested port

Du erhältst diese Fehlermeldung:

` Could not bind to requested port. This may mean it is in use already by another application.`  
` ERROR: Could not open UDP port 57120`

Das bedeutet wahrscheinlich, dass 'verstreute' SuperCollider-Prozesse
laufen, die die Netzwerk-Ports blockieren. Fahre SuperCollider herunter
und beende die Prozesse \`sclang\` und \`scserver\` über deinen
Task-Manager. Sollte das nicht möglich sein, hilft ein Neustart deines
Computers.

## Kompilierungsprobleme

Häufig liegt das Problem in der Installation der
TidalCycles-Haskell-Bibliothek. Wenn hierbei Fehler auftreten, weißt du,
dass das (ein Teil) deines Installationsproblems ist.

``` shell
cabal update
cabal new-install tidal --lib
```

## ghc-pkg recache

Wenn die Kompilierung einiger cabal-packages ohne ersichtlichen Grund
fehlschlägt, kann das helfen:

``` shell
sudo ghc-pkg recache
cabal update
cabal new-install tidal --lib
```

## Haskell Version

Häufig wird die Installation der *Vollversion* der Haskell-Plattform
deine Probleme lösen. Hier kannst du sie finden:
<https://www.haskell.org/platform/>

# Fehlende Sounds

Wenn alles zu funktionieren scheint, aber nicht alle Sounds abgespielt
werden, dann gibt es wahrscheinlich ein Problem beim Herunterladen der
umfangreichen Sound-Bibliothek von TidalCycles.

Du kannst dieses Problem beheben, indem du Dir den 'Dirt-Samples'-Ordner
genauer anschaust. Öffne dafür 'Open user support directory &gt;
downloaded-quarks &gt; Dirt-Samples' über das SuperCollider-Menü.
Vielleicht stellst du fest, dass einige Ordner fehlen oder keine Dateien
enthalten. In diesem Fall kannst du Dir die Samples hier nochmal
herunterladen: <https://github.com/musikinformatik/Dirt-Samples>

... und sie dann über den existieren 'Dirt-Samples'-Ordner kopieren.

# Via 'stack' statt 'cabal' installieren

Wenn die TidalCycles-Haskell-Bibliothek nach der Installation via cabal
hartnäckige Probleme hat, besonders wenn sie Fehler im Zusammenhang mit
der 'Network'-Library aufzeigt, dann hilft die Installation via 'Stack'
bei der Lösung dieses Problems.

Das geht mit folgendem Kommando in einem Terminal-Fenster:

``` bash
stack install tidal
```

Wenn das erledigt ist, musst du dem Atom-Plugin nur noch sagen, dass es
das mit Stack installierte Tidal-Plugin verwenden soll. Suche dafür in
Atom die Einstellungen für das TidalCycles-Package und setze die 'ghci
path'-Einstellung auf

    stack exec --package tidal -- ghci

und starte danach Atom neu. Jetzt sollte alles funktionieren!
