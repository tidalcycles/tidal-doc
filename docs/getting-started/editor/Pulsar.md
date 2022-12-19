---
title: Pulsar
permalink: wiki/Pulsar/
layout: wiki
id: Pulsar
---
----

![pulsaricon](pulsaricon.png)

[Pulsar](https://pulsar-edit.dev/) is a new code editor that is open-source and community-led. It is based on Atom and was started after the announcement to [Sunset Atom](https://github.blog/2022-06-08-sunsetting-atom/). The [stated goal](https://pulsar-edit.dev/about.html) is to "modernize, update and improve the original Atom project into a contemporary, hackable and fully open editor." This includes support for the package repository which provides for community contributions, including our Tidal package.

---

**UPDATE - Dec 15,2022**: [Pulsar v1.100.0](https://github.com/pulsar-edit/pulsar/releases/tag/v1.100.0-beta) is released (first tagged beta). See the [ChangeLog](https://github.com/pulsar-edit/pulsar/blob/master/CHANGELOG.md) - including support for Apple Silicon. The new [Pulsar web site](https://pulsar-edit.dev/) is also a good source of information, including downloads and documentation.

**Known issues**:
- *macOS performance:* this may be resolved by disabling the `github` package
- *macOS dmg install:* Current binaries are not signed. Launching Pulsar will produce an error "Pulsar cannot be opened because the developer cannot be verified". This can be fixed by running:
`xattr -cr /Applications/Pulsar.app/`

Other issues:
- Auto-complete with default settings can be slower and more intrusive for livecoding. Possble workarounds:
    - *autocomplete-plus package:* increase "Delay Before Suggestions are Shown": to 100 or 1000.
    - disable the autocomplete-plus package

---
**NOTE for Atom Users**: The timeline to have Pulsar ready with the Tidalcycles package automation is the end of 2022. Tidal users who have a working Atom editor configured with the Tidalcycles package can continue to use it. *However, the Atom package manager is no longer available to install or update the Tidal package and no further updates to Atom will be available.* Tidal users are encouraged to migrate to Pulsar.

---

**Discord #pulsar channel**: https://discord.com/channels/779427371270275082/1047429699346903132

---

## Installation
Installation of the Tidalcycles Pulsar package is not currently automated. This improvement is expected soon. Check here for updates. Proceed with manual install only if you are comfortable with package installs, using git, troubleshooting, etc.

- MacOS: see below
- Linux: the manual instructions below should generally apply to Linux. Be sure to get the correct Pulsar download for your flavor.
- Linux with automated install: the Ansible install for a complete Tidal environment now includes Pulsar.
    - See [Installation of tidalcycles and editor(s) with ansible](https://github.com/cleary/ansible-tidalcycles)
- Windows (documentation coming)

### Download & start Pulsar
There are two ways to download:
1. Pulsar [download page](https://pulsar-edit.dev/download.html).
2. Pulsar download link + add your specific query parameters:
    - https://web.pulsar-edit.dev/download (need to add query string)
    - https://github.com/pulsar-edit/package-frontend/blob/main/docs/download_links.md instructions on building your URL query string.
    - For example: https://web.pulsar-edit.dev/download?os=intel_mac&type=mac_dmg

#### After install - fix file attributes (macOS)

```bash
> xattr -cr /Applications/Pulsar.app/
```
**Start Pulsar** This will create a hidden folder in your home directory `~/.pulsar`.

### Manual install of Tidal package
There is a community package for Tidal to be manually installed: [atom-tidalcycles on github](https://github.com/tidalcycles/atom-tidalcycles)

From a command line using `git`: (make sure you have launched the Pulsar application)

```bash
> cd ~/.pulsar/packages
> git clone https://github.com/tidalcycles/atom-tidalcycles tidalcycles
```

This will install the tidalcycles package into a directory named `tidalcycles`.

### Install the node.js modules
Pre-requisite: npm (node package manager)

#### Install nvm (node version manager - used to install and manage npm)
If npm is installed, you can skip these steps and go to Install the tidalcycles node modules.

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

```bash
> cd ~/.pulsar/packages/tidalcycles
[userHome]/.pulsar/packages/tidalcycles > npm install
```

#### Validate results
- Restart the Pulsar app.
- The node modules directory should now be present: `~/.pulsar/packages/tidalcycles/node_modules/`
- There should be three sub-directories: `binpack` `directory-tree` `osc-min`
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
- `Variable not in scope: streamSetCycle`  Your "BootTidal.hs" file is not compatible. There is an easy fix by commenting out this line: `-- setCycle = streamSetCycle tidal`

## More about the Tidalcycles Package

### Forum discussion

The Tidal Package for Atom is developed by `ndr_brt` - who is also working on preparing this for use in the new Pulsar package manager. There is a [Tidal Club forum thread](https://club.tidalcycles.org/t/the-atom-plugin-thread/2244) with more information and history of the development.

### GitHub repository

There is a [GitHub repository](https://github.com/tidalcycles/atom-tidalcycles) if you want to contribute, report an issue or follow the development.
