---
date: '2015-12-09 19:00:00 GMT-3'
layout: post
published: true
title: 'What is a LiveCD/DVD/USB?'
image: /files/2015/11/livecd.png
nickname: 'what-is-a-livecd-dvd-usb'
--- 

{% include image.html src="/files/2015/11/livecd.png" %}

A **LiveCD** is a CD medium which brings a ready-to-use operating system. That system does not need to be installed on the computer's hard drive to run, it can run directly from the CD: you insert the disk into the drive, turn the computer on and use the system, which comes ready-to-use. It is very similar to the system that is run from the hard drive, which is the most common kind of installation.

There are also the more recent **LiveDVDs** and **LiveUSBs**, which follow the same idea: they are, respectively, DVDs and USB sticks (or memory cards) which bring ready-to-use operating systems. All the explanations here also apply to both LiveDVDs and LiveUSBs.

The main advantage of a LiveCD is the unconcern with installation: the system comes ready-to-use on the CD, and using it makes no change to your computer's hard disk operating system. When you finish using a LiveCD, turn the computer off and eject the disk. The next time you turn your computer on, its main operating system ([Windows][windows], [Linux][linux] or other) will start as usual, as if it was the last one to be used.

That makes LiveCDs ideal for people who want to **get to know, try or occasionally use Linux**, but are unsure about installing it on their computers (or even do not want to install). It is also possible to use LiveCDs to **install Linux**. Most Linux distributions offer LiveCDs.

The [openSUSE][opensuse] Linux distribution is awesome, but [it does not offer official LiveCDs anymore][no-opensuse-livecd]. Thinking about that, the Linux Kamarada Project built a LiveDVD containing a ready-to-use openSUSE system, which can be downloaded [here][download]. Using an [appropriate software][imagewriter], it can also be installed on a flash drive and used as a LiveUSB.

LiveCDs (and their peers LiveDVDs and LiveUSBs) are good to:

1. **Get to know Linux**: you can occasionally use Linux to get to know it and learn more about it without the commitment to install it on your computer and use it every day;
2. **Try Linux before installing it on your computer**: you can check if everything is going to work fine after installation;
3. **Repair your computer**: since you are not using the operating system installed on your computer, it is easier to perform maintenance actions, such as finding and removing viruses, recovering files deleted by accident, finding hidden or restricted files, resetting the administrator password, testing memory, creating or modifying partitions, solving problems that prevent the computer from turning on, among others (in fact, here I listed many situations in which LiveCDs are useful);
4. **Use a familiar desktop on an unfamiliar machine** (especially if you already use Linux on your computer and have a LiveCD from the distribution you use);
5. **Use the same desktop on many machines**: useful for those who use many computers and do not want to install the software they need on each computer one by one;
6. **Use with some more freedom a restricted computer** (from university or work, for example): while using a LiveCD system, you can install programs and change settings (note that some restrictions may still apply, such as blocked websites);
7. **Safely use a computer which in principle is not safe or lacks privacy**: the LiveCD system does not leave data on the computer (there are even [distributions focused on privacy][tails]);
8. **Show off Linux**: if you enjoy Linux, you can use LiveCDs to show it to people on their own machines without installing.

A LiveUSB has one advantage over a LiveCD or LiveDVD: it stores changes to the system (software installed by the user, for example) on the USB stick, so they remain the next time the system is started from the USB stick. That makes LiveUSBs a little closer to traditional systems installed on hard disks. Note that storing system changes is not possible using a CD or DVD, because there is no way to write changes to those media.

Certainly there are other situations in which a LiveCD can be a very powerful tool. Even if you do not want to know Linux deeply or install it on your computer, I recommend that you always have a LiveCD by near: one day, it can be a good troubleshooter!

## Disadvantages

LiveCDs, as well as LiveDVDs, allow making changes to the system (installing software, for example) because they use part of the RAM memory to store those changes while the system is being used. Therefore, it is not possible to install many software packages. On a LiveUSB, it is possible to install more packages, according to the USB stick capacity.

Also it is important to note that systems run from CDs, DVDs and flash drives are slower than the traditional hard disk systems, because hard disks are faster than those media.

So, in general, Live media (LiveCDs, LiveDVDs and LiveUSBs) are **not recommended for everyday use**. If you want to use Linux every day, consider installing it on your computer or on a virtual machine.

[windows]:              http://www.microsoft.com/en-us/windows
[linux]:                https://www.kernel.org/linux.html
[opensuse]:             https://www.opensuse.org/
[no-opensuse-livecd]:   https://www.linux.com/news/software/applications/865760-opensuse-leap-421-review-the-most-mature-linux-distribution
[download]:             /en/download/
[imagewriter]:          https://en.opensuse.org/SDB:Live_USB_stick
[tails]:                https://tails.boum.org/index.en.html
