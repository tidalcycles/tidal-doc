---
title: Linux
permalink: wiki/Linux_installation/
layout: wiki
---

<translate>

-----

## Manual installation

You need to install several components to get a complete Tidal Cycles system ([Git](https://git-scm.com/), [Haskell](https://www.haskell.org/platform/), [SuperCollider](http://supercollider.github.io/download) and [SuperDirt](https://github.com/musikinformatik/SuperDirt)). Hopefully, your Linux distribution makes the pre-requisites easily available to you via a package manager. You will also need a text editor. Check the sidebar to get a list of supported editors along with instructions for setting them up.


If your distribution comes with the `apt` package manager (Debian family), you can install some of these dependencies using the following command:

```bash
sudo apt-get install build-essential cabal-install git jackd2
```

Once you are done with this first installation phase, please follow the tutorial below :arrow_down:!

### SuperCollider

**I - SuperCollider**

- **Ubuntu** / **Mint** / **Debian** : compiling Tidal Cycles from source is recommended to get the last version running. Packages are generally too old. Alternatively, try these scripts: [build-supercollider](https://github.com/lvm/build-supercollider).
- **Arch** / **Manjaro**: install via your [package manager](https://archlinux.org/packages/community/x86_64/supercollider/).

**II - SuperDirt**

`SuperDirt` is the audio engine for Tidal Cycles. Tidal will not be able to make any sound or to send MIDI/OSC without it! SuperDirt is also embedding the default audio samples used by Tidal. To install `SuperDirt`, open SuperCollider and paste the following line of code. Evaluate it by pressing Ctrl+Return:
```shell
Quarks.checkForUpdates({Quarks.install("SuperDirt", "v1.7.2"); thisProcess.recompile()})
```

It might take a while :smile:! You will know when the installation process is done by looking at the logs. You should see the following:


```c
Installing SuperDirt
Installing Vowel
Vowel installed
Installing Dirt-Samples
Dirt-Samples installed
SuperDirt installed
compiling class library...
...
(then some blah blah, and finally, something like:)
...

<!--T:41-->
*** Welcome to SuperCollider 3.10.0. *** For help press Ctrl-D.
```

Optionally, you can also install SuperDirt without opening the SuperCollider IDE. If you are familiar with the command line, type `sclang` in a terminal to launch the SuperCollider interpreter and paste the line above. Everything will work the same! You can also install various plugins in your text editor to interact with SuperCollider without using the IDE ([Emacs](https://github.com/supercollider/scel), [Vim](https://github.com/supercollider/scvim) or [Atom](https://atom.io/packages/supercollider)).

To start the interpreter just run `sclang` in a terminal, then just
paste the command line from above and press Enter to run it. Once the
installation is done, you can exit the interpreter by pressing Ctrl + C.


**III - SC3 Plugins**

`SC3Plugins` is a community-made extension for SuperCollider. Installing it is **highly** recommended. You won't be able to use the default synthesizers provided with Tidal Cycles without it. Please be sure to read [these instructions](https://supercollider.github.io/sc3-plugins/) to get the extension.

- **Ubuntu** / **Mint** / **Debian**: follow the instructions above.
- **Arch** / **Manjaro**: there is an up-to-date package in the [Community repository](https://archlinux.org/packages/community/x86_64/sc3-plugins/).

:::caution

If you installed SuperCollider using the [build-supercollider](https://github.com/lvm/build-supercollider) method, you won't need to install them. SC3Plugins is compiled and installed by the script.

:::

### Tidal Cycles

Open a Terminal. If you’re unsure how to open a terminal window in
Linux, it varies according to distribution, but generally you can find `Terminal`
in the menus. Then type and run these two commands *(ignoring any
complaints that cabal has of 'legacy v1 style of usage')*:
```bash
cabal update
cabal install tidal --lib
```

If you've never installed TidalCycles before, then the
`cabal install tidal` step may take some time. At the end of the command
output, it should say `Completed tidal-x.x.x` (where x.x.x is the latest
version number) without any errors.


-----

## Automatic installation

There are user-made guides to install Tidal Cycles. Be sure to check out the following solutions:
- [Ansible method](https://club.tidalcycles.org/t/now-with-early-arch-manjaro-support-install-manage-upgrades-to-tidal-environment-with-a-single-command-on-ubuntu-debian-linux-mint-ansible-method/544) : Ubuntu / Debian / Mint / early Arch support.
- [Yay](https://roosnaflak.com/tech-and-research/install-tidal-cycles-on-arch-linux/) : installation on Arch / Manjaro.

</translate>
