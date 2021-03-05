---
date: '2021-03-05 20:00:00 GMT-3'
image: '/files/2021/03/tuxguitar-en.jpg'
layout: post
nickname: 'tuxguitar'
title: 'TuxGuitar: did you know Linux can help you play the guitar?'
---

{% include image.html src='/files/2021/03/tuxguitar-en.jpg' %}

If you already play, or want to learn how to play, a musical instrument, especially if it is a guitar, you should take a look at [TuxGuitar], a [free and open source][foss] tablature and score editor and player. With TuxGuitar you can write guitar tabs or listen to the songs in existing tabs, study scales, tune your instrument, and more. TuxGuitar focuses mainly on acoustic and electric guitars, but allows you to write tabs to other instruments as well, such as bass and drums.

TuxGuitar is compatible with other apps of the same genre, such as [Guitar Pro][guitar-pro], which is also a well-known tablature and score editor, but is paid (you need to buy a license to use) and is only available for [Windows] and [macOS]. TuxGuitar can open tabs made with Guitar Pro, which are files with extensions `gp3`, `gp4` or `gp5`.

TuxGuitar is a [cross-platform software][cross-platform] available for Windows, macOS, [Linux] and [FreeBSD].

Here you are going to see how to install and use TuxGuitar on [Linux Kamarada][kamarada-15.2]. You can follow the same instructions if you use one of the [openSUSE Project distributions][leap-tumbleweed].

## Installing TuxGuitar

There are two different methods for installing TuxGuitar from the [openSUSE official repositories][repos]: from the graphical interface using 1-Click Install or from the terminal using the **zypper** package manager — choose whichever method you prefer.

To install TuxGuitar using 1-Click Install, click the following button:

<p class='text-center'><a class='btn btn-sm btn-outline-primary' href='/downloads/tuxguitar.ymp'><i class='fas fa-bolt'></i> 1-Click Install</a></p>

To install TuxGuitar using the terminal, run the following command:

```
# zypper in tuxguitar
```

If you use [FlatPak], another option is to install TuxGuitar from [Flathub]:

```
# flatpak install ar.com.tuxguitar.TuxGuitar
```

Right after installing, you should be able to launch TuxGuitar.

## Starting TuxGuitar

To start TuxGuitar, if you use the [GNOME] desktop, click **Activities**, by the upper-left corner of the screen, start typing `tuxguitar` and then click its icon:

{% include image.html src='/files/2021/03/tuxguitar-01-en.jpg' %}

## The TuxGuitar interface

The TuxGuitar interface is very clean, simple and intuitive:

{% include image.html src='/files/2021/03/tuxguitar-02-en.jpg' %}

At the top, we have menus and toolbars, with icons for various actions, such as creating a new tab, opening, saving or printing a tab, undo, redo and playback controls at the end.

By the left, we have options for score editing.

By the right, we have the score and the tablature. In the **View** menu, you can select if you want to see only the score, only the tablature, or both (selecting both, which is the default):

{% include image.html src='/files/2021/03/tuxguitar-03-en.jpg' %}

At the bottom, we have the list of tracks, which are the instruments that make up the music (each instrument has its own score), and the graphical representation of the measures as squares. This representation allows you to quickly navigate through the song. Click on a square to move the cursor on the score to the corresponding instrument and measure.

{% include image.html src='/files/2021/03/tuxguitar-04-en.jpg' caption='Example: clicking on the fifth square makes the cursor go to the fifth measure on the score' %}

The demo song that comes with TuxGuitar has only one instrument. Let's get back to this part of the interface soon.

## Downloading, opening and playing a tab

You can download guitar tabs from guitar tab websites. I only know the Brazilian [Cifra Club][cifraclub] that makes Guitar Pro tabs available for download, but there are several websites like that. You can find them searching e.g. `guitar pro tabs for download` using your favorite search engine, like [Google] or [DuckDuckGo].

Here, I'm going to use as example the song [Sweet Child O' Mine][tab], by the band [Guns N' Roses][gnr].

When the download is complete, open the tab file. The system should open it with TuxGuitar:

{% include image.html src='/files/2021/03/tuxguitar-05-en.jpg' %}

Select **Guitar 1 (Slash)** on the track list at the bottom. Click the **Start** (_play_) button at the top and see the magic happening.

## Printing a tab

If you prefer to print the tab, open the **File** menu and click **Print**.

{% include image.html src='/files/2021/03/tuxguitar-06-en.jpg' %}

Select which instrument (track) should have its tab printed. You can also select a range of measures for printing (by the default, the whole song will be printed). You can choose to print only the score, only the tab, or both (selecting both, which is the default). You can also choose whether to show chord names and diagrams.

I recommend previewing the printout or printing the tab to a file before properly printing the tab onto a sheet of paper, to make sure you are printing exactly what you want.

To preview the printout, open the **File** menu and click **Print Preview**. The same options above are offered.

{% include image.html src='/files/2021/03/tuxguitar-07-en.jpg' %}

## Writing a tab

How to write a tab using TuxGuitar would be a subject for an entire tutorial. And I use TuxGuitar just to open tabs, I sincerely don't know how to write them. If you want to use TuxGuitar to write tabs, I recommend that you take a look at the [TuxGuitar documentation][doc].

Also, if you know a great writing how-to, please share it by commenting below.

[tuxguitar]:        http://tuxguitar.com.ar/
[foss]:             https://en.wikipedia.org/wiki/Free_and_open-source_software
[guitar-pro]:       https://www.guitar-pro.com/
[windows]:          https://www.microsoft.com/windows/
[macos]:            https://www.apple.com/macos/
[cross-platform]:   https://en.wikipedia.org/wiki/Cross-platform_software
[linux]:            https://www.kernel.org/linux.html
[freebsd]:          https://www.freebsd.org/
[kamarada-15.2]:    {% post_url en/2020-09-11-linux-kamarada-15.2-come-to-the-elegant-modern-green-side-of-the-force %}
[leap-tumbleweed]:  {% post_url en/2020-12-07-opensuse-leap-vs-opensuse-tumbleweed-what-is-the-difference %}
[repos]:            https://en.opensuse.org/Package_repositories#Official_Repositories
[flatpak]:          https://flatpak.org/
[flathub]:          https://flathub.org/apps/details/ar.com.tuxguitar.TuxGuitar
[gnome]:            https://www.gnome.org/
[cifraclub]:        https://www.cifraclub.com.br/
[google]:           https://www.google.com/search?q=guitar+pro+tabs+for+download
[duckduckgo]:       https://duckduckgo.com/?q=guitar+pro+tabs+for+download
[tab]:              https://freeguitarprotabs.com/tabs/kq3G/view-online/sweet-child-o-mine/by/guns-n-roses
[gnr]:              https://www.gunsnroses.com/
[doc]:              http://tuxguitar.com.ar/documentation.html
