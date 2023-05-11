---
title: Uninstall
id: uninstalling
---

**Tidal Cycles** does not provide an easy uninstaller. To uninstall **Tidal**, you will need to:
* Uninstall **SuperDirt** and/or **SuperCollider** if you are not already using it for another purpose.
* Uninstall the **Tidal library** and the GHC compiler.

## Linux

Uninstalling *Tidal Cycles* on Linux can be tricky. There are multiple ways of installing it depending on the distribution you are using. Here are some tips you can use to locate all the components that are part of the **Tidal** install.

### Using whereis

Type `whereis scide sclang scsynth` in a terminal path to get the path to **SuperCollider** binaries.

### SuperDirt Quark

Open **SuperCollider**. In the `File` menu, click on `Open user support directory`. This menu will take you where **SuperDirt** is currently installed on your computer. Check in the `downloaded-quarks` for **SuperDirt**. Don't forget to uninstall the `Dirt-Samples` folder as well. It can be quite heavy (all the samples are located here).

### Uninstall stack

If you installed **Tidal** using **Stack**, you can use a dirty but simple solution to uninstall it. Run `rm -rf $HOME/.stack`. This command will delete the hidden stack folder located in your root directory.


**Stack** will sometimes install a binary located here: `$HOME/.local/bin`. Delete it if you want.

:::warning
Double-check or triple-check the `rm -rf` command. This is a powerful tool that will delete things definitively. Use it with caution as it can be quite dangerous if you mess with it.
:::

### Clean up cabal and GHC

To clean up `cabal` and `GHC` (user-installed packages), try running the following command in a terminal window:
```bash
rm ~/.cabal ~/.ghc
```

:::warning
Double-check or triple-check the `rm -rf` command. This is a powerful tool that will delete things definitively. Use it with caution as it can be quite dangerous if you mess with it.
:::

## Windows
For chocolatey installs, see the instructions for [Windows Chocolatey Cleanup](https://tidalcycles.org/docs/getting-started/windows-choco-cleanup). 

## MacOS

### Using uninstall-hs

Open a terminal window and type `uninstall-hs`. This command will delete many things **Haskell** related from your computer.

### Uninstalling ghcup

If you installed **Tidal** using `ghcup`, you can try a hacky solution. Open a terminal window and paste `rm -rf ~/.ghcup`. This will delete the `.ghcup` hidden directory that was living in your root directory.

:::warning
Double-check or triple-check the `rm -rf` command. This is a powerful tool that will delete things definitively. Use it with caution as it can be quite dangerous if you mess with it.
:::

### Clean up cabal and GHC

To clean up `cabal` and `GHC` (user-installed packages), try running the following command in a terminal window:
```bash
rm ~/.cabal ~/.ghc
```

:::warning
Double-check or triple-check the `rm -rf` command. This is a powerful tool that will delete things definitively. Use it with caution as it can be quite dangerous if you mess with it.
:::
