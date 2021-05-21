---
title: Multi-User Tidal
id: multiuser-tidal 
---
-----

There are different ways to use Tidal with your friends.

## Shared Editors

### Troop

![troop](troop.png)

[Troop](https://github.com/Qirky/Troop) is described by it author, Ryan Kirkbride (`Qirky`), as *"a real-time collaborative tool that enables group live coding within the same document across multiple computers."* Troop is a preconfigured text editor for collaborative live-coding on a network. Troop is written in [Python 3](https://www.python.org/). You will need to install Python and `tkinter` for your specific OS/distribution. Linux users might need to install a few more dependencies, but it should be straightforward.

:::caution
Note that you will also need to install **SuperCollider** and **Tidal Cycles** to use **Troop** on your computer. 
:::

For the installation / configuration process, please report to the README on the [GitHub repository](https://github.com/Qirky/Troop).


### Extramuros

![extramuros](https://iclc.toplap.org/2015/html/extramuros-screenshot.png)

[Extramuros](https://github.com/dktr0/extramuros), programmed by David Ogborn (`dktr0`), is an optimized collaborative environment for live coding. The text editor itself is embedded in a web browser. A server, receiving all the incoming code/data from the users, is connected to the interpreter. The editor can be divided in many zones, each one being an interpreter. Head to the [GitHub Repository](https://github.com/dktr0/extramuros) page to learn more about the installation / configuration process.


### Estuary

![estuary](estuary.png)

[Estuary](https://github.com/dktr0/estuary), also programmed by David Ogborn(`dktr0`) is a collaborative live coding environment with some components taken and extended from [Extramuros](###Extramuros). Estuary is embedding `minitidal`, a subset of Tidal Cycles that works directly (including sound!) in your web browser. No installation is required.

[Chrome](https://www.google.com/chrome/) or [Chromium](https://www.chromium.org/) is **highly recommended** for a better user experience.

#### Estuary online

There is a [server](https://estuary.mcmaster.ca) running 24/7 on the McMaster University servers, on a server belonging to the research group behind the project. It means that you can try **Tidal Cycles** online with your friends without having to install anything!

## Network tempo sharing

Network tempo sharing is one way of synchronizing Tidal to other instances running on different computers. This approach is more complex and "hands-on" than the ones described above. They might be better suited to more advanced / technically skilled users. 

### 1) Sync computer clocks

Ensure that the system clocks of all the computers are already in sync. This can be done by making sure the computers are *syncing with a network clock via system settings*, but this isn't ideal. Under the hood that uses `ntpd`, which is designed for slowly bringing computers into synchrony over the internet, not for quickly getting computers in sync locally. 

Instead, using [ptpd](https://github.com/ptpd/ptpd) is recommended. 

:::caution
[ptpd](https://github.com/ptpd/ptpd) is available for Linux and MacOS only.
:::

### 2) Start Tidal on your computer

Nominate **one** computer as the `clock server` and start Tidal there. You will need to know the network address of this computer on the local network. You should be able to find this in your system settings. 

### 3) Sync the other computers to the clock server

Change your Tidal Boot configuration on the other computers to set the `cTempoAddr` option to the IP address of the clock server. For example, if the clock server had the IP address `'192.168.0.10'`, your `startTidal` line would look something like this: 

```haskell
tidal <- startTidal (superdirtTarget {oLatency = 0.02}) (defaultConfig {cFrameTimespan = 1/20, cTempoAddr = "192.168.0.10"})
```

### 4) Setting CPS

Use `setcps` on one of the computers to get all the computers in sync (g.g. `setcps 1.1`). 

### 5) adjust latency

You will probably find that your computers are still 'out of phase': running at the same cps, but with an offset. Set the cps low (e.g. `setcps 0.25`), run a simple pattern on the clock server (`d1 $ s "cp"`) and one of the other computers, and use nudge to find the offset (`d1 $ s "cp" # nudge 0.05`).

Once you know the right offset you can make it permanent by adding it to the `oLatency` value in your configuration. As long as you use the same audio device and so on, you shouldn't have to adjust it again.

If you find you have to nudge backwards (e.g. `d1 $ s "cp" # nudge (-0.05)`) this will only work up to a certain point. It's better to add latency to the clock server in that case. 

## ESPGrid tempo sharing

EspGrid is a language-neutral, separate piece of open source software for sharing tempo and other things in electronic ensembles. The software is available on [dktr0's website](https://dktr0.github.io/EspGrid/install.html). It is made so that changing the tempo on one instance will change the tempo on all the instances. Every change is reflected everywhere.

### 1) Start EspGrid/espgridd

Detailled instructions for installing, starting and configuring EspGrid/espgridd are available at the link mentionned above.

### 2) Start Tidal and SuperDirt 

Start Tidal the usual way. 

### 3) Sync with EspGrid

Just evaluate `espgrid tidal` in your editor session.

### 4) Change the tempo

You can change the tempo for everyone synced to EspGrid with `cpsEsp 0.5`, `cpsEsp 0.75`, etc. If others change the tempo (including via the OSX GUI **EspGrid** app, SuperCollider quarks, etc) your tempo should change as well. 

## Link Protocol Synchronization

[Link](https://www.ableton.com/en/link/) is a protocol developed by Ableton for synchronizing musical gear, software or hardware. Link will synchronize all the devices found on a local network together. Timing and tempo will be shared by all clients. Even though Link originally appeared for Ableton, there are independant open-source clients you can use to synchronize using this protocol.

This requires Tidal version 1.0.11 or later. It is experimental, so the interface will change in future releases of Tidal, with additional functionality. For now though, it seems to work well.

To synchronise with the Link protocol, follow the following steps:

1. Download and run Carabiner, which acts as a bridge between the Link protocol and software like Tidal. You can get downloads for Windows and MacOS here. Linux users can fin d instructions for compiling here.
2. Have another link-compatible app to hand that you want to sync to. 
3. Start Tidal in your editor, and run the following to connect to carabiner:

```haskell
sock <- carabiner tidal 4 (-0.14)
```

4. Run a Tidal pattern (e.g. `d1 $ (sound "cp bd bd bd")`), change the BPM in another link-compatible application and see if it works.

:::tip
To change the BPM from tidal, you currently have to run e.g. `sendMsg sock "bpm 155"`
:::

### CPS and BPM

You can't adjust `cps` in Tidal and have that change BPM in the link network yet - this will be fixed up soon. You can tweak the startup command:

```haskell
sock <- carabiner tidal 4 (-0.14)
```


You can't adjust cps in Tidal and have that change bpm in the link network yet - this will be fixed up soon.

### Understanding the Link command

Let's get a closer look at this cryptic line of code:

```haskell
sock <- carabiner tidal 4 (-0.14)
```

* `4`: the number of beats per cycle. Used to convert between link's beat-per-minute and Tidal's cycles-per-second. You might prefer 2 (or 3 if you're doing a waltz).
* `-0.14`: latency time adjustment to get Tidal in phase. You might need to tweak it, to get it bang on.

:::caution
You have to restart Tidal everytime you adjust these numbers. You can do that by restarting your text editor. This will be more easily configured in the future. 
:::

Report your good or bad experiences [here]( https://toplap.lurk.org/t/link-support-preview/418).
