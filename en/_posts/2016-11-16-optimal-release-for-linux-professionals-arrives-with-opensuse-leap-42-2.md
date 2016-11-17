---
date: 2016-11-16 10:30:00
excerpt: 'Members of the openSUSE Project are pleased to announce the release of the next minor version of Leap; openSUSE Leap 42.2! Leap is made to give stability-minded users and conservative technology adopters peace of mind. openSUSE Leap 42.2 is powered by the Linux 4.4 Long-Term-Support (LTS) kernel and is a secure, stable and reliable server operating system for deploying IT services in physical, virtual or cloud environments.'
image: '/files/2015/11/Leap-green.png'
layout: post
published: true
nickname: 'opensuse-422-release-announcement'
title: 'Optimal Release for Linux Professionals Arrives with openSUSE Leap 42.2'
---

## A Professional Distribution for Developers, System Administrators and Users

Members of the openSUSE Project are pleased to announce the release of the next minor version of Leap; openSUSE Leap 42.2! Leap is made to give stability-minded users and conservative technology adopters peace of mind. openSUSE Leap 42.2 is powered by the Linux 4.4 Long-Term-Support (LTS) kernel and is a secure, stable and reliable server operating system for deploying IT services in physical, virtual or cloud environments.

A selective process of including well-established packages in openSUSE Leap 42.2 gives new meaning to the term *Linux Optimization*; openSUSE Leap is simply the safe choice that offers Linux professionals a user-friendly desktop and a feature-rich server environment.

{% include image.html src="/files/2015/11/Leap-green.png" style="max-width: 150px;" %}

Continuing the tradition of using source code from [SUSE Linux Enterprise][sle] (SLE), openSUSE Leap 42.2 provides a level of stability unmatched by other Linux distributions. With community-built packages on top of Leap's enterprise reliability, openSUSE Leap users benefit both from community and enterprise maintenance efforts.

<blockquote class="twitter-tweet" data-lang="pt"><p lang="en" dir="ltr">Wow! <a href="https://twitter.com/openSUSE">@openSUSE</a> and <a href="https://twitter.com/SUSE">@SUSE</a> together creating great distros for devs and operators! Check out openSUSE Leap 42.2: <a href="https://t.co/jEeQFltLe5">https://t.co/jEeQFltLe5</a></p>&mdash; Michael Miller (@michaelwmiller) <a href="https://twitter.com/michaelwmiller/status/798551355795206144">15 de novembro de 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Contributions to openSUSE Leap from SUSE include several new features like Network Functions Virtualization capabilities that combines [Open vSwitch][openvswitch] with the Data Plane Development Kit to process packets faster. YaST also has a significant amount of improvements and new features.

Community contributions were equally enormous as more than 1,400 new packages made it into this newest Leap version, with 42.2 providing 17% more packages than 42.1.

One of those community packages includes [GNU Health][gnu-health] Version 3.0.4. This Free Health and Hospital Information System is used by hospitals, governments and institutions under a free license. GNU Health allows management and analysis of a huge amount of data and aspects.

Another new package in Leap 42.2 is [Prelude Security Information & Event Management (SIEM)][prelude-siem] system, which collects, normalizes, sorts, aggregates, correlates and reports all security-related events (IDMEF).

A large community effort and cooperation between openSUSE and KDE has brought a Long-Term Support version for [Plasma 5.8][plasma-5.8.2], which improves multiple monitor support out-of-the-box.

<blockquote class="twitter-tweet" data-lang="pt"><p lang="en" dir="ltr">Tons of great feedback from devs &amp; ops about using <a href="https://twitter.com/openSUSE">@openSUSE</a> Leap (42.2 on its way in a few hours!) for dev &amp; then move to <a href="https://twitter.com/SUSE">@SUSE</a> production!</p>&mdash; Thomas Di Giacomo (@thomasdigiacomo) <a href="https://twitter.com/thomasdigiacomo/status/798547292143828992">15 de novembro de 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Leap provides an ideal [dev-to-production][dev-to-production] model with SLE for developers and system administrators who want to align their development and production environments. openSUSE Leap is highly stable and is a safe choice for sysadmins, developers and desktop users.

