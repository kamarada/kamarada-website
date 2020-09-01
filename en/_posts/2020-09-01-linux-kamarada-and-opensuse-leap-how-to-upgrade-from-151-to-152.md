---
date: '2020-09-01 10:30:00 GMT-3'
layout: post
published: true
title: 'Linux Kamarada and openSUSE Leap: how to upgrade from 15.1 to 15.2'
image: /files/2020/08/upgrade-to-15.2.jpg
nickname: 'upgrade-to-15.2'
---

{% include image.html src="/files/2020/08/upgrade-to-15.2.jpg" %}

If you've been following this website for a while now, you've already seen some how-tos explaining how to upgrade [openSUSE Leap][opensuse-leap] from one release to the next. In this edition, we have a first-timer: it's the first how-to that also shows how to upgrade [Linux Kamarada][kamarada-15.2-rc], which, in case you didn't know it yet, is an openSUSE Leap based [Linux] distribution.

Linux Kamarada [was released in February][kamarada-15.1] with its first release being numbered as 15.1, aligned with the upstream [openSUSE Leap 15.1][leap-15.1], then the latest release. Today, the latest openSUSE Leap is [15.2, released in July][leap-15.2]. Linux Kamarada 15.2 is going to be released in the next few days. For now, it is in [release candidate][kamarada-15.2-rc] stage, which has good stability already. In my tests, upgrading Linux Kamarada from 15.1 Final to 15.2 RC went flawlessly.

Since development is not finished yet, I don't recommend upgrading to Linux Kamarada 15.2 to all users yet. But, if you feel "adventurous" enough and want to help in development, please feel free to test the upgrade procedure and report the problems you face, if any.

Upgrading from one openSUSE Leap release to the next is an easy and safe procedure. I always repeat the steps I learned reading the [openSUSE wiki][system-upgrade]. It's quite the same recipe since 2012, when I started using openSUSE. As Linux Kamarada is based on openSUSE Leap, upgrading it is done the same way, there is just one additional repository to setup.

If you are curious to check out previous editions of this how-to, here they are:

- [How to upgrade from openSUSE Leap 42.1 to 42.2][upgrade-to-42.2]
- [How to upgrade from openSUSE Leap 42.2 to 42.3][upgrade-to-42.3]
- There was no how-to showing how to upgrade from 42.3 to 15.0
- [How to upgrade from openSUSE Leap 15.0 to 15.1][upgrade-to-15.1]

In this post, you are going to see how to upgrade openSUSE Leap and Linux Kamarada from 15.1 to 15.2.

**Note:** not to be repetitive, what I say about openSUSE Leap applies to both distributions, when I mention Linux Kamarada I'm talking specifically about it.

## A few recommendations

Upgrading openSUSE is a safe procedure, which should work for most cases, but requires some cautions. It is always good to remember the following recommendations.

**You must be using the immediately previous openSUSE Leap release.** It means that if you want to upgrade to 15.2, now you must be using 15.1. Hopping over one or more releases is not supported. It may work, but that is not guaranteeded. So if you use openSUSE Leap 15.0 now, for example, you should first upgrade to 15.1, and then to 15.2.

**Your openSUSE Leap installation must be up to date** with the latest updates for the release you are currently running. There are differences between upgrading and updating. Here, you are going to see how to upgrade, but you may need to update first. For more information about those differences and how to update openSUSE Leap, please read:

- [How to get updates for openSUSE Linux][howto-update]

**You should read about the openSUSE Leap release you are going to install.** Take a look at the [release notes][release-notes], which list changes and glitches in the new release.

**You must backup all important data.** Even though upgrading openSUSE is a safe procedure (that resembles upgrading [Debian], for those who know it), it is not perfect. Winning the lottery is difficult, but eventually someone wins. Something may go wrong during upgrade, although it is difficult, especially if you act cautiosly. I myself have been using openSUSE for some years now, and always have upgraded from one release to the next without a problem. Anyway, it never hurts to make a backup of your personal files as a precaution, especially if the `/home` directory is not on a dedicated partition. If the computer is one that should not be down for long (a server, for example), consider backing up the entire system, so you will be able to restore it immediately if something does not work as expected.

