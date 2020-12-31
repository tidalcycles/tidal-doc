---
title: Translations:Custom OSC - pre 1.5.0/5/en
permalink: wiki/Translations:Custom_OSC_-_pre_1.5.0/5/en/
layout: wiki
---

      anotherTarget :: OSCTarget
      anotherTarget = OSCTarget {oName = "Another one",
                                 oAddress = "127.0.0.1",
                                 oPort = 7771,
                                 oPath = "/play",
                                 oShape = Just [("note", Nothing),
                                                ("distortion", Just $ VF 0),
                                                ("loops", Just $ VI 1),
                                                ("vowel", Just $ VS "a"),
                                                ("sec", Just $ VI 0),
                                                ("usec", Just $ VI 0)
                                          ],
                                 oLatency = 0.02,
                                 oPreamble = [],
                                 oTimestamp = MessageStamp
                                }
