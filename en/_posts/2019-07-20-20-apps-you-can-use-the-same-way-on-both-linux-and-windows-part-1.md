---
date: '2019-07-20 16:30:00 GMT-3'
layout: post
published: true
title: '20 apps you can use the same way on both Linux and Windows — part 1'
image: /files/2019/07/apps-linux-windows.jpg
nickname: 'apps-linux-windows'
excerpt: "Maybe you don't give Linux a chance because you are afraid of not knowing how to use the system, or of not finding the applications you use everyday. What if I tell you that that there are at least 20 popular Windows apps which can be used the same way also on Linux, a free and open-source operating system, would that encourage you to try it?"
---

{% include image.html src="/files/2019/07/apps-linux-windows.jpg" %}

Maybe you don't give [Linux] a chance because you are afraid of not knowing how to use the system, or of not finding the applications you use everyday. What if I tell you that that there are at least 20 popular [Windows] apps which can be used the same way also on Linux, a free and open-source operating system, would that encourage you to try it?

Please note that I'm not talking about Linux **alternatives** to Windows applications: I'm talking about using **the same applications** in exactly the same way on both systems!

In case you want to switch to Linux, you can start using these applications in your familiar operating system. Switching later will be that much easier.

The applications that I'm going to show here share in common:

- they are **cross-platform:** available for use in various operating systems, such as Linux and Windows, some are also available for other systems such as [Android] and [iOS];
- they are **well-known**, popular softwares: you can find a lot of information about them on the Internet;
- they are **free:** can be used without cost, but some offer additional, paid features;
- most of them are also free (as in "freedom"): users of [**free softwares**][free-software] (also called *libre* softwares) have the freedom to run, copy, distribute, study, change and improve those software as they wish, access to their [source code][source-code] is given;
- also most of them can be easily downloaded from official **repositories** of the Linux distributions.

Softwares that are free in both senses (as in "free beer" and "free speech") are called [FOSS — free and open-source softwares][foss].

Here I'm going to focus on the [openSUSE] Linux distribution, because it's the one I use and recommend, but these programs can be easily installed on other distributions.

I decided to split the post in two parts so it does not get too big.

I won't make you wait any longer: let's see the selected apps!

## 1) Mozilla Firefox

{% include image.html src="/files/2019/07/mozilla-firefox-en.jpg" %}

[Mozilla Firefox][firefox] is a free, open-source and cross-platform web browser developed by the [Mozilla Foundation][mozilla] with the help of hundreds of collaborators. It aims to be a lightweight, secure, intuitive and highly extensible browser.

According to [StatCounter], a web traffic analysis website, currently Firefox is used by about 9.76% of desktop users worldwide. It is the default browser on most Linux distributions.

[openSUSE Leap][leap] comes with an [Extended Support Release][firefox-esr] of Firefox, designed for use by organizations including schools, universities, businesses, public agencies and others who do mass deployments, cannot update frequently (i.e. on a monthly basis) and need longer support cycles. Point releases contain security updates only and coincide with regular Firefox releases. Functional enhancements come only on major releases, roughly yearly.

Firefox should be already installed on openSUSE, but in case you need to install it, run:

```
# zypper in MozillaFirefox MozillaFirefox-branding-openSUSE
```

To install Firefox on Windows, download its installer from one of these links:

- Regular release, the version most people use (at the time of writing, 67.0.4):
    - [https://www.mozilla.org/firefox/new/](https://www.mozilla.org/firefox/new/)
- Extended Support Release, the same version openSUSE uses (60.7.2):
    - [https://www.mozilla.org/firefox/organizations/](https://www.mozilla.org/firefox/organizations/)

## 2) Google Chrome

{% include image.html src="/files/2019/07/google-chrome-en.jpg" %}

[Google Chrome][chrome] is a cross-platform web browser developed by [Google]. It is licensed as [proprietary][proprietary-sw] [freeware] and features a minimalist interface.

According to StatCounter, Chrome is currently the most used web browser in the world, with 70% of market share among desktop users.

To install Chrome on both Linux and Windows, you need to download it from its website:

- [https://www.google.com/chrome/](https://www.google.com/chrome/)

Chrome is not offered by Linux distributions because it is proprietary. What perhaps many people don't know is that most of Chrome's source code comes from Google's open-source [Chromium] project. Chrome is nothing more than the Chromium web browser bundled with a number of proprietary features added by Google.

If you want to install Chromium on openSUSE, just run:

```
# zypper in chromium
```

It is not usual to install Chromium on Windows, but if you want to, this website provides Chromium installers for Windows:

- [https://chromium.woolyss.com/](https://chromium.woolyss.com/)

## 3) LibreOffice

{% include image.html src="/files/2019/07/libreoffice-en.jpg" %}

[LibreOffice] is a free and open-source suite of office applications developed by [The Document Foundation][document-foundation]. It is the default office suite of most popular Linux distributions. It uses the international standard [OpenDocument] file format (ODF) as its native format to save documents for all of its applications, but it's also compatible with [Microsoft Office][ms-office] formats, as well as other formats. LibreOffice started as a fork of the [OpenOffice] project, then developed by [Oracle], now developed by [The Apache Foundation][apache].

LibreOffice should be already installed on openSUSE, but in case you need to install it, run:

```
# zypper in libreoffice-{writer,calc,impress,draw,base,math}
```

To install LibreOffice on Windows, download its installer from its website:

- [https://www.libreoffice.org/](https://www.libreoffice.org/)

## 4) Dropbox

{% include image.html src="/files/2019/07/dropbox-en.jpg" %}

[Dropbox] is a file hosting service. It offers a client software which creates a folder named Dropbox on the computer and synchronizes files in that folder with the cloud. Dropbox is a [freemium] (free + premium) service: you start with 2GB of storage space for free and can optionally subscribe to individual or corporate paid plans with more space and features.

**Tip:** join Dropbox using [this referral link][dropbox-referral] and earn 500MB of bonus space!

To install the Dropbox client on Windows, download its installer from its website:

- [https://www.dropbox.com/](https://www.dropbox.com/)

To install the Dropbox client on openSUSE, run:

```
# zypper in dropbox
```

When you launch Dropbox for the first time, it will download the proprietary part of the client.

If you use the [GNOME] desktop environment, you should also install the file manager plugin, which provides features like sync indicators and context menu actions:

```
# zypper in nautilus-extension-dropbox
```

Also note that [GNOME does not display system tray icons][gnome-systray] by default. You can install the [TopIcons Plus][topicons-plus] extension to put the Dropbox icon in the top bar, next to the clock.

If you don't know how to install GNOME extensions, take a look at this post:

- [Monitor system resources with the GNOME System Monitor extension][gnome-extensions]

## 5) Skype

{% include image.html src="/files/2019/07/skype-en.jpg" %}

[Skype] is an app that allows you to send text messages and make voice and video calls over the Internet. Calls are free among Skype users, but it is also possible to call landlines or mobile phones anywhere in the world at affordable prices.

To install Skype on both Linux and Windows, you need to download it from its website:

- [https://www.skype.com/](https://www.skype.com/)

Windows users can also [download Skype from Microsoft Store][skype-ms-store].

## 6) TeamViewer

{% include image.html src="/files/2019/07/teamviewer-en.jpg" %}

[TeamViewer] is a remote desktop tool which features remote control, desktop sharing, web conferencing and file transfer between computers. Using a desktop computer or a mobile device, TeamViewer allows you to view the screen of another computer or device and also control it. TeamViewer is free for personal use, companies must buy a subscription.

To install TeamViewer on both Linux and Windows, you need to download it from its website:

- [https://www.teamviewer.com/](https://www.teamviewer.com/)

## 7) VLC

{% include image.html src="/files/2019/07/vlc-en.jpg" %}

[VLC] is a free and open-source cross-platform multimedia player that plays most multimedia files (e.g. [MP3] and [DivX]), optical media (CD, DVD, Blu-ray) and various streaming protocols.

I think of VLC as a Swiss Army knife multimedia player: if there is any multimedia file that VLC cannot open, probably no other can!

To install VLC on Windows, download its installer from its website:

- [https://www.videolan.org/vlc/](https://www.videolan.org/vlc/)

On openSUSE, as VLC is a free software, it is available on the official repositories:

```
# zypper in vlc vlc-lang
```

However, the package provided by openSUSE contain [codecs] only for free multimedia formats (e.g. [Xvid]). Therefore, it is not able to play many multimedia files.

The tip is to download VLC from the [Packman] repository. It provides the [vlc-codecs] package, which contains codecs that are not available in the stock openSUSE distribution:

```
# zypper ar -cfK -p 90 -n "Packman Repository" http://ftp.gwdg.de/pub/linux/misc/packman/suse/openSUSE_Leap_15.1/ packman
# zypper in vlc vlc-lang vlc-codecs
```

## 8) Spotify

{% include image.html src="/files/2019/07/spotify-en.jpg" %}

[Spotify] is one of the most popular podcast and music streaming services around the world. It's a freemium service: basic features are free with advertisements, while additional features, such as improved streaming quality and ability to download music for offline listening, are offered via paid subscriptions.

To install the Spotify client on Windows, download its installer from its website:

- [https://www.spotify.com/](https://www.spotify.com/)

Windows users can also [download Spotify from Microsoft Store][spotify-ms-store].

There is a [Spotify client for Linux][spotify-linux] which can be installed using [Snap], a distribution-agnostic package manager.

First, to install Snap on openSUSE, run:

```
# zypper ar --refresh https://download.opensuse.org/repositories/system:/snappy/openSUSE_Leap_15.1 snap
# zypper in snapd
# systemctl enable snapd
# systemctl start snapd
```

Then, to install the Spotify client for Linux, run:

```
$ snap install spotify
```

## 9) PDF Split and Merge (PDFsam)

{% include image.html src="/files/2019/07/pdfsam-en.jpg" %}

[PDF Split and Merge][pdfsam], also known as PDFsam, is an application that allows you to manipulate PDF documents. The Basic edition is free and open-source and includes all the most basic features, such as split (either by page numbers or by size in bytes), merge, rotate or extract pages from PDF files. There are commercial editions with additional features.

To install PDFsam on both Linux and Windows, you need to download it from its website:

- [https://pdfsam.org/](https://pdfsam.org/)

PDFsam is a Java-based application, which brings us to the tenth software of this first part.

## 10) Java

{% include image.html src="/files/2019/07/java-en.jpg" %}

[Java] is not properly an app, but a programming language, in which several applications are developed. To use applications built on Java, you need to install a Java Runtime Environment (JRE), also known as Java Virtual Machine (JVM). Usually when people say "you need to install Java", they mean "you need to install a JRE".

There are two major implementations of JRE, both cross-platform: one free and open-source, provided by the OpenJDK project, which is the official reference implementation, and another licensed as proprietary freeware, provided by Oracle.

Usually Windows users install the Oracle JRE, which can be downloaded from:

- [https://www.java.com/](https://www.java.com/)

For Linux users it is easier to install the OpenJDK JRE, which is provided by Linux distributions themselves. To install it in openSUSE, run:

```
# zypper in java-openjdk
```

Actually, newer versions of PDFsam does not require you to install a JRE, because they are packaged with an embedded JRE.

Some programs may require you to install specifically the Oracle JRE (e.g. personal banking).

If you need help to install the Oracle JRE on openSUSE, take a look at:

- [SDB:Installing Java - openSUSE Wiki][how-to-oracle-jre]

## To be continued...

In part 2, we are going to see more apps made for both Linux and Windows.

{% capture update_message %}[Part 2 is here! (click)]({%post_url en/2019-08-12-20-apps-you-can-use-the-same-way-on-both-linux-and-windows-part-2 %}){% endcapture %}
{% include update.html date="Ago 12, 2019" message=update_message %}

## References

To choose the applications presented here, I searched lists of popular or recommended programs for Windows:

- [Most popular apps - Microsoft Store][microsoft-store]
- [New PC? 15 Must-Have Windows Applications You Should Install First][makeuseof]
- [20 of the best free Windows 7 apps 2019: bring your PC right up to date - TechRadar][techradar]
- [Best free software for Windows 10 in 2019][thewindowsclub]

So I tried to write from the point of view of a Windows user who wonders whether familiar applications can be found on Linux.

I hope this post helped you. Got any questions? Would you like to suggest any app? Please, write in the comments!

[linux]:                https://www.kernel.org/linux.html
[windows]:              https://www.microsoft.com/windows/
[android]:              https://www.android.com/
[ios]:                  https://www.apple.com/ios/
[free-software]:        https://www.gnu.org/philosophy/free-sw.html
[source-code]:          https://en.wikipedia.org/wiki/Source_code
[foss]:                 https://en.wikipedia.org/wiki/Free_and_open-source_software
[opensuse]:             https://www.opensuse.org/

[firefox]:              https://mozilla.org/firefox
[mozilla]:              https://foundation.mozilla.org/
[statcounter]:          http://gs.statcounter.com/
[leap]:                 https://en.opensuse.org/Portal:Leap
[firefox-esr]:          https://www.mozilla.org/firefox/organizations/

[chrome]:               https://www.google.com/chrome/
[google]:               https://www.google.com/
[proprietary-sw]:       https://en.wikipedia.org/wiki/Proprietary_software
[freeware]:             https://en.wikipedia.org/wiki/Freeware
[chromium]:             https://www.chromium.org/

[libreoffice]:          https://www.libreoffice.org/
[document-foundation]:  https://www.documentfoundation.org/
[opendocument]:         http://www.opendocument.com.br/project-definition
[ms-office]:            https://www.office.com/
[openoffice]:           https://www.openoffice.org/
[oracle]:               https://www.oracle.com/
[apache]:               https://www.apache.org/

[dropbox]:              https://www.dropbox.com/
[freemium]:             https://en.wikipedia.org/wiki/Freemium
[dropbox-referral]:     https://db.tt/4VzN0K26
[gnome]:                https://www.gnome.org/
[gnome-systray]:        https://www.omgubuntu.co.uk/2017/09/will-you-miss-gnome-legacy-tray
[topicons-plus]:        https://extensions.gnome.org/extension/1031/topicons/
[gnome-extensions]:     {%post_url en/2019-04-26-monitor-system-resources-with-the-gnome-system-monitor-extension %}

[skype]:                https://www.skype.com/
[skype-ms-store]:       https://www.microsoft.com/en-US/search?q=skype

[teamviewer]:           https://www.teamviewer.com/

[vlc]:                  https://www.videolan.org/vlc/
[mp3]:                  https://en.wikipedia.org/wiki/MP3
[divx]:                 https://en.wikipedia.org/wiki/DivX
[codecs]:               https://en.wikipedia.org/wiki/Codec
[xvid]:                 https://en.wikipedia.org/wiki/Xvid
[packman]:              http://packman.links2linux.com/
[vlc-codecs]:           http://packman.links2linux.com/package/vlc

[spotify]:              https://www.spotify.com/
[spotify-ms-store]:     https://www.microsoft.com/en-US/search?q=spotify
[spotify-linux]:        https://www.spotify.com/download/linux/
[snap]:                 https://snapcraft.io/

[java]:                 https://www.java.com/
[openjdk]:              https://openjdk.java.net/
[how-to-oracle-jre]:    https://en.opensuse.org/SDB:Installing_Java#Java_Runtime_Environment_Install_using_Oracle.27s_RPM

[pdfsam]:               https://pdfsam.org/
[pdf]:                  https://en.wikipedia.org/wiki/PDF
[makeuseof]:            https://www.makeuseof.com/tag/getting-a-new-pc-12-must-have-applications-to-install-first/
[techradar]:            https://www.techradar.com/news/software/applications/20-windows-7-free-apps-to-download-today-648954
[thewindowsclub]:       https://www.thewindowsclub.com/best-free-software-for-windows-10
[microsoft-store]:      https://www.microsoft.com/en-us/store/most-popular/apps/pc
