---
title: Working with samples the Heavy Lifting way
date: 2023-03-31
---

_Thinking about approaches to "from-scratch" improvised live code performance_

(actually as I write this it's sort of turning out to be everything I think about Tidal)

## Intro
Hi, I'm Lucy, and I'm a live coder. In this blog post I'm going to be talking about some of my strategies for using samples and approaches to `from-scratch` or `blank-screen` live coded performance.

## What is 'from-scratch' anyway?
Some things to bear in mind:
- I didn't build my software, or my computer
- I've listened to music before
- I practice
- I have 'ideas'
- Why do we even care?

I dunno where the original idea came from that live coding performances should start with a blank screen. I thought it might be from the [toplap manifesto](https://toplap.org/wiki/ManifestoDraft) or the [generative manifesto](https://slab.org/2015/07/28/the-generative-manifesto-august-2000/), but I looked back through both of those and don't think they're really saying that.

At any rate, when I started live coding, and in the context I was in (Sheffield, 2015) it felt like blank-screen was the only way. It excited me (and continues to excite me) but it doesn't excite everyone. I feel (maybe wrongly?) that the emphasis on fully from-scratch performances can be a barrier for some people, and when I run workshops I always try to emphasize that while I start from a blank screen, it's not compulsory. But I do feel that the Algorave/live coding approach of starting with a blank screen, and __embracing error__ is really exciting and necessary - without this forum for experimental risky performances I wouldn't be able to do what I do.

Lately it seems the blank-screeners have decreased in number and I see more and more pre-prepared performances. I'm often the only blank-screener at a gig.

(BTW - also, I'm not a die hard - I have used pre prepared code in performances, and particularly if I'm using MIDI I have a few snippets prepped. And I have pre-prepped code in supercollider, and I've done performances where all the code was written in advance, and I've recorded performances and edited them and played them live in Ableton *(shh, don't tell the live code gods).* And anyway, live coding languages are already an abstraction with a lot of underlying code. Maybe I should start going to gigs and making my own punch cards live on stage. IDK.)

I guess what I'm trying to say is it doesn't really matter anyway, it's just something I personally enjoy doing that I find exhilarating, and that I want other people to enjoy, while also recognizing that it can be a bit scary.

I think I said this before in my [newsletter](https://buttondown.email/heavy-lifting) (so apols to readers there for whom this is a repeat) - but here is an anecdote I like to remember when I'm thinking about this stuff:

> I mentioned in work that I needed to practice for a gig and my colleague said "if you make it all up, why do you need to practice?"

-- which is such a great question! What I need to practice is _making it up_  and here's how I do it.

## 1. Choosing samples

While I often use (usually hardware) synths in my set, what drew me to Tidal in the first place (and what forms the core of my performance) is the seemingly limitless opportunities for sample manipulation.

Of course you have your drums, synths, loops, acapellas, whatever, but what I really like is incorporating non-musical sounds into my sets. My go-to resource for this is [freesound.org](https://freesound.org/).

```
\m/ blessed be the freesound contributors \m/
```

I'll search for whatever I'm thinking about (bells, bats, woodwork, helicopters, notifications etc etc), have a listen and download a batch of sounds - anything that catches my interest. At this stage I don't know if they'll work or not, but that's ok.

### Some other favourite sources:
- [Blood Sport sample pack](https://pickleddiscs.wordpress.com/2019/05/15/blood-sport-sample-pack/)
- [Legowelt](http://legowelt.org/samples/)
- Illegally obtained samples from YouTube etc*
- Plundering the sample libraries of collaborators (particularly [Graham Dunning's](https://grahamdunning.com/) - sorry Graham)
- Recording sounds on your phone (or fancier equipment if you have it)
- Plundering friends' recordings for remix material (usually a good idea to ask first)

__*Side note on my ethics for sampling:__ if the person is extremely rich I will steal their sounds. If they are not then I don't. I don't feel bad about it. You should make your own mind up about this though.

## 2. Editing

I usually do a bit of sample editing in Ableton or Reaper next - trimming off silences, roughly normalizing volume, checking for loop-ability. I don't spend too long on this - tbh I probably should and it would make things sound better.

## 3. Experimentation

This is the bulk of how I prepare. I usually update/refresh my samples every few months, but I might reach back into the archives for some oldies too. I don't use many of the standard Tidal/SuperDirt sounds (although I used to use them almost exclusively). I do a bunch of experimenting with my new sounds, combining them with old favourites and using my favourite functions to come up with some sketches that sound good to me. This is a semi-mystical process and obviously very personal, but I find this to be extremely enjoyable and almost hypnotic sometimes.

### My favourite functions
Over time I've come up with my 'favourite functions' - actually these haven't really changed very much from the ones I used in my early sets, which I chose by going through the entire Tidal documentation and trying everything (you can do this too! It's a bit tedious at times, but for me it really helped me get my head round how Tidal thinks.)

I pull the new samples into Tidal, and try a few of my typical function combos to see how they feel.

#### Short sounds
I'll use the mininotation and some simple functions to play with rhythms.
- `{}` - for polyrhythms
- `speed` `hurry`
- `chop`
- `density` (aka `fast`/`slow`)

#### Patterns
I'll start playing around with putting some patterns/sequences together.
- `iter`
- `jux`
- `sometimes`/`often`/`every`
- `chunk`

#### Longer sounds
I'll use the following functions to test out loops and textures.
- `loopAt`
- `slice`/`splice`
- `chop`/`striate`
- `randslice`
- `legato`

#### Effects
I'll try some simple effects to manipulate the sounds
- `vowel`/`hpf`/`lpf`
- `shape`

And honestly, those functions, plus a bit of randomness/continuous functions, make up 99% of what I do in performances. You can get so much complexity with just a very little bit of Tidal syntax! Having a limit on the functions and sounds I'm using, for me, really supports `from-scratch` improvisation!

([I actually wrote about this before on the Tidal forum](https://club.Tidalcycles.org/t/lucys-favourite-functions-aka-Tidal-the-heavy-lifting-way/479)).

While I'm experimenting I'm not worrying too much about what it sounds like, or the timings, but I'm more looking for a feel, and thinking about how something might work in a set *(my criteria: do I like it?).* Often at this stage I will discard individual samples or whole groups of samples. I might go back and edit them, or I might go hunting for similar or complementary sounds. I can spend a few hours doing this, and usually when I'm in the zone I will break into sections that would be more like what I do live (which is essentially the same as the experimentation outlined above, but with more consideration to structure and timing).

### Sketches

So this way I come up with some little sketches which sort of act as the inspiration for my set. They won't be exactly what I play live (although I might refer to them if I have a panic), but they give me an idea of the approaches I might use with each sample or set of samples.

> All samples referenced below available [here on google drive](https://drive.google.com/drive/folders/1Fkxwn8Fl8O53gv-7O0dwvGXxj8qKO5Ta?usp=share_link))


#### Sketch 1
```
setcps (137/60/4)

d1
$ chunk 4 (hurry "<2 0.5>")
$ slice 8 "7 6 5 4 3 2 1 0"
$ loopAt 2
$ sound "skel:8 skel:8"
# legato 1
# gain 1.2

d2
$ chunk 4 (# gain 0)
$ jux (iter 4)
$ sound "{kick kick kick kick, 9sd*3 ~ ~, ~ ~ 9hh 9hh*2 [9hh*2 9oh]}"

d3
$ sometimes (hurry "0.5 2")
$ chunk 4 (# speed (range 1 2 sine))
$ sound "vkb*8"
# speed "0.5"
# legato 0.5
# shape 0.8
```
#### Sketch 2
```
d4
$ every 2 (density 2)
$ slice 8 "0 <0 1 2 3>"
$ sound "bev:1 bev:2"
# legato "0.5 1"
# gain 1.2
# shape 0.2
# speed 2

d5
$ sometimes (hurry 2)
$ chop "[1,4]"
$ sound "9rs*16?"
# shape 0.4

d6
$ every 4 (density "8 1")
$ sound "vkl"
# speed (choose [1,1,1,4,7])

d7 $ sound "kick kick(3,8)"
```
#### Sketch 3
```
d1
$ striate 4
$ sound "emub*8"

d2
$ sound "{emud, emud*8}"
# n (irand 8)
# legato 1
# shape 0.4

d3
$ iter 4
$ chunk 4 (# speed (range 1 2 saw))
$ sound "emustab:1(<3 5 6>,8)"
# legato 1

d4
$ sound "emupiano"
# n (irand 4)
# size 0.4
# room 0.1
# cut 1

```

## 4. Choosing a palette

From my experiments above I choose a palette of sounds. I usually try to think about sounds in the following categories:
- Drums/percussion
- Bass
- Lead
- 'Weird'/texture

## 5. Performing the set!
Usually I don't practice a full set before the gig, but from my experiments I will have some ideas/sections that I want to go for. I used to always write myself a crib sheet but I've mainly stopped doing that now (although I often miss it - just laziness really!). Usually they look something like the below - prompts for a feel or a texture, or the names of specific samples.

- percussive bit
- `skel` (or name of another stand-out/central sample)
- ambient synth bit
- dense textures
- degrade/breakdown
- etc

One thing I struggle with is transitions. Tidal has some functionality with this but I've never got on with it. [digital selves](https://soundcloud.com/digitalselves) is amazing at this <3 - I need to work on it.

Anyway, despite all this preparation, on the day I might do something totally different anyway. While I have ideas, it never sounds the same as it did in practice (particularly given the particulars of an individual PA or venue environment), and if there's a sound or a texture that pops up in the live environment that I really like then I'll follow that idea and see where it goes. I also try to pitch things in line with the other performers on the night, or where I am on the bill. If it's a chill vibe then I tend not to go in hard with like 180bpm harsh noise (and vice versa).

> **EMERGENCY TIP: If in doubt stick a big fat 4:4 kick under everything and it will probs sound decent :)**

It doesn't always go well! But I usually enjoy myself regardless. If I have a crash or like accidentally set the BPM to like 120000 then it always feels like a very authentic live coding set and I enjoy that. It can be hard sometimes if you're the only blank-screener and everyone else's set is super polished and yours is a bit of a shit show, but I have to remind myself that's part of the fun. I find `from-scratch` live coding performances to be genuinely exhilarating and one of the best things in my life! (phew...)

## 6. De-mystifying the blank screen

What I'm trying to say with all this (and well done if you've made it this far) is that while the `from-scratch` approach might seem super cool and gonzo, there is a degree of prep that goes into it that I really feel is a process anyone can follow if they want to get into performing in this way. I actually find it super freeing to plug my laptop into the PA and just see where the sound goes, and I think given the nature of Tidal this can be a very relaxing way to play, rather than starting with strong preconceived ideas about what you want something to sound like or how you might like the structure to be. For me there are better tools than Tidal for performing in that way.

I also find this approach to be a really beautiful way to develop my relationship with my computer - it's a wonderful tool that does so much for me, but it can also be a friend and musical collaborator - I learn so much from our performances together <3.

`From scratch` coding can also feel safer with a human collaborator - find a friend and use [Troop](https://github.com/Qirky/Troop), [Estuary](https://estuary.mcmaster.ca/) or [Flok](https://flok.cc/) to jam together. When you don't have to do everything yourself it can be easier to find the space and confidence to improvise.

Have a go from the safety of your favorite spot and try to enjoy the process!

## 7. Final warning
Having said all the above - this approach does require a certain FU attitude!!!! I still can't believe that people actually want not only to watch me perform and to listen to my music but actually to write and talk and teach about it, when I'm doing all this for purely selfish and personal reasons! Of course it makes me so happy when people like my stuff, but honestly I would do it even if they didn't, and that's why I think the `from-scratch` approach works so well for me, it's pure expression and experimentation, with a good dose of on-stage adrenaline. I'm super grateful for all the friendships and experiences live coding has given me. TY!
