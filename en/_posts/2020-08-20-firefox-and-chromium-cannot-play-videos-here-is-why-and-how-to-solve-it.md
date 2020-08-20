---
date: 2020-08-20 01:50:00 GMT-3
image: '/files/2020/08/firefox-video-01-en.jpg'
layout: post
published: true
nickname: 'firefox-chromium-videos'
title: 'Firefox and Chromium cannot play videos: here is why and how to solve it'
---

If you use either [Mozilla Firefox][firefox] or [Chromium], web browsers that come out-of-the-box with [Linux Kamarada 15.2 RC][kamarada-15.2-rc], you may have come across a video that they can't play. Error messages vary from site to site. Here are some examples:

{% include image.html src='/files/2020/08/firefox-video-01-en.jpg' caption='[Twitter](https://twitter.com/openSUSE/status/1290345568452202498): The media could not be played.' %}

{% include image.html src='/files/2020/08/chromium-video-01-en.jpg' caption="[Facebook](https://www.facebook.com/349474038443975/videos/2626269944056239/): Something Went Wrong. We&apos;re having trouble playing this video." %}

To put it shortly, this happens because your system is missing proprietary codecs. Today's tip probably can help you solve this problem.

In case you didn't know, Linux Kamarada is a [Linux] distribution based on [openSUSE Leap][leap-15.2], so the following tip also applies to [openSUSE]. Other distributions may present a similar problem and provide a similar way to solve it. If you use other distribution, check its documentation.

## How to solve this problem

For Linux Kamarada and openSUSE users, the solution to this problem boils down to:

1. Add the [Packman] repository, if you don't have it already added to your system;
2. Refresh the list of available packages from the online repositories; and
3. Update the system packages allowing [vendor change][vendor-change], that should cause some packages provided by openSUSE to be replaced by packages from Packman, which contains the missing proprietary codecs.

There are at least two ways to do this: through the graphical user interface, which can be more friendly especially for beginners, or through the command line interface.

### Solving via the command line interface

The command line solution involves the **[zypper]** package manager. As explaining it is shorter, I'm going to start by it.

Run the following 3 commands, which correspond to the 3 steps above respectively, as administrator (root user):

```
# zypper ar -cfp 90 http://ftp.gwdg.de/pub/linux/misc/packman/suse/openSUSE_Leap_15.2/ packman
# zypper ref
# zypper up --allow-vendor-change
```

### Solving via the graphical user interface

Although it is more user friendly, the GUI solution requires a few clicks and goes through more screens. But the easiness more than makes up for the longer path.

#### Adding the Packman repository

Start the [YaST Control Center][yast] by opening the **Activities** menu, on the top-left screen corner, typing `yast` and clicking the corresponding icon:

{% include image.html src='/files/2020/08/yast-packman-01-en.jpg' %}

Within the **Software** category (the first one), click **Software Repositories**:

{% include image.html src='/files/2020/08/yast-packman-02-en.jpg' %}

On the **Configured Software Repositories** screen, click the **Add** button:

{% include image.html src='/files/2020/08/yast-packman-03-en.jpg' %}

Select the **Community Repositories** option and click **Next**:

{% include image.html src='/files/2020/08/yast-packman-04-en.jpg' %}

Enable the **Packman Repository** and click **OK**:

{% include image.html src='/files/2020/08/yast-packman-05-en.jpg' %}

YaST itself takes care of refreshing the list of available packages from the repositories.

YaST asks for confirmation before importing the new repository's key, click **Trust**:

{% include image.html src='/files/2020/08/yast-packman-06-en.jpg' %}

Back to the **Configured Software Repositories** screen, click **OK** to close it.

#### Switching packages to the Packman repository

Back to the YaST main screen, click **Software Management**.

Open the **View** menu and click **Repositories**:

{% include image.html src='/files/2020/08/yast-packman-07-en.jpg' %}

By the left, select the **Packman Repository**, and by the right, click **Switch system packages**:

{% include image.html src='/files/2020/08/yast-packman-08-en.jpg' %}

Note that many already installed packages, provided by openSUSE, have been marked to be updated to versions provided by Packman. Click the **Accept** button:

{% include image.html src='/files/2020/08/yast-packman-09-en.jpg' %}

YaST warns you that additional packages are going to be installed, click **Continue**:

{% include image.html src='/files/2020/08/yast-packman-10-en.jpg' %}

YaST downloads and installs the packages:

{% include image.html src='/files/2020/08/yast-packman-11-en.jpg' %}

It can take more or less time depending on your Internet connection speed.

In the end, click **Finish** to close this window and then close YaST:

{% include image.html src='/files/2020/08/yast-packman-12-en.jpg' %}

## That's it!

When you are finished with the above procedures, restart your browser.

The videos that were not playing before can be played now:

{% include image.html src='/files/2020/08/firefox-video-02-en.jpg' %}

{% include image.html src='/files/2020/08/chromium-video-02-en.jpg' %}

## In case you want to know more

MP4 and H.264 have become common video formats on the web. Strictly speaking, [MP4] is a [container] format, which can store video tracks, audio tracks, embedded subtitles and other data in a single file. [H.264], in its turn, is a high definition video compression format, that is, it encodes just the visual data (the video itself) and requires a container (such as MP4) to host the encoded video. Most of the time, an "H.264 video file" is a file with the `.mp4` extension that contains a video track encoded with the H.264 [codec].

