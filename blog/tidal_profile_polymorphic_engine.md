---
title: Tidal Profile - polymorphic_engine
date: 2023-03-13
---

| Tidal Cyclist  | Martin Gius   |
| --------:    | :---------- |
| aka    | polymorphic_engine |
| Location | Vienna |
| Years with Tidal | 3  yrs |
| Other LiveCoding env | SuperCollider, Hydra, ORCA  |
| Music available online | [Bandcamp](https://flimmerhaar.bandcamp.com/album/cilia) |
| Code online | [GitHub](https://github.com/polymorphicengine) |
| Other music/audio sw | Reaper, PureData, Audacity|


## Livecoding  

**What do you like about livecoding in Tidal? What inspires you?**   

I find the way Tidal allows me to approach music in a structural way fascinating. I like it's concise but still verbose syntax, especially combined with the mini-syntax.

**How do you approach your livecoding sessions?**

When I make music on my own, I like to start out with simple rhythmic patterns and start to layer them with different versions of themselves (slower & lower / faster & higher / ..). Now apply the MI clouds effect and you can have fun for hours adjusting the parameters!

I also like to use a traditional game controller and map the controls to conditional functions or effects in the code. For example, playing a drum pattern twice as fast when I press the 'A' button, or adjust the pan according to a joystick. I like the thought that I am programming the functionality of a game live, while I am also playing it.

**What functions and coding approaches do you like to use?**  

Probably my most used Tidal functions are `layer` and `while`. I also use the control bus feature a lot to manipulate the FX of longer sounds. I really like how randomness in Tidal works and how easy it is no generate arbitrary, but repeating sequences or rhythms.

Here is an example of a jungle inspired, abstract dance track. To make a four cycle loop, evaluate the line

```haskell
all $ timeLoop 4 . (rotL 4)
```

and change the number in rotL to shift the pattern. Try to play around with the parameters of the clouds effect aswell, but be carful, it might get loud! :)

```haskell
let
setbpm x = setcps (x/60/4)
_add :: Time -> Pattern a -> Pattern a -> Pattern a
_add t value pat = slow (pure $ 1+t) $ timeCat [(shift,pat),(1-shift, value)]
				where shift = 1 / (t + 1)
add :: Pattern Time -> Pattern a -> Pattern a -> Pattern a
add pt x y = innerJoin $ fmap (\t -> _add t x y) pt

setbpm 160

all $ timeLoop 4 . (rotL 4)

all $ id

d1
$ while "t(4,16)" (|+ krush 1)
$ while "[0 | 1]*16" (superimpose (plyWith 4 (|* speed 1.25) . slow 2))
$ layer [id
		,\x -> degradeBy (segment 16 perlin)
        	$ slow 2
            $ x
            # speed 0.75
            # shape 0.1
        ,\x -> add "[0.5 | 0.25]*4" (s "jungbass:1" # speed 0.8 # shape 0.2 # krush 2)
        	$ x # speed "[2 | -2]*8"
		]
$ s "[drum drum:1 [~ drum] drum:1, drum:3*[[8 | 16]*4]]"
# krush 2
# cloudswet 1
# cloudsgain 1
# cloudspitch (segment 16 $ smooth "[-1 | 1 | 0]*16")
# cloudstex (segment 16 $ smooth "[0.3 | 0.1 | 0.9]*4")
# cloudspos "[0 | 1]*8"
# cloudssize 0
# cloudsfb 0.3
# cloudsspread 0
# cloudsdens 0
# cloudsrvb 0
# cloudsfreeze 0
```

**Do you use Tidal with other tools / environments?**

I like to use Tidal together with Hydra and Vimix and like to use a game controller for external hardware.

## Tidal Contributions  

**How do you contribute to Tidal Cycles? What have you worked on?**  

* I had the opportunity to work on Tidal as part of the Haskell Summer of Code 2021. There, I mainly worked on packaging Tidal to allow users to use it without an installation of the whole Haskell environment. This led to me developing a whole code [editor/interpeter](https://github.com/polymorphicengine/tidal-gui) with some features especially designed for Tidal, like the display of which patterns are playing/muted, the current cps/bpm and the ability to control all features of the editor via OSC.

* I'm also working on the [tidal-listener](https://github.com/tidalcycles/Tidal/tree/main/tidal-listener) which also provides a standalone intrepreter that editor plugins etc. can use as an alternative to ghci.

* Now I am mostly working on things that are related to the mini-notation and how it is parsed and interpreted. Most notably, I found a way to make the chord notation patternable and made it easier to add new custom chord modifiers.

**What motivates you to work on Tidal?**   

Curiosity of the inner workings of Tidal and the great community!

## Music  

**Tell us about your livecoding music.**  

* I often improvise together with people who play more traditional instruments. I find it very interesting to use microphones to get what the others are playing as an input that I can manipulate through coding.
* I'm also interested in multi-channel sound / acousmatic music and the possibilities of live-coding in this context. I think live-coding could be a great tool to be able to precisely control an acousmonium (a speaker orchestra, where each speaker has it's seperate channel). This means to not just make the sounds that are being heard, but also to distribute them across the speakers in real-time (this is often called diffusion).

**What samples or instruments do you like to work with?**  

Recently, I like to use very tiny grains of samples and process them with Tidal. What I like about this approach is that it is easy to manipulate and add effects to each grain individually. I also like to record my own samples with various microphones.

**What projects are you currently working on or planning? What's next?**  

* I would like to work on a bigger scale AV performance using Tidal, Hydra and Vimix together, to create something like a short film.
* I'm also working on an interactive sound installation where I will probably use Tidal to generate the sound.
* I'm working on a new acousmatic piece for a composition competition.

### Links to your music / recorded livecoding sessions:
- [Bandcamp](https://flimmerhaar.bandcamp.com/album/cilia)
- [Acousmatic Music](https://www.youtube.com/watch?v=ieQ7fA7ah3s)
- [Algo10](https://www.youtube.com/watch?v=-oMwPdgxqiI)
- [Linktree](https://polymorphicengine.github.io/)


### Other  

I'm currently working on a live-coding language that will extend the mini-notation to a full programming language. It is still in early development, but maybe somebody is interested in helping me out! I'm working on it [here](https://github.com/polymorphicengine/minilambda/tree/types).


<img src={require('./polymorphic_engine_blog_picture.jpg').default} alt="youth photo with computer" width="600" />
