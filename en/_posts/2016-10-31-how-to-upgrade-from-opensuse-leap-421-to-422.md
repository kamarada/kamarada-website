---
date: '2016-10-31 23:59:59 GMT-2'
excerpt: "Being able to upgrade from one release to another is a certainty openSUSE users have. For 3 years now I use openSUSE Linux and I always upgraded without an issue. I started to use openSUSE when it was 12.2, shortly before the 12.3 release in May 2013. Since then I went through 5 upgrades: from 12.2 to 12.3, to 13.1, to 13.2, to Leap 42.1 (in fact, there was a leap, as we have seen on that release's announcement) and this week to 42.2, even before it was officially launched."
layout: post
published: true
title: 'How to upgrade from openSUSE Leap 42.1 to 42.2'
image: /files/2016/10/upgrade.png
nickname: 'how-to-upgrade'
---

{% include image.html src="/files/2016/10/upgrade.png" caption="Source: [openSUSE News](https://news.opensuse.org/2016/09/22/new-leap-beta-adds-plasma-5-8-beta/)" %}

Being able to upgrade from one release to another is a certainty [openSUSE][opensuse] users have. For 3 years now I use openSUSE Linux and I always upgraded without an issue. I started to use openSUSE when it was 12.2, shortly before the [12.3 release in May 2013][opensuse-123]. Since then I went through 5 upgrades: from 12.2 to 12.3, to 13.1, to 13.2, to Leap 42.1 (in fact, there was a leap, as we have seen on [that release's announcement]({% post_url 2015-11-04-opensuse-leap-42-1-becomes-first-hybrid-distribution %})) and this week to 42.2, even before it was officially launched.

The next openSUSE Leap release, 42.2, already passed alfa and beta phases and had its first release candidate (RC) launched on [October 18][opensuse-422-rc1]. That means most of the tests have ended. That release is very close to the final one, scheduled to [November 16][opensuse-roadmap]. Until then, openSUSE Leap should receive no more than a few finishing touches.

Checkout this post to know beforehand how to upgrade your openSUSE Leap installation from 42.1 to 42.2. If you are the kind of person who prefers safety to adventure, here you are going to see what you will do on November 16, after the official release of openSUSE Leap 42.2. If you prefer adventure, like me, you are going to see what you can do to get the coming 42.2 right now. At least both the computers I use at home and work are now working well with openSUSE Leap 42.2 RC 1.

To better organize the text, I split the upgrade process in 6 steps.

## A few notes

The how-to I present here is based on the openSUSE wiki's [SDB:System upgrade][system-upgrade] page, whose instructions I followed to upgrade my system. That page has changed little since I started using openSUSE. It presents a safe upgrade procedure, which should work for most cases, but requires some things be observed.

**You must be using the immediately previous openSUSE release.** It means that if you want to upgrade to 42.2, now you must be using 42.1. Hopping over one or more releases is not supported and probably will not work. So if you use openSUSE 13.2, for example, you must first upgrade to Leap 42.1, and then to Leap 42.2 (note that the leap here is just in numbers, [the Leap 42.1 release is indeed the successor of 13.2]({% post_url 2015-11-04-opensuse-leap-42-1-becomes-first-hybrid-distribution %})).

**Your openSUSE installation must be up to date** with the latest updates for the release you are currently running. To learn how to update your system, read the [previous post]({% post_url 2016-10-22-keep-your-system-always-up-to-date %}).

**You should read about the openSUSE release you are going to install.** Read the [list of annoying bugs][most-annoying-bugs] to be prepared for upcoming problems, how to prevent and/or solve them. Also, read the [release notes][release-notes], which list changes and glitches in the new release.

**You must backup all important data.** Even though upgrading openSUSE is a safe procedure, that resembles upgrading [Debian][debian], it is not perfect. Winning the lottery is difficult, but eventually someone wins. Something may go wrong during upgrade, but it is difficult, even more if you do things cautiously. Anyway, it never hurts to make a backup of your personal files as a precaution, especially if the `/home` directory is not on a dedicated partition. If the computer is one that should not be down for long (a server, for example), consider backing up the entire system, so you will be able to restore it immediately if something does not work as expected.

**You should not use third party repositories during upgrade.** Before upgrading, we are going to remove all third party repositories. Doing that may cause third party software to be removed during upgrade. If that happens, you may try to reinstall it later. It does not mean that you cannot upgrade with third party repositories enabled, but using only the official repositories is more guaranteed. That way, the base system will be upgraded to a new stable, solid and reliable base. Then, on top of that base, you can install whatever you want. Do different only if you know what you are doing.

I also recommend that you read this entire page before you actually upgrade. Once you know the whole process, you will be able to better schedule it. You can even use your computer while downloading packages, but after you start upgrading, your computer will become usable again only after upgrading is completed.

Before we begin, I would like to make one more note, for those who want to upgrade to openSUSE Leap 42.2 before the final release date. If that is your case, please note that you will need to repeat the steps "download packages" and "upgrade your system", the last two steps in this tutorial (5 and 6), for each new release of this version. So, you will repeat those steps on November 2, when Leap 42.2 RC 2 is scheduled to be released, and on November 16, after the final release of Leap 42.2.

## 1) Update your current system

Before beginning, make sure your openSUSE installation is up to date.

As we have seen in the [previous post]({% post_url 2016-10-22-keep-your-system-always-up-to-date %}), if your system is up to date, the **Software Updates** icon informs that to you:

{% include image.html src="/files/2016/10/sw-updates-05-en.jpg" %}

Or, if you prefer using the command line interface (CLI), you can check if your system is up to date running `zypper up` as root. If that is the case, it returns "Nothing to do":

{% include image.html src="/files/2016/10/sw-updates-cmd-05-en.jpg" %}

Take a look at [that post]({% post_url 2016-10-22-keep-your-system-always-up-to-date %}) to see how to update your openSUSE.

Let me clarify something, in case it sounds confusing: by **update** we mean update just a few packages without actually moving from one release to another (e.g. from 42.1 to 42.2). By **upgrade** we mean update the whole system to move to the next release.

I use the graphical user interface (GUI) whenever possible, but using the CLI brings us some advantages: **zypper** allows us to only download updates in a first moment and then install them later. If you are not familiar with the CLI, you will realize that it is not difficult to use.

Note that, almost always, you can use the CLI without actually leaving the desktop environment through the [**Konsole**][konsole] application. To start it, open the **Application Menu**, point to **System**, and then click **Konsole**:

{% include image.html src="/files/2016/10/upgrade-01-en.jpg" %}

If you are familiar with [Windows][windows], perhaps you think Konsole resembles Windows' **Command Prompt**.

## 2) Backup your current repositories

Actually, this step is optional.

You may want to back up your current list of repositories to return them after upgrading. openSUSE saves repository settings in the `/etc/zypp/repos.d` folder. It has some text files, one for each repository. Let's backup that folder using the CLI.

Get root privileges running `su` (if you are not familiar with the CLI, by "running `su`", we mean "type `su` and hit **Enter**"). You will be asked the root password, which you must provide to continue (type the root password and hit **Enter**, note that the password is not displayed, not even masked as ******, this is normal).

Then, order the copy running `cp -Rv /etc/zypp/repos.d /etc/zypp/repos.d.old`:

{% include image.html src="/files/2016/10/upgrade-02-en.jpg" %}

That command copies the `repos.d` folder, in `/etc/zypp`, to another folder in the same place, called `repos.d.old`.

If you have not made a backup of your data yet, consider doing that now.

## 3) Clean up repositories

As already mentioned, for upgrade we use only the [official repositories][official-repos]. To be more precise, just two of them:

- **openSUSE-Leap-42.2-OSS**: the main repository, contains [open source software][oss] only.

URL: [http://download.opensuse.org/distribution/leap/42.2/repo/oss/][repo-oss]

- **openSUSE-Leap-42.2-Update**: contains official updates for OSS packages.

URL: [http://download.opensuse.org/update/leap/42.2/oss/][repo-update]

Let's clean up our repositories removing any repository we won't need (including any [third party repositories][third-party-repos]).

Start the YaST Control Center by opening the **Application Menu**, pointing to **System**, and then clicking on **YaST**:

{% include image.html src="/files/2016/10/linux-ntp-01.jpg" %}

You will be asked the root password.

Select the **Software** category, then click on **Software Repositories**:

{% include image.html src="/files/2016/10/upgrade-03-en.png" %}

You are presented to your system's repository list:

{% include image.html src="/files/2016/10/upgrade-04-en.jpg" %}

For each repository that is neither **openSUSE-Leap-42.1-OSS** nor **openSUSE-Leap-42.1-Update**, select it in the list and click on **Delete** (no typo, we are managing old repositories, the 42.1 ones, we are going to switch to the new ones soon).

YaST will ask you for confirmation. Click on **Yes**:

{% include image.html src="/files/2016/10/upgrade-05-en.jpg" %}

Do that with all repositories, until the list has only **openSUSE-Leap-42.1-OSS** and **openSUSE-Leap-42.1-Update**:

{% include image.html src="/files/2016/10/upgrade-06-en.jpg" %}

Maybe those repositories are named differently on your system. If that is the case, try to recognize them by their [URL][url] instead of their name. If you don't find them, there is no problem: delete all repositories and add just the new ones.

## 4) Switch to the new repositories

Now let's move to the new release's repositories.

Select the **openSUSE-42.1-Leap-OSS** repository and click on **Edit**.

Replace `42.1` by `42.2` where necessary and click on **OK**:

{% include image.html src="/files/2016/10/upgrade-07-en.jpg" %}

You are presented to the [openSUSE Leap 42.2 license][opensuse-license]. You can read it to know your rights as an openSUSE user. When you are finished, click on **Next**:

{% include image.html src="/files/2016/10/upgrade-08-en.jpg" %}

Do the same for the **openSUSE-Leap-42.1-Update** repository.

At the end, your system's repository list should look like this:

{% include image.html src="/files/2016/10/upgrade-09-en.jpg" %}

Click on **OK** to save changes. You can close YaST.

## 5) Download packages

We can start downloading the packages of the new openSUSE release.

Back to CLI, run `zypper ref` to retrieve the list of available packages from the new repositories. Then, run `zypper dup --download-only` (`dup` is an acronym for *distribution upgrade*):

{% include image.html src="/files/2016/10/upgrade-10-en.jpg" %}

**zypper** spends some time "thinking". Soon after, it shows what it needs to do in order to upgrade openSUSE to the next release and asks if you want to continue:

{% include image.html src="/files/2016/10/upgrade-11-en.jpg" %}

That list of actions is similar to that produced by `zypper up`, presented in the [previous post]({% post_url 2016-10-22-keep-your-system-always-up-to-date %}). However, as we are now doing a distribution upgrade, and not an ordinary update, the list of what needs to be done is much bigger.

Review that list carefully. You can go up or down using the scrollbar at the right of the window or the mouse wheel (scroll wheel) if you are using Konsole, or the **Shift + Page Up** / **Shift + Page Down** key combinations if you are using a purely textual interface (they also work in Konsole).

The default option is to continue (**s**). If you agree, you can just hit **Enter** and downloading of the new packages will start. Meanwhile, you can use your computer normally. The upgrade itself has not started yet.

Note that **zypper** only downloads packages, it does not start upgrading:

{% include image.html src="/files/2016/10/upgrade-12-en.jpg" %}

That's because we invoked it with the `--download-only` option.

Finish what you are doing and save any open files so we can start upgrading. Note that upgrading may take several minutes and you will be able to continue using your computer only after it is complete.

## 6) Upgrade your system

Now that we have already downloaded all the packages needed to update our openSUSE Leap 42.1 to 42.2, we need to leave the desktop environment and use the pure textual interface to perform the upgrade. Here on, you cannot use Konsole.

That is necessary because the desktop itself will be upgraded. If we run the upgrade while still using the desktop, it may stop/crash, causing the upgrade to abort, which in turn left the system in an inconsistent, unpredictable state.

Consider open this page on another computer (or on a mobile device), print it or take note of the next actions.

If you are upgrading a laptop system, make sure its battery is fully charged and its AC adapter is plugged in. Do not remove the battery or unplug the AC adapter during the upgrade. We want to prevent any possibility of problem.

Logout by by opening the **Application Menu**, pointing to **Power / Session** and clicking on **Logout**:

{% include image.html src="/files/2016/10/logout-kde-en.jpg" %}

You are presented to the login screen where you could enter your username and password to start a new desktop session:

{% include image.html src="/files/2016/10/upgrade-13-en.jpg" %}

But that's not what we want. Press the **Ctrl + Alt + F1** key combination to switch to a purely textual interface:

{% include image.html src="/files/2016/10/upgrade-14.jpg" %}

If that was new to you, know that Linux provides six [consoles][terminal] besides the graphical interface. You can use the keys F1 to F6 in that same combination (**Ctrl + Alt + F1**, **Ctrl + Alt + F2** and so on) to switch between consoles, pressing **Ctrl + Alt + F7** you can return to the graphical interface.

But let's stand on the first console.

Login as root (to do that, type `root` and press **Enter**, then enter the root password and press **Enter** again).

Let's switch from [runlevel][runlevel] 5, the default runlevel, in which the system provides the GUI, to the runlevel 3, in which we have only the CLI and network connection.

To [change to runlevel][switch-runlevel] 3, run `init 3`.

Finally, we are going to start the distribution upgrade itself. Run `zypper --no-refresh dup`:

{% include image.html src="/files/2016/10/upgrade-15.jpg" %}

The `--no-refresh` option makes **zypper** not retrieve the list of packages from repositories. Using that option, we ensure that **zypper** won't try to download any package in addition to those we have already downloaded. That can be useful especially for laptops, which may lose the Wi-Fi connection when leaving the GUI.

As before, **zipper** will compute the upgrade and show what it will do:

{% include image.html src="/files/2016/10/upgrade-16.jpg" %}

Note that all the needed packages have already been downloaded: at the end, **zypper**'s report shows "Overall download size: 0 B. Already cached: 1.62 GiB".

Just press **Enter** to start upgrading.

**zypper** skips downloading packages and goes straight to upgrading:

{% include image.html src="/files/2016/10/upgrade-17.jpg" %}

Distribution upgrade may take several minutes.

When it finishes, as happened in the [previous post]({% post_url 2016-10-22-keep-your-system-always-up-to-date %}), **zypper** suggests to restart. Let's do that by running `reboot`:

{% include image.html src="/files/2016/10/upgrade-18.jpg" %}

## Have a lot of fun!

If you did everything up to here, now your computer is running openSUSE 42.2 Leap.

You can see the [GRUB][grub] menu, the one that allows you to choose which operating system to boot when the computer turns on (useful especially if you have Windows and Linux installed on the same machine), is already different:

{% include image.html src="/files/2016/10/upgrade-19.jpg" %}

And *voilà*! openSUSE Leap 42.2 is installed and ready for use!

{% include image.html src="/files/2016/10/upgrade-20-en.jpg" %}

Make sure everything is in place. Now you may return any repositories you removed. Remember to make the appropriate adjustments with respect to the openSUSE version, changing from `42.1` to `42.2` where necessary. You may also try to install any program that perhaps has been removed during the upgrade.

Remember to regularly [check for updates]({% post_url 2016-10-22-keep-your-system-always-up-to-date %}) for your new distribution.

If you find any difficulty during the upgrade or have any questions, don't hesitate to comment!

[opensuse]:             https://www.opensuse.org
[opensuse-123]:         https://news.opensuse.org/2013/03/13/opensuse-12-3-free-open-and-awesome/
[opensuse-422-rc1]:     https://news.opensuse.org/2016/10/18/release-candidate-available-for-opensuse-leap-42-2/
[opensuse-roadmap]:     https://en.opensuse.org/openSUSE:Roadmap
[system-upgrade]:       https://en.opensuse.org/SDB:System_upgrade
[debian]:               https://www.debian.org/
[most-annoying-bugs]:   https://en.opensuse.org/openSUSE:Most_annoying_bugs
[release-notes]:        https://en.opensuse.org/openSUSE:Release_Notes
[konsole]:              https://www.kde.org/applications/system/konsole/
[windows]:              https://www.microsoft.com/windows/
[official-repos]:       https://en.opensuse.org/Package_repositories#Official_Repositories
[third-party-repos]:    https://en.opensuse.org/Additional_package_repositories
[oss]:                  https://opensource.org/osd-annotated
[repo-oss]:             http://download.opensuse.org/distribution/leap/42.2/repo/oss/
[repo-update]:          http://download.opensuse.org/update/leap/42.2/oss/
[url]:                  https://en.wikipedia.org/wiki/Uniform_Resource_Locator
[opensuse-license]:     https://en.opensuse.org/openSUSE:License
[terminal]:             http://opensuse-guide.org/command.php
[runlevel]:             https://en.wikipedia.org/wiki/Runlevel
[switch-runlevel]:      https://en.opensuse.org/SDB:Switch_runlevel
[grub]:                 https://www.gnu.org/software/grub/
