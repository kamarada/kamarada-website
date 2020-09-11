---
date: 2020-09-11 02:00:00 GMT-3
image: '/files/2020/09/kamarada-15.2.jpg'
layout: post
published: true
nickname: 'kamarada-15.2-final'
title: 'Linux Kamarada 15.2: come to the elegant modern green side of the force!'
---

{% include image.html src='/files/2020/09/kamarada-15.2.jpg' %}

I am proud to announce that **Linux Kamarada 15.2** is ready for everyone to use! Linux Kamarada 15.2 is a [Linux] distribution based on a bigger distribution that is [openSUSE Leap 15.2][leap-15.2]. While openSUSE Leap is a general purpose Linux distro, offering a stable operating system for both personal computers and servers, as well as tools for developers and system administrators, Linux Kamarada is focused on personal computers and novice users.

Newcomers can find the new release on the [Download] page.

[Linux Kamarada 15.1][kamarada-15.1] users can upgrade to the new release following this tutorial:

- [Linux Kamarada and openSUSE Leap: how to upgrade from 15.1 to 15.2][upgrade-to-15.2]

Let's see what's changed on Linux Kamarada from the previous release (15.1) to the new release (15.2).

[linux]:            https://www.kernel.org/linux.html
[leap-15.2]:        {% post_url en/2020-07-02-opensuse-leap-15-2-release-brings-exciting-new-artificial-intelligence-ai-machine-learning-and-container-packages %}
[download]:         /en/download
[kamarada-15.1]:    {% post_url en/2020-02-27-kamarada-15.1-comes-with-everything-you-need-to-use-Linux-everyday %}
[upgrade-to-15.2]:  {% post_url en/2020-09-01-linux-kamarada-and-opensuse-leap-how-to-upgrade-from-151-to-152 %}

<div class="media mb-3">
    <img src="/files/2020/09/kamarada-15.2-logo.svg" class="mr-3" style="max-width: 60px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">New branding, theme, backgrounds</h2>
    </div>
</div>

I wanted to give Linux Kamarada a more modern and professional look, but without losing its nice, charismatic and friendly face. With that in mind, I made some changes to the branding and theme:

- the mascot had its original gloss version replaced by a new flat version, based on the [original Linux icon by Icons8][icons8]
- the theme, in general, remains aligned with [Material Design][material] by [Google] (the design that empowers [Android])
- Material Design colors near to [openSUSE colors][opensuse-colors] were adopted
- the [GTK] theme used on 15.1, [Adapta], has been discontinued and no longer receives maintenance, so it has been replaced by a version of the [Materia] theme customized with the adopted colors
- the [Papirus] icon theme has been updated and its colors have been customized too

[icons8]:           https://icons8.com/icon/17842/linux
[material]:         https://material.io/
[google]:           https://www.google.com/
[android]:          https://www.android.com/
[opensuse-colors]:  https://en.opensuse.org/Help:Colors
[gtk]:              https://www.gtk.org/
[adapta]:           https://github.com/adapta-project/adapta-gtk-theme
[materia]:          https://github.com/nana-4/materia-theme
[papirus]:          https://github.com/PapirusDevelopmentTeam/papirus-icon-theme

{% include image.html src="/files/2020/09/kamarada-15.2-tux-before-after.png" caption="Tux Kamarada: before and after" %}

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2020/08/upgrade-to-15.2-24.png" caption="GRUB menu" %}
    </div>
    <div class="col-md">
        {% include image.html src='/files/2020/09/kamarada-15.2-plymouth.jpg' caption='Plymouth' %}
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src='/files/2020/04/kamarada-15.2-lock-en.jpg' caption='Lock screen' %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2020/09/kamarada-15.2-gdm-en.jpg" caption="Login screen" %}
    </div>
</div>

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2020/09/kamarada-15.2-desktop-en.jpg" caption="Desktop" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2020/09/kamarada-15.2-theme-en.jpg" caption="Materia theme with custom colors" %}
    </div>
</div>

