---
id: upgrading
title: Upgrading
---

-----
    
Tidal Cycles is a composite software. To upgrade it, it is **highly** recommended to upgrade everything along with the pattern library (the text editor and the SuperDirt audio engine as well). Each time a new version of **Tidal** is released, a new version of **SuperDirt** will likely follow, etc...

## Ghc

If you are using windows, you will need at least version 9.4.2 of ghc installed, e.g. [via chocolatey](https://community.chocolatey.org/packages/ghc). 

For linux and mac, you don't need to upgrade ghc.

## Library 

Upgrade tidal with the following from a terminal window (**Linux**/**MacOS**/**Windows**):

``` shell
cabal update
cabal v1-install tidal
```

If you originally installed tidal with 'cabal install' rather than 'cabal v1-install', you might have to run the following command instead. However this tends to be less reliable than the above method.
```shell
cabal update
cabal install tidal --lib
```

If things get messed up, under linux and macos you can remove the folders `.ghc` and `.cabal` from your home folder, and try again. Under windows, you can try the same but by deleting the `c:\Users\<user>\AppData\Roaming\cabal` where `<user>` is your username.

## Editor plugin

Your text editor might refer to the Tidal Cycles plugin as an *extension* or as a *package*. Check the sidebar to get more information about ways to update your favorite text editor. 

## SuperDirt

To upgrade the **SuperDirt** sound synthesiser/sampler, open **SuperCollider**,
and paste the following command in the interactive editor. Select the text and press Shift+Enter:

``` c
Quarks.update("SuperDirt")
```

You'll need to recompile the class library. You can do this either by simply restarting the software or via the *Recompile class library* entry on the *Language* top-bar menu.
