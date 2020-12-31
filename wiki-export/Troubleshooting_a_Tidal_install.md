---
title: Troubleshooting a Tidal install
permalink: wiki/Troubleshooting_a_Tidal_install/
layout: wiki
---

<languages/> <translate> If you've gone through the Tidal installation
instructions, but can't get it working, here's some steps to locate what
the problem is (or problems are).

# Haskell

Open a terminal window, and type:

ghci

You should see something like this

GHCi, version 8.6.3: <http://www.haskell.org/ghc/> :? for help

` Prelude> `

If you don't see something like the above, you probably need to install
Haskell. You might well see a different version number, don't worry. At
the time of writing, Tidal is tested against versions right back to
7.10.3.

# Tidal library

Keeping that ghci window open, type (or paste in):

import Sound.Tidal.Context

You should now see something like:

GHCi, version 8.6.3: <http://www.haskell.org/ghc/> :? for help

` Prelude> import Sound.Tidal.Context`  
` Prelude Sound.Tidal.Context> `

If you instead see an error message like:

<no location info>: error:

`   Could not find module ‘Sound.Tidal.Context’`

This means that the tidal library isn't installed. To install it, open a
new terminal window and type:

cabal update

` cabal new-install tidal --lib`

If you see an error message (ignoring warnings about 'legacy v1 style'
commands), then make sure you have installed the 'full' haskell platform
and try again. If it still doesn't work, please make a note of the error
message and ask the [Community](/wiki/Community "wikilink") for help.

# SuperCollider / SuperDirt

Start SuperCollider, and paste the following in:

SuperDirt.start

With your cursor on the same line, run it with shift-enter.

You should see messages about lots of sample banks being loaded and
eventually:

SuperDirt: listening to Tidal on port 57120

If you instead see an error message, read on..

## ERROR: Class not defined.

If you see the error

ERROR: Class not defined.

This means SuperDirt isn't installed. Install it by running

include("SuperDirt")

If it fails to install, make sure you have the \`git\` command
installed. You can do this by running \`git --version\` from a command
prompt. If the command isn't found, then check the install page for how
to install git. Once it's installed, you'll need to restart
supercollider before trying again.

For users who have just installed SuperCollider restarting it prior to
running include("SuperDirt") could also resolve the error.

## Could not bind to requested port

If you see an error like:

Could not bind to requested port. This may mean it is in use already by
another application.

` ERROR: Could not open UDP port 57120`

This probably means you have stray supercollider processes running,
blocking network ports. Shut down supercollider, and force quit
\`sclang\` and \`scserver\` in your task manager. Failing that, a reboot
will clear them.

# Compile problems

Often the problem is with installing the tidal haskell library. When
this comes up with errors, you know that's (part of) your installation
problem.

``` shell
cabal update
cabal new-install tidal --lib
```

## ghc-pkg recache

If some cabal packages fail to compile for no clear reason, this can
help:

``` shell
sudo ghc-pkg recache
cabal update
cabal new-install tidal --lib
```

## Haskell version

Often, installing the *full* (rather than core) version of the Haskell
platform will clear up your problems. Get it from here:
<https://www.haskell.org/platform/>

# Missing sounds

If everything seems to be working, but not all sounds play, then
probably there was a problem causing the download of Tidal's extensive
library of 'default' sounds to fail part way through.

You can fix this by finding the \`Dirt-Samples\` folder, via the
supercollider menus: Open user support directory \> downloaded-quarks \>
Dirt-Samples. You'll probably find that many of the folders are missing
or empty. You can download all the samples from here:

` `[`https://github.com/musikinformatik/Dirt-Samples`](https://github.com/musikinformatik/Dirt-Samples)

... and then copy them over the existing Dirt-Samples folder.

# Installing via 'stack' rather than 'cabal'

If the tidal Haskell library has stubborn problems when installed with
cabal, particularly if it brings up errors related to the 'network'
library under library, then instead installing with \`stack\` solves it.

This is done with the following command in a terminal window:

``` bash
stack install tidal
```

Once that's done, you just have to tell the atom plugin to use the tidal
installed with stack. In atom, find the settings for the tidalcycles
package, and set the 'ghci path' setting to

    stack exec --package tidal -- ghci

. Then, restart atom and all should be well. </translate>