<div class="media mb-3">
    <img src="/files/2020/02/desktop-environment-gnome.svg" class="mr-3" style="max-width: 60px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Improvements to GNOME</h2>
    </div>
</div>

The [GNOME] desktop has jumped from version 3.26 on Linux Kamarada 15.1 to version 3.34 on Linux Kamarada 15.2. In addition to the noticeable performance gain, there were several changes and improvements. Next, I mention some that caught my attention.

Core GNOME applications have moved the contents of the application menu, in the top bar, to a primary menu located within the application window:

{% include image.html src="/files/2020/09/kamarada-15.2-gnome-app-menu-en.png" caption="Application menu: before and after" %}

In **Files**, it's now possible to favorite files and folders:

{% include image.html src="/files/2020/09/kamarada-15.2-gnome-files-favorites-01-en.jpg" %}

Once they've been starred, they can be easily viewed in a special location that can be opened from the sidebar:

{% include image.html src="/files/2020/09/kamarada-15.2-gnome-files-favorites-02-en.jpg" %}

The **Contacts** app allows you to favorite contacts too, which appear at the top of the list once starred. Great for easily locating people you contact frequently.

In **Files**, the location bar now expands a menu with some useful options when you click the current folder:

{% include image.html src="/files/2020/09/kamarada-15.2-gnome-files-menu-en.jpg" %}

The search bar has been streamlined with the location bar to compact the interface:

{% include image.html src="/files/2020/09/kamarada-15.2-gnome-files-search-en.png" caption="Search bar: before and after" %}

Another app whose interface is now cleaner and more organized is the **Terminal**. Several menus have been merged into just one main menu and the menu bar has been removed:

{% include image.html src="/files/2020/09/kamarada-15.2-gnome-terminal-en.png" caption="Terminal: before and after" %}

The **Settings** app **Background** panel has been redesigned too:

{% include image.html src="/files/2020/09/kamarada-15.2-gnome-background-en.jpg" %}

If you want to know more things that changed between GNOME 3.26 and 3.34, I recommend reading the release notes for each version on the way:

- [GNOME 3.28 Release Notes][gnome-3.28]
- [GNOME 3.30 Release Notes][gnome-3.30]
- [GNOME 3.32 Release Notes][gnome-3.32]
- [GNOME 3.34 Release Notes][gnome-3.34]

[gnome]:        https://br.gnome.org/
[gnome-3.28]:   https://help.gnome.org/misc/release-notes/3.28/
[gnome-3.30]:   https://help.gnome.org/misc/release-notes/3.30/
[gnome-3.32]:   https://help.gnome.org/misc/release-notes/3.32/
[gnome-3.34]:   https://help.gnome.org/misc/release-notes/3.34/

<div class="media mb-3">
    <img src="/files/2020/02/libreoffice-main.svg" class="mr-3" style="max-width: 60px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Performance-focused LibreOffice</h2>
    </div>
</div>

[LibreOffice] 6.4 brought better compatibility with [Microsoft Office][ms-office] files, in addition to several fixes, new features and performance improvements.

A new feature that caught my attention was the [QR code][qr-code] generator that has been added to the suite, which can be useful for those who need to add QR codes in posters, magazines and flyers, for example. To insert a QR code into any LibreOffice document, in any LibreOffice application, open the **Insert** menu, expand **Object** and click **QR Code**:

{% include image.html src='/files/2020/09/kamarada-15.2-libreoffice-en.jpg' %}

If you want to know more about what's new in LibreOffice 6.4, compared to LibreOffice 6.3 that came with Linux Kamarada 15.1, read the release announcement:

- [Performance-focused LibreOffice 6.4 is available for download - The Document Foundation Blog][libreoffice-6.4]

[libreoffice]:      https://pt-br.libreoffice.org/
[ms-office]:        https://www.office.com/
[qr-code]:          https://en.wikipedia.org/wiki/QR_code
[libreoffice-6.4]:  https://blog.documentfoundation.org/blog/2020/01/29/libreoffice-6-4/

<div class="media mb-3">
    <img src="/files/2020/02/preferences-desktop-remote-desktop.svg" class="mr-3" style="max-width: 60px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Remote access and VPN updated</h2>
    </div>
