---
date: '2019-08-12 09:30:00 GMT-3'
layout: post
published: true
title: '20 apps you can use the same way on both Linux and Windows — part 2'
image: /files/2019/07/apps-linux-windows-2.jpg
nickname: 'apps-linux-windows-2'
excerpt: 'This post is the second of two presenting 20 apps which are available for both Linux and Windows, with a bonus at the end: I present some well-known services which can be used directly from a web browser, without installing any app. Those services also work the same way on both Windows and Linux.'
---

{% include image.html src="/files/2019/07/apps-linux-windows-2.jpg" %}

This post is the second of two presenting 20 apps which are available for both [Linux] and [Windows]. If you fell into this page, start reading the first part, in which I present the first 10 programs:

- [20 apps you can use the same way on both Linux and Windows — part 1][apps-linux-windows]

Everyone on the same page, now let's go to the second part, which shows another 10 programs and has a bonus at the end: I present some well-known services which can be used directly from a web browser, without installing any app. Those services also work the same way on both Windows and Linux.

## 11) Foxit Reader

{% include image.html src="/files/2019/07/foxit-reader.jpg" %}

[Foxit Reader][foxit-reader] is a popular PDF reader developed by [Foxit Software][foxit-software]. Lightweight, fast and intuitive, it has many features that go beyond just opening and reading, such as commenting, highlighting, drawing and even digitally signing PDF documents.

Foxit Reader is licensed as [proprietary][proprietary-sw] [freeware]. To install it on both Linux and Windows, you need to download it from its website:

