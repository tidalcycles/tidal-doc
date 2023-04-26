---
title: TroubleShoot on Windows
id: troubleshoot_windows
---
**Note - Known Haskell version problems:** There are known issues installing Tidal on Windows related to  Haskell component versions. These generally come from how Chocolatey works and will be eventually resolved. If you are experiencing any of these, it is important to know what install method you used (choco vs ghcup). You also need to decide if you want to continue using choco to resolve install issues, or switch to ghcup, the native Haskell installer. If you switch to ghcup, you may want to consider removing components from choco (some or all).

### Haskell ghci version issues
Version 9.6.1 is incompatible with Tidal. On Windows, you need these versions:
- ghci 9.4.4
- cabal 3.8.1.0

To fix ghc version with choco, first uninstall ghc/cabal, then install with the exact version argument:

```powershell
choco uninstall ghc
choco uninstall cabal
choco install ghc --version=9.4.4
choco install cabal --version=3.8.1.0

```
To change versions with ghcup:  
(If you don't have ghcup, see [Haskell ghcup install](https://www.haskell.org/ghcup/install/).)

```powershell
ghcup install ghc 9.4.4
ghcup install cabal 3.8.1.0
ghcup set ghc 9.4.4
ghcup set cabal 3.8.1.0

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

### network-3.1.2.8 error during Tidal package install

> failed to install network-3.1.2.8  
> package has a ./configure script. If on windows, this requires a unix compatibility
toolchain such as MinGW+MSYS or Cygwin.

:::tip
Install of Cygwin is not needed. Haskell installs from either choco or ghcup will install msys2 which provides the unix shell. What is missing is that cabal can't find it, so you need to fix your PATH.
:::

Steps to resolve:
- **Choco:** Add these values to your system PATH environment variable:
```powershell
C:\tools\ghc-9.4.4\mingw\bin
C:\tools\msys64\usr\bin
```

- **ghcup:** Add these values to your system PATH environment variable:
```powershell
C:\ghcup\ghc\9.4.4\mingw\bin
C:\ghcup\msys64\usr\bin
```
- exit and restart powershell (as admin)  
Don't skip this - it will ensure your new PATH settings are applied.

- Follow the steps outlined above to delete your local ghc and cabal directories, and then run the Tidal package install commands again.

### other package errors from Tidal package install
Sometimes the Tidal package install (from cabal) will fail with multiple errors. Sometimes you even see a long string of errors. Often these are related to the `network-3.1.2.8` error and will be resolved by following those steps.

If your errors don't include the network-3.1.2.8 error, the first path to resolution is to clean out your package install, and run the cabal commands again (above).

Other things to check:
- Be sure to clean out all ghc/cabal directories in your local \AppData\. (See above)
- If you have Haskell components installed by both choco and ghcup, this could cause problems. 
- Check your environment variables, restart PowerShell (as admin). Reboot.


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

If you still see an error message, then make sure you have installed the **Full** Haskell Platform and try again. If it still doesn't work, ask help on the Forum or on the Discord or RocketChat.

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