</div>

As everyone knows, demand for remote access has been increasing and it has been the subject of some how-tos here on the blog.

The default [remote desktop client][rdp-client] on Linux Kamarada 15.1, [Vinagre], which is also GNOME's default, is unmaintained for some time now. Linux Kamarada 15.2 replaces it by [Remmina], which is also [Ubuntu]'s default remote desktop client.

Linux Kamarada 15.2 comes with [OpenConnect] 8.05 out of the box. This version introduces support for the [GlobalProtect] VPN. In this regard, Linux Kamarada 15.2 presents a little improvement over openSUSE Leap 15.2, which still brings OpenConnect 7.08 (and therefore without support for GlobalProtect), although it is not difficult for openSUSE Leap users to install OpenConnect 8.05.

Note that you can connect to some types of VPN using the GUI app **Settings**, but not GlobalProtect. Connecting to a GlobalProtect VPN must be done using a terminal window. If you need help with this, take a look at the following post:

- [How to connect to a GlobalProtect VPN][globalprotect]

[rdp-client]:       {% post_url en/2020-04-20-remote-desktop-connection-to-windows-from-linux-using-rdp-clients %}
[vinagre]:          {% post_url en/2020-04-20-remote-desktop-connection-to-windows-from-linux-using-rdp-clients %}#vinagre
[remmina]:          {% post_url en/2020-04-20-remote-desktop-connection-to-windows-from-linux-using-rdp-clients %}#remmina
[ubuntu]:           https://ubuntu.com/
[openconnect]:      https://www.infradead.org/openconnect/
[globalprotect]:    {% post_url en/2020-03-19-how-to-connect-to-a-globalprotect-vpn %}

<div class="row">
    <div class="col-md">
        {% include image.html src='/files/2020/09/kamarada-15.2-remmina-en.jpg' caption='Remmina remote desktop client' %}
    </div>
    <div class="col-md">
        {% include image.html src='/files/2020/09/kamarada-15.2-globalprotect-en.jpg' caption='OpenConnect 8.05' %}
    </div>
</div>

<div class="media mb-3">
    <img src="/files/2020/09/privacy.png" class="mr-3" style="max-width: 60px;">
    <div class="media-body align-self-center">
        <h2 class="mt-0 mb-0">Privacy</h2>
    </div>
</div>

What perhaps not everyone has noticed is that recently [mass surveillance][surveillance] has been increasing too. If you haven't, I recommend that you see this interview:

- [Edward Snowden warns that governments may use coronavirus to limit freedoms \| Fox News][snowden]

We are being watched all the time by companies and governments.

Probably you have already heard the motto "[if you've got nothing to hide, you've got nothing to fear][nothing-to-hide]". It is commonly used to defend surveillance. You may agree that if you haven't done anything wrong, you don't need to hide. But think about it from another angle: if I haven't done anything wrong, why do they need to watch me?

[Privacy] is a right. There is nothing wrong with not wanting to share certain parts of your life, to keep them for yourself, just as there is nothing wrong with having curtains or blinds at home. This is important for your peace of mind. Your data is yours and you should be able to choose what you want to share and with whom.

I have been reading about privacy tools on websites (which I recommend) such as [Privacy Tools][privacy] and [Security in a Box][securityinabox] and I want to talk about them in future posts here on the blog. But I anticipated adding some of them to the new Linux Kamarada 15.2:

- [Mozilla Firefox][firefox] is now the default web browser, Linux Kamarada comes with the [Extended Support Release (ESR)][esr] distributed by openSUSE Leap ([Chromium], the previous default browser, has been kept as alternative, at least for now)
- the [KeePassXC] password manager allows you to store your passwords inside a secure database file regardless of the browser you use, if you want you can save that file on a cloud service (such as [Dropbox]) or manually make offline copies among your devices, whatever you think is best, you are in control
- native support for [Tor], which allows you to surf the web anonymously, encrypted, safely and free from censorship

