---
date: 2019-05-09 21:40:00 GMT-3
image: '/files/2019/05/gnome-extension-user-themes-04-en.jpg'
layout: post
published: true
nickname: 'gnome-extension-user-themes'
title: 'Customize GNOME with themes'
---

Would you like to use a stylish desktop? Most people don't mind using the default look provided by the Linux distribution, but some people take customization very seriously. The [GNOME] desktop with its essential-features-only design doesn't seem to offer options to customize theming. But actually they are sort of hidden in the [**Tweaks**][tweaks] app and depend on the installation of a [GNOME extension][gnome-extensions], namely [User Themes][user-themes].

Let's see how we can turn our GNOME desktop into some serious eyecandy!

<!--more-->

{% include image.html src="/files/2016/10/sw-updates.jpg" style="max-width: 300px;" caption="Source: [OMG! Ubuntu!](http://www.omgubuntu.co.uk/2016/10/why-use-linux-answer-three-short-words)" %}

## Installing the GNOME extensions support

To customize GNOME using extensions, you need to install some things first, in case you haven't yet. I explained that in the previous post:

- [Monitor system resources with the GNOME System Monitor extension][system-monitor]

So here I'm going to just summarize what you need to do. In case you need more information, read that post.

Run the following command to install the needed packages:

```
# zypper in gnome-tweak-tool gnome-shell-extensions-common chrome-gnome-shell
```

And install the GNOME Extensions browser extension clicking one of the following links:

- for [Google Chrome][chrome], [Chromium], [Opera] and [Vivaldi]: visit the [Chrome Web Store][chrome-web-store];
- for [Mozilla Firefox][firefox]: visit the [Mozilla Addons][mozilla-addons] website.

Everything installed, reboot your computer (maybe it is enough to just logout and login).

## Installing the User Themes extension

In the [previous post][system-monitor] I also explained how to install GNOME extensions. There, I used [System Monitor][system-monitor] as example. Today, let's install the [User Themes][user-themes] extension.

Launch your browser and go to the extension page:

- [User Themes - GNOME Shell Extensions][user-themes]

Click the on/off toggle:

{% include image.html src="/files/2019/05/gnome-extension-user-themes-01.jpg" %}

Confirm you want to download and install the extension by clicking **Install** in the dialog box that appears.

## Downloading and installing themes

You can find many interesting themes for GNOME Shell, GTK3 and other kinds of arts to prettify your desktop at [Gnome-look.org][gnome-look].

As an example, I'm going to use [Yaru-Colors][yaru-colors], which is a fork of [Ubuntu]'s default theme [Yaru] ported to many different colors.

Let's make our [openSUSE] desktop look like a green Ubuntu!

Go to the theme page:

- [Yaru-Colors - Gnome-look.org][yaru-colors]

Select the **Files** tab and click the **Download** button for the `Yaru-MATE-1.0-manual.tar.gz` file:

{% include image.html src="/files/2019/05/gnome-extension-user-themes-02.jpg" %}

Now you have an archive named `Yaru-MATE-1.0-manual.tar.gz` in your `Downloads` folder.

Using the [**Terminal**][terminal] app, extract the archive contents and copy things to their places:

```
$ cd ~/Downloads
$ tar -xzvf Yaru-MATE-1.0-manual.tar.gz
$ mkdir -p ~/.local/share/{icons,themes}
$ cp -r Yaru-MATE/Icons/Yaru-Mate ~/.local/share/icons/
$ cp -r Yaru-MATE/Theme/* ~/.local/share/themes/
```

Installation instructions may differ from theme to theme. If you read Yaru-Colors description at [Gnome-look.org][yaru-colors], you are going to see it provides an installation script. I preferred the manual installation just to illustrate how the installation of a theme works.

## Applying themes

Once the theme was downloaded and installed, we can now apply it.

Open the **Tweaks** app.

Right in the first section, **Appearance**, choose **Yaru-MATE** as the **Shell** theme:

{% include image.html src="/files/2019/05/gnome-extension-user-themes-03-en.jpg" %}

Also change the **Applications** and **Icons** themes accordingly.

Notice that changes are applied immediately.

Now your desktop should look like this:

{% include image.html src="/files/2019/05/gnome-extension-user-themes-04-en.jpg" %}

## Installing themes from openSUSE repos

Some themes are available as packages on [openSUSE repositories][repos]. For instance, the [Adapta GTK theme][adapta] and the [Papirus icon theme][papirus]. Both are based on [Google]'s [Material Design][material], resemble [Android] and are the default themes used by the [Manjaro] Linux distribution.

Let's make our openSUSE desktop look like Manjaro! (or Android)

Install Adapta and Papirus packages running:

```
# zypper in gnome-shell-theme-adapta gtk2-metatheme-adapta gtk3-metatheme-adapta gedit-theme-adapta papirus-icon-theme
```

Open the **Tweaks** app. In the **Appearance** section, select:

- **Adapta** as **Applications** and **Shell** themes; and
- **Papirus** as the **Icons** theme.

Now your desktop should look like this:

{% include image.html src="/files/2019/05/gnome-extension-user-themes-05-en.jpg" %}

Looking at [Gnome-look.org][gnome-look], do you like any theme? Please tell me in the comments!

[gnome]:            https://www.gnome.org/
[tweaks]:           https://wiki.gnome.org/Apps/Tweaks
[gnome-extensions]: https://extensions.gnome.org/
[user-themes]:      https://extensions.gnome.org/extension/19/user-themes/
[system-monitor]:   {%post_url en/2019-04-26-monitor-system-resources-with-the-gnome-system-monitor-extension %}
[chrome]:           https://www.google.com/chrome/
[chromium]:         https://www.chromium.org/Home
[opera]:            https://www.opera.com/
[vivaldi]:          https://vivaldi.com/
[chrome-web-store]: https://chrome.google.com/webstore/detail/gnome-shell-integration/gphhapmejobijbbhgpjhcjognlahblep
[firefox]:          https://www.mozilla.org/
[mozilla-addons]:   https://addons.mozilla.org/firefox/addon/gnome-shell-integration/
[gnome-look]:       https://www.gnome-look.org/
[yaru-colors]:      https://www.gnome-look.org/p/1299514/
[ubuntu]:           https://www.ubuntu.com/
[yaru]:             https://github.com/ubuntu/yaru
[opensuse]:         https://www.opensuse.org/
[terminal]:         https://wiki.gnome.org/Apps/Terminal
[repos]:            https://en.opensuse.org/Package_repositories
[adapta]:           https://github.com/adapta-project/adapta-gtk-theme
[papirus]:          https://git.io/papirus-icon-theme
[google]:           https://www.google.com.br/
[material]:         https://material.io/
[android]:          https://www.android.com/
[manjaro]:          https://manjaro.org/
