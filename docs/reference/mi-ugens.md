---
title: Mutable Instruments Ugens
id: mi-ugens
---

## Description

[Mutable Instruments](https://mutable-instruments.net/) is popular Eurorack module company from Normandy. The designer, engineer, and founder of Mutable Instruments, Émilie Gillet, has made all of her work [open source](https://github.com/pichenettes/eurorack). [Volker Böhm](https://vboehm.net/) has taken the time to [port](https://github.com/v7b1/mi-UGens) some of these modules to [SuperCollider](https://supercollider.github.io/).

## Reference

 - [Synthdefs](https://todo) for Braids, Omi, and Plaits
 - [Effects](https://todo) for Verb, Clouds, Rings, etc
 - [Other](https://todo) ???

## Installation

### Automatic

For debian/ubuntu/mint systems, these ugens can be installed as part of the [ansible Tidal installer](https://github.com/cleary/ansible-tidalcycles#ugens-mutable-instruments)

### Manual

1. Unpack the [latest release](https://github.com/v7b1/mi-UGens/releases/latest/) from [mi-Ugens](https://github.com/v7b1/mi-UGens) appropriate to your Operating System

2. Move the top level directory of the archive (`mi-UGens/`) into the SuperCollider Extensions folder (create it if it doesn't exist):

 - Linux:   `/home/<youruser>/.local/share/SuperCollider/Extensions/mi-UGens`
 - Windows: `C:\Users\<youruser>\AppData\Local\SuperCollider\Extensions\mi-UGens`
 - OSX:     `/Users/<youruser>/Library/Application Support/SuperCollider/Extensions/mi-UGens`

**Note:** The SuperCollider Extensions folder can be found by running `Platform.userExtensionDir` in SuperCollider. The path will be printed to the post window.

3. Create a new synthdef file `mi-ugens.scd`, with [these synthdefs](https://raw.githubusercontent.com/cleary/ansible-tidalcycles-synth-mi-ugens/master/files/mutable-instruments-synthdefs.scd)

 - Linux:   `/home/<youruser>/.local/share/SuperCollider/synthdefs/mi-ugens.scd`
 - Windows: `C:\Users\<youruser>\AppData\Local\SuperCollider\synthdefs\mi-ugens.scd`
 - OSX:     `/home/<youruser>/Library/Application Support/SuperCollider/synthdefs/mi-ugens.scd`


4. Create a new parameter definitions file, `mi-ugens-params.hs`, with [these parameters](https://raw.githubusercontent.com/cleary/ansible-tidalcycles-synth-mi-ugens/master/files/mutable-instruments-ugens_parameters.hs)

 - Linux:   `/home/<youruser>/.local/share/SuperCollider/synthdefs/mi-ugens-params.hs`
 - Windows: `C:\Users\<youruser>\AppData\Local\SuperCollider\synthdefs\mi-ugens-params.hs`
 - OSX:     `/Users/<youruser>/Library/Application Support/SuperCollider/synthdefs/mi-ugens-params.hs`

5. Configure SuperCollider - edit your `startup.scd`:

 - Linux:   `/home/<youruser>/.conf/SuperCollider/startup.scd`
 - Windows: `C:\Users\<youruser>\AppData\Local\SuperCollider\startup.scd`
 - OSX:     `/Users/<youruser>/Library/Application Support/SuperCollider/startup.scd`

6. Load the `mi-ugens.scd` synthdef in `startup.scd`. Use the full path from **3.**

*NOTE FOR WINDOWS USERS: you must use double backslashes for the `load()` path in startup.scd, eg `load("C:\\Users\\<youruser>\...");`*

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

9. You can choose to import the `mi-ugens-params.hs` parameter definitions manually in your tidal session, or add the following line to the `BootTidal.hs` file associated with your editor of choice (locating the correct `BootTidal.hs` is beyond the scope of this reference)
```
        ...
        :script "FULL_PATH_TO_mi-ugens-params.hs"
        ^:set prompt (.*$)
        ...
```

10. Start/restart SuperCollider

**OSX Users Note: you may see a security dialog disallowing the ugens to run. Please see [this post by @oscd](https://club.tidalcycles.org/t/mutable-instruments-ugens/2730/106) for workarounds/fixes**


## Synth Reference

### omi
Description: todo

- param
- param
- param

### plaits
Description: todo

- param
- param
- param

### braids
Description: todo

- param
- param
- param

## Effects (Global)

### verb
Description: todo

- param
- param
- param

### clouds
Description: todo

- param
- param
- param

### etc