{% include image.html src="/files/2020/09/kamarada-15.2-firefox-en.jpg" caption="Mozilla Firefox web browser" %}

<div class="row">
    <div class="col-md">
        {% include image.html src='/files/2020/08/keepassxc-en.png' caption='KeePassXC password manager' %}
    </div>
    <div class="col-md">
        {% include image.html src='/files/2020/08/tor-en.jpg' caption='Tor anonymity network' %}
    </div>
</div>

Note that although the Tor network client comes out of the box installed and available for use on Linux Kamarada, it is not enabled by default: if you want to use it, you need to start it and configure applications to traffic data through it. If you need a system that starts connecting to the Tor network by default, you may want to take a look at [Tails] or [Whonix].

[surveillance]:     https://en.wikipedia.org/wiki/Mass_surveillance
[snowden]:          https://www.foxnews.com/health/edward-snowden-warns-governments-may-use-coronavirus-remove-freedoms
[nothing-to-hide]:  https://en.wikipedia.org/wiki/Nothing_to_hide_argument
[privacy]:          https://www.privacytools.io/
[securityinabox]:   https://securityinabox.org/
[firefox]:          https://www.mozilla.org/firefox/new/
[esr]:              https://www.mozilla.org/firefox/enterprise/
[chromium]:         https://www.chromium.org/
[keepassxc]:        https://keepassxc.org/
[dropbox]:          {% post_url en/2019-07-20-20-apps-you-can-use-the-same-way-on-both-linux-and-windows-part-1 %}#4-dropbox
[tor]:              https://www.torproject.org/
[tails]:            https://tails.boum.org/
[whonix]:           https://www.whonix.org/

## Where can I get Linux Kamarada?

The [Download] page has been updated with the download link for the 15.2 Final release.

**Warning:** it is not recommended to use Linux Kamarada on servers, although it is possible. openSUSE Leap is better suited for that use case, because it offers a server configuration during installation, which is going to set up a server with just a small set of packages and a text mode interface (without a desktop).

## What should I do next?

When the download is complete, verify the integrity of the ISO image by calculating its checksum. Compare it with the checksum that appears on the [Download] page. They must match. If they don't, download the ISO image again.

If you are not in a hurry, it is recommended to also verify the authenticity of the ISO image.

The fingerprint of the Linux Kamarada Project public key is:

```
6b18 52e7 764f b302 b805 a4a0 a575 bcce 1737 8ecc
```

To import that key, run the following commands:

```
$ wget https://build.opensuse.org/projects/home:kamarada:15.2/public_key
$ gpg --import public_key
```

For more information on those verifications, read:

- [Verifying data integrity and authenticity using SHA-256 and GPG][how-to-verify-iso]

Once the ISO image has been downloaded and those verifications have succeeded, you have 3 options:

<ul class="list-unstyled">
    <li class="media mb-3">
        <img src="/files/2020/02/disk-burner.svg" class="mr-3" style="max-width: 48px;">
        <div class="media-body">
            <h6 class="mt-0">1) Burn the ISO image to a DVD (thus generating a LiveDVD)</h6>

            Use an application such as <a href="https://cdburnerxp.se/">CDBurnerXP</a> (on Windows), <a href="http://www.k3b.org/">K3b</a> (on a Linux system with KDE desktop) or <a href="https://wiki.gnome.org/Apps/Brasero">Brasero</a> (Linux with GNOME) to burn the ISO image to a DVD. Insert it on your computer DVD drive and reboot to start Linux Kamarada.
        </div>
    </li>

    <li class="media mb-3">
        <img src="/files/2020/02/usb-creator.svg" class="mr-3" style="max-width: 48px;">
        <div class="media-body">
            <h6 class="mt-0">2) Write the ISO image to a USB flash drive (thus generating a LiveUSB)</h6>

            <p>Use <a href="https://www.ventoy.net/">Ventoy</a> (available for Windows and Linux) to prepare the flash drive and copy the ISO image to it. Plug it to a USB port and reboot your computer to start Linux Kamarada.</p>

            <p>This how-to can help you to prepare the LiveUSB:</p>

            <ul><li><a href="{% post_url en/2020-07-29-ventoy-create-a-multiboot-usb-drive-by-simply-copying-iso-images-to-it %}">Ventoy: create a multiboot USB drive by simply copying ISO images to it</a></li></ul>
        </div>
    </li>

    <li class="media mb-3">
        <img src="/files/2020/02/virtualbox.svg" class="mr-3" style="max-width: 48px;">
        <div class="media-body">
            <h6 class="mt-0">3) Create a virtual machine and use the ISO image to boot it</h6>

            <p>This option allows you to test Linux Kamarada without having to reboot your computer and leave the operating system you are familiar with.</p>

            <p>For more information, read:</p>

            <ul><li><a href="{% post_url en/2019-10-10-virtualbox-the-easiest-way-to-try-linux-without-installing-it %}">VirtualBox: the easiest way to try Linux without installing it</a></li></ul>
        </div>
    </li>

    <li class="media mb-3">
        <div class="media-body">
            After testing Linux Kamarada, if you want to install it on your computer or virtual machine, start the installer by clicking this icon, located on the dock (on the left side of the screen).
        </div>
        <img src="/files/2020/02/calamares.svg" class="ml-3" style="max-width: 48px;">
    </li>
