---
title: All the functions
permalink: wiki/All_the_functions/
layout: wiki
tags:
 - Functions
 - Reference
---

Here are all the functions provided by the main Tidal library modules.

This is mainly intended as a guide for people helping document
tidalcycles. Many of the following functions will be only for internal
use and not of interest to end-user musicians, but there are some useful
things here yet to be documented.

# Sound.Tidal.Core

| Function                                        | Type                                                                               | Marked |
|-------------------------------------------------|------------------------------------------------------------------------------------|--------|
| \#                                              | `Sound.Tidal.Context.Unionable b => Pattern b -> Pattern b -> Pattern b`           |        |
| %\|                                             | `Real a => Pattern a -> Pattern a -> Pattern a`                                    |        |
| \*\|                                            | `Num a => Pattern a -> Pattern a -> Pattern a`                                     |        |
| +\|                                             | `Num a => Pattern a -> Pattern a -> Pattern a`                                     |        |
| -\|                                             | `Num a => Pattern a -> Pattern a -> Pattern a`                                     |        |
| /\|                                             | `Fractional a => Pattern a -> Pattern a -> Pattern a`                              |        |
| \<\>                                            | `Pattern a -> Pattern a -> Pattern a`                                              |        |
| \<\|                                            | `Sound.Tidal.Context.Unionable a => Pattern a -> Pattern a -> Pattern a`           |        |
| \<\~                                            | `Pattern Time -> Pattern a -> Pattern a`                                           |        |
| \>\|                                            | `Sound.Tidal.Context.Unionable a => Pattern a -> Pattern a -> Pattern a`           |        |
| [\_every](_every "wikilink")                    | `Int -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a`                        |        |
| [\_every'](_every' "wikilink")                  | `Int -> Int -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a`                 |        |
| [\_fast](_fast "wikilink")                      | `Time -> Pattern a -> Pattern a`                                                   |        |
| [\_run](_run "wikilink")                        | `(Enum a, Num a) => a -> Pattern a`                                                |        |
| [\_scan](_scan "wikilink")                      | `(Enum a, Num a) => a -> Pattern a`                                                |        |
| [\_slow](_slow "wikilink")                      | `Time -> Pattern a -> Pattern a`                                                   |        |
| [append](append "wikilink")                     | `Pattern a -> Pattern a -> Pattern a`                                              |        |
| [cat](cat "wikilink")                           | `[Pattern a] -> Pattern a`                                                         |        |
| [compress](compress "wikilink")                 | `Arc -> Pattern a -> Pattern a`                                                    | TODO   |
| [compressTo](compressTo "wikilink")             | `Arc -> Pattern a -> Pattern a`                                                    | TODO   |
| [cosine](cosine "wikilink")                     | `Fractional a => Pattern a`                                                        | TODO   |
| [density](density "wikilink")                   | `Pattern Time -> Pattern a -> Pattern a`                                           |        |
| [densityGap](densityGap "wikilink")             | `Pattern Time -> Pattern a -> Pattern a`                                           |        |
| [envEq](envEq "wikilink")                       | `Pattern Double`                                                                   | TODO   |
| [envEqR](envEqR "wikilink")                     | `Pattern Double`                                                                   | TODO   |
| [envL](envL "wikilink")                         | `Pattern Double`                                                                   | TODO   |
| [envLR](envLR "wikilink")                       | `Pattern Double`                                                                   | TODO   |
| [every](every "wikilink")                       | `Pattern Int -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a`                |        |
| [every'](every' "wikilink")                     | `Pattern Int -> Pattern Int -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a` |        |
| [fast](fast "wikilink")                         | `Pattern Time -> Pattern a -> Pattern a`                                           |        |
| [fastAppend](fastAppend "wikilink")             | `Pattern a -> Pattern a -> Pattern a`                                              |        |
| [fastCat](fastCat "wikilink")                   | `[Pattern a] -> Pattern a`                                                         |        |
| [fastFromList](fastFromList "wikilink")         | `[a] -> Pattern a`                                                                 | TODO   |
| [fastGap](fastGap "wikilink")                   | `Pattern Time -> Pattern a -> Pattern a`                                           | TODO   |
| [fastRepeatCycles](fastRepeatCycles "wikilink") | `Int -> Pattern a -> Pattern a`                                                    |        |
| [fastSqueeze](fastSqueeze "wikilink")           | `Pattern Time -> Pattern a -> Pattern a`                                           |        |
| [fastcat](fastcat "wikilink")                   | `[Pattern a] -> Pattern a`                                                         |        |
| [foldEvery](foldEvery "wikilink")               | `[Int] -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a`                      |        |
| [fromList](fromList "wikilink")                 | `[a] -> Pattern a`                                                                 | TODO   |
| [fromMaybes](fromMaybes "wikilink")             | `[Maybe a] -> Pattern a`                                                           |        |
| [isaw](isaw "wikilink")                         | `(Fractional a, Real a) => Pattern a`                                              | TODO   |
| [listToPat](listToPat "wikilink")               | `[a] -> Pattern a`                                                                 |        |
| [overlay](overlay "wikilink")                   | `Pattern a -> Pattern a -> Pattern a`                                              |        |
| [repeatCycles](repeatCycles "wikilink")         | `Int -> Pattern a -> Pattern a`                                                    |        |
| [rev](rev "wikilink")                           | `Pattern a -> Pattern a`                                                           |        |
| [run](run "wikilink")                           | `(Enum a, Num a) => Pattern a -> Pattern a`                                        |        |
| [saw](saw "wikilink")                           | `(Fractional a, Real a) => Pattern a`                                              | TODO   |
| [scan](scan "wikilink")                         | `(Enum a, Num a) => Pattern a -> Pattern a`                                        |        |
| [sig](sig "wikilink")                           | `(Time -> a) -> Pattern a`                                                         | TODO   |
| [silence](silence "wikilink")                   | `Pattern a`                                                                        | TODO   |
| [sine](sine "wikilink")                         | `Fractional a => Pattern a`                                                        | TODO   |
| [slow](slow "wikilink")                         | `Pattern Time -> Pattern a -> Pattern a`                                           |        |
| [slowAppend](slowAppend "wikilink")             | `Pattern a -> Pattern a -> Pattern a`                                              |        |
| [slowCat](slowCat "wikilink")                   | `[Pattern a] -> Pattern a`                                                         |        |
| [slowSqueeze](slowSqueeze "wikilink")           | `Pattern Time -> Pattern a -> Pattern a`                                           | TODO   |
| [slowcat](slowcat "wikilink")                   | `[Pattern a] -> Pattern a`                                                         |        |
| [sparsity](sparsity "wikilink")                 | `Pattern Time -> Pattern a -> Pattern a`                                           |        |
| [square](square "wikilink")                     | `(Fractional a, Real a) => Pattern a`                                              | TODO   |
| [stack](stack "wikilink")                       | `[Pattern a] -> Pattern a`                                                         |        |
| [timeCat](timeCat "wikilink")                   | `[(Time, Pattern a)] -> Pattern a`                                                 | TODO   |
| [tri](tri "wikilink")                           | `(Fractional a, Real a) => Pattern a`                                              | TODO   |
| [when](when "wikilink")                         | `(Int -> Bool) -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a`              |        |
| [whenT](whenT "wikilink")                       | `(Time -> Bool) -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a`             | TODO   |
| [zoom](zoom "wikilink")                         | `Arc -> Pattern a -> Pattern a`                                                    |        |
| \|%                                             | `Real a => Pattern a -> Pattern a -> Pattern a`                                    |        |
| \|%\|                                           | `(Applicative a, Real b) => a b -> a b -> a b`                                     |        |
| \|\*                                            | `Num a => Pattern a -> Pattern a -> Pattern a`                                     |        |
| \|\*\|                                          | `(Applicative a, Num b) => a b -> a b -> a b`                                      |        |
| \|+                                             | `Num a => Pattern a -> Pattern a -> Pattern a`                                     |        |
| \|+\|                                           | `(Applicative a, Num b) => a b -> a b -> a b`                                      |        |
| \|-                                             | `Num a => Pattern a -> Pattern a -> Pattern a`                                     |        |
| \|-\|                                           | `(Applicative a, Num b) => a b -> a b -> a b`                                      |        |
| \|/                                             | `Fractional a => Pattern a -> Pattern a -> Pattern a`                              |        |
| \|/\|                                           | `(Applicative a, Fractional b) => a b -> a b -> a b`                               |        |
| \|\<                                            | `Sound.Tidal.Context.Unionable a => Pattern a -> Pattern a -> Pattern a`           |        |
| \|\<\|                                          | `(Applicative a, Sound.Tidal.Context.Unionable b) => a b -> a b -> a b`            |        |
| \|\>                                            | `Sound.Tidal.Context.Unionable a => Pattern a -> Pattern a -> Pattern a`           |        |
| \|\>\|                                          | `(Applicative a, Sound.Tidal.Context.Unionable b) => a b -> a b -> a b`            |        |
| \~\>                                            | `Pattern Time -> Pattern a -> Pattern a`                                           |        |

