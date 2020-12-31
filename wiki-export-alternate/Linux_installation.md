---
title: Linux installation
permalink: wiki/Linux_installation/
layout: wiki
---

<translate>

# Required Prerequisites

There's a few things to install as part of a complete tidal system:

-   [Git](https://git-scm.com/)
-   [Haskell](https://www.haskell.org/platform/)
-   [SuperCollider](http://supercollider.github.io/download)
-   [Atom Editor](https://atom.io/) (if you don't like the atom editor
    for some reason, please check out the [list of
    alternatives](/wiki/List_of_tidal_editors "wikilink"))

Hopefully your Linux distribution makes the pre-requisites easily
available to you via a package manager. For example, if you are using
recent version of Ubuntu or similar, you can install Haskell with the
following command in a terminal window:

sudo apt-get install build-essential cabal-install git jackd2

# Install Supercollider

Installing supercollider via this method (i.e.
`sudo apt-get install supercollider sc3-plugins`) generally doesn't
work. Either the supercollider version is too old (superdirt needs at
least version 3.7), or the version of supercollider is mismatched with
sc3-plugins. If you're using ubuntu, mint or a similar distribution, my
advice is to ignore the supercollider packages and just compile them
yourself. Instructions for compiling from source on various distros is
available
[here](https://supercollider.github.io/development/building.html). If
you're using a recent Debian-based distro (for example, Ubuntu &gt;=
18.04), these scripts make it easy to do so:

` `[`https://github.com/lvm/build-supercollider`](https://github.com/lvm/build-supercollider)

Just paste in the four commandline instructions under "How to?" in turn
(you can ignore the bit about 'the debian way')

# Optional Prerequisites

(This section can be ignored if in the previous section ‘Install
Supercollider’ you have decided to execute the scripts in
[<https://github.com/lvm/build-supercollider>](https://github.com/lvm/build-supercollider)
since those scripts already contain the installation of the sc3-plugins
through ‘$ sh build-sc3-plugins.sh')

The following is optional, but recommended:

-   [SC3 Plugins](https://supercollider.github.io/sc3-plugins/) - you
    may need the SuperCollider sc3-plugins if you want to use any of the
    synths included in SuperDirt. Most of the examples in the
    documentation will still work, so you could skip this step and
    return to it later.

# Install TidalCycles

Open a Terminal. If you’re unsure how to open a terminal window in
Linux, it varies according to distribution but generally find “Terminal”
in the menus. Then type and run these two commands *(ignoring any
complaints that cabal has of 'legacy v1 style of usage')*:

cabal update

`cabal install tidal --lib`

If you've never installed TidalCycles before, then the
`cabal install tidal` step may take some time. At the end of the command
output, it should say `Installed tidal-x.x.x` (where x.x.x is the latest
version number) without any errors.

# Install SuperDirt

TidalCycles is meant to run on top of SuperDirt, so you will have to run
it first to make sound. Here's how to install it.

Start SuperCollider IDE (to start the ide through a terminal type
‘scide’), and in the editor window paste in the following line of code:

Quarks.checkForUpdates({Quarks.install("SuperDirt", "v1.1.3");
thisProcess.recompile()})

Run the code by clicking on it, to make sure the cursor is on this line,
then hold down Shift and press Enter.

It'll take a while to install. You'll see something like the following:

``` plaintext
Installing SuperDirt
Installing Vowel
Vowel installed
Installing Dirt-Samples
Dirt-Samples installed
SuperDirt installed
compiling class library...
...
(then some blah blah, and finally, something like:)
...

<!--T:41-->
*** Welcome to SuperCollider 3.10.0. *** For help press Ctrl-D.
```

## Using the SuperCollider interpreter in a terminal

You can also install it using the terminal interpreter. You might want
to get familiar with it if you prefer using your own text editor. There
are great SuperCollider integration plugins available for
[Emacs](https://github.com/supercollider/scel),
[Vim](https://github.com/supercollider/scvim) or
[Atom](https://atom.io/packages/supercollider).

To start the interpreter just run `sclang` in a terminal, then just
paste the command line from above and press Enter to run it. Once the
installation is done, you can exit the interpreter by pressing Ctrl + C.

# Install editor extensions

TidalCycles was made to be run in an interactive environment. The way to
do it is to get a text editor and install an extension for it. Here's a
list of extensions you might want to try:

-   [Emacs extension](https://github.com/supercollider/scel)
-   [Vim extension](https://github.com/supercollider/scvim)
-   [Atom extension](https://github.com/crucialfelix/atom-supercollider)

## Instructions: Atom Extension

Start Atom, and install the TidalCycles plugin. You can find it via the
menus under edit &gt; settings/preferences &gt; install, then typing
“tidalcycles” into the search box. Once that’s installed, restart atom.

## Instructions: Emacs Extension

A MELPA package is provided for TidalCycles integration within Emacs.
You must first make sure you have MELPA installed on your machine ([here
are the instructions](https://melpa.org/#/getting-started); basically
modifying your init.el or .emacs files with the first code snippet and
then executing `M-x package-refresh-contents` in Emacs; Here some
[keyring
update](https://elpa.gnu.org/packages/gnu-elpa-keyring-update.html)
information if it fails to verify signature after running the last
command) then simply run
`M-x package-install `<return>` tidal `<return>. For more information or
troubleshooting check the [Emacs
page](https://tidalcycles.org/index.php/Emacs)

This extension provides a major mode for `*.tidal` files. Once the
package is installed, you can just open a Tidal script and press
`C-c C-s` to start Tidal in Emacs, then `C-return` to run the statement
under your cursor.

# Test Your Installation

Now you are ready to [Start TidalCycles and SuperDirt for the first
time](/wiki/Start_tidalcycles_and_superdirt_for_the_first_time "wikilink").

# Installation Troubleshooting

Supercollider run on a Jack audio server in order to deliver sound to
your speakers. If you see in Supercollider's Post Window a error

    Couldn't set realtime scheduling priority 1: Operation not permitted

you'll need to setup Jack with the command

     sudo dpkg-reconfigure jackd2 

and add your username to the audio group with

     sudo addgroup -username- audio 

(with your Linux username instead of -username-).

You can check if your username is already in the audio group by typing
the command

    groups -username-

. You may need to log out and log back in for this to take effect.

More Troubleshooting in [Troubleshooting a Tidal
installation](https://tidalcycles.org/index.php/Troubleshooting_a_Tidal_install)

</translate>
