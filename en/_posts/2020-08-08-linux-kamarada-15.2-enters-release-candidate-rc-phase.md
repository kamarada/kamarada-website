---
date: 2020-08-08 20:20:00 GMT-3
image: '/files/2020/04/kamarada-15.2.jpg'
layout: post
published: true
nickname: 'kamarada-15.2-rc'
title: 'Linux Kamarada 15.2 enters Release Candidate (RC) phase'
---

{% include image.html src='/files/2020/04/kamarada-15.2.jpg' %}

Development is almost finished: I'm happy to unveil the Release Candidate (RC) for Linux Kamarada 15.2! Based on [openSUSE Leap 15.2][leap-15.2], it is now available for [download].

Right now, the [Download] page offers two releases to download:

- [15.1 Final][kamarada-15.1], which you can install on your home or work computer; and
- 15.2 RC, which you can test if you want to help in development.

The easiest way to test [Linux] is using a [VirtualBox] virtual machine. Read about it here:

- [VirtualBox: the easiest way to try Linux without installing it][virtualbox]

Or, if you want to test Linux Kamarada on your own machine, the easiest way to do this is using a USB stick that you can make bootable with [Ventoy]:

- [Ventoy: create a multiboot USB drive by simply copying ISO images to it][ventoy]

## What is a release candidate?

A [**release candidate**][rc] (**RC**) is a software version that is almost ready to be released to the market as a stable product. This release may become the final release, unless significant bugs are detected. At this stage of development, all features planned at the beginning are already present and no new features are added.

A release candidate is also a kind of [beta] version. Therefore, bugs are expected. If you find a bug, please report it. Take a look at the [Help] page to see how to get in touch.

Of course, bugs can be found and fixed anytime, but the sooner the better!

## What's new?

In addition to what was new on [15.2 Beta][kamarada-15.2-beta], released in April, on the new 15.2 RC you will find:

- [Mozilla Firefox][firefox] is now the default web browser, Linux Kamarada comes with the [Extended Support Release (ESR)][esr] distributed by openSUSE Leap ([Chromium], the previous default browser, has been kept as alternative, at least for now)
- [Remmina] is now the default [remote desktop client][rdp-client] ([Vinagre] has been removed because it is unmaintained for some time now)
- new [privacy] tools: [KeePassXC] password manager and native support for [Tor]
- updated software and bugs fixed
- new logo and new visual identity (branding)

<div class="row">
    <div class="col-md">
        {% include image.html src='/files/2020/08/keepassxc-en.png' caption='KeePassXC password manager' %}
    </div>
    <div class="col-md">
        {% include image.html src='/files/2020/08/tor-en.jpg' caption='Tor anonymity network' %}
    </div>
</div>

## Specs

To allow comparing Linux Kamarada releases, here is a summary of the software contained on Linux Kamarada 15.2 RC 1 Build 42.1:

- Linux kernel 5.3.18
- X.Org display server 1.20.3 (without Wayland)
- GNOME 3.34.4 desktop including its core apps, such as Files (previously Nautilus), Calculator, Terminal, Text editor (gedit), Screenshot and others
- LibreOffice office suite 6.4.4
- Mozilla Firefox ESR 78.1.0 (default web browser)
- Chromium 84 (alternative web browser)
- VLC media player 3.0.10
- Evolution email client
- YaST control center
- Brasero
- CUPS 2.2.7
- Firewalld 0.5.5
- GParted 0.31.0
- HPLIP 3.19.12
- Java (OpenJDK) 11.0.7
- KeePassXC 2.6.0
- KolourPaint 20.04.2
- Linphone 4.1.1
- PDFsam Basic 4.1.4
- Pidgin 2.13.0
- Samba 4.11.5
- Tor 0.4.2
- Transmission 2.94
- Vim 8.0
- Wine 5.0
- games: Aisleriot (Solitaire), Chess, Hearts, Iagno (Reversi), Mahjongg, Mines (Minesweeper), Nibbles (Snake), Quadrapassel (Tetris), Sudoku

That list is not exhaustive, but it gives a notion of what can be found in the distribution.

## About Linux Kamarada

The Linux Kamarada Project aims to spread and promote Linux as a robust, secure, versatile and easy to use operating system, suitable for everyday use be at home, at work or on the server. It started as a blog about [openSUSE], which is the Linux distribution I've been using for 8 years (since April 2012, when I installed openSUSE 11.4 and then upgraded to 12.1). Now the project offers its own Linux distribution, which brings much of the software presented on the blog pre-installed and ready for use.

The Kamarada Linux distribution is based on openSUSE Leap and is intended for use on desktops at home and at work, in both private companies and government entities. It features the essential software selection for any Linux installation and a nice looking modern desktop.

It is not recommended to use Linux Kamarada on servers, although it is possible. openSUSE is better suited for that use case, because it offers a server configuration during installation, which is going to set up a server with just a small set of packages and a text mode interface.

If you didn't know the Kamarada Linux distribution yet, take a look at the [Linux Kamarada 15.1 release announcement][kamarada-15.1] (the first release) for more information.

Follow Linux Kamarada on [social networks](#about) to be notified of new releases.


[download]:             /en/download
[leap-15.2]:            {% post_url en/2020-07-02-opensuse-leap-15-2-release-brings-exciting-new-artificial-intelligence-ai-machine-learning-and-container-packages %}
[kamarada-15.1]:        {% post_url en/2020-02-27-kamarada-15.1-comes-with-everything-you-need-to-use-Linux-everyday %}
[linux]:                https://www.kernel.org/linux.html
[virtualbox]:           {% post_url en/2019-10-10-virtualbox-the-easiest-way-to-try-linux-without-installing-it %}
[ventoy]:               {% post_url en/2020-07-29-ventoy-create-a-multiboot-usb-drive-by-simply-copying-iso-images-to-it %}
[rc]:                   https://en.wikipedia.org/wiki/Software_release_life_cycle#Release_candidate
[beta]:                 https://en.wikipedia.org/wiki/Software_release_life_cycle#BETA
[help]:                 /en/help
[kamarada-15.2-beta]:   {% post_url en/2020-04-14-linux-kamarada-15.2-beta-makes-your-desktop-greener-than-ever %}
[firefox]:              https://www.mozilla.org/firefox/new/
[esr]:                  https://www.mozilla.org/firefox/enterprise/
[chromium]:             https://www.chromium.org/
[remmina]:              {% post_url en/2020-04-20-remote-desktop-connection-to-windows-from-linux-using-rdp-clients %}#remmina
[rdp-client]:           {% post_url en/2020-04-20-remote-desktop-connection-to-windows-from-linux-using-rdp-clients %}
[vinagre]:              {% post_url en/2020-04-20-remote-desktop-connection-to-windows-from-linux-using-rdp-clients %}#vinagre
[privacy]:              https://www.privacytools.io/
[keepassxc]:            https://keepassxc.org/
[tor]:                  https://www.torproject.org/
[opensuse]:             https://www.opensuse.org/
