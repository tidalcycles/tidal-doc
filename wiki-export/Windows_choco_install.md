---
title: Windows choco install
permalink: wiki/Windows_choco_install/
layout: wiki
---

This installation installs a full Tidal environment and its dependencies
(Git, Haskell, Atom, SuperCollider, SuperDirt and the default Dirt
samples). It assumes that these components aren't installed already. If
they are, you might be better off installing the other components [by
hand](/wiki/Windows_installation "wikilink").

Installation is a three step process. It is mostly automated, but expect
windows to give a few security pop-ups for you to accept.

Here we go:

1.  If you are using Windows 7, you'll need to do a little preparation
    first, see the section at the bottom of this page.
2.  Open a windows powershell in 'admin' mode.
    -   In Windows 10 - You can do this by holding down the windows key
        and pressing 'x', then choosing Windows PowerShell (admin) in
        the menu that pops up
    -   In Windows 7 - Click the start button, type "powershell", then
        click with the right mouse button and choose "Run as
        Adminstrator"
3.  You'll need the '[chocolatey](https://chocolatey.org/)' package
    manager installed. If you haven't installed it previously, you can
    do so by pasting in and running this command:
    ``` shell
    Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
    ```
4.  Once that's run, install tidal and all its dependencies by pasting
    in the following command:
    ``` plaintext
    choco install tidalcycles
    ```

We're still working on this, and a lot of confusing info will scroll
past. Please ignore any messages about restarting powershell. Just let
the process run to the end.

You can then [Start tidalcycles and superdirt for the first
time](/wiki/Start_tidalcycles_and_superdirt_for_the_first_time "wikilink") to
test it out.

Please let us know how it went, both good and bad! Be sure to send us
any error messages you get in full. Either catch us on the
[tidal-install](https://chat.toplap.org/channel/tidal-install) TOPLAP
channel, or the "installation help" category in the [Tidal Club
forum](https://club.tidalcycles.org/).

# Windows 7

Some extra preparation is needed if you're using Windows 7.

1.  Make sure Windows 7 is up to date with the latest patches.
2.  Install/upgrade to .NET 4.5. Download here:
    <https://www.microsoft.com/en-gb/download/details.aspx?id=30653>
3.  Install Visual C++ redistributable. Download here: Download link:
    <https://support.microsoft.com/en-gb/help/2977003/the-latest-supported-visual-c-downloads>
