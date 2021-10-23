---
title: Windows 
permalink: wiki/Windows_choco_install/
layout: wiki
---

-----

## Automatic installation

There is an automatic installer for Tidal Cycles for Windows. It will install everything you need, including the required dependencies ([Git](https://git-scm.com/), [Haskell](https://www.haskell.org/ghcup/), [Atom Editor](https://atom.io/), [SuperCollider](http://supercollider.github.io/download), [SuperDirt](https://github.com/musikinformatik/SuperDirt)). The installer assumes that these components aren't installed already. If they are, you might be better off installing all the rest by hand!

### Installation procedure

Installation is a three step process. It is mostly automated, but expect
windows to give a few security pop-ups for you to accept. Windows 7 users: please report to the specific section at the end of this page.

**I - Starting powershell as administrator**
>    -   Windows 10 - Hold down the windows key
>        and press 'x', then choose Windows PowerShell (admin) in
>        the menu that pops up.
>    -   Windows 7 - Click the start button, type `powershell`, then
>        click with the right mouse button and choose **Run as
>       Administrator**.

**II - Installing Chocolatey: the package manager**

> The [Chocolatey](https://chocolatey.org/) package
>  manager is required. If you haven't installed it previously, you can
>   get it by running this command:
>   ```shell
>    Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))```

**III - Installing Tidal Cycles**

Run the following command to install Tidal Cycles using Chocolatey:
>    ```shell choco install tidalcycles ```

*Note:* We are still working on the automatic installer. A lot of confusing information will scroll past. Please ignore messages about restarting Powershell. Just let the process run to the end.


-----

## Manual installation

You might prefer to install the different components of Tidal Cycles by hand. This is the recommand way for users who already installed some of the components ([Git](https://git-scm.com/), [Haskell](https://www.haskell.org/ghcup/), [Atom Editor](https://atom.io/), [SuperCollider](http://supercollider.github.io/download), [SuperDirt](https://github.com/musikinformatik/SuperDirt)). All these components are needed to install Tidal Cycles.

### SC3 Plugins

[SC3 Plugins](https://supercollider.github.io/sc3-plugins/) is needed if you want to use any of the synthesizers included with Tidal Cycles. Most of the examples in the documentation will still work, but your intallation will likely be incomplete without it. You can skip the installation but be sure to come back later to install it if you want.

### SuperDirt

SuperDirt is the audio engine used by Tidal. Without it, Tidal Cycles will not emit any sound and will not be able to communicate through OSC or MIDI with other synthesizers. To install it, open SuperCollider and run the following command in the interactive editor (press Ctrl+Return to evaluate):

```c
Quarks.checkForUpdates({Quarks.install("SuperDirt", "v1.7.2"); thisProcess.recompile()})
```

The installation will take a little while. You will know when the installation process is done by looking at the logs window. It will likely print something like the following:

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

<!--T:28-->
*** Welcome to SuperCollider 3.12.1. *** For help press Ctrl-D.
```


### Tidal Cycles

You will need [Haskell](https://www.haskell.org/ghcup/) (Ghcup) to install Tidal Cycles. If you just installed it or already got it installed, open `PowerShell` in **administrator mode** (see above). Enter the following commands:

```shell
cabal v1-update
cabal v1-install tidal
```

The last command might take some time to complete. Be patient, and everything will be alright :smile:. 


-----

## Note for Windows 7 users

If you are using Windows 7, some extra preparation is required before installing everything else:

1.  Make sure Windows 7 is up to date with the latest patches.
2.  Install/upgrade to .NET 4.5. You can [download it here](https://www.microsoft.com/en-gb/download/details.aspx?id=30653).
3.  Install Visual C++ redistributable. You can [download it here](https://support.microsoft.com/en-gb/help/2977003/the-latest-supported-visual-c-downloads)

-----

## I've installed Tidal Cycles. What's next?

Look at the sidebar. You will see a list of text editors you can install to interact with Tidal and start playing :smile:.