The newest Leap version improves user capabilities with [snapper][portal-snapper] snapshots that are based on the Btrfs filesystem. A new Btrfs concept for quota makes snapper much less disk-hungry. It is configured by default on fresh installations and can be [manually setup][space-aware-cleanup] after upgrading to Leap 42.2. [Snapper][snapper] is a [poka-yoke][poka-yoke] and can give system administrators confidence about updating new packages and rolling back the system if any errors occur.

Leap also offers users, developers and system administrators an easy path to move to other operating systems like openSUSE's faster, more updated distribution [Tumbleweed][tumbleweed], with the newest upstream packages and software versions provided on a rolling release basis, or to an enterprise-level support system with [SLE][sle].

See for yourself why openSUSE Leap is an acclaimed community-enterprise distribution.

## openSUSE Leap 42.2 is…

<div class='row'>
<div class='col-sm-2'>
{% include image.html src="/assets/icons/oxygen/48x48/status/meeting-participant.png" %}
</div>
<div class='col-sm-10'>
{% markdown %}

### More Enterprise

That's right. After basing openSUSE Leap 42.1 on SLE (SUSE Linux Enterprise), Leap 42.2 gets even more source code from the release of [SLE 12][sle-12] Service Pack 2. New technologies such as NVDIMM, OmniPATH, Data Plane Development Kit with openVSwitch are back ported for the release. XEN no longer requires it's own kernel and is supported by the default kernel. Along with the shared SLE codebase, openSUSE Leap 42.2 gets packages, maintenance and bug fixes from the openSUSE community and SUSE engineers. The 42 series of Leap achieves at a minimum 36 months of maintenance and security updates starting from 42.1.

[sle-12]: https://www.suse.com/promo/sle/

{% endmarkdown %}
</div>
</div>
<div class='row'>
<div class='col-sm-2'>
{% include image.html src="/assets/icons/oxygen/48x48/places/network-server.png" %}
</div>
<div class='col-sm-10'>
{% markdown %}

### Server Ready

openSUSE Leap 42.2 is the first Leap release to offer a Server profile as clear option during the installation. With no graphical environment, a Server install of Leap stands ready to do whatever you need from it. Something as simple as running a Web or Mail platform is easier than ever, as are complex projects using virtualization or container technologies.

It's also good to remember that Leap and all other openSUSE and SLE distributions have support for a [full-featured textmode installer][textmode-installer], giving all the same functionality as the graphical installer without the need for X. Our installer is also fully capable of doing [installations remotely using VNC or SSH][remote-installation], letting you set up your openSUSE Leap server without needing to be anywhere near it at all.

[textmode-installer]:   https://en.opensuse.org/SDB:Installation_with_little_memory#Text_mode
[remote-installation]:  https://en.opensuse.org/SDB:Remote_installation

{% endmarkdown %}
</div>
</div>
<div class='row'>
<div class='col-sm-12'>
{% markdown %}

### The Return of the Konqi

{% include image.html src="/files/2016/11/konqi.png" %}

Konqi has returned and is in full force. Plasma 5.8 brings a whole new component to openSUSE Leap. As the first Long Term Supported release for Plasma, Plasma 5.8 complements stability-minded Leap users. In unison with [Qt 5.6][qt] and Frameworks 5.26, Plasma 5.8 will bring Leap 42.2 users excellent KDE reliability and stability.

[qt]: https://www.qt.io/qt5-6/

{% endmarkdown %}
</div>
</div>
<div class='row'>
<div class='col-sm-2'>
{% include image.html src="/assets/icons/oxygen/48x48/places/start-here-branding.png" %}
</div>
<div class='col-sm-10'>
{% markdown %}

### The Kernel

