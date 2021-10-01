---
title: Emacs
permalink: wiki/Emacs/
layout: wiki
---

------

![emacsicon](emacsicon.png)

Emacs is a classic programmer's editor with a long history. Emacs is so much more than just a text editor, but it has the reputation of being a little difficult to use at first. For a while, Emacs was the only editor that worked with Tidal, but if you are not feeling confident, use [Atom](https://atom.io) (see the sidebar). Emacs has packages for [Tidal ](https://github.com/tidalcycles/Tidal/blob/main/tidal.el) and [SuperCollider](https://github.com/supercollider/scel). Learning Emacs can be intimidating at first but it is also a very rewarding experience. Emacs is actually a whole computing environment, and you can do pretty much everything you can imagine with this software (send emails, read books, edit code, explore files on your computer, chat, etc...). The heart of Emacs is customization: there is a fully-fledged programming language (Emacs-Lisp) to do so.

Depending on your OS, you might have to install it in very different ways. Check what is the recommanded distribution for your system. Once installed, be sure to check out one of the most popular configuration frameworks if you want to make things easier:
- [Doom Emacs](https://github.com/hlissner/doom-emacs)
- [Spacemacs](https://github.com/syl20bnr/spacemacs)

----

## Linux

### Install Emacs

#### Debian / Ubuntu / Mint

You can install Emacs and its Haskell Mode using `apt`, the vanilla package manager:

```bash
sudo apt-get install emacs24 haskell-mode
```

#### Arch / Manjaro

You can install Emacs using the `pacman` package manager:
```bash
sudo pacman –S emacs
```

### Manual installation
#### Edit your .emacs file

To install the Emacs interface to Tidal, you’ll need to edit a configuration file in your home folder called `.emacs`. If it doesn’t exist, create it. Then, add the following, replacing `\~/projects/tidal` with the location of the `tidal.el` file:

```elisp
(add-to-list 'load-path "~/projects/tidal")
(require 'haskell-mode)
(require 'tidal)
```

#### Download tidal.el

The `tidal.el` file can be found here: [tidal.el](https://raw.github.com/tidalcycles/Tidal/master/tidal.el).

### Using Spacemacs

If you are using the **Spacemacs** custom distribution for **Emacs**, you should be able to use a layer made for it by `rbino`. If you are using the develop branch, you just need to add `tidalcycles` to `dotspacemacs-configuration-layers` and it should work out of the box.

Reload the configuration with `SPC f e R` or restart Spacemacs for the changes to take effect. 

The Tidal mode will load automatically whenever you open a `.tidal` file. Press `Ctrl/Cmd+Return` to evaluate a line. Explore the other shortcuts or map them to your liking.

### Using Doom Emacs

Edit your `packages.el` file. Enter `space f p`, and select `packages.el`. Add the following line: `(package! tidal)`. In your terminal, go to `~/.emacs.d/bin` and run `./doom sync`. Wait until the update process is done. Relaunch **Doom Emacs**.

Edit your `BootTidal.hs` path by typing `space f p`, and selecting `config.el`. Anywhere in this file, enter the following line:

```lisp
(setq tidal-boot-script-path "~/.cabal/share/x86_64-osx-ghc-8.8.4/tidal-1.7.4/BootTidal.hs")
```

:::tip
You might want to use a specific `BootTidal.hs` file. Point to the one you like. I've picked the default `BootTidal.hs` file installed with **Tidal**.
:::

You can now open any `.tidal` file you want. If the highlighting is not showing up, run `tidal-mode`. Launch **Haskell** with `C-c C-s`, and eval regions with `C-c C-e`.


### Using the MELPA Package 

A MELPA package is provided for Tidal Cycles integration within **Emacs**.
You must first make sure you have MELPA installed on your machine ([instructions](https://melpa.org/#/getting-started); basically
modifying your `init.el` or `.emacs` files with the first code snippet and
then executing `M-x package-refresh-contents` in Emacs.

Here some [keyring update](https://elpa.gnu.org/packages/gnu-elpa-keyring-update.html) information if it fails to verify signature after running the last command) then simply run:

```elisp
M-x package-install
```
followed by:
```elisp
tidal
```

This extension provides a major mode for `*.tidal` files. Once the package is installed, you can just open a Tidal script and press `C-c C-s` to start Tidal in Emacs, then `C-return` to run the statement under your cursor.

-----


## MacOS

### Install Emacs

Install Emacs using one of the distributions available for MacOS and make it appear in your applications folder:

```bash
brew install emacs --cocoa
brew linkapps
```

### Configure Emacs

It is now time to configure Emacs. Do the following:

```bash
mkdir ~/tidal
cd ~/tidal
curl -L https://raw.githubusercontent.com/yaxu/Tidal/master/tidal.el > tidal.el
```

Create a file in your home folder called `.emacs` (unless it exists already). Open the file in a text editor and insert the following lines:

```elisp
(require 'package)
(add-to-list 'package-archives 
   '("marmalade" .
     "http://marmalade-repo.org/packages/"))
(package-initialize)
(setq load-path (cons "~/tidal/" load-path))
(require 'tidal)
(setq tidal-interpreter "/usr/local/bin/ghci")
```

The above ensures that Emacs has access to the extensions in the
`marmalade` repository (in particular, Haskell-Mode), that the `tidal.el`
file you downloaded earlier is is loaded, and that Tidal can find the
Haskell interpreter.

:::caution
If you have already installed Haskell using the Haskell Platform
installer, make the following change to the above:
```elisp
(setq tidal-interpreter "/usr/bin/ghci")
```
:::

Now start **Emacs** (or if it’s already loaded, restart it to make sure
`.emacs` is read), it should be in your Applications folder (if you start
it from the terminal it’ll probably load an old version). Once **Emacs** has
started, press `alt-x` (i.e. hold down alt while pressing x) and type:

```elisp
package-refresh-contents
```
Then do alt-x again and type:

```elisp
package-install
```
and then:

```elisp
haskell-mode
```

### Using Spacemacs

If you are using the **Spacemacs** custom distribution for **Emacs**, you should be able to use a layer made for it by `rbino`. If you are using the develop branch, you just need to add `tidalcycles` to `dotspacemacs-configuration-layers` and it should work out of the box.

Reload the configuration with `SPC f e R` or restart Spacemacs for the changes to take effect. 

The Tidal mode will load automatically whenever you open a `.tidal` file. Press `Ctrl/Cmd+Return` to evaluate a line. Explore the other shortcuts or map them to your liking.

### Using Doom Emacs


Edit your `packages.el` file. Enter `space f p`, and select `packages.el`. Add the following line: `(package! tidal)`. In your terminal, go to `~/.emacs.d/bin` and run `./doom sync`. Wait until the update process is done. Relaunch **Doom Emacs**.

Edit your `BootTidal.hs` path by typing `space f p`, and selecting `config.el`. Anywhere in this file, enter the following line:

```lisp
(setq tidal-boot-script-path "~/.cabal/share/x86_64-osx-ghc-8.8.4/tidal-1.7.4/BootTidal.hs")
```

:::tip
You might want to use a specific `BootTidal.hs` file. Point to the one you like. I've picked the default `BootTidal.hs` file installed with **Tidal**.
:::

You can now open any `.tidal` file you want. If the highlighting is not showing up, run `tidal-mode`. Launch **Haskell** with `C-c C-s`, and eval regions with `C-c C-e`.


### Using the MELPA Package 

A MELPA package is provided for Tidal Cycles integration within **Emacs**.
You must first make sure you have MELPA installed on your machine ([instructions](https://melpa.org/#/getting-started); basically
modifying your `init.el` or `.emacs` files with the first code snippet and
then executing `M-x package-refresh-contents` in Emacs.

Here some [keyring update](https://elpa.gnu.org/packages/gnu-elpa-keyring-update.html) information if it fails to verify signature after running the last command) then simply run:

```elisp
M-x package-install
```
followed by:
```elisp
tidal
```

This extension provides a major mode for `*.tidal` files. Once the package is installed, you can just open a Tidal script and press `C-c C-s` to start Tidal in Emacs, then `C-return` to run the statement under your cursor.


## Windows

### Installing Emacs

Download [Emacs for Windows](http://ftp.gnu.org/gnu/emacs/windows/). Extract the `.zip` file, then simply run Emacs from `bin\\runemacs.exe`. You will need to find or create the `.emacs` file located in your home directory. This is the Emacs config file. Your exact location may vary depending on how Emacs is installed/run.

If you run `runemacs.exe` by double-clicking on it, then your `.emacs` file
will probably be located at `C:\\Users\\(username)\\AppData\\Roaming\\`.
If you put the `runemacs.exe` folder on your path and run it from a
command prompt, then your `.emacs` file will probably be located at
`c:\\users\\\(username)\\` Be aware of how you started `runemacs.exe`, and
create the `.emacs` in the appropriate folder if it does not exist
already.

Alternately, you can try to have Emacs create the `.emacs` file for you
automatically by changing a config setting from one of the Emacs menus
and saving your configuration.

### Installing Haskell Mode

Haskell-mode needs to be installed in Emacs. The easiest way to do this
in Windows is add the Marmalade package manager. There are other ways to install haskell-mode (detailed [here](https://github.com/haskell/haskell-mode) but Marmalade is probably easiest. Enable Marmalade by adding this to your .emacs file:

```elisp
(require 'package)
(add-to-list 'package-archives
            '("marmalade" . "http://marmalade-repo.org/packages/"))
(package-initialize)
```

Refresh the package index by typing `M-x` and then `package-refresh-contents`.

Install `haskell-mode` by doing `M-x` and then `package-install`, followed by `haskell-mode`.

:::caution
The `M-x` key combination is `Alt-x` in Windows.
:::

### Install Tidal Mode

In `.emacs` add the following lines to enable Tidal:

```elisp
(add-to-list 'load-path "c:/projects/tidal")
(require 'haskell-mode)
(require 'tidal)
```

Replace `c:/projects/tidal` with the path to the folder that
contains `tidal.el`. This file can be obtained from the Tidal repository,
[here](https://github.com/yaxu/Tidal). The easiest way to use it is to
clone the Tidal repository and modify the `.emacs` file to use the path
where you cloned it:

```shell
git clone https://github.com/yaxu/Tidal c:\tidal
```

If you do the same, your `.emacs` configuration file should look like this:

```elisp
(add-to-list 'load-path "c:/tidal")
(require 'haskell-mode)
(require 'tidal)
```

### Using the MELPA Package 

Alternatively, A MELPA package is provided for Tidal Cycles integration within **Emacs**. Please be sure to read everything in the Windows section without trying this.
You must first make sure you have MELPA installed on your machine ([instructions](https://melpa.org/#/getting-started); basically
modifying your `init.el` or `.emacs` files with the first code snippet and
then executing `M-x package-refresh-contents` in Emacs.

Here some [keyring update](https://elpa.gnu.org/packages/gnu-elpa-keyring-update.html) information if it fails to verify signature after running the last command) then simply run:

```elisp
M-x package-install
```
followed by:
```elisp
tidal
```

This extension provides a major mode for `*.tidal` files. Once the package is installed, you can just open a Tidal script and press `C-c C-s` to start Tidal in Emacs, then `C-return` to run the statement under your cursor.




## Test Tidal with Emacs

You should now have installed the Tidal Mode for **Emacs**. Open a new file, and give it a random name like `helloworld.tidal`. Once the file is opened, you still have to start **Tidal**. Enter `Ctrl-C` and then `Ctrl-S` to start. Check if **Emacs** and Tidal are working correctly by entering the following line and by pressing `Ctrl+Enter` to evaluate the single-line block:

```haskell
d1 $ brak $ sound "bd sn/2"
```


:::tip
`Ctrl+Enter`: evaluate a single line.

`Ctrl+C Ctrl+E`: evaluate multiple lines.

For more shortcuts, look inside the `tidal.el` file.
:::

:::caution
**Advanced Users:** please notice that the location of the `BootTidal.hs` file is defined in the `tidal.el` file to be:
```shell
ghc-pkg describe $(ghc-pkg latest tidal) | grep data-dir | cut -f2 -d ' '
```
You might need to override this, e.g. with the following setting (replace the path with the actual location of the BootTidal.hs file).
```elisp
(setq tidal-boot-script-path "~/.cabal/share/x86_64-linux-ghc-8.6.5/tidal-1.4.8/BootTidal.hs")
```
You only need to actually change this file if you want to tweak the
`superdirtTarget`, e. g. to use SuperCollider on a remote host.
:::

