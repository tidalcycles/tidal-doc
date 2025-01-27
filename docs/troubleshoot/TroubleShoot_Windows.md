---
title: TroubleShoot on Windows
id: troubleshoot_windows
---

:::note

- Haskell: the issue with ghc version 9.6.1 has been resolved.
- Haskell: A new network package is available (`network-3.1.2.9`). This will be automatically installed when you use the most current ghc/cabal versions.
- A new troubleshooting step is available for SuperDirt install hangs during chocolatey install.
- See [Windows Chocolatey cleanup](https://tidalcycles.org/docs/getting-started/windows-choco-cleanup) for instructions to cleanup after choco install problems.

:::

### Haskell ghci version issues

<details>
  <summary>Haskell install method - choco vs ghcup</summary>
  <div>
    <div>If you are experiencing Haskell problems, it is important to know what install method you used (choco vs ghcup). You also need to decide if you want to continue using choco to resolve install issues, or switch to ghcup, the native Haskell installer. If you switch to ghcup, you should consider removing components from choco, and starting from a clean system.</div>
    <br/>
  </div>
</details>

Version 9.6.1 is now compatible with Tidal. Cabal `3.10.1.0` is now **required** to get the correct current version of the network package `network-3.1.2.9`. On Windows, these are the **recommended versions:**
- ghci 9.6.1
- cabal 3.10.1.0

To upgrade versions with choco, first uninstall ghc/cabal, then install with the exact version argument:

```powershell
choco uninstall ghc
choco uninstall cabal
choco install ghc --version=9.6.1
choco install cabal --version=3.10.1.0

```
To change versions with ghcup:  
(If you don't have ghcup, see [Haskell ghcup install](https://www.haskell.org/ghcup/install/).)

```powershell
ghcup install ghc 9.6.1
ghcup install cabal 3.10.1.0
ghcup set ghc 9.6.1
ghcup set cabal 3.10.1.0

```
- Before installing/reinstalling the Tidal package it is recommended to **delete** your local ghc and cabal directories. These are usually in your user `\AppData\Roaming` directory but could also be in other directories under `\AppData\`.

```powershell
C:\Users\<yourUser>\AppData\Roaming\ghc\
C:\Users\<yourUser>\AppData\Roaming\cabal\
C:\Users\<yourUser>\AppData\Local\ghc\
C:\Users\<yourUser>\AppData\Local\cabal\
```
- Now run the Tidal package install commands:

```powershell
cabal update
cabal v1-install tidal
```

:::tip

The steps to delete your local ghc/cabal directories and then run Tidal cabal commands are standard practice for any issue where your Tidal install fails.

:::
### SuperDirt install hangs during choco install
SuperDirt is installed using a command that runs in SuperCollider. Sometimes the install process doesn't complete properly and the choco installer won't continue. This is most likely due to an orphaned process in SuperCollider. You can resolve this by killing the process in Windows Task Manager.

If you see the install process with this message and no further activity for a long time (> 5+ mins), it is likely stuck:
```shell
...
SuperDirt installed
** Downloading samples ** - please be patient, this may take a while.
Installing Dirt-Samples
Dirt-Samples installed
SuperDirt installation complete!
Booting server 'localhost' on address 127.0.0.1:57110.
cleaning up OSC
```
Steps to resolve:  
- Start the Windows Task Manager
- Identify the orphaned SuperCollider process (sclang or scide.exe)
- Highlight the task and select the "End task" button
    - To be more exact, use "More details" to view all running processes.
    - Find an orphaned process connected to SuperCollider and select "End task"
- This should let the choco install process continue


### network-3.1.2.8 error during Tidal package install

> failed to install network-3.1.2.8  
> package has a ./configure script. If on windows, this requires a unix compatibility
toolchain such as MinGW+MSYS or Cygwin.

:::tip

This error shows that you don't have the current version of the network package.
A Cygwin installation is not necessary, installing Haskell from either `choco` or `ghcup` will install `msys2`, which provides a Unix shell. What is missing is that `cabal` can't find it, so you need to fix your `$PATH`.

:::

Steps to resolve:
- **FIRST**: follow the steps above to make sure you have the correct versions of ghc and cabal. Note that `cabal 3.8.1.0` will install the wrong version of the network package and won't resolve this error. You need `cabal 3.10.1.0`
- Remove your local `ghc` and `cabal` directories (see above).
- Install the `tidal` package again (see above).
- If problems continue, you may have problems with your `$PATH` environment variable.
- **choco**: Add these values to your system PATH environment variable, using your version of `ghc`:
```powershell
C:\tools\ghc-\<version>\mingw\bin
# example: C:\tools\ghc-9.4.4\mingw\bin
C:\tools\msys64\usr\bin
```

- **ghcup**: Add these values to your system PATH environment variable:
```powershell
C:\ghcup\ghc\\<version>\mingw\bin
# example: C:\ghcup\ghc\9.4.4\mingw\bin
C:\ghcup\msys64\usr\bin
```
- exit and restart powershell (as admin)  
Don't skip this—it will ensure your new `$PATH` settings are applied.

- Follow the steps outlined above to delete your local `ghc` and `cabal` directories, and then run the commands to install Tidal again.

### other package errors from Tidal package install
Sometimes the Tidal package install from `cabal` will fail with multiple errors. If these are related to the `network-*` package, you can likely resolve them by checking the items below. If your errors don't involve the `network-*` package, the first thing to try is cleaning out your installed packages and running the installation commands again (see above).

Other things to check:
- Be sure to clean out all ghc/cabal directories in your local `%APPDATA%`. (see above)
- If you have Haskell components installed by both `choco` and `ghcup`, this could cause problems.
- Check your environment variables, restart PowerShell as administrator (or your terminal emulator of choice), and then reboot.
- If you have a pre-existing Cygwin installation or other POSIX compatibility layer, you may have to temporarily remove it from your $PATH for `cabal` to succesfully configure `network-*` during install.


### Is Haskell installed?

Open a terminal window, and type:

```bash
ghci
```

You should see something like this:

```bash
GHCi, version 8.6.3: http://www.haskell.org/ghc/  :? for help
Prelude>
```

If you don't see something like the above, you probably need to install [Haskell](https://www.haskell.org/). You might well see a different version number, don't worry. At the time of writing, Tidal is tested against versions right back to 7.10.3.

To get more information, refer back to the installation page for Windows.

### Is the Tidal Library installed?

Keeping that **ghci** window open, type (or paste in):

```haskell
import Sound.Tidal.Context
```

You should now see something like:

```haskell
GHCi, version 9.4.4: http://www.haskell.org/ghc/  :? for help
Prelude> import Sound.Tidal.Context
Prelude Sound.Tidal.Context>
```

If you instead see an error message like:

```haskell
<no location info>: error:
  Could not find module ‘Sound.Tidal.Context’
```

This means that the Tidal library isn't installed. To install it, open a new terminal window and type:

```bash
cabal update
cabal v1-install tidal
```

:::caution
You can ignore warnings about *'legacy v1 style'*.
:::

If you still see an error message, then make sure you have installed the **Full** Haskell Platform and try again. If it still doesn't work, ask help on one of the [community pages](https://tidalcycles.org/docs/community).

## Is SuperDirt alright?

### CLASS Not Found

If you see the following error:

```
ERROR: Class not defined.
```

This means **SuperDirt** isn't installed. Install it by running:

```c
 include("SuperDirt")
```

If it fails to install, make sure you have the `git` command installed. You can do this by running `git --version` from a command prompt. If the command isn't found, then check the install page for how to install **Git**. Once it's installed, you'll need to restart **SuperCollider** before trying again.

For users who have just installed SuperCollider, restarting it prior to running `include("SuperDirt")` could also resolve the error.

### Could not bind to requested port

If you see an error like:

```c
Could not bind to requested port. This may mean it is in use already by another application.
ERROR: Could not open UDP port 57120
```

This probably means you have stray **SuperCollider** processes running, blocking network ports. Shut down **SuperCollider**, and force quit `sclang` and `scserver` in your task manager. Failing that, a reboot will clear them.



## Why don't I hear anything?

### Missing samples

Tidal Cycles is installed with an extensive library of *default* audio samples. The download can sometimes fail, leaving you without any sound to play. If everything seems to be working, but not all sounds play, then probably there was a problem causing the download of Tidal's sound library to fail part way through.

You can fix this by finding the `Dirt-Samples` folder, via the SuperCollider menus: Open `File > Open user Support directory` (top-menu). Find the `downloaded-quarks` and then the `Dirt-Samples` folder. You'll probably find that many of the folders are missing or empty. You can download the missing samples from [this link](https://github.com/musikinformatik/Dirt-Samples) and place them here.

### Audio configuration

The problem can also come from your sound system. Check that everything is plugged correctly, check if you selected the right audio interface and that the volume is up. If you still don't hear anything, it might come from something else.

## Installing via 'stack' rather than 'cabal'

If the **Tidal Haskell Library** has stubborn problems when installed with
`cabal`, particularly if it brings up errors related to the 'network'
library under library, then instead installing with `stack` solves it.

This is done with the following command in a terminal window:

```bash
stack install tidal
```

Once that's done, you just have to tell your editor plugin to use the Tidal
installed with `stack`. In **Atom**, find the settings for the Tidal Cycles
package, and set the `ghci path` setting to:

``` bash
stack exec --package tidal -- ghci
```

Restart *Atom** and all should be well.
