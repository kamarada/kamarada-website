---
date: '2019-06-18 22:00:00 GMT-3'
layout: post
published: true
title: 'The safest way to completely erase an entire hard disk'
image: /files/2019/06/wipe-disk.png
nickname: 'wipe-disk'
---

You need to erase an entire HD, be because you are going to sell or give away an old computer, or because you are a journalist or an IT company that needs to protect data from ending up in wrong hands. What you can do to destroy files on that HD in a definitive, unrecoverable way?

<!--more-->

{% include image.html src="/files/2019/06/wipe-disk.png" %}

Truly destroying data is not actually as simple as moving files to the recycle bin (using **Delete**), deleting files (**Shift + Delete**) or formatting filesystems. When you delete or format, the operating system only erases metadata, making that disk area available to write other files. But the actual bits of the files remain and can be recovered using specialized software.

[The most effective way][lifewire] of destroying data is [wiping a disk][archwiki] and that is done by writing new data over every single bit. For instance, you can replace all of the hard disk bits with zeroes — a process known as **zero fill**.

**Warning:** be careful to not zero fill the wrong disk, which may cause permanent data loss!

Using [Linux], run the following command to zero fill a disk (I'm using `/dev/sda` as example, remember to change it as you need):

```
# dd if=/dev/zero of=/dev/sda status=progress
```

For most cases, that should be enough. After that command, recovering files from that disk may require specialized software, specialized hardware, IT experts and it may not be cheap nor guaranteed.

Please note that it is not possible to wipe the disk that holds the operating system while it is running. If you need to wipe that particular disk, the easiest way to get around this issue is to use [Live media][live] or to remove the disk and plug it to another computer to wipe it.

If you are a security freak, you can perform a safer wiping by filling the disc with random bits instead of zeroes:

```
# dd if=/dev/urandom of=/dev/sda status=progress
```

Or you can wipe the disk a few times, instead of wiping it just once:

```
# for i in {1..5}; do dd if=/dev/urandom of=/dev/sda status=progress; done
```

The [Arch Linux wiki][archwiki] discusses alternative ways to securely wipe an entire disk.

If you store very sensitive information on a disk, [Security in a Box][securityinabox], a website about digital security tools and tactics, recommends that you wipe the entire disk then phisically destroy the disc itself (using a hammer, for example).

**Warning:** wear safety goggles and take great caution ​when destroying a hard drive yourself. Never burn a hard drive, put a hard drive in a microwave, or pour acid on a hard drive.

{% include image.html src="/files/2019/06/destroy-a-hard-drive.jpg" caption="Source: [Lifewire](https://www.lifewire.com/how-to-completely-erase-a-hard-drive-2626173)" %}

For instance, [Google shreds old hard drives][google-hds] to prevent leakage of customer data.

## References

- [3 100% Effective Ways to Completely Erase a Hard Drive - Lifewire][lifewire]
- [Securely wipe disk - ArchWiki][archwiki]
- [Destroy sensitive information - Security in a Box][securityinabox]

[lifewire]:         https://www.lifewire.com/how-to-completely-erase-a-hard-drive-2626173
[archwiki]:         https://wiki.archlinux.org/index.php/Securely_wipe_disk
[linux]:            https://www.kernel.org/linux.html
[live]:             {% post_url en/2015-11-25-what-is-a-livecd-dvd-usb %}
[securityinabox]:   https://securityinabox.org/en/guide/destroy-sensitive-information/
[google-hds]:       https://www.networkworld.com/article/2202487/google-crushes--shreds-old-hard-drives-to-prevent-data-leakage.html