- [https://www.foxitsoftware.com/pdf-reader/](https://www.foxitsoftware.com/pdf-reader/)

## 12) Telegram

{% include image.html src="/files/2019/08/telegram-en.jpg" %}

[Telegram] is a messaging app available for computers, smartphones and tablets. Its users can send and receive text and audio messages, photos, videos, files, stickers and make voice calls. Besides those features, common to most instant messaging apps, Telegram has some features focused on security and privacy.

Telegram is a controversial app, known for not disclosing user data to third parties, including governments. It has been already blocked on [China], [Russia] and [Iran]. In Brazil, it became known due to [WhatsApp court blockades][whatsapp-brazil], during which people turned to Telegram as an alternative. Unlike [WhatsApp], Telegram can be used on many devices at the same time.

To install the Telegram app on [openSUSE], you can retrieve it from the official repositories, as it is a [free software][free-software]:

```
# zypper in telegram-desktop
```

To install the Telegram app on Windows, download its installer from its website:

- [https://telegram.org/](https://telegram.org/)

Windows users can also [download Telegram from Microsoft Store][telegram-ms-store].

**Tip:** actually you don't need to install an app to use Telegram, you can use it from a web browser. Just go to [web.telegram.org](https://web.telegram.org/).

## 13) VirtualBox

{% include image.html src="/files/2019/07/virtualbox-en.jpg" %}

[VirtualBox] is a free and open-source virtualization software developed by [Oracle]. It allows you to create virtual machines, on which you can install operating systems and applications. You are able to use two or more systems at the same time, as if you were using two or more computers, but physically sharing the same hardware (actually, you use only one computer).

VirtualBox refers to the real machine (the one you use) as the **host** machine: it hosts the virtual machines, which are called **guests**.

To install VirtualBox on the host machine, if the host operating system is openSUSE, run:

```
# zypper in virtualbox virtualbox-qt
```

If the host operating system is Windows, download the VirtualBox installer from its website:

- [https://www.virtualbox.org/](https://www.virtualbox.org/)

On the virtual machine, it is recommended to install the Guest Additions, which improve the integration between real and virtual machines through VirtualBox.

If you have installed openSUSE on the virtual machine, run (on the virtual machine):

```
# zypper in virtualbox-guest-{tools,x11}
```

If you have installed other operating system on the virtual machine (e.g. Windows or a Linux distribution other than openSUSE), to install Guest Additions, on the virtual machine window, open the **Devices** menu and click **Insert Guest Additions CD image**.

{% include image.html src="/files/2019/07/virtualbox-guest-additions-en.jpg" %}

**Tip:** if you use Windows and want to try Linux, you can install VirtualBox on Windows, create a virtual machine, and install Linux on the virtual machine.

{% capture more_virtualbox %}
Do you want to know more about installing and using VirtualBox on both Linux and Windows? Check these out:
- [VirtualBox: the easiest way to try Linux without installing it]({% post_url en/2019-10-10-virtualbox-the-easiest-way-to-try-linux-without-installing-it %})
- [Installing VirtualBox on Linux]({% post_url en/2019-10-19-installing-virtualbox-on-linux %})
- [Tips for using VirtualBox every day]({% post_url en/2019-11-01-tips-for-using-virtualbox-every-day %})
{% endcapture %}
{% include update.html date="Nov 01, 2019" message=more_virtualbox %}

## 14) GIMP

{% include image.html src="/files/2019/07/gimp-en.jpg" %}

[GIMP] (GNU Image Manipulation Program) is a free and open-source cross-platform image editor used for creating, editing and retouching [bitmap images][raster-graphics] (e.g. [Paint] bitmaps or digital photos in [JPG] files), free-form drawing, image compositing, converting between different image formats and more. Suitable for graphic designers, photographers and illustrators, it can be seen as a free alternative to [Adobe Photoshop][photoshop].

On openSUSE, you can retrieve GIMP from the official repositories, just run:

```
# zypper in gimp
```

To install GIMP on Windows, download its installer from its website:

- [https://www.gimp.org/](https://www.gimp.org/)

## 15) Inkscape

{% include image.html src="/files/2019/07/inkscape-en.jpg" %}

[Inkscape] is a free and open-source cross-platform [vector graphics][vector-graphics] editor similar to [CorelDRAW][coreldraw]. What sets Inkscape apart is its use of [SVG], an open standard vector image format, as its native format. Inkscape is able to export images to the [PNG] format, popular on the Internet, and import from many vector and bitmap formats such as JPG.

On openSUSE, you can retrieve Inkscape from the official repositories, just run:

```
# zypper in inkscape
```

To install Inkscape on Windows, download its installer from its website:

- [https://inkscape.org/](https://inkscape.org/)

## 16) Audacity

{% include image.html src="/files/2019/07/audacity-en.jpg" %}

[Audacity] is a free and open-source cross-platform multi-track audio editor and recorder. It can record, import, mix, cut and edit sound files, apply effects such as normalization, fade in, fade out and others and can be extended by installing plugins. Audacity has a very intuitive interface and is easy to use.

On openSUSE, you can retrieve Audacity from the official repositories, just run:

```
# zypper in audacity
```

To install Audacity on Windows, download its installer from its website:

- [https://www.audacityteam.org/](https://www.audacityteam.org/)

## 17) Shotcut

{% include image.html src="/files/2019/08/shotcut-en.jpg" %}

[Shotcut] is a free and open-source cross-platform video editor. It has a simple interface and strikes a perfect balance between features and usability. Shotcut allows you to record directly from the webcam, import, cut, stream and export videos to various formats. A number of video and audio filters and special effects are available.

On openSUSE, you can retrieve Shotcut from the official repositories, just run:

```
# zypper in shotcut
```

To install Shotcut on Windows, download its installer from its website:

- [https://shotcut.org/](https://shotcut.org/)

## 18) Tor Browser

{% include image.html src="/files/2019/07/tor-browser-en.jpg" %}

The [Tor Project][tor-project] (an acronym for The Onion Router) maintains a free, worldwide, volunteer, decentralized network of tunnels — the Tor Network — through which private data from its users travels encrypted, anonymously, safely and free from censorship.

[Tor Browser][tor-browser] is a web browser based on [Mozilla Firefox][firefox] which routes all its traffic through the Tor Network for browsing anonymously and avoid online tracking. To the websites you visit, your internet traffic appears to come from a different IP address, often in a different country. Using the Tor Browser is the easiest way to connect to the Tor Network and circumvent online censorship by dictatorial governments or companies.

On openSUSE, you can retrieve the Tor Browser from the official repositories, just run:

```
# zypper in torbrowser-launcher
```

To install the Tor Browser on Windows, download its installer from its website:

- [https://www.torproject.org/download/](https://www.torproject.org/download/)

## 19) Steam

{% include image.html src="/files/2019/07/steam-en.jpg" %}

[Steam] is a game distribution platform developed by [Valve Corporation][valve]. It currently offers nearly 30,000 games, which can be free or paid, made by big known companies or indies, played by over 100 million users, who can chat in-game and become friends (or enemies). If you are a developer, you can also release your own games.

Some famous titles which can be downloaded from Steam include: [Counter-Strike][cs], [Half-Life][hl], [Grand Theft Auto V][gta-v] and [Dota 2][dota-2]. Previously, those games were available only for Windows. Recently, with Steam, they became playable also on Linux.

Steam is a proprietary freeware. It is available on the official non-free repository. To install Steam on openSUSE, first you need to add that repository, in case you don't have it yet:

```
# zypper addrepo -f -K -n "Non-OSS Repository" http://download.opensuse.org/distribution/leap/15.1/repo/non-oss/ repo-non-oss
```

Then, to install Steam:

```
# zypper in steam
```

To install Steam on Windows, download its installer from its website:

- [https://store.steampowered.com/about/](https://store.steampowered.com/about/)

## 20) FileZilla

{% include image.html src="/files/2019/07/filezilla-en.jpg" %}

[FileZilla] is a free and open-source cross-platform [FTP], [SFTP] and [FTPS] client. Used mainly by web designers and webmasters who need to upload files to web servers using the FTP protocol, FileZilla features an intuitive graphical user interface and is easy to use.

To install FileZilla on openSUSE, retrieve it from the official repositories:

```
# zypper in filezilla
```

To install FileZilla on Windows, download its installer from its website:

- [https://filezilla-project.org/](https://filezilla-project.org/)

## Bonus: apps or services?

{% include image.html src="/files/2019/07/netflix-en.jpg" %}

Although available on the [Microsoft Store][microsoft-store], some apps actually correspond to online services that can be used from a web browser:

- [Netflix](https://www.netflix.com/)
- [WhatsApp Web](https://web.whatsapp.com/)
- [Instagram](https://www.instagram.com/)
- [Facebook](https://facebook.com/)
- [Messenger](https://www.messenger.com/)
- [Telegram Web](https://web.telegram.org/)
- [YouTube](https://youtube.com/)
- [Slack](https://slack.com/)
- [Microsoft Office Online](https://www.office.com/)
- [Pinterest](https://pinterest.com/)
- [Trello](https://trello.com/)
- [Twitter](https://twitter.com/)
- [Evernote](https://evernote.com/)

Those services don't provide native apps for Linux, but you won't really miss their apps if you open your web browser and access them.

A service which is not available as an app for either Windows or Linux, but works perfectly on web browsers and deserves mention is [Google Docs](https://docs.google.com/).

**Tip:** bookmark the services you use in your web browser to access them faster.

## References

To choose the applications and services presented here, I searched lists of popular or recommended programs for Windows:

- [Most popular apps - Microsoft Store][ms-store-most-popular]
- [New PC? 15 Must-Have Windows Applications You Should Install First][makeuseof]
- [20 of the best free Windows 7 apps 2019: bring your PC right up to date - TechRadar][techradar]
- [Best free software for Windows 10 in 2019][thewindowsclub]

So I tried to write from the point of view of a Windows user who wonders whether familiar applications can be found on Linux.

I hope this post helped you. Got any questions? Would you like to know more about any of those apps? Would you like to suggest any app? Please, write in the comments!

[linux]:                    https://www.kernel.org/linux.html
[windows]:                  https://www.microsoft.com/windows/
[apps-linux-windows]:       {%post_url en/2019-07-20-20-apps-you-can-use-the-same-way-on-both-linux-and-windows-part-1 %}

[foxit-reader]:             https://www.foxitsoftware.com/pdf-reader/
[pdf]:                      https://en.wikipedia.org/wiki/PDF
[foxit-software]:           https://www.foxitsoftware.com/
[proprietary-sw]:           https://en.wikipedia.org/wiki/Proprietary_software
[freeware]:                 https://en.wikipedia.org/wiki/Freeware

[telegram]:                 https://telegram.org/
[telegram-blocked]:         https://www.nytimes.com/2018/05/01/world/middleeast/iran-telegram-app-russia.html
[china]:                    https://www.hongkongfp.com/2015/07/13/china-blocks-telegram-messenger-blamed-for-aiding-human-rights-lawyers/
[russia]:                   https://www.nytimes.com/2018/04/13/world/europe/russia-telegram-encryption.html
[iran]:                     https://www.nytimes.com/2018/05/01/world/middleeast/iran-telegram-app-russia.html
[whatsapp-brazil]:          https://www.techspot.com/news/63179-brazilian-court-has-blocked-whatsapp-48-hours-15.html
[whatsapp]:                 https://www.whatsapp.com/

[opensuse]:                 https://www.opensuse.org/
[free-software]:            https://www.gnu.org/philosophy/free-sw.html
[telegram-ms-store]:        https://www.microsoft.com/en-US/search?q=telegram

[virtualbox]:               https://www.virtualbox.org/
[oracle]:                   https://www.oracle.com/

[gimp]:                     https://www.gimp.org/
[raster-graphics]:          https://en.wikipedia.org/wiki/Raster_graphics
[paint]:                    https://en.wikipedia.org/wiki/Microsoft_Paint
[jpg]:                      https://en.wikipedia.org/wiki/JPEG
[photoshop]:                https://www.adobe.com/products/photoshop/

[inkscape]:                 https://inkscape.org/
[vector-graphics]:          https://en.wikipedia.org/wiki/Vector_graphics
[coreldraw]:                https://www.coreldraw.com/
[svg]:                      https://en.wikipedia.org/wiki/Scalable_Vector_Graphics
[png]:                      https://en.wikipedia.org/wiki/Portable_Network_Graphics

[audacity]:                 https://www.audacityteam.org/

[shotcut]:                  https://shotcut.org/

[tor-project]:              https://www.torproject.org/
[tor-browser]:              https://www.torproject.org/download/
[firefox]:                  https://mozilla.org/firefox

[steam]:                    https://store.steampowered.com/
[valve]:                    https://www.valvesoftware.com/
[cs]:                       https://store.steampowered.com/app/10/CounterStrike/
[hl]:                       https://store.steampowered.com/app/70/HalfLife/
[gta-v]:                    https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/
[dota-2]:                   https://store.steampowered.com/app/570/Dota_2/

[filezilla]:                https://filezilla-project.org/
[ftp]:                      https://en.wikipedia.org/wiki/File_Transfer_Protocol
[sftp]:                     https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol
[ftps]:                     https://en.wikipedia.org/wiki/FTPS

[microsoft-store]:          https://www.microsoft.com/en-US/store/

[ms-store-most-popular]:    https://www.microsoft.com/en-US/store/most-popular/apps/pc
[makeuseof]:                https://www.makeuseof.com/tag/getting-a-new-pc-12-must-have-applications-to-install-first/
[techradar]:                https://www.techradar.com/news/software/applications/20-windows-7-free-apps-to-download-today-648954
[thewindowsclub]:           https://www.thewindowsclub.com/best-free-software-for-windows-10
