---
date: 2019-09-13 21:00:00 GMT-3
image: '/files/2019/09/kamarada-15.1.jpg'
layout: post
published: true
nickname: 'kamarada-15.1-beta'
title: 'First beta release of the Kamarada Linux distribution'
---

{% include image.html src="/files/2019/09/kamarada-15.1.jpg" %}

The Linux Kamarada Project announces the first release of the homonym [Linux distribution][linux], which enters [beta] phase and is now available for [download].

The Linux Kamarada Project was born from my desire to show people "Linux as I see it": an operating system suitable for everyday use at home and at work. So I started writing and sharing my experience as a Linux user. But I always wanted to create a Linux distribution gathering the programs I use, recommend and believe are the best. Finally it's not just a wish anymore: today it becomes something concrete.

"If a friend of mine asked me to format his computer and install Linux, how would I set it up?" Thinking that way, I developed the Kamarada Linux distribution including the software and customizations that I myself use at home and at work. Actually, not all the programs I use were included (that would produce a programmer-focused Linux distribution), but the ones I use and believe would be interesting to a lot of people.

But Linux Kamarada has not been created from scratch. Instead, it is based on [openSUSE], which I've been using for 7 years. It is one of the most popular Linux distributions throughout the world, developed by the openSUSE Project community, with the sponsor of [SUSE] and other companies. The focus of its development is creating usable [open-source] tools for software developers and system administrators, while providing a user-friendly desktop and feature-rich server environment.

The Kamarada Linux distribution is intended for use on desktops at home and at work, in both private companies and government entities. It features the essential software selection for any Linux installation and a nice looking modern desktop.

It is not recommended to use Linux Kamarada on servers, although it is possible. openSUSE is better suited for that use case, because it offers a server configuration during installation, which is going to set up a server with just a small set of packages and a text mode interface.

## Why is it called Kamarada?

The name refers to the Portuguese word _[camarada]_, which means: buddy, pal, brother.

The Linux mascot is a penguin called [Tux]. The Kamarada mascot is a winking Tux:

{% include image.html src="/files/2019/09/tux-evolution.png" caption='Tux "evolution": original mascot by [Larry Ewing](https://isc.tamu.edu/~lewing/linux/) in 1996, a GIF bitmap image made in [GIMP](https://www.gimp.org/); then a stylized version, this time an [SVG](https://pt.wikipedia.org/wiki/SVG) vector image; and finally the Tux Kamarada.' %}

The letter C has been replaced with the letter K to refer to the [KDE] desktop, just as many KDE applications have their names beginning with the letter K, such as [Konsole] or [Kleopatra]. When I started using openSUSE, I was a KDE user. As time passed, I've got really upset with KDE because it seemed to reinvent the wheel from time to time but bugs were constant. So I moved to the [GNOME] desktop, which I consider more stable, and have been using it ever since. The Linux Kamarada Project already existed then and I decided to keep its name.

## Linux Kamarada features

{% include image.html src="/files/2019/09/kamarada-15.1-desktop-en.jpg" caption="Linux Kamarada desktop featuring a beautiful background image: a photo of the [Barra da Lagoa](https://goo.gl/maps/CLygYshBfm12i3TY8) beach in [Florianópolis, Brazil](https://en.wikipedia.org/wiki/Florianópolis)." %}

The Linux Kamarada 15.1 Beta release features: (although it is the first release, its number is large to meet the base, which is [openSUSE Leap 15.1][leap-15.1])

- [Linux kernel][kernel] 4.12.14
- [GNOME] 3.26 desktop including its [core apps][gnome-core-apps], such as [Files] (previously Nautilus), [Calculator], [Terminal], Text editor ([gedit]), Screenshot and others
- [Chromium] 74 web browser
- [Evolution] e-mail client
- [Pidgin] 2.13.0 instant messaging client
- [LibreOffice] 6.1.3
- [VLC] media player 3.0.6
- games: [Aisleriot] (Solitaire), [Mahjongg], [Mines] (Minesweeper), [Quadrapassel] (Tetris), [Sudoku] and [Chess]
- [YaST] control center
- [Transmission] 2.94 torrent client
- [Linphone] 4.1 VoIP softphone
- [Brasero] CD/DVD burner
- [GParted] 0.31.0 partition editor
- Java ([OpenJDK]) 11.0.3
- [PDFsam] 4.0.4
- [Wine] 3.7
- [Firewalld] 0.5.5

