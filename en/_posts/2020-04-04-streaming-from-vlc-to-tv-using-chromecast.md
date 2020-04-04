---
date: '2020-04-04 13:00:00 GMT-3'
layout: post
title: 'Streaming from VLC to TV using Chromecast'
image: '/files/2020/04/vlc-chromecast.jpg'
nickname: 'vlc-chromecast'
---

[VLC] is the default [Linux Kamarada][kamarada-15.1] multimedia player. I have already praised it a few times here for supporting various multimedia formats and having many nice features, it's really smart! Among those features, today I'm going to show you how to cast videos or music from VLC to TV via [Chromecast].

{% include image.html src='/files/2020/04/vlc-chromecast.jpg' %}

Chromecast is a small gadget created by [Google] that allows you to stream media content from your devices (smartphone, tablet or PC) to your TV screen via Wi-Fi. It turns simple TVs into smart TVs and eliminates the need for HDMI cables, which were previously used to connect things to TVs. Fewer cables, less mess, more convenience!

## Before we get started

Make sure your Chromecast device is ready to receive streams.

In case you haven't setup your Chromecast yet, use a mobile device with [Android] or [iOS] to set it up. If you need help on how to do that, take a look at:

- [Set up your Chromecast device - Chromecast Help][chromecast-help]

On your computer, you need to set up the firewall to allow the ports used by Chromecast to communicate with the computer. If you haven't done that already, see:

- [Streaming from Linux to TV using Chromecast][chromecast-howto]

Also, you must be using VLC version 3.0 or later, because the support for Chromecast on VLC arrived with the [release of VLC 3.0][vlc-3.0]. Linux Kamarada 15.1 comes out-of-the-box with VLC 3.0.7.

Finally, both your computer and Chromecast must be connected to the same local network (for instance, your home Wi-Fi).

## How to cast from VLC

Having the prerequisites met, casting from VLC to TV using Chromecast is simple.

To do this, start VLC, open the **Playback** menu and hover the mouse pointer on **Renderer**:

{% include image.html src='/files/2020/04/vlc-chromecast-01-en.jpg' %}

By default, VLC will have **Local** selected, meaning that it will play multimedia files on the computer itself. VLC searches the local network for casting compatible devices and lists them. If your Chromecast appears in the list, select it.

Now just open the multimedia file you want to play with VLC:

{% include image.html src='/files/2020/04/vlc-chromecast-02-en.jpg' %}

And streaming begins:

{% include image.html src='/files/2020/04/vlc-chromecast-03.jpg' %}

To control playback (pause, resume, stop, increase or decrease the sound volume, etc), you can use the playback controls on the VLC window or your TV's remote control.

## Troubleshooting

If your Chromecast device does not appear in the list of available renderers (it just shows **Scanning**):

{% include image.html src='/files/2020/04/vlc-chromecast-04-en.jpg' %}

Maybe your firewall is blocking VLC to connect to Chromecast. In this case, allow the ports used by Chromecast to make the connection possible. Here is how you can do it:

- [Streaming from Linux to TV using Chromecast][chromecast-howto]

Another possible reason is that your router is blocking [multicast DNS (mDNS)][mdns] packets, which are used to discover neighbor devices on the network. If you need help with this, contact your ISP support to check your router's configuration.

## Did you know?

The movie in the picture above is the first of the [Caminandes] trilogy, an independently produced short animated series made with [Blender], a [free and open source][foss] 3D creation suite. Just as Blender is open source, those movies are also [open movies][open-movies]: not only the movies themselves are available for download (for free and completely legal), but also are all the source files used to produce them.

You can download the movies (and the source) of the Caminandes trilogy at [www.caminandes.com][caminandes].

You can find other open movies of the [Blender Institute][blender-institute] at:

- [Open Projects - blender.org][blender-projects]

Have a lot of fun!

## References

- [How To Use VLC With Chromecast On Linux - AddictiveTips][addictivetips]
- [How To Connect Your Chromecast To VLC? - Stream From VLC To Chromecast - Fossbytes][fossbytes]
- [Unable to find chromecast with "Render" Stuck on "Scanning" - The VideoLAN Forums][videolan-forums]

[vlc]:                  https://www.videolan.org/vlc/
[kamarada-15.1]:        {% post_url en/2020-02-27-kamarada-15.1-comes-with-everything-you-need-to-use-Linux-everyday %}
[chromecast]:           https://store.google.com/product/chromecast
[google]:               https://www.google.com/
[android]:              https://www.android.com/
[ios]:                  https://www.apple.com/ios/
[chromecast-help]:      https://support.google.com/chromecast/answer/2998456
[chromecast-howto]:     {% post_url en/2019-04-01-streaming-from-linux-to-tv-using-chromecast %}
[vlc-3.0]:              https://www.videolan.org/vlc/releases/3.0.0.html
[mdns]:                 https://en.wikipedia.org/wiki/Multicast_DNS
[caminandes]:           http://www.caminandes.com/
[blender]:              https://www.blender.org/
[foss]:                 https://en.wikipedia.org/wiki/Free_and_open-source_software
[opensource]:           https://opensource.org/osd-annotated
[open-movies]:          https://en.wikipedia.org/wiki/Open-source_film
[blender-institute]:    https://www.blender.org/institute/
[blender-projects]:     https://www.blender.org/about/projects/
[addictivetips]:        https://www.addictivetips.com/ubuntu-linux-tips/use-vlc-with-chromecast-on-linux/
[fossbytes]:            https://fossbytes.com/connect-vlc-chromecast-stream-from-pc/
[videolan-forums]:      https://forum.videolan.org/viewtopic.php?t=145455
