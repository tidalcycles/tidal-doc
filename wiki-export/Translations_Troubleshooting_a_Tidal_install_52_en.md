---
title: Translations:Troubleshooting a Tidal install/52/en
permalink: wiki/Translations:Troubleshooting_a_Tidal_install/52/en/
layout: wiki
---

Once that's done, you just have to tell the atom plugin to use the tidal
installed with stack. In atom, find the settings for the tidalcycles
package, and set the 'ghci path' setting to

    stack exec --package tidal -- ghci

. Then, restart atom and all should be well.
