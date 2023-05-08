---
title: Tidal Profile - LINALAB
date: 2023-05-08
---


| Tidal Cyclist        | Lina Bautista                                            |
| -------------------- | -------------------------------------------------------- |
| aka                  | Linalab                                                  |
| Location             | Barcelona                                                |
| Years with Tidal     | 10?                                                      |
| Code online          | GitHub                                                   |
| Other music/audio sw | MaxMSP, VCVRack, ...                                     |
| Hardware             | Analog Four, Modular synths                              |
| Comments             | [Club Tidal Forum Thread](https://club.tidalcycles.org/) |

## 

I’m Lina, I’m a composer and live coder, I see myself as a long-distance runner in live coding. I’m not a fast learner, but I’ve always been enthusiastic to see and to analyse other live coders' techniques, especially in live sessions (it’s not the same to see a streamed or pre-recorded session, than to feel the space and share it with the live coder), that’s probably why I’ve organised many performances, workshops, Algoraves and projects around live coding and Tidal. 

## Livecoding  


**How do you approach your livecoding sessions?**  

If we talk about two main approaches of a live coding session: the fully pre-composed material on the one, and a from scratch/blank screen session on the other, I’m closer to the second.

It was great to read the [Heavy Lifting post](https://tidalcycles.org/blog/tidal_profile_heavylifting) about this approach, it’s great to see I’m part of the blank screeners team  :).  Personally, I’m not able to craft the session the way I want if I have too many lines, I’ve tried, but I get lost in the code, I’m not able to dig deep into everything that’s happening. It’s probably because I have to control every note, every sound.  Besides, I think there’s a special beauty in writing a single line of code, that goes beyond the musical aspect, it can be performative, almost poetic. 

(… but don’t get me wrong, I totally admire live coders who are able to prepare everything in advance).

Most of the time (when I can carry them) I use synthesizers to perform, I know Tidal is the best with samples with all the incredible functions to manipulate them, but I come from the DIY modular synth scene, so I really enjoy analogue sounds. I currently use MIDI and sometimes audio signals to control my synths. 


**What functions and coding approaches do you like to use?**  

I guess what I like most about Tidal is the pattern structures and the possibility to create and modify algorithms on-the-fly, I’m a fan of mini-notation and creating complex polyrhythms and structures with just a simple line, like: 


    d1 $ s "[bd(<9 5 4>,16),can:4(7, 16, 14) ]" 

haha, not really my style, but you can get the idea… 

Other functions that define my sessions are arpeggios and scales, I usually make changes between the notes, number of notes, modes of arpeggios and so on.

    d1 $ fast 2 $ arp "up" $ n "e'min'6" # s "superchip" # octave 2


And combining all that, I try to reach things like this during a session:

    d1 $ s "bd*4"
    d2 $ fast 2 $ arp "up" $ n "e'min'<6 8>" # s "superchip" # octave 2
    d3 $ s "superchip(<7 5 1>,12)" # n (scale "minor" "<0 2> .. <12 7 3>"|+ 4)


I’ve found a useful way of making transitions by transforming the rhythms between binary patterns to ternary and vice versa. It creates interesting polyrhythms and with different subdivisions I have a lot of performative options.

I'd like to be able to switch to something completely different more quickly sometimes, but I guess that’s the problem of not having written anything else… Or not being able to think fast enough to create something new…


## Tidal Contributions  

**How do you contribute to Tidal Cycles? What have you worked on?**  

A few years ago we created (with Iván Paz, and thanks to many enthusiastic live coders) the [Toplap Barcelona node](https://toplap.cat/en/home), and since 2018, maybe before, we’ve being organising workshops, concerts, festivals, projects non-stop … we’re always planning exciting things around live coding. 

**What motivates you to work on Tidal?**   

I like the active community that is always changing, creating new functions and developing things, for example I’ve been dreaming for years to implementing functions to use CV (control voltage), and it seems it’s already there, so [I’ll give this a try.](https://tidalcycles.org/docs/configuration/MIDIOSC/control-voltage/)

## Music  

**Tell us about your livecoding music.**  

My music varies from melodic ideas to noisy/ambient textures. I enjoy making multichannel experimental sessions as well as dance sessions, and everything in between. Making people dance has been a challenge for me for years, but I think I’m finally getting there. 


**What projects are you currently working on or planning? What's next?**  

I’m not sure yet, but I have been working with new material lately and spending more time on live coding than with my other practices (I also have a band), so maybe it’s time to record something new, we’ll see…


### Links to your music / recorded livecoding sessions:

- https://linalab.com/ currently under construction :/
- [Solstice Night stream](https://youtu.be/DNRZ6u2ksRI)
- [808 La hora del live coder](https://www.youtube.com/live/p7nBr-cR31k?feature=share)
- [Ice Shards, Down the Rabbit Hole](https://callitanythingrecords.bandcamp.com/track/ice-shards)



Comments: [Club Tidal Forum Thread](https://club.tidalcycles.org/)
