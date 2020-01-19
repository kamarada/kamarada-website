---
date: '2020-01-18 22:10:00 GMT-3'
layout: post
published: true
title: 'Have a lot of fun playing these 10 games for Linux!'
image: '/files/2020/01/have-a-lot-of-fun-10-games.jpg'
nickname: 'have-a-lot-of-fun-10-games'
---

{% include image.html src="/files/2020/01/have-a-lot-of-fun-10-games.jpg" %}

Before the Christmas break, I promised that I would show 20 games for [Linux], proving that this operating system is great even for those who use their computer for fun. I decided to split the post in two parts, otherwise it would have been too long. This is the second part.

<!--more-->

Here is the first part, in case you missed it:

- [10 classic games for Linux][classic-games]

The games I'm going to show you today (and the ones of the first part too) share in common:

- they are **cross-platform**: available for use in various operating systems, such as Linux and [Windows], some are also available for other systems such as [Android] and [iOS];
- they are **free** (as in "for free", _gratis_): can be used without payment; and
- they are also [**free softwares**][free-sw] (as in "freedom", also called _libre_ softwares): users of free softwares have the freedom to run, copy, distribute, study, change and improve those software as they wish, access to their [source code][source-code] is given;

Softwares that are free in both senses (as in "for free" and "freedom") are called [FOSS — free and open-source softwares][foss].

As usual, I focus on [openSUSE] and [Linux Kamarada][kamarada], but if you use another Linux distribution, you may easily find out how to install those games on it.

Most of the following games can be downloaded from the openSUSE's [main repository][oss-repo], which contains only [open source software (OSS)][oss] and is enabled by default. Therefore, no additional configuration is needed before installing a game that is in the OSS repository.

But some games are available only in the openSUSE's [Games repository][games-repo]. Some games are even available in both repositories (OSS and Games), but usually the Games repo provides later verions.

In any case, let's enable the Games repository before we begin:

```
# zypper ar http://download.opensuse.org/repositories/games/openSUSE_Leap_15.1/ games
# zypper ref
```

No more talking, let's see the games!

<div class="media mb-3">
    <img src="/files/2020/01/hedgewars.png" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Hedgewars</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2020/01/hedgewars-1-en.jpg" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2020/01/hedgewars-2-en.jpg" %}
    </div>
</div>

[Hedgewars] is a turn-based strategy, artillery, action and comedy game where teams of pink hedgehogs fight each other with over-the-top weaponary. It's for up to 8 players either online multiplayer or local rotational on the same computer, with optional [AI] opponents. There is a training mode for beginners and singleplayer campaigns. Hedgewars borrows concepts from [Worms], a series of artillery tactical games well succeeded during the 90s.

You can get Hedgewars from either the OSS or the Games repo by running:

```
# zypper in hedgewars
```

You can find more information about Hedgewars reading the online manual:

- [Main Page - Hedgewars Wiki][hedgewars-manual]

<div class="media mb-3">
    <img src="/files/2020/01/supertux.svg" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">SuperTux</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2020/01/supertux-1-en.jpg" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2020/01/supertux-2.jpg" %}
    </div>
</div>

[SuperTux] is a single-player game featuring the penguin [Tux], the Linux mascot. He will have to make his way through many different levels, in order to reach and rescue his beloved Penny, who was captured by the evil Nolok. Run through multiple worlds, fighting off enemies by jumping on them, bumping them from below or tossing objects at them, grabbing power-ups and other stuff on the way. SuperTux is a classic jump'n'run side-scrolling 2D [platform game][platform] in a style similar to the well-known [Super Mario][mario] games.

You can get SuperTux from either the OSS or the Games repo by running:

```
# zypper in supertux2
```

You can find more information about SuperTux reading the online manual:

- [User Manual - SuperTux Wiki - GitHub][supertux-manual]

<div class="media mb-3">
    <img src="/files/2020/01/supertuxkart.png" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">SuperTuxKart</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2020/01/supertuxkart-1-en.jpg" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2020/01/supertuxkart-2.jpg" %}
    </div>
</div>

[SuperTuxKart] is a 3D [kart racing][kart] game with a variety of characters, tracks and modes to play. It does not intend to be a [Mario Kart][mario-kart] clone, but they are similar somehow. SuperTuxKart is more fun than realistic and provide an enjoyable experience for all ages. Up to 8 players can race or battle against each other or against AI opponents, on a single computer, a local network or online with players all over the world. You can run a single race or go through the Story Mode, try to beat your fastest time in Time Trial, compete in Grand Prix cups, and more!

You can get SuperTuxKart from either the OSS or the Games repo by running:

```
# zypper in supertuxkart
```

You can find more information about SuperTuxKart in the built-in **Help** menu.

<div class="media mb-3">
    <img src="/files/2020/01/opensnc.png" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Open Sonic</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2020/01/opensnc-1-en.jpg" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2020/01/opensnc-2.jpg" %}
    </div>
</div>

