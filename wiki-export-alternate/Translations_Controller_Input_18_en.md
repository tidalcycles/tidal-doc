---
title: Translations:Controller Input/18/en
permalink: wiki/Translations:Controller_Input/18/en/
layout: wiki
---

on = MIDIFunc.noteOn({ \|val, num, chan, src\|

`   osc.sendMsg("/ctrl", num.asString, val/127);`

});