# Sound.Tidal.Control

| Function                                    | Type                                                                                        | Marked |
|---------------------------------------------|---------------------------------------------------------------------------------------------|--------|
| [\_cF](_cF "wikilink")                      | `[Double] -> String -> Pattern Double`                                                      |        |
| [\_cP](_cP "wikilink")                      | `(Enumerable a, Parseable a) => [Pattern a] -> String -> Pattern a`                         |        |
| [\_cS](_cS "wikilink")                      | `[String] -> String -> Pattern String`                                                      |        |
| [\_cX](_cX "wikilink")                      | `(Arc -> Value -> [Event a]) -> [a] -> String -> Pattern a`                                 |        |
| [\_chop](_chop "wikilink")                  | `Int -> ControlPattern -> ControlPattern`                                                   |        |
| [\_gap](_gap "wikilink")                    | `Int -> ControlPattern -> ControlPattern`                                                   |        |
| [\_slice](_slice "wikilink")                | `Int -> Int -> ControlPattern -> ControlPattern`                                            |        |
| [\_spin](_spin "wikilink")                  | `Int -> ControlPattern -> ControlPattern`                                                   |        |
| [\_striate](_striate "wikilink")            | `Int -> ControlPattern -> ControlPattern`                                                   |        |
| [\_striateBy](_striateBy "wikilink")        | `Int -> Double -> ControlPattern -> ControlPattern`                                         |        |
| [\_stut](_stut "wikilink")                  | `Integer -> Double -> Rational -> ControlPattern -> ControlPattern`                         |        |
| [\_stutWith](_stutWith "wikilink")          | `(Num n, Ord n) => n -> Time -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a`         |        |
| [cF](cF "wikilink")                         | `Double -> String -> Pattern Double`                                                        |        |
| [cF0](cF0 "wikilink")                       | `String -> Pattern Double`                                                                  |        |
| [cF\_](cF "wikilink")                       | `String -> Pattern Double`                                                                  | TODO   |
| [cI](cI "wikilink")                         | `String -> Pattern Int`                                                                     | TODO   |
| [cP](cP "wikilink")                         | `(Enumerable a, Parseable a) => Pattern a -> String -> Pattern a`                           | TODO   |
| [cP\_](cP "wikilink")                       | `(Enumerable a, Parseable a) => String -> Pattern a`                                        | TODO   |
| [cR](cR "wikilink")                         | `Time -> String -> Pattern Rational`                                                        | TODO   |
| [cR0](cR0 "wikilink")                       | `String -> Pattern Time`                                                                    | TODO   |
| [cR\_](cR "wikilink")                       | `String -> Pattern Time`                                                                    | TODO   |
| [cS](cS "wikilink")                         | `String -> String -> Pattern String`                                                        | TODO   |
| [cS\_](cS "wikilink")                       | `String -> Pattern String`                                                                  | TODO   |
| [cT](cT "wikilink")                         | `Time -> String -> Pattern Time`                                                            | TODO   |
| [cT0](cT0 "wikilink")                       | `String -> Pattern Time`                                                                    | TODO   |
| [cT\_](cT "wikilink")                       | `String -> Pattern Time`                                                                    | TODO   |
| [chop](chop "wikilink")                     | `Pattern Int -> ControlPattern -> ControlPattern`                                           |        |
| [chopArc](chopArc "wikilink")               | `Arc -> Int -> [Arc]`                                                                       |        |
| [gap](gap "wikilink")                       | `Pattern Int -> ControlPattern -> ControlPattern`                                           |        |
| [hurry](hurry "wikilink")                   | `Pattern Rational -> ControlPattern -> ControlPattern`                                      |        |
| [in0](in0 "wikilink")                       | `Pattern Double`                                                                            |        |
| [in1](in1 "wikilink")                       | `Pattern Double`                                                                            | TODO   |
| ... up to ...                               |                                                                                             |        |
| [in127](in127 "wikilink")                   | `Pattern Double`                                                                            | TODO   |
| [interlace](interlace "wikilink")           | `ControlPattern -> ControlPattern -> ControlPattern`                                        |        |
| [loopAt](loopAt "wikilink")                 | `Pattern Time -> ControlPattern -> ControlPattern`                                          |        |
| [mergePlayRange](mergePlayRange "wikilink") | `(Double, Double) -> ControlMap -> ControlMap`                                              |        |
| [randslice](randslice "wikilink")           | `Int -> ControlPattern -> ControlPattern`                                                   | TODO   |
| [slice](slice "wikilink")                   | `Pattern Int -> Pattern Int -> ControlPattern -> ControlPattern`                            | TODO   |
| [smash](smash "wikilink")                   | `Pattern Int -> [Pattern Time] -> ControlPattern -> Pattern ControlMap`                     |        |
| [smash'](smash' "wikilink")                 | `Int -> [Pattern Time] -> ControlPattern -> Pattern ControlMap`                             |        |
| [spin](spin "wikilink")                     | `Pattern Int -> ControlPattern -> ControlPattern`                                           |        |
| [striate](striate "wikilink")               | `Pattern Int -> ControlPattern -> ControlPattern`                                           |        |
| [striate'](striate' "wikilink")             | `Pattern Int -> Pattern Double -> ControlPattern -> ControlPattern`                         |        |
| [striateBy](striateBy "wikilink")           | `Pattern Int -> Pattern Double -> ControlPattern -> ControlPattern`                         |        |
| [stut](stut "wikilink")                     | `Pattern Integer -> Pattern Double -> Pattern Rational -> ControlPattern -> ControlPattern` |        |
| [stut'](stut' "wikilink")                   | `Pattern Int -> Pattern Time -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a`         |        |
| [stutWith](stutWith "wikilink")             | `Pattern Int -> Pattern Time -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a`         |        |
| [weave](weave "wikilink")                   | `Time -> ControlPattern -> [ControlPattern] -> ControlPattern`                              |        |
| [weave'](weave' "wikilink")                 | `Time -> Pattern a -> [Pattern a -> Pattern a] -> Pattern a`                                |        |
| [weaveWith](weaveWith "wikilink")           | `Time -> Pattern a -> [Pattern a -> Pattern a] -> Pattern a`                                |        |

