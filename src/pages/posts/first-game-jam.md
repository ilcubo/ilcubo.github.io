---
title: "I joined my first game jam"
first-published: 2026-09-15
last-edited: 2026-09-15
layout: ../../layouts/PostLayout.astro
---

They say that the best way to become a good developer of any kind is through
experience. As someone who is very much lacking in such things, and has an
interest in game development that goes way back, I decided to try something new
this year and took on my first game jam with my friends.

## Hello Unity
My teammates decided on Unity for this project, which I have never touched
before. The hardest part wasn't learning C#. Getting used to the plugin
ecosystem was not so easy. And as somewhat with a bit of Godot experience, it took
some time for me to get used to how game components work, and how it is different
from Godot nodes.

## Version control
Since we're dealing with a considerable amount of large binary files, we decided
on using Git LFS for this project. As for how large? Well, with the repo being
almost 13 GB, you can imagine how much of a nightmare it is to pull, especially with
less than ideal connection. This results in broken local repos. As frustrating as
it is, it motivated me to learn Git features beyond commit and push.

## Sound design
I helped design monster sounds. For these kinds of sounds, there's no better place
to start than using my own voice. I took my (horrible) growl into Audacity, then
pitched it down, and applied some EQ. I then layered it with another voice sample
of mine.

For footsteps, however, I decided on some royalty free audio I found online. I
do not possess a good anough microphone that can record a good sounding footsteps.
Your average phone is unfortunately unable to capture lower frequencies in
footsteps.

## Programming
Finally some actual coding. I scoured for some tutorial on Youtube, then found
something useful. I used a coroutine instead of playing audio in Update function,
which means that audio playing will be independent from the main game loop.

I tried making a minimap by querying all NPCs in the scene and calculate where
the markers should be placed. However, this was rejected in favour of using a
camera and hidden markers under NPCs' feet, which is much smoother. I also made
an attempt on a notepad UI. 

## How was it?
It has been a great learning experience. I also learned a lot about how to work
within a team. I do look forward to my next jam. Maybe I'll try something
different.

The game lives [here](https://hisune.itch.io/midnightmall). Please make sure to also checkout my friends' work, they
are very talented people!
