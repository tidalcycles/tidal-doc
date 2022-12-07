---
title: Pulsar
permalink: wiki/Pulsar/
layout: wiki
id: Pulsar
---
----

![pulsaricon](pulsaricon.png)

[Pulsar](https://pulsar-edit.dev/) is a new code editor that is open-source and community-led. It is based on Atom and was started after the announcement to [Sunset Atom](https://github.blog/2022-06-08-sunsetting-atom/) (Dec 15, 2022). The [stated goal](https://pulsar-edit.dev/about.html) is to "modernize, update and improve the original Atom project into a contemporary, hackable and fully open editor." This includes support for the package repository which provides for community contributions, include our Tidal package.

**Status**: Pulsar is still in Beta. New releases are available regularly. "The releases do seem to be working for most people and use cases." There is a known issue with MacOS performance. "Often times this can be resolved by disabling the `github` package."

---
**NOTE**: The projected timeline to have Pulsar ready with the Tidalcycles package is the end of 2022. Until then, new Tidal users are encouraged to wait for the new Pulsar editor or select one of the other editors. Tidal users who have a working Atom editor configured with the Tidalcycles package can continue to use it. But post Atom sunsetting, the Atom package manager will stop working. At that point you will no longer be able to use the Atom package manager to install or update the tidalcycles package.

---

## Manual Installation
If you are comfortable with package installs - using git, adding npm, troubleshooting, etc.

### Download & start Pulsar
There are two ways to download:
1. Pulsar [download page](https://pulsar-edit.dev/download.html). There are detailed instructions to get the latest stable build via Cirrus CI. Navigating Cirrus CI is a bit involved, so the 2nd method may be easier.
2. Pulsar download link + add your specific query parameters:
    - https://web.pulsar-edit.dev/download (need to add query string)
    - https://github.com/pulsar-edit/package-frontend/blob/main/docs/download_links.md instructions on building your URL query string.
    - For example: https://web.pulsar-edit.dev/download?os=intel_mac&type=mac_dmg

When you start Pulsar the first time, it will create a hidden folder in your home directory `~/.pulsar`.

### Manual install of Tidal package
There is a Tidal community package to be manually installed: [atom-tidalcycles on github](https://github.com/tidalcycles/atom-tidalcycles)

From a command line using `git`:

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
[userHome]/.pulsar/packages/tidalcycles > npm install
```

#### Validate results
The node modules directory should now be present: `~/.pulsar/packages/tidalcycles/node_modules/`
There should be three sub-directories: `binpack` `directory-tree` `osc-min`.

### Configure Pulsar
Pulsar works just like Atom. To configure:
- Main menu: Pulsar > Preferences  (will load the Settings tab)
- Select: Packages > Community Packages > tidalcycles > Settings
- set your Ghci Path, Boot Tidal Path
- optional: Set your Sound Browser Folders - if you add the full path to your SuperCollider - Dirt-Samples, then you can easily browse and play these from Pulsar once you start tidal.
- MacOS: disable the GitHub package. There is a known performance issue on MacOS. See https://pulsar-edit.dev/
