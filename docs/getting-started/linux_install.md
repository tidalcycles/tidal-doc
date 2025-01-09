---
title: Linux
permalink: wiki/Linux_installation/
layout: wiki
---

<translate>

-----

## Automatic installation

There are user-made tools to install the Tidalcycles stack. Be sure to check out the following solutions:
- [Ansible method](https://github.com/cleary/ansible-tidalcycles): Ubuntu / debian / Mint (/ most debian-based distros)
    - full featured solution including SuperCollider, Haskell, Tidal, SuperDirt, code editor, and package dependencies
    - has customization options, including adding additional sample sources and bus channel settings
    - for more information, see the [Tidal Club thread](https://club.tidalcycles.org/t/install-manage-upgrades-to-tidal-environment-with-a-single-command-on-ubuntu-debian-linux-mint-ansible-method/544)

-----

## Manual installation

There are several required components for a complete Tidal Cycles system 
 - [Git](https://git-scm.com/)
 - [Haskell](https://www.haskell.org/platform/)
 - [SuperCollider](https://supercollider.github.io/downloads)
 - [SuperDirt](https://github.com/musikinformatik/SuperDirt)
 - a Text Editor (eg [Pulsar](/getting-started/editor/Pulsar.md), [VS Code](/getting-started/editor/VS_Code.md), [vim/neovim](/getting-started/editor/Vim.md), [emacs](/getting-started/editor/Emacs.md), and more)
    
Most modern distros will make all or most of these available for convenient install via their package managers.

The following instructions provide commands specific to different distro families. They are labelled as:
 - ***debian*** - the debian family of distros includes **debian**, **\*buntu**, **Mint**, **pop!_OS** and more
 - ***arch*** - the Arch family of distros includes **Arch Linux**, **Manjaro** and more
 - ***fedora*** - the fedora distro (tested), may also apply to other RPM based distros (eg RedHat, OpenSUSE, Rocky Linux etc)
 - ***all*** - this command should be run by everyone, regardless of distro
    
Choose the command that matches the distro you are running.

---

### Configure User

1\. Add your user as a member of the `audio` group

***all***
```bash
sudo usermod -a -G audio $USER
```
    
2\. Logout and log back in for it to take effect. You can check it worked with

***all***

```bash
groups | grep audio
```
--- 
    
### Package Preconfiguration
    
1\. Install dependencies

***debian***
```bash
sudo apt update; sudo apt install git jackd2 qjackctl zlib1g-dev gcc g++ ghc cabal-install
```

***arch***
```bash
sudo pacman -Syu; sudo pacman -Sy git jack2 qjackctl
```

***fedora***
```bash
sudo dnf install git-core qjackctl gcc-c++ cabal-install
```

2\. Remove conflicts

***arch***
```bash
sudo pacman -R lib32-mesa-demos mesa-demos
```
---
    
### SuperCollider Installation
1\. Install SuperCollider and SC3-Plugins

***debian***
```bash
sudo apt install supercollider sc3-{plugins,plugins-language,plugins-server}
```
    
***arch***
```bash
sudo pacman -Sy supercollider sc3-plugins
```

***fedora***
```bash
sudo dnf install supercollider
```
sc3-plugins for fedora is provided by a 3rd party repo (you may choose to leave it enabled)
```bash
sudo dnf copr enable ycollet/audinux; sudo dnf install supercollider-sc3-plugins; sudo dnf copr disable ycollet/audinux;
```

---
    
### SuperDirt Installation

:::tip
**SuperDirt** is a plugin or *"Quark"* for SuperCollider, and functions as the audio engine for TidalCycles as well as providing the default set of samples.
:::
    
1\. Get the version number of the latest SuperDirt release (you can also do this by checking the [github page](https://github.com/musikinformatik/SuperDirt/releases))

***all***
```bash
git ls-remote https://github.com/musikinformatik/SuperDirt.git | grep tags | tail -n1 | awk -F/ '{print $NF}'
```

2\. Install SuperDirt, update the version number if required. Once complete press `Ctrl+d` to exit `sclang`

***all***

2\.a. Start the `sclang` shell

```shell
sclang
```

2\.b. Paste this line and press Enter (and wait, it returns immediately but processes in the background).

```c
Quarks.checkForUpdates({Quarks.install("SuperDirt", "v1.7.4"); thisProcess.recompile()})
```
    
---
    
### Tidal Installation

1\. Install tidal

> ***arch*** is the only distro to support Tidal installation via it's core package manager, other distros require using the haskell package/environment manager, `cabal (>=3.0.0.0)` 

***arch***
```bash
sudo pacman -Sy ghc ghc-libs haskell-{tidal,bifunctors,colour,hosc,mwc-random,network,primitive,random,vector,microspec}
```
            
***all others***
```bash
cabal update; cabal install tidal --lib
```
    
:::tip    
`cabal` can be notoriously fickle. If for some reason it fails, you can safely reset the environment by renaming your `~/.ghc` and `~/.cabal` folders, and re-running the above commands.*
:::

---
    
### Choose a Text Editor
TidalCycles is supported by a wide variety of text editors, you will need one to get started:
 - [Pulsar](/getting-started/editor/Pulsar.md) (was Atom)
 - [VS Code](/getting-started/editor/VS_Code.md)
 - [vim/neovim](/getting-started/editor/Vim.md)
 - [emacs](/getting-started/editor/Emacs.md)
    
... and more.

---

### Start Tidal
    
You're almost there! [Follow these instructions to get Tidal started](/getting-started/tidal_start.md)
    
</translate>
