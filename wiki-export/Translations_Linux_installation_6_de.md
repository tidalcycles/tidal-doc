---
title: Translations:Linux installation/6/de
permalink: wiki/Translations:Linux_installation/6/de/
layout: wiki
---

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
