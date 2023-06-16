---
title: Tidal Profile - Helen Papaioannou
date: 2023-06-16
---

| Tidal Cyclist  | Helen Papaioannou    |
| --------:    | :---------- |
| aka          | Kar Pouzi / Papaloannov |
| Location     | Yorkshire, UK (currently Sheffield…soon to be…somewhere else in Yorkshire!) |
| Years with Tidal | 4 yrs intermittently |
| Music available online | YouTube, [BandCamp](https://dontdronealone.bandcamp.com/album/red-sprite)|
| Other music/audio sw | Baritone sax, synthesizers, Ableton, bells, toys, games, scores |

## Livecoding

**What do you like about livecoding in Tidal? What inspires you?**  
For me, Tidal is a super-fun environment that affords many possibilities and surprises, right from the outset of starting as a beginner. I enjoy the feeling of being able to make changes with intention and the musical surprises that arise from unexpected interactions with functions, misunderstandings and errors. I also like that it’s relatively easy to start making music even with limited experience of different functions and syntax.

**How do you approach your livecoding sessions?**  
I use Tidal for a variety of purposes, sometimes for live situations, sometimes to create and record music that I then layer with other sounds (e.g. performing with baritone sax or synthesizers) and produce into tracks. For me, Tidal is a good tool to come to when I don’t have or want a clear idea of what I want to do; even small changes to patterns can lead you down a musical rabbit hole you didn’t foresee.

**What coding approaches do you like to use?**  
At the moment I’ve been mainly having fun in Tidal by working with one sample, or a very small palette of samples. I have a lot of fun with limitations. Here’s an example of doing something super simple with the same sample, using sometimesBy & silly increments of ‘fast/slow’, or random speed ranges, and sequences of the same sample repeated a different amount of times…I like to push things until they break & often they do! I’ve seen other people doing fun stuff with inverse patterns which I also often use.

```haskell
let
inverse 0 = 1
inverse 1 = 0

do
let pat = "[1 0 1 0 0]"
d1 $ gain pat # s "ehit" # up "<-12>" # cps 1
d2 $ gain pat # s "ehit" # up "<-7>"
d3 $ gain pat # s "ehit"
--- ...

do
let pat = "[1 0 1 0 0]"
d1 $ sometimesBy 0.3 (fast "0.99") $ gain pat # s "ehit" # up "<-12>" # cps 1
d2 $ sometimesBy 0.3 (fast "1.001") $ gain pat # s "ehit" # up "<-7>"
d3 $ gain (inverse <$> pat) # s "ehit"

--- ...

do
let pat = "[<1*11 1*12 1*13> 0 <1*10 1*14 1*16> 0 0]"
d1 $ sometimesBy 0.4 (palindrome) $ gain pat # s "ehit" # up "-12" # cps 1
d2 $ sometimesBy 0.4 (palindrome) $ gain pat # s "ehit" # up "-7"
d3 $ sometimesBy 0.4 (palindrome) $ gain pat # s "ehit"
```

Starting from patterns of Greek dances, like hasaposerviko, make for fun improvs which could go anywhere
```haskell
d1 $ s "[~ ebd ~ ebd, ~ clap ~ clap:10, ~ <met:4?>, [fing ~ clap]*4]" # pan (rand)
d2 $ loopAt 4 $ s "hv" # n (irand 20)
d3 $ s "[[zouki2*2 zouki2]*4]" # n (irand 30)
d4 $ every 4 (|+ up "7") $ up "[-5 2]" # s "BruBass:2"
```

**Do you use Tidal with other tools / environments?**  
Yeah, I’m not very faithful to any particular environment; I pick & choose depending on what I’m doing and how I feel. I often end up recording improvisations or specific results of code I like in Tidal into a DAW and sometimes layer other things on top. Or I use Tidal to control synthesizers via MIDI.

## Tidal Contributions

**How do you contribute to Tidal Cycles? What have you worked on?**  
I have used Tidal in educational workshops and enjoy seeing how it excites people and inspires interest in music making more generally. I generally introduce/incorporate a variety of different approaches to music making when delivering workshops or teaching.

## Music

**What projects are you currently working on or planning? What's next?**  
- Ultraniche label is releasing one of my Kar Pouzi singles, Clippity Clop, in 2023. This track was originally an improvisation I did in a live set with Tidal, made with one electronic stab sample. I then revisited the code, recorded the output & played some sax on top, in unison with the resulting pattern generated in Tidal.
- I’m slowly working towards a solo Kar Pouzi release in 2024, including tracks made using a variety of tools, including Tidal amongst other things.
- I’m also writing a piece for 2 percussionists and touring an audiovisual collaboration in Japan with artist [Noriko Okaku](https://norikookaku.com/noriko-okaku).
- I've been playing in a new, very quiet duo with percussionist Charlie Collins, which we're excited to perform & record soon.

### Links to music  
- [My website](https://www.helenpapaioannou.com)
- [Kar Pouzi (solo)](https://dontdronealone.bandcamp.com/album/red-sprite)
- [Garlic Hug (EP)](https://aphelioneditions.bandcamp.com/album/the-truth-about-carbs) + [Party video](https://www.youtube.com/watch?v=PIlwngC4Csk)
- Here's a video interview I made for [florilegio](https://www.youtube.com/watch?v=yxH4ilCWMr0).

#### Background

I work with a mixture of approaches and tools in my music, sometimes improvising from scratch (with saxophone, synthesizers, or Tidal), sometimes composing things from start to finish (be it through a DAW or a score, sometimes incorporating Tidal in electronic works), or using pattern games and scenarios with ensembles which are somewhere in between.


<img
  src={require('./papaioannou_unicorn.jpg').default}
  alt="Helen with Unicorn"
  width="400"
/>
