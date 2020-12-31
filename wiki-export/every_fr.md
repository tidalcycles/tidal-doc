---
title: every/fr
permalink: wiki/every/fr/
layout: wiki
tags:
 - Functions
---

<languages/> [Type](/wiki/Type_signature "wikilink"):

``` haskell
every :: Pattern Int -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a
```

**every** est une fonction qui appliquer une autre fonction de manière
conditionnelle. `every` requiert trois arguments :

1.  une fréquence (3 pour appliquer la fonction tout les trois cycles)
2.  une fonction
3.  un pattern

Voici comment renverser un pattern tout les trois cycles :

``` haskell
d1 $ every 3 rev $ n "0 1 [~ 2] 3" # sound "arpy"
```

Notez que si la fonction que vous appliquez requiert des paramètres
additionnels tels que `fast 2`, vous aurez besoin d'envelopper cette
fonction dans des parenthèses. Observez cet exemple :

``` haskell
d1 $ every 3 (fast 2) $ n "0 1 [~ 2] 3" # sound "arpy"
```

Si vous ne le faites pas, `every` pensera que vous utilisez un nombre
trop important d'arguments.

**Voir aussi :** [every'](every' "wikilink")

[Category:Higher-order
functions](/wiki/Category:Higher-order_functions "wikilink")
[Category:Conditional
Transformers](/wiki/Category:Conditional_Transformers "wikilink")