{% include image.html src="/files/2019/09/yast-en.jpg" caption="The YaST Control Center: handy for beginners, it is one of the things I like the most in openSUSE." %}

That list is not exhaustive, but it gives you a notion of what you will find in the distribution.

Note that Linux Kamarada is still in [beta] phase. Therefore, bugs are expected. If you find a bug, please report it. Continue reading to see how to get in touch.

## Constantly learning and improving

<!-- From now on it's mostly Google Translate! -->

It is not the goal of Linux Kamarada — at least not at the first moment — to deliver an innovative distribution, full of differentials among (many) others that already exist, or optimized for a specific audience, such as gamers or programmers.

Rather, the distribution presented here is the result of a **study** to bring potential new Linux users what the system has to offer of most useful. I only included in the distribution programs that I know and use. I even wrote about some of them here on the blog. Over time, as I discover new things, I can add new features or replace or remove programs as they become obsolete.

Linux Kamarada can be seen as a **proof of concept**: a proof that Linux is as simple and easy to use as any other system — such as [Windows], [macOS], [Android] or [iOS]. Many people think it is difficult to use Linux, perhaps because they are unfamiliar with it. But it's perfectly possible to use it in everyday life at home and at work.

In addition, Linux Kamarada is also an example of how Linux **branding** can be customized. Many visual elements of openSUSE have been replaced by those of Linux Kamarada. A company that wants to deploy Linux on their computers can use the same "recipe" as Linux Kamarada to create an openSUSE-based, custom-branded Linux distribution. Or use Linux Kamarada itself as a starting point, shorting the path and saving time. Distribution source codes are available (more on this below). I will soon write a series of posts about the branding process.

{% include image.html src="/files/2019/09/kamarada-15.1-branding-en.jpg" %}

## Future projects

