---
title: Tidal Profile - ndr_brt
---

| Tidal Cyclist  |  ndr_brt   |
| --------:    | :---------- |
| Location | Italy |
| Years with Tidal | 4  yrs |
| Other LiveCoding env | Hydra, Supercollider, Threnoscope, ByteBeat |
| Music available online | [Bandcamp](https://umanoudito.bandcamp.com/) |
| Code online | [GitHub](https://github.com/ndr-brt/sc-adente) |
| Other music/audio sw | sox, ffmpeg, Ardour, Audacity |

## Livecoding  

**What do you like about livecoding in Tidal? What inspires you?**   
- When I met it for the first time everything was a wow, the cycle concept, function composition, mini-notation, patternization...
Nowadays I'm still able to find inspiration watching other people livecoding or reading the posts on tidal club, especially when there are custom functions listed.

**How do you approach your livecoding sessions?**  
- I always try to start from scratch, when I code alone I usually focus on a single function and try to get everything out of it, while I'm in front of an audience I just go with the flow.

**What functions and coding approaches do you like to use?**
- I'm a huge fan of `superimpose` (used with the `si` shortand), especially mixed with `hurry`, in my "single sample runs" I create layers of the same sample playing at different speed/density to create rhythm and melodic patterns.
For example:
```haskell
let sh t f p = superimpose ((hurry t).f) p

d1
  $ sh 5 id
  $ sh "e" id
  $ sh 3 id
  $ s "sin"
```

this is a really simple example, and from here you can start and mixup all sort of other functions, I also love `chunk`, that moves things a lot:
```haskell
d1
  $ chunk 7 (|* speed 1.5)
  $ sh 5 id
  $ sh "e" id
  $ sh 3 id
  $ s "sin"
```

The fun is that, if you replace `sin` with, for example, a percussive sample like `bd`, here you have a nice drum pattern.

Then to completely unhinge the structure, `chew` and `bite` are also good friends:
```haskell
d1
  $ chew 4 (iter 3 "3 1 0")
  $ chunk 7 (|* speed 1.5)
  $ sh 5 id
  $ sh "e" id
  $ sh 3 id
  $ s "sin"

-- or

d1
  $ bite 4 (iter 5 "3 0 1")
  $ chunk 7 (|* speed 1.5)
  $ sh 5 id
  $ sh "e" id
  $ sh 3 id
  $ s "sin"
```

I often try to escape from this mindset but at the end I fall into it most of the times.

**Do you use Tidal with other tools / environments?**
- I tried it to control some drum machines circuit bent by me but at the end I find the hardware overcomplicated and I prefer to play soft-synths, especially Supercollider: everything in a box and controllable with the keyboard.
- I used Tidal also to [draw stuff with p5 during some sessions](https://www.youtube.com/watch?v=lbUCSVC4GPs).

## Tidal Contributions  

**How do you contribute to Tidal Cycles? What have you worked on?**
- I learned Haskell only to contribute to Tidal. I'm passionate about reading code and get the insights of the software, on the main codebase I solved some bugs and added some features mainly in the mini-notation section ([tidal commits](https://github.com/tidalcycles/Tidal/commits?author=ndr-brt). 
- I took care of the migration from Travis CI to GitHub Actions.
- Atom -> Pulsar: At a certain point I noticed that the Atom Plugin was practically unmaintained so I proposed to be its maintainer, and I brought it back on track. Now Atom has been disbanded but luckily the Pulsar community is vibrant and the Tidal plugin is already fully compatible with it. It was a pretty satisfying migration ([Pulsar-tidalcycles](https://github.com/tidalcycles/pulsar-tidalcycles).

**What motivates you to work on Tidal?**
- Not to be selfish but most of the work I did had direct impact on the use I'm doing of Tidal, I guess because it's easy to contribute when you know why something needs to be improved/fixed.


## Music  

**Tell us about your livecoding music.**
- Well, most of the time it is noisy, sometimes mellow, always not danceable.

**How has your music evolved since you have been livecoding?**
- For sure it changed, I'm not sure it "evolved", sometime I think I was more creative when I was learning how to use the instrument, now it's easier to get into the loop of being repetitive.

**What samples or instruments do you like to work with?**
- I try not to use the default samples nor the default synths, I sometimes write my own synths, sometimes I record my own samples or I get them from various sources.  

**What projects are you currently working on or planning? What's next?**
- I recently finished a record that was a collaboration with Naotodate, that's a non-livecoding noise friend from Italy ([on bandcamp](https://umanoudito.bandcamp.com/album/a-letter-is-a-number-a-feeling-is-a-code). 
- Now I'm working to another collaboration record, this time with ETOL, an amazing italian livecoder. To be fair the project it is still in an embryonic state.


### Links to your music / recorded livecoding sessions:
- [Bandcamp](https://umanoudito.bandcamp.com/)
- [YouTube](https://www.youtube.com/@ndrbrt) (not only livecoding) - here are a few of them using TidalCycles
  - [single sample run #4: gtr [u-mano u-dito]](https://www.youtube.com/watch?v=XYk096aDOcU&t=54s)
  - [single sample run #6: uxay [u-mano u-dito]](https://www.youtube.com/watch?v=CrOfleUR5-c)
  - [TidalCycles + Mutable Instruments Clouds droning sounds](https://www.youtube.com/watch?v=Zk3ICtit3tM)
  - [Pinging filters](https://www.youtube.com/watch?v=3vUXVsh0ICY)
- [Soundcloud](https://soundcloud.com/umanoudito) (not really updated)

### Other  
- I'm a software engineer by day and a punk "musician" by night, I played and still play guitar/drums/bass in various bands
- I'm also part of Toplap Italia, I organize livecoding shows sometimes
- I've been a Linux user for like 20 years
- I like diy electronics, circuit bending and fixing broken stuff found in the trash
- Either I talk too much or I don't talk at all
