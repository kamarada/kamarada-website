---
date: '2019-05-27 00:30:00 GMT-3'
layout: post
published: true
title: 'How to upgrade from openSUSE Leap 15.0 to 15.1'
image: /files/2019/05/howto-upgrade-to-15.1-00-en.png
nickname: 'howto-upgrade-to-15.1'
excerpt: "The latest openSUSE Leap release, 15.1, has been made generally available this past Wednesday, May 22. Users of the previous release, 15.0, are now able to upgrade. If you are a newcome user and havent’t upgraded openSUSE yet, you are going to realize it is an easy and safe procedure. In this post, you are going to see how to upgrade your openSUSE Leap installation from 15.0 to 15.1."
---

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-00-en.png" caption="openSUSE Leap 15.1 is now available" %}

The latest [openSUSE Leap][opensuse-leap] release, 15.1, [has been made generally available this past Wednesday, May 22][opensuse-leap-15.1]. Users of the previous release, 15.0, are now able to upgrade.

If you are a newcome user and havent't upgraded openSUSE yet, you are going to realize it is an easy and safe procedure. It has been basically the same since I started using openSUSE. You can verify that yourself comparing previous posts:

- [How to upgrade from openSUSE Leap 42.1 to 42.2][howto-upgrade-to-42.2]
- [How to upgrade from openSUSE Leap 42.2 to 42.3][howto-upgrade-to-42.3]
- There was no post showing how to upgrade from 42.3 to 15.0

In this post, you are going to see how to upgrade your openSUSE Leap installation from 15.0 to 15.1. The step by step I present here is based on the openSUSE wiki's page [SDB:System upgrade][system-upgrade], whose instructions I followed to upgrade my system.

## A few notes

Upgrading openSUSE is a safe procedure, which should work for most cases, but requires some cautions.

**You must be using the immediately previous openSUSE release.** It means that if you want to upgrade to 15.1, now you must be using 15.0. Hopping over one or more releases is not supported. It may work, but that is not guaranteeded. So if you use openSUSE Leap 42.3 now, for example, you should first upgrade to 15.0, and then to 15.1.

**Your openSUSE installation must be up to date** with the latest updates for the release you are currently running. There are differences between upgrading and updating. Here, you are going to see how to upgrade, but you may need to update first. For more information about those differences and how to update openSUSE, please read:

- [How to get updates for openSUSE Linux][howto-update]

**You should read about the openSUSE release you are going to install.** Take a look at the [release notes][release-notes], which list changes and glitches in the new release.

**You must backup all important data.** Even though upgrading openSUSE is a safe procedure (that resembles upgrading [Debian][debian], for those who know it), it is not perfect. Winning the lottery is difficult, but eventually someone wins. Something may go wrong during upgrade, although it is difficult, especially if you act cautiosly. I myself have been using openSUSE for some years now, and always have upgraded from one release to another without a problem. Anyway, it never hurts to make a backup of your personal files as a precaution, especially if the `/home` directory is not on a dedicated partition. If the computer is one that should not be down for long (a server, for example), consider backing up the entire system, so you will be able to restore it immediately if something does not work as expected.

**You should not use third party repositories during upgrade.** Before upgrading, we are going to remove all [third party repositories][third-party-repos]. Doing that may cause third party software to be removed during upgrade. If that happens, you may try to reinstall it later. It is not that you cannot upgrade with third party repositories enabled, but using only the [official repositories][official-repos] is more guaranteed. That way, the base system will be upgraded to a new stable, solid and reliable base. Then, on top of that base, you can install whatever you want. Do different only if you know what you are doing.

I also recommend that you read this entire page before you start. I'm going to break the upgrade process down into 6 steps for better understading. Once you know the whole process, you will be able to better schedule it. You can even use your computer as normal while you follow the step by step, but after you start actually upgrading, your computer will become usable again only after upgrading is completed.

## 1) Update your current system

Make sure your current openSUSE Leap 15.0 installation is up to date. To do that:

- if you update your system using the GUI, open the Package Updater app, it should inform you the system is completely up to date:

{% include image.html src="/files/2019/05/howto-update-05-en.jpg" %}

- if you update your system using the CLI, run `zypper up` as root, it should inform you there is "nothing to do":

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-01-en.jpg" %}

If you need more information on how to update your system, please read:

- [How to get updates for openSUSE Linux][howto-update]

## 2) Backup your current repositories

Actually, this step is optional.

You may want to back up your current list of repositories to return them after upgrading. openSUSE saves repository settings in the `/etc/zypp/repos.d` folder. It has some text files, one for each repository.

Let's copy the `repos.d` folder, in `/etc/zypp/`, to another one in the same place, called `repos.d.old`. It is easier to use the CLI for that.

