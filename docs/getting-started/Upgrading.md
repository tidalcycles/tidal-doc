---
id: upgrading
title: Upgrading
---

-----
    
Tidal Cycles is a composite software. To upgrade it, it is **highly** recommended to upgrade everything along with the pattern library (the text editor and the SuperDirt audio engine as well). Each time a new version of **Tidal** is released, a new version of **SuperDirt** will likely follow, etc...

## Library 

Upgrade tidal with the following from a terminal window (**Linux**/**MacOS**/**Windows**):

``` shell
cabal update
cabal install tidal --lib
```

If you're using an older version of haskell you might have to miss the
`--lib` off the above command.

## Editor plugin

Your text editor might refer to the Tidal Cycles plugin as an *extension* or as a *package*. Check the sidebar to get more information about ways to update your favorite text editor. 

## SuperDirt

To upgrade the **SuperDirt** sound synthesiser/sampler, open **SuperCollider**,
and paste the following command in the interactive editor. Select the text and press Shift+Enter:

``` c
Quarks.update("SuperDirt")
```

You'll need to recompile the class library. You can do this either by simply restarting the software or via the *Recompile class library* entry on the *Language* top-bar menu.
