---
date: '2016-10-22 23:40:00 GMT-2'
layout: post
published: true
title: 'Keep your system always up to date'
image: /files/2016/10/sw-updates.jpg
nickname: 'how-to-sw-updates'
---

Computer programs, the more amazing they are, are not perfect: they are made by us, mere humans. As time passes, they are improved, be by optimizations, new features or bug fixes. Bugs can be of many kinds, varying from a simple typo or malfunctioning to a security hole that can be used by malicious people to get unauthorized access to your personal files. Therefore, it is important to keep your computer always up to date, using the latest software versions.

Fortunately, keeping your Linux system always up to date is easy if you are using [openSUSE][opensuse]. You can get software updates using the graphical user interface (GUI) or the command line interface (CLI).

{% include image.html src="/files/2016/10/sw-updates.jpg" caption="Source: [OMG! Ubuntu!](http://www.omgubuntu.co.uk/2016/10/why-use-linux-answer-three-short-words)" %}

## Getting updates using the GUI

When you turn on your computer and/or connect it to the Internet, openSUSE Linux automatically looks for software updates.

If it finds updates to be installed, it notifies you:

{% include image.html src="/files/2016/10/sw-updates-01-en.jpg" %}

It just notifies you, leaving you free to decide when to actually update.

When you find an opportune time to download and install updates, click on the **Software Updates** icon. It will be showing a red X, indicating that your system is not fully updated (that is, there are updates that need to be installed):

{% include image.html src="/files/2016/10/sw-updates-02-en.jpg" %}

Click on **Install Updates**. openSUSE will start to fetch updates.

You can check the update progress:

{% include image.html src="/files/2016/10/sw-updates-03-en.jpg" %}

But you don't need to monitor it: while updates are being downloaded and installed, you can continue to use your computer as usual.

You are notified when the update process finishes. Normally, you don't need to do anything else, not even restart your computer. Updates are already applied and you can notice them if you open any program that has been updated.

When it happens that some update needs the computer to be restarted, the system asks you to restart it as soon as possible. Although that's recommended, you can restart it at your convenience.

To restart your computer, open the **Application Menu**, mouse over **Power / Session** and click on **Restart**:

{% include image.html src="/files/2016/10/restart-kde-en.jpg" %}

It could happen that the system has installed many updates and at the end, instead of notifying it has finished, it asks you to install further updates:

{% include image.html src="/files/2016/10/sw-updates-04-en.jpg" %}

That's rare, but it can occur if a package depends on another, and its latest version only becomes available after the latest version of its dependency is installed.

Keep updating your system until it informs you it is completely up to date:

{% include image.html src="/files/2016/10/sw-updates-05-en.jpg" %}

Another reason that can cause the system to inform you there are further updates available is the occurrence of failure during any update. In that case, updates that failed to be installed return to the list of available updates. If you try to install them again and once more they fail, try to find out what is wrong before trying again.

## Getting updates using the CLI

If you prefer the command line interface, you can use the [**zypper**][zypper] package manager to check for, download and install software updates.

First, you need to log in as root (superuser) issuing the command `su`. It asks you the root password, which you must provide to go on.

Then, call **zypper** with `zypper ref` (you can think of that command as *refresh*). It will retrieve the list of packages available on the Internet:

{% include image.html src="/files/2016/10/sw-updates-cmd-01-en.jpg" %}

Note that it shows the progress. When it finishes, run `zypper up` (*update*). **zypper** will download and install available updates if there are any:

{% include image.html src="/files/2016/10/sw-updates-cmd-02-en.jpg" %}

It shows what needs to be done to update the system and asks if you agree. The default option is to continue (**y**). If that's what you want, you can just hit **Enter**. Update will begin and **zypper** will show the update progress:

{% include image.html src="/files/2016/10/sw-updates-cmd-03-en.jpg" %}

It is possible that packages need to be removed for the system to be updated as a whole. If you notice in the picture above, **zypper** proposed installing [Spectacle][spectacle] and removing [KSnapshot][ksnapshot]. If you google what are those apps, you will find that both can be used to take screen shots (pictures like the above ones) and that indeed [KSnapshot was replaced by Spectacle][spectacle-vs-ksnapshot]. So, in that case, we don't need to worry.

If you don't agree with the changes suggested by **zypper**, you can cancel the update process by pressing **n** and then **Enter**. You can investigate why it is proposing those changes and try again later.

Usually, when the update process finishes, you don't need to do anything else, not even restart your computer. But note that at the end of this update **zypper** considered restarting programs that were using files deleted during the update process:

{% include image.html src="/files/2016/10/sw-updates-cmd-04-en.jpg" %}

In that case, even if **zypper** has not asked you to restart your computer, as it said the word "restart", I recommend you to do so. When the system comes back, it will be fresh new and clear, without risk of malfunction.

Make sure you have installed really all the updates available up to now by repeatedly running `zypper up` until it says there is nothing to do:

{% include image.html src="/files/2016/10/sw-updates-cmd-05-en.jpg" %}

That is, it is not possible to update the system further, because there are no more updates available: your system is really up to date.

Remember to check for software updates from time to time using the `zypper ref` and `zypper up` commands, as the command line interface does not notify you when there are updates available.

[opensuse]:                 https://www.opensuse.org/
[zypper]:                   https://en.opensuse.org/Portal:Zypper
[spectacle]:                https://www.kde.org/applications/graphics/spectacle/
[ksnapshot]:                https://www.kde.org/applications/graphics/ksnapshot/
[spectacle-vs-ksnapshot]:   https://www.kde.org/announcements/announce-applications-15.12.0.php