[Open Sonic][opensnc] is an open-source game based on the [Sonic the Hedgehog][sonic] universe. It introduces a different style of gameplay called cooperative play, in which it's possible to control 3 characters simultaneously. Unlike most similar games, Open Sonic provides a greater level of interaction between the player and the levels. It's more than just a jump'n'run; the user must come up with some strategy in order to get through the levels.

Open Sonic is not available on either the OSS or the Games repo, but on the [Packman] repo. To install it on openSUSE (and Linux Kamarada), you need to add the Packman repo first:

```
# zypper ar -cfp 90 http://ftp.gwdg.de/pub/linux/misc/packman/suse/openSUSE_Leap_15.1/ packman
```

Then, install Open Sonic running:

```
# zypper in opensnc
```

The game features a tutorial mode that explains controls and how to play.

<div class="media mb-3">
    <img src="/files/2020/01/extreme-tuxracer.png" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Extreme Tux Racer</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2020/01/extreme-tuxracer-1.jpg" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2020/01/extreme-tuxracer-2.jpg" %}
    </div>
</div>

[Extreme Tux Racer][extreme-tuxracer] is a 3D high speed arctic racing game in which the player must control Tux, the Linux Penguin, on a sliding snow course across a mountainside trying to collect as many fish as possible. Extreme Tux Racer is a fork of the original [Tux Racer][tuxracer], which was originally open source, then became commercial and closed-source, and finally discontinued.

You can get Extreme Tux Racer from either the OSS or the Games repo by running:

```
# zypper in extreme-tuxracer
```

The game features a **Help** menu that lists controls.

<div class="media mb-3">
    <img src="/files/2020/01/frets-on-fire.png" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Frets on Fire</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2020/01/frets-on-fire-1.jpg" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2020/01/frets-on-fire-2.jpg" %}
    </div>
</div>

[Frets on Fire (FoF)][fretsonfire] is a game of musical skill and fast fingers, inspired by many of the popular commercial music games such as [Guitar Hero][guitar-hero] and [Rock Band][rock-band]. The aim of the game is to play guitar with the keyboard as accurately as possible. Coloured markers that represent the notes and the rhythm of the music appear on the screen. Also, each marker corresponds to a button to be pressed. The player must hit the right button at the right moment to play the song and score points. FoF supports gamepads, as well as various guitar-type controllers.

I installed Frets on Fire using [Flatpak], a distribution-agnostic package manager (similar to [Snap], which [we once used to install Spotify][apps-linux-windows]).

First, to install Flatpak on openSUSE, run (it's available on the OSS repo):

```
# zypper install flatpak
```

Then, to install Frets on Fire, run:

```
# flatpak install --user https://flathub.org/repo/appstream/net.sourceforge.fretsonfire.flatpakref
```

The game features a tutorial mode that explains controls and how to play.

<div class="media mb-3">
    <img src="/files/2020/01/stepmania.png" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Stepmania</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2020/01/stepmania-1.jpg" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2020/01/stepmania-2.jpg" %}
    </div>
</div>

[Stepmania] is a music/rhythm game. It's somehow similar to Frets on Fire in the sense that the player presses different buttons in time to the music and to patterns that scroll across the screen. But the aim of Stepmania is to dance! It's usually played with dance pads, but it supports gamepads and keyboards as well. Stepmania resembles [Dance Dance Revolution][ddr].

You can get Stepmania from the Games repo by running:

```
# zypper in stepmania
```

You can find more information about Stepmania on the game's wiki:

- [Stepmania Wiki - GitHub][stepmania-wiki]

<div class="media mb-3">
    <img src="/files/2020/01/pinball.png" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Pinball</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2020/01/pinball-1.jpg" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2020/01/pinball-2.jpg" %}
    </div>
</div>

[Emilia Pinball][emilia-pinball] is an open source [pinball] simulator for Linux. It is also known simply as Pinball, probably because it was the first game of this genre for Linux. The player controls flippers that are used to hit one or more balls into targets to score points. Also, flippers must protect balls from falling on a drain situated at the bottom. The game ends after all the balls fall into the drain a number of times. Sadly Emilia Pinball stopped development very early, but it's still great fun to play! It comes with just two tables to play on, but they are very addictive.

You can get Emilia Pinball from the Games repo by running:

```
# zypper in pinball
```

<div class="media mb-3">
    <img src="/files/2020/01/pokerth.png" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">PokerTH</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2020/01/pokerth-1.jpg" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2020/01/pokerth-2.jpg" %}
    </div>
</div>

[PokerTH] is an open source [poker] game. It allows you to play [Texas hold'em][texas-holdem], one of the most popular variants of poker, against up to nine computer opponents or human players on the same local network or online around the world. To play online, you need to register for free at [pokerth.net][pokerth]. There is a forum where players organize CUPs and publish their results.

You can get PokerTH from the Games repo by running:

```
# zypper in pokerth
```

<div class="media mb-3">
    <img src="/files/2020/01/xgalaga.png" class="mr-3" style="max-width: 48px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">XGalaga++</h2>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2020/01/xgalaga-1.jpg" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2020/01/xgalaga-2.jpg" %}
    </div>
</div>

[XGalaga++][xgalagapp] is a classic single screen vertical [shoot'em up][shoot-em-up] game. You control a spacecraft and combat enemies by shooting at them while evading their fire. XGalaga++ was inspired by [XGalaga], but rewritten from scratch, except for the graphics, which were borrowed from XGalaga. In its turn, XGalaga is a clone of the old space arcade game [Galaga].

You can get XGalaga++ from either the OSS or the Games repo by running:

```
# zypper in xgalaga++
```

When you start the game, the first screen explains controls and bonus items. When you are finished reading, press **s** to start the game.

## How about more?

Besides the 10 games you knew today, and the other 10 we showed on the previous post:

- [10 classic games for Linux][classic-games]

Take a look at:

- [How to play Super Nintendo games on openSUSE with the Snes9x emulator][snes9x]
- [20 apps you can use the same way on both Linux and Windows — part 2][apps-linux-windows-2] (here we talked about Steam, which is an online service where you can get games for Linux)

What about you? Would you like to recommend any game for Linux that hasn't appeared on the Linux Kamarada blog yet? Write in the comments!

Cheers! See you next time!

[linux]:                https://www.kernel.org/linux.html
[classic-games]:        {% post_url en/2019-12-22-10-classic-games-for-linux %}
[windows]:              https://www.microsoft.com/windows/
[android]:              https://www.android.com/
[ios]:                  https://www.apple.com/ios/
[free-sw]:              https://www.gnu.org/philosophy/free-sw.html
[source-code]:          https://en.wikipedia.org/wiki/Source_code
[foss]:                 https://en.wikipedia.org/wiki/Free_and_open-source_software
[opensuse]:             https://www.opensuse.org/
[kamarada]:             {% post_url en/2020-01-14-release-candidate-available-for-linux-kamarada-15.1 %}
[oss-repo]:             https://en.opensuse.org/Package_repositories#OSS
[oss]:                  https://opensource.org/osd
[games-repo]:           https://en.opensuse.org/Additional_package_repositories#Games

[hedgewars]:            http://www.hedgewars.org/
[ai]:                   https://en.wikipedia.org/wiki/Artificial_intelligence
[worms]:                https://en.wikipedia.org/wiki/Worms_(series)
[hedgewars-manual]:     http://www.hedgewars.org/wiki.html

[supertux]:             https://www.supertux.org/
[tux]:                  https://en.wikipedia.org/wiki/Tux_(mascot)
[platform]:             https://en.wikipedia.org/wiki/Platform_game
[mario]:                https://en.wikipedia.org/wiki/Mario
[supertux-manual]:      https://github.com/SuperTux/supertux/wiki/User-Manual

[supertuxkart]:         https://supertuxkart.net/
[kart]:                 https://en.wikipedia.org/wiki/Kart_racing
[mario-kart]:           https://en.wikipedia.org/wiki/Mario_Kart

[opensnc]:              http://opensnc.sourceforge.net/
[sonic]:                https://en.wikipedia.org/wiki/Sonic_the_Hedgehog_(character)
[packman]:              https://en.opensuse.org/Additional_package_repositories#Packman

[extreme-tuxracer]:     https://sourceforge.net/projects/extremetuxracer/
[tuxracer]:             https://en.wikipedia.org/wiki/Tux_Racer

[fretsonfire]:          http://fretsonfire.sourceforge.net/
[guitar-hero]:          https://en.wikipedia.org/wiki/Guitar_Hero
[rock-band]:            https://en.wikipedia.org/wiki/Rock_Band_(video_game)
[flatpak]:              https://flatpak.org/
[snap]:                 https://snapcraft.io/
[apps-linux-windows]:   {% post_url en/2019-07-20-20-apps-you-can-use-the-same-way-on-both-linux-and-windows-part-1 %}

[stepmania]:            https://www.stepmania.com/
[ddr]:                  https://en.wikipedia.org/wiki/Dance_Dance_Revolution
[stepmania-wiki]:       https://github.com/stepmania/stepmania/wiki

[emilia-pinball]:       http://pinball.sourceforge.net/
[pinball]:              https://en.wikipedia.org/wiki/Pinball

[pokerth]:              https://www.pokerth.net/
[poker]:                https://en.wikipedia.org/wiki/Poker
[texas-holdem]:         https://en.wikipedia.org/wiki/Texas_hold'em

[xgalagapp]:            http://marc.mongenet.ch/OSS/XGalaga/
[shoot-em-up]:          https://en.wikipedia.org/wiki/Shoot_'em_up
[xgalaga]:              http://rumsey.org/xgal.html
[galaga]:               https://en.wikipedia.org/wiki/Galaga

[snes9x]:               {% post_url en/2019-08-14-how-to-play-super-nintendo-games-on-opensuse-with-the-snes9x-emulator %}
[apps-linux-windows-2]: {% post_url en/2019-08-12-20-apps-you-can-use-the-same-way-on-both-linux-and-windows-part-2 %}
