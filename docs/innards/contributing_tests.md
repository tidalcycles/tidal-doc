--- 
title: Contributing Tests
id: contributing_test
---

Unit tests are small bits of code that check that a function works as expected. You might want to contribute a test for one or more reasons:
* To demonstrate a bug or other unexpected behaviour in a clear way
* To explain how a new feature works
* Because there's a feature you really like and you don't want it to break in the futrue
* To generally help make Tidal more resilient

## Test modules

You can browse the test modules that already exist [here](https://github.com/tidalcycles/Tidal/tree/master/test/Sound/Tidal).

The test modules are named after the modules they are testing, e.g. `/test/Sound/Tidal/UITest.hs` has tests for `Sound.Tidal.UITest`. Here's an example from that file:

```haskell
describe "euclidFull" $ do
  it "can match against silence" $ do
    compareP (Arc 0 1)
      (euclidFull 3 8 "bd" silence)
      ("bd(3,8)" :: Pattern String)
```

This tests that `euclidFull` works OK if its fourth parameter was silence. There was one a bug where it didn't, and the existence of this test means that if this bug comes back, we'll know about it.

`compareP` is for comparing two patterns. It takes three parameters - an `Arc` with a start and stop time -- in this case `0` and `1`, which means that all the events in the first cycle (i.e, between time position `0` and `1`) are compared. Then come the two patterns that are to be compared.

You'll also see `comparePD` - the final 'D' stands for defragment. There are cases where a function event gets split into two parts, and `comparePD` simply joins such events back together before comparing the patterns with each other.

## Contributing tests

To contribute a test, you'll have to fork the **Tidal** project. You'll need to create a (free!) account on GitHub if you don't already have one, then go to the [Tidal](https://github.com/tidalcycles/tidal) and click the `fork` button.

Once you've done that, you'll need to `clone` your new fork to your computer, and set that folder to be your current working directory. You can do that with this command, being sure to replace `"<your username>"` in the above with whatever your username is on GitHub.

```bash
git clone https://github.com/<your username>/Tidal/
cd Tidal
```

## Running tests

Before you do anything else, it's a good idea run the tests to make sure everything completes OK. You can do that with the following command:

```haskell
cabal test
```

## Writing and contributing your test

It's now time to make a 'branch' for creating your test, and then send it to the **Tidal** maintainers as a `pull request`. This is general development stuff, so we'll defer to this handy guide. You can start with step 3 - `"create a branch"`. 
