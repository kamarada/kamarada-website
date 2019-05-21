---
date: '2019-05-20 22:00:00 GMT-3'
layout: post
published: true
title: 'How to get updates for openSUSE Linux'
image: /files/2019/05/howto-update.png
nickname: 'howto-update'
excerpt: 'Here you will learn how to update the installed packages to retrieve new features, optimizations and fixes to your system.'
---

{% include image.html src="/files/2019/05/howto-update.png" %}

Computer programs are not perfect: they are made by us, mere humans. As time passes, they are improved, be by optimizations, new features or bug fixes. Bugs can be of many kinds: typos, slowdowns, crashes or security vulnerabilities, which can be exploited by malicious people to get unauthorized access to your personal files. Therefore, it is important to keep your computer always up to date, using the latest software versions.

Fortunately, keeping your [openSUSE][opensuse] system always up to date is easy. You can get software updates using the graphical user interface (GUI) or the command line interface (CLI), as you are going to see.

If you are updating a desktop or laptop, you can choose between GUI or CLI. If you are updating a server, probably the CLI is the only option.

## Updating vs upgrading

Update and upgrade are two ways to replace old software by fresh software on your system. Let me clarify their differences:

- **update:** move packages (usually a few) to new versions, staying on the current distribution release, it should be done frequently, always when package updates are available and it is possible to install them;
- **upgrade:** update the whole system (usually all the packages) to move to the next distribution release.

Now, examples to illustrate both processes:

- **update:** staying on the same openSUSE Leap release, 42.3, you update the [Firefox] app from version 52.2 to version 52.8, other 10 packages are updated as well;
- **upgrade:** you move openSUSE Leap from version 42.3 to version 15.0, which implies updating Firefox from 52.8 to 60.0, [LibreOffice] from 5.4 to 6.0, [GNOME] from 3.20 to 3.26 and other 3,000 packages are updated as well.

Today you are going to see how to update your system.

Soon, in another post, we are going to talk about upgrading.

Currently, the openSUSE Leap distribution is on version 15.0. The next version will be 15.1, [which is planned to be released on May 22nd, 2019][mailing-list]. By now, you can get ready for the upgrade by making sure the openSUSE release you are currently running is up to date. That is one of the prerequisites for upgrading.

## Getting updates using the GUI

To update your system using the GUI, you can use the **Package Updater** app.

From time to time, the app itself automatically looks for software updates and notifies you if there are any to be installed:

{% include image.html src="/files/2019/05/howto-update-01-en.jpg" %}

Click the notification to launch the Package Updater app.

In case it's not an appropriate moment to install updates, you can just dismiss the notification. But remember to install updates later.

To manually launch the Package Updater, click on **Activities**, on the top-left screen corner, start typing `package` or `updater` and click on the **Package Updater** icon:

{% include image.html src="/files/2019/05/howto-update-02-en.jpg" %}

**Tip:** you can also access the **Activities overview** by simply moving your mouse pointer to the top-left corner of the screen (as if you want to leave the screen). Another way to access the overview is pressing the **Super** key (on some keyboards, it shows the [Windows][windows] logo).

Package Updater looks for updates and list them, if there are any to be installed:

{% include image.html src="/files/2019/05/howto-update-03-en.jpg" %}

Make sure all updates are checked and click on **Install Updates**.

Package Updater will start to fetch updates.

If you want, you can monitor the update progress:

{% include image.html src="/files/2019/05/howto-update-04-en.jpg" %}

Instead, if you prefer, you can continue to use your computer as usual while updates are being downloaded and installed.

When the update process finishes, Package Updater informs that your system is up to date:

{% include image.html src="/files/2019/05/howto-update-05-en.jpg" %}

Click **OK** to close the Package Updater.

Usually after updating you don't need to do anything else (e.g. restart). Updates are already applied and you can notice them if you open any program that has been updated.

In some cases, the Package Updater may ask you to restart your session or your computer:

{% include image.html src="/files/2019/05/howto-update-06-en.jpg" %}

If that happens, then follow the onscreen instructions.

## Getting updates using the CLI

To update your system using the CLI, you can use the [**zypper**][zypper] package manager.

If you are not familiar with the CLI, you are going to realize that it is not difficult to use. Almost always, you can use the CLI without actually leaving the desktop environment through the [**Terminal**][gnome-terminal] app. To launch it, open the **Activities overview**, type `terminal` and click on its icon:

{% include image.html src="/files/2019/05/howto-update-cmd-01-en.jpg" %}

Terminal is launched:

{% include image.html src="/files/2019/05/howto-update-cmd-02-en.jpg" %}

If you are familiar with Windows, perhaps you think Terminal resembles Windows' **Command Prompt**.

Not any user is allowed to install updates using **zypper**, only the [superuser] (also known as administrator or root user) is able to do that.

To switch from your normal user to the root user, run the following command:

```
$ su
```

If you are not used to that notation, it means type `su` and hit **Enter**. The dollar sign (`$`) is not part of the command and should not be typed, it only indicates the command can be run by any user. Soon you are going to see commands that need elevated privileges to be run (i.e. by the root user). Those are indicated by the hash sign (`#`).

The **su** command asks you the root password, which you must provide to go on. Type the root password and hit **Enter**. Please note that nothing will appear on screen as you type the root password, this is intended.

Now, as the root user, call **zypper** with the command:

```
# zypper ref
```

(you can think of that command as *refresh*)

**zypper** will retrieve from the Internet the list of available packages:

{% include image.html src="/files/2019/05/howto-update-cmd-03-en.jpg" %}

Note that it shows the progress. When it is done, run:

```
# zypper up
```

(*update*)

**zypper** will download and install available updates, if there are any:

{% include image.html src="/files/2019/05/howto-update-cmd-04-en.jpg" %}

It shows what needs to be done to update the system and asks if you agree. The default option is to continue (**y**). If that's what you want, you can just hit **Enter** and update will begin.

**zypper** shows the update progress:

{% include image.html src="/files/2019/05/howto-update-cmd-05-en.jpg" %}

Usually, when the update process finishes, you don't need to do anything else (e.g. restart). But note that at the end of this update **zypper** considered restarting programs that were using files deleted during the update process:

{% include image.html src="/files/2019/05/howto-update-cmd-06-en.jpg" %}

In that case, even if **zypper** has not asked you to restart your computer, as it said the word "restart", I recommend you to do so. The command to do that is as simple as:

```
# reboot
```

When the system comes back, it will be fresh new and clear, without risk of malfunction.

Remember to check for software updates from time to time, as the command line interface does not notify you when there are updates available.

In short, the commands to update your system through the CLI using **zypper** are:

```
$ su
# zypper ref
# zypper up
# reboot
```

[linux]:            https://www.kernel.org/linux.html
[opensuse]:         https://www.opensuse.org/
[firefox]:          https://www.mozilla.org/
[libreoffice]:      https://www.libreoffice.org/
[gnome]:            https://www.gnome.org/
[mailing-list]:     https://lists.opensuse.org/opensuse-factory/2019-05/msg00142.html
[windows]:          https://www.microsoft.com/windows/
[zypper]:           https://en.opensuse.org/Portal:Zypper
[gnome-terminal]:   https://help.gnome.org/users/gnome-terminal/stable/
[superuser]:        https://en.wikipedia.org/wiki/Superuser
