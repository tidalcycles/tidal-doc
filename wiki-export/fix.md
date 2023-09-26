---
title: fix
permalink: wiki/fix/
layout: wiki
tags:
 - Functions
 - Higher-order functions
 - Conditional Transformers
---

[Type](/wiki/Type_signature "wikilink"):

    fix :: (ControlPattern -> ControlPattern) -> ControlPattern -> ControlPattern -> ControlPattern

The **fix** function applies another function to matching events in a
pattern of controls.

    fix

is [contrast](contrast "wikilink") where the false-branching function is
set to the identity

    id

.

For example:

    d1 $ slow 2 $ fix (# crush 3) (n "[1,4]") $ n "0 1 2 3 4 5 6" # sound "arpy"

The above only adds the

    crush

control when the

    n

control is set to either

    1

or

    4

.

You can be quite specific, for example

    fix (hurry 2) (s "drum" # n "1")

to apply the function

    hurry 2

to sample

    1

of the

    drum

sampleset, and leave the rest as they are.

# unfix

    unfix

is

    fix

but only applies when the testing pattern is *not* a match.

**See also: [contrast](contrast "wikilink")**
