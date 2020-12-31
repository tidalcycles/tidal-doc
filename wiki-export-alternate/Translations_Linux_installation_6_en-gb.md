---
title: Translations:Linux installation/6/en-gb
permalink: wiki/Translations:Linux_installation/6/en-gb/
layout: wiki
---

It *should* be possible to install supercollider via this method too,
via

``` shell
supercollider sc3-plugins
```

. However this generally doesn't work. Either the supercollider version
is too old (superdirt needs at least version 3.7), or the version of
supercollider is mismatched with sc3-plugins. If you're using ubuntu,
mint or a similar distribution, my advice is to ignore the supercollider
packages and just compile them yourself. These scripts make it super
easy to do so:

` `[`https://github.com/lvm/build-supercollider`](https://github.com/lvm/build-supercollider)
