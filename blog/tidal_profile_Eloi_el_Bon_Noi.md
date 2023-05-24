---
title: Eloi el Bon Noi (Eloi the good guy)
date: 2023-01-01
---

| Tidal Cyclist  | Eloi Isern |
| --------:    | :---------- |
| aka          | Eloi el Bon Noi |
| Location     | Centelles (Spain) |
| Years with Tidal | 4 yrs |
| Other LiveCoding env | SonicPi, Hydra |
| Music available online | [YouTube](https://www.youtube.com/user/ieloi/playlists), [BandCamp](https://eloielbonnoi.bandcamp.com/music) |
| Code online  | https://github.com/eloielbonnoi |
| Other music/audio sw | Ableton Live, Audacity |
| Comments | [Club Tidal Forum Thread](https://club.tidalcycles.org/)|

<img
  src={require('./eloi_logo.png').default}
  alt="Eloi logo"
  width="200"
/>  
## Livecoding  

**What do you like about livecoding in Tidal?**  
For me tidal cycles is a compositional tool because it allows me to make the complex music I've always dreamed of and do it very quickly, and more importantly, it allows me to perform it by myself in any circumstance.
I'm particularly interested in the ability to create complex iterative structures and the flexibility it gives you to manipulate the sound. Sometimes, when I finish writing one of my endless scripts, I'll run it and spend some time listening to what Tidal comes up with. *I'm fascinated by the code's ability to generate unexpected structures all the time.*

**What inspires you?**   
I am often inspired by the work of other composers and live coders. I'm always looking for sessions on YouTube of artists I'm interested in. I don't have a programming background so I often design my processes starting from those of other colleagues. In terms of genres, I spent a few years listening to a lot of 20th and 21st century contemporary music, but now I'm quite interested in the experimental electronic music scene. Lately I've been listening to a lot of glitch music that I discover on Bandcamp. I love browsing Bandcamp.

**How do you approach your livecoding sessions?**  
I am currently presenting a series of short pieces, the "Rumble machines", which is basically a catalogue of algorithmic processes for generating sound and modeling it on the fly. It's a show designed to be listened to in good conditions, but it is not oriented to the dance floor. I'm working on the possibilities of a script that allows me to mix pieces from other artists and manipulate them with the typical Tidal Cycles processes because I want to be able to offer a rave show.

<img
  src={require('./eloi_2.jpg').default}
  alt="Eloi with logo"
  width="600"
/>

**What functions and coding approaches do you like to use?**  
I'm super fan of the `slice` function. It works well with quantized loops. I use to modify the inner pattern on the fly. Starting here...

```haskell
d1
  $ slice 8 "0 1 2 3 4 5 6 7"
  $ s "yourLoop"

```
...and ending somewhere close to this

```haskell
d1
  $ slice 8 "<0 [ 3 4]> 1!2 3*[4|8|2] [2 4 6] 5 <~ 6> <7 2>*[1|8|12]"
  $ s "yourloop"

```

Thanks to live coders as [Hiroki Matsui](https://www.youtube.com/@hirokimtplc/videos) I've rediscovered the `spread`($) function. I learned a lot from his stuff.

```haskell
do
  setcps (90/60/4)  
  d1
    $ fast 2
    $ stack [
             spread ($) [id, rev, (|+| accelerate "1 2"), (|+| coarse "16 32 24"), chop 16, stut 4 0.25 0.05 ] $
             cat [
              (sound "amencutup*8" # n (irand 32)) |+  accelerate (2),
              (sound "v*4" # n (irand 6)) |+| pan "[0 1]*4",
              (sound "casio*8" # n (irand 6)),
              (sound "ulgab*8" # n (irand 6)) |+| pan "[0 1]*4"
                  ]|+| unit "c" |+| speed 8 # room 0.4,
          whenmod 8 3 (const silence) $
           stack [
                    midinote (slow 2 $ (run 16) * 10 + 60)
                    # s "supergong"# pan (slow 7 $ range 0.8 0.2 $ sine) ,
                    midinote (fast 1 $ (run 16) * 10 + 60)
                    # s "supermandolin" # pan (slow 7 $ range 0.2 0.8 $ sine)
                  ]]
                    # decay "[1 0.2]/4"
                    # voice "[0.5 0]/8"
                    # sustain (slow 7 $ range 5 0.5 $ sine)
                    # room (range 0.4 0.9 $ slow 17 sine) # size(range 0.3 0.6 $ slow 17 sine)

````

**How do you contribute to Tidal Cycles? What have you worked on?**  
I try to stay connected with the activities scheduled by the TopLap Barcelona community - attending our monthly *from scratch* sessions, being part of the festivals we program and giving Tidal workshops whenever I can. I'm very fortunate to belong to this community and I feel very close to them. I'm recently creating a live coding community in one of the universities in Barcelona. It is still an early project, but I hope that next year many students will join us.

I take this space to make a reflection: *is the global live coding community getting old? In other words, are we managing to engage young people (post teenagers in their twenties)?*

**Do you use Tidal with other tools / environments?**  
Yes, I drive every orbit to a single track in Ableton Live adding compression, EQ and some limiter to each one. I also add some mastering patch to the main output.

## Music  

**How has your music evolved since you have been livecoding?**  
Without Tidal Cycles I would not be able to produce my music or at least not as quickly. I try to think of my pieces as sound sculptures. Sound that moves and mutates structured by a chaotic order. I like the contrast between minimalist, almost pointillist fragments and noisy passages.
Working with other musicians has always been conflicting for me for several reasons: the commitment, my questionable leadership skills... Discovering Tidal cycles has allowed me to make all the noise I wanted without needing anyone. This autonomy has then allowed me to collaborate with other artists in a much "healthier" way. **Thank you Alex!**

**What projects are you currently working on or planning? What's next?**   
- My live coding practice is mainly focused on the creation of new material to be published at the end of the year and to be able to do many concerts in 2024. Although Tidal is a tool that saves you a lot of time, I'm quite slow in composing and very demanding on myself. The preparation of the live shows takes me a lot of time.
- I collaborate with Eloy Fernández Porta, a very interesting writer and thinker with whom we do spoken word sessions. Curiously we are both named Eloi, an unusual name.
- I also have a project **Noi$** with [White Pèrill](https://whiteperill.bandcamp.com/) in which we make improvised electronic music from scratch. In our shows I use the screen to tell the biography of a composer with humor interspersed with code and writing.

    - [Noi$: Toplap Barcelona - Viu Multichannel Expansion](https://www.youtube.com/watch?v=jwX3TpOaodo&list=PLPpU9K6Wgm8tmhWsAwBRPr2rIy3xtKKeN&index=6&ab_channel=TOPLAP_BARCELONA)

    - [Noi$: Bandcamp](https://elsnois.bandcamp.com/music)

- In 2024 I will collaborate with a very interesting poetess and a flamenco singer. I will keep you posted. I am very excited!

### Music / recorded livecoding sessions:
- https://eloielbonnoi.com/
- https://www.youtube.com/user/ieloi/playlists
- https://eloielbonnoi.bandcamp.com/album/siroll-sofisticat
- https://linktr.ee/eloielbonnoi

Comments: [Club Tidal Forum Thread](https://club.tidalcycles.org/)  

<img
  src={require('./eloi_9.jpg').default}
  alt="Eloi with logo"
  width="600"
/>
