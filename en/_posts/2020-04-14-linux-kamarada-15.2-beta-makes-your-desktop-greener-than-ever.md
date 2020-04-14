---
date: '2020-04-14 23:15:00'
layout: post
title: 'Linux Kamarada 15.2 Beta makes your desktop greener than ever'
image: '/files/2020/04/kamarada-15.2.jpg'
nickname: 'kamarada-15.2-beta'
---

{% include image.html src='/files/2020/04/kamarada-15.2.jpg' %}

As the upstream, the [openSUSE Leap][opensuse-leap] distribution, announced that the next version [15.2 entered the beta phase][leap-15.2-beta], the Kamarada Linux distribution announces that its 15.2 beta version is already available for download with the release of build 22.1.

<!--more-->

The [Download] page has been updated to offer both releases for download:

- 15.1 Final, which you can install on your home or work computer; and
- 15.2 Beta, which you can test if you want to help in development.

I want to emphasize that the version 15.2 is still in beta phase. Therefore, bugs are expected and this version is not ready for daily use. If you find a bug , please report it. Take a look at the [Help] page to see how to get in touch.

Of course, bugs can be found and fixed anytime, but the sooner the better!

The easiest way to test Linux is using [VirtualBox]. For more information, please read:

- [VirtualBox: the easiest way to try Linux without installing it][virtualbox-howto]

If you want to install Linux Kamarada on your computer for daily use, it is recommended that you install the 15.1 Final version, which is already ready, and then, when the 15.2 version is ready, update. For more information on Linux Kamarada 15.1 Final, see:

- [Kamarada 15.1 comes with everything you need to use Linux everyday][kamarada-15.1]

## What's new?

For now, Linux Kamarada 15.2 comes down to:

- same (but updated) applications as in 15.1, with new features and bug fixes;
- new wallpapers (but you can keep using the previous ones or the openSUSE defaults, if you prefer); and
- a new theme, that also follows [Material Design][material] (the design that empowers [Android]), but newer, more consistent and featuring the [openSUSE colors][opensuse-colors] (mainly green).

{% include image.html src='/files/2020/04/kamarada-15.2-desktop-en.jpg' caption='GNOME desktop' %}

<div class="row">
    <div class="col-md">
        {% include image.html src='/files/2020/04/kamarada-15.2-apps-en.jpg' caption='GNOME core apps' %}
    </div>
    <div class="col-md">
        {% include image.html src='/files/2020/04/kamarada-15.2-lock-en.jpg' caption='Lock screen' %}
    </div>
</div>

## Specs

To allow comparison among Linux Kamarada versions, here is a summary of the software contained in 15.2 Beta Build 22.1:

- Linux kernel 5.3.18
- X.Org display server 1.20.3 (without Wayland)
- GNOME 3.34.4 desktop including its core apps, such as Files (previously Nautilus), Calculator, Terminal, Text editor (gedit), Screenshot and others
- LibreOffice office suite 6.4.2
- Chromium 80 web browser
- VLC media player 3.0.7
- Evolution email client
- YaST control center
- Brasero
- CUPS 2.2.7
- Firewalld 0.5.5
- GParted 0.31.0
- HPLIP 3.18.6
- Java (OpenJDK) 11.0.6
- KolourPaint 19.12.3
- Linphone 4.1.1
- PDFsam Basic 4.1.2
- Pidgin 2.13.0
- Samba 4.11.5
- Transmission 2.94
- Vim 8.0
- Wine 3.7
- games: Aisleriot (Solitaire), Chess, Hearts, Iagno (Reversi), Mahjongg, Mines (Minesweeper), Nibbles (Snake), Quadrapassel (Tetris), Sudoku

That list is not exhaustive, but it gives a notion of what can be found in the distribution.

[opensuse-leap]:    https://www.opensuse.org/
[leap-15.2-beta]:   https://news.opensuse.org/2020/02/25/leap-15-2-enters-beta-builds-phase/
[download]:         /en/download
[beta]:             https://en.wikipedia.org/wiki/Software_release_life_cycle#Beta
[help]:             /en/help
[virtualbox]:       https://www.virtualbox.org/
[virtualbox-howto]: {% post_url en/2019-10-10-virtualbox-the-easiest-way-to-try-linux-without-installing-it %}
[kamarada-15.1]:    {% post_url en/2020-02-27-kamarada-15.1-comes-with-everything-you-need-to-use-Linux-everyday %}
[material]:         https://material.io/
[android]:          https://www.android.com/
[opensuse-colors]:  https://en.opensuse.org/Help:Colors