The problem is that the H.264 codec is not a [free software][free-sw]. It is a [proprietary software][proprietary-sw] licensed by the Moving Picture Experts Group Licensing Administration ([MPEG LA][mpeg-la]) and therefore cannot be provided by Linux distributions such as Linux Kamarada and openSUSE.

If you visit a website that has an H.264 video, but the H.264 codec is not installed on your system — and it is not installed by default on both openSUSE and Linux Kamarada — then the video will not be played, as I showed earlier in this text.

Fortunately, in the case of these two distros, there is the Packman repository that provides H.264 and other proprietary codecs in the form of packages that can be easily installed.

Note that this problem does not occur in the [Google Chrome][google-chrome] browser. [Google] probably made a commercial deal with MPEG LA to distribute the H.264 codec within Google Chrome.

### What about the OpenH264 plugin in Firefox?

If you use Firefox, you may have noticed that it has a plugin called "OpenH264 Video Codec", which is automatically installed:

{% include image.html src='/files/2020/08/firefox-openh264-en.jpg' %}

[OpenH264] is the name of [Cisco]'s implementation of the H.264 codec. Although it's [open source][opensource], it's not free software as well, since its binaries are released under a license from Cisco, which covers MPEG LA licensing fees to provide this codec for free. Therefore, they must be downloaded from Cisco.

[Mozilla] has partnered with Cisco so that Firefox can use OpenH264. When you use Firefox for the first time, it automatically downloads the OpenH264 plugin from Cisco and installs it.

OpenH264 implements only the most basic part of the H.264 format, the baseline profile, so it's used by Firefox only to support video calls such as those made using [WebRTC]. Examples of video calling services that depend on WebRTC include [Google Meet][google-meet], [Google Hangouts][google-hangouts], [Facebook Messenger][messenger] and [Discord].

Shortly, the Firefox OpenH264 plugin does not enable video playback, only video calls. I just wanted to clarify that.

## References

- [Twitter says "The media could not be played". \| Firefox Support Forum \| Mozilla Support][mozilla-questions]
- [SDB:Firefox MP4/H.264 Video Support - openSUSE Wiki][opensuse-wiki]
- [Information about the H.264 patent license - Free Software Foundation][h264-fsf]
- [Why is there an OpenH264 plugin in Firefox? \| Firefox Help][mozilla-kb]
- [\[opensuse-factory\] Status of x264 libraries in the standard distribution][opensuse-factory]
- [OpenH264 - Fedora Project Wiki][fedora]
- [MP4 vs H.264, difference between MP4 and H.264 format - iOrgsoft][iorgsoft]
- [10 Massive Applications Using WebRTC - BlogGeek.me][bloggeek]

[firefox]:              https://www.mozilla.org/firefox/
[chromium]:             https://www.chromium.org/
[kamarada-15.2-rc]:     {% post_url en/2020-08-08-linux-kamarada-15.2-enters-release-candidate-rc-phase %}
[linux]:                https://www.kernel.org/linux.html
[leap-15.2]:            {% post_url en/2020-07-02-opensuse-leap-15-2-release-brings-exciting-new-artificial-intelligence-ai-machine-learning-and-container-packages %}
[opensuse]:             https://www.opensuse.org/
[packman]:              http://packman.links2linux.com/
[vendor-change]:        https://en.opensuse.org/SDB:Vendor_change_update
[zypper]:               https://en.opensuse.org/Portal:Zypper
[yast]:                 http://yast.opensuse.org/
[mp4]:                  https://en.wikipedia.org/wiki/MP4
[container]:            https://en.wikipedia.org/wiki/Container_format_(computing)
[h.264]:                https://en.wikipedia.org/wiki/H.264
[codec]:                https://en.wikipedia.org/wiki/Codec
[free-sw]:              https://www.gnu.org/philosophy/free-sw.html
[proprietary-sw]:       https://en.wikipedia.org/wiki/Proprietary_software
[mpeg-la]:              https://www.mpegla.com/
[google-chrome]:        https://www.google.com/chrome/
[google]:               https://www.google.com/
[openh264]:             http://www.openh264.org/
[cisco]:                https://www.cisco.com/
[opensource]:           https://opensource.org/osd-annotated
[mozilla]:              https://www.mozilla.org/
[webrtc]:               https://webrtc.org/
[google-meet]:          https://meet.google.com/
[google-hangouts]:      https://hangouts.google.com/
[messenger]:            https://www.messenger.com/
[discord]:              https://discord.com/
[mozilla-questions]:    https://support.mozilla.org/en-US/questions/1188176
[opensuse-wiki]:        https://en.opensuse.org/SDB:Firefox_MP4/H.264_Video_Support
[h264-fsf]:             https://www.fsf.org/licensing/h264-patent-license
[mozilla-kb]:           https://support.mozilla.org/en-US/kb/open-h264-plugin-firefox
[opensuse-factory]:     https://lists.opensuse.org/opensuse-factory/2018-02/msg00846.html
[fedora]:               https://fedoraproject.org/wiki/OpenH264
[iorgsoft]:             http://www.iorgsoft.com/compare/mp4-vs-h.264-comparison.html
[bloggeek]:             https://bloggeek.me/massive-applications-using-webrtc/
