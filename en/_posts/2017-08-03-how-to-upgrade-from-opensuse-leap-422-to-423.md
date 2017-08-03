---
date: '2017-08-03 18:00:00 GMT-3'
layout: post
published: true
title: 'How to upgrade from openSUSE Leap 42.2 to 42.3'
image: /files/2017/08/how-to-upgrade-to-42.3-00-en.png
nickname: 'how-to-upgrade-to-42.3'
excerpt: "The latest openSUSE Leap release, 42.3, has been launched on July 26. You can upgrade from the 42.2 to the 42.3 release in the same way as you upgraded from the 42.1 to the 42.2 release, the step by step is very similar. If you havent't upgraded openSUSE yet, you are going to realize it is an easy and safe procedure. Continue reading to know how to upgrade your openSUSE Leap installation from 42.2 to 42.3."
---

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-00-en.png" caption="openSUSE Leap 42.3 is now available" %}

The latest [openSUSE Leap][opensuse-leap] release, 42.3, has been launched on [July 26][opensuse-leap-42.3]. You can upgrade from the 42.2 to the 42.3 release in the same way as you [upgraded from the 42.1 to the 42.2 release][how-to-upgrade-to-42.2], the step by step is very similar. If you havent't upgraded openSUSE yet, you are going to realize it is an easy and safe procedure. Continue reading to know how to upgrade your openSUSE Leap installation from 42.2 to 42.3.

## A few notes

The step by step I present here is based on the openSUSE wiki's [SDB:System upgrade][system-upgrade] page, whose instructions I followed to upgrade my system. That page has changed little since I started using openSUSE. It presents a safe upgrade procedure, which should work for most cases, but requires some cautions.

**You must be using the immediately previous openSUSE release.** It means that if you want to upgrade to 42.3, now you must be using 42.2. Hopping over one or more releases is not supported. It may work, but that is not guaranteeded. So if you use openSUSE Leap 42.1 now, for example, you should first upgrade to 42.2, and then to 42.3. If that is your case, you should first read [this another post][how-to-upgrade-to-42.2] and then come back.

**Your openSUSE installation must be up to date** with the latest updates for the release you are currently running. Here, we are going to both update and then upgrade.

Let me clarify something, in case it sounds confusing: by **update** I mean update just a few packages without actually moving from one release to another. By **upgrade** I mean update the whole system to move to the next release (e.g. from 42.2 to 42.3).

**You should read about the openSUSE release you are going to install.** Take a look at the [release notes][release-notes], which list changes and glitches in the new release.

**You must backup all important data.** Even though upgrading openSUSE is a safe procedure (that resembles upgrading [Debian][debian], for those who know it), it is not perfect. Winning the lottery is difficult, but eventually someone wins. Something may go wrong during upgrade, although it is difficult, especially if you act cautiosly. I myself have been using openSUSE for some years now, and always have upgraded from one release to another without a problem. Anyway, it never hurts to make a backup of your personal files as a precaution, especially if the `/home` directory is not on a dedicated partition. If the computer is one that should not be down for long (a server, for example), consider backing up the entire system, so you will be able to restore it immediately if something does not work as expected.

**You should not use third party repositories during upgrade.** Before upgrading, we are going to remove all [third party repositories][third-party-repos]. Doing that may cause third party software to be removed during upgrade. If that happens, you may try to reinstall it later. It is not that you cannot upgrade with third party repositories enabled, but using only the [official repositories][official-repos] is more guaranteed. That way, the base system will be upgraded to a new stable, solid and reliable base. Then, on top of that base, you can install whatever you want. Do different only if you know what you are doing.

I also recommend that you read this entire page before you start. I'm going to break the upgrade process down into 6 steps for better understading. Once you know the whole process, you will be able to better schedule it. You can even use your computer as normal while you follow the step by step, but after you start actually upgrading, your computer will become usable again only after upgrading is completed.

## 1) Update your current system

Make sure your current openSUSE installation is up to date. You can get software updates using the graphical user interface (GUI) or the command line interface (CLI).

I use the GUI whenever possible, but using the CLI brings us some advantages: **zypper** allows us to only download updates in a first moment and then install them later. If you are not familiar with the CLI, you will realize that it is not difficult to use.

Note that, almost always, you can use the CLI without actually leaving the desktop environment through the [**Terminal**][terminal] application. How to start it? Move your mouse pointer to the top-left hot corner where it says "Activities" to access the **Activities overview**. You can also show the overview by pressing the **Super** key (on some keyboards, it shows the [Windows][windows] logo). Type `terminal` and click on its icon:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-01-en.jpg" %}

Terminal is launched:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-02-en.png" %}

If you are familiar with Windows, perhaps you think Terminal resembles Windows' **Command Prompt**.

### Getting updates using the GUI

To update your system using the GUI, you can use the **Package Updater** application. To start it, access the **Activities overview**, type `package` and click on the **Package Updater** icon:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-03-en.jpg" %}

It looks for software updates and list them, if there are any to be installed:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-04-en.jpg" %}

Click on **Install Updates**. Package Updater will start to fetch updates. When the update process finishes, it may ask you to do something:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-05-en.jpg" %}

If that is the case, then follow the onscreen instructions.

To make sure your system has installed all updates available to the date, repeat that procedure until Package Updater informs you the system is completely up to date:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-06-en.jpg" %}

### Getting updates using the CLI

To update your system using the CLI, you can use the [**zypper**][zypper] package manager.

Not every user is allowed to call **zypper**, only the [superuser][superuser] or administrator (the root user) is able to do that.

To switch from your normal user to the root user, run the following command:

```
$ su
```

If you are not used to that notation, it means type `su` and hit **Enter**. The dollar sign (`$`) is not part of the command and should not be typed, it only indicates the command can be run by any user. Soon you are going to see commands that need elevated privileges to be run (i.e. by the root user). These are indicated by the hash sign (`#`).

The **su** command asks you the root password, which you must provide to go on. Type the root password and hit **Enter**. Please note that nothing will appear on screen as you type the root password, this is intended.

Now, as the root user, call **zypper** with the command:

```
# zypper ref
```

(you can think of that command as *refresh*)

**zypper** will retrieve from the Internet the list of packages available:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-07-en.jpg" %}

Note that it shows the progress. When it is done, run:

```
# zypper up
```

(*update*)

**zypper** will download and install available updates if there are any:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-08-en.png" %}

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-09-en.png" %}

It shows what needs to be done to update the system and asks if you agree. The default option is to continue (**y**). If that's what you want, you can just hit **Enter** and update will begin.

**zypper** shows the update progress:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-10-en.jpg" %}

Usually, when the update process finishes, you don't need to do anything else, not even restart your computer. But note that at the end of this update **zypper** considered restarting programs that were using files deleted during the update process:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-11-en.jpg" %}

In that case, even if **zypper** has not asked you to restart your computer, as it said the word "restart", I recommend you to do so. The command to do that is as simple as:

```
# reboot
```

When the system comes back, it will be fresh new and clear, without risk of malfunction.

Make sure  your system has installed all updates available to the date by repeatedly running `zypper up` until **zypper** says there is "nothing to do":

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-12-en.jpg" %}

That means there are no more updates to be installed: your system is up to date.

## 2) Backup your current repositories

Actually, this step is optional.

You may want to back up your current list of repositories to return them after upgrading. openSUSE saves repository settings in the `/etc/zypp/repos.d` folder. It has some text files, one for each repository.

Let's copy the `repos.d` folder, in `/etc/zypp/`, to another one in the same place, called `repos.d.old`. It is easier to use the CLI for that.

Enter the CLI and switch to the root user, if you haven't done that yet:

```
$ su
```

Enter the root password to continue.

If you have upgraded from 42.1 to 42.2 using [our how-to][how-to-upgrade-to-42.2], maybe you still have the old backup. If that is the case, remove the existing `repos.d.old` folder:

```
# rm -rf /etc/zypp/repos.d.old
```

Then, order the copy:

```
# cp -Rv /etc/zypp/repos.d /etc/zypp/repos.d.old
```