# Sound.Tidal.UI

| Function                                     | Type                                                                                                                                                                                                                            | Marked     |
|----------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| [\_degradeBy](_degradeBy "wikilink")         | `Double -> Pattern a -> Pattern a`                                                                                                                                                                                              |            |
| [\_distrib](_distrib "wikilink")             | `[Int] -> Pattern a -> Pattern a`                                                                                                                                                                                               |            |
| [\_euclid](_euclid "wikilink")               | `Int -> Int -> Pattern a -> Pattern a`                                                                                                                                                                                          |            |
| [\_euclid'](_euclid' "wikilink")             | `Int -> Int -> Pattern a -> Pattern a`                                                                                                                                                                                          |            |
| [\_euclidBool](_euclidBool "wikilink")       | `Int -> Int -> Pattern Bool`                                                                                                                                                                                                    |            |
| [\_euclidFull](_euclidFull "wikilink")       | `Int -> Int -> Pattern a -> Pattern a -> Pattern a`                                                                                                                                                                             |            |
| [\_euclidInv](_euclidInv "wikilink")         | `Int -> Int -> Pattern a -> Pattern a`                                                                                                                                                                                          |            |
| [\_euclidOff](_euclidOff "wikilink")         | `Int -> Int -> Integer -> Pattern a -> Pattern a`                                                                                                                                                                               |            |
| [\_euclidOffBool](_euclidOffBool "wikilink") | `Int -> Int -> Integer -> Pattern Bool -> Pattern Bool`                                                                                                                                                                         |            |
| [\_iter](_iter "wikilink")                   | `Int -> Pattern a -> Pattern a`                                                                                                                                                                                                 |            |
| [\_iter'](_iter' "wikilink")                 | `Int -> Pattern a -> Pattern a`                                                                                                                                                                                                 |            |
| [\_linger](_linger "wikilink")               | `Time -> Pattern a -> Pattern a`                                                                                                                                                                                                |            |
| [\_off](_off "wikilink")                     | `Time -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a`                                                                                                                                                                    |            |
| [\_ply](_ply "wikilink")                     | `Int -> Pattern a -> Pattern a`                                                                                                                                                                                                 |            |
| [\_range](_range "wikilink")                 | `(Functor f, Num b) => b -> b -> f b -> f b`                                                                                                                                                                                    |            |
| [\_rot](_rot "wikilink")                     | `Ord a => Int -> Pattern a -> Pattern a`                                                                                                                                                                                        |            |
| [\_segment](_segment "wikilink")             | `Time -> Pattern a -> Pattern a`                                                                                                                                                                                                |            |
| [\_select](_select "wikilink")               | `Double -> [Pattern a] -> Pattern a`                                                                                                                                                                                            |            |
| [\_stripe](_stripe "wikilink")               | `Int -> Pattern a -> Pattern a`                                                                                                                                                                                                 |            |
| [\_trunc](_trunc "wikilink")                 | `Time -> Pattern a -> Pattern a`                                                                                                                                                                                                |            |
| [\_unDegradeBy](_unDegradeBy "wikilink")     | `Double -> Pattern a -> Pattern a`                                                                                                                                                                                              |            |
| [almostAlways](almostAlways "wikilink")      | `(Pattern a -> Pattern a) -> Pattern a -> Pattern a`                                                                                                                                                                            |            |
| [almostNever](almostNever "wikilink")        | `(Pattern a -> Pattern a) -> Pattern a -> Pattern a`                                                                                                                                                                            |            |
| [always](always "wikilink")                  | `(Pattern a -> Pattern a) -> Pattern a -> Pattern a`                                                                                                                                                                            |            |
| [arpeggiate](arpeggiate "wikilink")          | `Pattern a -> Pattern a`                                                                                                                                                                                                        |            |
| [arpg](arpg "wikilink")                      | `Pattern a -> Pattern a`                                                                                                                                                                                                        |            |
| [brak](brak "wikilink")                      | `Pattern a -> Pattern a`                                                                                                                                                                                                        |            |
| [choose](choose "wikilink")                  | `[a] -> Pattern a`                                                                                                                                                                                                              |            |
| [chooseBy](chooseBy "wikilink")              | `Pattern Double -> [a] -> Pattern a`                                                                                                                                                                                            |            |
| [chunk](chunk "wikilink")                    | `Integer -> (Pattern b -> Pattern b) -> Pattern b -> Pattern b`                                                                                                                                                                 | TODO       |
| [chunk'](chunk' "wikilink")                  | `Integral a => a -> (Pattern b -> Pattern b) -> Pattern b -> Pattern b`                                                                                                                                                         |            |
| [contrast](contrast "wikilink")              | `(ControlPattern -> ControlPattern) -> (ControlPattern -> ControlPattern) -> ControlPattern -> ControlPattern -> ControlPattern`                                                                                                | TODO       |
| [contrastBy](contrastBy "wikilink")          | `(a -> Value -> Bool) -> (ControlPattern -> Pattern b) -> (ControlPattern -> Pattern b) -> Pattern (containers-0.5.7.1:Data.Map.Base.Map String a) -> Pattern (containers-0.5.7.1:Data.Map.Base.Map String Value) -> Pattern b` | TODO       |
| [contrastRange](contrastRange "wikilink")    | `(ControlPattern -> Pattern a) -> (ControlPattern -> Pattern a) -> Pattern (containers-0.5.7.1:Data.Map.Base.Map String (Value, Value)) -> ControlPattern -> Pattern a`                                                         | TODO       |
| [cycleChoose](cycleChoose "wikilink")        | `[a] -> Pattern a`                                                                                                                                                                                                              | TODO       |
| [degrade](degrade "wikilink")                | `Pattern a -> Pattern a`                                                                                                                                                                                                        |            |
| [degradeBy](degradeBy "wikilink")            | `Pattern Double -> Pattern a -> Pattern a`                                                                                                                                                                                      |            |
| [degradeOverBy](degradeOverBy "wikilink")    | `Int -> Pattern Double -> Pattern a -> Pattern a`                                                                                                                                                                               | TODO       |
| [discretise](discretise "wikilink")          | `Pattern Time -> Pattern a -> Pattern a`                                                                                                                                                                                        |            |
| [distrib](distrib "wikilink")                | `[Pattern Int] -> Pattern a -> Pattern a`                                                                                                                                                                                       | TODO       |
| [double](double "wikilink")                  | `Time -> Pattern a -> Pattern a`                                                                                                                                                                                                | TODO       |
| [echo](echo "wikilink")                      | `Time -> Pattern a -> Pattern a`                                                                                                                                                                                                | TODO       |
| [enclosingArc](enclosingArc "wikilink")      | `[Arc] -> Arc`                                                                                                                                                                                                                  |            |
| [euclid](euclid "wikilink")                  | `Pattern Int -> Pattern Int -> Pattern a -> Pattern a`                                                                                                                                                                          | TODO       |
| [euclidFull](euclidFull "wikilink")          | `Pattern Int -> Pattern Int -> Pattern a -> Pattern a -> Pattern a`                                                                                                                                                             | TODO       |
| [euclidInv](euclidInv "wikilink")            | `Pattern Int -> Pattern Int -> Pattern a -> Pattern a`                                                                                                                                                                          | TODO       |
| [euclidOff](euclidOff "wikilink")            | `Pattern Int -> Pattern Int -> Pattern Integer -> Pattern a -> Pattern a`                                                                                                                                                       | TODO       |
| [euclidOffBool](euclidOffBool "wikilink")    | `Pattern Int -> Pattern Int -> Pattern Integer -> Pattern Bool -> Pattern Bool`                                                                                                                                                 | TODO       |
| [fadeIn](fadeIn "wikilink")                  | `Time -> Pattern a -> Pattern a`                                                                                                                                                                                                | TODO       |
| [fadeInFrom](fadeInFrom "wikilink")          | `Time -> Time -> Pattern a -> Pattern a`                                                                                                                                                                                        | TODO       |
| [fadeOut](fadeOut "wikilink")                | `Time -> Pattern a -> Pattern a`                                                                                                                                                                                                | TODO       |
| [fadeOutFrom](fadeOutFrom "wikilink")        | `Time -> Time -> Pattern a -> Pattern a`                                                                                                                                                                                        | TODO       |
| [fastspread](fastspread "wikilink")          | `(a -> t -> Pattern b) -> [a] -> t -> Pattern b`                                                                                                                                                                                | TODO       |
| [fit](fit "wikilink")                        | `Int -> [a] -> Pattern Int -> Pattern a`                                                                                                                                                                                        |            |
| [fit'](fit' "wikilink")                      | `Pattern Time -> Int -> Pattern Int -> Pattern Int -> Pattern a -> Pattern a`                                                                                                                                                   |            |
| [fix](fix "wikilink")                        | `(ControlPattern -> ControlPattern) -> ControlPattern -> ControlPattern -> ControlPattern`                                                                                                                                      |            |
| [fixRange](fixRange "wikilink")              | `(ControlPattern -> Pattern ControlMap) -> Pattern (containers-0.5.7.1:Data.Map.Base.Map String (Value, Value)) -> ControlPattern -> Pattern ControlMap`                                                                        | TODO       |
| [flatpat](flatpat "wikilink")                | `Pattern [a] -> Pattern a`                                                                                                                                                                                                      | TODO       |
| [ghost](ghost "wikilink")                    | `Pattern ControlMap -> Pattern ControlMap`                                                                                                                                                                                      | TODO       |
| [ghost'](ghost' "wikilink")                  | `Time -> Pattern ControlMap -> Pattern ControlMap`                                                                                                                                                                              |            |
| [ghost''](ghost'' "wikilink")                | `Time -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a`                                                                                                                                                                    |            |
| [ifp](ifp "wikilink")                        | `(Int -> Bool) -> (Pattern a -> Pattern a) -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a`                                                                                                                               |            |
| [index](index "wikilink")                    | `Real b => b -> Pattern b -> Pattern c -> Pattern c`                                                                                                                                                                            | TODO       |
| [inhabit](inhabit "wikilink")                | `[(String, Pattern a)] -> Pattern String -> Pattern a`                                                                                                                                                                          | TODO       |
| [inside](inside "wikilink")                  | `Pattern Time -> (Pattern a1 -> Pattern a) -> Pattern a1 -> Pattern a`                                                                                                                                                          | TODO       |
| [inv](inv "wikilink")                        | `Functor f => f Bool -> f Bool`                                                                                                                                                                                                 | TODO       |
| [irand](irand "wikilink")                    | `Num a => Int -> Pattern a`                                                                                                                                                                                                     |            |
| [iter](iter "wikilink")                      | `Pattern Int -> Pattern c -> Pattern c`                                                                                                                                                                                         |            |
| [iter'](iter' "wikilink")                    | `Pattern Int -> Pattern c -> Pattern c`                                                                                                                                                                                         |            |
| [jux](jux "wikilink")                        | `(Pattern ControlMap -> Pattern ControlMap) -> Pattern ControlMap -> Pattern ControlMap`                                                                                                                                        |            |
| [jux'](jux' "wikilink")                      | `[t -> Pattern ControlMap] -> t -> Pattern ControlMap`                                                                                                                                                                          | TODO       |
| [jux4](jux4 "wikilink")                      | `(Pattern ControlMap -> Pattern ControlMap) -> Pattern ControlMap -> Pattern ControlMap`                                                                                                                                        | remove?    |
| [juxBy](juxBy "wikilink")                    | `Pattern Double -> (Pattern ControlMap -> Pattern ControlMap) -> Pattern ControlMap -> Pattern ControlMap`                                                                                                                      |            |
| [juxcut](juxcut "wikilink")                  | `(Pattern ControlMap -> Pattern ControlMap) -> Pattern ControlMap -> Pattern ControlMap`                                                                                                                                        | TODO       |
| [juxcut'](juxcut' "wikilink")                | `[t -> Pattern ControlMap] -> t -> Pattern ControlMap`                                                                                                                                                                          |            |
| [layer](layer "wikilink")                    | `[a -> Pattern b] -> a -> Pattern b`                                                                                                                                                                                            |            |
| [lindenmayer](lindenmayer "wikilink")        | `Int -> String -> String -> String`                                                                                                                                                                                             | TODO       |
| [lindenmayerI](lindenmayerI "wikilink")      | `Num b => Int -> String -> String -> [b]`                                                                                                                                                                                       |            |
| [linger](linger "wikilink")                  | `Pattern Time -> Pattern a -> Pattern a`                                                                                                                                                                                        |            |
| [loopFirst](loopFirst "wikilink")            | `Pattern a -> Pattern a`                                                                                                                                                                                                        | TODO       |
| [mask](mask "wikilink")                      | `Pattern Bool -> Pattern a -> Pattern a`                                                                                                                                                                                        |            |
| [never](never "wikilink")                    | `(Pattern a -> Pattern a) -> Pattern a -> Pattern a`                                                                                                                                                                            |            |
| [off](off "wikilink")                        | `Pattern Time -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a`                                                                                                                                                            | TODO       |
| [offadd](offadd "wikilink")                  | `Num a => Pattern Time -> Pattern a -> Pattern a -> Pattern a`                                                                                                                                                                  | deprecate? |
| [often](often "wikilink")                    | `(Pattern a -> Pattern a) -> Pattern a -> Pattern a`                                                                                                                                                                            |            |
| [outside](outside "wikilink")                | `Pattern Time -> (Pattern a1 -> Pattern a) -> Pattern a1 -> Pattern a`                                                                                                                                                          | TODO       |
| [palindrome](palindrome "wikilink")          | `Pattern a -> Pattern a`                                                                                                                                                                                                        |            |
| [parseLMRule](parseLMRule "wikilink")        | `String -> [(String, String)]`                                                                                                                                                                                                  | TODO       |
| [parseLMRule'](parseLMRule' "wikilink")      | `String -> [(Char, String)]`                                                                                                                                                                                                    |            |
| [permstep](permstep "wikilink")              | `RealFrac b => Int -> [a] -> Pattern b -> Pattern a`                                                                                                                                                                            |            |
| [pick](pick "wikilink")                      | `String -> Int -> String`                                                                                                                                                                                                       | deprecate? |
| [ply](ply "wikilink")                        | `Pattern Int -> Pattern a -> Pattern a`                                                                                                                                                                                         |            |
| [quad](quad "wikilink")                      | `Time -> Pattern a -> Pattern a`                                                                                                                                                                                                | TODO       |
| [quantise](quantise "wikilink")              | `(Functor f, RealFrac b) => b -> f b -> f b`                                                                                                                                                                                    | TODO       |
| [rand](rand "wikilink")                      | `Fractional a => Pattern a`                                                                                                                                                                                                     |            |
| [randArcs](randArcs "wikilink")              | `Int -> Pattern [Arc]`                                                                                                                                                                                                          | TODO       |
| [randStruct](randStruct "wikilink")          | `Int -> Pattern Int`                                                                                                                                                                                                            | TODO       |
| [randcat](randcat "wikilink")                | `[Pattern a] -> Pattern a`                                                                                                                                                                                                      |            |
| [range](range "wikilink")                    | `Num a => Pattern a -> Pattern a -> Pattern a -> Pattern a`                                                                                                                                                                     |            |
| [rangex](rangex "wikilink")                  | `(Functor f, Floating b) => b -> b -> f b -> f b`                                                                                                                                                                               |            |
| [rarely](rarely "wikilink")                  | `(Pattern a -> Pattern a) -> Pattern a -> Pattern a`                                                                                                                                                                            |            |
| [revArc](revArc "wikilink")                  | `Arc -> Pattern a -> Pattern a`                                                                                                                                                                                                 | TODO       |
| [rot](rot "wikilink")                        | `Ord a => Pattern Int -> Pattern a -> Pattern a`                                                                                                                                                                                |            |
| [runWith](runWith "wikilink")                | `Integer -> (Pattern b -> Pattern b) -> Pattern b -> Pattern b`                                                                                                                                                                 | TODO       |
| [runWith'](runWith' "wikilink")              | `Integral a => a -> (Pattern b -> Pattern b) -> Pattern b -> Pattern b`                                                                                                                                                         |            |
| [samples](samples "wikilink")                | `Applicative f => f String -> f Int -> f String`                                                                                                                                                                                | deprecate? |
| [samples'](samples' "wikilink")              | `Applicative f => f String -> f Int -> f String`                                                                                                                                                                                |            |
| [scramble](scramble "wikilink")              | `Int -> Pattern a -> Pattern a`                                                                                                                                                                                                 |            |
| [segment](segment "wikilink")                | `Pattern Time -> Pattern a -> Pattern a`                                                                                                                                                                                        |            |
| [select](select "wikilink")                  | `Pattern Double -> [Pattern a] -> Pattern a`                                                                                                                                                                                    |            |
| [seqP](seqP "wikilink")                      | `[(Time, Time, Pattern a)] -> Pattern a`                                                                                                                                                                                        |            |
| [seqPLoop](seqPLoop "wikilink")              | `[(Time, Time, Pattern a)] -> Pattern a`                                                                                                                                                                                        |            |
| [sew](sew "wikilink")                        | `Pattern Bool -> Pattern a -> Pattern a -> Pattern a`                                                                                                                                                                           |            |
| [stitch](stitch "wikilink")                  | `Pattern Bool -> Pattern a -> Pattern a -> Pattern a`                                                                                                                                                                           |            |
| [shuffle](shuffle "wikilink")                | `Int -> Pattern a -> Pattern a`                                                                                                                                                                                                 |            |
| [slowspread](slowspread "wikilink")          | `(a -> t -> Pattern b) -> [a] -> t -> Pattern b`                                                                                                                                                                                | TODO       |
| [slowstripe](slowstripe "wikilink")          | `Pattern Int -> Pattern a -> Pattern a`                                                                                                                                                                                         | TODO       |
| [someCycles](someCycles "wikilink")          | `(Pattern a -> Pattern a) -> Pattern a -> Pattern a`                                                                                                                                                                            |            |
| [someCyclesBy](someCyclesBy "wikilink")      | `Double -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a`                                                                                                                                                                  |            |
| [somecycles](somecycles "wikilink")          | `(Pattern a -> Pattern a) -> Pattern a -> Pattern a`                                                                                                                                                                            |            |
| [somecyclesBy](somecyclesBy "wikilink")      | `Double -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a`                                                                                                                                                                  |            |
| [sometimes](sometimes "wikilink")            | `(Pattern a -> Pattern a) -> Pattern a -> Pattern a`                                                                                                                                                                            |            |
| [sometimesBy](sometimesBy "wikilink")        | `Pattern Double -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a`                                                                                                                                                          |            |
| [spaceOut](spaceOut "wikilink")              | `[Time] -> Pattern a -> Pattern a`                                                                                                                                                                                              | TODO       |
| [spread](spread "wikilink")                  | `(a -> t -> Pattern b) -> [a] -> t -> Pattern b`                                                                                                                                                                                | TODO       |
| [spread'](spread' "wikilink")                | `Monad m => (a -> b -> m c) -> m a -> b -> m c`                                                                                                                                                                                 |            |
| [spreadChoose](spreadChoose "wikilink")      | `(t -> t1 -> Pattern b) -> [t] -> t1 -> Pattern b`                                                                                                                                                                              | TODO       |
| [spreadf](spreadf "wikilink")                | `[a -> Pattern b] -> a -> Pattern b`                                                                                                                                                                                            | TODO       |
| [spreadr](spreadr "wikilink")                | `(t -> t1 -> Pattern b) -> [t] -> t1 -> Pattern b`                                                                                                                                                                              | TODO       |
| [stackwith](stackwith "wikilink")            | `Sound.Tidal.Context.Unionable a => Pattern a -> [Pattern a] -> Pattern a`                                                                                                                                                      | TODO       |
| [step](step "wikilink")                      | `String -> String -> Pattern String`                                                                                                                                                                                            | TODO       |
| [step'](step' "wikilink")                    | `[String] -> String -> Pattern String`                                                                                                                                                                                          |            |
| [steps](steps "wikilink")                    | `[(String, String)] -> Pattern String`                                                                                                                                                                                          | TODO       |
| [stretch](stretch "wikilink")                | `Pattern a -> Pattern a`                                                                                                                                                                                                        | TODO       |
| [stripe](stripe "wikilink")                  | `Pattern Int -> Pattern a -> Pattern a`                                                                                                                                                                                         |            |
| [struct](struct "wikilink")                  | `Pattern Bool -> Pattern a -> Pattern a`                                                                                                                                                                                        |            |
| [stutter](stutter "wikilink")                | `Integral i => i -> Time -> Pattern a -> Pattern a`                                                                                                                                                                             | TODO       |
| [substruct](substruct "wikilink")            | `Pattern String -> Pattern b -> Pattern b`                                                                                                                                                                                      | TODO       |
| [substruct'](substruct' "wikilink")          | `Pattern Int -> Pattern a -> Pattern a`                                                                                                                                                                                         |            |
| [superimpose](superimpose "wikilink")        | `(Pattern a -> Pattern a) -> Pattern a -> Pattern a`                                                                                                                                                                            |            |
| [swing](swing "wikilink")                    | `Pattern Time -> Pattern a -> Pattern a`                                                                                                                                                                                        |            |
| [swingBy](swingBy "wikilink")                | `Pattern Time -> Pattern Time -> Pattern a -> Pattern a`                                                                                                                                                                        |            |
| [tabby](tabby "wikilink")                    | `Integer -> Pattern a -> Pattern a -> Pattern a`                                                                                                                                                                                | TODO       |
| [timeLoop](timeLoop "wikilink")              | `Pattern Time -> Pattern a -> Pattern a`                                                                                                                                                                                        | TODO       |
| [timeToRand](timeToRand "wikilink")          | `RealFrac a => a -> Double`                                                                                                                                                                                                     | TODO       |
| [toScale](toScale "wikilink")                | `Num a => [a] -> Pattern Int -> Pattern a`                                                                                                                                                                                      | TODO       |
| [toScale'](toScale' "wikilink")              | `Num a => Int -> [a] -> Pattern Int -> Pattern a`                                                                                                                                                                               |            |
| [triple](triple "wikilink")                  | `Time -> Pattern a -> Pattern a`                                                                                                                                                                                                | TODO       |
| [trunc](trunc "wikilink")                    | `Pattern Time -> Pattern a -> Pattern a`                                                                                                                                                                                        |            |
| [unDegradeBy](unDegradeBy "wikilink")        | `Pattern Double -> Pattern a -> Pattern a`                                                                                                                                                                                      | TODO       |
| [unfix](unfix "wikilink")                    | `(ControlPattern -> ControlPattern) -> ControlPattern -> ControlPattern -> ControlPattern`                                                                                                                                      | TODO       |
| [unfixRange](unfixRange "wikilink")          | `(ControlPattern -> Pattern ControlMap) -> Pattern(containers-0.5.7.1:Data.Map.Base.Map String (Value, Value)) -> ControlPattern -> Pattern ControlMap`                                                                         | TODO       |
| [unwrap'](unwrap' "wikilink")                | `Pattern (Pattern a) -> Pattern a`                                                                                                                                                                                              |            |
| [ur](ur "wikilink")                          | `Time -> Pattern String -> [(String, Pattern a)] -> [(String, Pattern a -> Pattern a)] -> Pattern a`                                                                                                                            |            |
| [wchoose](wchoose "wikilink")                | `[(a, Double)] -> Pattern a`                                                                                                                                                                                                    |            |
| [wchooseBy](wchooseBy "wikilink")            | `Pattern Double -> [(a, Double)] -> Pattern a`                                                                                                                                                                                  |            |
| [wedge](wedge "wikilink")                    | `Time -> Pattern a -> Pattern a -> Pattern a`                                                                                                                                                                                   |            |
| [whenmod](whenmod "wikilink")                | `Int -> Int -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a`                                                                                                                                                              |            |
| [within](within "wikilink")                  | `Arc -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a`                                                                                                                                                                     |            |
| [within'](within' "wikilink")                | `Arc -> (Pattern a -> Pattern a) -> Pattern a -> Pattern a`                                                                                                                                                                     |            |

