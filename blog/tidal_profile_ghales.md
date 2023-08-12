---
title: Tidal Profile - Ghales
date: 2023-07-31
---

|          Tidal Cyclist | Ghales                      |
| ---------------------: | :-------------------------- |
|               Location | Nomad                       |
|       Years with Tidal | 5 yrs                       |
|   Other LiveCoding env | p5.js, hydra, foxdot        |
| Music available online | [Spotify](https://open.spotify.com/artist/0vkFKjAM0AXFZ9a28wSMqL), [SoundCloud](https://soundcloud.com/ghalesdobeat), [Bandcamp](https://ghales.bandcamp.com/) |
|            Code online | [GitHub](https://github.com/ghalestrilo)     |
|   Other music/audio sw | Reaper, Ableton, BitWig, Open Stage Control  |
|           Comments | [Club Tidal Forum Thread](https://club.tidalcycles.org/t/blog-profile-ghales/4824) |

<img
src={require('./ghales.jpg').default}
alt="ghales"
width="600"
/>

## Livecoding

**What do you like about livecoding in Tidal? What inspires you?**

First, the community. From the moment I watched [Kindohm](https://soundcloud.com/kindohm) play with code I knew I'd have to try that as well at some point. I started actually getting into live-coding by getting in touch with [CLiC](https://colectivo-de-livecoders.gitlab.io/) and by the UnB Media Lab. I've made friends in these communities and played a number of times with them.

Also, mini-notation, even at its current experimental state, makes a lot more sense to me than sheet for my current work. Mini-notation is fairly easy to write, plus it's easy (and fun) to combine functions for some very sophisticated manipulation. In particular I love the ability of using algorithms to shape music - as a composer it felt (since the very first time) like finding a missing piece to a decade old puzzle.

**How do you approach your livecoding sessions?**

With a creeping fear that something will break.

It really depends though on whether I'm playing by myself. When in a group (like [Nômade Lab](https://soundcloud.com/nomadelab)) I'll probably use [flok](https://flok.cc/) (shoutout [munshkr](https://github.com/munshkr)) as it's the most accessible platform, with vanilla tidal. I find that relying too much on custom code for collaborative performance is tricky. Plus it's relaxing to play in that environment, as it lifts the pressure off and becomes an exploratory quest for interesting sound instead.

When playing alone, I aim very high: my goal is for the music to be interesting without the knowledge that it's done by code. If an audience can't vibe to it, I'm doing it wrong. This is difficult because general audiences are used to very engaging, dynamic and tightly composed music, which is very hard to pull off with code (especially through live-coding). From experience, either you bring ready-made compositions, or you live-code using some very high-level custom functions.

**What functions and coding approaches do you like to use?**

Here are some guiding principles I grew to follow:

1. **Splitting code between a _palette_ and a _canvas_**. The palette is a set of definitions at the top of a song file - time signatures, tonal keys or even custom functions. Each following block is a section of a song, which I usually tag using `-- @name <name>` so that the comment gets picked up by [verso](https://github.com/ghalestrilo/verso).
2. **Using code where it pays off** - fiddling with numbers / fine tuning variables with is a very poor UX. It's time consuming and unrewarding. Using a separate controller for variables and using code to consume them makes a lot more sense personally. Recently I've been into midi controllers for that purpose.
3. **Avoiding logical constraints** - even without plans to use the full capacity of tidal, I like to trust the platform I'm using to be suited for whatever exploration I decide to do. For this reason I've been exploring (and looking for solutions) for anything which seems hard to do in tidal. The hardest seem to be controlled (arrangement-based) transitions, time signature changes, long sequences with looping/non-looping parts and tonal modulation.

Nowadays, I only really use custom functions for controlling tonality and time signature changes. My [custom function repo](https://github.com/ghalestrilo/libtidal) is basically this.

For tonality, I made a function called `k` (key) which is used as `k <index> <pattern>` throughout my [pieces](https://github.com/ghalestrilo/pieces). The first argument is used to refer to a **key** (a combination of a root and a scale mode) by index, which can be set using `setkey <index> <root> <mode>`. That makes modulating and exploring tonal fields very comfortable. I'll also sometimes use `setI` to store a pattern and refer to it later with the `^` operator which is very convenient.

Putting this together, a lot of my song code will look like:

```haskell
do
  -- palette
  setI "theme1" "0 1 2 3"
  setkey' 0 "d" "major"

do
  -- @name section 1
  p "test" $ (note . k) 0 "^theme1"

-- for brevity I use `nok` which is exactly `note . k`

do
  -- @name section 1
  p "test" $ nok 0 "^theme1"
```

I also rely heavily on `all`. One trick in particular **really** helps, which is to apply transformatiopn (ie. `chop` or `timeLoop`) via `all` but leaving them bypassed. It works quite well to use a function to switch between `id` and the transformation. This way, if you assign the control parameter to be a midi control (such as a button) you suddenly have a highly interactive performance element to use anytime. Using this trick with `timeLoop` is :ok_hand: by far my favorite thing in tidal yet.

In the future I aim to use all + timeLoop extensively. It really changed the game for me, and I feel that it's a very good way of steering a composition in tidal

**Do you use Tidal with other tools / environments?**

I've used a number of different synths and softwares over the years. Today, it's a combination of TidalCycles, Reaper, [U-He Diva](https://u-he.com/products/diva/) and Sitala, plus a midi controller on the side (midi fighter twister). No SuperDirt samples or synths at all.

I find this strikes a nice balance for me, allowing for:

- Record song midi and manipulating it later
- Changing Synth Presets using code - a big thing for my performances
- Recording audio in a familiar and lightweight DAW
- Having access to a huge preset library
- Using a single synth for all instruments

I was into hardware synths for a while, but eventually realised that for the requirements above there are really very few options. The only one I could find was the Virus TI, which is sadly very expensive and hard to find (and use). Plus, it became clear the only think I get out of a hardware synth is the controls - the rest can easily be achieved by software IMO.

## Tidal Contributions

**How do you contribute to Tidal Cycles? What have you worked on?**

I consider [verso](https://github.com/ghalestrilo/verso) to be my main live-coding contribution, even at its current stage.
It's an algorithmic music-making interface which can be used with different live-coding languages.
Right now it supports tidal and I'm moving on to [Jaffle](https://github.com/roipoussiere/jaffle) next. I really like the concept and will continue to develop it as I have the time.

I'm one of the founders of the Algorave Brazil community.
Live-coding has been a things in Rio de Janeiro and São Paulo for years, but there wasn't a national community chat until recently.
The group is now self-managed and regularly brings newcomers to the FoxDot, Sonic Pi, PureData and TidalCycles communities.

I like participating in the [club forum](https://club.tidalcycles.org/), proposing and pitching in on changes, ocasionally helping newcomers find solutions. Whenever I find something exciting I try to share it there as well - such as [Open Stage Control](https://club.tidalcycles.org/t/open-stage-control-tidalcycles/1283).
When playing with hardware synths I eventually came up with mappings which I shared there as well ([model:cycles](https://club.tidalcycles.org/t/tidaling-on-elektron-machines/3785/10?u=ghales)).

**What motivates you to work on Tidal?**

Tidal strikes me as the best approach out there for generating music with code. It's extensible, compact, effective, plus it has a very good community behind it. There's a number of things I wish worked differently, and the underlying haskell makes it particularly difficult to change/update, but all in all it's a great tool and I like to help improve it whenever I have the time.

## Music

**Tell us about your livecoding music.**

I like making music that doesn't sound like it's done by code. If I can trick the listener I'm doing something right. I'll also throw in some organic elements in my studio works for good measure.

One trait of my music is stacking loops with different lengths. If done right, it creates an illusion where it's almost unclear when a beat starts and ends. It also makes very simple patterns go a long way, since they will combine at different points with different intervals to create something new and unexpected. A great example of this is [Girassol](https://soundcloud.com/ghalesdobeat/girassol) which features two piano melodies stacked. As they shift against each other, different melodies emerge. All in all I like using code to achieve levels of structured randomness and algorithmic patterns for which sheet music is not suited.

At around 17, I started listening to Meshuggah and got really into Math Metal / Mathcore.
One thing that struck me was their [cyclic patterns](https://www.youtube.com/watch?v=Kx0klv82BDA), which are easier to describe than to formalise through sheet.
One particular instance is Sonic Pi's [ring](https://sonic-pi.net/tutorial.html#section-8-4), whereby two sequences (pitches and lengths) with different element counts can be combined into a third sequence which loops with a much longer length.
Another example I tried to code multiple times is [Perichoresis](https://www.youtube.com/watch?v=oxT6CxhBGbo) by Ishraqiyun - they refer to _ring_ as [Tessellations](https://medium.com/@luis.misiara/interview-trey-spruance-d0cd9a78eef1) or just _Geometric Patterns_.
At the time I did not realise these compositions are algorithmic.
I started developing my own notation system to achieve similar things with bandmates. During college I learned about tidal - code turned out to be the perfect tool to code these songs that have this special personal meaning.

**How has your music evolved since you have been livecoding?**

I've been taught to live-code by [Alexandre Rangel](https://www.quasecinema.org/) and [Joenio](https://joenio.me/) (aka. @djalgoritmo). I also learned a lot from the University of Brasilia (UnB) Media Lab and the [Nômade Lab](<(https://soundcloud.com/nomadelab)>) collective.

<img
src={require('./nomadelab.jpeg').default}
alt="ghales"
width="600"
/>

I started releasing on my own with [Pragma](https://open.spotify.com/album/47Il3SA4T7JIQeXdRiLFer) to learn about releasing music on Spotify and other streaming platforms. It was an live improvisation, live-recorded EP with 3 songs. Pretty generic ambient techno inspired by some Aphex Twin.

I consider [Isohedra](https://ghales.com/music/isohedra/) to be my first proper algorithmic album - it was launched at the start of the pandemic. At that point I was heavily invested in superdirt samples and synths. Also, trying to always do things the "live coding way" - as in, not relying on DAWs or hardware. The album is very loungey and geometric, and uses some very rudimentary timbres, but to this day I quite enjoy its use of fading arrangements.

The next release - [Memento](https://ghales.com/music/memento/) - was really big for me. It was my first release with lyrics and vocals. At this point I was using an Elektron Model:Cycles - which I did for years - for drums, basses and synth sounds.

[Sino](https://open.spotify.com/track/36qsHSD3US85HRJX3PYG4o?si=b322459540234428) was a song that really changed a lot the direction of my music. It threw me back to the drum grooves I used to love but stopped listening to years ago. I realised that's something I wanted to do a lot more.

For live settings, I try to reinterpret my own music into something that fits the audience. I played a techno set in Buenos Aires through [NBTR](https://soundcloud.com/no-breakfast-records) with my friends [Persik](https://www.instagram.com/persik.nbtr/), [Fakin](https://www.instagram.com/fakin.techno/) and [Alther](https://www.instagram.com/hernan_alt/). For that set, I sliced together songs from [Memento](https://ghales.com/music/memento/) and [Isohedra](https://ghales.com/music/isohedra/) and threw drums on top - it worked. Months later, I started playing hip-hop gigs with [Kaleb](https://www.instagram.com/kalebmesmo/), a talented pianist and singer friend.

**What samples or instruments do you like to work with?**

I've used a number of different synths and softwares over the years. Today, it's a combination of TidalCycles, Reaper, [U-He Diva](https://u-he.com/products/diva/) and Sitala, plus a midi controller on the side (midi fighter twister). No SuperDirt samples or synths at all. I use organic drum samples cause it good 👍🏼

I've bought and downloaded a few sample packs from Pocket Operators, the Model Cycles, etc. In particular, [Wavparty](https://wavparty.com/) has been an amazing resource for that!! But in the end I resorted back the a comfortable combination of recorded drums and softsynths. It works best for me.

**What projects are you currently working on or planning? What's next?**

[Prece](https://ghales.com/music/prece/) is my latest work - it's being released as I write this doc 😁

Prece is another instrumental album, but with much more polished sound. I used all the synths I owned on this: a Yamaha Reface CP, an Audiothingies MicroMonsta plus the Model:Cycles. It also features recorded guitars and sampled drums. It's been produced by [Jota Dale](https://instagram.com/jotadale) and released via [Torto Disco](https://tortodisco.com/). It's my longest release - One hour, 10 tracks long - and features the best production quality I've had yed.

Later this year I'll be releasing [Include](https://ghales.com/music/include/), a video series of live performances featuring six musicians I really admire from Brasilia - picture Live-Coding "Sofar Sounds". It's been in the works for two years with a large production team and we're very excited about the result.

After that frankly I'm just taking a break. I've left some songs saved for whenever I want to make music again, but at this point I'm focusing a lot on my career as a software engineer. Music making takes a lot of time and effort, and I really need to pick my battles at this point, especially considering I make music for free and it doesn't pay my bills.

### Links to your music / recorded livecoding sessions

My music is released through Torto Disco and can be found on [their website](https://tortodisco.com/). A full and up-to-date list of releases can also be found on my [homepage](https://ghales.com/music). You can also hear me on your favorite platform via the links below:

#### Spotify

- [Spotify: Prece](https://open.spotify.com/album/7tfJ85Qt7KoGd3rPVDxMqX)
- [Spotify: Memento](https://open.spotify.com/album/6aUF91uGLVwpfrKbkcOlko)
- [Spotify: Isohedra](https://open.spotify.com/album/4AQukgo5BCAsUE55WQ0daX)
- [Spotify: Pragma](https://open.spotify.com/album/47Il3SA4T7JIQeXdRiLFer)

#### Soundcloud

- [SoundCloud: Prece](https://soundcloud.com/ghalesdobeat/sets/prece)
- [SoundCloud: Memento](https://soundcloud.com/ghalesdobeat/sets/memento)
- [SoundCloud: Isohedra](https://soundcloud.com/ghalesdobeat/sets/isohedra)

#### Bandcamp

Find me on bandcamp [here](https://ghales.bandcamp.com/)

#### Live Sessions

- [Solstice](https://www.youtube.com/watch?v=6B3A41214Mo)
- Microjams: [#1](https://www.youtube.com/watch?v=QRvv1RRSuSc), [#2](https://www.youtube.com/watch?v=DHLgy0tf5MY), [#3](https://www.youtube.com/watch?v=LgIppM7lHOM), [#4](https://www.youtube.com/watch?v=QRvv1RRSuSc), [#5](https://www.youtube.com/watch?v=JVAPtQDfW_M)