If you have not made a backup of your data yet, consider doing that now.

## 3) Clean up repositories

As already mentioned, for upgrade we use only the [official repositories][official-repos]. To be more precise, just two of them:

- **openSUSE-Leap-42.3-OSS**: the main repository, contains [open source software][oss] only.

URL: [http://download.opensuse.org/distribution/leap/42.3/repo/oss/][repo-oss]

- **openSUSE-Leap-42.3-Update**: contains official updates for OSS packages.

URL: [http://download.opensuse.org/update/leap/42.3/oss/][repo-update]

Let's clean up our repositories removing any repository we won't need (including any [third party repositories][third-party-repos]).

Start the YaST Control Center by opening the **Activities overview**, typing `yast` and then clicking on **YaST**'s icon:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-14-en.jpg" %}

You will be asked the root password.

Select the **Software** category, then click on **Software Repositories**:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-15-en.jpg" %}

You are presented to your system's repository list:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-16-en.jpg" %}

For each repository that is neither **openSUSE-Leap-42.2-OSS** nor **openSUSE-Leap-42.2-Update**, select it in the list and click on **Delete** (no typo, we are managing old repositories, the 42.2 ones, we are going to switch to the new ones soon).

YaST will ask you for confirmation. Click on **Yes**:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-17-en.jpg" %}

Do that with all repositories, until the list has only **openSUSE-Leap-42.2-OSS** and **openSUSE-Leap-42.2-Update**:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-18-en.jpg" %}

Maybe those repositories are named differently on your system. If that is the case, try to recognize them by their [URL][url] instead of their name. If you don't find them, there is no problem: delete all repositories and just add the new ones in the next step.

## 4) Switch to the new repositories

Now let's move to the new release's repositories.

Select the **openSUSE-42.2-Leap-OSS** repository and click on **Edit**.

Replace `42.2` by `42.3` where necessary and click on **OK**:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-19-en.jpg" %}

You are presented to the [openSUSE Leap 42.3 license][opensuse-license]. You can read it to know your rights as an openSUSE user. When you are finished, click on **Next**:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-20-en.jpg" %}

Do the same for the **openSUSE-Leap-42.2-Update** repository.

At the end, your system's repository list should look like this:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-21-en.jpg" %}

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

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-22-en.jpg" %}

**zypper** spends some time "thinking". Soon after, it shows what it needs to do in order to upgrade openSUSE to the next release and asks if you want to continue:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-23-en.jpg" %}

That list of actions is similar to that produced by `zypper up`, presented in the first step. However, as we are now doing a distribution upgrade, and not an ordinary update, the list of what needs to be done is much bigger.

Review that list carefully. You can go up or down using the scrollbar at the right of the window or the mouse wheel (scroll wheel) if you are using Terminal, or the **Shift + Page Up** / **Shift + Page Down** key combinations if you are using a purely textual interface (they also work in Terminal).

The default option is to continue (**s**). If you agree, you can just hit **Enter** and downloading of the new packages will start. Meanwhile, you can use your computer normally. The upgrade itself has not started yet.

Note that **zypper** only downloads packages, it does not start upgrading:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-24-en.jpg" %}

That's because we invoked it with the `--download-only` option.

Finish what you are doing and save any open files so we can start upgrading. Note that upgrading may take several minutes and you will be able to continue using your computer only after it is complete.

## 6) Upgrade your system

Now that we have already downloaded all the packages needed to update our openSUSE Leap 42.2 to 42.3, we need to leave the desktop environment and use the pure textual interface to perform the upgrade. Here on, you cannot use Terminal.

That is necessary because the desktop itself will be upgraded. If we run the upgrade while still using the desktop, it may stop/crash, causing the upgrade to abort, which in turn left the system in an inconsistent, unpredictable state.

Consider opening this page on another computer (or on a mobile device), print it or take note of the next actions.

If you are upgrading a laptop system, make sure its battery is fully charged and its AC adapter is plugged in. Do not remove the battery or unplug the AC adapter during the upgrade. We want to prevent any possibility of problem.

Logout by opening the **system menu**, on the right side of the top bar, clicking on your username and then choosing **Log Out**:

{% include image.html src="/files/2017/08/logout-gnome-en.jpg" %}

You are presented to the login screen where you could enter your username and password to start a new desktop session:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-25-en.jpg" %}

But that's not what we want. Press the **Ctrl + Alt + F1** key combination to switch to a purely textual interface:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-26.png" %}

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

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-27.png" %}

The `--no-refresh` option makes **zypper** not retrieve the list of packages from repositories. Using that option, we ensure that **zypper** won't try to download any package in addition to those we have already downloaded. That can be useful especially for laptops, which may lose the Wi-Fi connection when leaving the GUI.

As before, **zipper** will compute the upgrade and show what it will do:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-28.png" %}

Note that all the needed packages have already been downloaded: at the end, **zypper**'s report shows "Overall download size: 0 B. Already cached: 1.21 GiB".

Just press **Enter** to start upgrading.

**zypper** skips downloading packages and goes straight to upgrading:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-29.png" %}

Distribution upgrade may take several minutes.

When it finishes, as happened in the first step, **zypper** suggests to restart. Let's do that by running:

```
# reboot
```

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-30.png" %}

## Have a lot of fun!

If you did everything up to here, now your computer is running openSUSE 42.3 Leap.

You can see the [GRUB][grub] menu, the one that allows you to choose which operating system to boot when the computer turns on (useful especially if you have Windows and Linux installed on the same machine), is already different:

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-31-en.jpg" %}

And *voilà*! openSUSE Leap 42.3 is installed and ready for use!

{% include image.html src="/files/2017/08/how-to-upgrade-to-42.3-32-en.jpg" %}

Make sure everything is in place.

Now you may return any repositories you removed. Remember to make the appropriate adjustments with respect to the openSUSE version, changing from `42.2` to `42.3` where necessary. It is easy to do that using the CLI:

```
# sed -i 's,42\.2,42.3,g' /etc/zypp/repos.d.old/*
# mv /etc/zypp/repos.d.old/* /etc/zypp/repos.d/
```

That done, you can delete your repositories backup:

```
# rm -rf /etc/zypp/repos.d.antigos/
```

You may also try to install any program that perhaps has been removed during the upgrade.

Remember to regularly check for updates for your new distribution.

If you find any difficulty during the upgrade or have any questions, don't hesitate to comment!

[opensuse-leap]:            https://en.opensuse.org/Portal:Leap
[opensuse-leap-42.3]:       https://news.opensuse.org/2017/07/26/refresh-of-linux-distribution-continues-leveraging-community-enterprise-benefits/
[how-to-upgrade-to-42.2]:   {% post_url 2016-10-31-how-to-upgrade-from-opensuse-leap-421-to-422 %}
[system-upgrade]:           https://en.opensuse.org/SDB:System_upgrade
[release-notes]:            https://doc.opensuse.org/release-notes/x86_64/openSUSE/Leap/42.3/
[debian]:                   https://www.debian.org/
[third-party-repos]:        https://en.opensuse.org/Additional_package_repositories
[official-repos]:           https://en.opensuse.org/Package_repositories#Official_Repositories
[gnome-terminal]:           https://help.gnome.org/users/gnome-terminal/stable/
[windows]:                  https://www.microsoft.com/windows/
[zypper]:                   https://en.opensuse.org/Portal:Zypper
[superuser]:                https://en.wikipedia.org/wiki/Superuser
[oss]:                      https://opensource.org/osd-annotated
[repo-oss]:                 http://download.opensuse.org/distribution/leap/42.3/repo/oss/
[repo-update]:              http://download.opensuse.org/update/leap/42.3/oss/
[url]:                      https://en.wikipedia.org/wiki/Uniform_Resource_Locator
[opensuse-license]:         https://en.opensuse.org/openSUSE:License
[terminal]:                 http://opensuse-guide.org/command.php
[runlevel]:                 https://en.wikipedia.org/wiki/Runlevel
[switch-runlevel]:          https://en.opensuse.org/SDB:Switch_runlevel
[grub]:                     https://www.gnu.org/software/grub/
