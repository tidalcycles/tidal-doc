---
title: Emacs
permalink: wiki/Emacs/
layout: wiki
---

Emacs is a classic programmer’s editor, very well developed but a little
difficult to use at first. For a while Emacs was the only editor that
worked with Tidal, but if you’re not feeling confident, you may wish to
try the Atom editor instead, using the instructions above.

# Emacs under Linux

Debian, Ubuntu and Linux Mint users can install emacs, along with its
haskell front-end, this way:

`sudo apt-get install emacs24 haskell-mode`

To install the emacs interface to tidal, you’ll need to edit a
configuration file in your home folder called .emacs. If it doesn’t
exist, create it. Then, add the following, replacing \~/projects/tidal
with the location of the tidal.el file.

`(add-to-list 'load-path "~/projects/tidal")`  
`(require 'haskell-mode)`  
`(require 'tidal)`

If tidal.el did not come with this document, you can grab it here:
<https://raw.github.com/tidalcycles/Tidal/master/tidal.el>

Now see under ‘Testing, testing’ below to check everything is working.

# Emacs under Mac OS

Install emacs, and make it appear in your applications folder:

`brew install emacs --cocoa`  
`brew linkapps`

Ok now time to configure emacs.. Do the following:

`mkdir ~/tidal`  
`cd ~/tidal`  
`curl -L `[`https://raw.githubusercontent.com/yaxu/Tidal/master/tidal.el`](https://raw.githubusercontent.com/yaxu/Tidal/master/tidal.el)` > tidal.el`

Then create a file in your home folder called .emacs (unless it exists
already), then open the file in a text editor and insert the following
lines:

`(require 'package)`  
`(add-to-list 'package-archives `  
`   '("marmalade" .`  
`     "`[`http://marmalade-repo.org/packages/`](http://marmalade-repo.org/packages/)`"))`  
`(package-initialize)`  
`(setq load-path (cons "~/tidal/" load-path))`  
`(require 'tidal)`  
`(setq tidal-interpreter "/usr/local/bin/ghci")`

The above ensures that emacs has access to the extensions in the
‘marmalade’ repository (in particular, haskell-mode), that the tidal.el
file you downloaded earlier is is loaded, and that tidal can find the
haskell interpreter.

Note: If you have already installed Haskell using the Haskell Platform
installer, make the following change to the above:

`(setq tidal-interpreter "/usr/bin/ghci")`

Now start emacs (or if it’s already loaded, restart it to make sure
.emacs is read), it should be in your Applications folder (if you start
it from the terminal it’ll probably load an old version). Once emacs has
started, press alt-x (i.e. hold down alt while pressing x) and type:

`package-refresh-contents`

Then do alt-x again and type:

`package-install`

and then:

`haskell-mode`

Now see under ‘Testing, testing’ below to check everything is working.

# Emacs under Windows

Download Emacs for Windows from <http://ftp.gnu.org/gnu/emacs/windows/>.
Extract the zip file, then simply run Emacs from bin\\runemacs.exe.

Next you will need to find or create the .emacs file located in your
home directory. This is the Emacs config file. Your exact location may
vary depending on how Emacs is installed/run.

If you run runemacs.exe by double-clicking on it, then your .emacs file
will probably be located at C:\\Users\\<username>\\AppData\\Roaming\\.
If you put the runemacs.exe folder on your path and run it from a
command prompt, then your .emacs file will probably be located at
c:\\users\\<username>\\ Be aware of how you started runemacs.exe, and
create the .emacs in the appropriate folder if it does not exist
already.

Alternately, you can try to have Emacs create the .emacs file for you
automatically by changing a config setting from one of the Emacs menus
and saving your configuration.

Haskell-mode needs to be installed in Emacs. The easiest way to do this
in Windows is add the Marmalade package manager in Emacs. There are
other ways to install haskell-mode (detailed at
<https://github.com/haskell/haskell-mode>), but Marmalade is probably
easiest.

Enable Marmalade by adding this to your .emacs file:

`(require 'package)`  
`(add-to-list 'package-archives`  
`            '("marmalade" . "`[`http://marmalade-repo.org/packages/`](http://marmalade-repo.org/packages/)`"))`  
`(package-initialize)`

Refresh the package index by M-x package-refresh-contents. Then install
haskell-mode via M-x package-install \[RET\] haskell-mode.

Note the M-x key combination is alt-x in Windows.

In .emacs add this to enable Tidal:

`(add-to-list 'load-path "c:/projects/tidal")`  
` (require 'haskell-mode)`  
` (require 'tidal)`

...but replace c:/projects/tidal with the path to the folder that
contains tidal.el. tidal.el can be obtained from the Tidal repository,
at <https://github.com/yaxu/Tidal>. The easiest way to use it is to
clone the Tidal repository and modify the .emacs file to use the path
where you cloned it:

`git clone `[`https://github.com/yaxu/Tidal`](https://github.com/yaxu/Tidal)` c:\tidal`

then:

`(add-to-list 'load-path "c:/tidal")`  
` (require 'haskell-mode)`  
` (require 'tidal)`

Now see under ‘Testing, testing’ below to check everything is working.

# Testing, testing...

Now start emacs, and open a new file called something like
“helloworld.tidal”. Once the file is opened, you still have to start
tidal, you do that by typing Ctrl-C then Ctrl-S.

To check everything is working, type the following line, then type
Ctrl-Enter to evaluate the (single-line) block:

`d1 $ brak $ sound "bd sn/2"`

All being well you’ll hear a bass drum and a kick, and can progress to
the ‘patterns’ menu to start learning Tidal.

You could also run Ctrl-C Ctrl-E to evaluate multiple lines. If you
inspect the tidal.el file you can easily find the section where even
more shortcuts are defined.

Advanced users please notice that the location of the `BootTidal.hs`
file is defined in the `tidal.el` file to be

` ghc-pkg describe $(ghc-pkg latest tidal) | grep data-dir | cut -f2 -d ' '`

You might need to override this, e.g. with the following setting
(replace the path with the actual location of the BootTidal.hs file):

`  (setq tidal-boot-script-path "~/.cabal/share/x86_64-linux-ghc-8.6.5/tidal-1.4.8/BootTidal.hs")`

You only need to actually change this file if you want to tweak the
`superdirtTarget`, e. g. to use SuperCollider on a remote host.
