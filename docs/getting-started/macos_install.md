---
title: MacOS
permalink: wiki/MacOS_automated_installation/
layout: wiki
---
------

## Automatic installation (script)


You can run the installation script by opening a terminal window, pasting in the following and pressing enter:

```bash
curl https://raw.githubusercontent.com/tidalcycles/tidal-bootstrap/master/tidal-bootstrap.command -sSf | sh
```

It will probably ask for your password. As you type, characters won't be echoed to the screen. A lot of confusing info will scroll past. Just let it run until the end. Tidal should thereafter be installed on your computer.

### What is the script doing with my computer?

The script installs the tools mentioned in TidalCycles [manual installation guide](../getting-started/Linux_installation). In particular, the script
checks if the following programs are installed on the system, and
installs them if they are missing.

-   [SuperCollider](https://supercollider.github.io/) (and [SuperDirt](https://github.com/musikinformatik/SuperDirt))
-   [Atom](https://atom.io/) (and the [Tidal Cycles Plugin](https://atom.io/packages/tidalcycles))
-   [Haskell](https://www.haskell.org/) Language ([Ghcup](https://www.haskell.org/ghcup/))
-   The Tidal Pattern engine (Tidal Cycles itself)

------

## Manual installation

Before installing Tidal, make sure to install [Haskell](https://www.haskell.org/ghcup/) (via [Ghcup](https://www.haskell.org/ghcup/)), [SuperCollider](http://supercollider.github.io/download) with  [SC3 Plugins](https://supercollider.github.io/sc3-plugins/),   [Git](https://git-scm.com/). You also need to choose and install a text editor for interacting with Tidal Cycles (see the sidebar).

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
cabal install tidal --lib
```
If you've never installed TidalCycles before, then the
`cabal install tidal --lib` step may take some time. At the end of the
command output, it should say `Installed tidal-x.x.x` (where x.x.x is
the latest version number) without any errors.

#### SuperDirt

Start your freshly installed version of SuperCollider. Paste the following line of code in the text editor you see and press Cmd+Return to evaluate :

```c
Quarks.checkForUpdates({Quarks.install("SuperDirt", "v1.7.2"); thisProcess.recompile()})
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
