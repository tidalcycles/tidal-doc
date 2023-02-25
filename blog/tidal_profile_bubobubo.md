---
title: Tidal Profile - BuboBubo (Raphaël Maurice Forment )
---

| Tidal Cyclist  | Raphaël Maurice Forment |
| --------:    | :---------- |
| aka    | BuboBubo |
| Location | Lyon/Paris, France |
| Years with Tidal | 4 yrs |
| Other LiveCoding env | SuperCollider, ORCA, FoxDot |
| Music available online | [Bandcamp](https://bubobubo.bandcamp.com/album/archive-grrrnd-zero) |
| Code online | [GitHub](https://github.com/Bubobubobubobubo) |
| Other music/audio sw | SuperCollider, MaxMSP, SunVox, VCVRack |

## Livecoding  

**What do you like about livecoding in Tidal? What inspires you?**   

TidalCycles taught me a lot about music and improvisation. I used not to care too much about rhythm and structures when improvising. The emphasis that Tidal is putting on rhythm can actually be beneficial. It pushes you to explore some aspects of music you might be neglecting: complex time signatures, intriguing rhythms, etc... I also like the fact that it feels like a "metaphoric" language to talk about music that ends up taking shape while typing on the keyboard. Making music with Tidal, you quickly start to put a name on specific patterning concepts.

Tidal is also super fun: I usually have a great time when improvising during a jam session using it, especially when it blends with other non algorithmihc instruments :)

**How do you approach your livecoding sessions?**  

I like to setup a system that I find interesting or playful. I spend quite some time organising my instruments, effects, mixing desk, controllers, etc... Whenever I find a system that I find interesting to play with, I'm generally not preparing much more. I know that music will just flow if I really start improvising and exploring the system. I just start tinkering to discover what I have on my hands. Preparing such systems takes most of my time before gigs. I think that I've never played twice with the same exact setup!

I really like jamming with friends as well without preparing much, using my own collection of audio samples. When coding alone, you almost mechanically end up doing too much for your own sake. Friends will not allow such things to happen. You must listen and adapt! Nowadays, synchronizing Tidal with pretty much anything has also became much more simpler than it used to be. One more reason to do it!

One other thing is that.. I usually don't record my stuff! I play live, and then boom, I'm gone. Live coding is great because it's ephemeral. Once you stop coding, you should start again to get the same result.. except it's never the same.

**What functions and coding approaches do you like to use?**  

I'm not very good at learning the standard library, which is why I ended up writing documentation to actually discover more of it! I have some techniques I always like to play with:
* playing with a large collection of samples, without ordering or sorting them beforehand. Iterating through a directory, finding iterations that sound good.
* writing structures: using `cat`, `ur`, `stack`, etc...
* Nesting groupings (`[]`) and using `<>` a lot to get the most out of patterns that are short to write.
* using `superimpose` and `sometimes` too much, to the point where your pattern ends up being a totally different thing compared to what you started with.
* *soloing* by just writing a one-note pattern that I edit really fast.

Some people use extensive collections of custom functions. I never could quite grasp Haskell, so I ended up maximising what I truly understood in the language!

**Do you use Tidal with other tools / environments?**  

All the time. I usually separate my orbits (stereo tracks) to a DAW or to another software for post-processing. I end up adding some controls to Tidal to control send/returns and effects without leaving the keyboard. Tidal is now also one of my favorite way to interact with any piece of gear that I can lay my hands on.


## Tidal Contributions  

**How do you contribute to Tidal Cycles? What have you worked on?**  

I used to contribute a lot to the documentation ~1 year ago. When I first started playing with Tidal, all the good stuff was documented in the old wiki website. My first "invisible" contribution was to write some amount of french translation that wasn't easily accessible because the system had its quirks. When the new website suddenly appeared, I ported most of the old website to the new website, reorganising pretty much everything to my liking :)

I was very cautious, trying to make information easy to discover, specifically because I spent so much time digging in the past! This effort has now turned into a very healthy collective effort and the Tidal documentation is something to proud of for everyone who contributed to it!

**What motivates you to work on Tidal?**   

Nowadays, I don't contribute that often by writing/coding stuff so I can't say that I'm motivated to make the system any better! However, I really love to teach Tidal whenever I can. I had the opportunity to teach it in a graduate class at my current university. I also teach Tidal to whoever is interested and sometimes during formal/informal workshops, etc...

## Music  

**Tell us about your livecoding music.**  

I love it when the music I play serves as an outlet and a release. I don't really play the music I enjoy listening which is something that I always found intriguing... I've learned to somehow accept it. I usually listen to folk / rock music with a fair amount of jazz but what I love playing the most with Tidal is hard/fast rhythmic music! Meaning a deluge of drums, saturation and distortion, mangled samples, etc... I also think that Tidal forces you to go in that direction but it's a topic for another day!

**How has your music evolved since you have been livecoding?**  

It changed a LOT about the way I approach music-making. Before I started learning Tidal, I had a mild interest in computers and synthesizers. Nowadays, I'm living in a room full of audio cables / computers. Tidal was very influencial in the way I think about music, but that's also because I've read a lot of the things Alex wrote about livecoding / Tidal. The most important thing that Tidal has taught me is that algorithmic music can actually be simple. Its simplicity is what allows you to go deep, by combining simple ideas and processes and ending up with fascinating results.

I also don't play much piano anymore, and it forced me to pick up my guitar again... just to stretch my fingers after typing so much on a keyboard!

**What samples or instruments do you like to work with?**  

* I like "joke" samples. I ended up soloing with the sound of my oven cooking a pizza a few months ago. `crow`, without doubt, is the best audio sample in the default library. By trying hard enough, you can make them sound like the best thing you've ever heard, or fail!
* Nowadays, I'm specifically looking for instruments with few parameters to tweak. Few parameters means that you are more likely to remember all of them when writing a pattern!
* I feel like I'm repeating myself but: large collections of unsorted samples!

Sometimes, I also try to play with having the minimum amount of control on the Tidal side and relying more on real instrumentst that I can tweak with my hands: modular synthesizers (sending CV and GATE only), drum machines, etc... It feels more natural to launch a pattern and to tweak its output afterhands.

**What projects are you currently working on or planning? What's next?**  

I'm working on my PhD manuscript... which is about live coding! I've been studying live coding languages and techniques for quite some time now and I'm trying to write about this delicate topic by giving it justice! It's an incredibly dense topic and I feel inclined not to give up on any detail that I find fascinating about this art practice. To be more specific, my angle is to think about how live coding languages are inspired by certain aesthetical/political/technical ideas or concepts and how the implementation of these are giving rise to a new range of ideas inspired by the result we're now experiencing :)

I've also been working for quite some time on my own live coding environment named [Sardine](https://sardine.raphaelforment.fr). It started out as an experiment to reimplement some of the things I saw during my study; trying to understand them by doing! Then.. it started to mutate into its own thing! I'm still actively working on it and I use it for my own performances nowadays. I have a group of friends and contributors that have been helping me to make it, and they also added their own ideas to it. I love to craft things where you put so much energy and craft! Alex was right saying that patterns are a valuable area of study! I see patterns all the time, and sometimes cross the path with some ideas already explored by Tidal! Sardine is also quite inspired by Tidal, it can even piggy-back on SuperDirt!

My current plan is to end all of this! Being done with both developing Sardine -- at least most of what I would like it to be -- and writing my manuscript!

... If I have one thing to confess ...

My wildest dream would be to actually play bossa nova with grace using a live coding language. I don't think that I'll ever succeed but dreams are never big enough! I feel that live coding performances are missing some of that expressivity that "real" musicians have!

### Links to your music / recorded livecoding sessions:
- Your Website : [Personal](https://raphaelforment.fr) | [Sardine](https://sardine.raphaelforment.fr)
- [YouTube](https://www.youtube.com/@raphaelforment7668)
- [Cookie Collective](https://cookie.paris)

### Other

Big shout out to my friends from the [Cookie Collective](https://cookie.paris) and from the Digital Audio Community in Lyon! They are also part of why I find live coding so interesting nowadays. It's a treat to make music / chat / collaborate with them. The french scene is more alive than ever but I feel that not much is said about it. Hope to meet with other live coders from all accross the world in the coming years!

Thanks to the Tidal community and to the wider TOPLAP / live coding community as well!