Enter the CLI and switch to the root user, if you haven't done that yet:

```
$ su
```

Enter the root password to continue.

If you have already upgraded following any of our tutorials, you may still have the old backup. If that is the case, remove the existing `repos.d.old` folder:

```
# rm -rf /etc/zypp/repos.d.old
```

Then, order the copy:

```
# cp -Rv /etc/zypp/repos.d /etc/zypp/repos.d.old
```

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-02-en.jpg" %}

If you have not made a backup of your data yet, consider doing that now.

## 3) Clean up repositories

As already mentioned, for upgrade we use only the official repositories. To be more precise, just two of them:

- **openSUSE-Leap-15.1-OSS**: the main repository, contains [open source software][oss] only.

URL: [http://download.opensuse.org/distribution/leap/15.1/repo/oss/](http://download.opensuse.org/distribution/leap/15.1/repo/oss/)

- **openSUSE-Leap-15.1-Update**: contains official updates for OSS packages.

URL: [http://download.opensuse.org/update/leap/15.1/oss/](http://download.opensuse.org/update/leap/15.1/oss/)

Let's clean up our repositories removing any repository we won't need (including any third party repositories).

Start the YaST Control Center by opening the **Activities overview**, typing `yast` and then clicking on **YaST**'s icon:

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-03-en.jpg" %}

You will be asked the root password. Type it and click on **Continue**:

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-04-en.jpg" %}

Select the **Software** category, then click on **Software Repositories**:

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-05-en.jpg" %}

You are presented to your system's repository list:

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-06-en.jpg" %}

For each repository that is neither **openSUSE-Leap-15.0-OSS** nor **openSUSE-Leap-15.0-Update**, select it in the list and click on **Delete** (no typo, we are managing the repositories your system still uses, the ones for 15.0, we are going to switch to the new ones soon).

YaST will ask you for confirmation. Click on **Yes**:

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-07-en.jpg" %}

Do that with all repositories, until the list has only **openSUSE-Leap-15.0-OSS** and **openSUSE-Leap-15.0-Update**:

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-08-en.jpg" %}

Maybe those repositories are named differently on your system. If that is the case, try to recognize them by their [URL][url] instead of their name. If you don't find them, there is no problem: delete all repositories and just add the new ones in the next step.

## 4) Switch to the new repositories

Now let's move to the new release's repositories.

Select the **openSUSE-15.0-Leap-OSS** repository and click on **Edit**.

Replace `15.0` by `15.1` where necessary and click on **OK**:

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-09-en.jpg" %}

Do the same for the **openSUSE-Leap-15.0-Update** repository.

At the end, your system's repository list should look like this:

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-10-en.jpg" %}

Click on **OK** to save changes. You can close YaST.

## 5) Download packages

We can start downloading the packages of the new openSUSE release.

Back to the CLI, retrieve from the Internet the list of available packages on the new repositories:

```
# zypper ref
```

Then, run:

```
# zypper dup --download-only
```

(`dup` is an acronym for *distribution upgrade*):

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-11-en.jpg" %}

**zypper** spends some time "thinking". Soon after, it shows what it needs to do in order to upgrade openSUSE to the next release and asks if you want to continue:

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-12-en.jpg" %}

That list of actions is similar to that produced by `zypper up`, presented in the [post about updating][howto-update]. However, as we are now doing a distribution upgrade, and not an ordinary update, the list of what is needed to be done is much bigger.

Review that list carefully. You can go up or down using the scrollbar at the right of the window or the mouse wheel (scroll wheel) if you are using Terminal, or the **Shift + Page Up** / **Shift + Page Down** key combinations if you are using a purely textual interface (they also work in Terminal).

The default option is to continue (**s**). If you agree, you can just hit **Enter** and downloading of the new packages will start. Meanwhile, you can use your computer normally. The upgrade itself has not started yet.

Note that **zypper** only downloads packages, it does not start upgrading:

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-13-en.jpg" %}

That's because we invoked it with the `--download-only` option.

Finish what you are doing and save any open files so we can start upgrading. Note that upgrading may take several minutes and you will be able to continue using your computer only after it is complete.

## 6) Upgrade your system

Now that we have already downloaded all the packages needed to update our openSUSE Leap 15.0 to 15.1, we need to leave the desktop environment and use the pure textual interface to perform the upgrade. Here on, you cannot use Terminal.

That is necessary because the desktop itself will be upgraded. If we run the upgrade while still using the desktop, it may stop/crash, causing the upgrade to abort, which in turn lefts the system in an inconsistent, unpredictable state.

Consider opening this page on another computer (or on a mobile device), print it or take note of the next actions.

If you are upgrading a laptop system, make sure its battery is fully charged and its AC adapter is plugged in. Do not remove the battery or unplug the AC adapter during the upgrade. We want to prevent any possibility of problem.

Logout by opening the **system menu**, on the right side of the top bar, clicking on your username and then choosing **Log Out**:

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-14-en.jpg" %}

You are presented to the login screen where you could enter your username and password to start a new desktop session:

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-15-en.jpg" %}

But that's not what we want. Press the **Ctrl + Alt + F1** key combination to switch to a purely textual interface:

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-16.png" %}

If that was new to you, know that Linux provides six [consoles][terminal] (terminals) besides the graphical interface. You can use the keys F1 to F6 in that same combination (**Ctrl + Alt + F1**, **Ctrl + Alt + F2** and so on) to switch between consoles, pressing **Ctrl + Alt + F7** you can return to the graphical interface.

But let's stand on the first console.

Login as root. To do that, type `root` and press **Enter**, then enter the root password and press **Enter** again.

Let's switch from [runlevel][runlevel] 5, the default runlevel, in which the system provides the GUI, to the runlevel 3, in which we have only the CLI and network connection.

To [change to runlevel][switch-runlevel] 3, run:

```
# init 3
```

Finally, we are going to start the distribution upgrade itself. Run:

```
# zypper --no-refresh dup
```

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-17.png" %}

The `--no-refresh` option makes **zypper** not retrieve the list of packages from repositories. Using that option, we ensure that **zypper** won't try to download any package in addition to those we have already downloaded. That can be useful especially for laptops, which may lose the Wi-Fi connection when leaving the GUI.

As before, **zipper** will compute the upgrade and show what it will do:

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-18.png" %}

Note that all the needed packages have already been downloaded: at the end, **zypper**'s report shows "Overall download size: 0 B. Already cached: 2.12 GiB".

Just press **Enter** to start upgrading.

**zypper** skips downloading packages and goes straight to upgrading:

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-19.png" %}

Distribution upgrade may take several minutes.

When it finishes, **zypper** suggests to restart. Let's do that by running:

```
# reboot
```

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-20.png" %}

## Have a lot of fun!

If you did everything up to here, now your computer is running openSUSE Leap 15.1.

You can see the [GRUB][grub] menu, the one that allows you to choose which operating system to boot when the computer turns on (useful especially if you have Windows and Linux installed on the same machine), is already different:

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-21.png" %}

And *voilà*! openSUSE Leap 15.1 is installed and ready for use!

{% include image.html src="/files/2019/05/howto-upgrade-to-15.1-22-en.jpg" %}

Make sure everything is in place.

Now you may return any repositories you removed. Remember to make the appropriate adjustments with respect to the openSUSE release, changing from `15.0` to `15.1` where necessary. It is easy to do that using the CLI:

```
# sed -i 's/15.0/15.1/g' /etc/zypp/repos.d.old/*
# mv /etc/zypp/repos.d.old/* /etc/zypp/repos.d/
```

That done, you can delete your repositories backup:

```
# rm -rf /etc/zypp/repos.d.antigos/
```

You may also try to install any program that perhaps has been removed during the upgrade.

Remember to regularly [check for updates][howto-update] for your new distribution.

If you find any difficulty during the upgrade or have any questions, don't hesitate to comment!

[opensuse-leap]:            https://en.opensuse.org/Portal:Leap
[opensuse-leap-15.1]:       https://kamarada.github.io/en/2019/05/22/opensuse-community-releases-leap-15-1-version/
[system-upgrade]:           https://en.opensuse.org/SDB:System_upgrade
[howto-upgrade-to-42.2]:    {% post_url en/2016-10-31-how-to-upgrade-from-opensuse-leap-421-to-422 %}
[howto-upgrade-to-42.3]:    {% post_url en/2017-08-03-how-to-upgrade-from-opensuse-leap-422-to-423 %}
[howto-update]:             {% post_url en/2019-05-20-how-to-get-updates-for-opensuse-linux %}
[release-notes]:            https://doc.opensuse.org/release-notes/x86_64/openSUSE/Leap/15.1/
[debian]:                   https://www.debian.org/
[third-party-repos]:        https://en.opensuse.org/Additional_package_repositories
[official-repos]:           https://en.opensuse.org/Package_repositories#Official_Repositories
[oss]:                      https://opensource.org/osd-annotated
[url]:                      https://en.wikipedia.org/wiki/Uniform_Resource_Locator
[terminal]:                 http://opensuse-guide.org/command.php
[runlevel]:                 https://en.wikipedia.org/wiki/Runlevel
[switch-runlevel]:          https://en.opensuse.org/SDB:Switch_runlevel
[grub]:                     https://www.gnu.org/software/grub/
