---
title: Troubleshoot on Linux
id: troubleshoot_linux
---

## Is Haskell installed?

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

## Is the Tidal Library installed?

Keeping that **ghci** window open, type (or paste in):

```haskell
import Sound.Tidal.Context
```

You should now see something like:

```haskell
GHCi, version 8.6.3: http://www.haskell.org/ghc/  :? for help
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
cabal new-install tidal --lib
```

*Note:* as of version 1.7 instead you'll have to use the following commands:
```bash
cabal v1-update
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

## Is the Jack Audio Server ok?

Supercollider run on a Jack audio server in order to deliver sound to
your speakers. If you see the following error in SuperCollider's post window: 

```
Couldn't set realtime scheduling priority 1: Operation not permitted
```

You will need to setup **Jack** with the command:

```bash
sudo dpkg-reconfigure jackd2
```

and add your username to the audio group with (replace USERNAME):

```bash
sudo addgroup USERNAME audio
```

You can check if your username is already in the *audio group* by typing the command:

```bash
groups -username-
```

You may need to log out and log back in for this to take effect.

## Compilation errors

You might encounter problems when installing the **Tidal** Haskell Library. If you encounter errors, the problem might come from the Tidal Haskell library itself. Run the following command to ensure that it is correctly installed:

```bash
cabal update
cabal new-install tidal --lib
```

Sometimes, the installation process can fail without any clear reason. This command can help to fix the problem: 

```bash
sudo ghc-pkg recache
cabal update
cabal new-install tidal --lib
```

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
