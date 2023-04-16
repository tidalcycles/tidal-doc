---
title: Tidal Profile - digital selves
date: 2023-04-08
---

|          Tidal Cyclist | digital selves                                               |
| ---------------------: | :----------------------------------------------------------- |
|               Location | London, UK                                                   |
|       Years with Tidal | 5ish yrs                                                     |
|   Other LiveCoding env | Supercollider, p5.js, hydra, marching.js,Max (and/or) pd     |
| Music available online | [SoundCloud](https://soundcloud.com/digitalselves), [Bandcamp](https://digitalselves.bandcamp.com/) |
|            Code online | [GitHub](https://github.com/lwlsn)                           |
|   Other music/audio sw | Audacity, Renoise Tracker DAW @_@                            |
|               Comments | [Autonomous Computer Music Tidal Forum Thread](https://club.tidalcycles.org/t/autonomous-tidal-code-generation/1064/2) [blog comments](https://club.tidalcycles.org/t/blog-profile-digital-selves/4667)|

<img
  src={require('./digitalSelves-med.jpg').default}
  alt="digital selves"
  width="600"
/>  

photo credit: Antonio Roberts

## Livecoding  

**What do you like about livecoding in Tidal? What inspires you?**   

I think the main thing that I like about Tidal for me is working, transforming, shaping and shifting patterns, and listening to the changes in real time. I recently co-ran a workshop with Iván Paz, Alex McLean and Dave Griffiths in Sheffield and at Hangar in Barcelona (we did it remotely at the same time- thanks to On The Fly for having us :) ). We talked a lot about patterns in the context of other traditions, like weaving. To me, it's interesting to think about computer music in this way.

I'm also super inspired by everyone else who is contributing through making music, creating forums for discussion, or working hard to make it an inclusive space. The community has always been one of the best things about TidalCyles <3

**How do you approach your livecoding sessions?**  

I feel like I have two "modes" when it comes to live coding- testing things out and performing things. They're not mutually exclusive though, and often I will test things live on stage, or perform things to nobody else but me.

**What functions and coding approaches do you like to use?**  

I find it hard to have more than one or two functions in my head at the same time, and tend to go through phases when perfoming live of only using the same ones because they're the ones I remember under pressure.

Some of my favourites recently are using [press](https://tidalcycles.org/docs/reference/time/#press) and [fshift](https://tidalcycles.org/docs/reference/audio_effects/#frequency-shifter) on drum patterns:  

(All of the samples I use are available to download [here](https://github.com/lwlsn/Misc_Samples))

```haskell
d1
$ rarely press
$ almostAlways (jux rev)
$ stack [
s "sfe-fx/4" # n (irand 4),
gain "1*8?" # s (choose  ["idmhit2", "revkit"])
#n (irand 16) # speed "[0.75 0.5]/16"
]
# fshift (range 100 300 $ slow 16 $ sine)
# gain 1.124
# speed "[1, 1.02]"
# krush 3

```

I also wrote a piece for the [posthumanist magazine](https://theposthumanist.com/) recently, as they had an issue on "rhythms", where I tried to compose some prose text embedded with TidalCycles functions, and it re-ignited my interest in the use of the [sew](https://tidalcycles.org/docs/reference/conditions/#sew) and [stitch](https://tidalcycles.org/docs/reference/conditions/#stitch) functions, which I think is a super cool way to add sonic variation to patterns. E.g.   

```haskell
d1
  $ sew (iter 4 "1 0")
  ( n "0 .. 7" # sound "cps1")
  (n "0 .. 7" # sound "cpu")
  # orbit 2

```
and

```haskell
d4
  $ stitch (binary "<127 63>") (sound "hjdsynth:12") (sound "hjdsynth")
  # cutoff (range 200 4000 $ slow 8 $ saw)
  # resonance (range 0.1 0.2 $ slow 8 $ saw)
  # note (choose [5,9,0, 12, 16,17, 19])
  # room 0.89  # orbit 3

```
Using the [binary](https://tidalcycles.org/docs/patternlib/tutorials/course2/#lesson-2-binary-patterns) pattern notation to calculate where the two melodic sounds counteract with each other is super fun!


**Do you use Tidal with other tools / environments?**  

Tidal is super cool as it doesn't have to be used with Supercollider and it's been fun to work on how to pattern sources other than just samples or synthesisers.

I've had a go in the recent past at using it to try and program the sounds of an artificial voice. Alex and I worked on first using it to pattern the Pink Trombone vocal synthesis - if you've not heard it, worth checking out [here](https://dood.al/pinktrombone/) - and then more recently working on creating a voice model using "Neural Audio Synthesis", with a tool called [RAVE](https://github.com/acids-ircam/RAVE) which has come out of research at IRCAM, and then live programming this artificial voice from Tidal.

We don't have any public facing documentation at the moment, but hoping to be able to share something more extensive on this soon 👀


## Tidal Contributions  

**How do you contribute to Tidal Cycles? What have you worked on?**  

A little while ago now, I worked on creating an autonomous agent that created its own patterns of Tidal code. This was a fun project during the summer of 2020, which I wrote up a bit about on the old TidalCycles blog [here](https://blog.tidalcycles.org/index.html%3Fp=1280.html). This was part of the [Summer of Haskell](https://summer.haskell.org/) project, which I would encourage anyone who wants to work on the Tidal development to be a part of!

I guess the other way I have contributed is through running workshops on TidalCycles, which I've done in the past but not so many recently. It's always a nice way to get more people engaged and the install part has become much easier in recent years :)


**What motivates you to work on Tidal?**   

Being part of a friendly community and wanting to help make new and exciting ways for humans to interact with algorithms.

Also I want to help inspire other women to be a part of the process of developing software! If there are any women out there that would be interested but don't know where to start please reach out and I'd love to help in any way I can.


## Music  

**Tell us about your livecoding music.**  

I would say my music is meant to be equal measures fun and playful but also serious and emotional. I like to tow this line in the sounds that I make, making people confused if they can dance to the music or not. Been super insipered by some other artists that do the same kind of thing, e.g. Aeoi, sv1, DJH, Asia otus, 5ubaruu & saves, +777000, sleepsang.


**How has your music evolved since you have been livecoding?**  

I've learnt a lot about creating complexity in rhythms, how to elicit surprise in listeners by introducing random variations in both structure and timbre. I've learnt a lot about collaboration too from the people I've worked with since I started live coding! And from working with my machine partner sometimes too └[∵┌]

Also I find myself trying to recreate a lot of rhythms I hear into TidalCycles structures, which is a part of my brain I can't turn off now :S


**What samples or instruments do you like to work with?**  

I basically pick up a lot of samples here and there that I like to work with. I think Lucy's [recent post](https://tidalcycles.org/blog/tidal_profile_heavylifting) about this outlines a lot of the similarity with her practice in being a sample collector.

I have been using the Serum VST for some midi sounds recently too, as it's a nice tool to work with for shaping melodic sounds.


**What projects are you currently working on or planning? What's next?**

I'm having a bit of an unplanned creative hiatus at the moment due to a lot of work (have to finish a PhD at some point in the near future) but I've got a few bits that I was working on before that I'm hoping at some point can turn into another release.


### Links to your music / recorded livecoding sessions

- [Error Topography E.P.](https://cherche-encore.bandcamp.com/album/error-topography)
- [Introversion of Sacrifice E.P.](https://digitalselves.bandcamp.com/album/introversion-of-sacrifice)
- [Live On DataFruits Radio](https://soundcloud.com/datafruits/digital-selves-dxdf)
- [FACT - Artist DIY](https://www.youtube.com/watch?v=t2KeNblKSFM&t=1s)
- [FACT - Sonic Futures: How Technology is Guiding Electronic Music](https://www.youtube.com/watch?v=9iPRPIe_PbQ)

Add your comments in the [Club Tidal thread](https://club.tidalcycles.org/t/blog-profile-digital-selves/4667)