**You should not use third party repositories during upgrade.** Before upgrading, we are going to remove all [third party repositories][third-party-repos]. Doing that may cause third party software to be removed during upgrade. If that happens, you may try to reinstall it later. It is not that you cannot upgrade with third party repositories enabled, but using only the [official repositories][official-repos] is more guaranteed. That way, the base system will be upgraded to a new stable, solid and reliable base. Then, on top of that base, you can install whatever you want. Do differently only if you know what you are doing.

I also recommend that you read this entire how-to before you start. I'm going to break the upgrade process down into 6 steps for better understading. Once you know the whole process, you will be able to better schedule it. You can even use your computer as normal while you follow the step by step, but after you start actually upgrading, your computer will become usable again only after upgrading is completed.

## 1) Update your current system

Make sure your current openSUSE Leap installation is up to date. To do this:

- if you update your system using the GUI, open the Package Updater app, it should inform you the system is completely up to date:

{% include image.html src="/files/2020/08/upgrade-to-15.2-01-en.jpg" %}

- if you update your system using the CLI, run `zypper up` as the root (administrator) user, it should inform you there is "nothing to do":

{% include image.html src="/files/2020/08/upgrade-to-15.2-02-en.jpg" %}

If you need more information on how to update your system, please read:

- [How to get updates for openSUSE Linux][howto-update]

## 2) Backup your current repositories

Actually, this step is optional.

You may want to back up your current list of repositories to return them after upgrading. openSUSE Leap saves repository settings in the `/etc/zypp/repos.d` folder. It has some text files, one for each repository.

Let's copy the `repos.d` folder, in `/etc/zypp/`, to another one in the same place, called `repos.d.old`. It is easier to use the CLI for that.

Enter the CLI and switch to the root user, if you haven't done that yet:

```
$ su
```

Enter the root password to continue.

If you have already upgraded following any previous edition of this same tutorial, you may still have the old backup. If that is the case, remove the existing `repos.d.old` folder:

```
# rm -rf /etc/zypp/repos.d.old
```

Then, order the copy:

```
# cp -Rv /etc/zypp/repos.d /etc/zypp/repos.d.old
```

{% include image.html src="/files/2020/08/upgrade-to-15.2-03-en.png" %}

If you have not made a backup of your data yet, consider doing that now.

## 3) Clean up repositories

As already mentioned, for upgrade we use only the official repositories. To be more precise, just two of them, in the case of openSUSE Leap:

- **Main Repository**: the main repository, contains [open source software][oss] only.

