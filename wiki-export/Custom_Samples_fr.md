---
title: Custom Samples/fr
permalink: wiki/Custom_Samples/fr/
layout: wiki
tags:
 - Reference
---

<languages/> Installer vos propres samples est un procédé relativement
facile. Vous ne pouvez pas ajouter vos samples depuis Tidal Cycles, mais
vous pouvez le faire depuis SuperCollider et SuperDirt. Pour ce faire,
vous devez modifier votre `startup file` :

# SuperDirt Startup

Lorsque vous démarrez SuperCollider, au lieu du `SuperDirt.start`
traditionnel, vous aurez besoin d'utiliser un script plus long qui
indiquera à SuperDirt où trouver vos samples. Le script ressemble à cela
:

``` c
(
s.waitForBoot {
    ~dirt = SuperDirt(2, s); // two output channels
    ~dirt.loadSoundFiles("/Users/myUserName/Dirt/samples/*"); // specify sample folder to load
    s.sync; // wait for supercollider to finish booting up
    ~dirt.start(57120, [0, 0]); // start superdirt, listening on port 57120, create two orbits each sending audio to channel 0
};
);
```

Pour lire le code ci-dessius, placez votre curseur n'importe où au sein
du bloc de code, et appuyez sur `Ctrl+Entrée`.

Ce code va lancer le serveur SuperCollider, puis SuperDirt, avec les
sample situés à l'emplacement `/Users/myUserName/Dirt/samples`.

Vous pouvez trouver un `startup file` plus long en consultant [ le lien
suivant](https://github.com/musikinformatik/SuperDirt/blob/develop/superdirt_startup.scd "wikilink").

## Chemins d'accès sur Windows

Si vous utilisez Windows, vous aurez besoin d'utiliser un caractère
spécial pour échapper au tiret inversé :

    ~dirt.loadSoundFiles("c:\\Users\\myUserName\\Dirt\\samples\\*")

# Chemins d'accès

Dans l'exemple ci-dessous, nous avons importé un dossier situé à
l'emplacement `/Users/myUserName/Dirt/samples`.. Pour que SuperDirt
reconnaisse le nom des sons envoyés par Tidal, le dossier devra
comporter des sous-dossiers dont le nom correspondra à chacun des sons,
et dans chaque dossier devra se trouver un certain nombre de sons :

`Users/`  
`|-- myUserName/`  
`    |-- Dirt/`  
`        |-- samples/`  
`            |-- myBass/`  
`            |   |-- bass1.wav`  
`            |   |-- bass2.wav`  
`            |   |-- bass3.wav`  
`            |-- hits/`  
`            |   |-- hit1.wav`  
`            |   |-- hit2.wav`  
`            |   |-- hit3.wav`  
`            |-- field/`  
`            |   |-- bridge.wav`  
`            |   |-- mountains1.wav`  
`            |   |-- mountains2.wav`  
`            |   |-- plains.wav`  
`            |   |-- river.wav`

# Utiliser des samples personnalisées avec Tidal

Imaginons que vous utilisez les sons mentionnés ci-dessus. Vous pouvez
utiliser les sons `mybass` et `field` :

    d1 $ s "mybass hits*4" # n (slow 2 $ run 3)
    d2 $ n "<0 2 1>" # s "field" # cut 1

# Dossiers multiples

Si vous possédez plusieurs dossiers de samples différents, vous pouvez
tous les ajouter :

``` c
(
s.waitForBoot {
    ~dirt = SuperDirt(2, s); // two output channels

        // load samples from multiple folders:
    ~dirt.loadSoundFiles("/Users/myUserName/Dirt/samples/*"); 
    ~dirt.loadSoundFiles("/Users/myUserName/sounds/*"); 
    ~dirt.loadSoundFiles("/Users/myUserName/recordings/chaska-sessions/*");
    ~dirt.loadSoundFiles("/Users/myUserName/recordings/super-duper-experiments/*"); 

    s.sync; // wait for supercollider to finish booting up
    ~dirt.start(57120, [0, 0]); // start superdirt, listening on port 57120, create two orbits each sending audio to channel 0
};
);
```
