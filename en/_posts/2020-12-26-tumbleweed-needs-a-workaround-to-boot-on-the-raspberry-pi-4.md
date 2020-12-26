---
date: '2020-12-26 14:00:00 GMT-3'
image: '/files/2020/12/rpi4b-tumbleweed-waiting-for-phy-auto-negotiation.jpg'
layout: post
published: true
nickname: 'rpi4b-tumbleweed-bug'
title: 'Tumbleweed needs a workaround to boot on the Raspberry Pi 4'
---

[openSUSE Tumbleweed][leap-vs-tumbleweed] works well on the [Raspberry Pi 4][rpi4b] (and also on the brand new [Raspberry Pi 400][raspberry-pi-400]), although [hardware support for it is still being developed][rpi4b-opensuse], so a few features such as Bluetooth and sound still don't work.&nbsp;

But recent Tumbleweed images for the Raspberry Pi 4 don't boot. The system keeps repeatedly saying: `Waiting for PHY auto negotiation to complete... TIMEOUT !`

{% include image.html src='/files/2020/12/rpi4b-tumbleweed-waiting-for-phy-auto-negotiation.jpg' %}

And reboots. The [GRUB] menu is not displayed.

I faced this problem while trying to boot the latest Tumbleweed [XFCE] image, based on snapshot 20201214. It does not happen with the latest Leap 15.2 XFCE image.

I asked for help on the [openSUSE ARM mailing list][opensuse-arm-1] and people pointed me to a workaround.

If you are a Tumbleweed user trying to boot your Raspberry Pi 4/400 and you are facing this problem as well, while it does not get definitively solved, you can download the `u-boot.bin` file from [here][u-boot-1] or from [here][u-boot-2] (I mirrored it) and replace the one in your SD card's EFI partition.

Doing that, you should be able to boot Tumbleweed on your Raspberry Pi 4/400 again.

This is [a known bug][bugzilla] and the [openSUSE] team is working to solve it.

## References

If you want to know more about the bug and its workaround, take a look at:

- [Tumbleweed 20201214 on RPi4 - Waiting for PHY auto negotiation to complete - openSUSE ARM - openSUSE Mailing Lists][opensuse-arm-1]
- [raspberry pi 400 - openSUSE ARM - openSUSE Mailing Lists][opensuse-arm-2]
- [Regression observed on Rasbperry Pi 4 with snapshot 20201214 - openSUSE ARM - openSUSE Mailing Lists][opensuse-arm-3]
- [Bug 1180338 — \[RPi4\] u-boot can't handle DMA addresses different from CPU's][bugzilla]

[leap-vs-tumbleweed]:   {% post_url en/2020-12-07-opensuse-leap-vs-opensuse-tumbleweed-what-is-the-difference %}
[rpi4b]:                {% post_url en/2019-09-29-getting-started-on-raspberry-pi-with-noobs-and-raspbian %}
[raspberry-pi-400]:     https://www.raspberrypi.org/blog/raspberry-pi-400-the-70-desktop-pc/
[rpi4b-opensuse]:       {% post_url en/2020-12-26-opensuse-on-the-raspberry-pi-4-part-1-downloading-and-installing %}
[grub]:                 https://www.gnu.org/software/grub/
[xfce]:                 https://www.xfce.org/
[opensuse-arm-1]:       https://lists.opensuse.org/archives/list/arm@lists.opensuse.org/thread/CWV5EK7ZPVLT2CH4LGP77UL3DRA4GDXM/
[u-boot-1]:             https://lists.opensuse.org/archives/list/arm@lists.opensuse.org/message/J2YM5M5TMWZC5DUYHU2YQ2KLS2BUH6LW/attachment/3/u-boot.bin
[u-boot-2]:             /files/2020/12/u-boot.bin
[bugzilla]:             https://bugzilla.suse.com/show_bug.cgi?id=1180338
[opensuse]:             https://www.opensuse.org/
[opensuse-arm-2]:       https://lists.opensuse.org/archives/list/arm@lists.opensuse.org/thread/QTYDOH45WSLGC4KKBTGK5YXMZZUHIXWC/#J2YM5M5TMWZC5DUYHU2YQ2KLS2BUH6LW
[opensuse-arm-3]:       https://lists.opensuse.org/archives/list/arm@lists.opensuse.org/thread/5BEWN672GVVCJCMPZTYC2QCNO7AMBS2Y/
