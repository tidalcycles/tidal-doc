---
title: Windows Cleanup - Chocolatey
id: windows-choco-cleanup
---
*(Thanks to @il_mix for creating and testing the chocolatey cleanup steps.)*

**Purpose:**  
This documentation is a reference for how to cleanup / uninstall from a Windows Chocolatey Installation. It covers multiple scenarios:

1. Clean up of Haskell components
2. Full wipe of all Chocolatey component installs, then remove the choco application
3. Removing individual components


**Background**  
Chocolatey is package management system that is used for the Tidal Cycles automated install process. It covers the complete install of all components and dependencies needed to run Tidal. It is a good solution and works without issue much of the time. But there can also be problems and there may be a need to remove components or the whole Chocolatey environment from your computer. **This page is only a guide. Not all problems are covered.**

:::info

- All steps in Powershell need to be done running Powershell as administrator.
- You can run this command to see what components and versions are currently installed by choco:

```powershell
choco list --local-only
```

:::

## Steps for Haskell Cleanup

If you have an older install from chocolatey, there will be older versions of Haskell components that can cause conflicts after the new Haskell components are installed. In this scenario, you need to uninstall any Haskell files before running the Chocolatey Tidal installer. Note that in some cases, a full uninstall of all Chocolatey may still be needed or desired.

- Uninstall Haskell components
```powershell
choco uninstall ghc
choco uninstall cabal
```

- Remove local packages - delete these directories:
```powershell
C:\Users\yourUser\AppData\Roaming\ghc
C:\Users\yourUser\AppData\Roaming\cabal
C:\Users\yourUser\AppData\Local\ghc
C:\Users\yourUser\AppData\Local\cabal
```

- Remove any leftover ghc / cabal directories:
```powershell
C:\tools\ghc-\<version\>  for example: - C:\tools\ghc-8.10.0
C:\ProgramData\chocolatey\bin\cabal.exe
```

#### Tidal install options  

After you cleanup Haskell, you have two options:
1. Run the full automated installer again.
```powershell
choco install tidalcycles
```

\- OR -

2. Install just Haskell via chocolatey and manually install Tidal
```powershell
choco install ghc
cabal update
cabal v1-install tidal
```

## Steps for full wipe of Chocolatey

This will remove everything installed by Chocolatey, then remove the choco installer itself. It cleans up environment variables and directories. Note: this will remove everything in the Tidal stack: SuperCollider/SuperDirt, Pulsar, Haskell, etc. This is recommended if:

- you want to switch to manual install
- you have significant install problems and want to "start fresh"

**Steps**

- Uninstall chocolatey installed components
```powershell
choco uninstall all -x -y
```
- Remove applications - delete these directories
```
C:\tools
C:\ProgramData\chocolatey
```

- Remove local packages - delete these directories:
```
C:\Users\yourUser\AppData\Roaming\ghc
C:\Users\yourUser\AppData\Roaming\cabal
C:\Users\yourUser\AppData\Local\ghc
C:\Users\yourUser \AppData\Local\cabal
```

- Environment variables
    - User variables:
        - delete: ChocolateyLastPathUpdate, ChocolateyToolsLocation
        - from Path, remove: C:\tools\ghc-yourVersionNumber\bin
    - System variables:
        - delete variables: ChocolateyInstall
        - from Path, remove: C:\ProgramData\chocolatey\bin

- **Reboot system**

Now you can proceed with the Manual install steps, or start over from scratch with the Automated installer steps.

Good luck!

:::info

Sometimes the Tidal install process can be complicated and take many steps. Stick with it! The good news is that once it is working, the Tidal stack is very stable and reliable.

:::

## Steps for removing individual components

Any package installed by choco can be uninstalled with basic choco commands. The challenge is that there may be other directories or files left behind that could cause conflicts or confusion later. (What is this old directory doing on my system?)

What is installed by choco?

```powershell
choco list --local-only
```

To uninstall a component, first run the uninstall command:
```powershell
choco uninstall <component>
# choco uninstall sc3-plugins
```

Then search your system to find out if there are any files left behind that need to be removed.
