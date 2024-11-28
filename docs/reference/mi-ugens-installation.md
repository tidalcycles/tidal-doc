---
title: mi-UGens Installation
id: mi-ugens-installation
description: mi-UGens - installation manual for TidalCycles
---

### Automatic

For debian/ubuntu/mint systems, these ugens can be installed as part of the [ansible Tidal installer](https://github.com/cleary/ansible-tidalcycles#ugens-mutable-instruments)

### Manual

1. Unpack the [latest release](https://github.com/v7b1/mi-UGens/releases/latest/) from [mi-UGens](https://github.com/v7b1/mi-UGens) appropriate to your Operating System

2. Move the top level directory of the archive (`mi-UGens/`) into the SuperCollider Extensions folder (create it if it doesn't exist):

 - Linux:   `/home/<youruser>/.local/share/SuperCollider/Extensions/mi-UGens`
 - Windows: `C:\Users\<youruser>\AppData\Local\SuperCollider\Extensions\mi-UGens`
 - OSX:     `/Users/<youruser>/Library/Application Support/SuperCollider/Extensions/mi-UGens`

:::tip
The SuperCollider Extensions folder can be found by running `Platform.userExtensionDir` in SuperCollider. The path will be printed to the post window.
:::

3. Create a new synthdef file `mi-ugens.scd`, with [these synthdefs](https://raw.githubusercontent.com/cleary/ansible-tidalcycles-synth-mi-ugens/master/files/mutable-instruments-synthdefs.scd)

 - Linux:   `/home/<youruser>/.local/share/SuperCollider/synthdefs/mi-ugens.scd`
 - Windows: `C:\Users\<youruser>\AppData\Local\SuperCollider\synthdefs\mi-ugens.scd`
 - OSX:     `/Users/<youruser>/Library/Application Support/SuperCollider/synthdefs/mi-ugens.scd`


4. Create a new parameter definitions file, `mi-ugens-params.hs`, with [these parameters](https://raw.githubusercontent.com/cleary/ansible-tidalcycles-synth-mi-ugens/master/files/mutable-instruments-ugens_parameters.hs)

 - Linux:   `/home/<youruser>/.local/share/SuperCollider/synthdefs/mi-ugens-params.hs`
 - Windows: `C:\Users\<youruser>\AppData\Local\SuperCollider\synthdefs\mi-ugens-params.hs`
 - OSX:     `/Users/<youruser>/Library/Application Support/SuperCollider/synthdefs/mi-ugens-params.hs`

5. Configure SuperCollider - edit your `startup.scd`:

 - Linux:   `/home/<youruser>/.conf/SuperCollider/startup.scd`
 - Windows: `C:\Users\<youruser>\AppData\Local\SuperCollider\startup.scd`
 - OSX:     `/Users/<youruser>/Library/Application Support/SuperCollider/startup.scd`

6. Load the `mi-ugens.scd` synthdef in `startup.scd`. Use the full path from **3.**

:::tip
**WINDOWS Users!** You **must** use double backslashes for the `load()` path in startup.scd, eg `load("C:\\Users\\<youruser>\...");`
:::

After:
```
...
  ~dirt = SuperDirt(2, s);
```
```
  // load mi-ugens.scd synthdefs
  load("FULL_PATH_TO_mi-ugens.scd");
  // end load mi-ugens.scd synthdefs
```

7. Configure `verb` and `clouds` as **Global Effects**. Add the following stanza as indicated to your `startup.scd`:

After:
```
...
            ~d10 = ~dirt.orbits[9]; ~d11 = ~dirt.orbits[10]; ~d12 = ~dirt.orbits[11];
        );
```
```          
        // define global effects for mutable instruments effects
        ~dirt.orbits.do { |x|
            var clouds = GlobalDirtEffect(\global_mi_clouds, [\cloudspitch, \cloudspos, \cloudssize, \cloudsdens, \cloudstex, \cloudswet, \cloudsgain, \cloudsspread, \cloudsrvb, \cloudsfb, \cloudsfreeze, \cloudsmode, \cloudslofi]);
            var verb = GlobalDirtEffect(\global_mi_verb, [\verbwet, \verbtime, \verbdamp, \verbhp, \verbfreeze, \verbdiff, \verbgain]);
            x.globalEffects = x.globalEffects
              .addFirst(clouds)
              .addFirst(verb); 
            x.initNodeTree;    
        };                     
        // end define global effects for mutable instruments effects
```

8. Save your `startup.scd` and exit

9. You can choose to import the `mi-ugens-params.hs` parameter definitions manually in your tidal session, or add the following `:script` directive to the `BootTidal.hs` file associated with your editor of choice (locating the correct `BootTidal.hs` is beyond the scope of this reference)

After:
```
...
    setR = streamSetR tidal
    setB = streamSetB tidal    
:}
```
Add:
```        
:script FULL_PATH_TO_mi-ugens-params.hs
```
Which should now be followed by
```
:set prompt "tidal>"
:set prompt-cont ""
...
```

10. Start/restart SuperCollider

:::tip
**OSX Users!*** You may see a security dialog disallowing the ugens to run. Please see [this post by @oscd](https://club.tidalcycles.org/t/mutable-instruments-ugens/2730/106) for workarounds/fixes**
:::
