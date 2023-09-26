---
title: Tidal Profile - Viola He
date: 2023-09-25
---

|          Tidal Cyclist | Viola He                                                                                         |
| ---------------------: | :----------------------------------------------------------------------------------------------- |
|                    aka | [v10101a](https://www.instagram.com/v10101a/), [sandpills](https://www.instagram.com/sandpills/) |
|        Time with Tidal | 1.2 yrs I'm tidal baby                                                                           |
|   Other LiveCoding env | SonicPi, FoxDot, Touchdesigner(?)                                                                |
| Music available online | [SoundCloud](https://soundcloud.com/v10101a) [Vimeo](https://vimeo.com/user83351589)             |
|   Other music/audio sw | Ableton, Max/MSP                                                                                 |

<img
src={require('./viola-01.jpg').default}
alt="a photo of viola, looking down into a computer, with red projection graphics in the background"
width="600"
/>
Photo by Dan Gorelick

## Livecoding

**What do you like about livecoding in Tidal? What inspires you?**

Making patterns and drum loops are my favorite things! I had a non-western percussion background,and using Tidal Cycles feels like wielding an algorithmic percussion instrument - sample chopper hybrid with a lot of space for surprises and ✨randomness✨, tickling my brain in all the right ways. It's well-documented and accessible - removes the barrior of GUIs, DAW paywalls, and has an amazing community involved in maintaining, stewarding, and creating with each other.

**How do you approach your livecoding sessions?**

I like to describe my livecoding approach as "structured improv". Creative freedom within constraints is what works best for my live performances. I aim for my music to be engaging enough for people who are not familiar with livecoding practices, yet not completely erase the "code" qualities -- thus often bringing pre-written structures, basslines, chords, drums, and a clear arc in my head, improvising melodies and textures in between.

**What functions and coding approaches do you like to use?**

- I like `superimpose` a bit too much. Detuning just a little bit. The danger. The drama!
- Adding sine waves to modulate panning and filtering, like `# cutoff (range 200 2000 $ sine)` (honestl I'd modulate anything and everything).
- Using `mask` to create simple composition structures.

```haskell
d1 $ stack[
  s ("bd*4"),
  mask "[0 1]/4" $ s ("~ cp ~ cp"),
  mask "[0@3 1]/4" $ s ("hh27*8")
]
```

**Do you use Tidal with other tools / environments?**

Lately I've been outputing everything from Ableton to simplify the mixing process. I use Tidal to send Midi notes to play custom synths, and route the rest (mostly chopped up samples) through blackhole, also into Ableton. I've also started to dabble more into Strudel and am having a lot of fun with it!

## Music

**Tell us about your livecoding music.**

Grounded by film and theatre practices, and inspired by many genres of rock, jazz, pop, and electronic music, I'm always attempting to use livecoding as an narrative opportunity to build worlds through dynamic sonic ventures. I make joyful dnb music that I'd like friends to dance to; and I also make textural blip blops, droney soundscapes, glitchy vocal mixes that might not be categorized as one type of sound. These two parts of me simultaneously exist, and I try to merge them as fit.

There was a period of my youth when I was _obsessed_ with rock operas / concept albums. Listening through an entire album attentively, in order, for a curated experience presented new grounds for me, and is somehow, strangely, comparable to certain "algorave" experiences. Building my livecoding sets almost feels familiar, like making... computer opera? 25-40 minute livecoded sets are the perfect length for these conceptual experiments -- more than a few tracks, less than a whole show, embracing the chaos of improvisation but never going to out of control. The sonic journey builds a natural arc, but it comes to an end eventually.

**How has your music evolved since you have been livecoding?**

I never used to make electronic music at all, and livecoding has made it easier for me to dive deeper in other aspects of music production and performance. What's really cool about livecoding is that we really don't have to be binded by western tuning systems and music conventions, which continues to be a topic of interest for me. I'm also on a long, deep dive in finding different samples that can be mixed together, as well as sounds that are directly sourced from my life and my culture. I've been making music with machine sound from the shop I work at, gongs and bells and traditional Chinese intruments chopped up in different ways, morning assembly music from my middle school years, field recordings, and a lot of materials that feels intimate and important to me.

**What projects are you currently working on or planning? What's next?**

I'm currently working on leading a livecode.NYC project in collaboration with Wave Farm to create a longer-form radio piece. I'm also starting to work with more non-livecode musicians and producers, trying to better record, produce and intergrate livecoding with other instruments. Hopefully I'll polish and release some music soon. Oh, and learning, teaching and raving to people about Strudel because browser-based Tidal have been SO intuitive and accessible to introduce to my non-livecode friends (and they are important!!!).

### Links to your music / recorded livecoding sessions:

- [Video of a recent live set in LA](https://vimeo.com/852553514?share=copy)
- [Video of a recent live set in Brooklyn, NY](https://vimeo.com/819746119?share=copy)
- [Recording of an hour-long livecoding session on radio](https://soundcloud.com/v10101a/livecoding-on-wgxc-907-fm-audio-buffet)

### About

Viola He is a Shanghai-born, Brooklyn-based interdisciplinary artist, performer, and cultural organizer. Their creative practices engage with DIY electronics, programming, dance/movements, and various time-based media, exploring pathways towards alternative structures, systems and interfaces.

Using algorithmic approaches to enhance, alternate, and obfuscate sounds and images, they work to explore pathways towards alternative structures, systems and interfaces. Viola often dreams about infiltrating digital spaces with physical bodies as tools for intervention, wielding their love/hate relationship with technology to challenge the rigid infrastructures around them. Viola is an organizing member of NYC-based collective Livecode.nyc, and has produced and participated in performance work in NYC, LA, Shanghai, Beijing, Austria, and more.

<img
src={require('./viola-02.jpg').default}
alt="a photo of viola, looking down into a computer, with red projection graphics in the background"
width="600"
/>
Photo by Whitt Sellers
