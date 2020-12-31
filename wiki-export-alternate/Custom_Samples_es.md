---
title: Custom Samples/es
permalink: wiki/Custom_Samples/es/
layout: wiki
tags:
 - Reference
---

<languages/> Añadir y usar tus propios samples en TidalCycles es
relativamente fácil. Para empezar, unx no añade sus samples directamente
a TidalCycles, sino que los añade a SuperCollider y al quark SuperDirt.
Para hacer esto vas a necesitar personalizar el arranque de SuperDirt.

# Arranque personalizado de SuperDirt

Cuando abres SuperCollider, en vez del típico código `SuperDirt.start`,
vas a necesitar escribir una serie de comandos para decirle a SuperDirt
donde encontrar tus samples. El código de arranque se verá algo así:

``` c
(
s.waitForBoot {
    ~dirt = SuperDirt(2, s); // Dos canales de salida
    ~dirt.loadSoundFiles("/Users/myUserName/Dirt/samples/*"); // Especificar carpeta de samples a cargar
    s.sync; // Esperar a que SuperCollider termine de iniciarse
    ~dirt.start(57120, [0, 0]); // Arrancar SuperDirt, escuchando al puerto 57120, creando dos órbitas -Orbits- que envían audio al canal 0.
};
);
```

Para correr el código de arriba, posiciona tu cursos en cualquier lugar
dentro de ese bloque de código, luego aprieta `Ctrl+Enter` (o
`Command+Enter` en MacOS) para evaluar el bloque entero.

El código anterior va a arrancar el server de SuperCollider, luego
iniciar SuperDirt con samples localizados en
`/Users/myUserName/Dirt/samples`.

Puedes encontrar un ejemplo más largo de un código de arranque dentro
del repositorio de SuperDirt:

github.com/musikinformatik/SuperDirt/blob/develop/superdirt\_startup.scd

## Directorios de Windows

Si te encuentras utilizando Windows, tendrás que usar dobles barras para
especificar los directorios:

    ~dirt.loadSoundFiles("c:\\Users\\myUserName\\Dirt\\samples\\*")

# Estructura de las carpetas de samples

En el ejemplo anterior, importamos la carpeta correspondiente al
directorio `/Users/myUserName/Dirt/samples`. Pero para que SuperDirt
reconozca las instrucciones que envía Tidal para tocar cada sonido, la
carpeta `/Users/myUserName/Dirt/samples` tendrá que contener
sub-directorios, uno por cada nombre que le queramos poner a cada
sonido. Y cada una de esas carpetas contendrá los samples.

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

# Usando los samples personalizados en Tidal

Dada la estructura de carpetas de arriba, ahora podrías utilizar los
sonidos `myBass`, `hits`, and `field` en tus patrones de Tidal.

    d1 $ s "myBass hits*4" # n (slow 2 $ run 3)
    d2 $ n "<0 2 1>" # s "field" # cut 1

# Especificando múltiples carpetas

Si cuentas con samples en muchas carpetas, puedes importarlos todos:

``` c
(
s.waitForBoot {
    ~dirt = SuperDirt(2, s); // Dos canales de salida

        // Cargar samples de múltiples carpetas:
    ~dirt.loadSoundFiles("/Users/myUserName/Dirt/samples/*"); 
    ~dirt.loadSoundFiles("/Users/myUserName/sounds/*"); 
    ~dirt.loadSoundFiles("/Users/myUserName/recordings/chaska-sessions/*");
    ~dirt.loadSoundFiles("/Users/myUserName/recordings/super-duper-experiments/*"); 

    s.sync; // Esperar a que SuperCollider termine de iniciarse
    ~dirt.start(57120, [0, 0]); // Arrancar SuperDirt, escuchando al puerto 57120, creando dos órbitas -Orbits- que envían audio al canal 0.
};
);
```