URL (for 15.1): [http://download.opensuse.org/distribution/leap/15.1/repo/oss/](http://download.opensuse.org/distribution/leap/15.1/repo/oss/)

- **Main Update Repository**: contains official updates for OSS packages.

URL (for 15.1): [http://download.opensuse.org/update/leap/15.1/oss/](http://download.opensuse.org/update/leap/15.1/oss/)

For **Linux Kamarada,** besides the above repos, we'll also use the official Linux Kamarada repo, which is kindly hosted by [OSDN] mirrors in several countries. Users in Brazil are advised to use the [C3SL] mirror. The international edition of the Linux Kamarada live image uses a mirror I picked at random from the [list of OSDN mirrors][mirrors].

URL (for 15.1): [https://osdn.mirror.constant.com/storage/g/k/ka/kamarada/15.1/openSUSE_Leap_15.1/](https://osdn.mirror.constant.com/storage/g/k/ka/kamarada/15.1/openSUSE_Leap_15.1/)

If you are in another country, check the [list of mirrors on the Linux Kamarada wiki on GitHub][mirrors].

Let's clean up our repositories removing any repository we won't need (including any third party repositories).

Start the [YaST Control Center][yast] by opening the **Activities** menu, on the top-left screen corner, typing `yast` and then clicking the corresponding icon:

{% include image.html src="/files/2020/08/upgrade-to-15.2-04-en.jpg" %}

You will be asked the root password. Type it and click **Continue**:

{% include image.html src="/files/2020/08/upgrade-to-15.2-05-en.png" %}

Within the **Software** category (the first one), click **Software Repositories**:

{% include image.html src="/files/2020/08/upgrade-to-15.2-06-en.png" %}

You are presented to your system's repository list:

{% include image.html src="/files/2020/08/upgrade-to-15.2-07-en.jpg" %}

For each repository other than the ones listed above, select the repository from the list and click **Delete**. YaST asks you for confirmation. Click **Yes**:

{% include image.html src="/files/2020/08/upgrade-to-15.2-08-en.jpg" %}

Do that with all repositories, until the list has only the repositories listed above:

{% include image.html src="/files/2020/08/upgrade-to-15.2-09-en.jpg" %}

Maybe those repositories are named differently on your system. If that is the case, try to recognize them by their [URL] instead of their name. If you don't find them, there is no problem: delete all repositories and just add the new ones in the next step.

## 4) Switch to the new repositories

Now let's move to the new release's repositories.

In this edition of the upgrading how-to, we have another new interesting thing: the `$releasever` variable, which is substituted by the current distribution version. It has been available on openSUSE [for a while][opensuse-list], it's a pity that I only discovered it recently, otherwise I would have used it on Linux Kamarada 15.1... but that's ok, as I wrote when [the first beta was released almost 1 year ago][kamarada-15.1-beta], Linux Kamarada is a project about constantly learning and improving. Now that I'm aware of this feature, it is used by default on 15.2.

Select the **Main Repository** and click **Edit**.

If the **URL of the Repository** already contains the `$releasever` variable, you don't need to change anything, just click **OK**. If you see the distribution version (currently 15.1) in any part of the URL, replace that version number with `$releasever` and then click **OK**:

{% include image.html src="/files/2020/08/upgrade-to-15.2-10-en.jpg" %}

Do the same for the other repositories.

In the case of **Linux Kamarada**, `15.1` is going to be replaced by `$releasever` twice:

{% include image.html src="/files/2020/08/upgrade-to-15.2-11-en.jpg" %}

At the end, your system's repository list should look like this:

{% include image.html src="/files/2020/08/upgrade-to-15.2-12-en.jpg" %}

Click **OK** to save changes. You can close YaST.

## 5) Download packages

We can start downloading the packages of the new openSUSE Leap release.

Back to the CLI, retrieve the list of available packages from the new repositories (observe that we use the `--releasever` option to indicate the use of the new version):

```
# zypper --releasever=15.2 ref
```

Then, run:

```
# zypper --releasever=15.2 dup --download-only
```

(`dup` is an acronym for *distribution upgrade*):

{% include image.html src="/files/2020/08/upgrade-to-15.2-13-en.jpg" %}

The **[zypper]** package manager spends some time "thinking". Soon after, it shows what it needs to do in order to upgrade openSUSE Leap to the next release.

It is possible that it needs to [change the vendor][vendor-change] of some packages, as in the image below:

{% include image.html src="/files/2020/08/upgrade-to-15.2-14-en.jpg" %}

If this happens, carefully read the presented options and choose the one that suggests the **vendor change**. In the example above, it would be **Solution 1**. So, you would type `1` and hit **Enter**.

**zypper** lists the changes it's going to make to the system (which packages are going to be upgraded, which ones are going to be removed, which ones are going to change vendor, etc.) and asks if you want to continue:

{% include image.html src="/files/2020/08/upgrade-to-15.2-15-en.jpg" %}

That list of actions is similar to that produced by `zypper up`, presented in the [how-to about updating][howto-update]. However, as we are now doing a distribution upgrade, and not an ordinary update, the list of what is needed to be done is much bigger.

Review that list carefully. You can go up or down using the scrollbar at the right of the window or the mouse wheel (scroll wheel) if you are using Terminal, or the **Shift + Page Up** / **Shift + Page Down** key combinations if you are using a purely textual interface (they also work in Terminal).

The default option is to continue (**y**). If you agree, you can just hit **Enter** and downloading of the new packages will start. Meanwhile, you can use your computer normally. The upgrade itself has not started yet.

Note that **zypper** only downloads packages, it does not start upgrading:

{% include image.html src="/files/2020/08/upgrade-to-15.2-16-en.jpg" %}

That's because we invoked it with the `--download-only` option.

Finish what you are doing and save any open files so we can start upgrading. Note that upgrading may take several minutes and you will be able to continue using your computer only after it is complete.

## 6) Upgrade your system

Now that we have already downloaded all the packages needed to upgrade our openSUSE Leap from 15.1 to 15.2, we need to leave the desktop environment and use the pure textual interface to perform the upgrade. Here on, you cannot use Terminal.

That is necessary because the desktop itself will be upgraded. If we run the upgrade while still using the desktop, it may stop/crash, causing the upgrade to abort, which in turn lefts the system in an inconsistent, unpredictable state.

Consider opening this page on another computer (or on a mobile device), print it or take note of the next actions.

If you are upgrading a laptop system, make sure its battery is fully charged and its AC adapter is plugged in. Do not remove the battery or unplug the AC adapter during the upgrade. We want to prevent any possibility of problem.

Logout by opening the **system menu**, on the right side of the top bar, clicking on your username and then choosing **Log Out**:

{% include image.html src="/files/2020/08/upgrade-to-15.2-17-en.jpg" %}

You are presented to the login screen where you could enter your username and password to start a new desktop session:

{% include image.html src="/files/2020/08/upgrade-to-15.2-18-en.jpg" %}

But that's not what we want. Press the **Ctrl + Alt + F1** key combination to switch to a purely textual interface:

{% include image.html src="/files/2020/08/upgrade-to-15.2-19.png" %}

If that was new to you, know that Linux provides six [consoles][terminal] (terminals) besides the graphical interface. You can use the keys F1 to F6 in that same combination (**Ctrl + Alt + F1**, **Ctrl + Alt + F2** and so on) to switch between consoles, pressing **Ctrl + Alt + F7** you can return to the graphical interface.

But let's stand on the first console.

Login as root. To do that, type `root` and hit **Enter**, then enter the root password and hit **Enter** again.

Let's switch from [runlevel] 5, the default runlevel, in which the system provides the GUI, to the runlevel 3, in which we have only the CLI and network connection.

To [change to runlevel][switch-runlevel] 3, run:

```
# init 3
```

Finally, we are going to start the distribution upgrade itself. Run (mind the `--releasever` option):

```
# zypper --no-refresh --releasever=15.2 dup
```

{% include image.html src="/files/2020/08/upgrade-to-15.2-20.png" %}

The `--no-refresh` option makes **zypper** not retrieve the list of packages from repositories. Using that option, we ensure that **zypper** won't try to download any package in addition to those we have already downloaded. That can be useful especially for laptops, which may lose the Wi-Fi connection when leaving the GUI.

As before, **zipper** is going to compute the upgrade and show what it is going to do (if it asks the same questions about changing vendors, answer them the same way as before):

{% include image.html src="/files/2020/08/upgrade-to-15.2-21-en.png" %}

Note that all the needed packages have already been downloaded: at the end, **zypper**'s report shows "Overall download size: 0 B. Already cached: 1.93 GiB."

Just hit **Enter** to start upgrading.

**zypper** skips downloading packages and goes straight to upgrading:

{% include image.html src="/files/2020/08/upgrade-to-15.2-22-en.png" %}

Distribution upgrade may take several minutes.

When it finishes, **zypper** suggests to restart. Let's do that by running:

```
# reboot
```

{% include image.html src="/files/2020/08/upgrade-to-15.2-23-en.png" %}

## That's it! Have a lot of fun!

If you did everything up to here, now your computer is running Linux Kamarada 15.2 (or openSUSE Leap 15.2).

You can see the [GRUB] menu, the one that allows you to choose which operating system to boot when the computer turns on (useful especially if you have [Windows] and Linux installed on the same machine), is already different:

{% include image.html src="/files/2020/08/upgrade-to-15.2-24.png" %}

And *voilà*! Linux Kamarada 15.2 (or openSUSE Leap 15.2) is installed and ready for use!

{% include image.html src="/files/2020/08/upgrade-to-15.2-25-en.jpg" %}

Make sure everything is in place.

Now you may return any repositories you removed. Remember to make the appropriate adjustments with respect to the openSUSE Leap version, replacing it by `$releasever` where it appears. It's easy to do that using the CLI:

```
# sed -i 's/15.1/$releasever/g' /etc/zypp/repos.d.old/*
# mv /etc/zypp/repos.d.old/* /etc/zypp/repos.d/
```

That done, you can delete your repositories backup:

```
# rm -rf /etc/zypp/repos.d.old/
```

You may also try to install any program that perhaps has been removed during the upgrade.

Remember to regularly [check for updates][howto-update] for your new distribution. Note that, after upgrading, the daily use of **zypper** does not require you to use the `--releasever` option .

If you find any difficulty during the upgrade or have any questions, don't hesitate to comment!

[opensuse-leap]:        https://en.opensuse.org/Portal:Leap
[kamarada-15.2-rc]:     {% post_url en/2020-08-08-linux-kamarada-15.2-enters-release-candidate-rc-phase %}
[linux]:                https://www.kernel.org/linux.html
[kamarada-15.1]:        {% post_url en/2020-02-27-kamarada-15.1-comes-with-everything-you-need-to-use-Linux-everyday %}
[leap-15.1]:            {% post_url en/2019-05-22-opensuse-community-releases-leap-15-1-version %}
[leap-15.2]:            {% post_url en/2020-07-02-opensuse-leap-15-2-release-brings-exciting-new-artificial-intelligence-ai-machine-learning-and-container-packages %}
[system-upgrade]:       https://en.opensuse.org/SDB:System_upgrade
[upgrade-to-42.2]:      {% post_url en/2016-10-31-how-to-upgrade-from-opensuse-leap-421-to-422 %}
[upgrade-to-42.3]:      {% post_url en/2017-08-03-how-to-upgrade-from-opensuse-leap-422-to-423 %}
[upgrade-to-15.1]:      {% post_url en/2019-05-27-how-to-upgrade-from-opensuse-leap-150-to-151 %}
[howto-update]:         {% post_url en/2019-05-20-how-to-get-updates-for-opensuse-linux %}
[release-notes]:        https://doc.opensuse.org/release-notes/x86_64/openSUSE/Leap/15.2/
[debian]:               https://www.debian.org/
[third-party-repos]:    https://en.opensuse.org/Additional_package_repositories
[official-repos]:       https://en.opensuse.org/Package_repositories#Official_Repositories
[oss]:                  https://opensource.org/osd-annotated
[osdn]:                 https://osdn.net/
[c3sl]:                 https://www.c3sl.ufpr.br/
[mirrors]:              https://github.com/kamarada/Linux-Kamarada-GNOME/wiki/Mirrors
[yast]:                 http://yast.opensuse.org/
[url]:                  https://en.wikipedia.org/wiki/Uniform_Resource_Locator
[opensuse-list]:        https://lists.opensuse.org/opensuse/2015-01/msg00413.html
[kamarada-15.1-beta]:   {% post_url en/2019-09-13-first-beta-release-of-the-kamarada-linux-distribution %}
[zypper]:               https://en.opensuse.org/Portal:Zypper
[vendor-change]:        https://en.opensuse.org/SDB:Vendor_change_update
[terminal]:             http://opensuse-guide.org/command.php
[runlevel]:             https://en.wikipedia.org/wiki/Runlevel
[switch-runlevel]:      https://en.opensuse.org/SDB:Switch_runlevel
[grub]:                 https://www.gnu.org/software/grub/
[windows]:              https://www.microsoft.com/windows/