The 4.4 LTS Linux Kernel for openSUSE Leap 42.2 improves file system performance and features, including a new balance filter for Btrfs. The default kernel now has paravirtualization enabled. The kernel version also improves cryptography and security support for Trusted Platform Module 2.0 chips as well as adds support for nested Virtualization through KVM. Networking is dramatically improved for IP Virtual Server and IPv6 and of course there is more updates and changes for the multiple architectures.

{% endmarkdown %}
</div>
</div>

## Get Leap!

Downloads of openSUSE Leap 42.2 can be found at [software.opensuse.org][software.opensuse.org]. We recommend checking out the [Release Notes][release-notes] before upgrade or installation.

Users currently running [openSUSE Leap 42.1][opensuse-leap-42.1] can [upgrade to openSUSE Leap 42.2 via the instructions at this link][upgrade].

The AArch64 architecture port has continued to mature and is now considered stable. ARMv7 has successfully entered the Leap sphere and is available now as well, giving users an upgrade path for their 13.2 installations. To find instructions on how to install openSUSE Leap on a given ARM system, please visit [the ARM wiki][arm-wiki] for more information.

## Thanks!

openSUSE Leap 42.2 represents the combined effort of thousands of developers who participate in our distributions and projects shipped with it. The contributors, inside and outside the openSUSE Project, should be proud of this release, and they deserve a major **"thank you"** for all of the hard work and care that have gone into it. We believe Leap is the ideal Linux distribution for developers, sysadmins and users. We hope you have a lot of fun using it, and we look forward to working with you on the next release or in [Tumbleweed][tumbleweed].

## For Developers

<div class='row'>
    <div class='col-sm-4'>{% include image.html caption="KDE Qt5 designer" src="/files/2016/11/Kde_qt5_designer.jpg" %}</div>
    <div class='col-sm-4'>{% include image.html caption="GNOME Builder" src="/files/2016/11/GNOME_Builder_42.2.jpg" %}</div>
    <div class='col-sm-4'>{% include image.html caption="KDE Anjunta" src="/files/2016/11/Anjuta_42.2.jpg" %}</div>
</div>
<div class='row'>
<div class='col-sm-2'>
{% include image.html src="/assets/icons/hicolor/48x48/apps/yast-network.png" %}
</div>
<div class='col-sm-10'>
{% markdown %}

### Containers

openSUSE Leap 42.2 is ships with [Docker 1.12][docker] which builds upon Dockers [recent adoption of runC and containerd][docker-engine-1-11-runc] to bring the latest orchestration features, such as Docker Swarm.

[docker]:                   https://blog.docker.com/2016/06/docker-1-12-built-in-orchestration/
[docker-engine-1-11-runc]:  https://blog.docker.com/2016/04/docker-engine-1-11-runc/

{% endmarkdown %}
</div>
</div>
<div class='row'>
<div class='col-sm-2'>
{% include image.html src="/assets/icons/oxygen/48x48/categories/applications-development.png" %}
</div>
<div class='col-sm-10'>
{% markdown %}

### IDEs and tooling

Leap 42.2 carries a mature, LTS version of the Qt 5 GUI toolkit (5.6). With more than 800 improvements from the previous version in Leap 42.1, Qt 5.6 also brings some non-critical security fixes in the Qt framework and in third-party libraries.

gtk 3.20, shared with SUSE Linux Enterprise 12 SP2, provides a solid & stable toolkit for building gtk based applications. GNOME Builder is offered as a powerful general purpose IDE for not only gtk applications based on C, C++ and Vala, but many other languages in addition.

For all your compiling needs Leap 42.2 contains gcc 4.8.5, 5.3.1 and 6.1.1. llvm-clang is also available at version 3.8.0. Leap also includes CMake 3.5 providing a powerful, cross-platform build environment for open-source project developers.

The OpenSSL toolkit found in Leap 42.2 is 1.0.2h, which modifies behavior of ALPN and prevents ASN.1 BIO from excessive memory allocation. OpenSSH is version 7.2p2 in this latest stable release and sanitizes X11 authentication credentials.