</ul>

The installer will only partition the disk and copy system files to the computer. At the end, reboot your computer. Then, a [YaST] wizard will guide you through some basic configuration.

[how-to-verify-iso]:    {% post_url en/2018-11-08-verifying-data-integrity-and-authenticity-using-sha-256-and-gpg %}
[yast]:                 http://yast.opensuse.org/

<div class="row">
    <div class="col-md">
        {% include image.html src="/files/2020/09/kamarada-15.2-calamares-en.jpg" caption="Installer" %}
    </div>
    <div class="col-md">
        {% include image.html src="/files/2020/09/kamarada-15.2-yast-firstboot-en.jpg" caption="First-boot setup wizard" %}
    </div>
</div>

## What if I already use Linux Kamarada?

The ISO image is not intended for upgrading, only for testing and installing. If you already use Linux Kamarada 15.1 and want to upgrade your existing installation to 15.2, take a look at:

- [Linux Kamarada and openSUSE Leap: how to upgrade from 15.1 to 15.2][upgrade-to-15.2]

## What if I already use openSUSE Leap?

You already use openSUSE Leap and want to turn it into Linux Kamarada? It's simple!

Just add the Linux Kamarada repository and install the **[patterns-kamarada-gnome]** package.

There are two different methods for doing that: from the graphical interface, using 1-Click Install, or from the terminal, using the **zypper** package manager — choose whichever method you prefer.

To install Linux Kamarada using 1-Click Install, click the following button:

<p class='text-center'><a class='btn btn-sm btn-outline-primary' href='/downloads/patterns-kamarada-gnome-en.ymp'><i class='fas fa-bolt'></i> 1-Click Install</a></p>

To install Linux Kamarada using the terminal, first add its repository:

```
# zypper addrepo -f -K -n "Linux Kamarada" -p 95 "https://osdn.mirror.constant.com/storage/g/k/ka/kamarada/\$releasever/openSUSE_Leap_\$releasever/" kamarada
```

The Linux Kamarada repository is gently hosted by [OSDN], which replicates the repository contents on some mirror servers around the world. I picked a mirror at random to write the above command and 1-Click Install. You may want to take a look at the list of [Linux Kamarada mirrors][mirrors] and choose a mirror closer to you.

Then, install the **patterns-kamarada-gnome** package:

```
# zypper in patterns-kamarada-gnome
```

If you already use the GNOME desktop, probably you will need to download just a few packages. If you use another desktop, the download size will be larger.

When the installation is finished, if you create a new user, you will notice that they will receive the Linux Kamarada default settings (such as theme, wallpaper, etc.). Existing users can continue to use their customizations or adjust the system appearance (for instance, using the **Tweaks** and **Settings** apps).

