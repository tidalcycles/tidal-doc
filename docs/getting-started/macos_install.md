---
title: MacOS
permalink: wiki/MacOS_automated_installation/
layout: wiki
---
------

## Automatic installation (script)

This install script can be used to automate installation for all components and dependencies needed by the TidalCycles system. This method is recommended if you are new to Tidal and don't already have SuperCollider and SuperDirt. If you have these or if you are well versed in managing command line installations, then use the manual installation steps below.

Please view the GitHub [README](https://github.com/tidalcycles/tidal-bootstrap) for details and information about supported OS versions.
- Silicon/M1: Validated on OSX Ventura
- Tested on Intel Big Sur, Monterey 
For other environments, certain components may not install. Follow the post installation steps below. You may need to follow manual installation steps. 

---
### Install steps
1. Prerequisite: Apple Xcode command line tools  
If this is installed, you can skip this step. If you are unsure, running the command below will exit if already installed. Installation will generate multiple dialog windows, including a license agreement from Apple. It can take 20 - 30+ mins to complete.

```bash
/usr/bin/xcode-select --install
```

2. tidal-bootstrap  
This installs the following components and only installs what is missing. (*Tip:* tidal-bootstrap can be run again.) The Haskell install is the longest and most complex - you will see many messages about Haskell, ghcup, cabal, etc. This can take 20 - 30+ mins.

- [Haskell](https://www.haskell.org/) Language ([Ghcup](https://www.haskell.org/ghcup/))
- [cabal](https://www.haskell.org/cabal/): package system for Haskell and Tidalcycles
- The Tidal Pattern engine (Tidal Cycles itself), with the important BootTidal.hs file
- [Pulsar](https://pulsar-edit.dev/): Text editor
    - [tidalcycles plugin](https://github.com/tidalcycles/pulsar-tidalcycles) for Pulsar
- [SuperCollider](https://supercollider.github.io/) for backend audio generation, and:
    - [SuperDirt](https://github.com/musikinformatik/SuperDirt): sample library used by tidal
    - [sc-3 plugins](https://github.com/supercollider/sc3-plugins): unit generator plugins

```bash
curl https://raw.githubusercontent.com/tidalcycles/tidal-bootstrap/master/tidal-bootstrap.command -sSf | sh
```

3. post installation  
- Review the output from the install script. Note any error messages or install failures. This will help with troubleshooting.
    - For Haskell problems, check `/tmp/ghcup-install.log`
- If there are install failures, you can run tidal-bootstrap again. It will skip over any components successfully installed. Sometimes running it again will resolve problems.
- **Start a new shell** (exit from terminal). This will load the new PATH setting.
- **Verify install**. You should be able to run the following commands. The first two will show info about your tidal install. If these fail, then Haskell or Tidal is not installed correctly. The `ls` command will reveal if the Pulsar tidalcycles plugin is installed correctly. You should see a list of files in the `osc-min` directory. The SuperCollider `scsynth` command will show version info.

```
cabal list tidal
cabal info tidal
ls ~/.pulsar/packages/tidalcycles/node_modules/osc-min
/Applications/SuperCollider.app/Contents/Resources/scsynth -v

## SuperDirt: Start SuperCollider. From the Language menu, select "Quarks." SuperDirt and Dirt-Samples should be listed and checked.
```
- If the Pulsar tidalcycles plugin did not install properly, first try to install within Pulsar using the Package Manager. See instructions in the [Pulsar page](/getting-started/editor/Pulsar.md) If this fails, you can try manual installation of the plugin. Instructions are also in the Pulsar page.

4. Get started!  
[Start Tidal](/getting-started/tidal_start.md) Follow this guide to learn about how the components work together and how to get them running. Welcome to Tidal!

------

------

## Manual installation

Before installing Tidal, make sure to install [Haskell](https://www.haskell.org/ghcup/) (via [Ghcup](https://www.haskell.org/ghcup/)), [SuperCollider](https://supercollider.github.io/downloads) with  [SC3 Plugins](https://supercollider.github.io/sc3-plugins/),   [Git](https://git-scm.com/). You also need to choose and install a text editor for interacting with Tidal Cycles (see the sidebar).

### Installation process

#### Ghcup

In a terminal window, we will add the path to our GHC installation to a
file that is executed by our terminal every time it loads. For macOS 10.14 or before, the terminal uses bash, so the file we need
to modify is .bashrc:
```bash
. "$HOME/.ghcup/env"
echo '. $HOME/.ghcup/env' >> "$HOME/.bashrc"
```
For macOS10.15 Catalina, the terminal uses zsh, so the file we need to
modify is .zshrc:
```bash
. "$HOME/.ghcup/env"
echo '. $HOME/.ghcup/env' >> "$HOME/.zshrc"
```
After this, we will use cabal to first update it package directory, and
then to install the TidalCycles library. We will also run these two
commands every time we want to update our TidalCycles library to the
latest version.
```bash
cabal update
cabal v1-install tidal
```
If you've never installed TidalCycles before, then the
`cabal v1-install tidal` step may take some time. At the end of the
command output, it should say `Installed tidal-x.x.x` (where x.x.x is
the latest version number) without any errors.

**Note:** see section "3. post installation" above for steps to verify your installations. 

#### SuperDirt

Start your freshly installed version of SuperCollider. Paste the following line of code in the text editor you see and press Cmd+Return to evaluate :

```c
Quarks.checkForUpdates({Quarks.install("SuperDirt", "v1.7.3"); thisProcess.recompile()})
```

Run the code by clicking on it, to make sure the cursor is on this line,
then hold down Shift and press Enter.

It'll take a while to install. You'll see something like the following:

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

<!--T:31-->
*** Welcome to SuperCollider 3.11.2. *** For help press Ctrl-D.
```

-----

## I've installed Tidal Cycles. What's next?

Look at the sidebar. You will see a list of text editors you can install to interact with Tidal and start playing :smile:.
