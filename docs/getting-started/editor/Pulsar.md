---
title: Pulsar
permalink: wiki/Pulsar/
layout: wiki
id: Pulsar
---
----

![pulsaricon](pulsaricon.png)

[Pulsar](https://pulsar-edit.dev/) is a code editor that is open-source and community-led. It is based on Atom and was started after the announcement to [Sunset Atom](https://github.blog/2022-06-08-sunsetting-atom/). Pulsar has a Package Manager which provides for community contributions, including our Tidalcycles package.

---

**UPDATE - Jan 1, 2023**: The Pulsar Package Manager now is fully operational with the Tidalcycles package. Once Pulsar is installed, installation and updates for tidalcycles can be managed within Pulsar. There is no longer a need for manual package install. 
**UPDATE - Jul 7, 2023**: Pulsar on macOS is now signed, no need for the `xattr` command

---

## Install Pulsar and Tidalcycles package
1. Download from the [Pulsar download page](https://pulsar-edit.dev/download.html).
2. Start Pulsar application
3. Load Package Manager: from Menu > Packages > Open Package Manager 
    - Select Install tab
    - search for "tidalcycles"
    - select install 

**Known issues**:
- *macOS performance:* this may be resolved by disabling the `github` package

Other issues:
- Auto-complete with default settings can be slower and more intrusive for livecoding. Possble workarounds:
    - *autocomplete-plus package:* increase "Delay Before Suggestions are Shown": to 100 or 1000.
    - disable the autocomplete-plus package

**Discord #pulsar channel**: https://discord.com/channels/779427371270275082/1047429699346903132

---
---

## Manual Installation of Tidalcycles package  
In most circumstances manual installation of tidalcycles package in Pulsar should be avoided. Please use the Package Manager within Pulsar. 
If there is a requirement for manual installation, or if installation via Package Manager repeatedly fails, below are manual steps that apply to MacOS and Linux. For more information, see [pulsar-tidalcycles on github](https://github.com/tidalcycles/pulsar-tidalcycles).

- Start Pulsar: This will create a hidden folder in your home directory `~/.pulsar`.
- From a command line using `git`: (make sure you have launched the Pulsar application). This will install the tidalcycles package into `~/.pulsar/packages/tidalcycles/`.

```bash
> cd ~/.pulsar/packages
> git clone https://github.com/tidalcycles/pulsar-tidalcycles tidalcycles
```

### Install the node.js modules for tidalcycles
Pre-requisite: npm (node package manager)

#### Install nvm (node version manager - used to install and manage npm)
If npm is already installed, you can skip these steps and go to: "Install the tidalcycles node modules."

The recommended method to install npm is via the node version manager.
- See [NPM Docs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for options and instructions.
- Or go directly to the [nvm install script](https://github.com/nvm-sh/nvm) in GH. It has lots of detail, troubleshooting, and support for different OS, etc. See the section on Installing and Updating. The `curl` option is good.  
- The nvm install script will add lines to your shell profile (.bash_profile, ~/.zshrc, ~/.bashrc etc). This can result in a short delay when starting the shell.
- run `command -v nvm` to verify nvm install - expected output `nvm`.
- now use nvm to install npm:

```bash
> nvm install node
```

#### Install the tidalcycle node modules
With `npm` you now run the npm install command. This will install the node modules needed by the tidalcycles plugin. 

```bash
> cd ~/.pulsar/packages/tidalcycles
[userHome]/.pulsar/packages/tidalcycles > npm install
```

#### Validate results
- The node modules directory should be present: `~/.pulsar/packages/tidalcycles/node_modules/`
- There should be three sub-directories: `binpack` `directory-tree` `osc-min`
- Restart the Pulsar app.
- Create a Tidal file (file extension *.tidal) and run a command. See the [Start Tidal page](https://tidalcycles.org/docs/getting-started/tidal_start) for more instructions if you are new to Tidal.

### Configure Pulsar
Pulsar works just like Atom. To configure and change preferences:
- Main menu: Pulsar > Preferences  (will load the Settings tab)
- Select: Packages > Community Packages > tidalcycles > Settings
- optional: Set your Sound Browser Folders - if you add the full path to your SuperCollider - Dirt-Samples, then you can easily browse and play these from Pulsar once you start tidal.
- MacOS (optional): disable the GitHub package. There is a known performance issue on MacOS. See https://pulsar-edit.dev/

### Troubleshooting
Potential errors:
- `Couldn't find module:  'Sound.Tidal.Context'`  This indicates that Pulsar could not load tidal properly.
- `Variable not in scope: streamSetCycle`  Your "BootTidal.hs" file version is not compatible with the tidal version. There is an easy fix by commenting out this line: `-- setCycle = streamSetCycle tidal`. But it would be best to resolve the version compatibility issue. 

## More about the Tidalcycles Package

### Forum discussion

The Tidal Package for Pulsar is developed by `ndr_brt` - who completed made this available in the new Pulsar package manager. There is a [Tidal Club forum thread](https://club.tidalcycles.org/t/the-atom-plugin-thread/2244) with more information and history of the development.

### GitHub repository

There is a [GitHub repository](https://github.com/tidalcycles/pulsar-tidalcycles) if you want to contribute, report an issue or follow the development.
