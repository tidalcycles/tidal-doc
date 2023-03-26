---
title: Tidal Profile - djmelan3 (Mel Laubscher)
date: 2023-03-25
---

| Tidal Cyclist  | Mel Laubscher    |
| --------:    | :---------- |
| aka    | djmelan3 (dee-jay-muh-lun-dree) |
| Location | Cape Town, South Africa |
| Years with Tidal | 3  yrs |
| Other LiveCoding env | Estuary, SuperCollider |
| Music available online | [YouTube - djmelan3](https://www.youtube.com/@djmelan3) |
| Other music/audio sw | Pure Data, Logic, ProTools and similar DAWs |
| Comments | [Club Tidal Forum Thread]([https://club.tidalcycles.org](https://club.tidalcycles.org/t/blog-profile-djmelan3/4635)) |

## Livecoding  

**What do you like about livecoding in Tidal? What inspires you?**   

I love the community around live coding and TidalCycles. What inspires me is how welcoming the community is and how simple it is to become involved. If you're new to TidalCycles there's a large community keen to help. In terms of TidalCycles itself I really enjoy the interactive aspect of the language, something that traditional DAWs lack. Live coding allows me to express myself musically much faster than a DAW can offer. I also find it easier to make creative decisions with Tidal whereas using a DAW often leads to overthinking and never actually finishing any projects.

**How do you approach your livecoding sessions?**  

I largely participate in collaborative work, in which the group I collaborate with will brainstorm and decide upon a variety of strategies to use when we're jamming together. In both solo and collaborative work, depending on the context, I'll take an improvisational approach and randomly select audio samples, functions or write patterns I'd like to use in combination with one another. This is mainly because I'd like to discover (and be surprised by) all kinds of musical possibilities that any combination of functions, samples and patterns can create in Tidal.

**What functions and coding approaches do you like to use?**  

My approach is mostly improvisational/experimental, but recently I've been experimenting with longer form composition attempting to create more structured patterns - i.e. placing a few `stack` functions within a `cat` function or a few `cat` functions within a `stack` function and then proceeding to expand on these.

I also enjoy using a number of functions that control the loudness (e.g `#gain (range 0.35 0.85 fast 12 sine)`) and spatiality (`pan`) of the audio I work with within confines of stereo monitoring. To do this I combine `pan` and `gain` and place the audio at different areas within the stereo field. For example:

```haskell
d3 $
    -- slow 2 $
    fast 2 $
    sometimes (slow 2) $
    almostAlways (#gain 0.65) $ s "[[x*2][~ x][x@2][x]]" #s "hh27"
    #delay (choose[1/12,1/4,1/8])
    #pan (fast 2 $ sine)
    #gain 1.15
```

**Do you use Tidal with other tools / environments?**  

I've mostly used MiniTidal in Estuary when collaborating simply because it's an easy-to-access platform, especially for non-programmers such as myself. When I work on my own I do experiments with SuperCollider and Tidal in VS code. I have some experience with Pure Data as well and it was actually through creating small patches in Pure Data that I became interested in using programming languages to solve musical problems.

## Music  

**Tell us about your livecoding music.**  

Since 2020 I've been a co-collaborator of SuperContinent. We've performed together at various conferences, online events and even at an online meeting. Locally, I've worked alongside students in a small university ensemble where we performed in online environments as well. As with collaborative contexts, one has to be aware of others in the group at all times. I find this to be an exciting challenge, especially when my co-collaborators come from varying musical backgrounds. Using the predetermined strategies we improvise and live code our performances from scratch. When I do my own experiments the goal is to write pre-composed code that's ready to run and which will be adjusted throughout the performance to create as much variation as possible.

**How has your music evolved since you have been livecoding?**  

I've experimented a lot through my use of the language and observed a lot through collaboration. Alongside learning from my collaborators, I taught myself how to code with Tidal by watching what everyone else did. I now find that I'm able to use Tidal as a tool to express ideas far clearer than I ever could with any other tool.


**What samples or instruments do you like to work with?**  

I work with all kinds of samples. I don't limit myself to use particular samples, but when I am looking for a particular overall "sound" I'll usually pick samples that will fit with what I'm going for.


**What projects are you currently working on or planning? What's next?**  

Currently, I have a series of upcoming talks hosted by the University of Cape Town's South African College of Music. In these I'll be demonstrating the technique of live coding as it is still very much a newer approach to performing music in South Africa. I'll also be performing solo for the first time ever as part of this demonstration. Subsequent talks in this series will cover some of the work I've done during collaborations, and I hope to meet new people who might take in interest in learning how to live code themselves.

### Links to your music / recorded livecoding sessions:

- [YouTube Main Page](https://www.youtube.com/channel/UCh7EiGKEEnCSfZ8xzUJIsZw)
- [Solo streams/performances](https://www.youtube.com/playlist?list=PLroSCmh5yBWCr-U3h-0-HhxQ3tuq2qbpx)
- [SuperContinent collaborations](https://www.youtube.com/playlist?list=PLroSCmh5yBWAHsSjTMY3hXtNoVB1I8Snh)
- [UPLOrc collaborations](https://www.youtube.com/playlist?list=PLroSCmh5yBWCwxQ6jnR4Ott_1Dxt2kB7l)
- [WeekendJam collaborations](https://www.youtube.com/playlist?list=PLroSCmh5yBWDZk6zoW48jj-1WwP3HWhiA)


Comments: [Club Tidal Forum Thread]([https://club.tidalcycles.org](https://club.tidalcycles.org/t/blog-profile-djmelan3/4635))
