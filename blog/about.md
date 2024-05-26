---
title: Tidal Blog Info
date: 2023-10-01
---

## Purpose
The Tidal Cycles blog is intended to be **by -- for -- about** the Tidal community.
Anyone engaged with Tidal Cycles is encouraged to submit a blog post. Topics can be about Tidal practices, music made with Tidal, live coding, event coverage, new developments & releases, community, etc. Topics can also be broader -- anything that would be of interest to this community, and it doesn't have to be limited to Tidal!

## Templates
To make submitting posts easier, there are a set if templates. Each template includes a suggested set of content sections, but consider this just a starting point. The most important thing is to provide content that reflects your unique perspective.

Templates are maintained in GitHub in the [tidalcycles/tidal-doc](https://github.com/tidalcycles/tidal-doc/) repo / templates branch.

- [Tidal Blog Profile](https://github.com/tidalcycles/tidal-doc/blob/templates/templates/blog_tidal_profile.md) Intended to highlight your livecoding practices, music, and use of tidal. It contains a set of questions to respond to.

- [Tidal music](https://github.com/tidalcycles/tidal-doc/blob/templates/templates/blog_tidal_music.md) Use this to describe a music project such as a new album or music release, a review of a music project, Algorave or concert, or discussion of music made with Tidal or other live coding program. Examples:
    - [Xuixo EP by Relyt R](https://tidalcycles.org/blog/blog_topic_relyt_r_xuixo)
    - [QBRNTHSS - making a live coding album](https://tidalcycles.org/blog/blog_topic_qbrnthss)

- [Blog Topic](https://github.com/tidalcycles/tidal-doc/blob/templates/templates/blog_topic.md) Open topic. Use this for a more free-form approach. One option is to present your own approach to Tidal and live coding. Other topics could be discussion of a new release and the coding behind it, or discussion of other environments like Strudel. Examples:
    - [Working with Samples the Heavy Lifting way](https://tidalcycles.org/blog/tidal_profile_heavylifting)
    - [How Link became Tidal's scheduler](https://tidalcycles.org/blog/link_as_scheduler)
    - [Visualization with Didactic Pattern Visualizer](https://tidalcycles.org/blog/blog_topic_visualizer)

- [Playlist](https://github.com/tidalcycles/tidal-doc/blob/templates/templates/blog_playlist.md) Use this to create a new playlist. See the [Tidal Eclectic Playlist](https://tidalcycles.org/blog/tidal_playlist-eclectic).

We encourage posts to include:
- code sections with Tidal examples
- links into the Tidal user documentation
- links to recordings, YouTube, Bandcamp, SoundCloud, etc.

## Submission Instructions
Detailed posting instructions are included in the template files. Options:
- Submit via GitHub pull request
- Work with a blog editor and send your content via Discord DM or email.

Do what works for you!

## Markdown
Submitting you content in markdown format is preferred, but it is not required. If you aren't familiar with markdown, no problem. Write your content and we'll take care of the rest.

**Docusaurus, MDX and markdown enhancements**

The Tidal blog is rendered in [Docusaurus](https://docusaurus.io/) which uses [MDX](https://mdxjs.com/) as the parsing engine. It supports more layout features including React components. To see the full list of options, check out the [Docusaurus Markdown Features](https://docusaurus.io/docs/markdown-features) page. Here are some examples. There are many more!

### Admonitions - triple colon syntax

:::tip

This is a tip and is called by the triple colon syntax `:::tip`. You can also customize admonitions.

:::

:::caution

When using admonitions - be sure to add empty lines before and after your text lines.

:::

### Details element

<details>
  <summary>Toggle to see more</summary>
    <div>This is the detail revealed. This is useful for a long code block, allowing users flexibility in how they read through your post. </div>
</details>

Another "details" segment, with code:

<details>
  <summary>Toggle for code block - (no div)</summary>

  ```haskell
  h1 $ s "sound"
  h2
  h3
  ```

</details>

:::info

Here is the raw markdown for this file: https://raw.githubusercontent.com/tidalcycles/tidal-doc/main/blog/about.md

:::
