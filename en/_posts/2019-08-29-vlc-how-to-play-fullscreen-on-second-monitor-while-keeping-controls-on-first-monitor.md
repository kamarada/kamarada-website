---
date: 2019-08-31 11:00:00 GMT-3
image: '/files/2019/08/vlc-dual-monitor.jpg'
layout: post
published: true
nickname: 'vlc-dual-monitor'
title: 'VLC: how to play fullscreen on second monitor, while keeping controls on first monitor'
---
You connected your laptop to a projector. Now, you want to play a video fullscreen on the projector, but keeping playback controls on your laptop. Here you are going to see how you can achieve that using the [VLC media player][vlc].

In the post about [20 apps you can use the same way on both Linux and Windows][apps-linux-windows], I said that VLC is a Swiss Army knife multimedia player. That title is deserved: VLC has plenty of features and allows you to tweak every little detail.

Showing the audience just the video in fullscreen while hiding playback controls from them gives your presentation a more professional look.

## Joining displays

First, make sure that laptop and projector display different images. So, displays must be joined, not mirrored.

How to join displays depends on the desktop you use. Here, I'm going to focus on [GNOME], since is the one I use.

Open the **system menu**, by the upper-right corner of the screen, and click the **Settings** icon:

{% include image.html src="/files/2019/08/gnome-settings-en.jpg" %}

On the sidebar, click **Devices** (the last but one option). Then, click **Displays**:

{% include image.html src="/files/2019/08/gnome-dual-monitor-01-en.jpg" %}

Note that displays are identified by numbers. For me, the laptop display was identified as 1 and the projector as 2:

{% include image.html src="/files/2019/08/gnome-dual-monitor-02-en.jpg" %}

Under **Display Mode**, select **Join Displays**.

As **Primary Display**, choose **Built-in display** (the laptop display).

In case you haven't actually changed anything, now you can just close the window. If you have changed some setting, the **Apply** button will appear by the upper-right corner of the window. If that is the case, click that button.

Displays will blink. The new settings will be applied for 20 seconds. If you are satisfied with the new settings, click **Keep Changes**:

{% include image.html src="/files/2019/08/gnome-dual-monitor-03-en.jpg" %}

If you don't click it, your old settings will be automatically restored, so you can try again.

## Setting up VLC

Start VLC. Open the **Tools** menu and click **Preferences**:

{% include image.html src="/files/2019/08/vlc-settings-en.jpg" %}

The preferences dialog box opens with the first tab (**Interface**) selected. On this tab, disable the **Integrate video in interface** option:

{% include image.html src="/files/2019/08/vlc-dual-monitor-01-en.jpg" %}

Next, switch to the **Video** tab. Enable the **Fullscreen** option, disable the **Window decorations** option and on **Fullscreen Video Device**, select the projector (for me, it appears as **HDMI-1**):

{% include image.html src="/files/2019/08/vlc-dual-monitor-02-en.jpg" %}

Finally, click **Save**.

## Playing the video

Allright! Now you can just play the video. Playback controls will appear on the notebook and the video will show fullscreen on the projector:

{% include image.html src="/files/2019/08/vlc-dual-monitor.jpg" %}

## References

- [Connect another monitor to your computer - GNOME Help][gnome-help]
- [VLC 2.0.2 - Dual Monitor Full-Screen Playback In Windows - Inlet Technologies][inlet]

[vlc]:                  https://www.videolan.org/vlc/
[apps-linux-windows]:   {%post_url en/2019-07-20-20-apps-you-can-use-the-same-way-on-both-linux-and-windows-part-1 %}
[gnome]:                https://www.gnome.org/
[gnome-help]:           https://help.gnome.org/users/gnome-help/stable/display-dual-monitors.html.en
[inlet]:                http://inlet.co.nz/support/tutorials/microsoft/19-vlc-2-0-2-dual-monitor-full-screen-playback-in-windows