# Sound.Tidal.Pattern

I think all the below are fine as 'internal use only'
[Yaxu](/wiki/User%3AYaxu "wikilink") ([talk](User_talk:Yaxu "wikilink"))
21:33, 5 December 2018 (UTC)

| Function                                      | Type                                                                                                       | Marked |
|-----------------------------------------------|------------------------------------------------------------------------------------------------------------|--------|
| (\*\>)                                        | `Pattern (a -> b) -> Pattern a -> Pattern b`                                                               |        |
| (\<\*)                                        | `Pattern (a -> b) -> Pattern a -> Pattern b`                                                               |        |
| [\_\_compress](_compress "wikilink")          | `Arc -> Pattern a -> Pattern a`                                                                            |        |
| [\_\_compressTo](_compressTo "wikilink")      | `Arc -> Pattern a -> Pattern a`                                                                            |        |
| [\_fastGap](_fastGap "wikilink")              | `Time -> Pattern a -> Pattern a`                                                                           |        |
| [applyFIS](applyFIS "wikilink")               | `(Double -> Double) -> (Int -> Int) -> (String -> String) -> Value -> Value`                               |        |
| [arcCycles](arcCycles "wikilink")             | `Arc -> [Arc]`                                                                                             |        |
| [arcCyclesZW](arcCyclesZW "wikilink")         | `Arc -> [Arc]`                                                                                             |        |
| [compareDefrag](compareDefrag "wikilink")     | `(Eq a, Ord a) => [Event a] -> [Event a] -> Bool`                                                          |        |
| [cycleArcsInArc](cycleArcsInArc "wikilink")   | `Arc -> [Arc]`                                                                                             |        |
| [cyclePos](cyclePos "wikilink")               | `Time -> Time`                                                                                             |        |
| [cyclesInArc](cyclesInArc "wikilink")         | `Integral a => Arc -> [a]`                                                                                 |        |
| [defragParts](defragParts "wikilink")         | `Eq a => [Event a] -> [Event a]`                                                                           |        |
| [empty](empty "wikilink")                     | `Pattern a`                                                                                                |        |
| [eventHasOnset](eventHasOnset "wikilink")     | `Event a -> Bool`                                                                                          |        |
| [eventPart](eventPart "wikilink")             | `Event a -> Arc`                                                                                           |        |
| [eventValue](eventValue "wikilink")           | `Event a -> a`                                                                                             |        |
| [eventWhole](eventWhole "wikilink")           | `Event a -> Arc`                                                                                           |        |
| [eventWholeOnset](eventWholeOnset "wikilink") | `Event a -> Time`                                                                                          |        |
| [fNum2](fNum2 "wikilink")                     | `(Int -> Int -> Int) -> (Double -> Double -> Double) -> Value -> Value -> Value`                           |        |
| [filterJust](filterJust "wikilink")           | `Pattern (Maybe a) -> Pattern a`                                                                           |        |
| [filterValues](filterValues "wikilink")       | `(a -> Bool) -> Pattern a -> Pattern a`                                                                    |        |
| [filterWhen](filterWhen "wikilink")           | `(Time -> Bool) -> Pattern a -> Pattern a`                                                                 |        |
| [getF](getF "wikilink")                       | `Value -> Maybe Double`                                                                                    |        |
| [getI](getI "wikilink")                       | `Value -> Maybe Int`                                                                                       |        |
| [getS](getS "wikilink")                       | `Value -> Maybe String`                                                                                    |        |
| [innerJoin](innerJoin "wikilink")             | `Pattern (Pattern a) -> Pattern a`                                                                         |        |
| [isAdjacent](isAdjacent "wikilink")           | `Eq a => Event a -> Event a -> Bool`                                                                       |        |
| [isAnalog](isAnalog "wikilink")               | `Pattern a -> Bool`                                                                                        |        |
| [isDigital](isDigital "wikilink")             | `Pattern a -> Bool`                                                                                        |        |
| [isIn](isIn "wikilink")                       | `Arc -> Time -> Bool`                                                                                      |        |
| [mapArc](mapArc "wikilink")                   | `(Time -> Time) -> Arc -> Arc`                                                                             |        |
| [mapCycle](mapCycle "wikilink")               | `(Time -> Time) -> Arc -> Arc`                                                                             |        |
| [matchManyToOne](matchManyToOne "wikilink")   | (b -\> a -\> Bool) -\> Pattern a -\> Pattern b -\> Pattern (Bool, b)                                       |        |
| [nextSam](nextSam "wikilink")                 | `Time -> Time`                                                                                             |        |
| [noOv](noOv "wikilink")                       | `String -> a`                                                                                              |        |
| [onsetIn](onsetIn "wikilink")                 | `Arc -> Event a -> Bool`                                                                                   |        |
| [outerJoin](outerJoin "wikilink")             | `Pattern (Pattern a) -> Pattern a`                                                                         |        |
| [playFor](playFor "wikilink")                 | `Time -> Time -> Pattern a -> Pattern a`                                                                   |        |
| [prettyRat](prettyRat "wikilink")             | `Rational -> String`                                                                                       |        |
| [queryArc](queryArc "wikilink")               | `Pattern a -> Arc -> [Event a]`                                                                            |        |
| [rotL](rotL "wikilink")                       | `Time -> Pattern a -> Pattern a`                                                                           |        |
| [rotR](rotR "wikilink")                       | `Time -> Pattern a -> Pattern a`                                                                           |        |
| [sam](sam "wikilink")                         | `Time -> Time`                                                                                             |        |
| [showFrac](showFrac "wikilink")               | `Integer -> Integer -> String`                                                                             |        |
| [showPattern](showPattern "wikilink")         | `Show a => Arc -> Pattern a -> String`                                                                     |        |
| [splitQueries](splitQueries "wikilink")       | `Pattern a -> Pattern a`                                                                                   |        |
| [subArc](subArc "wikilink")                   | `Arc -> Arc -> Maybe Arc`                                                                                  |        |
| [tParam](tParam "wikilink")                   | `(t1 -> t2 -> Pattern a) -> Pattern t1 -> t2 -> Pattern a`                                                 |        |
| [tParam2](tParam2 "wikilink")                 | `(a -> b -> c -> Pattern d) -> Pattern a -> Pattern b -> c -> Pattern d`                                   |        |
| [tParam3](tParam3 "wikilink")                 | `(a -> b -> c -> Pattern d -> Pattern e) -> Pattern a -> Pattern b -> Pattern c -> Pattern d -> Pattern e` |        |
| [tParamSqueeze](tParamSqueeze "wikilink")     | `(a -> Pattern b -> Pattern c) -> Pattern a -> Pattern b -> Pattern c`                                     |        |
| [timeToCycleArc](timeToCycleArc "wikilink")   | `Time -> Arc`                                                                                              |        |
| [toTime](toTime "wikilink")                   | `Real a => a -> Rational`                                                                                  |        |
| [unwrap](unwrap "wikilink")                   | `Pattern (Pattern a) -> Pattern a`                                                                         |        |
| [unwrapSqueeze](unwrapSqueeze "wikilink")     | `Pattern (Pattern a) -> Pattern a`                                                                         |        |
| [withEvent](withEvent "wikilink")             | `(Event a -> Event b) -> Pattern a -> Pattern b`                                                           |        |
| [withEvents](withEvents "wikilink")           | `([Event a] -> [Event b]) -> Pattern a -> Pattern b`                                                       |        |
| [withPart](withPart "wikilink")               | `(Arc -> Arc) -> Pattern a -> Pattern a`                                                                   |        |
| [withQueryArc](withQueryArc "wikilink")       | `(Arc -> Arc) -> Pattern a -> Pattern a`                                                                   |        |
| [withQueryTime](withQueryTime "wikilink")     | `(Time -> Time) -> Pattern a -> Pattern a`                                                                 |        |
| [withResultArc](withResultArc "wikilink")     | `(Arc -> Arc) -> Pattern a -> Pattern a`                                                                   |        |
| [withResultTime](withResultTime "wikilink")   | `(Time -> Time) -> Pattern a -> Pattern a`                                                                 |        |

# How the above lists were made

The ghci `:browse` command, some by-hand fixing up (removing stray
carriage returns), and the following perl one-liner:

``` shell
perl -pe 's!(.*?)\s*::\s*(.*)!|-\n|[[$1]]\n|<code>$2</code>!'
```
