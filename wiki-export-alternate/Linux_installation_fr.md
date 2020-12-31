---
title: Linux installation/fr
permalink: wiki/Linux_installation/fr/
layout: wiki
---

# Prérequis

Vous aurez besoin de plusieurs éléments pour une installation complète
de Tidal Cycles :

-   [Git](https://git-scm.com/)
-   [Haskell](https://www.haskell.org/platform/)
-   [SuperCollider](http://supercollider.github.io/download)
-   [Atom Editor](https://atom.io/) (si vous n'aimez pas Atom, essayez [
    une alternative](/wiki/List_of_tidal_editors "wikilink")).

Normalement, votre distribution Linux devrait comporter tout ces
packages dans le package manager par défaut. Si vous utilisez Ubuntu ou
une distribution similaire, vous pouvez installer Haskell en tapant la
commande suivante dans un terminal :

`sudo apt-get install build-essential cabal-install git jackd2`

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

`cabal update`  
`cabal install tidal`

If you've never installed TidalCycles before, then the
`cabal install tidal` step may take some time. At the end of the command
output, it should say `Installed tidal-x.x.x` (where x.x.x is the latest
version number) without any errors.

# Install SuperDirt

TidalCycles is meant to run on top of SuperDirt, so you will have to run
it first to make sound. Here's how to install it.

Start SuperCollider IDE, and in the editor window paste in the following
line of code:

`Quarks.checkForUpdates({Quarks.install("SuperDirt", "v1.1.1"); thisProcess.recompile()})`

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
menus under edit &gt; settings &gt; install, then typing “tidalcycles”
into the search box. Once that’s installed, restart atom.

## Instructions: Emacs Extension

A MELPA package is provided for TidalCycles integration within Emacs.
You must first make sure you have MELPA installed on your machine ([here
are the instructions](https://melpa.org/#/getting-started)) then simply
run `M-x package-install `<return>` tidal `<return>.

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

.

You can check if your username is already in the audio group by typing
the command

    groups -username-

. You may need to log out and log back in for this to take effect.
