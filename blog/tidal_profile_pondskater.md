---
title: Tidal Profile - Pondskater (aka Axel Ganz)
---

| Tidal Cyclist  |  Pondskater (aka Axel Ganz)   |
| --------:    | :---------- |
| aka | ganz |
| Location | Düsseldorf, Germany and Telavi, Georgia |
| Years with Tidal | 3 yrs |
| Other LiveCoding env | SonicPi, Hydra |
| Music available online | [Bandcamp](https://pondskater-music.bandcamp.com/) |
| Other music/audio sw | Audacity, Ableton Live with Granulator 2 and Wavetable |
| Hardware | Sequential Circuits Six-Trak, Faderfox PC4 |

<img
  src={require('./aganz.jpg').default}
  alt="pondskater with controller"
  width="600"
/>  

(photo: Heike Kurth)

## Livecoding  

**What do you like about livecoding in Tidal? What inspires you?**   
- Although I have been making electronic music for decades, I have never been the analytical type of music producer. I have always found it difficult to create more complex rhythmic structures and work out arrangements. And although I am not a developer and have no knowledge of programming at all, I was able to get into TC very quickly and find the approach very intuitive. In particular, I now find it easy to create complete rhythmic structures. Sometimes I don't know exactly what I'm doing, but some results speak for themselves. This fascinates and motivates me, even after three years. Tidal never gets boring. Besides, I have always been interested in new approaches and new musical territory. Live coding offers a great and ever-expandable field of experimentation.

**How do you approach your livecoding sessions?**  
- I usually start with a new feature, or an example or snippet of a new feature. I read a lot in the Tidal Club and often find inspiration in other people's questions and examples. Since my repertoire of tracks has been growing, I've also started to put key elements of previous tracks that I particularly like back on the dissecting table of my editor and vary them again and again. Variation, variation, variation. And - after three years, I find that my code tends to get simpler - but in do blocks.

**What functions and coding approaches do you like to use?**  
- I am a fan of `echoWith, chop, degradeBy, repeatCycles, mask`. And it changes. Some days ago I was very busy with `while` which I now rediscover. Now I like `cat` combined with euclidian rhythms very much.

```haskell
d1 $ slow 2 $ cat [s "tabla:04(3,8) tabla:04(5,8)"] # gain 0.9 # speed 0.25
d2 $ cat [s "kick(3,8)", "kick(2,8)", "kick(3,8)"]
```

I also like to work with isorhythms, especially to get a tonal dynamic into a percussion pattern.

```haskell
d1 $ struct "7(7,8)" $ sound "tah" # nCountTo "list" "<7 7 7 7 7 8 9>"
    # gain 0.9 # room 0.3 # size 0.5 # speed 0.5
    # shape (slow 4 $ range 0.0 0.5 tri)
    # pan (slow 2 $ range 0.1 0.9 saw)
```

Recently I started to experiment with @jwaldmann's fantastic random-not-random ideas.
https://club.tidalcycles.org/t/random-not-random/4522

<img
  src={require('./aganz3.png').default}
  alt="tidal code"
  width="800"
/>  

In this context, perhaps this could also be interesting: [Elizabeth Margulis On Repeat: How Music Plays the Mind](http://www.elizabethmargulis.com/on-repeat)  

**Do you use Tidal with other tools / environments?**  
- In the beginning, I really wanted to use Tidal to control hardware synthesizers (Six-Trak, Juno 106, etc.), based on sonic demands. In the meantime, I have largely discarded this approach. Instead, I create a sound on the Six-Trak, then sample a chromatic octave and continue working with these samples directly in TC. The many possibilities of sample chopping and editing functions within TC offer many more sonic possibilities that I don't have within the hardware. I also like to use a hardware controller to adjust parameters live in Tidal.

## Tidal Contributions  

**How do you contribute to Tidal Cycles? What have you worked on?**  
- Since I don't have a clue about Haskell, I can't directly contribute to the further development of Tidal. I can only share my experiences as a user, which I do e.g. at Toplap Düsseldorf meetups. I also try to contribute to the development of the community and the use of Tidal Cycles by planning and running livecoding events and LiveCoding beginners workshops in Düsseldorf, Germany and in Tbilisi, Georgia. Not least for this reason, I would now like to take a look at Strudel.

**What motivates you to work on Tidal?**   
- Basically, it's the curiosity to scratch musical boundaries and - if it goes well - to enter new musical terrain here and there.

**Future perspectives**
- Yaxu’s [Learning Tidal Cycles Course](https://tidalcycles.org/docs/patternlib/tutorials/course1) was my general door opener to using Tidal. Thank you so much for this wonderful introduction, @Yaxu! And since then the [Tidal Club](https://club.tidalcycles.org/) is a permanent resource of knowledge, which I receive as a great gift at any time. I hereby expressly would like to thank the entire Tidal community!

- On the other hand, many more advanced techniques and knowledge about Haskell and Tidal have remained hidden from me until now. For example, the type signatures are still a mystery to me. I can't really use them. I could imagine that I'm not the only musician who likes to work with Tidal but has no basic knowledge of programming or Haskell and would welcome the opportunity for some kind of further self-help training.

## Music  

**Tell us about your livecoding music.**  
- It's never easy to talk about your music. I think I hang somewhere in between. Between dancefloor music on the one hand and really abstract conceptual contemporary music on the other. My music is certainly more influenced by a pop music context than an academic one. Maybe you could call it downbeat electronic, somehow influenced by industrial and IDM. I want to counterbalance this with a certain melodic touch and erratic voices.

**How has your music evolved since you have been livecoding?**  
- Hm, I hope that since then at least the rhythms have become a bit more interesting.

**What samples or instruments do you like to work with?**  
- In order not to succumb to the danger of repeating classic analogue sounds over and over again, I process the Six-Trak sounds in Robert Henke's Granulator 2 within Live. Alternatively, I now also create sounds and loops with the Ableton Live Wavetable Synthesizer.

**What projects are you currently working on or planning? What's next?**  
- I thought I should take the opportunity of the proximity of this years ICLC in Utrecht, so I am currently planning a small live tour of Europe for April and May. I am also helping to organize another satellite event on 05 and 06 May 2023 in Düsseldorf. After that I would like to finally try the MrReason's [Tidal Looper](https://github.com/thgrund/tidal-looper).

### Links to your music / recorded livecoding sessions:
- https://pondskater-music.bandcamp.com/
- https://www.instagram.com/pondskater_music/
- https://www.youtube.com/@toplapddorf/streams
- [Solstice Stream - Dec 2022](https://www.youtube.com/watch?v=9i_7vZgVXsw&list=PLMBIpibV-wQIdS6D1vdijRZPfLBrRP9A_&index=25&t=933s)
- [Toplap Düsseldorf Stream 31.12.2021](https://www.youtube.com/watch?v=UA7Ca6gaSvc&t=974s)
- [Toplap Düsseldorf Concert 29.10.2021](https://www.youtube.com/watch?v=qGXQVNUWFc0&t=1845s) from about minute 31:30:
