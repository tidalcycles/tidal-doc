---
title: Default Library
id: default_library
---

Installing **SuperDirt** will also download a default library of audio samples. This library is known as the *default* library, the one that everybody starts with. Some of the sounds are pretty good and usable, others can be a little weird. Keep the ones you like and replace the folders you don't like. You can take a look at the library [here](https://github.com/tidalcycles/Dirt-Samples).

## Dirt/Clean Library

The community is currently trying to come up with a new refined version of the default library, named ironically [Clean Samples](https://github.com/tidalcycles/Clean-Samples/). You can help by submitting your custom samples. This is an ongoing project.

## Default Samples Table

[tedthetrumpet](https://github.com/tedthetrumpet/tidal/blob/master/allthesamples.tidal) has created a Tidal file listing all the existing samples and commenting them: 

```c
-------------------- all the samples
hush

d1 $ s "808" <| n (run 6) -- 6 misc 808 sound
d1 $ slow 2 $ s "808bd" <| n (run 25) -- 25 rather similar 808 kicks!
d1 $ slow 2 $ s "808cy" <| n (run 25) -- 25 808 cymbals
d1 $ fast 2 $ s "808hc" <| n (run 5) -- 5 808 high congas
d1 $ fast 2 $ s "808ht" <| n (run 5) -- 5 808 high toms, bit noisy
d1 $ fast 2 $ s "808lc" <| n (run 5) -- 5 808 low congas, noisy
d1 $ fast 2 $ s "808lt" <| n (run 5) -- 5 808 low toms, noisy
d1 $ fast 2 $ s "808mc" <| n (run 5) -- 5 808 medium congas
d1 $ fast 2 $ s "808oh" <| n (run 5) -- 5 808 open hats
d1 $ slow 2 $ s "808sd" <| n (run 25) -- 25 808 snares
d1 $ s "909!4" -- just one 909 kick, but very nice
d1 $ slow 2 $ s "ab" <| n (run 12) -- nice subtle drum sounds
d1 $ s "ade" <| n (run 10) # cut 1 -- various long samples
d1 $ s "ades2" <| n (run 9) # gain 1.3 -- meh, short quiet noisy sounds
d1 $ s "ades3" <| n (run 7) -- short noisy sounds, lowish pitch
d1 $ s "ades4" <| n (run 6) -- short high pitched sounds
d1 $ loopAt 2 $ s "alex:1 alex:2" -- two acoustic drum loops
d1 $ slow 4 $ s "alphabet" <| n (shuffle 8 $ run 26) -- tts
d1 $ slow 2 $ s "amencutup" <| n (shuffle 8 $ run 32) # speed "{1,2,3}%8" -- wisott
d1 $ slow 4 $ s "armora" <| n (run 7) -- probably useless low pitched noise
d1 $ s "arp" <| n (run 2) -- two synth notes, low and high, both c#?!?
d1 $ slow 4 $ s "arpy" <| n (run 11) -- as below
d2 $ slow 4 $ s "superpiano" <| n "c d f g a c6 d6 f6 g6 a6 c7"
d1 $ s "arpy" <| up "c d e f g a b c6" -- aha!
d1 $ slow 2 $ s "arpy" <| up "c'maj(3,8) f'maj(3,8) ef'maj(3,8,1) bf4'maj(3,8)" -- iya
d1 $ s "arpy" -- in estuary arpy comes out a tone too high in D major! can subtract 2 maybe fixed now
d1 $ slow 4 $ s "auto" <| n (run 11) -- various effected drum sounds
d1 $ slow 4 $ s "baa" <| n (run 7) -- sheep sounds, why?!?
d1 $ slow 4 $ s "baa2" <| n (run 7) -- rather simlar to the above? same?
d1 $ slow 2 $ s "bass" <| n (run 4) -- four short bass sounds, nasty abrupt release
d1 $ s "bass0" <| n (run 3) -- one highly distorted bass drum, plus?!?!?
d1 $ slow 8 $ s "bass1" <| n (run 30) -- thirty synth bass sounds, some long, f or c
d1 $ s "bass2" <| n "[ 0 .. 4 ]" -- five aggressive tonal kicks
d1 $ slow 4 $ s "bass3!44" # n (run 11) -- eleven bass sounds, odd mix of pitches
d1 $ slow 4 $ s "bassdm" <| n (run 24) -- 24 rather similar acoustic-ish kicks
d1 $ s "bassfoo" <| n (run 3) -- same bank as bass0
d1 $ s "battles" <| n (run 2) -- very reverb military snare, hit and roll
d1 $ slow 4 $ s "bd" <| n (run 24) -- lots of electo kicks, mostly quite similar
d1 $ s "bend" <| n (run 4) -- four subtle noisy sounds
-- Lazard - 4 O'Clock In The Morning (Promise Me - Beverley Craven)
d1 $ loopAt 8 $ s "bev:1" -- eight bar vocal keyboard/bass loop (mono)
d1 $ loopAt 8 $ s "bev:2" -- eight bar vocal keyboard/bass loop (stereo)
d1 $ s "bin" <| n (run 2) -- yup, two dustbin hits, kind of ok, could be a snare
d1 $ slow 4 $ s "birds" <| n (run 10) -- chaffinches, nightingales etc
d1 $ slow 2 $ s "birds3" <| n (run 19) -- very short noisy sounds, highish pitch
d1 $ s "bleep" <| n (run 13) -- rtd2 ish, loud!
d1 $ s "blip" <| n (run 13) -- two short pitched sounds, minor seventh apart
d1 $ slow 2 $ s "blue" <| n (run 2) -- two spoken fragments, unintelligible
d1 $ slow 2 $ s "bottle" <| n (run 13) -- short sounds, might be a bottle
setcps (125/60/4)
d1 $ slow 2 $ s "breaks125:0 breaks125:1" -- two one-bar breakbeats
setcps (152/60/4)
d1 $ slow 2 $ s "breaks152" -- one bar of amen at 152
setcps (157/60/4)
d1 $ s "breaks157" -- one bar break at 157
setcps (165/60/4)
d1 $ s "breaks165" -- one bar amen at 165
setcps (120/60/4)
d1 $ s "breath" -- one breath sound, pretty pointless
d1 $ s "bubble" <| n (run 8) -- actually sound more or less like kicks
d1 $ s "can" <| n (run 14) -- intersting percussive sounds
d1 $ s "can" <| n (run 16) # speed "0.125 1!15" -- iya
d1 $ s "casio" <| n (run 3) -- just three cheapo 'drum' sounds
d1 $ fast 2 $ s "casio" <| n "1 2 3 2" # speed 0.25 # cut 1 -- tak
d1 $ s "cb" -- omg what is that sound, so familiar! iya -- nearly same as 808:0
d1 $ s "cc" <| n (run 6) -- some loud reverby cymbals
d1 $ s "chin" <| n (run 4) # gain 2 -- very quiet synthetic clicks
d1 $ s "circus" <| n (run 3) -- three strange and pointless sounds
d1 $ s "clak" <| n (run 2) # gain 2 -- two quiet typewriters clicks, or clock ticks?
d1 $ s "click" <| n (run 4) -- four glitch sounds, maybe useful
d1 $ fast 2 $ s "clubkick" <| n (run 5) -- five similar very aggressive kicks
d1 $ s "co" <| n (run 4) -- various hats
d1 $ s "coins" # gain 2 -- very quiet coin chink
d1 $ s "control" <| n (run 2) -- two synth notes, out of tune
d1 $ slow 4 $ s "cosmicg" <| n (run 15) -- strange mix of bleeps and loud noise
d1 $ s "cp" <| n (run 2) -- two rather similar claps
d1 $ s "cr" <| n (run 6) -- six ride cymbs
d1 $ s "crow" <| n (run 4) -- two crow sounds twice
d1 $ slow 4 $ s "d" <| n (run 4) -- four misc useless sounds
d1 $ s "db" <| n (scramble 13 $ run 13) -- hmm, pretty usable dry drumkit iya
d1 $ slow 16 $ s "diphone" <| n (run 38) -- tts
d1 $ slow 8 $ s "diphone2" <| n (run 12) -- tts
d1 $ loopAt 1 $ s "dist:1" -- 16 highly distorted 1 bar drum loops
d1 $ slow 4 $ s "dork2" <| n (run 4) -- four sounds, nae idea, voices in a space?
d1 $ slow 4 $ s "dorkbot" <| n (run 2) -- people saying dorkbot, two variations
d1 $ slow 4 $ s "dr" <| n (run 42) -- loud midi drumkit, nasty cutoff at end
d1 $ s "dr2" <| n (run 6) -- six clean electro drum sounds
d1 $ fast 2 $ s "dr55" <| n (run 4) -- four dr55 sounds
d1 $ fast 2 $ s "dr_few" <| n (run 8) -- eight loud drum sounds
d1 $ s "drumtraks" <| n (run 13) -- loudish kit
d1 $ s "e" <| n (run 8) -- 8 short and quiet glitchy sounds, similar
d1 $ slow 2 $ s "east" <| n (run 9) -- 9 'world' drum sounds, ok
d1 $ slow 4 $ s "em2" <| n (run 6) -- six longer sounds, kalimba, flute, loon?
d1 $ s "erk" -- voice 'one two three hit it'
d1 $ s "f" -- one short synth note, actually a bit below Eb
d1 $ s "feel" <| n (run 7) -- quite nice bank of 7 drum sounds
d1 $ slow 2 $ s "feelfx" <| n (run 8) -- varied effected sounds, bit longer, ok
d1 $ s "fest" -- voice saying 'bling?' or 'berlin?'
d1 $ slow 8 $ s "fire" -- longish sample of fire sounds, low ambience
d1 $ slow 2 $ s "flick" <| n (run 17) -- mix of 17 hits couple of long Cs
d1 $ slow 16 $ s "fm" <| n (run 17) -- whole bank of loops! inc '31 seconds…'
d1 $ slow 32 $ s "foo" <| n (run 27) -- every breakbeat evah
d1 $ slow 2 $ s "future" <| n (run 17) -- synthetic hits, mostly kicks
d1 $ slow 2 $ s "gab" <| n (run 10) -- bitcrushed hits
d1 $ s "gabba" <| n (run 4) -- bitcrushed kit, four sounds
d1 $ s "gabbaloud" <| n (run 4) -- wisott
d1 $ s "gabbalouder" <| n (run 4) -- wisott
d1 $ s "glasstap" <| n (run 3) -- three nondescript short dry sounds
d1 $ s "glitch" <| n (run 8) -- iya Eb/Ab stab at 5
d1 $ s "glitch2" <| n (run 8) -- same?!?
d1 $ slow 2 $ s "gretsch" <| n (run 24) -- acoustic kit, inc flams
d1 $ slow 4 $ s "gtr" <| n (run 3) -- three long C notes elect guitar
d1 $ s "h" <| n (run 7) -- short baby sounds?
d1 $ slow 8 $ s "hand" <| n (run 17) -- mix of quiet clap sounds, some longer
d1 $ s "hardcore" <| n (run 12) -- 12 synth drum hits
d1 $ s "hardkick" <| n (run 6) -- 6 rather loud crushed kicks
d1 $ s "haw" <| n (run 6) -- 6 odd short hits
d1 $ s "hc" <| n (run 6) -- 6 closed hats
d1 $ slow 2 $ s "hh" <| n (run 13) -- actually a mix of drum sounds, quiet, ok
d1 $ slow 2 $ s "hh27" <| n (run 13) -- another quiet set of electro drum hits
d1 $ slow 2 $ s "hit" <| n (run 6) -- strange hits, 04 one quite long
d1 $ s "hmm" -- female voice saying 'hmm'
d1 $ s "ho" <| n (run 6) -- six open hats, same but of varying length
d1 $ every 2 (fast 2) $ s "hoover" <| n (shuffle 6 $ run 6) -- six loud hoover bass soundss
d1 $ s "house" <| n (run 8) -- quite a nice kit, one pitched sound at 5 ~ Ebm
d1 $ s "ht" <| n (run 16) -- 16 syn toms, rather similar
d1 $ s "if" <| n (run 5) -- five bitcrushed hits
d1 $ s "ifdrums" <| n "0!4 1!4 2!4" -- kick, hat, snare
d1 $ s "incoming" <| n (run 8) -- very electro kit, meh
d1 $ slow 2 $  s "industrial" <| n (run 32) -- iya mix of metallic percussive sounds
d1 $ s "insect" <| n (run 3) # gain 2 -- three very quiet cricket sounds
d1 $ slow 4 $ s "invaders" <| n (run 18) -- space invaders sounds, varied lengths
d1 $ s "jazz" <| n (run 8) -- totally not jazzy at all kit!
d1 $ slow 8 $ s "jungbass" <| n (run 20) -- mostly longish sub-bass kind of sounds
d1 $ s "jungle" <| n (run 13) -- quiet 'jungle' kit, amen-ish
d1 $ slow 4 $ s "juno" <| n (run 12) -- lead/pad notes and chords, C/Cminor
d1 $ slow 4 $ s "jvbass" <| n (run 13) -- selection synth notes, black notes starting Gb
d1 $ s "kicklinn!4" -- wisott
d1 $ slow 4 $ s "koy" <| n 1 -- two koyaanisqatsi long samples, more or less sample
d1 $ slow 4 $ s "kurt" <| n (run 7) -- vocal samples with telephone eq?
d1 $ slow 2 $ s "latibro" <| n (run 8) -- pentatonic selection of open 12th synth samples
-- d1 $ s "latibro" # n 0
-- d2 $ s "superpiano" # n "[b3,fs4]"
d1 $ slow 4 $ s "led" -- two and a bit sample of drums plus intro bleed
d1 $ loopAt 2 $ s "led" # end 0.5 -- not quite right
d1 $ slow 2 $ s "led" # speed (0.835/2) # unit "c" # end 0.835 -- yaxu
d1 $ fast 2 $ s "less" <| n (run 4) -- four fairly extreme drum sounds, kind of cool
d1 $ slow 4 $ s "lighter" <| n (run 33) -- short quiet noisy hits high pitch meh
d1 $ s "linnhats" <| n (run 6) -- wisott
d1 $ s "lt" <| n (run 16) -- 16 loud synth low toms
d1 $ s "made" <| n (run 7) -- synthetic hits, not sure how to characterise!
d1 $ slow 4 $ s "made2" -- very nasty bitcrushed long sound!
d1 $ s "mash" <| n (run 2) -- low synth tom sound and sort of glitch sound, why
d1 $ s "mash2" <| n (run 4) -- longish low syntom sounds
d1 $ s "metal" <| n (run 10) -- a tiny high metal tink at 10 pitches
d1 $ s "metal" <| n (run 10) # up (-24) -- iya
d1 $ s "miniyeah" <| n (run 4) # up (-24) -- very short glitchy sounds, better -24
d1 $ slow 4 $ s "monsterb" <| n (run 6) -- no idea
d1 $ slow 8 $ s "moog" <| n (run 7) -- long low synth notes, various pitches
d1 $ s "mouth" <| n (run 15) -- iya short vocal sounds?
d1 $ slow 2 $ s "mp3" <| n (run 4) -- harsh noise hits, horrible
d1 $ s "msg" <| n (run 9) -- subtle quiet hits
d1 $ s "mt" <| n (run 16) -- 16 medium synth toms
d1 $ slow 4 $ s "mute" <| n (run 28) -- random collection of french horn notes and doubles
d1 $ slow 4 $ s "newnotes" <| n (run 15) -- short high sine notes, black notes?
d1 "noise" -- short quiet noise burst
d1 $ s "noise2" <| n (run 8) -- 8 short noise hits, three much louder than the others
d1 $ s "notes" <| n (run 15) -- same as newnotes, sines
d1 $ slow 4 $ s "numbers" <| n (run 9) -- female voice individual numbers
d1 $ s "oc" <| n (run 4) -- open-closed hats in single hits at four tempi
d1 $ s "odx" <| n (run 15) -- fairly aggressive kit, not very nice, new order apparently
d1 $ s "off" -- single short glitchy bass note C#
d1 $ slow 4 $ s "outdoor" <| n (run 8) -- odd ambient hits, 2 is quite long, interesting
d1 $ slow 4 $ s "pad" # n 3 -- four very assorted long sounds, not exactly pads
d1 $ slow 8 $ s "padlong" -- evolving m9 interval synth d2 $ s "superpiano" # up "[a2,g4]"
d1 $ slow 8 $ s "pebbles" -- very long, maybe pebbles on a beach
d1 $ s "perc" <| n (run 6) -- ok set of hits
d1 $ s "peri" <| n (run 15) -- collection of synth hits, ok
d1 $ slow 2 $ s "pluck" <| n (run 17) -- pizz cb notes various, 0 is B (ish)
d1 $ s "popkick" <| n (run 10) -- kicks, but also tuned-ish in there
d1 $ s "popkick" <| n 0 -- kicks, but also tuned-ish in there Bb, ok
d1 $ slow 4 $ s "print" <| n (run 11) -- dot matrix printer sounds, ok!
d1 $ slow 4 $ s "proc" <| n (run 2) -- two computer glitch sounds?
d1 $ s "procshort" <| n (run 8) -- computer sounds edited very short, clicky
d1 $ slow 2 $ s "psr" <| n (run 30) -- odd mix of ?game sounds mostly short 0 is a kalimba
d1 $ s "psr" <| n 0 -- odd mix of ?game sounds mostly short
d1 $ slow 4 $ s "rave" <| n (run 1) -- soul shout vocals 'are you ready' etc
d1 $ s "ravemono" <| n (run 4) -- mono versions of rave shouts
d1 $ s "realclaps" <| n (run 4) -- wisott
d1 "reverbkick!4" -- wisott
d1 $ s "rm" <| n (run 2) -- two identical retro drum machine toms
d1 $ s "rs!4" -- retro drum machine metro sound?
d1 $ slow 16 $ s "sax" <| n (run 22) -- chromatic collection of very long bari notes
d1 $ s "sd" <| n (run 2) -- two very similar retro snares, not that great!
d1 $ s "seawolf" <| n (run 3) -- noise hits
d1 $ s "sequential" <| n (run 8) -- dry acoustic-ish kit
d1 $ s "sf" <| n (run 18) -- kind of interesting collection of short hits, one C note at 0
d1 $ slow 4 $ s "sheffield" -- long ambience
d1 $ s "short" <| n (run 5) -- elctro kit sounds meh
d1 $ s "sid" <| n (run 12) -- ok, pretty usable sid sounds, melodic potential
d1 $ s "sine" <| n (run 6) -- sines with blunt envelopes, some very low
d1 $ slow 8 $ s "sitar" <| n (run 8) -- longish sitar gestures
d1 $ slow 4 $ s "space" <| n (run 18) -- strange mix of long/short sounds
d1 $ s "speakspell" <| n (run 12) # speed "{-1 2 0.25? -0.5}%6" -- short tts iya!
d1 $ slow 2 $ s "speech" <| n (run 7) -- male vocal fragments plus two short hits
d1 $ slow 4 $ s "speechless" <| n (run 10) -- bits of male tts
d1 $ s "speedupdown" <| n (run 9) -- short fragments of sound inc one loud noise burst
d1 $ slow 4 $ s "stab" <| n (run 23) -- polysynth/fm hits, sort of pitched not really
d1 $ s "stomp" <| n (run 10) -- mostly kicks
d1 $ slow 8 $ s "subroc3d" <| n (run 11) -- game sounds? some hits, one random melody
d1 $ slow 2 $ s "sundance" <| n (run 6) -- very quiet beeps and an explosion, useless
d1 $ slow 8 $ s "tabla" <| n (run 26) -- both hits and gestures
d1 $ slow 8 $ s "tabla2" <| n (run 46) -- multisampled single hits
d1 $ slow 8 $ s "tablex" <| n (run 3) -- male vocal fragments
d1 $ slow 8 $ s "tacscan" <| n (run 22) -- game sounds, some long
d1 $ s "tech" <| n (run 13) -- quiet but moderately interesting drum kit
d1 $ s "techno" <| n (run 7) -- hits, odd mix
d1 $ s "tink" <| n (run 5) # speed 0.125 -- high metallic sounds, pitched down iya
d1 $ s "tok" <| n (run 4) -- four kind of kick sounds
d1 $ slow 8 $ s "toys" <| n (run 13) -- kids toy & voice 'classical music' and 'chimes'
d1 $ slow 4 $ s "trump" <| n (run 11) -- trumpet falls one phrase, thin eq
d1 $ s "ul" <| n (run 10) -- sort of hits/kit, some character, verby, loud
d1 $ s "ulgab" <| n (run 5) -- short bitcrushed hits, usable
d1 $ s "uxay" <| n (run 3) -- one kick and two other sounds
d1 $ s "v" <| n (run 6) -- 6 mixed electronic sounds, kind of a kit
d1 $ s "voodoo" <| n (run 5) -- actually quite a nice five sound kit
d1 $ slow 2 $ s "wind" <| n (run 10) -- actually filtered white noise hits
d1 $ s "wobble" -- one subbass hit
d1 $ s "world" <| n (run 3) -- three kit hits, meh
d1 $ s "xmas" -- voice saying 'merry christmas'
d1 $ slow 2 $ s "yeah" <| n (run 31) -- big selection of short clicks and pops, usable
```
