---
title: Translations:What is a pattern?/4/en
permalink: wiki/Translations:What_is_a_pattern?/4/en/
layout: wiki
---

The above might look like a string, but Tidal quietly parses it into a
pattern for you (using a hidden function called parseBP\_E). We can ask
that pattern for values by casting the string pattern to a Tidal pattern
by appending

``` Haskell
:: Pattern String
```

to the pattern string. You're kind of telling Tidal to treat this string
as a pattern and show you what it sees:
