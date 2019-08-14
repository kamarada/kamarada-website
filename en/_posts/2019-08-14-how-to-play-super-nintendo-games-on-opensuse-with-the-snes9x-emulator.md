---
date: 2019-08-14 01:30:00 GMT-3
image: '/files/2019/08/snes9x.jpg'
layout: post
published: true
nickname: 'snes9x'
title: 'How to play Super Nintendo games on openSUSE with the Snes9x emulator'
excerpt: 'Relive your childhood playing classic games of the 90s!'
---

{% include image.html src="/files/2019/08/snes9x.jpg" %}

[**Super Nintendo Entertainment System**][snes] (**SNES**), better known simply as **Super Nintendo**, was a 16-bit video game console made by [Nintendo] during the 90s. It was a success at the time, with almost 50 million units sold worldwide and many games made famous, such as [Super Mario World][smw], [Donkey Kong Country][dkc], [Super Mario Kart][smk], [Street Fighter][sf], [Zelda], [Final Fantasy][ff], [Chrono Trigger][ct] and others.

Would you like to remember any of those classics? Did you know it is possible using a program called emulator?

An **emulator** is a software that allows your computer to run software made for another device. A video game emulator allows your computer to run games made for that video game. Files which contain games are called **ROMs**. In the case of Super Nintendo, a ROM would contain the content dumped from a cartridge.

There are some Super Nintendo emulators out there. One of the most popular is Snes9x.

[**Snes9x**][snes9x] is a cross-platform emulator which allows you to play most games designed for Super Nintendo on your PC. It is [free software][free-software] and its source code is available on [GitHub].

Here you are going to see how to install and use Snes9x on the [openSUSE] Linux distribution.

## Disclaimer

Are emulators and ROMs legal? There are a lot of questions (and answers) out there.

Emulators are generally considered legal because they themselves don't violate any law. They usually are hobby projects distributed for free and don't contain any proprietary code.

But emulators aren't useful without ROMs. About the legality of ROMs, [How-To Geek][howtogeek1] says:

> Broadly speaking, downloading a ROM for a game you do not own is not legal – just like downloading a pirated movie is not legal. Downloading a ROM for a game you do own, however, is hypothetically defensible – at least legally speaking. But there really isn't caselaw here. What _is_ clear is that it's illegal for websites to be offering ROMs for the public to download, which is why such sites are frequently shut down.

If you want to know more about, I recommend you read the following:

- [Chapter 1: Intro to Emulation Tutorial - Video Game Emulation for Newbies][fantasyanime1]
- [Is Downloading Retro Video Game ROMs Ever Legal? - How-To Geek][howtogeek2]
- [What exactly does the law state about emulation and ROMs? - Arqade Meta][stackexchange]
- [Is It Legal To Play Retro Game ROMs On Emulators? - Lifehacker Australia][lifehacker]
- [Are game emulators legal? - TechRadar][techradar]

You should search how the laws of your country address that topic before going on. Here I just provide information about the emulator and I'm not responsible for how you use it.

## Where to download ROMs

You won't find any ROMs here. But a simple [Google] search shows you a lot of websites where you can find several [Super Nintendo ROMs for download][google].

## Snes9x system requirements

To emulate Super Nintendo on Linux using Snes9x you don't need a supercomputer. [Snes9x documentation][snes9x-docs] says it requires at least a Pentium 2 300MHz processor and 16MB of RAM, or a 1GHz processor for a perfect experience. As a reference, [Windows 7][windows-7], released on 2009, required at least a 1GHz processor. So, if you bought your computer on 2009 or later, almost certainly it fits those specifications.

## Installing Snes9x

There are two different methods for installing Snes9x on openSUSE: from the graphical interface using 1-Click Install or from the terminal using the **zypper** package manager — choose whichever method you prefer.

To install Snes9x using 1-Click Install, click the following button:

<p class='text-center'><a class='btn btn-sm btn-outline-primary' href='/downloads/snes9x.ymp'><i class='fas fa-bolt'></i> 1-Click Install</a></p>

To install using the terminal, first add the needed repository:

```
# zypper addrepo -f http://download.opensuse.org/repositories/Emulators/openSUSE_Leap_15.1/ emulators
```

Then, install the Snes9x package:

```
# zypper in snes9x
```

Right after installing, you should be able to launch the emulador.

## Starting Snes9x

If you have a joypad and want to play with it, plug it in before starting the emulator.

To start Snes9x, if you use the [GNOME] desktop environment, click **Activities**, by the upper-left corner of the screen, start typing `snes9x` and click its icon:

{% include image.html src="/files/2019/08/snes9x-launching-en.jpg" %}

{% include image.html src="/files/2019/08/snes9x-start-screen-en.png" caption="The Snes9x main screen" %}

## Setting up Snes9x

There are a few things you need to set up before you can start playing. Usually, they are set up just once, when using the emulator for the first time.

To access Snes9x settings, open the **Options** menu and click **Preferences**:

{% include image.html src="/files/2019/08/snes9x-preferences-en.jpg" %}

### Setting up controls

To set up controls, select the **Joypads** tab:

{% include image.html src="/files/2019/08/snes9x-keyboard-en.jpg" %}

This dialog box lists the Super Nintendo joypad buttons and the corresponding keyboard keys or joypad buttons on your computer. To assign a SNES button to a PC key or button, click the field you want to change, then press the desired key or button.

By default, Snes9x will jump to the next button after the one you just assigned, allowing you to quickly assign all the 12 buttons. Start by assigning the first button: **Up**. After you assign **Up**, Snes9x will jump to **Down**, then **Left**, then **Right**, then **Start** and so on.

**Tip:** if you need a suggestion of setup, take a look at the following image.

{% include image.html src="/files/2019/08/snes9x-setup.jpg" %}

If you are going to play two-player games, to set up the second player controls, switch **Joypad** to **2** and repeat the process. I have set up a USB joypad for the second player:

{% include image.html src="/files/2019/08/snes9x-joypad-en.jpg" %}

### Setting up sound

We need to set up one more thing before we can actually start playing: we need to tell Snes9x which sound system to use. By default, openSUSE uses [PulseAudio].

Select the **Sound** tab and change **Sound driver** to **PulseAudio**:

{% include image.html src="/files/2019/08/snes9x-sound-en.jpg" %}

Click **OK** to save settings and close the **Snes9x Preferences** dialog box.

## Opening a ROM

To open a ROM, open the **File** menu and click **Open ROM Image**:

{% include image.html src="/files/2019/08/snes9x-open-rom-1-en.jpg" %}

Navigate to the folder where the ROM is and double click the ROM, which is usually a file with extension `.smc`, `.sfc` or `.zip`:

{% include image.html src="/files/2019/08/snes9x-open-rom-2-en.jpg" %}

The game should start:

{% include image.html src="/files/2019/08/snes9x-game-started-en.png" %}

## Saving and loading game states

An advantage the emulator offers over the video game is that you can save the game state, as well as resume from where you saved it, at any time you want.

Playing on Snes9x, you can save the game state just like you would on Super Nintendo (using the game's own menu), or you can use one of 10 slots available on the emulator.

To save the game state, open the **File** menu, point to **Save State** and choose one of the available slots:

{% include image.html src="/files/2019/08/snes9x-save-state-en.jpg" %}

To resume a previously saved state, open the **File** menu, point to **Load State** and choose the slot where your save resides:

{% include image.html src="/files/2019/08/snes9x-load-state-en.jpg" %}

To make it easier to save and load states, you can assign them keyboard shortcuts. To do so, go to **Options**, **Preferences**, **Shortcuts**, and set up keyboard shortcuts the same way you set up controls:

{% include image.html src="/files/2019/08/snes9x-shortcuts-en.jpg" %}

I suggest you assign **Shift + F1** to save to **Slot 0** and **F1** to resume from **Slot 0**, and likewise for the other slots (**Shift + F2** and **F2** to save to and load from **Slot 1** and so on).

**Tip:** if you use a USB joypad similar to a [Playstation] joypad, which has more buttons than a Super Nintendo joypad, you may have noticed that two buttons have not been assigned during setup: **L2** and **R2**. Now you can assign them to save to and resume from some slot.

## Full screen

If you want to play full screen, open the **View** menu and click **Fullscreen**.

To exit full screen mode, press **Esc**.

I finish my post here. Now it's up to you: have a lot of fun!

## References

- [Super Nintendo Entertainment System - Wikipedia][snes]
- [How to Play Your Favorite NES, SNES, and Other Retro Games on Your PC with an Emulator - How-To Geek][howtogeek1]
- [Snes9X Tutorial - Video Game Emulation for Newbies][fantasyanime2]

[snes]:             https://en.wikipedia.org/wiki/Super_Nintendo_Entertainment_System
[nintendo]:         https://www.nintendo.com/
[smw]:              https://gamefaqs.gamespot.com/snes/519824-super-mario-world
[dkc]:              https://gamefaqs.gamespot.com/snes/588282-donkey-kong-country
[smk]:              https://gamefaqs.gamespot.com/snes/588738-super-mario-kart
[sf]:               https://gamefaqs.gamespot.com/snes/588700-street-fighter-ii
[zelda]:            https://gamefaqs.gamespot.com/snes/588436-the-legend-of-zelda-a-link-to-the-past
[ff]:               https://gamefaqs.gamespot.com/snes/554041-final-fantasy-iii
[ct]:               https://gamefaqs.gamespot.com/snes/563538-chrono-trigger/data
[snes9x]:           http://www.snes9x.com/
[free-software]:    https://www.gnu.org/philosophy/free-sw.html
[github]:           https://github.com/snes9xgit/snes9x
[opensuse]:         https://www.opensuse.org/
[howtogeek1]:       https://www.howtogeek.com/howto/22721/how-to-play-your-favorite-retro-video-games-on-your-windows-pc/
[fantasyanime1]:    https://www.fantasyanime.com/emuhelp/intro-to-emulation
[howtogeek2]:       https://www.howtogeek.com/262758/is-downloading-retro-video-game-roms-ever-legal/
[stackexchange]:    https://gaming.meta.stackexchange.com/q/795
[lifehacker]:       https://www.lifehacker.com.au/2016/08/is-it-legal-to-play-retro-game-roms-on-emulators/
[techradar]:        https://www.techradar.com/news/gaming/are-game-emulators-legal-1329264
[google]:           https://www.google.com/search?q=super+nintendo+roms
[snes9x-docs]:      https://github.com/snes9xgit/snes9x/blob/master/unix/docs/readme_unix.html
[windows-7]:        https://en.wikipedia.org/wiki/Windows_7
[gnome]:            https://www.gnome.org/
[pulseaudio]:       https://www.freedesktop.org/wiki/Software/PulseAudio/
[playstation]:      https://www.playstation.com/
[fantasyanime2]:    https://www.fantasyanime.com/emuhelp/snes9x