{% endmarkdown %}
</div>
</div>
<div class='row'>
<div class='col-sm-2'>
{% include image.html src="/assets/icons/oxygen/48x48/categories/applications-engineering.png" %}
</div>
<div class='col-sm-10'>
{% markdown %}

### Languages and Libraries

Programming languages found in openSUSE Leap 42.2 include Python 2.7, Ruby 2.1 and Perl 5.18. This Leap release provides new major version libraries for libvirt (2.0) and libzypp (16.2). Leap also has the well established glibc 2.22 and libsigc++ 2.8, which defines signals and connects them to any callback function, whether static or virtual.

{% endmarkdown %}
</div>
</div>

## For Sysadmins

<div class='row'>
    <div class='col-sm-4'>{% include image.html caption="Installation overview" src="/files/2016/11/Installation_overview_42.2.jpg" %}</div>
    <div class='col-sm-4'>{% include image.html caption="YaST" src="/files/2016/11/GNOME_YaST_42.2.jpg" %}</div>
    <div class='col-sm-4'>{% include image.html caption="Control Center 42.2" src="/files/2016/11/Gnome-control-center.jpg" %}</div>
</div>
<div class='row'>
<div class='col-sm-2'>
{% include image.html src="/assets/icons/hicolor/64x64/apps/yast-virtualisation.png" %}
</div>
<div class='col-sm-10'>
{% markdown %}

### Virtualization

openSUSE Leap 42.2 is full of virtualization solutions. QEMU 2.6.1 and VirtualBox 5.0.24 make openSUSE Leap 42.2 a perfect base system to distribute applications. Set up is easy with YaST and gnome-boxes, so you'll be able deploy solutions quickly and easily. openSUSE Leap 42.2 has Xen and KVM. It also supports Linux containers in the form of both Docker and LXC.

{% endmarkdown %}
</div>
</div>
<div class='row'>
<div class='col-sm-2'>
{% include image.html src="/assets/icons/hicolor/48x48/apps/yast.png" %}
</div>
<div class='col-sm-10'>
{% markdown %}

### YaST Goodness

YaST Sprints leading up to the release of openSUSE Leap 42.2 have brought tons of goodness and are making YaST more intuitive than ever. The YaST community revamped the user interface to improve usability and continues adding new tools and modules that have been in Tumbleweed for some time and are now been added to the Leap family.

yast2-alternatives is a new module to manage openSUSE's alternatives system developed during Google Summer of Code 2016. Another module, yast2-vpn, is a module for configuring VPN gateway and clients. yast2-auth-client is another module to configure centralized system authentication and it has been almost completely rewritten. New features to YaST have improved bootloader management, which offers support for Trusted Boot and has a revamped configuration of password protection. yast2-firewall now includes full support for firewalld, in addition to the already existing SuSEFirewall2.

When something goes wrong during installation, the system now offers the possibility of starting a debugger; users with Ruby knowledge can use it to check what went wrong or even to work around the problem. There have also been several enhancements, including installer memory usage being significantly reduced. The selection and configuration of keyboard layouts and console fonts has also been adapted for better compatibility with systemd. There are several other YaST improvements that can be found on the [features page][yast-features].

[yast-features]: https://en.opensuse.org/Archive:Features_42.2#YaST

{% endmarkdown %}
</div>
</div>
<div class='row'>
<div class='col-sm-2'>
{% include image.html src="/assets/icons/oxygen/48x48/apps/krdc.png" %}
</div>
<div class='col-sm-10'>
{% markdown %}

### Managing Systems

openSUSE Leap has Samba 4.4.2, which has improved support for working against a Windows 2003 domain. systemd 228 creates a plain directory instead of a subvolume (even on a Btrfs file system) if the root directory is a plain directory, and not a subvolume, which should simplify things with certain chroot() environments which are not aware of the concept of btrfs subvolumes. AppStream version in Leap enhances the interaction of software repositories. MariaDB remains the same version as it was in the previous release and MySQL's small upgrade to version 5.1.35 resolves a number of issues including a failover being triggered inadvertently and a failover process that kept trying to connect to an unavailable server.