[patterns-kamarada-gnome]:  https://software.opensuse.org/package/patterns-kamarada-gnome
[osdn]:                     https://osdn.net/projects/kamarada/
[mirrors]:                  https://github.com/kamarada/Linux-Kamarada-GNOME/wiki/Mirrors

## Where can I get help?

The [Help] page suggests some places where you can get help with Linux Kamarada and openSUSE.

The support channel preferred by users has been the [@LinuxKamaradaWW](https://t.me/LinuxKamaradaWW) group on [Telegram], which is a messaging service that you can access from an app or a web browser.

[help]:         /en/help
[telegram]:     {% post_url en/2019-08-12-20-apps-you-can-use-the-same-way-on-both-linux-and-windows-part-2 %}#12-telegram

## Where can I get the source code?

Like any free software project, Linux Kamarada makes its source code available to anyone who wants to study it, adapt it, or contribute to the project.

Linux Kamarada development takes place at [GitHub] and [Open Build Service][obs]. There you can get the source codes of the packages developed specifically for this project (even [the source code of this web site][kamarada-website] you read is available).

Source codes of packages inherited from openSUSE Leap can be retrieved directly from that distribution. If you need help doing this, get in touch, I can help.

[github]:           https://github.com/kamarada
[obs]:              https://build.opensuse.org/project/subprojects/home:kamarada
[kamarada-website]: https://github.com/kamarada/kamarada-website

## About Linux Kamarada

The Linux Kamarada Project aims to spread and promote Linux as a robust, secure, versatile and easy to use operating system, suitable for everyday use be at home, at work or on the server. It started as a blog about [openSUSE], which is the Linux distribution I've been using for 8 years (since [April 2012][vinyanalista], when I installed openSUSE 11.4 and then upgraded to 12.1). Now the project offers its own Linux distribution, which brings much of the software presented on the blog pre-installed and ready for use.

The Kamarada Linux distribution is based on openSUSE Leap and is intended for use on desktops at home and at work, in both private companies and government entities. It features the essential software selection for any Linux installation and a nice looking modern desktop.

[opensuse]:         https://www.opensuse.org/
[vinyanalista]:     https://vinyanalista.github.io/blog/2012/04/21/problemas-envolvendo-bootloaders-mbr-e-tabela-de-particoes/

## Specs

To allow comparing Linux Kamarada releases, here is a summary of the software contained on Linux Kamarada 15.2 Final 1 Build 52.3:

- Linux kernel 5.3.18
- X.Org display server 1.20.3 (without Wayland)
- GNOME 3.34.4 desktop including its core apps, such as Files (previously Nautilus), Calculator, Terminal, Text editor (gedit), Screenshot and others
- LibreOffice office suite 6.4.4
- Mozilla Firefox ESR 68.9.0 (default web browser)
- Chromium 83 (alternative web browser)
- VLC media player 3.0.10
- Evolution email client
- YaST control center
- Brasero
- CUPS 2.2.7
- Firewalld 0.5.5
- GParted 0.31.0
- HPLIP 3.19.12
- Java (OpenJDK) 11.0.7
- KeePassXC 2.5.4
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

**Note:** if you compare this list with that for version [15.2 RC][kamarada-15.2-rc], you will notice that Mozilla Firefox and other programs have been downgraded. It was intentional. That happened because I disabled the update repo for creating the Linux Kamarada 15.2 Final image. The purpose of doing this was to prevent the image from having openSUSE Leap [boo#1173991][boo-1173991] and [boo#1176304][boo-1176304] bugs introduced by updates. When these bugs are fixed, I'm going to upload another updated image. But you don't need to worry about that: you can install Linux Kamarada and [get updates for the system][howto-update] as usual.

[kamarada-15.2-rc]: {% post_url en/2020-08-08-linux-kamarada-15.2-enters-release-candidate-rc-phase %}
[boo-1173991]:      https://bugzilla.opensuse.org/show_bug.cgi?id=1173991
[boo-1176304]:      https://bugzilla.opensuse.org/show_bug.cgi?id=1176304
[howto-update]:     {% post_url en/2019-05-20-how-to-get-updates-for-opensuse-linux %}