Now that the desktop distribution has been released, I want to investigate how to install and use Linux on mobile devices and release a Linux Kamarada mobile edition. With that in mind, I have already included some apps in it such as [Calendar], [Contacts], [Photos], [Weather] and [Clocks] (I confess that I don't use those applications on my PC, only on my phone).

Another device I want to study is [Raspberry Pi][raspberry-pi], the low-cost, high-performance credit-card sized computer. It is intended to promote teaching of basic computer science in schools and can be integrated with various hardware components for experimenting with the Internet of Things. Its low cost — starting from $35 — aims to promote digital inclusion.

{% include image.html src="/files/2019/09/raspberry-pi-4.jpg" caption="Raspberry Pi: the low cost, credit-card sized computer" style="max-width: 370px" %}

openSUSE currently supports the [Raspberry Pi family][raspberry-pi-products] up to the [Raspberry Pi 3][raspberry-pi-3] model. The latest model, [Raspberry Pi 4][raspberry-pi-4], released in July this year, is not yet supported by openSUSE. I already [bought my Raspberry Pi 4][aliexpress] and I want to help the openSUSE Project to port the distribution to it. I'm waiting for it to arrive to start working on it.

## How is Linux Kamarada different from openSUSE?

<div class='media mb-3' style='display: table'>
    <img class='mr-3' src='/assets/img/powered-by-opensuse.png' alt='Baseda on openSUSE' style='display: table-cell; max-width: 64px; vertical-align: middle;'>
    <div class='media-body' style='display: table-cell; vertical-align: middle;'>
       Since Linux Kamarada is based on openSUSE, there are many similarities, but there are also some differences between both. Check it out:
    </div>
</div>

- Linux Kamarada brings Chromium as default web browser (it is similar to [Google Chrome][chrome], but it is [free software][free-software]), while openSUSE defaults to [Mozilla Firefox][firefox]. Currently, Chrome is the most used browser in the world and also in Brazil. That's why I made that choice. I particularly use both browsers, but I use Chrome more often.

- Linux Kamarada features VLC as its default multimedia player, while openSUSE's GNOME desktop defaults to the [Music] and [Videos] (Totem) apps.

- Linux Kamarada comes with Wine installed by default, making it easy to use on Linux applications developed for Windows (note that not all Windows applications are compatible or work flawlessly on Linux).

- the Linux Kamarada [ISO image][iso] (or the [LiveDVD/USB][live] created from it) features an installer which installs the contents of the media itself to the computer, while the openSUSE installer always downloads all packages from the Internet, even when a Live media is being used.

- for Brazilian users, Linux Kamarada has one more difference: the [Brazilian edition][brazil] of the ISO image comes with all translations installed, as well as language, keyboard layout and time zone already set up.

## Where can I get Linux Kamarada?

The [Download] page has been updated with the download link for the 15.1 Beta release.

Out of curiosity, there were Linux Kamarada releases based on openSUSE Leap 42.2 and 42.3 that were never officially released. To my surprise, they had 550 downloads since 2016. Their ISO images can be found at [SourceForge.net][sf.net].

## I already use openSUSE

You already use openSUSE and want to turn it into a Linux Kamarada? It's simple!

Just add the Linux Kamarada repository and install the **[patterns-kamarada-gnome]** package. There are two different methods for doing that: from the graphical interface, using 1-Click Install, or from the terminal, using the **zypper** package manager — choose whichever method you prefer.

To install Linux Kamarada using 1-Click Install, click the following button:

<p class='text-center'><a class='btn btn-sm btn-outline-primary' href='/downloads/patterns-kamarada-gnome.ymp'><i class='fas fa-bolt'></i> 1-Click Install</a></p>

To install Linux Kamarada using the terminal, first add its repository:

```
# zypper addrepo -f -K -n "Linux Kamarada" http://download.opensuse.org/repositories/home:/kamarada:/15.1/openSUSE_Leap_15.1/ kamarada
```

Then, install the **patterns-kamarada-gnome** package:

```
# zypper in patterns-kamarada-gnome
```

If you already use the GNOME desktop, Linux Kamarada default desktop, probably you will need to download just a few packages. If you use another desktop, the download size will be larger.

When the installation is finished, if you create a new user, you will notice that they will receive the Linux Kamarada default settings (such as theme, wallpaper, etc.). Existing users can continue to use their customizations or adjust the system appearance (for instance, using the **Tweaks** and **Settings** apps).

## Where can I get help?

Another update on the site is the [Help] page, which can be accessed from the top navigation bar. It suggests some places where you can get help with Linux Kamarada and openSUSE.

I created a [Google group][google-group] for Linux Kamarada. It can be used similar to a mailing list or directly from a web browser. That is going to be the main support channel for users.

## Where can I get the source code?

Like any open source project, Linux Kamarada makes its source code available to anyone who wants to study it, adapt it, or contribute to the project.

Linux Kamarada development takes place at [GitHub] and [Open Build Service][obs]. There you can get the source codes of the packages developed specifically for this project (even [the source code of this web site][kamarada-website] you read is available).

Source codes of packages inherited from openSUSE can be retrieved directly from that distribution. If you need help doing this, get in touch, I can help.

## Who I am

The Linux Kamarada Project is made up of a one-person team. Actually, I'm solely responsible for maintaining this project both as a blog and a Linux distribution, but in both cases I use and inherit a lot of free software made by the bigger openSUSE distribution and by many people around the world. The saying goes "No human being is an island".

<p class='text-center'>
    <img src='/files/2019/09/vinyanalista.jpg' alt='Antônio Vinícius' class='img-fluid img-thumbnail rounded-circle'>
</p>

My name is Antônio Vinícius (people call me by one name or the other). I was born in 1992 in [Aracaju], Brazil and received the name of [the saint of my day][anthony]. I am graduated as both computer technician and computer scientist. Currently I live in Florianópolis, Brazil and work as a systems analyst at [TJSC]. I have been using Linux for 12 years (since 2007). I am an enthusiastic user of Linux and free software in general. I'm a curious person always looking for new technologies and knowledge, which I share here on the Linux Kamarada blog and on my other [personal blog][vinyanalista] (in Portuguese only).

[linux]:                    https://www.kernel.org/linux.html
[beta]:                     https://en.wikipedia.org/wiki/Software_release_life_cycle#BETA
[download]:                 /en/download
[opensuse]:                 https://www.opensuse.org/
[suse]:                     https://www.suse.com/
[open-source]:              https://opensource.com/resources/what-open-source
[camarada]:                 https://dictionary.cambridge.org/us/dictionary/portuguese-english/camarada
[tux]:                      https://en.wikipedia.org/wiki/Tux_(mascot)
[kde]:                      https://kde.org/
[konsole]:                  https://konsole.kde.org/
[kleopatra]:                https://kde.org/applications/utilities/org.kde.kleopatra
[gnome]:                    https://gnome.org/
[leap-15.1]:                {% post_url en/2019-05-22-opensuse-community-releases-leap-15-1-version %}
[kernel]:                   https://kernel.org/
[gnome-core-apps]:          https://blogs.gnome.org/mcatanzaro/2017/08/13/gnome-3-26-core-applications/
[files]:                    https://wiki.gnome.org/Apps/Files
[calculator]:               https://wiki.gnome.org/Apps/Calculator
[terminal]:                 https://wiki.gnome.org/Apps/Terminal
[gedit]:                    https://wiki.gnome.org/Apps/Gedit
[chromium]:                 https://www.chromium.org/
[evolution]:                https://wiki.gnome.org/Apps/Evolution
[pidgin]:                   https://pidgin.im/
[libreoffice]:              https://www.libreoffice.org
[vlc]:                      https://www.videolan.org/vlc/
[aisleriot]:                https://wiki.gnome.org/Apps/Aisleriot
[mahjongg]:                 https://wiki.gnome.org/Apps/Mahjongg
[mines]:                    https://wiki.gnome.org/Apps/Mines
[quadrapassel]:             https://wiki.gnome.org/Apps/Quadrapassel
[sudoku]:                   https://wiki.gnome.org/Apps/Sudoku
[chess]:                    https://wiki.gnome.org/Apps/Chess
[yast]:                     http://yast.opensuse.org/
[transmission]:             http://www.transmissionbt.com/
[linphone]:                 https://www.linphone.org/
[brasero]:                  https://wiki.gnome.org/Apps/Brasero
[gparted]:                  https://gparted.sourceforge.io/
[openjdk]:                  https://openjdk.java.net/
[pdfsam]:                   https://pdfsam.org/
[wine]:                     https://www.winehq.org/
[firewalld]:                https://firewalld.org/
[windows]:                  https://www.microsoft.com/windows/
[macos]:                    https://www.apple.com/macos/
[android]:                  https://www.android.com/
[ios]:                      https://www.apple.com/ios/
[calendar]:                 https://wiki.gnome.org/Apps/Calendar
[contacts]:                 https://wiki.gnome.org/Apps/Contacts
[photos]:                   https://wiki.gnome.org/Apps/Photos
[weather]:                  https://wiki.gnome.org/Apps/Weather
[clocks]:                   https://wiki.gnome.org/Apps/Clocks
[raspberry-pi]:             https://www.raspberrypi.org/
[raspberry-pi-products]:    https://www.raspberrypi.org/products/
[raspberry-pi-3]:           https://en.opensuse.org/HCL:Raspberry_Pi3
[raspberry-pi-4]:           https://www.raspberrypi.org/products/raspberry-pi-4-model-b/
[aliexpress]:               http://s.click.aliexpress.com/e/KkS77oEk
[chrome]:                   https://www.google.com/chrome/
[free-software]:            https://www.gnu.org/philosophy/free-sw.html
[firefox]:                  https://mozilla.org/firefox
[music]:                    https://wiki.gnome.org/Apps/Music
[videos]:                   https://wiki.gnome.org/Apps/Videos
[iso]:                      https://en.wikipedia.org/wiki/ISO_image
[live]:                     {% post_url en/2015-11-25-what-is-a-livecd-dvd-usb %}
[brazil]:                   {% post_url pt/2019-09-13-primeira-versao-beta-da-distribuicao-linux-kamarada %}
[sf.net]:                   https://sourceforge.net/projects/kamarada/
[patterns-kamarada-gnome]:  https://software.opensuse.org/package/patterns-kamarada-gnome
[help]:                     /en/help
[google-group]:             https://groups.google.com/forum/#!forum/linuxkamarada-ww
[github]:                   https://github.com/kamarada
[obs]:                      https://build.opensuse.org/project/subprojects/home:kamarada
[kamarada-website]:         https://github.com/kamarada/kamarada-website
[aracaju]:                  https://en.wikipedia.org/wiki/Aracaju
[anthony]:                  https://en.wikipedia.org/wiki/Anthony_of_Padua
[tjsc]:                     https://www.tjsc.jus.br/
[vinyanalista]:             https://vinyanalista.github.io/