It is also worth remembering that openSUSE Leap uses Delta RPMs for all [maintenance updates][maintenance], ensuring that the long term bandwidth requirements for maintaining your Leap system are as small as possible.

[maintenance]: https://en.opensuse.org/Portal:Maintenance

{% endmarkdown %}
</div>
</div>

## For Users

<div class='row'>
    <div class='col-sm-3'>{% include image.html caption="LibreOffice 5 in GNOME 3.20" src="/files/2016/11/LibreOffice_in_GNOME_Leap_42.2.jpg" %}</div>
    <div class='col-sm-3'>{% include image.html caption="GIMP in Plasma 5.8" src="/files/2016/11/KDE_Gimp_Leap_42.2.jpg" %}</div>
    <div class='col-sm-3'>{% include image.html caption="VLC in GNOME 3.20" src="/files/2016/11/VLC_in_GNOME_Leap_42.2.jpg" %}</div>
    <div class='col-sm-3'>{% include image.html caption="HexChat in Xfce" src="/files/2016/11/Hexchat_xfce_42.2.jpg" %}</div>
</div>
<div class='row'>
<div class='col-sm-2'>
{% include image.html src="/assets/icons/oxygen/48x48/apps/kde.png" %}
</div>
<div class='col-sm-10'>
{% markdown %}

### KDE

openSUSE Leap 42.2 is the first to offer KDE's Long Term Support edition of its flagship desktop software, Plasma. Feature rich with excellent performance, [Plasma 5.8 LTS][plasma-5.8.1] is the default desktop environment in openSUSE. Previous KDE users who moved away should reassess this release, with Plasma 5.8 bringing significant improvements in stability as well as new features. Plasma 5.8 improves multiple monitor support out-of-the-box in openSUSE Leap 42.2.

Jump List Actions are new in KRunner and it doesn't only open applications, but can be used to start certain actions directly when the application starts. Drag and drop support was added to bring search result to any application. [System administrators will enjoy the Kiosk support][kiosk] from an improved Plasma in Leap 42.2. Android phone users can get phone integration with KDE Connect from the Google Play store; all they need to do is enable the KDE Connect service in the SUSE firewall module in YaST. Using KDE Connect, users can get text messages on their desktop or easily transfer files to their phone.

[plasma-5.8.1]: https://www.kde.org/announcements/plasma-5.8.1.php
[kiosk]:        https://userbase.kde.org/KDE_System_Administration/Kiosk/Introduction

{% endmarkdown %}
</div>
</div>
<div class='row'>
<div class='col-sm-2'>
{% include image.html src="/assets/icons/hicolor/48x48/apps/pattern-gnome.png" %}
</div>
<div class='col-sm-10'>
{% markdown %}

### GNOME

