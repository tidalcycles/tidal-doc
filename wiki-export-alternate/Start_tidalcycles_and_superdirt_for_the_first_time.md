---
title: Start tidalcycles and superdirt for the first time
permalink: wiki/Start_tidalcycles_and_superdirt_for_the_first_time/
layout: wiki
---

<languages /> <translate> There are two steps to starting up TidalCycles
each time:

1.  Start SuperCollider and start SuperDirt within SuperCollider.
2.  Start TidalCycles inside your editor

# Start SuperDirt inside SuperCollider

There are two ways to start SuperDirt; you can either run it through the
SuperCollider IDE or using SuperCollider's interpreter `sclang` in a
terminal. New users are recommended to use the IDE.

## Using the SuperCollider IDE

To start SuperDirt, paste the following code into a SuperCollider window
(for macOS users &gt; 10.14.6, you'll probably need to copy the startup
script
<https://github.com/musikinformatik/SuperDirt/blob/develop/superdirt_startup.scd>
and paste it to \~/Library/Application\\
Support/SuperCollider/startup.scd):

SuperDirt.start

Then click on the code, hold down shift and press enter. The post window
should show the SuperDirt startup progress, and at the end you should
see:

SuperDirt: listening to Tidal on port 57120

### Automatic SuperDirt Startup in the IDE

If you want SuperDirt to start automatically when you open
SuperCollider, add the `SuperDirt.start` line to the SuperCollider
startup file. You can edit the SuperCollider startup file from within
SuperCollider itself by choosing File -&gt; Open Startup File from the
top menu. If you wish to use a more comprehensive SuperDirt startup file
with more options, [refer to this
example](https://github.com/musikinformatik/SuperDirt/blob/master/superdirt_startup.scd).

## Using the SuperCollider terminal interpreter

You can start SuperDirt using this [startup
script](https://raw.githubusercontent.com/musikinformatik/SuperDirt/develop/superdirt_startup.scd)
by simply typing `sclang superdirt_startup.scd` in a terminal.

Once everything's loaded, you should be able to find the following
statement in the output:

SuperDirt: listening to Tidal on port 57120

The default startup script is pretty simple, it provides two orbits and
loads the default samples but you might want to edit it to configure
[Custom Samples](/wiki/Custom_Samples "wikilink") (and add orbits as well).

# Start TidalCycles inside your text editor

## Instructions for Emacs

Head over to the [Linux installation](/wiki/Linux_installation "wikilink") to
install the Emacs plugin if you haven't done it already. Once the Tidal
plugin is installed, all you need to do is to open a `*.tidal` file and
press `C-c C-s` to start Tidal in Emacs. If everything went fine you
should see Tidal's output showing up in a separate window.

You can now simply press `C-return` to evaluate any statement under your
cursor. You can try this one as an example to check that everything runs
fine:

d1 $ sound "bd sn"

You should hear a electronic bass drum sound followed by a snare sound.
Then evaluate the following to stop all your instruments :

hush

## Instructions for Atom

1.  Start Atom
2.  create a new file and save it with a filename that ends in .tidal,
    e.g. test.tidal.
3.  open the Packages menu and select TidalCycles -&gt; Boot
    TidalCycles. A small window will open at the bottom of the window
    containing the \`t&gt;\` prompt (and hopefully no error messages).

Try running a simple pattern by typing in the code below and holding
down shift and pressing enter to evaluate it (Holding down control and
pressing enter will also work, this evaluates multiple lines).

d1 $ sound "bd sn"

If you hear sound, congratulations!

If you get stuck, you are very welcome to ask questions and share
problems on the forum, or on the \#tidal channel of the [Lurk
RocketChat](https://talk.lurk.org/channel/tidal).

As is common with free software, you have alternative choices for the
different components that make up a TidalCycles system. Atom and
SuperDirt might be all you ever need, but there are other editors and
synths you can use. </translate>
