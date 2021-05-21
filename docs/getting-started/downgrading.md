---
id: downgrading
title: Downgrading
---
-----

Sometimes, you might want to return to an earlier version of Tidal. Use the **ghc-pkg** command to do so. Enter the following commands in your terminal (or **Powershell** for Windows users) to downgrade your Tidal installation.


## Listing all the currently installed versions

This command will list the versions of Tidal you have installed. If there is more than one, the most recent will be used: 

```bash
ghc-pkg list tidal
```

## Uninstalling a version 

To uninstall a version, you can do, for example:

```bash
ghc-pkg unregister tidal-1.0.6
```

Do this for each version until the most recent is the one you want.

## Choosing a specific version

If you don't have the one you want installed, you can select the desired version:

```bash
cabal install tidal-0.9.10
```