The stability of [GNOME 3.20][gnome-3.20] offers conservative upgrade users new privacy controls to improve per-application location access, quick access to media controls directly from the shell, and keyboard shortcuts and gestures can be easily learned with new shortcut overlay windows. Many GNOME applications have shortcut windows for 3.20, including Files, Videos, Photos, gedit, Builder, Maps and more. In each application, the shortcut window can be opened from the application menu, or by using the **Ctrl + /** or **Ctrl + F1** shortcut. GNOME can now access Google Drive directly from the Files application in openSUSE Leap 42.2. More than 28,000 changes were made for GNOME 3.20 by approximately 870 contributors. Check out the [release notes for GNOME 3.20][gnome-3.20-release-notes].

[gnome-3.20]:               https://www.gnome.org/news/2016/03/gnome-3-20-released/
[gnome-3.20-release-notes]: https://help.gnome.org/misc/release-notes/3.20/

{% endmarkdown %}
</div>
</div>
<div class='row'>
<div class='col-sm-2'>
{% include image.html src="/assets/icons/oxygen/48x48/places/user-desktop.png" %}
</div>
<div class='col-sm-10'>
{% markdown %}

### Other desktop environments

openSUSE Leap 42.2 offers users the option to choose their desktop; try MATE, Xfce, Enlightenment or Cinnamon. LXQt 0.11.0, which has an improved user experience thanks to several bug fixes, ships in openSUSE Leap 42.2, but is not available in the installer. LXQt 0.11.0 introduces pavucontrol-Qt, the Qt port of PulseAudio's mixer pavucontrol the UI of which is based upon GTK.

{% endmarkdown %}
</div>
</div>
<div class='row'>
<div class='col-sm-2'>
{% include image.html src="/assets/icons/oxygen/48x48/categories/applications-internet.png" %}
</div>
<div class='col-sm-10'>
{% markdown %}

### Internationalization

This openSUSE release is the first to use [Weblate][weblate] to coordinate the translation of openSUSE into more than 50 languages. openSUSE's Weblate interface enables everyone (from dedicated translators to casual contributors) to take part in the process and makes it possible to coordinate the translations of openSUSE with the ones for SUSE Enterprise Linux, boosting collaboration between community and enterprise.

[weblate]: https://l10n.opensuse.org/

{% endmarkdown %}
</div>
</div>

## About the openSUSE Project

The openSUSE Project is a worldwide community that promotes the use of Linux everywhere. It creates two of the world's best Linux distributions, the Tumbleweed rolling-release, and Leap, the hybrid enterprise-community distribution. openSUSE is continuously working together in an open, transparent and friendly manner as part of the worldwide Free and Open Source Software community. The project is controlled by its community and relies on the contributions of individuals, working as testers, writers, translators, usability experts, artists and ambassadors or developers. The project embraces a wide variety of technology, people with different levels of expertise, speaking different languages and having different cultural backgrounds. Learn more about it on [opensuse.org][opensuse.org].

*This news was originally published by [Douglas DeMaio][douglas-demaio] at [news.opensuse.org][news.opensuse.org]. [Konqi sitting on KDE logo][konqi-wikimedia] art by [Tyson Tan][tyson-tan].*

[sle]:                      https://www.suse.com/products/server
[openvswitch]:              http://www.openvswitch.org/
[gnu-health]:               http://health.gnu.org/
[prelude-siem]:             https://www.prelude-siem.org/
[plasma-5.8.2]:             http://www.kde.org/announcements/plasma-5.8.2.php
[dev-to-production]:        https://www.youtube.com/watch?v=eVXDGnaYbKQ
[portal-snapper]:           https://en.opensuse.org/Portal:Snapper
[space-aware-cleanup]:      http://snapper.io/2016/05/18/space-aware-cleanup.html
[snapper]:                  http://snapper.io/
[poka-yoke]:                https://en.wikipedia.org/wiki/Poka-yoke
[tumbleweed]:               https://en.opensuse.org/Tumbleweed
[software.opensuse.org]:    http://software.opensuse.org/
[release-notes]:            https://doc.opensuse.org/release-notes/x86_64/openSUSE/Leap/42.2/
[opensuse-leap-42.1]:       https://en.opensuse.org/Portal:42.1
[upgrade]:                  http://en.opensuse.org/Upgrade
[arm-wiki]:                 https://en.opensuse.org/Portal:ARM
[opensuse.org]:             http://www.opensuse.org/
[douglas-demaio]:           https://news.opensuse.org/author/ddemaio/
[news.opensuse.org]:        https://news.opensuse.org/2016/11/16/optimal-release-for-linux-professionals-arrives-with-opensuse-leap-42-2/
[konqi-wikimedia]:          https://commons.wikimedia.org/wiki/File:Konqi_sitting_on_KDE_logo.png
[tyson-tan]:                http://tysontan.deviantart.com/art/Konqi-ver-2-494267237
