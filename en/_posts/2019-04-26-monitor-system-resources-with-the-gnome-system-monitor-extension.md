---
date: 2019-04-26 10:00:00 GMT-3
image: '/files/2019/04/gnome-extension-system-monitor-07-en.jpg'
layout: post
published: true
nickname: 'gnome-extension-system-monitor'
title: 'Monitor system resources with the GNOME System Monitor extension'
---

Are you the kind of user who consumes high memory? Browser with many tabs open, IDE, virtual machine, the [Android] emulator are some examples of programs which can drain your computer resources. How to monitor resources to avoid a system crash? If you use the [GNOME] desktop, you can install the [System Monitor][system-monitor] extension. How to do that is what you are going to see here.

<!--more-->

{% include image.html src="/files/2019/04/gnome-extension-system-monitor-01.jpg" caption="The GNOME System Monitor extension" style="max-width: 450px;" %}

The [GNOME] desktop environment focus on usability and essential features, has great stability and works flawlessly. On the other hand, it allows just a few customizations. Nothing that cannot be solved by the use of [extensions][gnome-extensions], which can be obtained from:

- [https://extensions.gnome.org/][gnome-extensions]

Some of the GNOME extensions are very useful. Today I'm going to show you how to install the System Monitor extension, which shows system information such as CPU and memory usage in graphics on an easy and quick place to look at — the GNOME top bar.

## Installing the GNOME extensions support

To customize GNOME with extensions, you are going to use the [**Tweaks**][tweaks] app (not to be confused with the [**Settings**][settings] app). If you use the [openSUSE] distribution with GNOME, that app is installed by default. In case you need, it is provided by the [gnome-tweak-tool] package.

Also there is a minimal set of extensions provided by the distribution itself in the [gnome-shell-extensions-common] package.

{% include image.html src="/files/2019/04/gnome-extension-system-monitor-02-en.jpg" caption="The Tweaks app showing installed extensions" %}

Besides that, if you have visited the GNOME extensions website, probably you have seen a message like this:

{% include image.html src="/files/2019/04/gnome-extension-system-monitor-03.jpg" caption="To control GNOME Shell extensions using this site you must install GNOME Shell integration that consists of two parts: browser extension and native host messaging application." %}

To install the browser extension, you can simply click the link presented by the message itself, or click one of the following links:

- for [Google Chrome][chrome], [Chromium], [Opera] and [Vivaldi]: visit the [Chrome Web Store][chrome-web-store];
- for [Mozilla Firefox][firefox]: visit the [Mozilla Addons][mozilla-addons] website.

The second part, which is the native host messaging application, is provided by the distribution too in the [chrome-gnome-shell] package.

To install all the needed packages at once, run the following command:

```
# zypper in gnome-tweak-tool gnome-shell-extensions-common chrome-gnome-shell typelib-1_0-GTop-2_0 typelib-1_0-NetworkManager-1_0
```

(since the intention is to install all at once, I included the [typelib-1_0-GTop-2_0][typelib1] and [typelib-1_0-NetworkManager-1_0][typelib2] packages, which are needed by the System Monitor extension, as we are going to see)

Everything installed, reboot your computer (maybe it is enough to just logout and login).

Launch your browser and visit the [GNOME Shell Extensions][gnome-extensions] website once more.

Note that message does not appear anymore.

Now you are ready to install and use GNOME extensions.

## Installing the System Monitor extension

To be able to monitor system resouces, the System Monitor extension requires that the [typelib-1_0-GTop-2_0][typelib1] and [typelib-1_0-NetworkManager-1_0][typelib2] packages are installed. Fortunately, we have already installed them.

Go to the extension page:

- [system-monitor - GNOME Shell Extensions][system-monitor]

And click the on/off toggle:

{% include image.html src="/files/2019/04/gnome-extension-system-monitor-04.jpg" %}

Confirm you want to download and install the extension by clicking **Install**:

{% include image.html src="/files/2019/04/gnome-extension-system-monitor-05-en.jpg" %}

Once it's installed, it already shows resource graphs on the GNOME top bar:

{% include image.html src="/files/2019/04/gnome-extension-system-monitor-06-en.jpg" %}

From left to right, they show:

- CPU usage,
- memory usage, and
- network traffic.

Click any of the graphs to see more info:

{% include image.html src="/files/2019/04/gnome-extension-system-monitor-07-en.jpg" %}

Click **Preferences** to customize what is shown and how:

{% include image.html src="/files/2019/04/gnome-extension-system-monitor-08-en.jpg" %}

I like to hide the network traffic monitor, leaving only the CPU and memory monitors.

In case you want to disable or remove that extension (as well as any other GNOME extension), use the **Tweaks** app.

Now you can monitor how much memory you are using and prevent being taken by surprise: when you reach low memory available, close programs to avoid a system crash.

Enjoy!

## References

- [How to Use GNOME Shell Extensions - Complete Guide - It's FOSS][itsfoss]
- [Projects/GnomeShellIntegrationForChrome/Installation - GNOME Wiki!][gnome-wiki]
- [paradoxxxzero/gnome-shell-system-monitor-applet - GitHub][github]

[android]:                          https://www.android.com/
[gnome]:                            https://www.gnome.org/
[system-monitor]:                   https://extensions.gnome.org/extension/120/system-monitor/
[gnome-extensions]:                 https://extensions.gnome.org/
[typelib1]:                         https://software.opensuse.org/package/typelib-1_0-GTop-2_0
[typelib2]:                         https://software.opensuse.org/package/typelib-1_0-NetworkManager-1_0
[tweaks]:                           https://wiki.gnome.org/Apps/Tweaks
[settings]:                         https://wiki.gnome.org/Design/Apps/Settings
[opensuse]:                         https://www.opensuse.org/
[gnome-tweak-tool]:                 https://software.opensuse.org/package/gnome-tweak-tool
[gnome-shell-extensions-common]:    https://software.opensuse.org/package/gnome-shell-extensions-common
[chrome-gnome-shell]:               https://software.opensuse.org/package/chrome-gnome-shell
[chrome]:                           https://www.google.com/chrome/
[chromium]:                         https://www.chromium.org/Home
[opera]:                            https://www.opera.com/
[vivaldi]:                          https://vivaldi.com/
[chrome-web-store]:                 https://chrome.google.com/webstore/detail/gnome-shell-integration/gphhapmejobijbbhgpjhcjognlahblep
[firefox]:                          https://www.mozilla.org/
[mozilla-addons]:                   https://addons.mozilla.org/firefox/addon/gnome-shell-integration/
[itsfoss]:                          https://itsfoss.com/gnome-shell-extensions/
[gnome-wiki]:                       https://wiki.gnome.org/Projects/GnomeShellIntegrationForChrome/Installation
[github]:                           https://github.com/paradoxxxzero/gnome-shell-system-monitor-applet
