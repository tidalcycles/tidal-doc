---
title: Translations:Troubleshooting a Tidal install/52/de
permalink: wiki/Translations:Troubleshooting_a_Tidal_install/52/de/
layout: wiki
---

Wenn das erledigt ist, musst du dem Atom-Plugin nur noch sagen, dass es
das mit Stack installierte Tidal-Plugin verwenden soll. Suche dafür in
Atom die Einstellungen für das TidalCycles-Package und setze die 'ghci
path'-Einstellung auf

    stack exec --package tidal -- ghci

und starte danach Atom neu. Jetzt sollte alles funktionieren!
