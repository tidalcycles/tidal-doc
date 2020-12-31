---
title: Basic Patterns/es
permalink: wiki/Basic_Patterns/es/
layout: wiki
---

<languages />

El formato básico para hacer sonido en Tidal se ve así

``` Haskell
d1 $ sound "drum"
```

Puedes dejar de hacer sonido usando

``` Haskell
silence
```

:

``` Haskell
d1 $ silence
```

Elije un sonido diferente del mismo conjunto, con \`:\`

``` Haskell
d1 $ sound "drum:1"
```

Algunas de las muestras que vienen con Tidal se listan debajo.
Pruébalas!

    flick sid can metal future gabba sn mouth co gretsch mt arp h cp
    cr newnotes bass hc tabla bass0 hh bass1 bass2 oc bass3 ho odx
    diphone2 house off ht tink perc bd industrial pluck trump printshort
    jazz voodoo birds3 procshort blip drum jvbass psr wobble drumtraks koy
    rave bottle kurt latibro rm sax lighter lt arpy feel less stab ul

Puedes ver qué otros sonidos hay (o agregar los tuyos) mirando en la
carpeta 'Dirt-Samples'. La puedes encontrar a través del menú de
Supercollider: 'File &gt; Open user support directory &gt;
downloaded-quarks &gt; Dirt-Samples'.

## Haz una secuencia

``` Haskell
d1 $ sound "bd hh sn hh"
```

Cuantos más pasos haya en la secuencia, más rápido va a ir:

``` Haskell
d1 $ sound "bd bd hh bd sn bd hh bd"
```

Esto se debe a la forma en que Tidal maneja el tiempo. Hay un "ciclo"
universal (parecido a una 'barra' musical) que siempre está corriendo.
Tidal reproducirá todos los sonidos entre las comillas durante 1 ciclo,
a menos que le indiquemos que no lo haga (aprenderemos cómo hacerlo más
adelante). También notarás que Tidal espaciará los sonidos de manera
uniforme dentro del ciclo, lo que significa que podemos terminar con
estructuras polirrítmicas (más sobre éstas más adelante).

<div class="mw-translate-fuzzy">

Podemos cambiar la duración del ciclo usando \`cps\` (ciclos por
segundo) - esto es un poco como bpm (tiempos por minuto).

</div>
<div class="mw-translate-fuzzy">

``` Haskell
cps 0.6
```

</div>

Puedes usar d1, d2, d3 ... d9 para reproducir múltiples secuencias al
mismo tiempo.

``` Haskell
d2 $ sound "sn sn:2 sn bd sn"
```

Puede detener todos los patrones en ejecución con

``` Haskell
hush
```

.

<div class="mw-translate-fuzzy">

``` Haskell
`hush`
```

</div>

Puedes pausar todo cambiando la duración del ciclo a un número negativo
(recuerda poner números negativos entre paréntesis).

<div class="mw-translate-fuzzy">

``` Haskell
cps (-1)
```

</div>

Ponlo en marcha de nuevo con un número positivo.

<div class="mw-translate-fuzzy">

``` Haskell
cps 0.6
```

</div>
<div class="mw-translate-fuzzy">

O puedes hacer un 'solo' con un canal, pero ten cuidado, no puedes
revertirlo ('unsolo'... ¡pero esto viene a la próxima versión de tidal!)

</div>
<div class="mw-translate-fuzzy">

``` Haskell
d1 $ sound "arpy cp arpy:2"
d2 $ sound "sn sn:2 bd sn"
solo $ d2 $ sound "sn sn:2 bd sn"
```

</div>

d2 $ sound "sn sn:2 bd sn"

solo 2

-- now only the second pattern will be playing

unsolo 2

-- now both will be playing, again

</syntaxhighlight>

Vamos a añadir un poco más de variedad a nuestras secuencias.

Añade un silencio con

``` Haskell
~
```

:

``` Haskell
d1 $ sound "bd ~ sn:3 bd sn:5 ~ bd:2 sn:2"
```

Ajusta una subsecuencia en un paso usando corchetes:

<div class="mw-translate-fuzzy">

``` Haskell
d1 $ sound "bd [bd cp] bd bd"
<syntaxhighlight>
</div>

Esto te permite tener métricas de tiempo flexibles:

<syntaxhighlight lang="Haskell">
d1 $ sound "[bd bd sn:5] [bd sn:3]"
```

Puedes poner subsecuencias dentro de subsecuencias:

``` Haskell
d1 $ sound "[[bd bd] bd sn:5] [bd sn:3]"
```

Sigue...

``` Haskell
d1 $ sound "[[bd [bd bd bd bd]] bd sn:5] [bd sn:3]"
```

Puedes repetir un paso con

``` Haskell
*
```

:

``` Haskell
d1 $ sound "bd sd*2"
```

Esto funciona con subsecuencias también:

``` Haskell
d1 $ sound "bd [sd cp]*2"
```

O puedes hacer lo contrario usando

``` Haskell
/
```

:

``` Haskell
d1 $ sound "bd sn/2"
```

``` Haskell
d1 $ sound "bd [sn cp]/2"
```

``` Haskell
*
```

funciona 'acelerando' un paso para reproducirlo multiples veces.

``` Haskell
/
```

funciona 'ralentizandolo'.

También podemos programar patrones entre ciclos utilizando

``` Haskell
<
```

y

``` Haskell
>
```

:

``` Haskell
d1 $ sound "bd <sd cp arpy>"
```

``` Haskell
d1 $ sound "<bd sn> <sd [cp cp]> <bd [cp cp]>"
```

## Efectos

Tidal tiene muchos efectos que podemos usar para cambiar la forma en que
las cosas suenan.

``` Haskell
vowel
```

es un filtro que agrega un sonido de vocal. Prueba a, e, i, o y u

``` Haskell
d1 $ sound "drum drum drum drum" # vowel "a"
```

Creamos patrones de efectos de la misma manera que creamos patrones de
sonidos. A estos patrones de efectos y sonidos los llamamos 'patrones de
control'. Asi que

``` Haskell
d1 $ sound "drum drum drum drum" # vowel "a o e e"
```

Recuerda que podemos usar "&lt;&gt;" para programar a través de ciclos.

``` Haskell
d1 $ sound "drum drum drum drum" # vowel "<a o e e>"
```

Puedes agregar una letra que no sea de vocal para pausar el efecto de
vocal.

``` Haskell
d1 $ sound "drum drum drum drum" # vowel "a o p p"
```

Tidal hace todo lo posible para mapear patrones entre sí.

``` Haskell
d1 $ sound "drum drum drum drum" # vowel "a o e"
```

La estructura viene de la izquierda - intenta intercambiar los
parámetros

``` Haskell
d1 $ vowel "a o ~ i" # sound "drum" 
```

**Advertencia de salud**: este es uno de los cambios que se producirán
en el nuevo Tidal: podrás controlar de qué lado proviene la estructura.
O combinar la estructura desde *ambos* lados.

``` Haskell
gain
```

cambia el volumen de diferentes sonidos.

``` Haskell
d1 $ sound "bd hh sn:1 hh sn:1 hh" # gain "1 0.7 0.5"
```

``` Haskell
speed
```

y

``` Haskell
note
```

se utilizan para cambiar el tono de las muestras.

``` Haskell
speed
```

afecta la velocidad de reproducción, por ejemplo, 2 = una octava arriba

``` Haskell
d1 $ sound "numbers:1 numbers:2 numbers:3 numbers:4" # speed "1 1.5 2 0.5"
```

O podemos tomar el patrón del parámetro

``` Haskell
speed
```

``` Haskell
d1 $ speed "1 2 4" # sound "jungbass:6"
```

``` Haskell
note
```

aumenta el tono de la muestra en semitonos, por ej. 12 = una octava
arriba

``` Haskell
d1 $ up "0 ~ 12 24" # sound "jungbass:6"
```

<div class="mw-translate-fuzzy">

``` Haskell
Pan
```

nos permite crear efectos estéreo - 0 = izquierda, 0.5 = media, 1 =
derecha

</div>

``` Haskell
d1 $ sound "numbers:1 numbers:2 numbers:3 numbers:4" # pan "0 0.5 1"
```

``` Haskell
shape
```

agrega distorsión (pero ten cuidado, también hace que el sonido sea
mucho más alto)

``` Haskell
d1 $ sound "kurt:4 kurt:4" # shape "0 0.78" # gain "0.7"
```

## Te sientes valiente?

Try more effects:
<https://tidalcycles.org/index.php/Category:Control_Functions>

<div class="mw-translate-fuzzy">

``` Haskell
delay
```

/

``` Haskell
delaytime
```

/

``` Haskell
delayfeedback
```

/ syntaxhighlight lang="Haskell" inline&gt;cutoff

</syntaxhighlight>

/

``` Haskell
resonance
```

/

``` Haskell
room
```

/

``` Haskell
size
```

</div>

## Patrones continuos

``` Haskell
sine
```

es un patrón continuo que sigue una curva sinusoidal de 0 a 1 y de
regreso.

``` Haskell
d1 $ sound "bd*32" # gain sine
```

También puedes probar

``` Haskell
tri
```

,

``` Haskell
saw
```

y

``` Haskell
rand
```

.
